<script setup lang="ts">
import { products, productCategories, type ProductCategory } from '~/data/products'

useHead({
  title: '數位工具箱 | Zeona Studio - AI 行銷工具、提示詞包、模板下載',
  meta: [
    {
      name: 'description',
      content: 'Zeona Studio 數位工具箱：精選 AI 提示詞包、行銷模板、教學資源，幫助你用 AI 提升社群行銷效率。即買即用，永久下載。',
    },
    { property: 'og:title', content: '數位工具箱 | Zeona Studio' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://zeona.vercel.app/toolbox' },
  ],
  link: [{ rel: 'canonical', href: 'https://zeona.vercel.app/toolbox' }],
})

const isVisible = ref(false)
const selectedCategory = ref<ProductCategory>('全部')

const filteredProducts = computed(() => {
  const base = selectedCategory.value === '全部'
    ? products
    : products.filter((p) => p.category === selectedCategory.value)
  // 付費商品由貴到便宜，免費（price===0）排最後
  return [...base].sort((a, b) => {
    if (a.price === 0 && b.price > 0) return 1
    if (a.price > 0 && b.price === 0) return -1
    return b.price - a.price
  })
})

const formatPrice = (price: number) =>
  price === 0 ? '免費' : `NT$${price.toLocaleString()}`

onMounted(() => {
  setTimeout(() => (isVisible.value = true), 80)
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
          <span class="text-[#8782FF] text-sm font-semibold">即買即用・永久下載</span>
        </div>
        <h1 class="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight leading-tight">
          數位工具箱
        </h1>
        <p class="text-gray-500 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
          精選 AI 提示詞包、行銷模板與教學資源，用更少時間做出更好的內容
        </p>
      </div>
    </div>

    <!-- 分類篩選 -->
    <div class="max-w-6xl mx-auto px-6 md:px-12 mb-10">
      <div class="flex gap-2 flex-wrap">
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
          {{ cat }}
          <span
            v-if="cat === '全部'"
            class="ml-1.5 text-xs opacity-70"
          >{{ products.length }}</span>
        </button>
      </div>
    </div>

    <!-- 商品列表 -->
    <div class="max-w-6xl mx-auto px-6 md:px-12">
      <div v-if="filteredProducts.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <NuxtLink
          v-for="(product, index) in filteredProducts"
          :key="product.id"
          :to="`/toolbox/${product.id}`"
          class="group block bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl hover:shadow-[#8782FF]/15 hover:border-[#8782FF]/30 transition-all duration-500"
          :class="[isVisible ? 'opacity-100' : 'opacity-0']"
          :style="{ transitionDelay: `${(index % 3) * 80}ms`, transitionDuration: '600ms' }"
        >
          <!-- 封面圖 -->
          <div class="relative overflow-hidden bg-gray-50">
            <img
              :src="product.coverImage"
              :alt="product.name"
              class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              :loading="index < 6 ? 'eager' : 'lazy'"
              width="400"
              height="300"
            />
            <!-- 徽章 -->
            <div class="absolute top-3 left-3 flex gap-1.5">
              <span
                v-if="product.price === 0 && product.status === 'available'"
                class="px-2.5 py-1 bg-emerald-500 text-white text-xs font-black rounded-full"
              >免費</span>
              <span
                v-else-if="product.status === 'coming-soon'"
                class="px-2.5 py-1 bg-gray-800/80 backdrop-blur-sm text-white text-xs font-bold rounded-full"
              >即將上架</span>
              <span
                v-else-if="product.isNew"
                class="px-2.5 py-1 bg-[#8782FF] text-white text-xs font-bold rounded-full"
              >NEW</span>
              <span
                v-if="product.isBestSeller && product.status !== 'coming-soon'"
                class="px-2.5 py-1 bg-amber-400 text-white text-xs font-bold rounded-full"
              >熱銷</span>
            </div>
            <!-- 分類標籤 -->
            <div class="absolute top-3 right-3">
              <span class="px-2.5 py-1 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium rounded-full">
                {{ product.category }}
              </span>
            </div>
          </div>

          <!-- 內容 -->
          <div class="p-5">
            <h2 class="font-bold text-gray-900 text-base leading-snug mb-2 group-hover:text-[#8782FF] transition-colors line-clamp-2">
              {{ product.name }}
            </h2>
            <p class="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">
              {{ product.description }}
            </p>

            <!-- 標籤 -->
            <div class="flex flex-wrap gap-1 mb-4">
              <span
                v-for="tag in product.tags.slice(0, 3)"
                :key="tag"
                class="px-2 py-0.5 bg-gray-50 text-gray-400 text-xs rounded-full border border-gray-100"
              >#{{ tag }}</span>
            </div>

            <!-- 價格 -->
            <div class="flex items-center justify-between pt-3 border-t border-gray-50">
              <span
                :class="[
                  'text-xl font-black',
                  product.price === 0 ? 'text-emerald-500' : 'text-[#8782FF]',
                ]"
              >{{ formatPrice(product.price) }}</span>
              <div class="flex items-center gap-1.5 text-xs text-gray-400">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
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
        <p class="text-gray-400">此分類暫無商品，敬請期待</p>
      </div>
    </div>

    <!-- CTA -->
    <div class="px-4 md:px-8 mx-4 md:mx-8 mt-20">
      <div class="max-w-6xl mx-auto text-center bg-gradient-to-br from-[#8782FF]/8 to-[#6f6bff]/8 p-12 md:p-16 rounded-[2.5rem]">
        <p class="text-gray-400 text-sm mb-2 font-medium uppercase tracking-widest">還沒找到你要的？</p>
        <h2 class="text-2xl md:text-3xl font-black text-gray-900 mb-4 tracking-tight">
          告訴我你需要什麼工具
        </h2>
        <p class="text-gray-500 mb-8">歡迎來信或 IG 私訊，下一個數位商品可能就是你提議的</p>
        <NuxtLink
          to="/contact"
          class="inline-block bg-[#8782FF] text-white font-bold py-3.5 px-8 rounded-full hover:bg-[#6f6bff] transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
        >
          聯絡我 →
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

