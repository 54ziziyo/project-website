<script lang="ts" setup></script>
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
        <div class="text-[28px] md:text-[52px] font-bold leading-none mb-[32px]">選擇最適合你的計劃</div>
        <span class="h-[1px] w-[70px] bg-[#A2A2A2] mb-[20px]" />
        <div class="text-[#5B5B5B] text-[14px] md:text-[20px] mb-1 text-center">若您有活靈活現的想法想要被實現</div>
        <div class="text-[#5B5B5B] text-[14px] md:text-[20px]">我們可以幫您評估，隨時歡迎詢洽！</div>
      </div>

      <!-- 方案卡片 -->
      <div
        class="grid w-full md:px-20 lg:grid-cols-3 md:grid-cols-2 md:gap-4 gap-0 lg:space-x-4 lg:mt-[100px] mt-12 grid-cols-1 space-y-8 md:space-y-0"
      >
        <!-- 卡片1 -->
        <div
          class="bg-white/50 backdrop-blur-sm rounded-2xl hover:border-2 shadow-lg hover:shadow-xl relative px-8 py-12 flex flex-col space-y-[28px] border border-[#8782FF] duration-300 transform hover:-translate-y-2"
        >
          <div class="space-y-2">
            <div class="text-[20px] font-bold text-start">基礎行銷維運方案</div>
            <div class="text-[18px] text-[#5B5B5B] text-start">新創品牌、小型帳號，社群穩定更新</div>
          </div>
          <div class="text-base flex items-end space-x-2">
            <div class="text-[32px] lg:text-[40px] leading-none">NT＄15,000</div>
            <span class="text-[14px] lg:text-[16px] text-[#5B5B5B]">元/月</span>
          </div>
          <div
            class="text-base text-[#5B5B5B] border rounded-sm border-[#8782FF] w-full py-3 text-center cursor-pointer hover:bg-[#8782FF] hover:text-white transition-colors duration-300"
          >
            選擇方案
          </div>
          <div class="lg:space-y-5 lg:space-y-5 space-y-3">
            <div class="space-x-1 flex items-center">
              <Icon name="pajamas:check-sm" width="24" height="24" class="text-[#8782FF]" />
              <span class="ml-2 text-[#5B5B5B]">8 篇貼文含圖文（版面設計與整體規劃）</span>
            </div>
            <div class="space-x-1 flex items-center">
              <Icon name="pajamas:check-sm" width="24" height="24" class="text-[#8782FF]" />
              <span class="ml-2 text-[#5B5B5B]">6 組限動（含2-3張動態圖）</span>
            </div>
            <div class="space-x-1 flex items-center">
              <Icon name="pajamas:check-sm" width="24" height="24" class="text-[#8782FF]" />
              <span class="ml-2 text-[#5B5B5B]">基本內容規劃（提供發文方向建議）</span>
            </div>
            <div class="space-x-1 flex items-center">
              <Icon name="pajamas:check-sm" width="24" height="24" class="text-[#8782FF]" />
              <span class="ml-2 text-[#5B5B5B]">貼文設計與文案撰寫（可額外加購＋）</span>
            </div>
          </div>
        </div>

        <!-- 卡片2 -->
        <div
          class="bg-white/50 backdrop-blur-sm border hover:border-2 relative lg:bottom-4 rounded-2xl shadow-lg hover:shadow-xl relative px-8 py-12 flex flex-col space-y-[28px] border border-[#8782FF] duration-300 transform hover:-translate-y-2"
        >
          <div class="space-y-2">
            <div class="font-bold flex justify-between items-center">
              <div class="text-[20px]">穩定品牌經營方案</div>
              <span class="text-[#8782FF] text-[16px]">最受歡迎</span>
            </div>
            <div class="text-[18px] text-[#5B5B5B] text-left">穩定經營中品牌，需要完整規劃</div>
          </div>
          <div class="text-base flex items-end space-x-2">
            <div class="text-[32px] lg:text-[40px] leading-none">NT＄25,000</div>
            <span class="text-[14px] lg:text-[16px] text-[#5B5B5B]">元/月</span>
          </div>
          <div
            class="text-base border rounded-sm hover:bg-[#6f6bff] w-full py-3 text-center cursor-pointer bg-[#8782FF] text-white transition-colors duration-300"
          >
            選擇方案
          </div>
          <div class="lg:space-y-5 space-y-3">
            <div class="space-x-1 flex items-center">
              <Icon name="pajamas:check-sm" width="24" height="24" class="text-[#8782FF]" />
              <span class="ml-2 text-[#5B5B5B]">12 篇貼文含圖文（版面設計與整體規劃）</span>
            </div>
            <div class="space-x-1 flex items-center">
              <Icon name="pajamas:check-sm" width="24" height="24" class="text-[#8782FF]" />
              <span class="ml-2 text-[#5B5B5B]">10 組限動（含2-3張動態圖）</span>
            </div>
            <div class="space-x-1 flex items-center">
              <Icon name="pajamas:check-sm" width="24" height="24" class="text-[#8782FF]" />
              <span class="ml-2 text-[#5B5B5B]">完整社群內容規劃(主題設計/發文策略)</span>
            </div>
            <div class="space-x-1 flex items-center">
              <Icon name="pajamas:check-sm" width="24" height="24" class="text-[#8782FF]" />
              <span class="ml-2 text-[#5B5B5B]">貼文設計/文案撰寫/排程發佈</span>
            </div>
            <div class="space-x-1 flex items-center">
              <Icon name="pajamas:check-sm" width="24" height="24" class="text-[#8782FF]" />
              <span class="ml-2 text-[#5B5B5B]">不含短影音剪輯（可額外加購＋）</span>
            </div>
          </div>
        </div>

        <!-- 卡片3 -->
        <div
          class="bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg hover:border-2 hover:shadow-xl relative px-8 py-12 flex flex-col space-y-[28px] border border-[#8782FF] duration-300 transform hover:-translate-y-2"
        >
          <div class="space-y-2">
            <div class="text-[20px] font-bold text-left">影音＋社群整合方案</div>
            <div class="text-[18px] text-[#5B5B5B] text-left">需要影音曝光的中小型品牌</div>
          </div>
          <div class="text-base flex items-end space-x-2">
            <div class="text-[32px] lg:text-[40px] leading-none">NT＄30,000</div>
            <span class="text-[14px] lg:text-[16px] text-[#5B5B5B]">元/月</span>
          </div>
          <div
            class="text-base text-[#5B5B5B] border rounded-sm border-[#8782FF] w-full py-3 text-center cursor-pointer hover:bg-[#8782FF] hover:text-white transition-colors duration-300"
          >
            選擇方案
          </div>
          <div class="lg:space-y-5 space-y-3">
            <div class="space-x-1 flex items-center">
              <Icon name="pajamas:check-sm" width="24" height="24" class="text-[#8782FF]" />
              <span class="ml-2 text-[#5B5B5B]">12 篇貼文含圖文（版面設計與整體規劃）</span>
            </div>
            <div class="space-x-1 flex items-center">
              <Icon name="pajamas:check-sm" width="24" height="24" class="text-[#8782FF]" />
              <span class="ml-2 text-[#5B5B5B]">10 組限動（含2-3張動態圖）</span>
            </div>
            <div class="space-x-1 flex items-center">
              <Icon name="pajamas:check-sm" width="24" height="24" class="text-[#8782FF]" />
              <span class="ml-2 text-[#5B5B5B]"> 2支60秒短影音剪輯（含字幕&特效）</span>
            </div>
            <div class="space-x-1 flex items-center">
              <Icon name="pajamas:check-sm" width="24" height="24" class="text-[#8782FF]" />
              <span class="ml-2 text-[#5B5B5B]">完整社群內容規劃、發文排程</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
