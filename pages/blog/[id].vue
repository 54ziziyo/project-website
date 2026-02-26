<script setup lang="ts">
import { getPostById, getRecommendedPosts, blogCategories } from '~/data/blogs'

definePageMeta({
  key: (route) => route.fullPath,
})

const route = useRoute()
const isVisible = ref(false)

const currentPost = computed(() => {
  const id = route.params.id as string
  return getPostById(id) || null
})

const recommendedPosts = computed(() => {
  if (!currentPost.value) return []
  return getRecommendedPosts(currentPost.value.id, 3)
})

// 動態 SEO
useHead(() => {
  if (!currentPost.value) {
    return {
      title: '找不到文章 | Zeona Studio',
    }
  }

  const post = currentPost.value
  return {
    title: post.seo.title,
    meta: [
      {
        name: 'description',
        content: (post.title + ' - ' + post.seo.description + ' | Zeona Studio 部落格').slice(0, 170),
      },
      { name: 'keywords', content: post.seo.keywords },
      { property: 'og:title', content: post.seo.title },
      {
        property: 'og:description',
        content: (post.title + ' - ' + post.seo.description + ' | Zeona Studio 部落格').slice(0, 170),
      },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: `https://zeona.vercel.app/blog/${post.id}` },
      { property: 'og:image', content: post.seo.ogImage },
      { property: 'article:published_time', content: post.publishedAt },
      { property: 'article:modified_time', content: post.updatedAt },
      { property: 'article:author', content: post.author },
      { property: 'article:section', content: post.category },
      { property: 'article:tag', content: post.tags.join(', ') },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: post.seo.title },
      { name: 'twitter:description', content: post.seo.description },
      { name: 'twitter:image', content: post.seo.ogImage },
    ],
    link: [{ rel: 'canonical', href: `https://zeona.vercel.app/blog/${post.id}` }],
  }
})

// JSON-LD 結構化資料
useHead(() => {
  if (!currentPost.value) return {}

  const post = currentPost.value
  return {
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.seo.description,
          image: post.seo.ogImage,
          author: {
            '@type': 'Organization',
            name: post.author,
          },
          publisher: {
            '@type': 'Organization',
            name: 'Zeona Studio',
            logo: {
              '@type': 'ImageObject',
              url: 'https://zeona.vercel.app/favicon.ico',
            },
          },
          datePublished: post.publishedAt,
          dateModified: post.updatedAt,
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://zeona.vercel.app/blog/${post.id}`,
          },
          keywords: post.tags.join(', '),
        }),
      },
    ],
  }
})

// 格式化日期
const formatDate = (dateStr: string) => {
  const d = new Date(dateStr)
  return `${d.getFullYear()} 年 ${d.getMonth() + 1} 月 ${d.getDate()} 日`
}

