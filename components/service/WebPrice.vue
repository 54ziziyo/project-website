<script lang="ts" setup>
const servicesPrice = [
  {
    title: "社群製圖",
    highlight: "多圖貼文排版製作",
    description: "圖文排版優化、社群品牌風格制定、色彩與字體規範、版面模擬圖",
    price: "$1200+",
  },
  {
    title: "社群代操",
    highlight: "6 篇貼文 + 1 支短影音 + 5 組限動",
    description: "社群內容企劃、視覺風格制定、內容產製更新、限動規劃與發布",
    price: "$12000+",
  },
  {
    title: "短影音剪輯",
    highlight: "依毛片語音檔進行剪輯後製",
    description:
      "不含拍攝服務，90秒影片剪輯後製、含特效、音效、音樂、字幕、字卡",
    price: "$1500+",
  },
  {
    title: "圖片設計",
    highlight: "單張圖、Banner 設計",
    description:
      "各類尺寸之平面圖片設計，主要配合電商、蝦皮平台尺寸，提供 JPG/PNG 圖檔",
    price: "$1200+",
  },
  {
    title: "一頁式銷售圖",
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
