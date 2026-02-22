<script lang="ts" setup>
const isVisible = ref(false)
const sectionRef = ref(null)
const activeCards = ref(new Set())

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
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
  }, { threshold: 0.1 })

  if (sectionRef.value) observer.observe(sectionRef.value)
})
</script>

<template>
  <div ref="sectionRef" class="relative pb-[50px] pt-30 md:py-[120px] overflow-x-clip bg-white font-sans">
    
    <div class="absolute md:-top-[20%] -right-[70%] pointer-events-none">
      <img src="../assets/images/round-purple.svg" alt="circle pattern" class="max-w-none" width="1500" height="1500" />
    </div>

    <div class="relative z-10 px-8 md:px-[6.875rem] max-w-6xl mx-auto">
      <div 
        class="flex justify-center flex-col items-center mb-16 md:mb-24 transition-all duration-1000 transform"
        :class="[isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']"
      >
        <div class="mb-4 text-[#5B5B5B] text-lg md:text-2xl font-bold tracking-widest">好消息是</div>
        <h2 class="text-[clamp(24px,5vw,52px)] text-center font-black leading-[1.2] text-gray-900">
          困難的問題<br class="md:hidden" />
          <span class="text-[#8782FF] whitespace-nowrap">
            我都幫你解決了
          </span>
        </h2>
        <div class="w-16 h-1.5 bg-[#8782FF] mt-12 rounded-full"></div>
      </div>

      <div class="grid md:grid-cols-2 grid-cols-1 gap-12 md:gap-20 mt-16 md:mt-20 items-center">
        
        <div 
          class="solution-card order-1 flex flex-col justify-center text-center md:text-left transition-all duration-1000 transform"
          :class="[activeCards.has(0) ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0']"
        >
          <div class="text-[24px] font-bold text-[#8782FF] mb-2 uppercase tracking-wide">01. 全站式輕量服務</div>
          <div class="text-[20px] md:text-[28px] font-extrabold mb-4 text-[#333] leading-snug">
            我從技術到行銷<br />提供完整輕解決方案
          </div>
          <div class="text-[#5B5B5B] text-base md:text-lg leading-relaxed">
            適合品牌行銷、中小型電商與企業，讓您告別瑣碎的溝通，專注於品牌成長。
          </div>
        </div>

        <div 
          class="mb-8 md:mb-0 solution-card order-2 rounded-2xl overflow-hidden shadow-xl transition-all duration-1000 delay-200 transform"
          :class="[activeCards.has(1) ? 'scale-100 opacity-100' : 'scale-95 opacity-0']"
        >
          <img src="../assets/images/solution-1.jpg" alt="" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700 rounded-xl" />
        </div>

        <div 
          class="solution-card order-3 md:order-4 flex flex-col justify-center text-center md:text-left transition-all duration-1000 transform"
          :class="[activeCards.has(2) ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0']"
        >
          <div class="text-[24px] font-bold text-[#8782FF] mb-2 uppercase tracking-wide">02. 可驗證的調整</div>
          <div class="text-[20px] md:text-[28px] font-extrabold mb-4 text-[#333] leading-snug">
            用數據說真話的成長夥伴
          </div>
          <div class="text-[#5B5B5B] text-base md:text-lg leading-relaxed">
            提供透明化的「網站健康度體檢報告」，用第三方工具呈現真實數據，並根據市場反應動態調整經營方向。
          </div>
        </div>

        <div 
          class="mb-8 md:mb-0 solution-card order-4 md:order-3 rounded-2xl overflow-hidden shadow-xl transition-all duration-1000 delay-200 transform"
          :class="[activeCards.has(3) ? 'scale-100 opacity-100' : 'scale-95 opacity-0']"
        >
          <img src="../assets/images/solution-2.jpg" alt="" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700 rounded-xl" />
        </div>

        <div 
          class="solution-card order-5 flex flex-col justify-center text-center md:text-left transition-all duration-1000 transform"
          :class="[activeCards.has(4) ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0']"
        >
          <div class="text-[24px] font-bold text-[#8782FF] mb-2 uppercase tracking-wide">03. 訂閱制更放心</div>
          <div class="text-[20px] md:text-[28px] font-extrabold mb-4 text-[#333] leading-snug">
            長期的合作<br />不必每次都從新開始
          </div>
          <div class="text-[#5B5B5B] text-base md:text-lg leading-relaxed">
            收費固定，讓我更懂您的品牌需求。不再擔心每個月需要重新報價，有效控制浮動的營運成本。
          </div>
        </div>

        <div 
          class="mb-8 md:mb-0 solution-card order-6 rounded-2xl overflow-hidden shadow-xl transition-all duration-1000 delay-200 transform"
          :class="[activeCards.has(5) ? 'scale-100 opacity-100' : 'scale-95 opacity-0']"
        >
          <img src="../assets/images/solution-3.webp" alt="" class=" w-full h-full object-cover hover:scale-105 transition-transform duration-700 rounded-xl" />
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes pulse-slow {
  0%, 100% { opacity: 0.3; transform: scale(1) rotate(0deg); }
  50% { opacity: 0.5; transform: scale(1.05) rotate(2deg); }
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