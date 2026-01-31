<script lang="ts" setup>
const problemPoints = ref([
  {
    title: '網站做了，客人看一眼就跑',
    problems: [
      { label: '載入慢還跑版', desc: '訪客 3 秒就離開' },
      { label: '內容雜亂無重點', desc: '客戶看不懂你做什麼' },
      { label: '看起來很陽春', desc: '被懷疑是詐騙網站' },
    ],
  },
  {
    title: '行銷預算像丟進黑洞',
    problems: [
      { label: '漏斗漏洞沒修補', desc: '轉換率持續低下' },
      { label: '缺乏數據分析', desc: '不知道錢花去哪' },
      { label: '需求斷層', desc: '每次換廠商都要重新解釋' },
    ],
  },
  {
    title: '外包合作像短期戀愛',
    problems: [
      { label: '報價不透明', desc: '同樣需求每次價格都變' },
      { label: '缺乏長期累積', desc: '換個廠商就要重新來過' },
      { label: '市場在變競爭對手在跑', desc: '你的網站卻停在原地' },
    ],
  },
])

const observerItems = ref<HTMLElement[]>([])
const activeIndexes = ref<Set<number>>(new Set())
const isMobile = ref(false)

const dotColors =[ 'text-[#8782FF]', 'text-[#ff333d]', 'text-[#ff804a]']

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = Number((entry.target as HTMLElement).dataset.index)
        activeIndexes.value.add(index)
      }
    })
  }, { threshold: 0.1 })

  observerItems.value.forEach(item => observer.observe(item))

  const updateMobile = () => {
    isMobile.value = window.matchMedia('(max-width: 639px)').matches
  }
  updateMobile()
  window.addEventListener('resize', updateMobile, { passive: true })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', updateMobile)
  })
})
</script>

<template>
  <section class="relative bg-white py-24 md:py-40 overflow-hidden font-sans">
    <div class="absolute top-1/4 -right-10 w-96 h-96 bg-gray-50 rounded-full blur-[120px] -z-10 opacity-70" />

    <div class="container mx-auto px-6 flex flex-col items-center">
      <div 
        class="relative mb-24 md:mb-36 text-center transition-all duration-1000 transform"
        :class="[activeIndexes.size > 0 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']"
      >
        <h2 class="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
          你是否也遇到這些問題？
        </h2>
        <div class="w-16 h-1.5 bg-gradient-to-r from-[#8782FF] via-[#ff333d] to-[#ffe3a8] mx-auto rounded-full" />
      </div>

      <div class="w-full max-w-4xl space-y-10">
        <div
          v-for="(item, index) in problemPoints"
          :key="index"
          ref="observerItems"
          :data-index="index"
          class="group relative flex flex-col md:flex-row items-center md:items-center gap-10 md:gap-20 p-8 md:p-12 rounded-[2.5rem] 
          transition-all duration-300 transform border border-transparent hover:border-gray-100 hover:bg-gray-100 bg-gray-50/60"
          :class="[
            activeIndexes.has(index) ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0',
          ]"
          :style="{ transitionDelay: `${index * 150}ms` }"
        >
          
          <div class="flex-shrink-0 flex justify-center md:justify-start md:w-[180px] px-4 overflow-visible">
            <div
              class="text-7xl md:text-[110px] font-black leading-none select-none transition-all duration-700 group-hover:scale-110 group-hover:opacity-100 opacity-80 italic"
              style="
                -webkit-text-stroke: 1px #a6a09b;
                color: transparent;
                font-family: 'Inter', sans-serif;
                padding-right: 0.1em; 
              "
            >
              0{{ index + 1 }}
            </div>
          </div>

          <div class="flex-1 flex flex-col space-y-5 text-center md:text-left md:max-w-[480px]">
            <h3 class="text-2xl md:text-3xl font-extrabold text-gray-800 tracking-tight">
              {{ item.title }}
            </h3>
            
            <div class="space-y-4">
              <div 
                v-for="(prob, pIndex) in item.problems" 
                :key="pIndex"
                class="flex items-start justify-start gap-3 text-gray-500 text-lg"
              >
                <span 
                  class="flex items-center justify-start h-[1.6em] flex-shrink-0"
                  :class="dotColors[index % 3]"
                >
                  <span class="text-[10px]">●</span>
                </span>
                <span class="leading-relaxed text-start">
                  <b>{{ prob.label }}</b>
                  <span v-if="isMobile"><br /></span>
                  <span v-else> </span>
                  → {{ prob.desc }}
                </span>
              </div>
            </div>
          </div>

          <div class="hidden xl:block absolute right-10 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-3 transition-all duration-500">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ff333d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
:deep(b) {
  color: #111;
  font-weight: 800;
  background: linear-gradient(180deg, transparent 70%, #fff1f1 70%);
}

.container {
  max-width: 1200px;
}
</style>