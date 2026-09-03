<script setup lang="ts">
import { products, type Product } from '~/data/products'

const route = useRoute()
const { t, locale } = useI18n()
const localePath = useLocalePath()
const { catLabel, pName, pDesc, pTags, pFileType, pFullDesc, pFeatures, pTrustBadges, pCoverImage } = useLocalizedContent()
const { getKeyForKit } = useLicenseStore()

// 「已購買，前往商品」：用本地記住的序號直接重新解鎖並跳到該商品內容；沒記住過就去解鎖頁輸入。
// 用同步開新分頁 + 之後設定網址，避免 await 後 window.open 被擋；解鎖 cookie 與新分頁同源共用。
async function goToMyProduct(kitSlug: string) {
  const unlockHref = localePath({ path: '/kit/unlock', query: { kit: kitSlug } })
  const key = getKeyForKit(kitSlug)
  if (!key) {
    window.open(unlockHref, '_blank')
    return
  }
  const w = window.open('', '_blank')
  try {
    const r = await $fetch<{ type: string; next: string | null; nextEn: string | null; url: string | null }>(
      '/api/unlock-kit',
      { method: 'POST', body: { license_key: key, kit: kitSlug } },
    )
    const target = r.type === 'link' && r.url ? r.url : (locale.value === 'en' && r.nextEn) || r.next || '/'
    if (w) w.location.href = target
    else window.location.href = target
  } catch {
    // 序號失效/已退款等 → 退回解鎖頁（帶商品提示）
    if (w) w.location.href = unlockHref
    else window.location.href = unlockHref
  }
}
const product = computed<Product | undefined>(() =>
  products.find((p) => p.id === route.params.id),
)

// 404 redirect if not found
if (!product.value) {
  throw createError({ statusCode: 404, message: t('toolbox.detail.notFound') })
}

const relatedProducts = computed(() =>
  products
    .filter((p) => p.id !== product.value?.id && p.category === product.value?.category)
    .slice(0, 3),
)

useHead(() => {
  if (!product.value) return {}
  const canonicalUrl = `https://www.zeona.co/toolbox/${product.value.id}`
  return {
    title: `${pName(product.value)} | Zeona Studio`,
    meta: [
      { name: 'description', content: pDesc(product.value) },
      { property: 'og:title', content: pName(product.value) },
      { property: 'og:description', content: pDesc(product.value) },
      { property: 'og:image', content: pCoverImage(product.value) },
      { property: 'og:type', content: 'product' },
      { property: 'og:url', content: canonicalUrl },
    ],
    link: [{ rel: 'canonical', href: canonicalUrl }],
  }
})

// Product Schema (JSON-LD) - 給AI/搜尋引擎讀商品資訊用
useHead(() => {
  if (!product.value) return {}
  const p = product.value
  return {
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: pName(p),
          description: pDesc(p),
          image: pCoverImage(p),
          category: p.category,
          brand: { '@type': 'Brand', name: 'Zeona Studio' },
          offers: {
            '@type': 'Offer',
            url: `https://www.zeona.co/toolbox/${p.id}`,
            priceCurrency: 'TWD',
            price: p.price,
            availability:
              p.status === 'available' ? 'https://schema.org/InStock' : 'https://schema.org/PreOrder',
          },
        }),
      },
    ],
  }
})

const formatPrice = (price: number) =>
  price === 0 ? t('toolbox.free') : `NT$${price.toLocaleString()}`
const isVisible = ref(false)
onMounted(() => setTimeout(() => (isVisible.value = true), 80))

// 免費品若標記 emailGate，改成先跳彈窗收email，送出後才給 purchaseUrl（而不是直接外連下載）
const emailGateOpen = ref(false)

// 詳情頁「保障說明」三格：優先用商品自訂的 trustBadges（依實際交付方式客製化文案），
// 沒填則 fallback 回原本的Gumroad付款文案（僅適用真的透過Gumroad付費的商品）。
const defaultTrustBadges = [
  { icon: '🔒', title: t('toolbox.detail.secureTitle'), desc: t('toolbox.detail.secureDesc') },
  { icon: '⚡', title: t('toolbox.detail.instantTitle'), desc: t('toolbox.detail.instantDesc') },
  { icon: '♾️', title: t('toolbox.detail.foreverTitle'), desc: t('toolbox.detail.foreverDesc') },
]
const trustBadgeItems = computed(() => (product.value ? pTrustBadges(product.value) : undefined) ?? defaultTrustBadges)
</script>

