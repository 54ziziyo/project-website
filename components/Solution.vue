<script lang="ts" setup>
const { t, tm, rt } = useI18n()
const solutionCards = computed(
  () => tm('solution.cards') as { no: string; title: string; title2: string; desc: string }[],
)

const isVisible = ref(false)
const sectionRef = ref(null)
const activeCards = ref(new Set())

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          // 依序啟動卡片動畫
          const items = entry.target.querySelectorAll('.solution-card')
          items.forEach((el, i) => {
            setTimeout(() => {
              activeCards.value.add(i)
            }, i * 200)
          })
        }
      })
    },
    { threshold: 0.1 },
  )

  if (sectionRef.value) observer.observe(sectionRef.value)
})
</script>

<template>
  <div ref="sectionRef" class="relative pb-[50px] pt-30 md:py-[120px] overflow-x-clip bg-white font-sans">
    <div class="absolute md:-top-[20%] -right-[70%] pointer-events-none">
      <img
        src="../assets/images/round-purple.svg"
        alt="裝飾圓形圖案"
        title="Zeona Studio 網站裝飾元素"
        class="max-w-none"
        width="1500"
        height="1500"
      />
    </div>

    <div class="relative z-10 px-8 md:px-[6.875rem] max-w-6xl mx-auto">
      <div
        class="flex justify-center flex-col items-center mb-16 md:mb-24 transition-all duration-1000 transform"
        :class="[isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']"
      >
        <div class="mb-4 text-[#5B5B5B] text-lg md:text-2xl font-bold tracking-widest">{{ t('solution.kicker') }}</div>
        <h2 class="text-[clamp(24px,5vw,52px)] text-center font-black leading-[1.2] text-gray-900">
          {{ t('solution.headingPre') }}<br class="md:hidden" />
          <span class="text-[#8782FF] whitespace-nowrap"> {{ t('solution.headingHi') }} </span>
        </h2>
        <div class="w-16 h-1.5 bg-[#8782FF] mt-12 rounded-full"></div>
      </div>

      <div class="grid md:grid-cols-2 grid-cols-1 gap-12 md:gap-20 mt-16 md:mt-20 items-center">
        <div
          class="solution-card order-1 flex flex-col justify-center text-center md:text-left transition-all duration-1000 transform"
          :class="[activeCards.has(0) ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0']"
        >
          <div class="text-[24px] font-bold text-[#8782FF] mb-2 uppercase tracking-wide">{{ rt(solutionCards[0].no) }}</div>
          <div class="text-[20px] md:text-[28px] font-extrabold mb-4 text-[#333] leading-snug">
            {{ rt(solutionCards[0].title) }}<br />{{ rt(solutionCards[0].title2) }}
          </div>
          <div class="text-[#5B5B5B] text-base md:text-lg leading-relaxed">
            {{ rt(solutionCards[0].desc) }}
          </div>
        </div>

        <div
          class="mb-8 md:mb-0 solution-card order-2 rounded-2xl overflow-hidden shadow-xl transition-all duration-1000 delay-200 transform"
          :class="[activeCards.has(1) ? 'scale-100 opacity-100' : 'scale-95 opacity-0']"
        >
          <img
            src="../assets/images/solution-1.jpg"
            alt="現成 AI 工具與模板 - 套版就能用"
            title="數位工具箱模板與素材"
            class="w-full h-full object-cover hover:scale-105 transition-transform duration-700 rounded-xl"
            width="600"
            height="400"
            loading="lazy"
          />
        </div>

        <div
          class="solution-card order-3 md:order-4 flex flex-col justify-center text-center md:text-left transition-all duration-1000 transform"
          :class="[activeCards.has(2) ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0']"
        >
          <div class="text-[24px] font-bold text-[#8782FF] mb-2 uppercase tracking-wide">{{ rt(solutionCards[1].no) }}</div>
          <div class="text-[20px] md:text-[28px] font-extrabold mb-4 text-[#333] leading-snug">
            {{ rt(solutionCards[1].title) }}
          </div>
          <div class="text-[#5B5B5B] text-base md:text-lg leading-relaxed">
            {{ rt(solutionCards[1].desc) }}
          </div>
        </div>

        <div
          class="mb-8 md:mb-0 solution-card order-4 md:order-3 rounded-2xl overflow-hidden shadow-xl transition-all duration-1000 delay-200 transform"
          :class="[activeCards.has(3) ? 'scale-100 opacity-100' : 'scale-95 opacity-0']"
        >
          <img
            src="../assets/images/solution-2.jpg"
            alt="可複製的 AI 流程 - 穩定產出內容"
            title="AI 工作流程與提示詞"
            class="w-full h-full object-cover hover:scale-105 transition-transform duration-700 rounded-xl"
            width="600"
            height="400"
            loading="lazy"
          />
        </div>

        <div
          class="solution-card order-5 flex flex-col justify-center text-center md:text-left transition-all duration-1000 transform"
          :class="[activeCards.has(4) ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0']"
        >
          <div class="text-[24px] font-bold text-[#8782FF] mb-2 uppercase tracking-wide">{{ rt(solutionCards[2].no) }}</div>
          <div class="text-[20px] md:text-[28px] font-extrabold mb-4 text-[#333] leading-snug">
            {{ rt(solutionCards[2].title) }}<br />{{ rt(solutionCards[2].title2) }}
          </div>
          <div class="text-[#5B5B5B] text-base md:text-lg leading-relaxed">
            {{ rt(solutionCards[2].desc) }}
          </div>
        </div>

        <div
          class="mb-8 md:mb-0 solution-card order-6 rounded-2xl overflow-hidden shadow-xl transition-all duration-1000 delay-200 transform"
          :class="[activeCards.has(5) ? 'scale-100 opacity-100' : 'scale-95 opacity-0']"
        >
          <img
            src="../assets/images/solution-3.webp"
            alt="客製化開發 - 網站、AI 工具與自動化"
            title="客製化軟體開發服務"
            class="w-full h-full object-cover hover:scale-105 transition-transform duration-700 rounded-xl"
            width="600"
            height="400"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes pulse-slow {
  0%,
  100% {
    opacity: 0.3;
    transform: scale(1) rotate(0deg);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.05) rotate(2deg);
  }
}

.animate-pulse-slow {
  animation: pulse-slow 12s ease-in-out infinite;
}

/* 文字加粗樣式微調 */
:deep(b) {
  color: #111;
  font-weight: 800;
}
</style>
