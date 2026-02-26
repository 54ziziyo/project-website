<script setup lang="ts">
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
      <img src="../assets/images/round-purple.svg" alt="circle pattern" class="max-w-none" width="1500" height="1500" />
    </div>

    <div class="relative px-8 pb-30 max-w-6xl mx-auto">
      <div
        ref="headerRef"
        class="text-center transition-all duration-700"
        :class="visibleHeader ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
      >
        <div class="mb-2 md:mb-4 text-[#8782FF] text-[16px] md:text-[16px] md:text-[24px] font-bold">
          關於 Zeona Studio
        </div>
        <h1 class="text-[24px] md:text-[52px] font-bold leading-[1.25] mb:mb-12 mb-8">
          專業網站設計開發 × 社群行銷<br />您的<span class="text-[#8782FF]">品牌成長夥伴</span>
        </h1>
        <div class="text-[#5B5B5B] text-[14px] md:text-[16px] mb-4">
          嗨，我是 Zeona Studio，擁有 5 年以上網站開發與數位行銷背景。
          <br />
          擅長將複雜的技術轉化為直覺的品牌體驗，協助新創與中小企業建立兼具美感與高效能的線上競爭力。
          <br />
          歡迎聊聊你的想法，我會用最適合你的方式，協助品牌在線上脫穎而出！
        </div>
      </div>

      <div class="grid lg:grid-cols-4 grid-cols-2 gap-4 md:gap-8 mt-16 md:mt-20">
        <!-- 卡片1 -->
        <div
          :ref="collectCardRef"
          class="order-1 lg:order-1 bg-white rounded-xl hover:shadow-xl shadow-lg p-5 flex flex-col md:gap-2 transition-all duration-700 transform"
          :class="visibleCards.has(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
        >
          <div class="text-[#8782FF] text-[14px] md:text-base font-bold">兼具美感與份量</div>
          <div class="text-[16px] md:text-xl font-bold mb-2">網站建置</div>
          <div class="text-[#5B5B5B] text-[12px] md:text-sm">
            我助你輕鬆建立成功的線上品牌，吸引更多目標客群並實現業績增長。
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
          <div class="text-[#8782FF] text-[14px] md:text-base font-bold">讓你被受眾看到</div>
          <div class="text-[16px] md:text-xl font-bold mb-2">多元行銷</div>
          <div class="text-[#5B5B5B] text-[12px] md:text-sm">
            透過網站門面，讓網路上更多人看到你，了解你提供的服務。
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
            alt="高品質客製化設計 - 独特品牌視覺"
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
          <div class="text-[#8782FF] text-[14px] md:text-base font-bold">高CP的價值</div>
          <div class="text-[16px] md:text-xl font-bold mb-2">客製化質感</div>
          <div class="text-[#5B5B5B] text-[12px] md:text-sm">
            做出屬於您的專屬質感，才能在眾多競爭者中，更獨樹一職，成為行業佼佼者。
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
          <div class="text-[#8782FF] text-[14px] md:text-base font-bold">品牌脈絡</div>
          <div class="text-[16px] md:text-xl font-bold mb-2">解決問題</div>
          <div class="text-[#5B5B5B] text-[12px] md:text-sm">
            根據發展脈絡與背景，完成品牌里程碑，為您的產品找到一條自己的路。
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
