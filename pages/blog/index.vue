<script setup lang="ts">
import { blogCategories, type BlogPost } from '~/data/blogs'

const { data: blogPosts } = await useAsyncData<BlogPost[]>(
  'blogs',
  () => $fetch<BlogPost[]>('/api/blogs'),
  { default: () => [] as BlogPost[] },
)

const allTags = computed(() => {
  const tagCount = new Map<string, number>()
  ;(blogPosts.value || []).forEach((p) =>
    p.tags.forEach((t) => tagCount.set(t, (tagCount.get(t) || 0) + 1)),
  )
  return [...tagCount.entries()].sort((a, b) => b[1] - a[1]).map(([tag]) => tag)
})

function getPostsByCategory(category: string): BlogPost[] {
  const posts = blogPosts.value || []
  if (category === '全部') return posts
  return posts.filter((p) => p.category === category)
}

function getPostsByTag(tag: string): BlogPost[] {
  return (blogPosts.value || []).filter((p) => p.tags.includes(tag))
}

function searchPosts(query: string): BlogPost[] {
  const q = query.toLowerCase()
  return (blogPosts.value || []).filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q)),
  )
}

const route = useRoute()
const router = useRouter()

const { t, locale } = useI18n()
const localePath = useLocalePath()
const { isEn, catLabel, bTitle, bExcerpt } = useLocalizedContent()

// 全站標籤中→英對照（由各篇 tags / tagsEn 同序建立）；篩選仍用中文 key
const tagLabelMap = computed(() => {
  const m: Record<string, string> = {}
  for (const p of blogPosts.value || []) {
    const en = p.tagsEn || []
    ;(p.tags || []).forEach((tg, i) => {
      if (en[i] && !m[tg]) m[tg] = en[i]
    })
  }
  return m
})
const tagLabel = (tg: string) => (isEn.value ? tagLabelMap.value[tg] || tg : tg)

// SEO
useHead(() => ({
  title: t('blog.metaTitle'),
  meta: [
    { name: 'description', content: t('blog.metaDesc') },
    { name: 'keywords', content: t('blog.keywords') },
    { property: 'og:title', content: t('blog.metaTitle') },
    { property: 'og:description', content: t('blog.metaDesc') },
    { property: 'og:type', content: 'blog' },
    { property: 'og:url', content: 'https://zeona.vercel.app/blog' },
    { property: 'og:image', content: 'https://zeona.vercel.app/og-cover.jpg' },
  ],
  link: [{ rel: 'canonical', href: 'https://zeona.vercel.app/blog' }],
}))

// 動畫控制
const isVisible = ref(false)
const activeItems = ref(new Set<number>())

// 狀態
const searchQuery = ref((route.query.q as string) || '')
const selectedCategory = ref(
  typeof route.query.category === 'string' &&
    blogCategories.includes(route.query.category as (typeof blogCategories)[number])
    ? route.query.category
    : '全部',
)
const selectedTag = ref((route.query.tag as string) || '')
const currentPage = ref(Number(route.query.page) || 1)
const postsPerPage = 6

// 可捲動分類標籤
const tabScrollerRef = ref<HTMLElement | null>(null)
const mobileTabScrollerRef = ref<HTMLElement | null>(null)
const canScrollLeft = ref(false)
const canScrollRight = ref(false)
const mobileCanScrollLeft = ref(false)
const mobileCanScrollRight = ref(false)

const checkScrollState = (el: HTMLElement | null, setLeft: (v: boolean) => void, setRight: (v: boolean) => void) => {
  if (!el) return
  setLeft(el.scrollLeft > 2)
  setRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 2)
}

const updateDesktopScroll = () => {
  checkScrollState(
    tabScrollerRef.value,
    (v) => (canScrollLeft.value = v),
    (v) => (canScrollRight.value = v),
  )
}

const updateMobileScroll = () => {
  checkScrollState(
    mobileTabScrollerRef.value,
    (v) => (mobileCanScrollLeft.value = v),
    (v) => (mobileCanScrollRight.value = v),
  )
}

