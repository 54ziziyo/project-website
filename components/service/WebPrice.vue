<script lang="ts" setup>
const onePagePrice = [
  {
    title: "半客製化網站",
    highlight: "模板挑選、基本修改、部署、網域綁定",
    description:
      "使用現成的 HTML/CSS/JS 模板，依照客戶品牌簡單修改內容與顏色，不含設計稿、不含後台(後台另報價)。",
    price: "NT$15,000-25,000元",
    ta: "✅ 適合內容簡潔、短期活動或需要快速上線的客戶",
  },
  {
    title: "WordPress 網站",
    highlight: "主題挑選、內容更新、WordPress 安裝與教學、基本後台設定",
    description:
      "依客戶需求挑選 WordPress 主題，協助安裝、調整內容、設置網站後台與 SEO 基礎設定。",
    price: "NT$25,000-40,000元",
    ta: "✅ 適合想自己更新內容、有後台需求的中小企業",
  },
  {
    title: "全客製化網站（含設計）",
    highlight: "Figma 設計 + 客製開發 + 部署",
    description:
      "由零開始規劃版型、UI/UX 設計，並轉為 HTML/CSS/JS 程式碼，含響應式設計（RWD），不含後台(後台另報價)。",
    price: "NT$50,000元起",
    ta: "✅ 適合注重品牌形象、想要獨特設計的客戶",
  },
];
const multiPagePrice = [
  {
    title: "多頁式 WordPress 網站",
    highlight: "有後台，客戶可自行更新、擴充",
    description:
      "套用佈景主題＋客製頁面內容（首頁、關於我們、服務介紹、聯絡我們等）",
    price: "NT$45,000元起",
    ta: "✅ 適合長期經營內容的中小企業、部落格",
  },
  {
    title: "電商購物車網站",
    highlight: "完整購物功能 + 會員系統 + 金物流串接 + RWD響應式",
    description:
      "包含產品管理、購物車、會員系統、訂單管理、庫存管理、金流物流串接、促銷活動等完整電商功能，含響應式設計（RWD）及後台管理系統。",
    price: "NT$75,000元起",
    ta: "✅ 適合需要完整線上銷售功能的中小企業、品牌商家、零售業者",
  },
  {
    title: "多頁式全客製化網站（含設計）",
    highlight: "Figma 設計 + 客製開發 + RWD響應式 + 部署",
    description:
      "由零開始規劃版型、UI/UX 設計，並轉為 HTML/CSS/JS 程式碼，含響應式設計（RWD），不含後台(後台另報價)。",
    price: "NT$120,000元起",
    ta: "✅ 適合需要高度客製化的企業或品牌，也適合不需後台、要求高彈性的品牌頁面等",
  },
];

