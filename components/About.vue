<script setup lang="ts"></script>
<template>
  <div class="relative pt-[50px] md:pt-[100px] overflow-x-clip">
    <div class="absolute md:-top-40 md:-left-[65%] bottom-0 -right-[0%]">
      <img src="../assets/images/round-purple.svg" alt="circle pattern" class="max-w-none" width="1500" height="1500" />
    </div>

    <div class="relative px-8 md:px-[6.875rem] pb-30">
      <div class="text-center">
        <div class="mb-2 md:mb-4 text-[#8782FF] text-[16px] md:text-[16px] md:text-[24px] font-bold">價值的交會點</div>
        <div class="text-[24px] md:text-[52px] font-bold leading-none mb:mb-8 mb-6">想告訴你的是</div>
        <div class="text-[#5B5B5B] text-[14px] md:text-[20px] mb-4">
          嗨，我是 Zeona Studio，擁有數位行銷背景、UI/UX 專業，目前擁有4年以上網頁前端工程經驗<br />
          我曾在台灣知名企業擔任網站與社群營運工作，後來自學設計與開發，專注於品牌網站打造、數位行銷與內容製作
        </div>
        <div class="text-[#5B5B5B] text-[14px] md:text-[20px]">
          技術與美感兼具，讓你一站式完成品牌在網路上的所有需求
        </div>
      </div>

      <div class="grid lg:grid-cols-4 grid-cols-2 gap-4 md:gap-8 mt-16 md:mt-20">
        <!-- 卡片1 -->
        <div class="order-1 lg:order-1 bg-white rounded-xl hover:shadow-xl shadow-lg p-5 flex flex-col md:gap-2">
          <div class="text-[#8782FF] text-[14px] md:text-base font-bold mb-1">兼具美感與份量</div>
          <div class="text-[16px] md:text-xl font-bold mb-2">網站建置</div>
          <div class="text-[#5B5B5B] text-[12px] md:text-base">
            我們助你輕鬆建立成功的線上品牌，吸引更多目標客群並實現業績增長。
          </div>
        </div>

        <!-- 卡片2 -->
        <div class="order-2 lg:order-2 rounded-2xl hover:shadow-xl shadow-lg flex flex-col">
          <img src="../assets/images/website-building.png" alt="" class="w-full h-full object-cover rounded-xl" />
        </div>

        <!-- 卡片3 -->
        <div class="order-4 lg:order-3 bg-white rounded-xl hover:shadow-xl shadow-lg p-5 flex flex-col md:gap-2">
          <div class="text-[#8782FF] text-[14px] md:text-base font-bold mb-1">讓你被受眾看到</div>
          <div class="text-[16px] md:text-xl font-bold mb-2">多元行銷</div>
          <div class="text-[#5B5B5B] text-[12px] md:text-base">
            透過網站門面，讓網路上更多人看到你，了解你提供的服務。
          </div>
        </div>

        <!-- 卡片4 -->
        <div class="order-3 lg:order-4 rounded-2xl hover:shadow-xl shadow-lg flex flex-col">
          <img src="../assets/images/diversified-marketing.png" alt="" class="w-full h-full object-cover rounded-xl" />
        </div>

        <!-- 卡片5 -->
        <div class="order-6 lg:order-5 rounded-2xl hover:shadow-xl shadow-lg flex flex-col">
          <img src="../assets/images/high-quality.png" alt="" class="w-full h-full object-cover rounded-xl" />
        </div>

        <!-- 卡片6 -->
        <div class="order-5 lg:order-6 bg-white rounded-xl hover:shadow-xl shadow-lg p-5 flex flex-col md:gap-2">
          <div class="text-[#8782FF] text-[14px] md:text-base font-bold mb-1">高CP的價值</div>
          <div class="text-[16px] md:text-xl font-bold mb-2">客製化質感</div>
          <div class="text-[#5B5B5B] text-[12px] md:text-base">
            做出屬於您的專屬質感，才能在眾多競爭者中，更獨樹一職，成為行業佼佼者。
          </div>
        </div>

        <!-- 卡片7 -->
        <div class="order-7 lg:order-7 rounded-2xl hover:shadow-xl shadow-lg flex flex-col">
          <img src="../assets/images/brand-context.png" alt="" class="w-full h-full object-cover rounded-xl" />
        </div>

        <!-- 卡片8 -->
        <div class="order-8 lg:order-8 bg-white rounded-xl hover:shadow-xl shadow-lg p-5 flex flex-col md:gap-2">
          <div class="text-[#8782FF] text-[14px] md:text-base font-bold mb-1">品牌脈絡</div>
          <div class="text-[16px] md:text-xl font-bold mb-2">解決問題</div>
          <div class="text-[#5B5B5B] text-[12px] md:text-base">
            根據發展脈絡與背景，完成品牌里程碑，為您的產品找到一條自己的路。
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