const scrollTabs = (direction: 'left' | 'right', el: HTMLElement | null) => {
  if (!el) return
  const amount = 160
  el.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' })
}

const scrollDesktop = (direction: 'left' | 'right') => {
  scrollTabs(direction, tabScrollerRef.value)
}

const scrollMobile = (direction: 'left' | 'right') => {
  scrollTabs(direction, mobileTabScrollerRef.value)
}

// 分類標籤（僅主分類，不含標籤，避免過多）
const allCategoryTabs = computed(() => {
  return [...blogCategories] as string[]
})

// 篩選邏輯
const filteredPosts = computed<BlogPost[]>(() => {
  if (searchQuery.value.trim()) {
    return searchPosts(searchQuery.value.trim())
  }
  if (selectedTag.value) {
    return getPostsByTag(selectedTag.value)
  }
  return getPostsByCategory(selectedCategory.value)
})

// 分頁
const totalPages = computed(() => Math.ceil(filteredPosts.value.length / postsPerPage))
const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * postsPerPage
  return filteredPosts.value.slice(start, start + postsPerPage)
})

// 精選文章（右側 sidebar）：Notion 勾選 Featured 的優先，不足 4 篇用最新補齊
const featuredPosts = computed(() => {
  const posts = blogPosts.value || []
  const manualFeatured = posts.filter((p) => p.featured)
  const byRecency = [...posts]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .filter((p) => !p.featured)
  return [...manualFeatured, ...byRecency].slice(0, 4)
})

// 推薦主題（從分類中取得，排除「全部」）
const recommendedTopics = computed(() => {
  return blogCategories.filter((c) => c !== '全部')
})

// 當前選中的標籤文字（用於判斷高亮）
const activeTab = computed(() => {
  if (searchQuery.value.trim()) return ''
  if (selectedTag.value) return selectedTag.value
  return selectedCategory.value
})

// 篩選結果描述
const filterDescription = computed(() => {
  if (searchQuery.value.trim()) return ''
  if (selectedTag.value) return selectedTag.value
  if (selectedCategory.value !== '全部') return selectedCategory.value
  return ''
})

// URL 同步
const updateQuery = () => {
  const query: Record<string, string> = {}
  if (searchQuery.value.trim()) query.q = searchQuery.value.trim()
  if (selectedCategory.value !== '全部' && !selectedTag.value) query.category = selectedCategory.value
  if (selectedTag.value) query.tag = selectedTag.value
  if (currentPage.value > 1) query.page = String(currentPage.value)
  router.replace({ query })
}

