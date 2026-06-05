<script setup lang="ts">
const { t, tm, rt } = useI18n()
const aboutCards = computed(() => tm('about.cards') as { label: string; title: string; desc: string }[])
const aboutPoints = computed(() => tm('about.points') as { label: string; text: string }[])

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
        <h1 class="text-[24px] md:text-[52px] font-bold leading-[1.25] mb:mb-12 mb-8">
          {{ t('about.h1a') }}<br />{{ t('about.h1b') }}<span class="text-[#8782FF]">{{ t('about.h1hi') }}</span>
        </h1>
        <p
          class="text-[#3D3D3D] text-[15px] md:text-[19px] font-medium leading-relaxed max-w-2xl mx-auto mb-8 md:mb-10"
        >
          {{ t('about.lead') }}
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto text-left py-12 md:py-16">
          <div
            v-for="(pt, i) in aboutPoints"
            :key="i"
            class="group relative bg-white rounded-2xl p-6 md:p-8 flex flex-col gap-4 overflow-hidden border border-[#8782FF]/20 shadow-[0_15px_40px_-12px_rgba(135,130,255,0.08)] transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(135,130,255,0.15)]"
          >
            <span
              class="absolute -right-4 -top-6 text-[100px] font-black text-[#8782FF]/5 tracking-tighter select-none pointer-events-none italic"
            >
              0{{ i + 1 }}
            </span>

            <div class="absolute top-0 left-0 w-full h-[3.5px] bg-gradient-to-r from-[#8782FF] to-[#b0adff]"></div>

            <div class="flex flex-col gap-2 relative z-10">
              <span
                class="text-[11px] font-bold text-[#8782FF] tracking-widest uppercase bg-[#8782FF]/10 px-2 py-0.5 rounded w-max"
              >
                PHASE 0{{ i + 1 }}
              </span>
              <h3 class="text-[#3D3D3D] text-[19px] md:text-[22px] font-black tracking-wide">
                {{ rt(pt.label) }}
              </h3>
            </div>

            <p class="text-[#4A4A4A] text-[14px] md:text-[15px] leading-relaxed font-normal relative z-10">
              {{ rt(pt.text) }}
            </p>

            <div
              class="absolute bottom-4 right-4 text-[#8782FF] opacity-0 translate-x-4 translate-y-4 pointer-events-none transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:rotate-45"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9Z" />
              </svg>
            </div>
          </div>
        </div>

        <div class="text-center mt-24 mb-12 md:mb-16">
          <h2 class="text-[22px] md:text-[36px] font-bold text-[#3D3D3D] mb-3 md:mb-4">
            {{ t('about.modulesHeading') }}
          </h2>
          <p class="text-[#5B5B5B] text-[14px] md:text-[16px] max-w-xl mx-auto">
            {{ t('about.modulesSub') }}
          </p>
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
