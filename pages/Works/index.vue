<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

// 導入圖片
import fantasi from '~/assets/images/portfolio/fantasi_pro.png'
import freelance from '~/assets/images/portfolio/freelance_pro.jpg'
import funlooker from '~/assets/images/portfolio/funlooker_pro.png'
import levert from '~/assets/images/portfolio/levert_dev.jpg'
import luxetravel from '~/assets/images/portfolio/luxetravel_dev.jpg'
import miniclub from '~/assets/images/portfolio/miniclub_dev.jpg'
import qrcode from '~/assets/images/portfolio/qrcode_des.jpeg'
import ticketBg from '~/assets/images/portfolio/ticketBg_dev.webp'

const isVisible = ref(false)
const sectionRef = ref(null)
const activeCards = ref(new Set())

interface Portfolio {
  id: number
  title: string
  category: string
  description: string
  shortDesc: string
  techStack: string[]
  image: string
  link: string
}

const portfolios: Portfolio[] = [
  {
    id: 1,
    title: 'Fantasi 創作者交流平台',
    category: '品牌官網',
    shortDesc: '創作者與粉絲的獨特交流空間',
    description: 'Fantasi.one 是一個專為創作者與粉絲打造的獨特交流空間，透過訂閱或單次購買取得專屬內容。',
    techStack: ['Vue', 'Vite', 'Pinia', 'Vue-i18n', 'Vuetify'],
    image: fantasi,
    link: '/Works/fantasi',
  },
  {
    id: 2,
    title: 'Zeona Studio 官方網站',
    category: '品牌官網',
    shortDesc: '一站式數位服務平台',
    description: 'Zeona 提供一站式數位服務，涵蓋品牌建立、網站開發與數位行銷，從 0 到 1 滿足您的需求。',
    techStack: ['Nuxt', 'Vue', 'Tailwind CSS', 'SEO', 'Lottiefiles'],
    image: freelance,
    link: '/Works/freelance',
  },
  {
    id: 3,
    title: 'Funlooker 全球夜生活指南',
    category: '品牌官網',
    shortDesc: '探索全球夜生活的最佳平台',
    description: 'Funlooker 是全球夜生活指南平台，幫助使用者探索世界各地的酒吧、俱樂部和獨特娛樂場所。',
    techStack: ['Nuxt', 'Vue', 'Swiper', 'Vant', 'Vue-i18n'],
    image: funlooker,
    link: '/Works/funlooker',
  },
  {
    id: 4,
    title: 'Levert 益生菌電商平台',
    category: '電商開發',
    shortDesc: '專業保健品線上購物體驗',
    description: 'Levert 益生菌提供無縫的線上購物體驗，具備專屬會員計畫和簡化的結帳流程。',
    techStack: ['Nuxt', 'Vue', 'Swiper', 'API', 'CSS'],
    image: levert,
    link: '/Works/levert',
  },
  {
    id: 5,
    title: 'Luxe Travel 歐洲旅遊平台',
    category: '電商開發',
    shortDesc: '頂級歐洲旅遊規劃服務',
    description: '專精於歐洲度假的頂級旅遊規劃平台，提供團體旅遊、客製化自由行和豪華郵輪服務。',
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'SEO', 'API'],
    image: luxetravel,
    link: '/Works/luxetravel',
  },
  {
    id: 6,
    title: 'Miniclub 旅遊服務平台',
    category: '品牌官網',
    shortDesc: '彈性行程與專業團遊的完美結合',
    description: '體驗兩全其美的旅遊方式——完整的行程彈性與專業團體旅遊的可靠便利。',
    techStack: ['Nuxt', 'Vue', 'Tailwind CSS', 'SEO', 'RWD'],
    image: miniclub,
    link: '/Works/miniclub',
  },
  {
    id: 7,
    title: 'TicketBg 活動售票平台',
    category: '行銷營運',
    shortDesc: '高轉化率的活動售票解決方案',
    description: '透過 A/B 測試優化文案和視覺設計，成功為客戶帶來 3 倍以上的轉化增長。',
    techStack: ['HTML/CSS', 'JavaScript', 'Google Analytics', 'GTM'],
    image: ticketBg,
    link: '/Works/ticketbg',
  },
  {
    id: 8,
    title: 'QRCode 視覺識別系統',
    category: '品牌設計',
    shortDesc: '完整的品牌視覺識別設計',
    description: '從 Logo 設計、色彩系統到應用指南，為新創品牌打造完整的視覺識別系統。',
    techStack: ['Figma', '品牌策略', 'UI 設計', '設計系統'],
    image: qrcode,
    link: '/Works/qrcode',
  },
]

const categories = ['全部', '品牌官網', '電商開發', '行銷營運', '品牌設計']
const selectedCategory = ref('全部')

const filteredPortfolios = computed(() => {
  if (selectedCategory.value === '全部') {
    return portfolios
  }
  return portfolios.filter((p) => p.category === selectedCategory.value)
})

