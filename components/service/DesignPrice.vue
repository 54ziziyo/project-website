<script lang="ts" setup>
const servicesPrice = [
  // 1. 品牌剛需，高轉換率
  {
    title: 'Logo設計',
    highlight: '含設計規劃、標準配色、基本應用圖示',
    description: '',
    price: 'NT$10,000元起', // 維持原價（中階合理）
  },
  // 2. 電商/社群高頻需求
  {
    title: '單張社群圖 / Banner設計',
    highlight: '各平台尺寸客製化（FB/IG/蝦皮等）',
    description: '靜態設計，如需動態+GIF另+30%費用', // 新增動態加購選項
    price: 'NT$1,200元起',
  },
  // 3. 節慶行銷常用
  {
    title: '海報 / 活動視覺設計',
    highlight: '客製主視覺，含應用構圖',
    description: '印刷檔另+NT$500', // 明確附加費用
    price: 'NT$3,000元起', // 從NT$2,500調高
  },
  // 4. 品牌優化需求
  {
    title: 'LINE選單設計',
    highlight: '三格或六格版型，含品牌風格制定',
    description: '含色彩與字體規範、圖文排版優化',
    price: 'NT$1,500~3,500元', // 擴大價格區間（依複雜度）
  },
  // 5. B2B或大型活動
  {
    title: 'EDM活動頁設計',
    highlight: '行銷導向版型，含RWD設計',
    description: '含視覺與HTML格式，需提供文案', // 註明客戶配合事項
    price: 'NT$4,000元起',
  },
  // 6. 內容行銷利器
  {
    title: '懶人包 / 資訊圖表',
    highlight: '圖文整合型設計',
    description: '靜態版NT$3,000起／動態網頁版NT$6,000起', // 分級報價
    price: 'NT$3,000元起',
  },
  // 7. 專業分眾服務
  {
    title: 'UI/UX設計（單頁）',
    highlight: 'Wireframe + UI設計 + Figma交付',
    description: '含基礎交互原型，複雜功能另報價', // 註明包含範圍
    price: 'NT$10,000元/頁起',
  },
  // 8. 高單價專案
  {
    title: '網站設計系統 + Wireframe套案',
    highlight: '完整設計原則與元件庫規劃',
    description: '含顏色、字體、Wireframe 5頁內', // 明確交付內容
    price: 'NT$50,000元起',
  },
  // 9. 彈性需求置後
  {
    title: '簡報設計',
    highlight: '依頁數與風格客製',
    description: '基礎版NT$300/頁，含動畫+50%(過場/路徑/互動式動畫)',
    price: 'NT$300元/頁起',
  },
  // 10. 建議新增服務
  {
    title: '社群視覺套組（限時優惠）',
    highlight: 'IG九宮格 + 精選動態封面 + 頭像',
    description: '含3款貼文模板',
    price: 'NT$8,000元',
  },
]
</script>
<template>
  <div class="px-6 pt-12 md:pt-24 pb-24 md:px-20">
    <p class="mb-4 text-[#8782FF] text-[16px] md:text-[24px] font-bold text-center">PRICE LIST</p>
    <div class="text-[28px] md:text-[36px] font-bold leading-none mb-24 text-center">設計服務設價目表</div>

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
