<script setup lang="ts">
import { ref, computed } from 'vue'

// 導入圖片
import fantasi from '~/assets/images/portfolio/fantasi_pro.png'
import freelance from '~/assets/images/portfolio/freelance_pro.jpg'
import funlooker from '~/assets/images/portfolio/funlooker_pro.png'
import levert from '~/assets/images/portfolio/levert_dev.jpg'
import luxetravel from '~/assets/images/portfolio/luxetravel_dev.jpg'
import miniclub from '~/assets/images/portfolio/miniclub_dev.jpg'
import qrcode from '~/assets/images/portfolio/qrcode_des.jpeg'
import ticketBg from '~/assets/images/portfolio/ticketBg_dev.webp'

// 強制頁面在路由變化時重新渲染
definePageMeta({
  key: route => route.fullPath,
})

const route = useRoute()

interface PortfolioDetail {
  id: string
  title: string
  category: string
  shortDesc: string
  description: string
  features: string[]
  techStack: string[]
  image: string
  websiteLink: string
  flowchartLink?: string
}

const portfolioDetails: Record<string, PortfolioDetail> = {
  fantasi: {
    id: 'fantasi',
    title: 'Fantasi 創作者交流平台',
    category: '品牌官網',
    shortDesc: '創作者與粉絲的獨特交流空間',
    description: 'Fantasi.one 是一個專為創作者與粉絲打造的獨特交流空間。創作者可以在平台上分享精彩的影片內容，粉絲則可透過訂閱或單次購買的方式，取得專屬的獨家內容存取權限。平台致力於建立創作者與粉絲之間更緊密的連結，讓創作價值得到更好的實現。',
    features: [
      '創作者內容管理系統',
      '訂閱制與單次購買功能',
      '多語系支援 (Vue-i18n)',
      '會員管理與認證系統',
      '安全的金流整合',
    ],
    techStack: ['Figma', 'SCSS', 'Vue', 'Vite', 'Pinia', 'Vue-i18n', 'Vue-router', 'Axios', 'vue-gtm', 'Vuetify', 'vee-validate'],
    image: fantasi,
    websiteLink: 'https://www.fantasigloble.com',
    flowchartLink: 'https://www.figma.com/file/W14AyPCjUNNQXD0vGJGbqa/Wireframe?type=whiteboard&node-id=0%3A1&t=lvUa01celevNQyTo-1',
  },
  freelance: {
    id: 'freelance',
    title: 'Zeona Studio 官方網站',
    category: '品牌官網',
    shortDesc: '一站式數位服務平台',
    description: 'Zeona 提供一站式數位服務，涵蓋品牌建立、網站開發與數位行銷。從 0 到 1，我們提供多種量身定制的方案，滿足您的特定需求。無論是初創品牌還是成熟企業，我們都能協助您在數位世界中建立強大的品牌形象。',
    features: [
      '響應式網頁設計 (RWD)',
      'SEO 搜尋引擎優化',
      '流暢的動畫效果 (Lottiefiles)',
      '現代化 UI/UX 設計',
      '高效能網站架構',
    ],
    techStack: ['Figma', 'Nuxt', 'HTML', 'CSS', 'Vue', 'Vercel', 'RWD', 'UI/UX', 'SEO', 'Lottiefiles', 'Tailwind CSS'],
    image: freelance,
    websiteLink: 'https://project-website-sigma.vercel.app/',
  },
  funlooker: {
    id: 'funlooker',
    title: 'Funlooker 全球夜生活指南',
    category: '品牌官網',
    shortDesc: '探索全球夜生活的最佳平台',
    description: 'Funlooker 是一個全球夜生活指南平台，幫助使用者探索世界各地的酒吧、俱樂部、派對和獨特的娛樂場所，包括伴遊服務和專屬體驗。無論是旅行者還是當地居民，都能在這裡找到從主流社交場所到成人娛樂的全方位資訊。',
    features: [
      '全球場所搜尋與篩選',
      '多語系介面支援',
      '互動式地圖導覽',
      '用戶評價與推薦系統',
      '即時資訊更新',
    ],
    techStack: ['Figma', 'Nuxt', 'HTML', 'CSS', 'Vue', 'Swiper', 'Vant', 'Vue-i18n', 'Vue-router', 'Axios'],
    image: funlooker,
    websiteLink: 'https://funlooker.co',
  },
  levert: {
    id: 'levert',
    title: 'Levert 益生菌電商平台',
    category: '電商開發',
    shortDesc: '專業保健品線上購物體驗',
    description: 'Levert 益生菌提供無縫的線上購物體驗，具備專屬會員計畫、直覺化的產品預覽和簡化的結帳流程。品牌堅定承諾打造真正有效的美容保健品，不含人工色素、香料或甜味劑，為消費者帶來最純淨的健康選擇。',
    features: [
      '會員制度與專屬優惠',
      '直覺化產品瀏覽',
      '簡化結帳流程',
      '產品輪播展示',
      'API 整合串接',
    ],
    techStack: ['Figma', 'Nuxt', 'HTML', 'CSS', 'Vue', 'Swiper', 'API'],
    image: levert,
    websiteLink: 'https://levertlabs.com/',
  },
  luxetravel: {
    id: 'luxetravel',
    title: 'Luxe Travel 歐洲旅遊平台',
    category: '電商開發',
    shortDesc: '頂級歐洲旅遊規劃服務',
    description: 'Luxe Travel 是專精於歐洲度假的頂級旅遊規劃平台。我們提供多元化的旅遊服務，包括精選團體旅遊、客製化自由行和豪華郵輪，旨在滿足您對完美旅程的所有嚮往。憑藉 30 年豐富的歐洲行程規劃經驗，我們在各大旅遊論壇上獲得了卓越的聲譽和好評。至今，我們已幫助超過 3,000 名旅客實現探索歐洲的夢想，並為數百對新人打造難忘的蜜月之旅。',
    features: [
      '精選團體旅遊方案',
      '客製化自由行規劃',
      '豪華郵輪行程',
      'SEO 優化與搜尋排名',
      '響應式設計體驗',
    ],
    techStack: ['Next.js', 'HTML', 'CSS', 'React', 'Vercel', 'RWD', 'UI/UX', 'SEO', 'Tailwind CSS', 'API'],
    image: luxetravel,
    websiteLink: 'https://luxetravel-frontend.vercel.app/',
  },
  miniclub: {
    id: 'miniclub',
    title: 'Miniclub 旅遊服務平台',
    category: '品牌官網',
    shortDesc: '彈性行程與專業團遊的完美結合',
    description: '體驗兩全其美的旅遊方式——完整的行程彈性與專業團體旅遊的可靠便利。省去訂房和駕駛的麻煩，透過專車接送和導遊服務，您的愉快旅程從出發那一刻就開始了。我們致力於提供最輕鬆、最享受的旅遊體驗。',
    features: [
      '彈性客製化行程',
      '專車接送服務',
      '專業導遊陪同',
      'SEO 搜尋優化',
      '響應式網頁設計',
    ],
    techStack: ['Nuxt', 'HTML', 'CSS', 'Vue', 'RWD', 'UI/UX', 'SEO', 'Tailwind CSS'],
    image: miniclub,
    websiteLink: 'https://miniclub.discoveredtravel.com.tw/',
  },
  ticketbg: {
    id: 'ticketbg',
    title: 'TicketBg 活動售票平台',
    category: '行銷營運',
    shortDesc: '高轉化率的活動售票解決方案',
    description: '設計並開發高轉化率的活動售票平台。透過 A/B 測試優化文案、CTA 按鈕位置和視覺設計，成功為客戶帶來 3 倍以上的轉化增長。平台專注於提供流暢的購票體驗和精準的數據追蹤。',
    features: [
      'A/B 測試優化',
      '轉化率追蹤分析',
      'Google Analytics 整合',
      'GTM 事件追蹤',
      '高效能頁面載入',
    ],
    techStack: ['HTML', 'CSS', 'JavaScript', 'Google Analytics', 'GTM', '轉化優化'],
    image: ticketBg,
    websiteLink: '#',
  },
  qrcode: {
    id: 'qrcode',
    title: 'QRCode 視覺識別系統',
    category: '品牌設計',
    shortDesc: '完整的品牌視覺識別設計',
    description: '從 Logo 設計、色彩系統、字體規範到應用指南，為新創品牌打造完整的視覺識別系統。並協助導入到網站、社群媒體和行銷物料中，確保品牌形象的一致性與專業度。',
    features: [
      'Logo 設計與規範',
      '品牌色彩系統',
      '字體規範指南',
      '應用設計模板',
      '品牌識別手冊',
    ],
    techStack: ['Figma', '品牌策略', 'UI 設計', '設計系統', '工程實施'],
    image: qrcode,
    websiteLink: '#',
  },
}

