<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()

const is404 = computed(() => props.error?.statusCode === 404)

const title = computed(() => (is404.value ? '找不到這個頁面' : '頁面發生了一點問題'))
const message = computed(() =>
  is404.value
    ? '你要找的頁面可能已經移動或不存在了。不如先逛逛數位工具箱，或回到首頁吧！'
    : '系統暫時出了點狀況，請稍後再試一次，或回到首頁。',
)

useHead({
  title: computed(() => `${props.error?.statusCode || '錯誤'} | Zeona Studio`),
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
})

const handleHome = () => clearError({ redirect: '/' })
const handleToolbox = () => clearError({ redirect: '/toolbox' })
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-white px-6 py-24 font-sans relative overflow-hidden">
    <div class="absolute -top-24 -left-24 w-96 h-96 bg-[#8782FF]/10 rounded-full blur-[120px] pointer-events-none" />
    <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-[#8782FF]/10 rounded-full blur-[120px] pointer-events-none" />

    <div class="relative z-10 max-w-lg text-center">
      <div class="text-[88px] md:text-[140px] font-black leading-none text-[#8782FF] tracking-tighter">
        {{ error?.statusCode || 'Oops' }}
      </div>
      <h1 class="text-2xl md:text-3xl font-bold text-gray-900 mt-2 mb-4">{{ title }}</h1>
      <p class="text-gray-500 text-base leading-relaxed mb-10">{{ message }}</p>

      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <button
          class="px-8 py-3 bg-[#8782FF] text-white font-bold rounded-full cursor-pointer hover:bg-[#6f6bff] transition-colors duration-300"
          @click="handleHome"
        >
          回到首頁
        </button>
        <button
          class="px-8 py-3 border border-[#8782FF] text-[#8782FF] font-semibold rounded-full cursor-pointer hover:bg-[#8782FF] hover:text-white transition-colors duration-300"
          @click="handleToolbox"
        >
          逛數位工具箱 →
        </button>
      </div>
    </div>
  </div>
</template>
