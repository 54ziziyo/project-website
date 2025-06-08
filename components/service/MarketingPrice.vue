<script lang="ts" setup>
const servicesPrice = [
  {
    title: "社群發文製作",
    highlight: "單篇貼文圖文(含圖3~4張+文案撰寫)",
    description: "圖文排版優化、社群品牌風格制定、色彩與字體規範",
    price: "NT$1,200元/篇起",
  },
  {
    title: "限時動態設計",
    highlight: "含2-3張動態圖，統一風格設計",
    description: "圖文排版優化、社群品牌風格制定、色彩與字體規範",
    price: "NT$600篇/元起",
  },
  {
    title: "SEO部落格文章撰寫",
    highlight: "依關鍵字與主題撰寫",
    description:
      "包含關鍵字研究、SEO優化、內容撰寫、內部連結和CTA行動呼籲等規劃、圖片ALT標籤設定",
    price: "$5,000元/篇起",
  },
  {
    title: "30秒內短影音剪輯(不含拍攝)",
    highlight: "剪接、字幕、配樂",
    description: "依毛片語音檔進行剪輯後製",
    price: "NT$800元/組",
  },
  {
    title: "60秒內短影音剪輯(不含拍攝)",
    highlight: "不含拍攝服務，依毛片語音檔進行剪輯後製",
    description: "剪輯後製、含特效、音效、音樂、字幕、字卡",
    price: "NT$1,200元/組",
  },
  {
    title: "「放去設計」一頁式銷售圖",
    highlight: "依主題及內容製圖，依需求報價",
    description: "銷售文案撰寫、視覺風格制定、色彩與字體規範、銷售頁流程設計",
    price: "$15000+",
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
      行銷服務設價目表
    </div>

    <div class="space-y-12 max-w-5xl mx-auto">
      <div class="space-y-12 max-w-5xl mx-auto">
        <div
          v-for="(service, index) in servicesPrice"
          :key="index"
          class="flex flex-col md:flex-row justify-between items-start md:items-center border-b pb-8"
          :class="{ 'border-b': index !== servicesPrice.length - 1 }"
        >
          <div>
            <div class="text-xl font-medium mb-2">{{ service.title }}</div>
            <p class="text-sm text-gray-600 font-semibold">
              {{ service.highlight }}
            </p>
            <p class="text-sm text-gray-600">{{ service.description }}</p>
          </div>
          <div class="text-xl font-bold mt-4 md:mt-0">{{ service.price }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
