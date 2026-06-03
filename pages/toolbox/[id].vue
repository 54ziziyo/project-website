<script setup lang="ts">
import { products, type Product } from '~/data/products'

const route = useRoute()
const product = computed<Product | undefined>(() =>
  products.find((p) => p.id === route.params.id),
)

// 404 redirect if not found
if (!product.value) {
  throw createError({ statusCode: 404, message: '找不到此商品' })
}

const relatedProducts = computed(() =>
  products
    .filter((p) => p.id !== product.value?.id && p.category === product.value?.category)
    .slice(0, 3),
)

useHead(() => {
  if (!product.value) return {}
  return {
    title: `${product.value.name} | 數位工具箱 | Zeona Studio`,
    meta: [
      { name: 'description', content: product.value.description },
      { property: 'og:title', content: product.value.name },
      { property: 'og:description', content: product.value.description },
      { property: 'og:image', content: product.value.coverImage },
      { property: 'og:type', content: 'product' },
    ],
  }
})

const formatPrice = (price: number) =>
  price === 0 ? '免費' : `NT$${price.toLocaleString()}`
const isVisible = ref(false)
onMounted(() => setTimeout(() => (isVisible.value = true), 80))
</script>

<template>
  <div class="w-full pt-24 md:pt-32 pb-20 font-sans">
    <!-- 返回按鈕 -->
    <div class="px-6 md:px-12 mb-8 max-w-6xl mx-auto">
      <NuxtLink
        to="/toolbox"
        class="inline-flex items-center text-gray-500 hover:text-[#8782FF] transition-colors text-sm"
      >
        <svg class="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        返回工具箱
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
              :src="product.coverImage"
              :alt="product.name"
              class="w-full h-full object-cover"
              width="800"
              height="600"
              fetchpriority="high"
            />
          </div>
          <!-- 標籤 -->
          <div class="flex flex-wrap gap-2 mt-4">
            <span
              v-for="tag in product.tags"
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
            >熱銷</span>
            <span class="px-3 py-1 bg-[#8782FF]/10 text-[#8782FF] text-xs font-semibold rounded-full">
              {{ product.category }}
            </span>
          </div>

          <!-- 商品名稱 -->
          <h1 class="text-2xl md:text-3xl font-black text-gray-900 mb-3 leading-tight tracking-tight">
            {{ product.name }}
          </h1>

          <!-- 簡介 -->
          <p class="text-gray-500 text-base leading-relaxed mb-6">
            {{ product.description }}
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
              省 NT${{ (product.originalPrice - product.price).toLocaleString() }}
            </span>
          </div>

          <!-- 購買按鈕 -->
          <template v-if="product.price === 0 && product.status === 'available'">
            <a
              :href="product.purchaseUrl"
              class="flex items-center justify-center gap-2 w-full py-4 bg-emerald-500 text-white font-bold text-lg rounded-2xl hover:bg-emerald-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 active:scale-95 mb-3"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              免費下載
            </a>
            <p class="text-center text-gray-400 text-xs mb-6">完全免費，無需付款</p>
          </template>
          <template v-else-if="product.status === 'coming-soon'">
            <div class="flex items-center justify-center gap-2 w-full py-4 bg-gray-100 text-gray-400 font-bold text-lg rounded-2xl cursor-not-allowed mb-3">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              即將上架，敬請期待
            </div>
            <p class="text-center text-gray-400 text-xs mb-6">
              上架通知？歡迎 <NuxtLink to="/contact" class="text-[#8782FF] underline">聯絡我</NuxtLink> 登記優先通知
            </p>
          </template>
          <template v-else>
            <a
              :href="product.purchaseUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center gap-2 w-full py-4 bg-[#8782FF] text-white font-bold text-lg rounded-2xl hover:bg-[#6f6bff] transition-all duration-300 hover:shadow-xl hover:shadow-[#8782FF]/30 hover:-translate-y-0.5 active:scale-95 mb-3"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              立即購買
            </a>
            <p class="text-center text-gray-400 text-xs mb-6">
              透過 Gumroad 安全付款・購買後即可永久下載
            </p>
          </template>

          <!-- 包含內容 -->
          <div class="bg-gray-50 rounded-2xl p-5">
            <h3 class="font-bold text-gray-800 mb-3 text-sm">📦 包含內容</h3>
            <ul class="space-y-2">
              <li
                v-for="feature in product.features"
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
              格式：{{ product.fileType }}
            </div>
            <div class="flex items-center gap-1.5">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              購買後永久下載
            </div>
          </div>
        </div>
      </div>

      <!-- 詳細說明 -->
      <div class="mb-16">
        <div class="max-w-3xl">
          <h2 class="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span class="w-1 h-6 bg-[#8782FF] rounded-full"></span>
            商品詳情
          </h2>
          <div class="prose prose-gray max-w-none">
            <div
              class="text-gray-600 leading-relaxed whitespace-pre-line text-base"
            >{{ product.fullDescription }}</div>
          </div>
        </div>
      </div>

      <!-- 保障說明 -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
        <div
          v-for="item in [
            { icon: '🔒', title: '安全付款', desc: 'Gumroad 加密付款，支援信用卡' },
            { icon: '⚡', title: '即買即得', desc: '付款完成後立即收到下載連結' },
            { icon: '♾️', title: '永久使用', desc: '一次購買，檔案永久保存' },
          ]"
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
          你可能也喜歡
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <NuxtLink
            v-for="related in relatedProducts"
            :key="related.id"
            :to="`/toolbox/${related.id}`"
            class="group block bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-[#8782FF]/30 hover:shadow-lg transition-all duration-300"
          >
            <div class="aspect-[4/3] overflow-hidden bg-gray-50">
              <img
                :src="related.coverImage"
                :alt="related.name"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                width="300"
                height="225"
                loading="lazy"
              />
            </div>
            <div class="p-4">
              <p class="text-xs text-[#8782FF] font-semibold mb-1">{{ related.category }}</p>
              <h3 class="font-bold text-gray-900 text-sm line-clamp-2 group-hover:text-[#8782FF] transition-colors mb-2">
                {{ related.name }}
              </h3>
              <span class="text-[#8782FF] font-black text-base">{{ formatPrice(related.price) }}</span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
