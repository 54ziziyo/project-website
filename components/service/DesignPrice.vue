<script lang="ts" setup>
const servicesPrice = [
  {
    title: 'Logo 設計',
    highlight: '含設計規劃、標準配色、基本應用圖示',
    description: '打造品牌核心視覺，提供向量原始檔與各種常用格式。',
    price: '10,000',
    unit: '元起',
  },
  {
    title: '單張社群圖 / Banner 設計',
    highlight: '各平台尺寸客製化（FB/IG/蝦皮等）',
    description: '高品質靜態設計。※ 如需動態 GIF 另加 30% 費用。',
    price: '1,200',
    unit: '元起',
  },
  {
    title: '海報 / 活動視覺設計',
    highlight: '客製主視覺，含應用構圖',
    description: '適合大型活動、展覽推廣。※ 需印刷檔另加 NT$500。',
    price: '3,000',
    unit: '元起',
  },
  {
    title: 'LINE 選單設計',
    highlight: '三格或六格版型，含品牌風格制定',
    description: '提升官方帳號質感，含色彩規範與圖文排版優化。',
    price: '1,500',
    unit: '~ 3,500 元',
  },
  {
    title: 'EDM 活動頁設計',
    highlight: '行銷導向版型，含 RWD 響應式規劃',
    description: '含視覺設計與 HTML 格式導出。※ 需由客戶提供文案。',
    price: '4,000',
    unit: '元起',
  },
  {
    title: '懶人包 / 資訊圖表',
    highlight: '數據視覺化與圖文整合設計',
    description: '靜態版 $3,000 起 / 動態網頁版 $6,000 起。',
    price: '3,000',
    unit: '元起',
  },
  {
    title: 'UI/UX 設計（單頁）',
    highlight: 'Wireframe + UI 設計 + Figma 交付',
    description: '含基礎互動原型。※ 複雜功能、後台系統另行報價。',
    price: '10,000',
    unit: '元/頁起',
  },
  {
    title: '網站設計系統 + Wireframe',
    highlight: '完整設計原則與元件庫 (Design System)',
    description: '含顏色、字體、組件規範及 Wireframe 5 頁內。',
    price: '50,000',
    unit: '元起',
  },
  {
    title: '簡報設計 (PPT / Keynote)',
    highlight: '依頁數與風格客製，提升簡報說服力',
    description: '基礎版 $300/頁。※ 含動畫 (過場/路徑/互動) 加收 50%。',
    price: '300',
    unit: '元/頁起',
  },
  {
    title: '社群視覺套組（限時優惠）',
    highlight: 'IG 九宮格 + 精選動態封面 + 品牌頭像',
    description: '包含 3 款可重複使用的貼文模板，一站式解決社群排版。',
    price: '8,000',
    unit: '元',
  },
]
</script>

<template>
  <div class="relative px-6 py-24 md:py-32 md:px-20 overflow-hidden">
    <div class="absolute pointer-events-none -z-10 opacity-30 top-0 left-0">
      <img
        src="@/assets/images/round-purple.svg"
        alt="circle pattern"
        class="max-w-none transform -translate-x-1/2 -translate-y-1/4"
        width="1500"
      />
    </div>

    <div class="relative z-10 mb-10 md:mb-20">
      <p class="mb-4 text-[#8782FF] text-[16px] md:text-[20px] font-bold text-center tracking-widest uppercase">
        Price List
      </p>
      <div class="text-[32px] md:text-[42px] font-bold leading-tight text-center text-[#2D2D2D]">設計服務價目表</div>
      <div class="w-12 h-1 bg-[#8782FF] mx-auto mt-6 rounded-full"></div>
    </div>

    <div class="max-w-5xl mx-auto relative z-10">
      <div class="grid gap-6">
        <div
          v-for="(service, index) in servicesPrice"
          :key="index"
          class="group flex flex-col md:flex-row justify-between items-start md:items-center p-6 md:p-8 rounded-3xl transition-all duration-300 bg-[#8782ff05] border-[#8782ff25] shadow-sm md:bg-transparent md:border-transparent md:shadow-none md:hover:bg-white md:hover:shadow-xl md:hover:shadow-[#8782ff15] md:hover:border-[#8782ff20]"
        >
          <div class="flex items-start md:pr-10">
            <span
              class="hidden md:block text-[24px] font-black text-[#8782ff9e] mr-6 mt-1 group-hover:text-[#8782FF] transition-colors"
            >
              {{ (index + 1).toString().padStart(2, '0') }}
            </span>

            <div>
              <div class="text-xl font-bold mb-2 text-[#333] flex items-center">
                {{ service.title }}
                <span class="ml-3 h-[1px] w-0 group-hover:w-8 bg-[#8782FF] transition-all duration-500"></span>
              </div>
              <p class="text-[15px] font-semibold mb-2 opacity-90 text-[#5B5B5B]">
                {{ service.highlight }}
              </p>
              <p class="text-sm text-gray-400 leading-relaxed max-w-2xl group-hover:text-gray-600 transition-colors">
                {{ service.description }}
              </p>
            </div>
          </div>

          <div class="mt-6 md:mt-0 flex items-baseline whitespace-nowrap">
            <span class="text-sm font-bold text-[#8782FF] mr-1">NT$</span>
            <span class="text-3xl font-black text-[#8782FF] tracking-tight">{{ service.price }}</span>
            <span class="ml-1 text-sm text-gray-400 font-medium">{{ service.unit }}</span>
          </div>
        </div>
      </div>

      <div class="mt-16 p-8 bg-white/40 backdrop-blur-md rounded-[2rem] border border-[#8782ff20] shadow-sm">
        <div class="flex items-start">
          <span class="text-xl mr-4">🎨</span>
          <div>
            <p class="text-gray-500 text-sm leading-7">
              <span class="text-[#8782FF] font-bold block mb-1 text-lg">設計專案小叮嚀</span>
              專案費用依實際需求複雜度進行最終調整。所有設計項目均含
              <span class="text-[#8782FF] font-medium">2 次微調修改</span>。
              若需額外增稿、急件處理或購買商用授權圖庫，將依需求另行報價。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.group {
  backface-visibility: hidden;
  will-change: transform, box-shadow;
}
</style>
