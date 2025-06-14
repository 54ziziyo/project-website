<script lang="ts" setup>
const servicesPrice = [
  {
    title: "社群發文製作",
    highlight: "單篇貼文圖文，含3-4張圖+文案撰寫(增圖可額外加購)",
    description:
      "這些是針對 Facebook / Instagram（適應格式）製作的完整社群貼文內容。你提供主題、活動內容或優惠資訊，我來負責文案撰寫、圖文設計與排版。",
    price: "NT$2,000元/篇起",
  },
  {
    title: "限時動態設計",
    highlight: "含2-3張動態圖，統一風格設計",
    description:
      "這是適合放在 Instagram / Facebook 限動的設計內容，通常會搭配主題活動、倒數、投票互動、教學類圖片等。會搭配貼文主題，也可獨立操作（例如上新提醒、快閃優惠、品牌日常等）。",
    price: "NT$1,000篇/元起",
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
];
</script>
<template>
  <div class="px-6 pt-12 md:pt-24 pb-24 md:px-20">
    <p
      class="mb-4 text-[#8782FF] text-[16px] md:text-[24px] font-bold text-center"
    >
      PRICE LIST
    </p>
    <div
      class="text-[28px] md:text-[36px] font-bold leading-none mb-24 text-center"
    >
      行銷服務價目表
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
            <p class="text-sm text-gray-600 mr-20">
              {{ service.highlight }}
            </p>
            <p class="text-sm text-gray-600 mr-20">{{ service.description }}</p>
          </div>
          <div class="text-xl font-bold mt-4 md:mt-0 whitespace-nowrap">
            {{ service.price }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
