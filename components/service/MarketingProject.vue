<script lang="ts" setup>
// 💡 將方案內容抽離成資料陣列，代碼更簡潔好維護
const marketingPlans = [
  {
    title: '基礎行銷維運方案',
    subtitle: '新創品牌、小型帳號，社群穩定更新',
    price: '15,000',
    unit: '元/月',
    isPopular: false,
    features: [
      '8 篇貼文含圖文（版面設計與整體規劃）',
      '6 組限動（含 2-3 張動態圖）',
      '基本內容規劃（提供發文方向建議）',
      '貼文設計與文案撰寫（可額外加購）'
    ]
  },
  {
    title: '穩定品牌經營方案',
    subtitle: '穩定經營中品牌，需要完整規劃',
    price: '25,000',
    unit: '元/月',
    isPopular: true,
    features: [
      '12 篇貼文含圖文（版面設計與整體規劃）',
      '10 組限動（含 2-3 張動態圖）',
      '完整社群內容規劃 (主題設計 / 發文策略)',
      '貼文設計 / 文案撰寫 / 排程發佈',
      '不含短影音剪輯（可額外加購＋）'
    ]
  },
  {
    title: '影音＋社群整合方案',
    subtitle: '需要影音曝光的中小型品牌',
    price: '30,000',
    unit: '元/月',
    isPopular: false,
    features: [
      '12 篇貼文含圖文（版面設計與整體規劃）',
      '10 組限動（含 2-3 張動態圖）',
      '2 支 60 秒短影音剪輯（含字幕 & 特效）',
      '完整社群內容規劃、發文排程'
    ]
  }
]
</script>

<template>
  <div class="relative md:py-40 py-32 overflow-hidden">
    <div class="absolute left-1/2 -translate-x-1/2 md:translate-x-0 min-[480px]:text-[100px] min-[737px]:text-[120px] top-10 md:left-24 text-[70px] md:text-[200px] font-bold md:text-[#FAFAFA] leading-none text-gray-100 opacity-50">
      Project
    </div>

    <div class="relative px-4 flex justify-center flex-col items-center text-center">
      <div class="z-10">
        <div class="mb-4 text-[#8782FF] text-[16px] md:text-[24px] font-bold">多樣化的選擇</div>
        <div class="text-[28px] md:text-[52px] font-bold leading-none mb-[32px]">選擇最適合你的計劃</div>
        <div class="h-[1px] w-[70px] bg-[#A2A2A2] mb-[20px] mx-auto" />
        <p class="text-[#5B5B5B] text-[14px] md:text-[20px] mb-1">若您有活靈活現的想法想要被實現</p>
        <p class="text-[#5B5B5B] text-[14px] md:text-[20px]">我可以幫您評估，隨時歡迎詢洽！</p>
      </div>

      <div class="grid w-full md:px-20 lg:grid-cols-3 md:grid-cols-2 lg:mt-[100px] mt-12 grid-cols-1 gap-8 lg:gap-6 items-start">
        
        <div
          v-for="plan in marketingPlans"
          :key="plan.title"
          class="bg-white/60 backdrop-blur-md relative px-8 py-12 flex flex-col space-y-[28px] transition-all duration-300 transform border-2 border-[#8782FF] shadow-lg"
          :class="[
            plan.isPopular 
              ? 'rounded-3xl lg:-translate-y-6 scale-105 z-10 shadow-xl hover:shadow-2xl hover:-translate-y-8' 
              : 'rounded-2xl hover:shadow-xl hover:-translate-y-2 z-0'
          ]"
        >
          <div v-if="plan.isPopular" class="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#8782FF] text-white px-6 py-1 rounded-full text-sm font-bold tracking-widest shadow-md z-20 whitespace-nowrap">
            MOST POPULAR
          </div>

          <div class="space-y-2">
            <div class="text-[20px] lg:text-[28px] font-bold text-start text-[#4A4A4A]">{{ plan.title }}</div>
            <div class="text-[16px] md:text-[18px] text-[#5B5B5B] text-start">{{ plan.subtitle }}</div>
          </div>

          <div class="text-base flex items-end space-x-2">
            <div class="text-[24px] xl:text-[32px] leading-none font-black" :class="plan.isPopular ? 'text-[#8782FF]' : 'text-[#4A4A4A]'">
              NT＄{{ plan.price }}
            </div>
            <span class="text-[14px] lg:text-[16px] text-[#5B5B5B]">{{ plan.unit }}</span>
          </div>

          <div
            class="text-base font-bold py-3 text-center cursor-pointer transition-all duration-300 active:scale-95 border border-[#8782FF]"
            :class="plan.isPopular 
              ? 'bg-[#8782FF] text-white rounded-xl shadow-md hover:bg-[#6f6bff]' 
              : 'text-[#8782FF] rounded-lg hover:bg-[#8782FF] hover:text-white'"
          >
            選擇方案
          </div>

          <div class="space-y-4">
            <div v-for="feature in plan.features" :key="feature" class="flex items-start text-start">
              <div class="flex-shrink-0 mt-1 w-5 h-5 flex items-center justify-center">
                <Icon name="pajamas:check-sm" class="text-[#8782FF] w-full h-full" />
              </div>
              <span class="ml-3 text-[#5B5B5B] text-sm md:text-base leading-relaxed tracking-wide">
                {{ feature }}
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>