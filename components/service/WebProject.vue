<script lang="ts" setup></script>
<template>
  <div class="relative md:pt-40 pt-20">
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
        <div class="text-[#5B5B5B] text-[14px] md:text-[20px]">我可以幫您評估，隨時歡迎詢洽！</div>
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
            <div class="text-[20px] font-bold text-start">閃電上線包</div>
            <div class="text-[18px] text-[#5B5B5B] text-start">新創企業團隊/品牌形象/短期行銷活動</div>
          </div>
          <div class="text-base flex items-end space-x-2">
            <div class="text-[24px] xl:text-[32px] leading-none">NT＄30,000</div>
            <span class="text-[14px] lg:text-[16px] text-[#5B5B5B]">/台幣起</span>
          </div>
          <div
            class="text-base text-[#5B5B5B] border rounded-sm border-[#8782FF] w-full py-3 text-center cursor-pointer hover:bg-[#8782FF] hover:text-white transition-colors duration-300"
          >
            選擇方案
          </div>
          <div class="lg:space-y-5 lg:space-y-5 space-y-3">
            <div class="space-x-1 flex items-center">
              <Icon name="pajamas:check-sm" width="24" height="24" class="text-[#8782FF]" />
              <span class="ml-2 text-[#5B5B5B]">半客製化一頁式網站(限單頁)</span>
            </div>
            <div class="space-x-1 flex items-center">
              <Icon name="pajamas:check-sm" width="24" height="24" class="text-[#8782FF]" />
              <span class="ml-2 text-[#5B5B5B]">RWD響應式設計(區塊限制5個內)</span>
            </div>
            <div class="space-x-1 flex items-center">
              <Icon name="pajamas:check-sm" width="24" height="24" class="text-[#8782FF]" />
              <span class="ml-2 text-[#5B5B5B]">基礎SEO設定 (Meta標籤優化)</span>
            </div>
            <div class="space-x-1 flex items-center">
              <Icon name="pajamas:check-sm" width="24" height="24" class="text-[#8782FF]" />
              <span class="ml-2 text-[#5B5B5B]">Google Analytics 安裝</span>
            </div>
            <div class="space-x-1 flex items-center">
              <Icon name="pajamas:check-sm" width="24" height="24" class="text-[#8782FF]" />
              <span class="ml-2 text-[#5B5B5B]">一次性部署(靜態)</span>
            </div>
            <div class="space-x-1 flex items-center">
              <Icon name="pajamas:check-sm" width="24" height="24" class="text-[#8782FF]" />
              <span class="ml-2 text-[#5B5B5B]">主機與網域代辦</span>
            </div>
          </div>
        </div>

        <!-- 卡片2 -->
        <div
          class="bg-white/50 backdrop-blur-sm border hover:border-2 relative lg:bottom-4 rounded-2xl shadow-lg hover:shadow-xl relative px-8 py-12 flex flex-col space-y-[28px] border border-[#8782FF] duration-300 transform hover:-translate-y-2"
        >
          <div class="space-y-2">
            <div class="font-bold flex justify-between items-center">
              <div class="text-[20px]">電商啟動包</div>
              <span class="text-[#8782FF] text-[16px]">最受歡迎</span>
            </div>
            <div class="text-[18px] text-[#5B5B5B] text-left">電商品牌/實體轉線上/購物車系統</div>
          </div>
          <div class="text-base flex items-end space-x-2">
            <div class="text-[24px] xl:text-[32px] leading-none">NT＄68,000</div>
            <span class="text-[14px] lg:text-[16px] text-[#5B5B5B]">/台幣起</span>
          </div>
          <div
            class="text-base border rounded-sm hover:bg-[#6f6bff] w-full py-3 text-center cursor-pointer bg-[#8782FF] text-white transition-colors duration-300"
          >
            選擇方案
          </div>
          <div class="lg:space-y-5 space-y-3">
            <div class="space-x-1 flex items-center">
              <Icon name="pajamas:check-sm" width="24" height="24" class="text-[#8782FF]" />
              <span class="ml-2 text-[#5B5B5B]">多頁式WordPress全功能網站</span>
            </div>
            <div class="space-x-1 flex items-center">
              <Icon name="pajamas:check-sm" width="24" height="24" class="text-[#8782FF]" />
              <span class="ml-2 text-[#5B5B5B]">購物車+金流串接 (綠界/Line Pay)</span>
            </div>
            <div class="space-x-1 flex items-center">
              <Icon name="pajamas:check-sm" width="24" height="24" class="text-[#8782FF]" />
              <span class="ml-2 text-[#5B5B5B]">會員系統+訂單管理後台</span>
            </div>
            <div class="space-x-1 flex items-center">
              <Icon name="pajamas:check-sm" width="24" height="24" class="text-[#8782FF]" />
              <span class="ml-2 text-[#5B5B5B]">後台上架與使用教學</span>
            </div>
            <div class="space-x-1 flex items-center">
              <Icon name="pajamas:check-sm" width="24" height="24" class="text-[#8782FF]" />
              <span class="ml-2 text-[#5B5B5B]">部落格 BLOG</span>
            </div>
            <div class="space-x-1 flex items-center">
              <Icon name="pajamas:check-sm" width="24" height="24" class="text-[#8782FF]" />
              <span class="ml-2 text-[#5B5B5B]">主機與網域代辦</span>
            </div>
          </div>
        </div>

        <!-- 卡片3 -->
        <div
          class="bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg hover:border-2 hover:shadow-xl relative px-8 py-12 flex flex-col space-y-[28px] border border-[#8782FF] duration-300 transform hover:-translate-y-2"
        >
          <div class="space-y-2">
            <div class="text-[20px] font-bold text-left">旗艦方案</div>
            <div class="text-[18px] text-[#5B5B5B] text-left">全客製系統/中大規模平台</div>
          </div>
          <div class="flex space-x-2">
            <div class="text-[28px] leading-none font-bold">依需求報價</div>
          </div>
          <div
            class="text-base text-[#5B5B5B] border rounded-sm border-[#8782FF] w-full py-3 text-center cursor-pointer hover:bg-[#8782FF] hover:text-white transition-colors duration-300"
          >
            選擇方案
          </div>
          <div class="lg:space-y-5 space-y-3">
            <div class="space-x-1 flex items-center">
              <Icon name="pajamas:check-sm" width="24" height="24" class="text-[#8782FF]" />
              <span class="ml-2 text-[#5B5B5B]">全客製化設計、開發</span>
            </div>
            <div class="space-x-1 flex items-center">
              <Icon name="pajamas:check-sm" width="24" height="24" class="text-[#8782FF]" />
              <span class="ml-2 text-[#5B5B5B]">例如：訂閱/權限/社群功能客製化需求</span>
            </div>
            <div class="space-x-1 flex items-center">
              <Icon name="pajamas:check-sm" width="24" height="24" class="text-[#8782FF]" />
              <span class="ml-2 text-[#5B5B5B]">資料庫建置/API製作與串接</span>
            </div>
            <div class="space-x-1 flex items-center">
              <Icon name="pajamas:check-sm" width="24" height="24" class="text-[#8782FF]" />
              <span class="ml-2 text-[#5B5B5B]">專屬後台管理系統(CMS)</span>
            </div>
            <div class="space-x-1 flex items-center">
              <Icon name="pajamas:check-sm" width="24" height="24" class="text-[#8782FF]" />
              <span class="ml-2 text-[#5B5B5B]">各項客製化需求</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
