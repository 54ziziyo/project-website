<script lang="ts" setup>
const projectPackages = [
  {
    title: '品牌起步包',
    totalPrice: '80,000元',
    originalPrice: '97,600元',
    monthlyPrice: '26,666元',
    duration: '3 個月',
    services: [
      {
        title: '季專案優惠',
        highlight: '首月 NT$49,200元，協助品牌快速打下基礎',
        desc: '包含一頁式網站建置成本、主機網域代辦費用與第一個月的專業社群維運。 ※ 本優惠僅限簽約 3 個月之客戶享有。',
      },
      {
        title: '一頁式半客製化網站',
        highlight: '模板挑選、品牌色系調整、部署代辦與網域綁定',
        desc: '• 僅限單一頁面佈局（Landing Page），區塊以 5 個為限<br/>• 使用現成模板修改內容，不包含 UI/UX 客製化設計稿<br/>※ 排除項目：不含後台管理系統、資料庫建置、會員功能或購物車串接。',
        price: 'NT$25,000元',
      },
      {
        title: '行銷服務(每月服務)',
        highlight: '針對 FB / IG 製作完整社群內容與排版',
        desc: '• 8 篇圖文 + 6 組限動（含 2 次微調修改）<br/>• 30 秒內短影音 1 支（僅限素材剪輯，不含外景拍攝）<br/>※ 規則：需由客戶提供原始素材，如需購買商用圖庫授權另計。',
        price: 'NT$72,600元/季',
      },
    ],
  },
  {
    title: '成長經營包',
    totalPrice: '299,999元',
    originalPrice: '345,000元',
    monthlyPrice: '49,999元',
    duration: '6 個月',
    services: [
      {
        title: '半年成長經營包',
        highlight: '首月 NT$200,000，含多頁式網站製作與進階行銷',
        desc: '網站＋社群＋內容整合，適合已有穩定營收、需提升專業轉化率的品牌。',
      },
      {
        title: '多頁式 WordPress 網站',
        highlight: '內容規劃、後台教學、SEO 與金流串接',
        desc: '• 包含首頁、關於、聯絡等 5 頁內標準佈局，超過 5 頁另計<br/>• 提供基礎金流串接（綠界）與購物車基礎功能<br/>※ 排除項目：不含多國語系、多權限會員系統或客製化資料庫開發。',
        price: 'NT$75,000元',
      },
      {
        title: '進階行銷服務(每月服務)',
        highlight: '量身打造完整內容行銷，提升互動與轉換',
        desc: '• 12 篇圖文 + 10 組限動 + 1 篇 SEO 文章 (1,500字內)<br/>• 60 秒內短影音剪輯 2 支（含基礎字卡特效）<br/>※ 規則：需由客戶提供原始素材，如需購買商用圖庫授權另計。',
        price: 'NT$270,000元/半年',
      },
    ],
  },
]

// 💡 妳要求的專業條款
const terms = [
  { text: '支付方式：採首月啟動金 + 每月維運費分期支付制。' },
  { text: '版權歸屬：網站部署完成並結清尾款後，原始代碼與內容版權歸客戶所有。' },
  { text: '第三方費用：主機、網域、付費外掛之授權費用由客戶自行負擔。' },
]
</script>

<template>
  <div class="px-6 pt-24 md:pt-32 pb-24 md:px-20 space-y-20 relative overflow-x-clip bg-white">
    <div class="flex flex-col items-center mb-10 space-y-4 z-10">
      <p class="text-[#8782FF] font-bold tracking-widest uppercase">Bundle Packages</p>
      <h1 class="text-[32px] md:text-[42px] font-bold text-[#2D2D2D] text-center">一條龍整合服務</h1>
      <div class="w-12 h-1.5 bg-[#8782FF] rounded-full" />
      <p class="text-gray-500 text-center max-w-2xl mt-4">
        針對不同階段的品牌需求，將網站建置與長期行銷深度結合。一次到位，讓您的品牌不僅「上線」，更能「持續成長」。
      </p>
    </div>

    <div v-for="pkg in projectPackages" :key="pkg.title" class="max-w-7xl mx-auto mb-20">
      <div
        class="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500"
      >
        <div
          class="p-8 pt-12 md:p-12 bg-gray-50/50 border-b border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center"
        >
          <div>
            <div class="flex items-center space-x-4 mb-2">
              <h2 class="text-3xl font-black text-[#4A4A4A]">{{ pkg.title }}</h2>
              <span class="bg-[#8782FF] text-white px-3 py-1 rounded-full text-xs font-bold tracking-tighter">{{
                pkg.duration
              }}</span>
            </div>
            <p class="text-gray-600 text-sm">適合需要長期 brand 佈局與專業開發支持的客戶</p>
          </div>

          <div class="mt-6 md:mt-0 text-right">
            <p class="text-gray-600 text-xl line-through mb-1 opacity-60">原價 NT${{ pkg.originalPrice }}</p>
            <div class="flex items-baseline justify-end">
              <span class="text-sm font-bold text-[#8782FF] mr-2 text-nowrap">平均每月</span>
              <span class="text-3xl font-black text-[#8782FF] tracking-tighter">NT${{ pkg.monthlyPrice }}</span>
            </div>
            <p class="mt-2 text-[15px] font-semibold text-gray-500">
              優惠價 <span class="text-[#4A4A4A]">NT${{ pkg.totalPrice }}</span>
            </p>
          </div>
        </div>

        <div class="p-8 md:p-12 space-y-12">
          <div
            v-for="(service, idx) in pkg.services"
            :key="idx"
            class="group flex flex-col md:flex-row justify-between border-b border-gray-50 last:border-0 pb-10"
          >
            <div class="flex-1 md:pr-10">
              <h3 class="text-xl font-bold text-[#4A4A4A] mb-2">{{ service.title }}</h3>
              <p class="text-[#8782FF] text-lg font-semibold mb-2 leading-snug" v-html="service.highlight" />
              <p class="text-gray-600 text-sm leading-relaxed" v-html="service.desc" />
            </div>
            <div v-if="service.price" class="mt-4 md:mt-0 text-gray-800 text-lg italic line-through font-medium">
              {{ service.price }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="max-w-7xl mx-auto mt-16 p-8 bg-white/40 backdrop-blur-md rounded-[2rem] border border-[#8782ff20] shadow-sm"
    >
      <div class="flex flex-col space-y-4">
        <div class="flex items-center space-x-2 text-[#8782FF] mb-2">
          <span class="text-xl">🤝</span>
          <span class="font-bold text-lg">合作規範與服務條款</span>
        </div>
        <div v-for="(term, index) in terms" :key="index" class="flex items-start">
          <span class="text-[#8782FF] mr-3">✔️</span>
          <p class="text-gray-600 text-sm leading-7">{{ term.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