// 返回列表連結
const backLink = computed(() => {
  const queryCategory = route.query.category
  if (
    typeof queryCategory === 'string' &&
    blogCategories.includes(queryCategory as (typeof blogCategories)[number]) &&
    queryCategory !== '全部'
  ) {
    return { path: '/blog', query: { category: queryCategory } }
  }
  return { path: '/blog' }
})

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<template>
  <div class="w-full pt-24 md:pt-32 pb-20 font-sans">
    <!-- 返回按鈕 -->
    <div class="px-8 md:px-12 mb-8">
      <div class="max-w-4xl mx-auto">
        <NuxtLink
          :to="backLink"
          class="inline-flex items-center text-gray-600 hover:text-[#8782FF] transition-colors duration-300"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          <span>返回部落格</span>
        </NuxtLink>
      </div>
    </div>

    <!-- 找不到文章 -->
    <div v-if="!currentPost" class="px-8 md:px-12">
      <div class="max-w-4xl mx-auto text-center py-20">
        <div class="text-6xl mb-6">📝</div>
        <h1 class="text-4xl font-bold text-gray-900 mb-4">找不到此文章</h1>
        <p class="text-gray-600 mb-8">抱歉，您查找的文章不存在或已被移除。</p>
        <NuxtLink
          to="/blog"
          class="inline-block bg-[#8782FF] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#6f6bff] transition-all duration-300"
        >
          返回部落格
        </NuxtLink>
      </div>
    </div>

    <!-- 文章內容 -->
    <article v-else>
      <!-- 文章頭部 -->
      <div class="px-8 md:px-12 mb-10">
        <div
          class="max-w-4xl mx-auto transition-all duration-1000 transform"
          :class="[isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']"
        >
          <!-- 分類標籤 -->
          <div class="flex items-center gap-3 mb-6">
            <NuxtLink
              :to="{ path: '/blog', query: { category: currentPost.category } }"
              class="bg-[#8782FF] text-white px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-[#6f6bff] transition-colors"
            >
              {{ currentPost.category }}
            </NuxtLink>
            <span class="text-gray-400 text-sm">{{ formatDate(currentPost.publishedAt) }}</span>
          </div>

          <!-- 標題 -->
          <h1 class="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            {{ currentPost.title }}
          </h1>

          <!-- 摘要 -->
          <p class="text-lg md:text-xl text-gray-500 leading-relaxed mb-6">
            {{ currentPost.excerpt }}
          </p>

          <!-- 標籤 -->
          <div class="flex flex-wrap gap-2 mb-8">
            <span
              v-for="tag in currentPost.tags"
              :key="tag"
              class="px-3 py-1 bg-gray-50 text-gray-500 text-xs rounded-full border border-gray-100"
            >
              #{{ tag }}
            </span>
          </div>

          <!-- 作者資訊 -->
          <!-- <div class="flex items-center gap-3 pb-8 border-b border-gray-100">
            <div class="w-10 h-10 rounded-full bg-[#8782FF]/20 flex items-center justify-center">
              <span class="text-[#8782FF] font-bold text-sm">Z</span>
            </div>
            <div>
              <p class="font-semibold text-gray-900 text-sm">{{ currentPost.author }}</p>
              <p class="text-gray-400 text-xs">品牌數位轉型專家</p>
            </div>
          </div> -->
        </div>
      </div>

      <!-- 主圖 -->
      <div class="px-8 md:px-12 mb-12">
        <div
          class="max-w-4xl mx-auto transition-all duration-1000 transform delay-200"
          :class="[isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']"
        >
          <div class="rounded-2xl overflow-hidden shadow-xl">
            <img
              :src="currentPost.coverImage"
              :alt="`${currentPost.title} - ${currentPost.category} 文章封面`"
              :title="currentPost.title"
              class="w-full h-auto aspect-[16/9] object-cover"
              width="1200"
              height="675"
              fetchpriority="high"
            />
          </div>
        </div>
      </div>

      <!-- 文章內容 (v-html 所見即所得) -->
      <div class="px-8 md:px-12 mb-16">
        <div
          class="max-w-4xl mx-auto transition-all duration-1000 transform delay-300"
          :class="[isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']"
        >
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div class="blog-content" v-html="currentPost.content"></div>
        </div>
      </div>

      <!-- 分享與標籤 -->
      <div class="px-8 md:px-12 mb-16">
        <div class="max-w-4xl mx-auto">
          <div class="border-t border-b border-gray-100 py-8">
            <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in currentPost.tags"
                  :key="tag"
                  class="px-4 py-1.5 bg-gray-50 text-gray-500 text-sm rounded-full border border-gray-100 hover:border-[#8782FF] hover:text-[#8782FF] transition-all cursor-pointer"
                >
                  #{{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>

    <!-- 推薦文章 -->
    <div v-if="currentPost && recommendedPosts.length > 0" class="px-8 md:px-12 mb-16">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-8">推薦閱讀</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <NuxtLink
            v-for="(post, index) in recommendedPosts"
            :key="post.id"
            :to="`/blog/${post.id}`"
            class="group block rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500 transform"
            :class="[
              'transition-all duration-700',
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0',
            ]"
            :style="{ transitionDelay: `${index * 100 + 400}ms` }"
          >
            <div class="relative aspect-[16/9] overflow-hidden bg-gray-100">
              <img
                :src="post.coverImage"
                :alt="`${post.title} - ${post.category}`"
                :title="`閱讀推薦文章：${post.title}`"
                class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                width="400"
                height="225"
                loading="lazy"
              />
              <div class="absolute top-4 left-4 bg-[#8782FF] text-white px-3 py-1 rounded-full text-xs font-bold">
                {{ post.category }}
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center gap-3 text-xs text-gray-400 mb-3">
                <span>{{ formatDate(post.publishedAt) }}</span>
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

    <!-- CTA Section -->
    <div class="px-4 md:px-8 py-16 md:py-24 mx-4 md:mx-8">
      <div
        class="mx-auto text-center bg-gradient-to-br from-[#8782FF]/10 to-[#6f6bff]/10 p-12 md:p-20 rounded-[3rem] shadow-sm"
      >
        <h2 class="font-black leading-tight mb-6 text-[32px] md:text-[48px] text-gray-900 tracking-tighter">
          需要專業的<span class="text-[#8782FF]">數位服務</span>嗎？
        </h2>
        <p class="text-gray-500 text-lg md:text-xl mb-10">
          從網站建置到行銷推廣，Zeona Studio 為你量身打造最合適的方案。
        </p>
        <NuxtLink
          to="/contact"
          class="inline-block bg-[#8782FF] text-white font-bold py-4 px-10 rounded-full hover:bg-[#6f6bff] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 active:scale-95"
        >
          預約免費諮詢
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style>
@reference "~/assets/css/tailwind.css";

