<script setup lang="ts">
import img1 from "../assets/images/targetAudience/business-plan.svg";
import img2 from "../assets/images/targetAudience/digital-nomad.svg";
import img3 from "../assets/images/targetAudience/marketing.svg";
import img4 from "../assets/images/targetAudience/online-shopping.svg";
import img5 from "../assets/images/targetAudience/product-iteration.svg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const targetAudiences = [
  {
    title: "行銷經理／專案負責人",
    content_1: "需交代網站數據與成效",
    content_2: "重視報表與健康追蹤",
    content_3: "想減少外包溝通成本",

    img: img1,
  },
  {
    title: "新創公司／初創品牌",
    content_1: "需要一站式網站與行銷服務",
    content_2: "預算有限，重視效益",
    content_3: "缺乏技術行銷人力，想找長期夥伴",
    img: img2,
  },
  {
    title: "正在數位轉型的傳統企業",
    content_1: "希望線下轉線上，找專業團隊",
    content_2: "需要長期顧問與技術支援",
    content_3: "重視訂閱制與透明報價",

    img: img3,
  },
  {
    title: "電商經營者／DTC品牌",
    content_1: "網站需支援行銷活動與轉換",
    content_2: "關心用戶體驗與SEO",
    content_3: "需要持續優化和數據分析",
    img: img4,
  },
  {
    title: "中小企業主／品牌經營者",
    content_1: "想提升品牌網站形象",
    content_2: "希望網站能帶來實際成交",
    content_3: "重視數據透明和成效追蹤",
    img: img5,
  },
];
</script>

<template>
  <div class="w-full overflow-hidden px-4 pt-10 pb-32 select-none">
    <div
      class="text-[24px] md:text-[52px] font-bold leading-none mb:mb-8 mb-6 text-center"
    >
      你是否符合以下特徵？
    </div>
    <div
      class="text-[#5B5B5B] text-[14px] md:text-[20px] mb-4 text-center md:mb-16 mb-8"
    >
      如果有的話，我們的服務會相當適合你
    </div>
    <Carousel
      class="w-full md:px-15 px-10 relative"
      :opts="{
        align: 'start',
        slidesToScroll: 1,
        loop: true,
      }"
    >
      <CarouselContent class="-ml-0">
        <CarouselItem
          v-for="(targetAudience, index) in targetAudiences"
          :key="index"
          class="basis-full md:basis-1/3 lg:basis-1/4"
        >
          <div class="p-2 h-full">
            <div
              class="bg-white p-8 rounded-xl border h-full flex flex-col space-y-4 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div class="flex items-center justify-center w-full h-40">
                <img
                  :src="targetAudience.img"
                  class="max-h-full max-w-full object-contain"
                />
              </div>
              <p class="font-semibold text-gray-900 mt-4">
                {{ targetAudience.title }}
              </p>
              <ul class="text-gray-600 list-disc pl-4">
                <li>{{ targetAudience.content_1 }}</li>
                <li>{{ targetAudience.content_2 }}</li>
                <li>{{ targetAudience.content_3 }}</li>
              </ul>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious
        class="absolute left-2 md:left-4 top-1/2 -translate-y-1/2"
      />
      <CarouselNext
        class="absolute right-2 md:right-4 top-1/2 -translate-y-1/2"
      />
    </Carousel>
  </div>
</template>
