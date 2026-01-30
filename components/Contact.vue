<script lang="ts" setup>
import FormContact from './form/Contact.vue'
</script>
<template>
  <div class="relative overflow-x-clip">
    <div class="md:px-[3%]">
      <div class="md:pt-[100px] pb-[120px] gradient-p-to-y-bg rounded-2xl md:px-[5%] pt-[50px] px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 space-y-0 lg:space-x-[70px] items-start">
          <div class="flex flex-col justify-center space-y-4">
            <div class="text-[32px] md:text-[52px] mb-4 md:mb-[40px] font-bold">聯繫我</div>
            <div class="text-[18px] md:text-[28px] font-bold">
              <div>有想法了嗎？</div>
              <div class="mb-4 mb:mb-6">讓我們聊聊如何<span class="text-[#FF5157]">把它變成真的</span></div>
            </div>
            <div class="space-y-6">
              <div class="text-[#5B5B5B] text-[16px] md:text-[20px] mb-4">
                填寫右方表單，我會在 24 小時內回覆你<br>
                我們可以先聊聊你的需求，看看怎麼做最適合
              </div>
              <div class="text-[#5B5B5B] text-[16px] md:text-[20px] mb-10">
                不用擔心被推銷，我只會給你最誠實的建議 💬
              </div>
              <div class="flex justify-between items-center">
                <div class="text-[#5B5B5B] text-[16px] md:text-[18px] font-semibold">營業時間</div>
                <div class="text-[#5B5B5B] text-[16px] md:text-[18px]">平日 9:00-18:00</div>
              </div>
              <div class="flex justify-between items-center">
                <div class="text-[#5B5B5B] text-[16px] md:text-[18px] font-semibold">電子信箱</div>
                <a href="mailto:54ziziyo@gmail.com" class="text-[#8782FF] text-[16px] md:text-[18px]"
                  >54ziziyo@gmail.com</a
                >
              </div>
              <div class="flex justify-between items-center">
                <div class="text-[#5B5B5B] text-[16px] md:text-[18px] font-semibold">LINE ID</div>
                <a href="https://lin.ee/Tt7Apjc" target="_blank" rel="noopener noreferrer" class="text-[#8782FF] text-[16px] md:text-[18px]"
                  >@768viuqz</a
                >
              </div>
              <div class="text-[#5B5B5B] md:text-xs text-sm">
                ※ 因不常待在國內請盡量線上聯繫，手機通話雙方會產生國際費用。
              </div>
            </div>
            <div class="mt-8 flex justify-center">
              <a
                href="https://lin.ee/Tt7Apjc"
                target="_blank"
                rel="noopener noreferrer"
                class="px-10 py-4 text-white bg-[#8782FF] rounded-full cursor-pointer flex items-center space-x-4 hover:bg-[#6f6bff] transition-colors duration-300"
              >
                <Icon name="lsicon:service-filled" width="24" height="24" />
                <span>前往 LINE 線上客服</span>
            </a>
            </div>
          </div>
          <div class="flex flex-col md:pt-[118px] pt-[80px]">
            <FormContact />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
