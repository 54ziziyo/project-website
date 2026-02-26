<script lang="ts" setup>
const servicesPrice = [
  {
    title: '社群發文製作',
    highlight: '全方位圖文規劃，含 3-4 張圖 + 專業文案',
    description: '專為 FB/IG 演算法設計的圖文內容。包含品牌語調規劃、專業排版設計。',
    price: '2,000',
    unit: '篇起',
  },
  {
    title: '限時動態互動設計',
    highlight: '高互動率風格設計，含 2-3 張動態視覺',
    description: '適合導購、活動倒數或投票互動。強化視覺吸睛度，提升帳號觸及與轉換。',
    price: '1,200',
    unit: '篇起',
  },
  {
    title: 'SEO 部落格內容行銷',
    highlight: '數據驅動撰文，內含關鍵字研究與 SEO 佈局',
    description: '含 1,500 字內文章、內外連結規劃、圖片 ALT 設定及 Meta Description 優化，全面提升搜尋排名。',
    price: '5,000',
    unit: '篇起',
  },
  {
    title: '基礎短影音剪輯 (30s)',
    highlight: '精準字幕、節奏剪接、適合社群推廣',
    description: '依提供之素材進行剪接，包含基礎調色、音效與符合平台規範之格式輸出。',
    price: '1,000',
    unit: '組起',
  },
  {
    title: '進階短影音剪輯 (60s)',
    highlight: '含綜藝字卡、動態特效與轉場',
    description: '適合產品介紹或品牌故事。包含更豐富的視覺效果處理與背景音樂混音。',
    price: '2,000',
    unit: '組起',
  },
]
</script>

<template>
  <div class="relative px-6 py-24 md:py-32 md:px-20 overflow-hidden">
    <div class="absolute pointer-events-none -z-10 opacity-30 top-0 left-0">
      <img
        src="@/assets/images/round-purple.svg"
        alt="裝飾圓形圖案"
        title="Zeona Studio 網站裝飾元素"
        class="max-w-none transform -translate-x-1/2 -translate-y-1/4"
        width="1500"
        height="1500"
      />
    </div>

    <div class="relative z-10 mb-10 md:mb-20">
      <p class="mb-4 text-[#8782FF] text-[16px] md:text-[20px] font-bold text-center tracking-widest uppercase">
        Price List
      </p>
      <div class="text-[32px] md:text-[42px] font-bold leading-tight text-center text-[#2D2D2D]">行銷服務價目表</div>
      <div class="w-12 h-1 bg-[#8782FF] mx-auto my-6 rounded-full"></div>
      <h1 class="text-gray-600 text-[16px] md:text-[20px] text-center md:mb-4">
        包月社群行銷、內容行銷、短影音製作等專業服務<br />助你打造持續成長的品牌聲量與影響力
      </h1>
    </div>

    <div class="max-w-6xl mx-auto relative z-10">
      <div class="grid gap-6">
        <div
          v-for="(service, index) in servicesPrice"
          :key="index"
          class="group flex flex-col md:flex-row justify-between items-start md:items-center p-6 md:p-8 rounded-3xl transition-all duration-300 bg-[#8782ff05] border-[#8782ff25] shadow-sm md:bg-transparent md:border-transparent md:shadow-none md:hover:bg-white md:hover:shadow-xl md:hover:shadow-[#8782ff15] md:hover:border-[#8782ff20]"
        >
          <div class="flex items-start md:pr-10">
            <span
              class="hidden md:block text-[24px] font-black text-[#8782ff9e] mr-6 mt-1 group-hover:text-[#8782FF] transition-colors"
            >
              {{ (index + 1).toString().padStart(2, '0') }}
            </span>

            <div>
              <div class="text-xl font-bold mb-2 text-[#333] flex items-center">
                {{ service.title }}
                <span class="ml-3 h-[1px] w-0 group-hover:w-8 bg-[#8782FF] transition-all duration-500"></span>
              </div>
              <p class="text-[15px] font-semibold mb-2">
                {{ service.highlight }}
              </p>
              <p class="text-sm text-gray-400 leading-relaxed max-w-2xl group-hover:text-gray-600 transition-colors">
                {{ service.description }}
              </p>
            </div>
          </div>

          <div class="mt-6 md:mt-0 flex items-baseline whitespace-nowrap">
            <span class="text-sm font-bold text-[#8782FF] mr-1">NT$</span>
            <span class="text-3xl font-black text-[#8782FF] tracking-tight">{{ service.price }}</span>
            <span class="ml-1 text-sm text-gray-400 font-medium">元/{{ service.unit }}</span>
          </div>
        </div>
      </div>

      <div class="mt-16 p-8 bg-white/40 backdrop-blur-md rounded-[2rem] border border-[#8782ff20] shadow-sm">
        <div class="flex items-start">
          <span class="text-xl mr-4">💡</span>
          <p class="text-gray-500 text-sm leading-7">
            <span class="text-[#8782FF] font-bold block mb-1">溫馨提醒</span>
            以上定價包含 1-2 次微調修正。若需額外增圖、大幅更動腳本或急件處理，將依需求另行報價。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 增加平滑滾動質感 */
.group {
  backface-visibility: hidden;
  will-change: transform, box-shadow;
}
</style>
