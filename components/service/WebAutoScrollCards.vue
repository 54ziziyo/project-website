<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

const { t, tm, rt } = useI18n()
const cards = computed(() => tm('svc.scrollCards') as { title: string; description: string }[])
const duplicatedCards = computed(() => [...cards.value, ...cards.value])
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
        {{ t('svc.scrollPre') }}<span class="text-[#8782FF]">{{ t('svc.scrollHi') }}</span>{{ t('svc.scrollPost') }}
      </div>
      <div class="text-[#5B5B5B] text-[14px] md:text-[20px]">{{ t('svc.scrollSub') }}</div>
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
          {{ rt(card.title) }}
        </div>
        <p class="text-[16px] md:text-[18px] text-gray-600 text-wrap">
          {{ rt(card.description) }}
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