onMounted(() => {
  // 頁面載入後直接顯示
  setTimeout(() => {
    isVisible.value = true
  }, 100)
  
  // 卡片依序進場
  setTimeout(() => {
    portfolios.forEach((_, i) => {
      setTimeout(() => {
        activeCards.value = new Set([...activeCards.value, i])
      }, i * 150)
    })
  }, 300)
})
</script>

<template>
  <div class="w-full pt-32 pb-20">
    <!-- Hero Section -->
    <div class="px-8 md:px-12 mb-20">
      <div class="max-w-6xl mx-auto text-center">
        <div
          class="inline-block border px-4 py-1 rounded-full text-sm mb-6 transition-all duration-1000 transform"
          :class="[isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']"
        >
          我們的作品
        </div>
        <h1
          class="font-bold leading-none mb-6 text-center"
          style="font-size: clamp(32px, 5vw, 52px)"
          :class="['transition-all duration-1000 transform', isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']"
        >
          <span class="text-[#6f6bff]">為品牌打造</span><br />數位競爭力
        </h1>
        <p
          class="text-[#5B5B5B] text-[14px] md:text-[18px] mb-8 max-w-2xl mx-auto transition-all duration-1000 transform"
          :class="[isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']"
        >
          從網站設計、行銷策略到品牌視覺，Zeona Studio 協助企業實現數位轉型，創造真實的商業成果。
        </p>
      </div>
    </div>

    <!-- Category Filter -->
    <div ref="sectionRef" class="px-4 md:px-8 mb-16">
      <div class="max-w-6xl mx-auto flex flex-wrap justify-center gap-3 transition-all duration-1000 transform" :class="[isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']">
        <button
          v-for="category in categories"
          :key="category"
          :class="[
            'px-4 py-2 rounded-full font-semibold transition-all duration-300',
            selectedCategory === category
              ? 'bg-[#8782FF] text-white shadow-lg'
              : 'bg-white text-gray-700 border border-gray-300 hover:border-[#8782FF] hover:text-[#8782FF]',
          ]"
          @click="selectedCategory = category"
        >
          {{ category }}
        </button>
      </div>
    </div>

    <!-- Portfolio Grid -->
    <div class="px-8 md:px-12 mb-20">
      <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-2 gap-16 lg:gap-12">
          <div
            v-for="(portfolio, index) in filteredPortfolios"
            :key="portfolio.id"
            class="portfolio-card group transition-all duration-1000 transform"
            :class="[
              activeCards.has(index) ? 'scale-100 opacity-100' : 'scale-95 opacity-0',
            ]"
          >
            <!-- Image Section -->
            <div class="relative mb-6 rounded-xl overflow-hidden bg-gray-200 h-72 md:h-80">
              <img
                :src="portfolio.image"
                :alt="portfolio.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6"
              >
                <div class="text-white">
                  <div class="inline-block bg-[#8782FF] text-white px-3 py-1 rounded-full text-xs font-semibold mb-2">
                    {{ portfolio.category }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Content Section -->
            <div>
              <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#8782FF] transition-colors">
                {{ portfolio.title }}
              </h3>
              <p class="text-gray-600 text-sm md:text-base mb-4 line-clamp-2">
                {{ portfolio.shortDesc }}
              </p>

              <!-- Description -->
              <p class="text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
                {{ portfolio.description }}
              </p>

              <!-- Tech Stack -->
              <div class="mb-6">
                <p class="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wide">使用技術</p>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tech in portfolio.techStack"
                    :key="tech"
                    class="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium hover:bg-[#8782FF] hover:text-white transition-all duration-300"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>

              <!-- CTA Link -->
              <NuxtLink
                :to="portfolio.link"
                class="inline-flex items-center text-[#8782FF] font-semibold hover:text-[#6f6bff] transition-colors duration-300 group/link"
              >
                <span>查看完整案例</span>
                <svg
                  class="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div
          v-if="filteredPortfolios.length === 0"
          class="text-center py-20"
        >
          <p class="text-gray-600 text-lg">目前沒有該分類的作品</p>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="px-4 md:px-8 bg-gradient-to-br from-[#8782FF]/10 to-[#6f6bff]/10 py-16 shadow-xl md:py-24 rounded-2xl mx-4 md:mx-8">
      <div class="max-w-4xl mx-auto text-center">
        <h2
          class="font-bold leading-none mb-6 text-[28px] md:text-[44px]"
          :class="['transition-all duration-1000 transform', isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']"
        >
          準備好開始你的<span class="text-[#8782FF]">數位之旅</span>了嗎？
        </h2>
        <p
          class="text-gray-600 text-base md:text-lg mb-8 transition-all duration-1000 transform"
          :class="[isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']"
        >
          Zeona Studio 已幫助超過 15+ 個品牌實現數位轉型。讓我們一起為你的品牌創造成果。
        </p>
        <NuxtLink
          to="/Contact"
          class="inline-block bg-[#8782FF] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#6f6bff] transition-all duration-300 hover:shadow-lg"
        >
          預約免費諮詢
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes slide-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>