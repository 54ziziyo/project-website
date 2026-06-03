<script setup lang="ts">
import avatar1 from '../assets/images/avatar/avatar-1.png'
import avatar2 from '../assets/images/avatar/avatar-2.png'
import avatar3 from '../assets/images/avatar/avatar-3.png'
import avatar4 from '../assets/images/avatar/avatar-4.png'
import avatar5 from '../assets/images/avatar/avatar-5.png'
import avatar6 from '../assets/images/avatar/avatar-6.png'
import Autoplay from 'embla-carousel-autoplay'

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'

const isVisible = ref(false)
const cardVisible = ref(false)
const sectionRef = ref(null)
const cardRef = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.2 },
  )

  if (sectionRef.value) observer.observe(sectionRef.value)

  // 為卡片區域單獨設置觀察
  const cardObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          cardVisible.value = true
          cardObserver.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.2 },
  )

  if (cardRef.value) cardObserver.observe(cardRef.value)
})

const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6]

const testimonials = [
  {
    content: '我子公司的手機版網頁服務一直都很難使用，後來決定重新設計介面跟規劃流程，現在用戶數提高了很多，很讚！',
    author: 'Gon陳',
    role: '產品經理',
    avatar: avatar1,
  },
  {
    content: '原本擔心技術溝通困難，但他們能用外行人聽得懂的語言解釋，設計和網站都比預期更早交付，還會定期主動優化！',
    author: 'Mr. 周',
    role: '日本重機人身部品代購',
    avatar: avatar2,
  },
  {
    content:
      '因為剛開業需要跑工廠、廠商又要做網站和行銷，要處理太多事了，所以請他們做了簡易官網和社群內容經營的部分，目前感受很用心還不錯～',
    author: '汪小姐',
    role: '飲品新創',
    avatar: avatar3,
  },
  {
    content:
      '臨時需要製作活動Landing Page和宣傳短影片，謝謝你們很專業的引導，設計的CTA按鈕讓報名人數翻倍，後續還會想繼續合作。',
    author: 'Gee Huang',
    role: '活動公司專案執行',
    avatar: avatar4,
  },
  {
    content:
      '請他們幫我做了網站，因為一直不太知道要怎麼建置網站，但他們很有耐心地跟著詢問我，架設完後也開始有一些人詢問，曝光起來的感覺很好',
    author: '攝影小書',
    role: '攝影工作室',
    avatar: avatar5,
  },
  {
    content: '合作了網站與行銷服務後，更多人來詢問我了！甚至主動建議我沒注意到的使用者體驗細節。',
    author: '章小姐',
    role: '廣告公司',
    avatar: avatar6,
  },
]
</script>
<template>
  <div ref="sectionRef" class="w-full">
    <section class="gradient-p-to-y-bg py-24 px-4">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-6">
          <div
            class="inline-block border px-4 py-1 rounded-full text-sm transition-all duration-1000 transform"
            :class="[isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']"
          >
            真實客戶評價
          </div>
          <div
            class="text-[24px] md:text-[52px] font-bold leading-none mb:mb-8 mb-6 text-center mt-3 transition-all duration-1000 transform"
            :class="[isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']"
          >
            讓我看看別人怎麼說
          </div>
        </div>

        <div
          class="flex justify-center items-center space-x-[-10px] mb-4 transition-all duration-1000 transform"
          :class="[isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0']"
        >
          <img
            v-for="(item, index) in avatars"
            :key="item"
            :src="item"
            :alt="`客戶頭像 ${index + 1}`"
            :title="`Zeona Studio 客戶評價 ${index + 1}`"
            class="w-12 h-12 rounded-full border-2 border-white"
            width="48"
            height="48"
          />
        </div>

        <div
          class="text-center mb-6 transition-all duration-1000 transform"
          :class="[isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']"
        >
          <p class="text-sm">服務體驗評分</p>
          <div class="flex justify-center items-center gap-1 text-yellow-400 text-xl">
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
              <div class="bg-white p-8 rounded-xl shadow-lg h-full flex flex-col">
                <p class="text-gray-600 italic mb-6 flex-grow">
                  {{ testimonial.content }}
                </p>

                <div class="flex items-center">
                  <img
                    :src="testimonial.avatar"
                    :alt="testimonial.author + ' 頭像'"
                    :title="testimonial.author + ' - 客戶評價'"
                    class="w-12 h-12 rounded-full object-cover mr-4"
                    width="48"
                    height="48"
                    loading="lazy"
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
        <div
          class="max-w-6xl mx-auto text-center transition-all duration-1000 transform"
          :class="[isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']"
        >
          <h2
            class="font-bold leading-none mb:mb-8 mb-6 text-center text-[#6f6bff]"
            style="font-size: clamp(24px, 5vw, 52px)"
          >
            想自己做，也想做得更好嗎？
          </h2>
          <p class="text-[#5B5B5B] text-[14px] md:text-[20px] mb-4 text-center mb-16">
            從現成的工具模板到客製化服務，總有一種方式適合你<br />填寫表單留下需求，我會盡快與你聯繫
          </p>
        </div>

        <div
          ref="cardRef"
          class="max-w-4xl mx-auto rounded-xl bg-white/50 backdrop-blur-md p-12 shadow-xl border border-[#6f6bff] border-2 transition-all duration-1000 transform"
          :class="[cardVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0']"
        >
          <div class="text-left mb-8 border-b pb-8">
            <span class="bg-[#6f6bff] text-white px-2 py-1 text-sm font-semibold rounded">即買即用</span>
            <div class="text-2xl font-bold mt-4 mb-1">🧰 數位工具箱</div>
            <p class="text-xs text-[#5B5B5B] mb-6">※ 永久下載，工具箱會不斷上架新商品。</p>

            <div class="grid md:grid-cols-2 gap-4 text-sm md:text-base">
              <div>
                <div class="text-lg font-semibold mb-4">現成工具，馬上能用</div>
                <ul class="space-y-2 text-sm md:text-base">
                  <li>✔ AI 提示詞包 ✔ 行銷／設計模板</li>
                  <li>✔ 套版素材工具包 ✔ 即買即用、永久下載</li>
                </ul>
              </div>

              <div>
                <div class="text-lg font-semibold mb-4">持續更新的內容</div>
                <ul class="space-y-2 text-sm md:text-base">
                  <li>✔ 部落格定期更新 AI／行銷教學</li>
                  <li>✔ 工具箱不斷推出新商品</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-4 text-sm md:text-base">
            <div>
              <div class="text-lg font-semibold mb-4">做不來，交給我客製</div>
              <ul class="space-y-2">
                <li>📌 網站、AI 工具、LINE 機器人、自動化開發</li>
                <li>📌 視覺設計與社群行銷</li>
                <li>📌 客製化專案依需求報價</li>
              </ul>
            </div>

            <div>
              <div class="text-lg font-semibold mb-4">為什麼選擇我？</div>
              <ul class="space-y-2">
                <li>🔹 跨領域經驗：結合行銷思維與技術實現能力</li>
                <li>🔹 彈性合作：從現成工具到客製專案都可以</li>
                <li>🔹 透明溝通：清楚報價與進度追蹤</li>
              </ul>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12">
            <NuxtLink
              to="/toolbox"
              class="relative bg-[#8782FF] text-white font-semibold py-3 px-6 rounded-full hover:bg-[#6f6bff] transition btn-glow"
            >
              <span>逛數位工具箱 →</span>
            </NuxtLink>
            <NuxtLink
              to="/contact"
              class="font-semibold py-3 px-6 rounded-full border border-[#8782FF] text-[#8782FF] hover:bg-[#8782FF] hover:text-white transition"
            >
              <span>填寫表單聯繫我</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
