<script lang="ts" setup>
const aProject = [
  {
    title: '季專案優惠',
    highlight: '首月 NT$48,000，含網站製作與完整行銷服務，協助品牌快速打下基礎',
    description: '讓你的品牌社群經營一次到位，持續累積曝光與互動',
  },
  {
    title: '一頁式半客製化網站',
    highlight: '模板挑選、基本修改、部署/網域代辦與綁定',
    description:
      ' • 使用現成的 HTML/CSS/JS 模板，依照客戶品牌簡單修改內容與顏色<br/>• 網站部署與伺服器網域代辦服務<br/>• 不含設計稿、不含後台',
    price: 'NT$25,000元',
  },
  {
    title: '行銷服務(每月服務)',
    highlight: `針對 Facebook / Instagram（適應格式）製作的完整社群貼文內容。<br/>針對主題、活動內容或優惠資訊，進行文案撰寫、圖文設計與排版。`,
    description: `
     • 8 篇貼文含圖文（版面設計與整體規劃）<br/>
 • 6 組限動（含2-3張動態圖）<br/>
 • 基本內容規劃（提供發文方向建議）<br/>
 • 60秒內短影音剪輯
      `,
    price: 'NT$23,200元',
  },
]

const bProject = [
  {
    title: '半年成長經營包',
    highlight: '首月 NT$120,000，含多頁式網站製作與進階行銷設計，協助品牌全方位升級',
    description: '網站＋社群＋內容整合，讓品牌穩定成長、提升專業形象。',
  },
  {
    title: '多頁式 WordPress 網站',
    highlight: '主題挑選、內容規劃、後台教學、SEO與金流串接',
    description:
      ' • 多頁式網站架設（首頁、關於、服務、聯絡等）<br/>• WordPress 後台教學與內容管理<br/>• 基礎 SEO、金流串接、主機與網域代辦<br/>• 可擴充部落格/商品頁',
    price: 'NT$75,000元',
  },
  {
    title: '進階行銷服務(每月服務)',
    highlight: `針對 Facebook / Instagram 量身打造完整內容行銷，結合品牌主題與活動，提升互動與轉換。`,
    description: `
     • 12 篇貼文含圖文（主題設計＋排版）<br/>
 • 10 組限動（含2-3張動態圖）<br/>
 • SEO部落格文章撰寫 1 篇<br/>
 • 60秒內短影音剪輯 2 支<br/>
 • EDM設計 1 份
      `,
    price: 'NT$45,500元',
  },
]

