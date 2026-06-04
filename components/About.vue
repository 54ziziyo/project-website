<script setup lang="ts">
const { t, tm, rt } = useI18n()
const aboutCards = computed(
  () => tm('about.cards') as { label: string; title: string; desc: string }[],
)

const cardEls = ref<HTMLElement[]>([])
const visibleCards = ref(new Set<number>())
const headerRef = ref<HTMLElement | null>(null)
const visibleHeader = ref(false)

const isInView = (el: HTMLElement, offset = 0.8) => {
  const rect = el.getBoundingClientRect()
  const viewHeight = window.innerHeight || document.documentElement.clientHeight
  return rect.top <= viewHeight * offset && rect.bottom >= 0
}

const collectCardRef = (el: Element | null) => {
  if (el instanceof HTMLElement && !cardEls.value.includes(el)) {
    cardEls.value.push(el)
  }
}

const checkVisibility = () => {
  if (headerRef.value && isInView(headerRef.value)) {
    visibleHeader.value = true
  }
  cardEls.value.forEach((el, idx) => {
    if (isInView(el)) {
      visibleCards.value.add(idx)
    }
  })
}

const handleScroll = () => {
  window.requestAnimationFrame(checkVisibility)
}

onMounted(() => {
  checkVisibility()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
<template>
  <div class="relative pt-24 md:pt-32 pb-20 overflow-x-clip">
    <div class="absolute md:-top-40 md:-left-[65%] bottom-0 -right-[0%]">
      <img
        src="../assets/images/round-purple.svg"
        alt="裝飾圓形圖案"
        title="Zeona Studio 網站裝飾元素"
        class="max-w-none"
        width="1500"
        height="1500"
      />
    </div>

    <div class="relative px-8 pb-30 max-w-6xl mx-auto">
      <div
        ref="headerRef"
        class="text-center transition-all duration-700"
        :class="visibleHeader ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
      >
        <div class="mb-2 md:mb-4 text-[#8782FF] text-[16px] md:text-[16px] md:text-[24px] font-bold">
          {{ t('about.kicker') }}
        </div>
        <h1 class="text-[24px] md:text-[52px] font-bold leading-[1.25] mb:mb-12 mb-8">
          {{ t('about.h1a') }}<br />{{ t('about.h1b') }}<span class="text-[#8782FF]">{{ t('about.h1hi') }}</span>
        </h1>
        <div class="text-[#5B5B5B] text-[14px] md:text-[16px] mb-4 leading-relaxed">
          {{ t('about.p1') }}
          <br />
          {{ t('about.p2') }}
          <br />
          {{ t('about.p3') }}
        </div>
      </div>

      <div class="grid lg:grid-cols-4 grid-cols-2 gap-4 md:gap-8 mt-16 md:mt-20">
        <!-- 卡片1 -->
        <div
          :ref="collectCardRef"
          class="order-1 lg:order-1 bg-white rounded-xl hover:shadow-xl shadow-lg p-5 flex flex-col md:gap-2 transition-all duration-700 transform"
          :class="visibleCards.has(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
        >
          <div class="text-[#8782FF] text-[14px] md:text-base font-bold">{{ rt(aboutCards[0].label) }}</div>
          <div class="text-[16px] md:text-xl font-bold mb-2">{{ rt(aboutCards[0].title) }}</div>
          <div class="text-[#5B5B5B] text-[12px] md:text-sm">
            {{ rt(aboutCards[0].desc) }}
          </div>
        </div>

        <!-- 卡片2 -->
        <div
          :ref="collectCardRef"
          class="order-2 lg:order-2 rounded-2xl hover:shadow-xl shadow-lg flex flex-col transition-all duration-700 transform"
          :class="visibleCards.has(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
        >
          <img
            src="../assets/images/website-building.png"
            alt="網站建置服務 - 品牌官網開發與 UI 設計"
            title="專業網站建置服務"
            class="w-full h-full object-cover rounded-xl"
            width="400"
            height="300"
            loading="lazy"
          />
        </div>

        <!-- 卡片3 -->
        <div
          :ref="collectCardRef"
          class="order-4 lg:order-3 bg-white rounded-xl hover:shadow-xl shadow-lg p-5 flex flex-col md:gap-2 transition-all duration-700 transform"
          :class="visibleCards.has(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
        >
          <div class="text-[#8782FF] text-[14px] md:text-base font-bold">{{ rt(aboutCards[1].label) }}</div>
          <div class="text-[16px] md:text-xl font-bold mb-2">{{ rt(aboutCards[1].title) }}</div>
          <div class="text-[#5B5B5B] text-[12px] md:text-sm">
            {{ rt(aboutCards[1].desc) }}
          </div>
        </div>

        <!-- 卡片4 -->
        <div
          :ref="collectCardRef"
          class="order-3 lg:order-4 rounded-2xl hover:shadow-xl shadow-lg flex flex-col transition-all duration-700 transform"
          :class="visibleCards.has(3) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
        >
          <img
            src="../assets/images/diversified-marketing.png"
            alt="多元行銷服務 - SEO 優化與社群經營"
            title="數位行銷與社群經營服務"
            class="w-full h-full object-cover rounded-xl"
            width="400"
            height="300"
            loading="lazy"
          />
        </div>

        <!-- 卡片5 -->
        <div
          :ref="collectCardRef"
          class="order-6 lg:order-5 rounded-2xl hover:shadow-xl shadow-lg flex flex-col transition-all duration-700 transform"
          :class="visibleCards.has(4) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
        >
          <img
            src="../assets/images/high-quality.png"
            alt="高品質客製化設計 - 獨特品牌視覺"
            title="客製化品牌設計服務"
            class="w-full h-full object-cover rounded-xl"
            width="400"
            height="300"
            loading="lazy"
          />
        </div>

        <!-- 卡片6 -->
        <div
          :ref="collectCardRef"
          class="order-5 lg:order-6 bg-white rounded-xl hover:shadow-xl shadow-lg p-5 flex flex-col md:gap-2 transition-all duration-700 transform"
          :class="visibleCards.has(5) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
        >
          <div class="text-[#8782FF] text-[14px] md:text-base font-bold">{{ rt(aboutCards[2].label) }}</div>
          <div class="text-[16px] md:text-xl font-bold mb-2">{{ rt(aboutCards[2].title) }}</div>
          <div class="text-[#5B5B5B] text-[12px] md:text-sm">
            {{ rt(aboutCards[2].desc) }}
          </div>
        </div>

        <!-- 卡片7 -->
        <div
          :ref="collectCardRef"
          class="order-7 lg:order-7 rounded-2xl hover:shadow-xl shadow-lg flex flex-col transition-all duration-700 transform"
          :class="visibleCards.has(6) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
        >
          <img
            src="../assets/images/brand-context.png"
            alt="品牌脈絡規劃 - 數位策略建置"
            title="品牌策略規劃服務"
            class="w-full h-full object-cover rounded-xl"
            width="400"
            height="300"
            loading="lazy"
          />
        </div>

        <!-- 卡片8 -->
        <div
          :ref="collectCardRef"
          class="order-8 lg:order-8 bg-white rounded-xl hover:shadow-xl shadow-lg p-5 flex flex-col md:gap-2 transition-all duration-700 transform"
          :class="visibleCards.has(7) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
        >
          <div class="text-[#8782FF] text-[14px] md:text-base font-bold">{{ rt(aboutCards[3].label) }}</div>
          <div class="text-[16px] md:text-xl font-bold mb-2">{{ rt(aboutCards[3].title) }}</div>
          <div class="text-[#5B5B5B] text-[12px] md:text-sm">
            {{ rt(aboutCards[3].desc) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
