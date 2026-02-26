<script setup lang="ts">
import { portfolios, categories } from '~/data/portfolios'

// SEO 優化 - 作品集頁面
useHead({
  title: '作品集 | Zeona Studio - 網站開發與數位行銷案例展示',
  meta: [
    {
      name: 'description',
      content:
        '瀏覽 Zeona Studio 精選作品集：企業官網設計、品牌形象網站、電商平台開發、數位行銷案例。了解我們如何協助客戶打造高轉換率的數位門面，從規劃到上線的完整案例分享。',
    },
    { property: 'og:title', content: '作品集 | Zeona Studio - 案例展示' },
    { property: 'og:description', content: '精選網站開發與數位行銷案例，展現專業實力。' },
    { property: 'og:url', content: 'https://zeona.vercel.app/works' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: 'https://zeona.vercel.app/og-cover.jpg' },
  ],
  link: [{ rel: 'canonical', href: 'https://zeona.vercel.app/works' }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Zeona Studio 作品集',
        description: '網站開發與數位行銷案例展示',
        url: 'https://zeona.vercel.app/works',
        mainEntity: {
          '@type': 'ItemList',
          name: '精選作品',
          numberOfItems: portfolios.length,
        },
      }),
    },
  ],
})

// 裝置偵測
const { isDesktop } = useDevice()
const route = useRoute()
const router = useRouter()

const isVisible = ref(false)
const activeCards = ref(new Set())
const selectedCategory = ref(
  typeof route.query.category === 'string' && categories.includes(route.query.category) ? route.query.category : '全部',
)
const categoryQuery = computed(() => (selectedCategory.value === '全部' ? {} : { category: selectedCategory.value }))
const setCategory = (category: string) => {
  selectedCategory.value = category
  const nextQuery: Record<string, string | string[] | undefined> = { ...route.query }

  if (category === '全部') {
    delete nextQuery.category
  } else {
    nextQuery.category = category
  }

  router.replace({ query: nextQuery })
}

// 篩選邏輯
const filteredPortfolios = computed(() => {
  if (selectedCategory.value === '全部') {
    return portfolios
  }
  return portfolios.filter((p) => p.category === selectedCategory.value)
})

onMounted(() => {
  // 頁面初次載入動畫
  setTimeout(() => {
    isVisible.value = true
  }, 100)

  // 動畫觸發邏輯：確保篩選時動畫順暢
  watch(
    filteredPortfolios,
    () => {
      activeCards.value.clear()
      nextTick(() => {
        filteredPortfolios.value.forEach((_, i) => {
          setTimeout(() => {
            activeCards.value.add(i)
          }, i * 100)
        })
      })
    },
    { immediate: true },
  )
})
</script>