<template>
  <div class="w-full pt-24 md:pt-32 pb-20 font-sans">
    <!-- 返回按鈕 -->
    <div class="px-6 md:px-12 mb-8 max-w-6xl mx-auto">
      <NuxtLink
        :to="localePath('/toolbox')"
        class="inline-flex items-center text-gray-500 hover:text-[#8782FF] transition-colors text-sm"
      >
        <svg class="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        {{ t('toolbox.detail.back') }}
      </NuxtLink>
    </div>

    <div v-if="product" class="max-w-6xl mx-auto px-6 md:px-12">
      <!-- 主要內容：左圖右資訊 -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-16">
        <!-- 左：封面圖 -->
        <div
          class="transition-all duration-700"
          :class="[isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0']"
        >
          <div class="rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-gray-100">
            <img
              :src="pCoverImage(product)"
              :alt="pName(product)"
              class="w-full h-full object-cover"
              width="800"
              height="600"
              fetchpriority="high"
            />
          </div>
          <!-- 標籤 -->
          <div class="flex flex-wrap gap-2 mt-4">
            <span
              v-for="tag in pTags(product)"
              :key="tag"
              class="px-3 py-1 bg-gray-50 text-gray-400 text-xs rounded-full border border-gray-100"
            >#{{ tag }}</span>
          </div>
        </div>

        <!-- 右：商品資訊 -->
        <div
          class="transition-all duration-700 delay-150"
          :class="[isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0']"
        >
          <!-- 徽章 -->
          <div class="flex gap-2 mb-4">
            <span
              v-if="product.isNew"
              class="px-3 py-1 bg-[#8782FF] text-white text-xs font-bold rounded-full"
            >NEW</span>
            <span
              v-if="product.isBestSeller"
              class="px-3 py-1 bg-amber-400 text-white text-xs font-bold rounded-full"
            >{{ t('toolbox.bestSeller') }}</span>
            <span class="px-3 py-1 bg-[#8782FF]/10 text-[#8782FF] text-xs font-semibold rounded-full">
              {{ catLabel(product.category) }}
            </span>
          </div>

          <!-- 商品名稱 -->
          <h1 class="text-2xl md:text-3xl font-black text-gray-900 mb-3 leading-tight tracking-tight">
            {{ pName(product) }}
          </h1>

          <!-- 簡介 -->
          <p class="text-gray-500 text-base leading-relaxed mb-6">
            {{ pDesc(product) }}
          </p>

          <!-- 價格區 -->
          <div class="flex items-baseline gap-3 mb-6">
            <span
              :class="[
                'text-4xl font-black',
                product.price === 0 ? 'text-emerald-500' : 'text-[#8782FF]',
              ]"
            >{{ formatPrice(product.price) }}</span>
            <span v-if="product.originalPrice" class="text-lg text-gray-300 line-through">
              NT${{ product.originalPrice.toLocaleString() }}
            </span>
            <span v-if="product.originalPrice" class="px-2 py-0.5 bg-red-50 text-red-500 text-xs font-bold rounded-full">
              {{ t('toolbox.detail.save', { amount: (product.originalPrice - product.price).toLocaleString() }) }}
            </span>
          </div>

          <!-- 購買按鈕 -->
          <template v-if="product.price === 0 && product.status === 'available' && product.emailGate">
            <button
              type="button"
              class="flex items-center justify-center gap-2 w-full py-4 bg-emerald-500 text-white font-bold text-lg rounded-2xl hover:bg-emerald-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 active:scale-95 mb-3 cursor-pointer"
              @click="emailGateOpen = true"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              {{ t('toolbox.detail.freeDownload') }}
            </button>
            <p class="text-center text-gray-400 text-xs mb-6">{{ t('toolbox.detail.emailGateNote') }}</p>
          </template>
          <template v-else-if="product.price === 0 && product.status === 'available'">
            <a
              :href="product.purchaseUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center gap-2 w-full py-4 bg-emerald-500 text-white font-bold text-lg rounded-2xl hover:bg-emerald-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 active:scale-95 mb-3"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              {{ t('toolbox.detail.freeDownload') }}
            </a>
            <p class="text-center text-gray-400 text-xs mb-6">{{ t('toolbox.detail.freeNote') }}</p>
          </template>
          <template v-else-if="product.status === 'coming-soon'">
            <div class="flex items-center justify-center gap-2 w-full py-4 bg-gray-100 text-gray-400 font-bold text-lg rounded-2xl cursor-not-allowed mb-3">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {{ t('toolbox.detail.comingSoon') }}
            </div>
            <p class="text-center text-gray-400 text-xs mb-6">
              {{ t('toolbox.detail.notifyPre') }} <NuxtLink :to="localePath('/contact')" class="text-[#8782FF] underline">{{ t('toolbox.detail.notifyLink') }}</NuxtLink> {{ t('toolbox.detail.notifyPost') }}
            </p>
          </template>
          <template v-else>
            <a
              :href="product.purchaseUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center gap-2 w-full py-3 bg-[#8782FF] text-white font-bold text-lg rounded-2xl hover:bg-[#6f6bff] transition-all duration-300 hover:shadow-xl hover:shadow-[#8782FF]/30 hover:-translate-y-0.5 active:scale-95 mb-3"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {{ t('toolbox.detail.buy') }}
            </a>
            <button
              v-if="product.kitSlug"
              type="button"
              class="flex items-center justify-center gap-2 w-full py-3 border-2 border-[#8782FF] text-[#8782FF] font-bold rounded-2xl hover:bg-[#8782FF]/5 transition-all active:scale-95 mb-3"
              @click="goToMyProduct(product.kitSlug)"
            >
              ✓ {{ t('toolbox.detail.alreadyBought') }}
            </button>
            <p class="text-center text-gray-400 text-xs mb-6">
              {{ t('toolbox.detail.buyNote') }}
            </p>
          </template>

          <!-- 包含內容 -->
          <div class="bg-gray-50 rounded-2xl p-5">
            <h3 class="font-bold text-gray-800 mb-3 text-sm">{{ t('toolbox.detail.includes') }}</h3>
            <ul class="space-y-2">
              <li
                v-for="feature in pFeatures(product)"
                :key="feature"
                class="flex items-start gap-2.5 text-sm text-gray-600"
              >
                <svg class="w-4 h-4 text-[#8782FF] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                </svg>
                {{ feature }}
              </li>
            </ul>
          </div>

          <!-- 檔案資訊 -->
          <div class="flex items-center gap-4 mt-4 text-sm text-gray-400">
            <div class="flex items-center gap-1.5">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {{ t('toolbox.detail.formatLabel', { type: pFileType(product) }) }}
            </div>
            <div class="flex items-center gap-1.5">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              {{ t('toolbox.detail.lifetime') }}
            </div>
          </div>
        </div>
      </div>

      <!-- 詳細說明 -->
      <div class="mb-16">
        <div class="max-w-3xl">
          <h2 class="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span class="w-1 h-6 bg-[#8782FF] rounded-full"></span>
            {{ t('toolbox.detail.details') }}
          </h2>
          <div class="prose prose-gray max-w-none">
            <div
              class="text-gray-600 leading-relaxed whitespace-pre-line text-base"
            >{{ pFullDesc(product) }}</div>
          </div>
        </div>
      </div>

      <!-- 保障說明：內容依商品實際交付方式客製化（見 data/products.ts 的 trustBadges），coming-soon商品還不能購買所以不顯示 -->
      <div v-if="product.status === 'available'" class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
        <div
          v-for="item in trustBadgeItems"
          :key="item.title"
          class="flex items-start gap-3 bg-gray-50 rounded-xl p-4"
        >
          <span class="text-2xl">{{ item.icon }}</span>
          <div>
            <p class="font-semibold text-gray-800 text-sm">{{ item.title }}</p>
            <p class="text-gray-400 text-xs mt-0.5">{{ item.desc }}</p>
          </div>
        </div>
      </div>

      <!-- 相關商品 -->
      <div v-if="relatedProducts.length > 0">
        <h2 class="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <span class="w-1 h-6 bg-[#8782FF] rounded-full"></span>
          {{ t('toolbox.detail.related') }}
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <NuxtLink
            v-for="related in relatedProducts"
            :key="related.id"
            :to="localePath(`/toolbox/${related.id}`)"
            class="group block bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-[#8782FF]/30 hover:shadow-lg transition-all duration-300"
          >
            <div class="aspect-[4/3] overflow-hidden bg-gray-50">
              <img
                :src="related.coverImage"
                :alt="pName(related)"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                width="300"
                height="225"
                loading="lazy"
              />
            </div>
            <div class="p-4">
              <p class="text-xs text-[#8782FF] font-semibold mb-1">{{ catLabel(related.category) }}</p>
              <h3 class="font-bold text-gray-900 text-sm line-clamp-2 group-hover:text-[#8782FF] transition-colors mb-2">
                {{ pName(related) }}
              </h3>
              <span class="text-[#8782FF] font-black text-base">{{ formatPrice(related.price) }}</span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>

    <EmailGateModal
      v-if="product"
      :key="product.id"
      v-model:open="emailGateOpen"
      :title="pName(product)"
      :description="pDesc(product)"
      :destination-url="product.purchaseUrl"
      :tracking-label="`免費工具箱：${pName(product)}`"
      :storage-key="`toolbox-gate-${product.id}`"
      :cta-label="t('toolbox.detail.freeDownload')"
      :success-label="t('toolbox.detail.emailGateSuccess')"
    />
  </div>
</template>
