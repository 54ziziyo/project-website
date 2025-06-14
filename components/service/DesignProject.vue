<script lang="ts" setup></script>
<template>
  <div class="relative md:py-40 py-20">
    <!-- 大標 -->
    <div
      class="absolute left-1/2 -translate-x-1/2 md:translate-x-0 min-[480px]:text-[100px] min-[737px]:text-[120px] top-10 md:left-24 text-[70px] md:text-[200px] font-bold md:text-[#FAFAFA] md:right-[30px] leading-none text-gray-100"
    >
      Project
    </div>

    <div
      class="relative px-4 flex justify-center flex-col items-center text-center"
    >
      <!-- 文字描述 -->
      <div>
        <div class="mb-4 text-[#8782FF] text-[16px] md:text-[24px] font-bold">
          多樣化的選擇
        </div>
        <div
          class="text-[28px] md:text-[52px] font-bold leading-none mb-[32px]"
        >
          選擇最適合你的每月計劃
        </div>
        <span class="h-[1px] w-[70px] bg-[#A2A2A2] mb-[20px]" />
        <div class="text-[#5B5B5B] text-[14px] md:text-[20px] mb-1 text-center">
          若您有活靈活現的想法想要被實現
        </div>
        <div class="text-[#5B5B5B] text-[14px] md:text-[20px]">
          我們可以幫您評估，隨時歡迎詢洽！
        </div>
      </div>

      <!-- 方案卡片 -->
      <div
        class="grid max-w-7xl md:px-20 md:grid-cols-2 md:gap-4 gap-0 lg:space-x-4 lg:mt-[100px] mt-12 grid-cols-1 space-y-8 md:space-y-0"
      >
        <!-- 卡片1 -->
        <div
          class="bg-white/50 backdrop-blur-sm rounded-2xl hover:border-2 shadow-lg hover:shadow-xl relative px-8 py-12 flex flex-col space-y-[28px] border border-[#8782FF] duration-300 transform hover:-translate-y-2"
        >
          <div class="space-y-2">
            <div class="text-[20px] font-bold text-start">基礎社群經營包</div>
            <div class="text-[18px] text-[#5B5B5B] text-start">
              電商小店、個人品牌
            </div>
          </div>
          <div class="text-base flex items-end space-x-2">
            <div class="text-[32px] lg:text-[40px] leading-none">
              NT＄8,800/月
            </div>
            <span class="text-[14px] lg:text-[16px] text-[#5B5B5B] line-through"
              >NT$11,400</span
            >
          </div>
          <div
            class="text-base text-[#5B5B5B] border rounded-sm border-[#8782FF] w-full py-3 text-center cursor-pointer hover:bg-[#8782FF] hover:text-white transition-colors duration-300"
          >
            選擇方案
          </div>
          <div class="lg:space-y-5 lg:space-y-5 space-y-3">
            <div class="space-x-1 flex items-center">
              <Icon
                name="pajamas:check-sm"
                width="24"
                height="24"
                class="text-[#8782FF]"
              />
              <span class="ml-2 text-[#5B5B5B]"
                >LINE選單設計（六格版型）x1
              </span>
            </div>
            <div class="space-x-1 flex items-center">
              <Icon
                name="pajamas:check-sm"
                width="24"
                height="24"
                class="text-[#8782FF]"
              />
              <span class="ml-2 text-[#5B5B5B]"
                >單張社群圖 x4（可混用於FB/蝦皮/IG）
              </span>
            </div>
            <div class="space-x-1 flex items-center">
              <Icon
                name="pajamas:check-sm"
                width="24"
                height="24"
                class="text-[#8782FF]"
              />
              <span class="ml-2 text-[#5B5B5B]"
                >簡報設計 x1（10頁內基礎版）</span
              >
            </div>
          </div>
        </div>

        <!-- 卡片2 -->
        <div
          class="bg-white/50 backdrop-blur-sm border hover:border-2 relative rounded-2xl shadow-lg hover:shadow-xl relative px-8 py-12 flex flex-col space-y-[28px] border border-[#8782FF] duration-300 transform hover:-translate-y-2"
        >
          <div class="space-y-2">
            <div class="font-bold flex justify-between items-center">
              <div class="text-[20px]">品牌視覺整合包</div>
              <span class="text-[#8782FF] text-[16px]">最受歡迎</span>
            </div>
            <div class="text-[18px] text-[#5B5B5B] text-left">
              新創公司、實體店家
            </div>
          </div>
          <div class="text-base flex items-end space-x-2">
            <div class="text-[32px] lg:text-[40px] leading-none">
              NT$18,000/月
            </div>
            <span class="text-[14px] lg:text-[16px] text-[#5B5B5B] line-through"
              >NT$23,500</span
            >
          </div>
          <div
            class="text-base border rounded-sm hover:bg-[#6f6bff] w-full py-3 text-center cursor-pointer bg-[#8782FF] text-white transition-colors duration-300"
          >
            選擇方案
          </div>
          <div class="lg:space-y-5 space-y-3">
            <div class="space-x-1 flex items-center">
              <Icon
                name="pajamas:check-sm"
                width="24"
                height="24"
                class="text-[#8782FF]"
              />
              <span class="ml-2 text-[#5B5B5B]"
                >2張圖設計（含海報/活動視覺
              </span>
            </div>
            <div class="space-x-1 flex items-center">
              <Icon
                name="pajamas:check-sm"
                width="24"
                height="24"
                class="text-[#8782FF]"
              />
              <span class="ml-2 text-[#5B5B5B]">2張 banner/社群封面 </span>
            </div>
            <div class="space-x-1 flex items-center">
              <Icon
                name="pajamas:check-sm"
                width="24"
                height="24"
                class="text-[#8782FF]"
              />
              <span class="ml-2 text-[#5B5B5B]">基本社群素材3張 </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
