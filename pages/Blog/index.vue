<script setup lang="ts">
import { blogPosts, blogCategories, getPostsByCategory, searchPosts, type BlogPost } from '~/data/blogs'

const { isDesktop } = useDevice()

const route = useRoute()

const router = useRouter()

// SEO

useHead({
  title: '部落格 | Zeona Studio - AI、行銷與網站開發教學',

  meta: [
    {
      name: 'description',

      content: '探索 Zeona Studio 部落格，獲取 AI 人工智慧、數位行銷策略、網站開發技術的最新教學與趨勢分析。',
    },

    {
      name: 'keywords',

      content: 'AI教學, 數位行銷, 網站開發, SEO優化, 部落格, Zeona Studio',
    },

    { property: 'og:title', content: '部落格 | Zeona Studio - AI、行銷與網站開發教學' },

    {
      property: 'og:description',

      content: '探索 AI、數位行銷與網站開發的最新教學文章，助你掌握數位趨勢。',
    },

    { property: 'og:type', content: 'blog' },

    { property: 'og:url', content: 'https://zeona.vercel.app/blog' },

    { property: 'og:image', content: 'https://zeona.vercel.app/og-cover.jpg' },
  ],

  link: [{ rel: 'canonical', href: 'https://zeona.vercel.app/blog' }],
})

// 動畫控制

const isVisible = ref(false)

const activeCards = ref(new Set<number>())

// 狀態

const searchQuery = ref((route.query.q as string) || '')

const selectedCategory = ref(
  typeof route.query.category === 'string' &&
    blogCategories.includes(route.query.category as (typeof blogCategories)[number])
    ? route.query.category
    : '全部',
)

const currentPage = ref(Number(route.query.page) || 1)

const postsPerPage = 6

// 篩選邏輯

const filteredPosts = computed<BlogPost[]>(() => {
  let result: BlogPost[]

  if (searchQuery.value.trim()) {
    result = searchPosts(searchQuery.value.trim())
  } else {
    result = getPostsByCategory(selectedCategory.value)
  }

  return result
})

// 分頁

const totalPages = computed(() => Math.ceil(filteredPosts.value.length / postsPerPage))

const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * postsPerPage

  return filteredPosts.value.slice(start, start + postsPerPage)
})

// 最新文章

const latestPosts = computed(() => {
  return [...blogPosts]

    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())

    .slice(0, 3)
})

// URL 同步

const updateQuery = () => {
  const query: Record<string, string> = {}

  if (searchQuery.value.trim()) query.q = searchQuery.value.trim()

  if (selectedCategory.value !== '全部') query.category = selectedCategory.value

  if (currentPage.value > 1) query.page = String(currentPage.value)

  router.replace({ query })
}

const setCategory = (category: string) => {
  selectedCategory.value = category

  searchQuery.value = ''

  currentPage.value = 1

  updateQuery()
}

const handleSearch = () => {
  currentPage.value = 1

  if (searchQuery.value.trim()) {
    selectedCategory.value = '全部'
  }

  updateQuery()
}

const clearSearch = () => {
  searchQuery.value = ''

  handleSearch()
}

const goToPage = (page: number) => {
  if (page < 1 || page > totalPages.value) return

  currentPage.value = page

  updateQuery()

  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// 格式化日期

const formatDate = (dateStr: string) => {
  const d = new Date(dateStr)

  return `${d.getFullYear()} 年 ${d.getMonth() + 1} 月 ${d.getDate()} 日`
}

// 動畫

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)

  watch(
    paginatedPosts,

    () => {
      activeCards.value.clear()

      nextTick(() => {
        paginatedPosts.value.forEach((_, i) => {
          setTimeout(() => {
            activeCards.value.add(i)
          }, i * 80)
        })
      })
    },

    { immediate: true },
  )
})
</script>

