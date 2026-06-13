<script setup lang="ts">
import { products, productCategories, type ProductCategory } from '~/data/products'

const { t } = useI18n()
const localePath = useLocalePath()
const { catLabel, pName, pDesc, pTags, pCoverImage } = useLocalizedContent()

useHead(() => ({
  title: t('toolbox.metaTitle'),
  meta: [
    { name: 'description', content: t('toolbox.metaDesc') },
    { property: 'og:title', content: t('toolbox.metaTitle') },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://zeona.vercel.app/toolbox' },
  ],
  link: [{ rel: 'canonical', href: 'https://zeona.vercel.app/toolbox' }],
}))

const isVisible = ref(false)
const selectedCategory = ref<ProductCategory>('全部')

// 行動版可水平捲動的分類標籤（與部落格一致）
const mobileTabScrollerRef = ref<HTMLElement | null>(null)
const mobileCanScrollLeft = ref(false)
const mobileCanScrollRight = ref(false)

const updateMobileScroll = () => {
  const el = mobileTabScrollerRef.value
  if (!el) return
  mobileCanScrollLeft.value = el.scrollLeft > 2
  mobileCanScrollRight.value = el.scrollLeft < el.scrollWidth - el.clientWidth - 2
}

const scrollMobile = (direction: 'left' | 'right') => {
  const el = mobileTabScrollerRef.value
  if (!el) return
  el.scrollBy({ left: direction === 'left' ? -160 : 160, behavior: 'smooth' })
}

const filteredProducts = computed(() => {
  if (selectedCategory.value === '全部') return products
  return products.filter((p) => p.category === selectedCategory.value)
})

const formatPrice = (price: number) => (price === 0 ? t('toolbox.free') : `NT$${price.toLocaleString()}`)

onMounted(() => {
  setTimeout(() => (isVisible.value = true), 80)
  nextTick(updateMobileScroll)
  window.addEventListener('resize', updateMobileScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateMobileScroll)
})
</script>

