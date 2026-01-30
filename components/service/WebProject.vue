<script lang="ts" setup>
const websitePlans = [
  {
    title: '閃電上線包',
    subtitle: '新創企業團隊 / 品牌形象 / 短期活動',
    price: '30,000',
    unit: '/ 台幣起',
    isPopular: false,
    features: [
      '半客製化一頁式網站 (限單頁)',
      'RWD 響應式設計 (區塊限制 5 個內)',
      '基礎 SEO 設定 (Meta 標籤優化)',
      'Google Analytics 安裝',
      '一次性部署 (靜態)',
      '主機與網域代辦'
    ]
  },
  {
    title: '電商啟動包',
    subtitle: '電商品牌 / 實體轉線上 / 購物車系統',
    price: '68,000',
    unit: '/ 台幣起',
    isPopular: true,
    features: [
      '多頁式 WordPress 全功能網站',
      '購物車 + 金流串接 (綠界 / Line Pay)',
      '會員系統 + 訂單管理後台',
      '後台上架與使用教學',
      '部落格 BLOG',
      '主機與網域代辦'
    ]
  },
  {
  title: '旗艦方案',
  subtitle: '全客製系統 / 中大規模平台 / 複雜業務邏輯',
  price: '依需求報價',
  unit: '',
  isPopular: false,
  features: [
    '全客製化設計、開發與系統架構規劃',
    '專屬會員系統',
    '企業級資料庫建置與 API 深度串接',
    '高安全性資安佈局 (含 reCAPTCHA 驗證)',
    '各項高度複雜之客製化功能開發'
  ]
}
]
</script>
<template>
  <div class="relative md:py-40 py-32 overflow-hidden">
    <div class="absolute left-1/2 -translate-x-1/2 md:translate-x-0 min-[480px]:text-[100px] min-[737px]:text-[120px] top-10 md:left-24 text-[70px] md:text-[200px] font-bold md:text-[#FAFAFA] leading-none text-gray-100 opacity-50 select-none z-0">
      Project
    </div>

    <div class="relative px-6 flex justify-center flex-col items-center text-center z-10">
      <div class="max-w-3xl mx-auto">
        <div class="mb-4 text-[#8782FF] text-[16px] md:text-[24px] font-bold">多樣化的選擇</div>
        <div class="text-[28px] md:text-[52px] font-bold leading-none mb-[32px]">選擇最適合你的計劃</div>
        <div class="h-[1px] w-[70px] bg-[#A2A2A2] mb-[20px] mx-auto" />
        <p class="text-[#5B5B5B] text-[14px] md:text-[20px] mb-1">若您有活靈活現的想法想要被實現</p>
        <p class="text-[#5B5B5B] text-[14px] md:text-[20px]">我可以幫您評估，隨時歡迎詢洽！</p>
      </div>

      <div class="grid w-full max-w-7xl lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mt-[120px] mt-12 gap-10 md:gap-6 items-stretch">
        <div
          v-for="plan in websitePlans"
          :key="plan.title"
          class="bg-white/60 backdrop-blur-md relative px-8 py-12 flex flex-col space-y-[28px] border-2 border-[#8782FF] transition-all duration-300 transform shadow-lg group"
          :class="[
            plan.isPopular 
              ? 'rounded-3xl lg:scale-105 lg:-translate-y-6 lg:z-10 shadow-xl hover:shadow-2xl lg:hover:-translate-y-10 hover:-translate-y-2' 
              : 'rounded-2xl hover:shadow-xl hover:-translate-y-2 z-0'
          ]"
        >
          <div v-if="plan.isPopular" class="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#8782FF] text-white px-6 py-1 rounded-full text-sm font-bold tracking-widest shadow-md z-20 whitespace-nowrap">
            MOST POPULAR
          </div>

          <div class="space-y-2">
            <div class="text-[20px] lg:text-[28px] font-bold text-start text-[#4A4A4A]">{{ plan.title }}</div>
            <div class="text-[16px] md:text-[18px] text-[#5B5B5B] text-start">{{ plan.subtitle }}</div>
          </div>

          <div class="text-base flex items-end space-x-2">
            <div class="text-[24px] xl:text-[32px] leading-none font-black" :class="plan.isPopular ? 'text-[#8782FF]' : 'text-[#4A4A4A]'">
              NT＄{{ plan.price }}
            </div>
            <span v-if="plan.unit" class="text-[14px] lg:text-[16px] text-[#5B5B5B]">{{ plan.unit }}</span>
          </div>

          <div
            class="text-base font-bold py-3 rounded-lg text-center cursor-pointer transition-all duration-300 active:scale-95 border border-[#8782FF]"
            :class="plan.isPopular 
              ? 'bg-[#8782FF] text-white shadow-md hover:bg-[#6f6bff]' 
              : 'text-[#8782FF] hover:bg-[#8782FF] hover:text-white'"
          >
            選擇方案
          </div>

          <div class="space-y-4">
            <div v-for="feature in plan.features" :key="feature" class="flex items-start text-start">
              <div class="flex-shrink-0 mt-1 w-5 h-5 flex items-center justify-center">
                <Icon name="pajamas:check-sm" class="text-[#8782FF] w-full h-full" />
              </div>
              <span class="ml-3 text-[#5B5B5B] text-sm md:text-base leading-relaxed tracking-wide">
                {{ feature }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>