const selectTab = (tab: string) => {
  searchQuery.value = ''
  currentPage.value = 1
  // 判斷是分類還是標籤
  const isCat = (blogCategories as readonly string[]).includes(tab)
  if (isCat) {
    selectedCategory.value = tab
    selectedTag.value = ''
  } else {
    selectedTag.value = tab
    selectedCategory.value = '全部'
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  updateQuery()
}

const setCategory = (category: string) => {
  selectedCategory.value = category
  selectedTag.value = ''
  searchQuery.value = ''
  currentPage.value = 1
  updateQuery()
}

const setTag = (tag: string) => {
  selectedTag.value = tag
  selectedCategory.value = '全部'
  searchQuery.value = ''
  currentPage.value = 1
  updateQuery()
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const handleSearch = () => {
  currentPage.value = 1
  if (searchQuery.value.trim()) {
    selectedCategory.value = '全部'
    selectedTag.value = ''
  }
  updateQuery()
}

const clearSearch = () => {
  searchQuery.value = ''
  handleSearch()
}

const clearTagFilter = () => {
  selectedTag.value = ''
  selectedCategory.value = '全部'
  currentPage.value = 1
  updateQuery()
}

const goToPage = (page: number) => {
  if (page < 1 || page > totalPages.value) return
  currentPage.value = page
  updateQuery()
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// 格式化日期（依語系）
const formatDate = (dateStr: string) => {
  const d = new Date(dateStr)
  if (locale.value === 'en') {
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
  }
  return `${d.getFullYear()} 年 ${d.getMonth() + 1} 月 ${d.getDate()} 日`
}

// 相對時間（「X 天前」）
// 將日期字串解析為當地日期（避免 UTC 午夜造成的時區偏移問題）
const formatRelativeTime = (dateStr: string) => {
  const [year, month, day] = dateStr.split('T')[0].split('-').map(Number)
  const now = new Date()
  const nowDate = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const pubDate = new Date(year, month - 1, day)
  const days = Math.round((nowDate.getTime() - pubDate.getTime()) / 86400000)
  if (days <= 0) return t('blog.today')
  if (days < 7) return t('blog.daysAgo', { n: days })
  if (days < 30) return t('blog.weeksAgo', { n: Math.floor(days / 7) })
  if (days < 365) return t('blog.monthsAgo', { n: Math.floor(days / 30) })
  return t('blog.yearsAgo', { n: Math.floor(days / 365) })
}

// 動畫 & 捲動偵測
onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)

  // 初始化捲動狀態
  nextTick(() => {
    updateDesktopScroll()
    updateMobileScroll()
  })

  watch(
    paginatedPosts,
    () => {
      activeItems.value.clear()
      nextTick(() => {
        paginatedPosts.value.forEach((_, i) => {
          setTimeout(() => {
            activeItems.value.add(i)
          }, i * 80)
        })
      })
    },
    { immediate: true },
  )
})
</script>