const cProject = [
  {
    title: '一年旗艦品牌包',
    highlight: '首月 NT$179,000，含全客製化網站與高階品牌整合行銷，打造頂級專屬數位門面',
    description: '專屬設計＋全方位內容＋深度行銷，為大型品牌或高需求客戶量身訂製。',
  },
  {
    title: '多頁式 WordPress 網站',
    highlight: '主題挑選、內容規劃、後台教學、SEO與金流串接',
    description:
      ' • 多頁式網站架設（首頁、關於、服務、聯絡等）<br/>• WordPress 後台教學與內容管理<br/>• 進階 SEO、金流串接、主機與網域代辦<br/>• 可擴充部落格/商品頁<br/>• GA分析與熱點分析追蹤',
    price: 'NT$99,000元',
  },
  {
    title: '高階品牌行銷服務(每月服務)',
    highlight: `全平台社群內容、品牌視覺、影音整合，深度經營品牌形象與用戶關係。`,
    description: `
     • 16 篇貼文含圖文（品牌主題＋設計）<br/>
 • 12 組限動（含2-3張動態圖）<br/>
 • SEO部落格文章撰寫 2 篇<br/>
 • 60秒內短影音剪輯 4 支<br/>
 • EDM設計 2 份<br/>
 • 品牌LOGO設計
      `,
    price: 'NT$80,000元',
  },
]
</script>
<template>
  <div class="px-6 pt-24 md:pt-32 pb-24 md:px-20 md:space-y-20 space-y-10 relative overflow-x-clip">
    <div class="absolute top-0 left-0 w-[10%] h-[10%] bg-[#8782FF] rounded-full blur-[120px] opacity-40" />
    <div class="absolute top-[50%] right-0 w-[10%] h-[10%] bg-[#8782FF] rounded-full blur-[120px] opacity-40" />
    <div class="absolute top-[80%] left-0 w-[10%] h-[10%] bg-[#8782FF] rounded-full blur-[120px] opacity-40" />

    <div class="flex flex-col items-center mb-10 space-y-4">
      <div class="text-[28px] md:text-[36px] font-bold leading-none text-center mb-6">整合服務包方案設計</div>
      <div class="w-12 h-1 bg-[#8782FF] rounded-full" />
      <p class="text-gray-600 text-[16px] md:text-[20px] text-center md:mb-10">網站、設計、行銷，一次幫你到位！</p>
    </div>

    <!-- A Project -->
    <div class="space-y-12 max-w-7xl mx-auto">
      <div
        class="bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl relative px-4 py-8 md:p-20 md:pb-12 flex flex-col space-y-[28px] border border-[#8782FF] duration-300 transform"
      >
        <div class="flex flex-row justify-between items-top">
          <div class="text-[24px] md:text-[28px] font-bold leading-none">品牌起步包</div>
          <div class="space-y-2">
            <div class="text-[24px] md:text-[28px] font-bold text-[#8782FF] text-nowrap leading-none">NT$80,000元</div>
            <div class="text-end">原價NT$<span class="line-through">94,600</span>元</div>
          </div>
        </div>
        <div
          v-for="(service, index) in aProject"
          :key="index"
          :class="{ 'border-b ': index !== aProject.length - 1 }"
          class="flex flex-col md:flex-row justify-between items-start md:items-center pb-8"
        >
          <div class="space-y-2">
            <div class="text-xl font-medium mb-2">{{ service.title }}</div>
            <p class="text-sm text-gray-600 font-semibold" v-html="service.highlight" />
            <p class="text-sm text-gray-600 pr-8" v-html="service.description" />
          </div>
          <div class="mt-4 md:mt-0 line-through">
            {{ service.price }}
          </div>
        </div>
      </div>
    </div>

    <!-- B Project -->
    <div class="space-y-12 max-w-7xl mx-auto">
      <div
        class="bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl relative px-4 py-8 md:p-20 md:pb-12 flex flex-col space-y-[28px] border border-[#8782FF] duration-300 transform"
      >
        <div class="flex flex-row justify-between items-top">
          <div class="text-[24px] md:text-[28px] font-bold leading-none">成長經營包</div>
          <div class="space-y-2">
            <div class="text-[24px] md:text-[28px] font-bold text-[#8782FF] text-nowrap leading-none">NT$295,000元</div>
            <div class="text-end">原價NT$<span class="line-through">348,000</span>元</div>
          </div>
        </div>
        <div
          v-for="(service, index) in bProject"
          :key="index"
          :class="{ 'border-b ': index !== bProject.length - 1 }"
          class="flex flex-col md:flex-row justify-between items-start md:items-center pb-8"
        >
          <div class="space-y-2">
            <div class="text-xl font-medium mb-2">{{ service.title }}</div>
            <p class="text-sm text-gray-600 font-semibold" v-html="service.highlight" />
            <p class="text-sm text-gray-600 pr-8" v-html="service.description" />
          </div>
          <div class="mt-4 md:mt-0 line-through">
            {{ service.price }}
          </div>
        </div>
      </div>
    </div>

    <!-- C Project -->
    <div class="space-y-12 max-w-7xl mx-auto">
      <div
        class="bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl relative px-4 py-8 md:p-20 md:pb-12 flex flex-col space-y-[28px] border border-[#8782FF] duration-300 transform"
      >
        <div class="flex flex-row justify-between items-top">
          <div class="text-[24px] md:text-[28px] font-bold leading-none">品牌旗艦包</div>
          <div class="space-y-2">
            <div class="text-[24px] md:text-[28px] font-bold text-[#8782FF] text-nowrap leading-none">NT$798,000元</div>
            <div class="text-end">原價NT$<span class="line-through">949,000</span>元</div>
          </div>
        </div>
        <div
          v-for="(service, index) in cProject"
          :key="index"
          :class="{ 'border-b ': index !== cProject.length - 1 }"
          class="flex flex-col md:flex-row justify-between items-start md:items-center pb-8"
        >
          <div class="space-y-2">
            <div class="text-xl font-medium mb-2">{{ service.title }}</div>
            <p class="text-sm text-gray-600 font-semibold" v-html="service.highlight" />
            <p class="text-sm text-gray-600 pr-8" v-html="service.description" />
          </div>
          <div class="mt-4 md:mt-0 line-through">
            {{ service.price }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