const currentPortfolio = computed(() => {
  const id = route.params.id as string
  return portfolioDetails[id] || null
})

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<template>
  <div class="w-full pt-32 pb-20">
    <!-- 返回按鈕 -->
    <div class="px-4 md:px-8 mb-8">
      <div class="max-w-6xl mx-auto">
        <NuxtLink
          to="/Works"
          class="inline-flex items-center text-gray-600 hover:text-[#8782FF] transition-colors duration-300"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          <span>返回作品集</span>
        </NuxtLink>
      </div>
    </div>

    <!-- 404 狀態 -->
    <div v-if="!currentPortfolio" class="px-4 md:px-8">
      <div class="max-w-6xl mx-auto text-center py-20">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">找不到此作品</h1>
        <p class="text-gray-600 mb-8">抱歉，您查找的作品不存在或已被移除。</p>
        <NuxtLink
          to="/Works"
          class="inline-block bg-[#8782FF] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#6f6bff] transition-all duration-300"
        >
          返回作品集
        </NuxtLink>
      </div>
    </div>

    <!-- 作品詳情 -->
    <div v-else class="px-4 md:px-8">
      <div class="max-w-6xl mx-auto">
        <!-- 標題區 -->
        <div
          class="mb-12 transition-all duration-1000 transform"
          :class="[isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']"
        >
          <div class="inline-block bg-[#8782FF] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
            {{ currentPortfolio.category }}
          </div>
          <h1 class="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            {{ currentPortfolio.title }}
          </h1>
          <p class="text-xl text-gray-600">
            {{ currentPortfolio.shortDesc }}
          </p>
        </div>

        <!-- 主要內容區 -->
        <div class="grid lg:grid-cols-2 gap-12 mb-16">
          <!-- 圖片區 -->
          <div
            class="transition-all duration-1000 transform delay-200"
            :class="[isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']"
          >
            <div class="rounded-2xl overflow-hidden shadow-2xl">
              <img
                :src="currentPortfolio.image"
                :alt="currentPortfolio.title"
                class="w-full h-auto object-cover"
              />
            </div>
          </div>

          <!-- 資訊區 -->
          <div
            class="transition-all duration-1000 transform delay-300"
            :class="[isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']"
          >
            <!-- 專案描述 -->
            <div class="mb-8">
              <h2 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span class="w-2 h-6 bg-[#8782FF] rounded mr-3"></span>
                專案描述
              </h2>
              <p class="text-gray-600 leading-relaxed">
                {{ currentPortfolio.description }}
              </p>
            </div>

            <!-- 主要功能 -->
            <div class="mb-8">
              <h2 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span class="w-2 h-6 bg-[#8782FF] rounded mr-3"></span>
                主要功能
              </h2>
              <ul class="space-y-3">
                <li
                  v-for="feature in currentPortfolio.features"
                  :key="feature"
                  class="flex items-start"
                >
                  <svg class="w-5 h-5 text-[#8782FF] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-gray-600">{{ feature }}</span>
                </li>
              </ul>
            </div>

            <!-- 使用技術 -->
            <div class="mb-8">
              <h2 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span class="w-2 h-6 bg-[#8782FF] rounded mr-3"></span>
                使用技術
              </h2>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in currentPortfolio.techStack"
                  :key="tech"
                  class="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full font-medium hover:bg-[#8782FF] hover:text-white transition-all duration-300"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- 連結區 -->
            <div class="space-y-4">
              <a
                v-if="currentPortfolio.websiteLink && currentPortfolio.websiteLink !== '#'"
                :href="currentPortfolio.websiteLink"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-between w-full bg-[#8782FF] text-white font-semibold py-4 px-6 rounded-xl hover:bg-[#6f6bff] transition-all duration-300 hover:shadow-lg"
              >
                <span>查看網站</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>

              <a
                v-if="currentPortfolio.flowchartLink"
                :href="currentPortfolio.flowchartLink"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-between w-full bg-white text-[#8782FF] font-semibold py-4 px-6 rounded-xl border-2 border-[#8782FF] hover:bg-[#8782FF] hover:text-white transition-all duration-300"
              >
                <span>查看流程圖</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- CTA 區塊 -->
        <div
          class="bg-gradient-to-br from-[#8782FF]/10 to-[#6f6bff]/10 py-16 rounded-2xl text-center transition-all duration-1000 transform delay-500"
          :class="[isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']"
        >
          <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            想要打造類似的專案？
          </h2>
          <p class="text-gray-600 mb-8 max-w-xl mx-auto px-4">
            讓 Zeona Studio 協助您實現數位夢想，從設計到開發，我們提供一站式服務。
          </p>
          <NuxtLink
            to="/Contact"
            class="inline-block bg-[#8782FF] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#6f6bff] transition-all duration-300 hover:shadow-lg"
          >
            立即聯繫我們
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