<template>
  <div class="w-full pt-32 pb-20 font-sans">
    <!-- Hero Section -->

    <div class="px-8 md:px-12 mb-10">
      <div class="max-w-6xl mx-auto text-center">
        <h1
          class="font-bold leading-none mb-6 text-center flex flex-col gap-3"
          style="font-size: clamp(32px, 5vw, 52px)"
          :class="[
            'transition-all duration-1000 transform',

            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0',
          ]"
        >
          <span class="text-[#6f6bff]">數位知識</span>

          <span>部落格</span>
        </h1>

        <p
          class="text-[#5B5B5B] text-[14px] md:text-[18px] max-w-2xl mx-auto transition-all duration-1000 transform"
          :class="[isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']"
        >
          從 AI 技術、行銷策略到網站開發，Zeona Studio 為你帶來最實用的數位知識與趨勢洞察。
        </p>
      </div>
    </div>

    <!-- 搜尋列 -->

    <div class="px-4 md:px-8 mb-8">
      <div
        class="max-w-2xl mx-auto transition-all duration-1000 transform"
        :class="[isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']"
      >
        <div class="relative">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="搜尋文章標題、關鍵字..."
            class="w-full pl-12 pr-4 py-3.5 rounded-full border border-gray-200 bg-white text-gray-800 text-sm focus:outline-none focus:border-[#8782FF] focus:ring-2 focus:ring-[#8782FF]/20 transition-all duration-300 shadow-sm"
            @keyup.enter="handleSearch"
          />

          <svg
            class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>

          <button
            v-if="searchQuery"
            class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            @click="clearSearch"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- 分類按鈕 -->

    <div class="px-4 md:px-8 mb-12">
      <div
        class="max-w-6xl mx-auto flex flex-wrap justify-center gap-3 transition-all duration-1000 transform"
        :class="[isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']"
      >
        <button
          v-for="category in blogCategories"
          :key="category"
          :class="[
            'px-6 py-2 rounded-full font-semibold transition-all duration-300 text-sm md:text-base',

            selectedCategory === category && !searchQuery.trim()
              ? 'bg-[#8782FF] text-white shadow-lg'
              : 'bg-white text-gray-700 border border-gray-300 hover:border-[#8782FF] hover:text-[#8782FF]',
          ]"
          @click="setCategory(category)"
        >
          {{ category }}
        </button>
      </div>
    </div>

    <!-- 搜尋結果提示 -->

    <div v-if="searchQuery.trim()" class="px-8 md:px-12 mb-6">
      <div class="max-w-6xl mx-auto">
        <p class="text-gray-500 text-sm">
          搜尋「<span class="text-[#8782FF] font-semibold">{{ searchQuery }}</span
          >」共找到 <span class="font-semibold">{{ filteredPosts.length }}</span> 篇文章
        </p>
      </div>
    </div>

    <!-- 最新文章（僅首頁、分類為全部且無搜尋時顯示） -->

    <div v-if="!searchQuery.trim() && selectedCategory === '全部' && currentPage === 1" class="px-8 md:px-12 mb-16">
      <div class="max-w-6xl mx-auto">
        <h2
          class="text-2xl md:text-3xl font-bold text-gray-900 mb-8 transition-all duration-1000 transform"
          :class="[isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']"
        >
          最新文章
        </h2>

        <div class="grid md:grid-cols-3 gap-8">
          <NuxtLink
            v-for="(post, index) in latestPosts"
            :key="post.id"
            :to="`/blog/${post.id}`"
            class="group block rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500 transform"
            :class="[
              'transition-all duration-700',

              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0',
            ]"
            :style="{ transitionDelay: `${index * 100 + 200}ms` }"
          >
            <div class="relative aspect-[16/9] overflow-hidden bg-gray-100">
              <img
                :src="post.coverImage"
                :alt="post.title"
                class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />

              <div class="absolute top-4 left-4 bg-[#8782FF] text-white px-3 py-1 rounded-full text-xs font-bold">
                {{ post.category }}
              </div>
            </div>

            <div class="p-6">
              <div class="flex items-center gap-3 text-xs text-gray-400 mb-3">
                <span>{{ formatDate(post.publishedAt) }}</span>

                <span>·</span>

                <span>{{ post.readingTime }} 分鐘閱讀</span>
              </div>

              <h3
                class="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#8782FF] transition-colors"
              >
                {{ post.title }}
              </h3>

              <p class="text-gray-500 text-sm line-clamp-2 leading-relaxed">
                {{ post.excerpt }}
              </p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- 文章列表 -->

    <div class="px-8 md:px-12 mb-16">
      <div class="max-w-6xl mx-auto">
        <h2
          v-if="!searchQuery.trim() && selectedCategory === '全部' && currentPage === 1"
          class="text-2xl md:text-3xl font-bold text-gray-900 mb-8"
        >
          所有文章
        </h2>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-12">
          <div
            v-for="(post, index) in paginatedPosts"
            :key="post.id"
            class="group flex flex-col transition-all duration-700 transform"
            :class="[activeCards.has(index) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']"
          >
            <NuxtLink
              :to="`/blog/${post.id}`"
              class="relative mb-5 rounded-xl overflow-hidden bg-gray-100 aspect-[16/9] shadow-sm group-hover:shadow-xl transition-all duration-500"
            >
              <img
                :src="post.coverImage"
                :alt="post.title"
                class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
                loading="lazy"
              />

              <div
                class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
              >
                <span class="bg-white/90 backdrop-blur-md text-[#8782FF] px-4 py-1 rounded-full text-xs font-bold">
                  {{ post.category }}
                </span>
              </div>
            </NuxtLink>

            <div class="px-1 flex-1 flex flex-col">
              <div class="flex items-center gap-2 mb-3">
                <span class="bg-[#8782FF]/10 text-[#8782FF] text-xs font-semibold px-3 py-1 rounded-full">
                  {{ post.category }}
                </span>

                <span class="text-xs text-gray-400">{{ formatDate(post.publishedAt) }}</span>
              </div>

              <h3
                class="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#8782FF] transition-colors tracking-tight"
              >
                <NuxtLink :to="`/blog/${post.id}`">
                  {{ post.title }}
                </NuxtLink>
              </h3>

              <p class="text-gray-500 text-sm mb-4 line-clamp-2 leading-relaxed font-light">
                {{ post.excerpt }}
              </p>

              <div class="flex flex-wrap gap-2 mb-4 mt-auto">
                <span
                  v-for="tag in post.tags.slice(0, 3)"
                  :key="tag"
                  class="px-3 py-1 bg-gray-50 text-gray-400 text-xs rounded-full border border-gray-100 hover:border-[#8782FF] hover:text-[#8782FF] transition-all"
                >
                  {{ tag }}
                </span>
              </div>

              <div v-if="isDesktop" class="block overflow-hidden">
                <NuxtLink :to="`/blog/${post.id}`" class="group/link flex items-center justify-end gap-3 h-8">
                  <div class="overflow-hidden">
                    <div
                      class="text-[#8782FF] font-black text-[11px] tracking-[0.2em] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"
                    >
                      閱讀文章
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

        <!-- 空結果 -->

        <div v-if="filteredPosts.length === 0" class="text-center py-20">
          <div class="text-6xl mb-6">📝</div>

          <p class="text-gray-400 text-lg mb-2">找不到相關文章</p>

          <p class="text-gray-300 text-sm">試試其他關鍵字或分類吧</p>
        </div>

        <!-- 分頁 -->
        <div v-if="totalPages > 1" class="flex justify-center items-center gap-2 mt-16">
          <button
            :disabled="currentPage === 1"
            class="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
            :class="[
              currentPage === 1
                ? 'text-gray-300 cursor-not-allowed'
                : 'text-gray-600 hover:bg-[#8782FF]/10 hover:text-[#8782FF]',
            ]"
            @click="goToPage(currentPage - 1)"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            v-for="page in totalPages"
            :key="page"
            :class="[
              'w-10 h-10 rounded-full font-semibold text-sm transition-all duration-300',
              currentPage === page
                ? 'bg-[#8782FF] text-white shadow-lg'
                : 'text-gray-600 hover:bg-[#8782FF]/10 hover:text-[#8782FF]',
            ]"
            @click="goToPage(page)"
          >
            {{ page }}
          </button>

          <button
            :disabled="currentPage === totalPages"
            class="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
            :class="[
              currentPage === totalPages
                ? 'text-gray-300 cursor-not-allowed'
                : 'text-gray-600 hover:bg-[#8782FF]/10 hover:text-[#8782FF]',
            ]"
            @click="goToPage(currentPage + 1)"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
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
          想讓品牌也能<span class="text-[#8782FF]">脫穎而出</span>？
        </h2>
        <p
          class="text-gray-500 text-lg md:text-xl mb-10 transition-all duration-1000 transform"
          :class="[isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']"
        >
          從網站建置到行銷策略，Zeona Studio 為你提供一站式數位解決方案。
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
