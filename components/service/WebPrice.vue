<script lang="ts" setup>
// 客製化軟體開發：皆依需求評估報價
const customDevServices = [
  {
    title: '網站系統開發',
    highlight: '前後端開發、資料庫設計、API 串接、雲端部署',
    description:
      '從零打造專屬網站與後台系統，涵蓋會員、金流、資料管理等複雜業務邏輯，並協助上線部署與後續維護。',
    ta: '✅ 適合有獨特功能需求、無法用現成模板達成的品牌與企業',
  },
  {
    title: 'AI 工具開發',
    highlight: 'ChatGPT / Claude / Gemini API 整合、RAG 知識庫、自訂 AI 助理',
    description:
      '依業務需求打造專屬 AI 應用，包含知識庫問答、自動回覆機器人、AI 文件與內容處理流程等客製化工具。',
    ta: '✅ 適合想導入 AI 提升效率的企業或個人創業者',
  },
  {
    title: 'LINE 機器人開發',
    highlight: 'LINE Messaging API、自動回覆、圖文選單、CRM 串接',
    description:
      '開發具備智能對話、自動推播、表單收集等功能的 LINE 官方帳號機器人，串接後台或試算表，實現自動化客戶經營。',
    ta: '✅ 適合需要透過 LINE 經營客戶關係的店家與品牌',
  },
  {
    title: '自動化流程開發',
    highlight: 'Make / n8n / Zapier / Google Apps Script 流程自動化',
    description:
      '串接各種 SaaS 工具與 API，打造無需人工介入的自動化工作流程，省下重複性人力成本，讓系統替你工作。',
    ta: '✅ 適合有大量重複性作業、想降本增效的團隊',
  },
]

// 網站架設服務：我能提供哪些服務（能力說明，方案與費用見下方）
const webServices = [
  {
    title: '網站設計',
    items: ['UI/UX 流程與版型規劃', 'Figma 視覺設計與設計系統', 'RWD 響應式設計適配'],
  },
  {
    title: '網站開發',
    items: ['一頁式形象 / 活動頁 Landing Page', '多頁式品牌官網', 'WordPress 架設與後台教學'],
  },
  {
    title: '電商網站',
    items: ['購物車與會員系統', '訂單與庫存管理後台', '金流物流串接（綠界 / Line Pay）'],
  },
  {
    title: '網站切版',
    items: ['靜態網頁切版（HTML / CSS / JS）', 'Vue / React 動態前端切版', '響應式跨裝置適配'],
  },
  {
    title: '部署與上線',
    items: ['主機與網域代辦', 'HTTPS / SSL 安全憑證', 'SEO 基礎設定'],
  },
]
</script>
<template>
  <div class="px-6 pt-28 md:pt-32 pb-10 md:px-20 md:space-y-24 space-y-16 relative overflow-x-clip">
    <div class="absolute top-0 left-0 w-[10%] h-[10%] bg-[#8782FF] rounded-full blur-[120px] opacity-40" />
    <div class="absolute top-[50%] right-0 w-[10%] h-[10%] bg-[#8782FF] rounded-full blur-[120px] opacity-40" />
    <div class="absolute top-[80%] left-0 w-[10%] h-[10%] bg-[#8782FF] rounded-full blur-[120px] opacity-40" />

    <!-- 頁面標題 -->
    <div class="flex flex-col items-center mb-10 space-y-4">
      <h2 class="text-[28px] md:text-[36px] font-bold leading-none text-center mb-6">軟體開發服務</h2>
      <div class="w-12 h-1 bg-[#8782FF] rounded-full" />
      <h1 class="text-gray-600 text-[16px] md:text-[20px] text-center md:mb-4 leading-relaxed">
        網站、AI 工具、LINE 機器人、自動化流程等客製化軟體開發<br />
        客製化專案皆依實際需求與工時評估報價，歡迎私訊洽談
      </h1>
      <a
        href="https://line.me/ti/p/@768viuqz"
        target="_blank"
        rel="noopener noreferrer"
        class="mt-4 px-8 py-3 text-white text-sm bg-[#8782FF] rounded-full cursor-pointer hover:bg-[#6f6bff] transition-colors duration-300 font-semibold"
      >
        私訊 LINE 詢問報價
      </a>
    </div>

    <!-- 客製化軟體開發 -->
    <div class="space-y-8 max-w-7xl mx-auto">
      <div class="text-center space-y-2">
        <div class="text-[24px] md:text-[32px] font-bold leading-none">客製化軟體開發</div>
        <p class="text-[#8782FF] text-[15px] md:text-[18px] font-bold">依需求評估報價</p>
        <p class="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
          以下皆為客製化專案，沒有固定方案，會依你的規格、複雜度與工時量身評估後報價。
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div
          v-for="(service, index) in customDevServices"
          :key="index"
          class="bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl p-8 md:p-10 flex flex-col space-y-3 border border-[#8782FF] duration-300 transform hover:-translate-y-1"
        >
          <div class="text-xl md:text-2xl font-bold">{{ service.title }}</div>
          <p class="text-sm md:text-base text-[#8782FF] font-semibold">{{ service.highlight }}</p>
          <p class="text-sm md:text-base text-gray-600 leading-relaxed">{{ service.description }}</p>
          <div class="text-sm text-gray-600 pt-1">{{ service.ta }}</div>
        </div>
      </div>
    </div>

    <!-- 網站架設服務（能力說明） -->
    <div class="space-y-8 max-w-7xl mx-auto">
      <div class="text-center space-y-2">
        <div class="text-[24px] md:text-[32px] font-bold leading-none">網站架設服務</div>
        <p class="text-[#8782FF] text-[15px] md:text-[18px] font-bold">我能提供的服務內容</p>
        <p class="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
          從設計、開發到上線，依需求挑選需要的服務；常見的網站方案與起價可參考下方方案。
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <div
          v-for="(service, index) in webServices"
          :key="index"
          class="bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl p-8 flex flex-col space-y-4 border border-[#8782FF] duration-300 transform hover:-translate-y-1"
        >
          <div class="text-xl font-bold">{{ service.title }}</div>
          <ul class="space-y-2 text-sm md:text-base text-gray-600">
            <li v-for="(item, itemIndex) in service.items" :key="itemIndex" class="flex items-start gap-2">
              <span class="text-[#8782FF] mt-0.5 flex-shrink-0">▹</span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