<template>
  <div class="w-full pt-32 pb-20 font-sans">
    <div class="px-8 md:px-12 mb-10">
      <div class="max-w-6xl mx-auto text-center">
        <h2
          class="font-bold leading-none mb-6 text-center flex flex-col gap-3"
          style="font-size: clamp(32px, 5vw, 52px)"
          :class="[
            'transition-all duration-1000 transform',
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0',
          ]"
        >
          <span class="text-[#6f6bff]">一起來為品牌打造</span>
          <span>數位競爭力</span>
        </h2>
        <h1
          class="text-[#5B5B5B] text-[14px] md:text-[18px] max-w-2xl mx-auto transition-all duration-1000 transform"
          :class="[isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']"
        >
          從網站設計、行銷策略到品牌視覺<br />Zeona Studio 協助企業實現數位轉型，創造真實的商業成果
        </h1>
      </div>
    </div>

    <div class="px-4 md:px-8 mb-16">
      <div
        class="max-w-6xl mx-auto flex flex-wrap justify-center gap-3 transition-all duration-1000 transform"
        :class="[isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']"
      >
        <button
          v-for="category in categories"
          :key="category"
          :class="[
            'px-6 py-2 rounded-full font-semibold transition-all duration-300 text-sm md:text-base',
            selectedCategory === category
              ? 'bg-[#8782FF] text-white shadow-lg'
              : 'bg-white text-gray-700 border border-gray-300 hover:border-[#8782FF] hover:text-[#8782FF]',
          ]"
          @click="setCategory(category)"
        >
          {{ category }}
        </button>
      </div>
    </div>

    <div class="px-8 md:px-12 mb-20">
      <div class="max-w-6xl mx-auto">
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 xl:gap-16">
          <div
            v-for="(portfolio, index) in filteredPortfolios"
            :key="portfolio.id"
            class="portfolio-card group flex flex-col transition-all duration-700 transform"
            :class="[activeCards.has(index) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']"
          >
            <NuxtLink
              :to="{ path: portfolio.link, query: categoryQuery }"
              class="relative mb-8 rounded-xl overflow-hidden bg-gray-100 aspect-[4/3] shadow-sm group-hover:shadow-xl transition-all duration-500"
              :title="`查看 ${portfolio.title} 專案詳情`"
            >
              <img
                :src="portfolio.image"
                :alt="`${portfolio.title} - ${portfolio.shortDesc}`"
                :title="`${portfolio.title} | ${portfolio.category}`"
                class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
                width="600"
                height="450"
                :loading="index < 3 ? 'eager' : 'lazy'"
                :fetchpriority="index < 3 ? 'high' : 'auto'"
              />

              <div
                class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
              >
                <span class="bg-white/90 backdrop-blur-md text-[#8782FF] px-4 py-1 rounded-full text-xs font-bold">
                  {{ portfolio.category }}
                </span>
              </div>
            </NuxtLink>

            <div class="px-2 flex-1 flex flex-col">
              <h3 class="text-2xl font-black text-gray-900 mb-3 transition-colors tracking-tight">
                {{ portfolio.title }}
              </h3>
              <p class="text-gray-500 text-base mb-4 line-clamp-2 leading-relaxed font-light">
                {{ portfolio.shortDesc }}
              </p>

              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  v-for="tech in portfolio.techStack.slice(0, 3)"
                  :key="tech"
                  class="px-3 py-1 bg-gray-50 text-gray-400 text-xs rounded-full border border-gray-100 hover:border-[#8782FF] hover:text-[#8782FF] transition-all"
                  >{{ tech }}</span
                >
                <span v-if="portfolio.techStack.length > 3" class="text-gray-300 text-xs self-center">...</span>
              </div>

              <div v-if="isDesktop" class="mt-2 block overflow-hidden">
                <NuxtLink
                  :to="{ path: portfolio.link, query: categoryQuery }"
                  class="group/link flex items-center justify-end gap-3 h-8"
                >
                  <div class="overflow-hidden">
                    <div
                      class="text-[#8782FF] font-black text-[11px] tracking-[0.2em] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"
                    >
                      VIEW CASE
                    </div>
                  </div>
                  <span
                    class="h-[1px] bg-[#8782FF] transition-all duration-700 ease-in-out"
                    style="width: 0; min-width: 0"
                    :class="['group-hover:flex-grow group-hover:w-full']"
                  ></span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <div v-if="filteredPortfolios.length === 0" class="text-center py-20">
          <p class="text-gray-400 text-lg">目前沒有該分類的作品</p>
        </div>
      </div>
    </div>

    <div class="px-4 md:px-8 py-16 md:py-24 mx-4 md:mx-8">
      <div
        class="mx-auto text-center bg-gradient-to-br from-[#8782FF]/10 to-[#6f6bff]/10 p-12 md:p-20 rounded-[3rem] shadow-sm"
      >
        <h2
          class="font-black leading-tight mb-6 text-[32px] md:text-[48px] text-gray-900 tracking-tighter"
          :class="[
            'transition-all duration-1000 transform',
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0',
          ]"
        >
          準備好開始你的<span class="text-[#8782FF]">數位之旅</span>了嗎？
        </h2>
        <p
          class="text-gray-500 text-lg md:text-xl mb-10 transition-all duration-1000 transform"
          :class="[isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']"
        >
          Zeona Studio 已幫助多個品牌實現數位轉型。讓我一起為你的品牌創造成果。
        </p>
        <NuxtLink
          to="/Contact"
          class="inline-block bg-[#8782FF] text-white font-bold py-4 px-10 rounded-full hover:bg-[#6f6bff] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 active:scale-95"
        >
          預約免費諮詢
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
