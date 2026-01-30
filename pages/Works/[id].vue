<script setup lang="ts">
import { portfolios } from '~/data/portfolios'

definePageMeta({
  key: route => route.fullPath,
})

const route = useRoute()
const isVisible = ref(false)

const currentPortfolio = computed(() => {
  const id = route.params.id as string
  return portfolios.find(p => p.id === id) || null
})

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<template>
  <div class="w-full pt-24 md:pt-32 pb-20">
    <div class="px-8 md:px-12 mb-8">
      <div class="max-w-6xl mx-auto">
        <NuxtLink
          to="/Works"
          class="inline-flex items-center text-gray-600 hover:text-[#8782FF] transition-colors duration-300"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          <span>返回作品集</span>
        </NuxtLink>
      </div>
    </div>

    <div v-if="!currentPortfolio" class="px-8 md:px-12">
      <div class="max-w-6xl mx-auto text-center py-20">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">找不到此作品</h1>
        <p class="text-gray-600 mb-8">抱歉，您查找的作品不存在或已被移除。</p>
        <NuxtLink
          to="/Works"
          class="inline-block bg-[#8782FF] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#6f6bff] transition-all duration-300"
        >
          返回作品集
        </NuxtLink>
      </div>
    </div>

    <div v-else class="px-8 md:px-12">
      <div class="max-w-6xl mx-auto">
        <div
          class="mb-12 transition-all duration-1000 transform"
          :class="[isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']"
        >
          <div class="inline-block bg-[#8782FF] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
            {{ currentPortfolio.category }}
          </div>
          <h1 class="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            {{ currentPortfolio.title }}
          </h1>
          <p class="text-xl text-gray-600">
            {{ currentPortfolio.shortDesc }}
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-12 mb-16">
          <div
            class="transition-all duration-1000 transform delay-200"
            :class="[isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']"
          >
            <div class="rounded-2xl overflow-hidden shadow-2xl">
              <img
                :src="currentPortfolio.image"
                :alt="currentPortfolio.title"
                class="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div
            class="transition-all duration-1000 transform delay-300"
            :class="[isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']"
          >
            <div class="mb-8">
              <h2 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span class="w-2 h-6 bg-[#8782FF] rounded mr-3"></span>
                專案描述
              </h2>
              <p class="text-gray-600 leading-relaxed">
                {{ currentPortfolio.description }}
              </p>
            </div>

            <div class="mb-8">
              <h2 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span class="w-2 h-6 bg-[#8782FF] rounded mr-3"></span>
                主要功能
              </h2>
              <ul class="space-y-3">
                <li v-for="feature in currentPortfolio.features" :key="feature" class="flex items-start">
                  <svg class="w-5 h-5 text-[#8782FF] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-gray-600">{{ feature }}</span>
                </li>
              </ul>
            </div>

            <div class="mb-8">
              <h2 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span class="w-2 h-6 bg-[#8782FF] rounded mr-3"></span>
                使用技術
              </h2>
              <div class="flex flex-wrap gap-2">
                <span v-for="tech in currentPortfolio.techStack" :key="tech" class="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full font-medium hover:bg-[#8782FF] hover:text-white transition-all duration-300">
                  {{ tech }}
                </span>
              </div>
            </div>

            <div class="space-y-4">
              <a v-if="currentPortfolio.websiteLink && currentPortfolio.websiteLink !== '#'" :href="currentPortfolio.websiteLink" target="_blank" rel="noopener noreferrer" class="flex items-center justify-between w-full bg-[#8782FF] text-white font-semibold py-4 px-6 rounded-xl hover:bg-[#6f6bff] transition-all duration-300 hover:shadow-lg">
                <span>查看網站</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>

              <a v-if="currentPortfolio.flowchartLink" :href="currentPortfolio.flowchartLink" target="_blank" rel="noopener noreferrer" class="flex items-center justify-between w-full bg-white text-[#8782FF] font-semibold py-4 px-6 rounded-xl border-2 border-[#8782FF] hover:bg-[#8782FF] hover:text-white transition-all duration-300">
                <span>查看流程圖</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-br from-[#8782FF]/10 to-[#6f6bff]/10 py-16 rounded-2xl text-center transition-all duration-1000 transform delay-500" :class="[isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">想要打造類似的專案？</h2>
          <p class="text-gray-600 mb-8 max-w-xl mx-auto px-4">讓 Zeona Studio 協助您實現數位夢想，從設計到開發，我提供一站式服務。</p>
          <NuxtLink to="/Contact" class="inline-block bg-[#8782FF] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#6f6bff] transition-all duration-300 hover:shadow-lg">立即聯繫我</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>