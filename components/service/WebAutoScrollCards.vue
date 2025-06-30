<script setup lang="ts">
import { ref, onMounted } from 'vue'

const cards = [
  {
    title: 'SEO進階優化',
    description: 'SEO健檢、優化對搜尋引擎友善架構',
  },
  { title: 'Google 分析', description: '設定追蹤碼、資料儀表版' },
  { title: '多國語系', description: '支援多國語言切換、拓展國際市場' },
  {
    title: 'GTM',
    description: '轉換目標設定、追蹤顧客行為報告',
  },
  {
    title: '功能性服務',
    description: '客製化表單、預約系統、行事曆串接、Email 通知等',
  },
  { title: '平台客製化功能', description: 'Wix、Shopify 其他平台客製功能' },
]

const duplicatedCards = [...cards, ...cards]
const scrollContainer = ref<HTMLElement | null>(null)

onMounted(() => {
  const container = scrollContainer.value
  let start = 0
  const speed = 1

  function step() {
    start += speed
    if (container && start >= container.scrollWidth / 2) {
      start = 0
    }
    if (container) {
      container.scrollLeft = start
    }
    requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
})
</script>

<template>
  <div class="overflow-hidden relative w-full gradient-p-to-y-bg py-32">
    <!-- 標題區塊 -->
    <div class="flex flex-col items-center mb-14 md:mb-[80px]">
      <div class="text-[24px] md:text-[52px] font-bold leading-none mb-4 md:mb-8">
        您的<span class="text-[#8782FF]">網站</span>還能做到這些
      </div>
      <div class="text-[#5B5B5B] text-[14px] md:text-[20px]">提供給您最專業的服務</div>
    </div>

    <!-- 滾動卡片 -->
    <div ref="scrollContainer" class="flex w-max animate-scroll whitespace-nowrap">
      <div
        v-for="(card, index) in duplicatedCards"
        :key="index"
        class="relative w-[220px] md:w-[355px] bg-white rounded-2xl shadow-lg px-4 md:px-8 pt-14 md:pt-[60px] pb-7 md:pb-10 mx-4 flex-shrink-0 overflow-hidden"
      >
        <!-- 雷達動畫圈圈 -->
        <div
          class="absolute md:top-[-100px] md:right-[-50px] md:w-[200px] md:h-[200px] h-[150px] w-[150px] -top-[50px] -right-[55px]"
        >
          <div class="absolute inset-0 rounded-full bg-[#B8AEFF] opacity-30 animate-radar" />
          <div class="absolute inset-6 rounded-full bg-[#B8AEFF] opacity-50" />
          <div class="absolute inset-12 rounded-full bg-[#B8AEFF]" />
        </div>

        <!-- 卡片內容 -->
        <div class="font-bold text-[20px] md:text-[24px] mb-5 md:mb-2 text-[#5B5B5B]">
          {{ card.title }}
        </div>
        <p class="text-[16px] md:text-[18px] text-gray-600 text-wrap">
          {{ card.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes radar {
  0% {
    transform: scale(0.9);
    opacity: 0.3;
  }
  70% {
    transform: scale(1.3);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

.animate-scroll {
  animation: scroll linear infinite 60s;
}

.animate-radar {
  animation: radar 3s ease-out infinite;
}
</style>