const webDesignPrice = [
  {
    title: "一頁式 UI/UX 設計(純設計)",
    highlight: "依主題及內容製圖，依需求報價",
    description: "包含 Wireframe、UI 設計、設計系統規劃與交付 Figma 檔",
    price: "NT$10,000元起",
    ta: " ✅ 適合已有開發者團隊、只需要視覺設計的企業",
  },
  {
    title: "網站設計系統 + Wireframe 套案(純設計)",
    highlight: "依主題及內容製圖，依需求報價",
    description: "規劃整體設計原則、顏色、字體、元件庫，並包含數個 Wireframe",
    price: "NT$50,000元起",
    ta: "✅ 適合需要統一品牌視覺、長期使用的企業，或中大型網站或平台專案初期規劃",
  },
];
const psdToHtmlPrice = [
  {
    title: "基本靜態網頁切版（HTML/CSS/JS）",
    subtitles: [
      {
        subtitle: "價格範圍",
        items: [
          "簡單 Landing Page：NT$3,000 ~ $15,000元",
          "中型企業形象網站：NT$15,000 ~ $50,000元",
          "複雜互動式頁面（如動畫效果）：NT$50,000元起",
        ],
      },
      {
        subtitle: "適用情境",
        items: [
          "無後端功能、純靜態內容展示",
          "例如：公司官網、活動頁、產品介紹頁",
        ],
      },
    ],
  },
  {
    title: "Vue.js 動態前端切版",
    subtitles: [
      {
        subtitle: "價格範圍",
        items: [
          "簡單 SPA（單頁應用）：NT$20,000元起",
          "複雜後台管理介面：NT$80,000元起",
          "整合 API 或第三方服務：額外加 NT$10,000元起",
        ],
      },
      {
        subtitle: "適用情境",
        items: [
          "需要前端框架（如 Vue、React）的動態功能",
          "例如：會員系統、即時數據儀表板、電商前台",
        ],
      },
    ],
  },
];
</script>
<template>
  <div
    class="px-6 pt-12 md:pt-24 pb-32 md:px-20 md:space-y-20 space-y-10 relative overflow-x-clip"
  >
    <div
      class="absolute top-0 left-0 w-[10%] h-[10%] bg-[#8782FF] rounded-full blur-[120px] opacity-40"
    />
    <div
      class="absolute top-[50%] right-0 w-[10%] h-[10%] bg-[#8782FF] rounded-full blur-[120px] opacity-40"
    />
    <div
      class="absolute top-[80%] left-0 w-[10%] h-[10%] bg-[#8782FF] rounded-full blur-[120px] opacity-40"
    />

    <div class="flex flex-col items-center mb-10 space-y-4">
      <div
        class="text-[28px] md:text-[36px] font-bold leading-none text-center mb-6"
      >
        網站開發服務
      </div>
      <div class="w-12 h-1 bg-[#8782FF] rounded-full" />
      <p class="text-gray-600 text-[16px] md:text-[20px] text-center md:mb-10">
        網站架設、SEO優化、網站維護等服務，讓你的網站更具競爭力
      </p>
    </div>

    <!-- One page website price -->
    <div class="space-y-12 max-w-7xl mx-auto">
      <div
        class="bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl relative px-4 py-8 md:p-20 md:pb-12 flex flex-col space-y-[28px] border border-[#8782FF] duration-300 transform"
      >
        <div class="text-[24px] md:text-[28px] font-bold leading-none mb-2">
          一頁式網站架設
        </div>
        <p class="text-[#8782FF] text-[16px] md:text-[20px] font-bold mb-10">
          PRICE LIST
        </p>
        <div
          v-for="(service, index) in onePagePrice"
          :key="index"
          class="flex flex-col md:flex-row justify-between items-start md:items-center pb-8"
          :class="{ 'border-b': index !== onePagePrice.length - 1 }"
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

    <!-- multi page website price -->
    <div class="space-y-12 max-w-7xl mx-auto">
      <div
        class="bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl relative px-4 py-8 md:p-20 md:pb-12 flex flex-col space-y-[28px] border border-[#8782FF] duration-300 transform"
      >
        <div class="text-[24px] md:text-[28px] font-bold leading-none mb-2">
          多頁式網站架設
        </div>
        <p class="text-[#8782FF] text-[16px] md:text-[20px] font-bold mb-10">
          PRICE LIST
        </p>
        <div
          v-for="(service, index) in multiPagePrice"
          :key="index"
          class="flex flex-col md:flex-row justify-between items-start md:items-center pb-8"
          :class="{ 'border-b ': index !== multiPagePrice.length - 1 }"
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

    <!-- Website Design price -->
    <div class="space-y-12 max-w-7xl mx-auto">
      <div
        class="bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl relative px-4 py-8 md:p-20 md:pb-12 flex flex-col space-y-[28px] border border-[#8782FF] duration-300 transform"
      >
        <div class="text-[24px] md:text-[28px] font-bold leading-none mb-2">
          網站設計
        </div>
        <p class="text-[#8782FF] text-[16px] md:text-[20px] font-bold mb-10">
          PRICE LIST
        </p>
        <div
          v-for="(service, index) in webDesignPrice"
          :key="index"
          class="flex flex-col md:flex-row justify-between items-start md:items-center pb-8"
          :class="{ 'border-b': index !== webDesignPrice.length - 1 }"
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

    <!-- PSD to HTML price -->

    <div class="space-y-12 max-w-7xl mx-auto">
      <div
        class="bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl relative px-4 py-8 md:p-20 md:pb-12 flex flex-col space-y-[28px] border border-[#8782FF] duration-300 transform"
      >
        <div class="text-[24px] md:text-[28px] font-bold leading-none mb-2">
          網站切版
        </div>
        <p class="text-[#8782FF] text-[16px] md:text-[20px] font-bold mb-10">
          PRICE LIST
        </p>
        <div
          class="space-y-2 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-8 pb-12"
        >
          <div
            v-for="(service, index) in psdToHtmlPrice"
            :key="index"
            class="flex items-start space-x-4"
          >
            <div>
              <div class="text-xl font-medium mb-4">{{ service.title }}</div>
              <ul class="list-decimal pl-6 space-y-4 text-gray-600">
                <li
                  v-for="(section, sectionIndex) in service.subtitles"
                  :key="sectionIndex"
                  class="font-semibold"
                >
                  {{ section.subtitle }}
                  <ul class="list-disc pl-6 space-y-2 font-normal mt-2">
                    <li
                      v-for="(item, itemIndex) in section.items"
                      :key="itemIndex"
                    >
                      {{ item }}
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
