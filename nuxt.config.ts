import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui',
    'shadcn-nuxt',
    'nuxt-lottie',
    '@nuxtjs/device',
  ],
  css: ['~/assets/css/tailwind.css', '@/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  lottie: {
    componentName: 'Lottie',
    lottieFolder: '/assets/lottie',
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },
  app: {
    head: {
      title: 'Zeona Studio | 品牌數位轉型首選：全客製化網頁開發、SEO 視覺設計與精準數位行銷解決方案',
      htmlAttrs: {
        lang: 'zh-TW',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Zeona Studio 相信創新價值的網頁設計，應是美學、技術與 SEO 的完美平衡。我們提供全客製化網站開發，從 UI/UX 視覺設計到後端系統整合，為企業量身打造具備獲客能力的數位門面。服務包含專業社群行銷策略、SEO 部落格內容佈局、關鍵字研究及高效能短影音剪輯，協助您的品牌在數位時代輕鬆管理、快速上線並達成高轉換目標。讓網站不再只是裝飾，而是您 24 小時不間斷的強力業務與品牌引領商機的最佳起點。',
        },
        {
          name: 'keywords',
          content:
            '網頁設計公司, 台北網頁開發, 品牌數位轉型, 客製化網站, UI UX設計, SEO行銷策略, 社群媒體經營, 短影音剪輯服務, 數位品牌行銷, 高轉換網站製作',
        },
        // Open Graph / FB 強化
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Zeona Studio 品牌數位轉型專家' },
        { property: 'og:title', content: 'Zeona Studio | 打造具備美學與獲客能力的數位門面' },
        {
          property: 'og:description',
          content:
            '想提升品牌競爭力？我們結合 Nuxt 尖端網頁技術與數據驅動的行銷思維，為您打造高度靈活性與客製化的網站方案。立即領取品牌數位化實戰攻略。',
        },
        { property: 'og:url', content: 'https://zeona.vercel.app' },
        { property: 'og:image', content: 'https://zeona.vercel.app/og-cover.jpg' },

        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: 'https://zeona.vercel.app/og-cover.jpg' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://zeona.vercel.app' },
      ],
    },
  },
})
