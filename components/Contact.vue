<script lang="ts" setup>
import FormContact from "./form/Contact.vue";
</script>
<template>
  <div class="relative overflow-x-clip">
    <div class="px-[3%]">
      <div class="pt-[100px] pb-[120px] gradient-p-to-y-bg rounded-2xl px-[5%]">
        <div
          class="grid grid-cols-1 lg:grid-cols-2 space-yx-0 lg:space-x-[70px] items-start"
        >
          <div class="flex flex-col justify-center space-y-4">
            <div class="text-[52px] mb-[40px] font-bold">聯繫我們</div>
            <div class="text-[28px] font-bold">
              <div>不只設計網站</div>
              <div class="mb-6">
                我們打造<span class="text-[#FF5157]">讓人停留的故事</span>
              </div>
            </div>
            <div class="text-[#5B5B5B] text-[20px] mb-4">
              十年以上網頁製作經驗，提供最佳化整合服務，量身打造符合需求的網站方案。
            </div>
            <div class="text-[#5B5B5B] text-[20px] mb-10">
              填寫右側表單，我們會立即聯繫您，並依照您的需求，製作網站計劃。
            </div>
            <div class="flex justify-between items-center">
              <div class="text-[#5B5B5B] text-[18px] font-semibold">
                營業時間
              </div>
              <div class="text-[#5B5B5B] text-[18px]">平日 9:00-18:00</div>
            </div>
            <div class="flex justify-between items-center">
              <div class="text-[#5B5B5B] text-[18px] font-semibold">
                電子信箱
              </div>
              <a
                href="mailto:54ziziyo@gmail.com"
                class="text-[#8782FF] text-[18px]"
                >54ziziyo@gmail.com</a
              >
            </div>
            <div class="space-y-2">
              <div class="flex justify-between items-center">
                <div class="text-[#5B5B5B] text-[18px] font-semibold">
                  LINE ID
                </div>
                <a
                  href="https://line.me/ti/p/0ULHLMUbkQ"
                  class="text-[#8782FF] text-[18px]"
                  >0980-191-031</a
                >
              </div>
              <div class="text-[#5B5B5B] text-xs">
                ※ 請盡量用信箱或 LINE 聯繫，因較常不在台灣，電話可能無法接聽
              </div>
            </div>
            <div class="mt-10">
              <button
                class="px-10 py-4 text-white bg-[#8782FF] rounded-full cursor-pointer flex items-center space-x-4 hover:bg-[#6f6bff] transition-colors duration-300"
              >
                <Icon name="lsicon:service-filled" width="24" height="24" />
                <span>前往 LINE 線上客服</span>
              </button>
            </div>
          </div>
          <div class="flex flex-col pt-[118px]">
            <FormContact />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