<template>
  <div class="w-full pt-28 md:pt-32 font-sans bg-white">
    <!-- Hero Section -->
    <div class="px-6 md:px-12 mb-8 md:mb-16">
      <div class="max-w-6xl mx-auto text-center">
        <h2
          class="font-bold leading-[1.25] mb-4 text-center flex justify-center flex flex-col gap-x-2"
          style="font-size: clamp(24px, 4.5vw, 36px)"
          :class="[
            'transition-all duration-1000 transform',
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0',
          ]"
        >
          <span class="text-[#6f6bff]">{{ t('blog.heading1') }}</span><span>{{ t('blog.heading2') }}</span>
        </h2>
        <h1
          class="text-[#5B5B5B] text-sm md:text-lg max-w-2xl mx-auto transition-all duration-1000 transform"
          :class="[isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']"
        >
          {{ t('blog.sub') }}
        </h1>
      </div>
    </div>

    <!-- 主要內容區：左側文章列 + 右側 sidebar -->
    <div class="max-w-6xl mx-auto px-6 md:px-12">
      <div class="flex flex-col lg:flex-row gap-10 lg:gap-16">
        <!-- ========== 左側文章列表 ========== -->
        <div class="flex-1 min-w-0">
          <!-- 行動版搜尋（僅行動版顯示） -->
          <div class="lg:hidden mb-4">
            <div class="relative">
              <input
                v-model="searchQuery"
                type="text"
                :placeholder="t('blog.searchPlaceholder')"
                class="w-full pl-10 pr-10 py-2.5 rounded-full border border-gray-200 bg-gray-50 text-gray-800 text-sm focus:outline-none focus:border-[#8782FF] focus:ring-2 focus:ring-[#8782FF]/20 transition-all"
                @keyup.enter="handleSearch"
              />
              <svg
                class="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
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
                class="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                @click="clearSearch"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <!-- ===== 可捲動分類標籤（行動版） ===== -->
          <div class="lg:hidden relative mb-8">
            <!-- 左遮罩 + 箭頭 -->
            <div
              v-show="mobileCanScrollLeft"
              class="absolute left-0 top-0 bottom-0 z-10 flex items-center pointer-events-none"
            >
              <div class="h-full w-12 bg-gradient-to-r from-white to-transparent"></div>
              <button
                class="absolute left-0 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center pointer-events-auto hover:bg-gray-50 transition-colors"
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
                v-for="tab in allCategoryTabs"
                :key="tab"
                :class="[
                  'flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap',
                  activeTab === tab ? 'bg-[#8782FF] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200',
                ]"
                @click="selectTab(tab)"
              >
                {{ catLabel(tab) }}
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
                @click="scrollMobile('right')"
              >
                <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <!-- ===== 可捲動分類標籤（桌面版） ===== -->
          <div class="hidden lg:block relative mb-8 border-b border-gray-200 pb-4">
            <!-- 左遮罩 + 箭頭 -->
            <div
              v-show="canScrollLeft"
              class="absolute left-0 top-0 bottom-0 z-10 flex items-center pointer-events-none"
              style="bottom: 16px"
            >
              <div class="h-full w-14 bg-gradient-to-r from-white to-transparent"></div>
              <button
                class="absolute left-0 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center pointer-events-auto hover:bg-gray-50 transition-colors border border-gray-100"
                @click="scrollDesktop('left')"
              >
                <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>
            <!-- 標籤捲動容器 -->
            <div
              ref="tabScrollerRef"
              class="flex gap-1 overflow-x-auto scrollbar-hide scroll-smooth py-1"
              @scroll="updateDesktopScroll"
            >
              <button
                v-for="tab in allCategoryTabs"
                :key="tab"
                :class="[
                  'flex-shrink-0 px-4 py-1.5 text-sm font-medium transition-all duration-300 rounded-full whitespace-nowrap',
                  activeTab === tab
                    ? 'text-[#8782FF] bg-[#8782FF]/10 font-semibold'
                    : 'text-gray-500 hover:text-gray-800 hover:bg-gray-100',
                ]"
                @click="selectTab(tab)"
              >
                {{ catLabel(tab) }}
              </button>
            </div>
            <!-- 右遮罩 + 箭頭 -->
            <div
              v-show="canScrollRight"
              class="absolute right-0 top-0 bottom-0 z-10 flex items-center pointer-events-none"
              style="bottom: 16px"
            >
              <div class="h-full w-14 bg-gradient-to-l from-white to-transparent"></div>
              <button
                class="absolute right-0 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center pointer-events-auto hover:bg-gray-50 transition-colors border border-gray-100"
                @click="scrollDesktop('right')"
              >
                <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <!-- 搜尋結果提示 -->
          <div v-if="searchQuery.trim()" class="mb-6">
            <p class="text-gray-500 text-sm">
              {{ t('blog.searchResult', { q: searchQuery, n: filteredPosts.length }) }}
            </p>
          </div>

          <!-- 標籤 / 分類篩選提示 -->
          <div v-if="filterDescription && !searchQuery.trim()" class="mb-6 flex items-center gap-2">
            <p class="text-gray-500 text-sm">
              {{ t('blog.filtering') }}<span class="text-[#8782FF] font-semibold">{{ selectedTag ? tagLabel(filterDescription) : catLabel(filterDescription) }}</span>
              <span class="text-gray-400">{{ t('blog.count', { n: filteredPosts.length }) }}</span>
            </p>
            <button
              class="text-xs text-gray-400 hover:text-[#8782FF] underline underline-offset-2 transition-colors"
              @click="clearTagFilter"
            >
              {{ t('blog.clearFilter') }}
            </button>
          </div>

          <!-- 文章列表 -->
          <div class="divide-y divide-gray-100">
            <NuxtLink
              v-for="(post, index) in paginatedPosts"
              :key="post.id"
              :to="localePath(`/blog/${post.id}`)"
              class="group block py-7 first:pt-0 transition-all duration-700 transform"
              :class="[activeItems.has(index) ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0']"
            >
              <div class="flex gap-5 md:gap-8">
                <!-- 文字內容 -->
                <div class="flex-1 min-w-0 flex flex-col">
                  <!-- 分類 pill -->
                  <div class="mb-2">
                    <span
                      class="inline-block px-2.5 py-0.5 bg-[#8782FF]/10 text-[#8782FF] text-xs font-semibold rounded-full"
                    >
                      {{ catLabel(post.category) }}
                    </span>
                  </div>

                  <!-- 標題 -->
                  <h2
                    class="text-lg md:text-xl font-bold text-gray-900 mb-1.5 line-clamp-2 group-hover:text-[#8782FF] transition-colors leading-snug tracking-tight"
                  >
                    {{ bTitle(post) }}
                  </h2>

                  <!-- 摘要（桌面才顯示） -->
                  <p class="text-gray-500 text-sm mb-3 line-clamp-2 leading-relaxed">
                    {{ bExcerpt(post) }}
                  </p>

                  <!-- 底部資訊：相對時間 + 可點擊標籤 -->
                  <div class="flex items-center gap-2 mt-auto flex-wrap">
                    <span class="text-xs text-gray-400">{{ formatRelativeTime(post.publishedAt) }}</span>
                    <span class="text-gray-200">·</span>
                    <span class="text-xs text-gray-400">{{ formatDate(post.publishedAt) }}</span>
                    <button
                      v-for="tag in post.tags.slice(0, 2)"
                      :key="tag"
                      class="hidden sm:inline-block px-2.5 py-0.5 bg-gray-100 text-gray-500 text-xs rounded-full hover:bg-[#8782FF]/10 hover:text-[#8782FF] transition-all"
                      @click.prevent.stop="setTag(tag)"
                    >
                      {{ tagLabel(tag) }}
                    </button>
                  </div>
                </div>

                <!-- 縮圖 -->
                <div
                  class="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-28 rounded-lg overflow-hidden bg-gray-100"
                >
                  <img
                    :src="post.coverImage"
                    :alt="`${bTitle(post)} - ${catLabel(post.category)}`"
                    :title="bTitle(post)"
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    width="160"
                    height="112"
                    :loading="index < 3 ? 'eager' : 'lazy'"
                  />
                </div>
              </div>
            </NuxtLink>
          </div>

          <!-- 空結果 -->
          <div v-if="filteredPosts.length === 0" class="text-center py-20">
            <div class="text-5xl mb-5">📝</div>
            <p class="text-gray-400 text-lg mb-2">{{ t('blog.notFound') }}</p>
            <p class="text-gray-300 text-sm">{{ t('blog.notFoundSub') }}</p>
          </div>

          <!-- 分頁 -->
          <div v-if="totalPages > 1" class="flex justify-center items-center gap-2 mt-12 pt-8 border-t border-gray-100">
            <button
              :disabled="currentPage === 1"
              class="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
              :class="[
                currentPage === 1
                  ? 'text-gray-300 cursor-not-allowed'
                  : 'text-gray-600 hover:bg-[#8782FF]/10 hover:text-[#8782FF]',
              ]"
              @click="goToPage(currentPage - 1)"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              v-for="page in totalPages"
              :key="page"
              :class="[
                'w-9 h-9 rounded-full font-semibold text-sm transition-all duration-300',
                currentPage === page
                  ? 'bg-[#8782FF] text-white shadow-md'
                  : 'text-gray-500 hover:bg-[#8782FF]/10 hover:text-[#8782FF]',
              ]"
              @click="goToPage(page)"
            >
              {{ page }}
            </button>

            <button
              :disabled="currentPage === totalPages"
              class="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
              :class="[
                currentPage === totalPages
                  ? 'text-gray-300 cursor-not-allowed'
                  : 'text-gray-600 hover:bg-[#8782FF]/10 hover:text-[#8782FF]',
              ]"
              @click="goToPage(currentPage + 1)"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <!-- ========== 右側 Sidebar ========== -->
        <aside class="w-full lg:w-80 flex-shrink-0">
          <div class="lg:sticky lg:top-28 space-y-10">
            <!-- 搜尋（桌面版） -->
            <div class="hidden lg:block">
              <div class="relative">
                <input
                  v-model="searchQuery"
                  type="text"
                  :placeholder="t('blog.searchPlaceholder')"
                  class="w-full pl-10 pr-10 py-2.5 rounded-full border border-gray-200 bg-gray-50 text-gray-800 text-sm focus:outline-none focus:border-[#8782FF] focus:ring-2 focus:ring-[#8782FF]/20 transition-all"
                  @keyup.enter="handleSearch"
                />
                <svg
                  class="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
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
                  class="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  @click="clearSearch"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <!-- 精選文章 -->
            <div>
              <h3 class="text-base font-bold text-gray-900 mb-5 flex items-center gap-2">
                <span class="w-1 h-5 bg-[#8782FF] rounded-full"></span>
                {{ t('blog.featured') }}
              </h3>
              <div class="space-y-5">
                <NuxtLink
                  v-for="(post, index) in featuredPosts"
                  :key="post.id"
                  :to="localePath(`/blog/${post.id}`)"
                  class="group block"
                >
                  <div class="flex items-start gap-3">
                    <span class="text-2xl font-bold text-gray-200 leading-none mt-0.5 select-none">
                      {{ String(index + 1).padStart(2, '0') }}
                    </span>
                    <div class="flex-1 min-w-0">
                      <!-- 標籤 pills + 右側白色遮罩 -->
                      <div class="relative mb-1.5 overflow-hidden">
                        <div class="flex gap-1 flex-nowrap">
                          <span
                            v-for="tag in post.tags"
                            :key="tag"
                            class="flex-shrink-0 inline-block px-2 py-0.5 bg-[#8782FF]/10 text-[#8782FF] text-[10px] font-semibold rounded-full leading-relaxed"
                          >
                            {{ tagLabel(tag) }}
                          </span>
                        </div>
                        <div
                          class="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none"
                        ></div>
                      </div>
                      <h4
                        class="text-sm font-bold text-gray-900 line-clamp-2 group-hover:text-[#8782FF] transition-colors leading-snug"
                      >
                        {{ bTitle(post) }}
                      </h4>
                      <span class="text-xs text-gray-400 mt-1 block">{{ formatRelativeTime(post.publishedAt) }}</span>
                    </div>
                  </div>
                </NuxtLink>
              </div>
            </div>

            <!-- 推薦主題 -->
            <div>
              <h3 class="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span class="w-1 h-5 bg-[#8782FF] rounded-full"></span>
                {{ t('blog.recommendedTopics') }}
              </h3>
              <div class="flex flex-wrap gap-2">
                <button
                  v-for="topic in recommendedTopics"
                  :key="topic"
                  :class="[
                    'px-4 py-2 rounded-full text-sm transition-all duration-300',
                    selectedCategory === topic && !selectedTag && !searchQuery.trim()
                      ? 'bg-[#8782FF] text-white font-semibold'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 font-medium',
                  ]"
                  @click="setCategory(topic)"
                >
                  {{ catLabel(topic) }}
                </button>
              </div>
            </div>

            <!-- 熱門標籤 -->
            <div>
              <h3 class="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span class="w-1 h-5 bg-[#8782FF] rounded-full"></span>
                {{ t('blog.hotTags') }}
              </h3>
              <div class="flex flex-wrap gap-2">
                <button
                  v-for="tag in allTags.slice(0, 10)"
                  :key="tag"
                  :class="[
                    'px-3 py-1.5 text-xs rounded-full border transition-all cursor-pointer',
                    selectedTag === tag
                      ? 'bg-[#8782FF] text-white border-[#8782FF] font-semibold'
                      : 'bg-gray-50 text-gray-500 border-gray-100 hover:border-[#8782FF] hover:text-[#8782FF]',
                  ]"
                  @click="setTag(tag)"
                >
                  {{ tagLabel(tag) }}
                </button>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>

    <!-- CTA Section -->
    <ContactCta
      :title-pre="t('blog.indexCtaPre')"
      :title-highlight="t('blog.indexCtaHi')"
      :title-post="t('blog.indexCtaPost')"
      :subtitle="t('blog.indexCtaSub')"
      :button-text="t('blog.indexCtaBtn')"
    />
  </div>
</template>

<style scoped>
/* 隱藏捲軸 */
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
