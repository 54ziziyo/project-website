<script lang="ts" setup>
const plans = [
  {
    title: '基礎社群經營包',
    subtitle: '電商小店、個人品牌',
    price: 'NT＄8,800/月',
    originalPrice: 'NT$11,400',
    featured: false,
    items: [
      'LINE選單設計（六格版型）x1',
      '單張社群圖 x4（可混用於FB/蝦皮/IG）',
      '簡報設計 x1（10頁內基礎版）',
    ],
  },
  {
    title: '品牌視覺整合包',
    subtitle: '新創公司、實體店家',
    price: 'NT$18,000/月',
    originalPrice: 'NT$23,500',
    featured: true,
    items: [
      '2張圖設計（含海報/活動視覺）',
      '2張 banner/社群封面',
      '基本社群素材3張',
    ],
  },
]
</script>
<template>
  <div class="relative md:py-40 py-20">
    <!-- 大標 -->
    <div
      class="absolute left-1/2 -translate-x-1/2 md:translate-x-0 min-[480px]:text-[100px] min-[737px]:text-[120px] top-10 md:left-24 text-[70px] md:text-[200px] font-bold md:text-[#FAFAFA] md:right-[30px] leading-none text-gray-100"
    >
      Project
    </div>

    <div class="relative px-4 flex justify-center flex-col items-center text-center">
      <!-- 文字描述 -->
      <div>
        <div class="mb-4 text-[#8782FF] text-[16px] md:text-[24px] font-bold">多樣化的選擇</div>
        <div class="text-[28px] md:text-[52px] font-bold leading-none mb-[32px]">選擇最適合你的每月計劃</div>
        <span class="h-[1px] w-[70px] bg-[#A2A2A2] mb-[20px]" />
        <div class="text-[#5B5B5B] text-[14px] md:text-[20px] mb-1 text-center">若您有活靈活現的想法想要被實現</div>
        <div class="text-[#5B5B5B] text-[14px] md:text-[20px]">我可以幫您評估，隨時歡迎詢洽！</div>
      </div>

      <!-- 方案卡片 -->
      <div
        class="grid max-w-7xl md:px-20 md:grid-cols-2 md:gap-4 gap-0 lg:space-x-4 lg:mt-[100px] mt-12 grid-cols-1 space-y-8 md:space-y-0"
      >
        <div
          v-for="plan in plans"
          :key="plan.title"
          class="bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl relative px-8 py-12 flex flex-col space-y-[28px] border border-[#8782FF] duration-300 transform hover:-translate-y-2"
          :class="plan.featured ? 'bg-white/70' : ''"
        >
          <div class="space-y-2">
            <div class="font-bold flex justify-between items-center">
              <div class="text-[20px]">{{ plan.title }}</div>
              <span v-if="plan.featured" class="text-[#8782FF] text-[16px]">最受歡迎</span>
            </div>
            <div class="text-[18px] text-[#5B5B5B] text-left">{{ plan.subtitle }}</div>
          </div>
          <div class="text-base flex items-end space-x-2">
            <div class="text-[24px] xl:text-[32px] leading-none">{{ plan.price }}</div>
            <span class="text-[14px] lg:text-[16px] text-[#5B5B5B] line-through">{{ plan.originalPrice }}</span>
          </div>
          <div
            class="text-base border rounded-sm w-full py-3 text-center cursor-pointer transition-colors duration-300"
            :class="plan.featured ? 'bg-[#8782FF] text-white hover:bg-[#6f6bff]' : 'text-[#5B5B5B] border-[#8782FF] hover:bg-[#8782FF] hover:text-white'"
          >
            選擇方案
          </div>
          <div class="lg:space-y-5 space-y-4">
            <div v-for="item in plan.items" :key="item" class="flex items-start text-start">
              <div class="flex-shrink-0 mt-1 w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">
                <Icon name="pajamas:check-sm" class="text-[#8782FF] w-full h-full" />
              </div>
              <span class="ml-3 text-[#5B5B5B] text-sm md:text-base leading-relaxed tracking-wide">
                {{ item }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
