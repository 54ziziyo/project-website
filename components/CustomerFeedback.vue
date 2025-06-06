<script setup lang="ts">
import avatar1 from "../assets/images/avatar/avatar-1.png";
import avatar2 from "../assets/images/avatar/avatar-2.png";
import avatar3 from "../assets/images/avatar/avatar-3.png";
import avatar4 from "../assets/images/avatar/avatar-4.png";
import avatar5 from "../assets/images/avatar/avatar-5.png";
import avatar6 from "../assets/images/avatar/avatar-6.png";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6];

const testimonials = [
  {
    content:
      "我們子公司的手機版網頁服務一直都很難使用，後來決定重新設計介面跟規劃流程，現在用戶數提高了很多，很讚！",
    author: "Dragon陳",
    role: "產品經理",
    avatar: avatar1,
  },
  {
    content:
      "原本擔心技術溝通困難，但他們能用外行人聽得懂的語言解釋，設計和網站都比預期更早交付，還會定期主動優化！",
    author: "Brian",
    role: "經營日本代購",
    avatar: avatar2,
  },
  {
    content:
      "因為剛開業需要跑工廠、廠商又要做網站和行銷，要處理太多事了，所以請他們做了簡易官網和社群內容經營的部分，目前感受很用心還不錯～",
    author: "王小姐",
    role: "茶類品牌創辦人",
    avatar: avatar3,
  },
  {
    content:
      "臨時需要製作活動Landing Page和宣傳短影片，謝謝你們很專業的引導，設計的CTA按鈕讓報名人數翻倍，後續還會想繼續合作。",
    author: "Gaga Huang",
    role: "活動公司專案執行",
    avatar: avatar4,
  },
  {
    content:
      "訂閱了網站服務，因為一直不太知道要怎麼建置網站，但他們很有耐心地跟著詢問我，架設完後也開始有一些人詢問，曝光起來的感覺",
    author: "攝影小蘇",
    role: "攝影工作室",
    avatar: avatar5,
  },
  {
    content:
      "合作訂閱半年期網站與行銷服務後，我們更多人詢問了！甚至主動建議我們沒注意到的使用者體驗細節。",
    author: "張小姐",
    role: "充氣廣告公司",
    avatar: avatar6,
  },
];
</script>
<template>
  <div class="w-full">
    <section class="gradient-p-to-y-bg py-24 px-4">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-6">
          <div class="inline-block border px-4 py-1 rounded-full text-sm">
            真實客戶評價
          </div>
          <div
            class="text-[24px] md:text-[52px] font-bold leading-none mb:mb-8 mb-6 text-center mt-3"
          >
            讓我們看看別人怎麼說
          </div>
        </div>

        <div class="flex justify-center items-center space-x-[-10px] mb-4">
          <img
            v-for="item in avatars"
            :key="item"
            :src="item"
            class="w-12 h-12 rounded-full border-2 border-white"
          />
        </div>

        <div class="text-center mb-6">
          <p class="text-sm">服務體驗評分</p>
          <div
            class="flex justify-center items-center gap-1 text-yellow-400 text-xl"
          >
            <span v-for="i in 5" :key="i">★</span>
            <span class="ml-2">5.0</span>
          </div>
        </div>
      </div>

      <Carousel
        class="w-full pb-24"
        :opts="{
          align: 'start',
          slidesToScroll: 1,
          loop: true,
        }"
        :plugins="[
          Autoplay({
            delay: 2000,
          }),
        ]"
      >
        <CarouselContent class="-ml-0">
          <CarouselItem
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="pl-4 basis-full md:basis-1/2 lg:basis-1/3"
          >
            <div class="p-4 h-full select-none">
              <div
                class="bg-white p-8 rounded-xl shadow-lg h-full flex flex-col"
              >
                <p class="text-gray-600 italic mb-6 flex-grow">
                  {{ testimonial.content }}
                </p>

                <div class="flex items-center">
                  <img
                    :src="testimonial.avatar"
                    :alt="testimonial.author"
                    class="w-12 h-12 rounded-full object-cover mr-4"
                  />

                  <div>
                    <p class="font-semibold text-gray-900">
                      {{ testimonial.author }}
                    </p>
                    <p class="text-sm text-gray-500">{{ testimonial.role }}</p>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>

      <div class="pt-24 px-4 border-t md:border-none">
        <div class="max-w-4xl mx-auto text-center">
          <h1
            class="text-[24px] md:text-[52px] font-bold leading-none mb:mb-8 mb-6 text-center text-[#6f6bff]"
          >
            即時啟動，打造您的數位競爭力
          </h1>
          <p
            class="text-[#5B5B5B] text-[14px] md:text-[20px] mb-4 text-center mb-16"
          >
            一站式數位解決方案，協助品牌高效成長<br />有網站/行銷需求，加Line即可免費諮詢
          </p>
        </div>

        <div
          class="max-w-4xl mx-auto rounded-xl bg-white/50 backdrop-blur-md p-12 shadow-xl border border-[#6f6bff] border-2"
        >
          <div class="text-left mb-8 border-b pb-8">
            <span
              class="bg-[#6f6bff] text-white px-2 py-1 text-sm font-semibold rounded"
              >限時優惠</span
            >
            <div class="text-2xl font-bold mt-4 mb-6">30分鐘免費策略規劃</div>

            <div class="grid md:grid-cols-2 gap-4 text-sm md:text-base">
              <div>
                <div class="text-lg font-semibold mb-4">網站開發與優化</div>
                <ul class="space-y-2 text-sm md:text-base">
                  <li>✔ 響應式網站設計 ✔ 前端開發與架設 ✔ UI/UX優化</li>
                  <li>✔ 電商網站建置 ✔ 效能最佳化與SEO基礎配置</li>
                </ul>
              </div>

              <div>
                <div class="text-lg font-semibold mb-4">長期合作方案</div>
                <ul class="space-y-2 text-sm md:text-base">
                  <li>✔ 社群內容規劃與貼文設計 ✔ 30-60秒短影片剪輯</li>
                  <li>✔ Banner/廣告圖製作 ✔ SEO文章撰寫</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-4 text-sm md:text-base">
            <div>
              <div class="text-lg font-semibold mb-4">長期合作方案</div>
              <ul class="space-y-2">
                <li>📌 包月/包年制服務，享專屬優惠</li>
                <li>📌 定期內容更新與網站維護</li>
                <li>📌 前同事技術支援，複雜專案也能搞定</li>
              </ul>
            </div>

            <div>
              <div class="text-lg font-semibold mb-4">為什麼選擇我們？</div>
              <ul class="space-y-2">
                <li>🔹 跨領域經驗：結合行銷思維與技術實現能力</li>
                <li>🔹 彈性合作：從單次專案到長期託管皆可洽談</li>
                <li>🔹 透明溝通：清楚報價與進度追蹤</li>
              </ul>
            </div>
          </div>

          <div class="flex justify-center mt-12">
            <a
              href="#"
              class="relative bg-[#8782FF] text-white font-semibold py-3 px-6 rounded-full hover:bg-[#6f6bff] transition btn-glow"
            >
              <span>預約諮詢 →</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