/* 部落格內文樣式 - v-html 所見即所得 */
.blog-content {
  @apply text-gray-700 leading-relaxed;
}

.blog-content h2 {
  @apply text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6 pb-3 border-b border-gray-100;
}

.blog-content h2:first-child {
  @apply mt-0;
}

.blog-content h3 {
  @apply text-xl md:text-2xl font-semibold text-gray-800 mt-8 mb-4;
}

.blog-content p {
  @apply text-base md:text-lg leading-relaxed mb-6 text-gray-600;
}

.blog-content ul,
.blog-content ol {
  @apply mb-6 pl-6;
}

.blog-content ul {
  @apply list-disc;
}

.blog-content ol {
  @apply list-decimal;
}

.blog-content li {
  @apply text-base md:text-lg text-gray-600 mb-2 leading-relaxed;
}

.blog-content strong {
  @apply font-semibold text-gray-800;
}

.blog-content a {
  @apply text-[#8782FF] underline hover:text-[#6f6bff] transition-colors;
}

.blog-content pre {
  @apply bg-gray-900 text-gray-100 rounded-xl p-6 mb-6 overflow-x-auto text-sm;
}

.blog-content code {
  @apply bg-gray-100 text-[#8782FF] px-1.5 py-0.5 rounded text-sm font-mono;
}

.blog-content pre code {
  @apply bg-transparent text-gray-100 p-0;
}

.blog-content blockquote {
  @apply border-l-4 border-[#8782FF] pl-6 py-2 my-6 bg-[#8782FF]/5 rounded-r-xl;
}

.blog-content blockquote p {
  @apply text-gray-600 italic;
}

.blog-content img {
  @apply rounded-xl shadow-lg my-8 w-full;
}

.blog-content hr {
  @apply border-gray-200 my-10;
}

.blog-content table {
  @apply w-full mb-6 border-collapse;
}

.blog-content th {
  @apply bg-gray-50 text-left p-3 border border-gray-200 font-semibold text-gray-800;
}

.blog-content td {
  @apply p-3 border border-gray-200 text-gray-600;
}
</style>
