<script lang="ts" setup>
const servicesPrice = [
  {
    title: "一頁式半客製化網站",
    highlight: "模板挑選、基本修改、部署、網域綁定",
    description:
      "使用現成的 HTML/CSS/JS 模板，依照客戶品牌簡單修改內容與顏色，不含設計稿、不含後台。",
    price: "NT$6,000元起",
    ta: "✅ 適合內容簡潔、短期活動或需要快速上線的客戶",
  },
  {
    title: "一頁式 WordPress 網站",
    highlight: "主題挑選、內容更新、WordPress 安裝與教學、基本後台設定",
    description:
      "依客戶需求挑選 WordPress 主題，協助安裝、調整內容、設置網站後台與 SEO 基礎設定。",
    price: "$12,000元起",
    ta: "✅ 適合想自己更新內容、有後台需求的中小企業",
  },
  {
    title: "一頁式全客製化網站（含設計）",
    highlight: "Figma 設計 + 客製開發 + 部署",
    description:
      "由零開始規劃版型、UI/UX 設計，並轉為 HTML/CSS/JS 程式碼，含響應式設計（RWD），不含後台。",
    price: "NT$25,000元起",
    ta: "✅ 適合注重品牌形象、想要獨特設計的客戶",
  },
  {
    title: "多頁式 WordPress 網站",
    highlight: "有後台，客戶可自行更新、擴充",
    description:
      "套用佈景主題＋客製頁面內容（首頁、關於我們、服務介紹、聯絡我們等）",
    price: "NT$25,000+",
    ta: "✅ 適合長期經營內容的中小企業、部落格",
  },
  {
    title: "多頁式全客製化網站（含設計）",
    highlight: "Figma 設計 + 客製開發 + RWD響應式 + 部署",
    description: "使用 HTML/CSS/JS/Vue 等技術開發，不含後台",
    price: "NT$10,000元/頁起",
    ta: "✅ 適合需要高度客製化的企業或品牌，也適合不需後台、要求高彈性的品牌頁面等",
  },
  {
    title: "一頁式 UI/UX 設計(純設計)",
    highlight: "依主題及內容製圖，依需求報價",
    description: "包含 Wireframe、UI 設計、設計系統規劃與交付 Figma 檔",
    price: "NT$8,000元/頁起",
    ta: " ✅ 適合已有開發者團隊、只需要視覺設計的企業",
  },
  {
    title: "網站設計系統 + Wireframe 套案(純設計)",
    highlight: "依主題及內容製圖，依需求報價",
    description: "規劃整體設計原則、顏色、字體、元件庫，並包含數個 Wireframe",
    price: "NT$50,000元起",
    ta: "✅ 適合需要統一品牌視覺、長期使用的企業，或中大型網站或平台專案初期規劃",
  },
  {
    title: "前端切版服務（純開發）",
    highlight: "需提供 UIUX 設計稿",
    description: "依 UI 設計圖切版，含 RWD（響應式）與互動效果",
    price: "NT$6,000元/頁起",
    ta: "✅ 適合已有設計稿、需要前端切版的開發團隊",
  },
];
</script>
<template>
  <div class="px-6 py-24 md:px-20">
    <p
      class="mb-4 text-[#8782FF] text-[16px] md:text-[24px] font-bold text-center"
    >
      PRICE LIST
    </p>
    <div
      class="text-[24px] md:text-[52px] font-bold leading-none mb-24 text-center"
    >
      網站架設價目表
    </div>

    <div class="space-y-12 max-w-5xl mx-auto">
      <div class="space-y-12 max-w-5xl mx-auto">
        <div
          v-for="(service, index) in servicesPrice"
          :key="index"
          class="flex flex-col md:flex-row justify-between items-start md:items-center border-b pb-8"
          :class="{ 'border-b': index !== servicesPrice.length - 1 }"
        >
          <div class="space-y-2">
            <div class="text-xl font-medium mb-2">{{ service.title }}</div>
            <p class="text-sm text-gray-600 font-semibold">
              {{ service.highlight }}
            </p>
            <p class="text-sm text-gray-600 pr-8">
              {{ service.description }}
            </p>
            <div class="text-sm text-gray-600">{{ service.ta }}</div>
          </div>
          <div class="text-xl font-bold mt-4 md:mt-0">{{ service.price }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