<template>
  <div class="w-full pt-28 md:pt-32 pb-20 font-sans bg-white">
    <!-- Hero -->
    <div class="px-6 md:px-12 mb-12">
      <div
        class="max-w-3xl mx-auto text-center transition-all duration-700"
        :class="[isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0']"
      >
        <div class="inline-flex items-center gap-2 px-4 py-1.5 bg-[#8782FF]/10 rounded-full mb-5">
          <span class="w-2 h-2 rounded-full bg-[#8782FF] animate-pulse"></span>
          <span class="text-[#8782FF] text-sm font-semibold">{{ t('toolbox.badge') }}</span>
        </div>
        <h1 class="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight leading-tight">
          {{ t('toolbox.title') }}
        </h1>
        <p class="text-gray-500 text-base md:text-lg leading-relaxed mx-auto">
          {{ t('toolbox.subtitle') }}
        </p>
      </div>
    </div>

    <!-- 分類篩選 -->
    <div class="max-w-6xl mx-auto px-6 md:px-12 mb-10">
      <!-- 行動版：可水平捲動 + 左右箭頭 -->
      <div class="lg:hidden relative">
        <!-- 左遮罩 + 箭頭 -->
        <div
          v-show="mobileCanScrollLeft"
          class="absolute left-0 top-0 bottom-0 z-10 flex items-center pointer-events-none"
        >
          <div class="h-full w-12 bg-gradient-to-r from-white to-transparent"></div>
          <button
            class="absolute left-0 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center pointer-events-auto hover:bg-gray-50 transition-colors"
            aria-label="往左捲動分類"
            @click="scrollMobile('left')"
          >
            <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>
        <!-- 標籤捲動容器 -->
        <div
          ref="mobileTabScrollerRef"
          class="flex gap-2 overflow-x-auto scrollbar-hide scroll-smooth px-1 py-1"
          @scroll="updateMobileScroll"
        >
          <button
            v-for="cat in productCategories"
            :key="cat"
            :class="[
              'flex-shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap',
              selectedCategory === cat
                ? 'bg-[#8782FF] text-white shadow-md shadow-[#8782FF]/30'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200',
            ]"
            @click="selectedCategory = cat"
          >
            {{ catLabel(cat) }}
            <span v-if="cat === '全部'" class="ml-1.5 text-xs opacity-70">{{ products.length }}</span>
          </button>
        </div>
        <!-- 右遮罩 + 箭頭 -->
        <div
          v-show="mobileCanScrollRight"
          class="absolute right-0 top-0 bottom-0 z-10 flex items-center pointer-events-none"
        >
          <div class="h-full w-12 bg-gradient-to-l from-white to-transparent"></div>
          <button
            class="absolute right-0 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center pointer-events-auto hover:bg-gray-50 transition-colors"
            aria-label="往右捲動分類"
            @click="scrollMobile('right')"
          >
            <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <!-- 桌面版：維持換行排列 -->
      <div class="hidden lg:flex gap-2 flex-wrap">
        <button
          v-for="cat in productCategories"
          :key="cat"
          :class="[
            'px-5 py-2 rounded-full text-sm font-medium transition-all duration-300',
            selectedCategory === cat
              ? 'bg-[#8782FF] text-white shadow-md shadow-[#8782FF]/30'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200',
          ]"
          @click="selectedCategory = cat"
        >
          {{ catLabel(cat) }}
          <span v-if="cat === '全部'" class="ml-1.5 text-xs opacity-70">{{ products.length }}</span>
        </button>
      </div>
    </div>

    <!-- 商品列表 -->
    <div class="max-w-6xl mx-auto px-6 md:px-12">
      <div v-if="filteredProducts.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <NuxtLink
          v-for="(product, index) in filteredProducts"
          :key="product.id"
          :to="localePath(`/toolbox/${product.id}`)"
          class="group block bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl hover:shadow-[#8782FF]/15 hover:border-[#8782FF]/30 transition-all duration-500"
          :class="[isVisible ? 'opacity-100' : 'opacity-0']"
          :style="{ transitionDelay: `${(index % 3) * 80}ms`, transitionDuration: '600ms' }"
        >
          <!-- 封面圖 -->
          <div class="relative overflow-hidden bg-gray-50">
            <img
              :src="pCoverImage(product)"
              :alt="pName(product)"
              class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              :loading="index < 6 ? 'eager' : 'lazy'"
              width="400"
              height="300"
            />
            <!-- 左上徽章（coming-soon 限定） -->
            <div class="absolute top-3 left-3 flex gap-1.5">
              <span
                v-if="product.status === 'coming-soon'"
                class="px-2.5 py-1 bg-gray-800/80 backdrop-blur-sm text-white text-xs font-bold rounded-full"
                >{{ t('toolbox.comingSoon') }}</span
              >
            </div>
            <!-- 右上：分類標籤 + NEW / 熱銷徽章 -->
            <div class="absolute top-3 right-3 flex flex-col items-end gap-1.5">
              <span class="px-2.5 py-1 bg-[#8782FF] text-white text-xs font-medium rounded-full">
                {{ catLabel(product.category) }}
              </span>
              <span
                v-if="product.isNew && !product.isBestSeller && product.status !== 'coming-soon'"
                class="px-2.5 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full"
                >NEW</span
              >
              <span
                v-if="product.isBestSeller && product.status !== 'coming-soon'"
                class="px-2.5 py-1 bg-amber-400 text-white text-xs font-bold rounded-full"
                >{{ t('toolbox.bestSeller') }}</span
              >
            </div>
          </div>

          <!-- 內容 -->
          <div class="p-5">
            <h2
              class="font-bold text-gray-900 text-base leading-snug mb-2 group-hover:text-[#8782FF] transition-colors line-clamp-2"
            >
              {{ pName(product) }}
            </h2>
            <p class="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">
              {{ pDesc(product) }}
            </p>

            <!-- 標籤 -->
            <div class="flex flex-wrap gap-1 mb-4">
              <span
                v-for="tag in pTags(product).slice(0, 3)"
                :key="tag"
                class="px-2 py-0.5 bg-gray-50 text-gray-400 text-xs rounded-full border border-gray-100"
                >#{{ tag }}</span
              >
            </div>

            <!-- 價格 -->
            <div class="flex items-center justify-between pt-3 border-t border-gray-50">
              <span :class="['text-xl font-black', product.price === 0 ? 'text-emerald-500' : 'text-[#8782FF]']">{{
                formatPrice(product.price)
              }}</span>
              <div class="flex items-center gap-1.5 text-xs text-gray-400">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                {{ product.fileType }}
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>

      <!-- 空結果 -->
      <div v-else class="text-center py-20">
        <div class="text-5xl mb-4">📦</div>
        <p class="text-gray-400">{{ t('toolbox.empty') }}</p>
      </div>
    </div>

    <!-- CTA -->
    <div class="px-4 md:px-8 mx-4 md:mx-8 mt-20">
      <div
        class="max-w-6xl mx-auto text-center bg-gradient-to-br from-[#8782FF]/8 to-[#6f6bff]/8 p-12 md:p-16 rounded-[2.5rem]"
      >
        <p class="text-gray-400 text-sm mb-2 font-medium uppercase tracking-widest">{{ t('toolbox.ctaKicker') }}</p>
        <h2 class="text-2xl md:text-3xl font-black text-gray-900 mb-4 tracking-tight">
          {{ t('toolbox.ctaTitle') }}
        </h2>
        <p class="text-gray-500 mb-8">{{ t('toolbox.ctaSub') }}</p>
        <NuxtLink
          :to="localePath('/contact')"
          class="inline-block bg-[#8782FF] text-white font-bold py-3.5 px-8 rounded-full hover:bg-[#6f6bff] transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
        >
          {{ t('toolbox.ctaBtn') }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 隱藏捲動條但保留水平捲動功能（分類標籤用） */
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
