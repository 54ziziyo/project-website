<script setup lang="ts"></script>
<template>
  <div class="relative pt-[50px] md:pt-[100px] overflow-x-clip">
    <div class="absolute md:-top-[70%] -right-[70%]">
      <img
        src="../assets/images/round-purple.svg"
        alt="circle pattern"
        class="max-w-none"
        width="1500"
        height="1500"
      />
    </div>

    <div class="relative px-8 md:px-[6.875rem] pb-10">
      <div class="flex justify-center flex-col items-center">
        <div
          class="mb-2 md:mb-4 text-[#5B5B5B] text-[16px] md:text-[16px] md:text-[24px] font-bold"
        >
          好消息是
        </div>
        <div
          class="text-[32px] text-center md:text-[52px] font-bold leading-[1.2] mb:mb-8 mb-6"
        >
          困難的問題<span class="text-[#8782FF]">我們都幫你解決了</span>
        </div>
      </div>

      <div class="grid md:grid-cols-2 grid-cols-1 gap-4 mt-16 md:mt-20">
        <!-- 卡片1 -->
        <div
          class="order-1 md:order-1 text-center md:text-left flex flex-col md:p-5 md:gap-2 justify-center"
        >
          <div class="text-[24px] font-bold md:text-[#8782FF]">
            全棧式輕量服務
          </div>
          <div
            class="text-[16px] md:text-[28px] font-semibold mb-4 text-[#5B5B5B] mt-2 md:mt-0"
          >
            我們從技術到行銷<br />提供完整輕解決方案
          </div>
          <div class="text-[#5B5B5B] text-[12px] md:text-base">
            適合多方位支援的自有品牌、中小型電商與企業
          </div>
        </div>

        <!-- 卡片2 -->
        <div class="order-2 md:order-2 rounded-2xl flex flex-col">
          <img
            src="../assets/images/website-building.png"
            alt=""
            class="md:w-[80%] h-full object-cover rounded-xl"
          />
        </div>

        <!-- 卡片3 -->
        <div
          class="order-3 md:order-4 text-center md:text-left flex flex-col md:p-5 md:gap-2 justify-center"
        >
          <div class="text-[24px] font-bold md:text-[#8782FF]">
            可驗證的調整更重要
          </div>
          <div
            class="text-[16px] md:text-[28px] font-semibold mb-4 text-[#5B5B5B] mt-2 md:mt-0"
          >
            用數據說真話的成長夥伴
          </div>
          <div class="text-[#5B5B5B] text-[12px] md:text-base">
            提供透明化的「網站健康度體檢報告」，用第三方工具呈現真實數據，根據數據動態調整方向
          </div>
        </div>

        <!-- 卡片4 -->
        <div class="order-4 md:order-3 rounded-2xl flex flex-col">
          <img
            src="../assets/images/diversified-marketing.png"
            alt=""
            class="md:w-[80%] h-full object-cover rounded-xl"
          />
        </div>

        <!-- 卡片5 -->
        <div
          class="order-5 md:order-5 text-center md:text-left flex flex-col md:p-5 md:gap-2 justify-center"
        >
          <div class="text-[24px] font-bold md:text-[#8782FF]">
            訂閱制更放心
          </div>
          <div
            class="text-[16px] md:text-[28px] font-semibold mb-4 text-[#5B5B5B] mt-2 md:mt-0"
          >
            經由長期的合作<br />不必每次都從新開始
          </div>
          <div class="text-[#5B5B5B] text-[12px] md:text-base">
            訂閱期間收費固定，長期配合讓我們更懂你，也不再擔心每個月需要重新報價，承受浮動的成本
          </div>
        </div>

        <!-- 卡片6 -->
        <div class="order-6 md:order-6 rounded-2xl flex flex-col">
          <img
            src="../assets/images/website-building.png"
            alt=""
            class="md:w-[80%] h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  </div>
</template>
