import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  runtimeConfig: {
    notionToken: process.env.NOTION_TOKEN,
    notionDatabaseId: process.env.NOTION_DATABASE_ID,
    // Gumroad 付費門檻
    gumroadProductId: process.env.GUMROAD_PRODUCT_ID,
    kitSecret: process.env.KIT_SECRET,
  },

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
    '@nuxtjs/sitemap',
    '@nuxtjs/i18n',
  ],

  // 多語系：中文為預設（網址不變），英文走 /en/
  i18n: {
    defaultLocale: 'zh-TW',
    strategy: 'prefix_except_default',
    locales: [
      { code: 'zh-TW', language: 'zh-TW', name: '中文', file: 'zh-TW.json' },
      { code: 'en', language: 'en-US', name: 'EN', file: 'en.json' },
    ],
    // 不自動依瀏覽器語言轉址，避免使用者被無預期導去英文版
    detectBrowserLanguage: false,
    bundle: {
      optimizeTranslationDirective: false,
    },
  },

  // 網站基本 URL（sitemap 需要）
  site: {
    url: 'https://zeona.vercel.app',
  },

  // Sitemap 配置
  sitemap: {
    // 排除不需要索引的頁面
    exclude: ['/api/**', '/kit/**'],
  },

  // 舊網址轉址（避免外部既有連結 404）
  routeRules: {
    '/ai-personal-brand-kit.html': { redirect: '/kit/ai-personal-brand' },
    '/ai-personal-brand-kit': { redirect: '/kit/ai-personal-brand' },
  },

  // 關閉 app manifest，消除 dev 冷啟動時 Vite 對 #app-manifest 的 pre-transform 解析錯誤
  // （本站路由轉址走 Nitro 伺服器層，不依賴 client app manifest）
  experimental: {
    appManifest: false,
  },
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
      title: 'Zeona Studio | AI 數位工具箱與客製化開發：一個人也能做出專業行銷與內容',
      htmlAttrs: {
        lang: 'zh-TW',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        // Google Search Console 驗證
        { name: 'google-site-verification', content: '3nc9fQHr64Qas1Bw2ol4Ui64OKxMV0W3Uae-KOtEJ5E' },
        {
          name: 'description',
          content:
            'Zeona Studio：用 AI 與自動化經營品牌，把實戰中的 AI 提示詞、模板與素材工具整理成數位工具箱分享給你，讓一個人也能快速做出專業的行銷、設計與內容。需要更進階的客製化軟體開發（網站、AI 工具、LINE 機器人、自動化）、網站架設與設計行銷服務，也能依需求量身打造。',
        },
        // AEO / AI 搜尋優化 meta (移除過時的 keywords meta tag)
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'author', content: 'Zeona Studio' },
        { name: 'publisher', content: 'Zeona Studio' },
        { name: 'generator', content: 'Nuxt 3' },
        // Open Graph / FB 強化
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Zeona Studio' },
        { property: 'og:title', content: 'Zeona Studio | AI 數位工具箱與客製化開發' },
        {
          property: 'og:description',
          content:
            '用 AI 工具與模板，一個人也能做出專業內容；需要客製化開發與設計行銷，也能依需求打造。立即逛逛數位工具箱。',
        },
        { property: 'og:url', content: 'https://zeona.vercel.app' },
        { property: 'og:image', content: 'https://zeona.vercel.app/og-cover.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Zeona Studio - 品牌數位轉型專家' },
        { property: 'og:locale', content: 'zh_TW' },
        // Twitter Card 強化
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@zeonastudio' },
        { name: 'twitter:creator', content: '@zeonastudio' },
        { name: 'twitter:title', content: 'Zeona Studio | AI 數位工具箱與客製化開發' },
        { name: 'twitter:description', content: '用 AI 與工具模板，一個人也能做出專業行銷與內容' },
        { name: 'twitter:image', content: 'https://zeona.vercel.app/og-cover.jpg' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://www.googletagmanager.com' },
        { rel: 'preconnect', href: 'https://www.google-analytics.com' },
        { rel: 'dns-prefetch', href: 'https://www.googletagmanager.com' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://zeona.vercel.app' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      ],
      script: [
        // Organization Schema (JSON-LD) - AEO 優化
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Zeona Studio',
            alternateName: 'Zeona 品牌數位轉型專家',
            url: 'https://zeona.vercel.app',
            logo: 'https://zeona.vercel.app/logo.png',
            description:
              'Zeona Studio：用 AI 與自動化經營品牌，提供數位工具箱（AI 提示詞、模板、素材）與客製化軟體開發、網站架設、設計行銷服務。',
            foundingDate: '2024',
            sameAs: [],
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'customer service',
              availableLanguage: ['Chinese', 'English'],
            },
            areaServed: {
              '@type': 'Country',
              name: 'Taiwan',
            },
            serviceType: ['數位工具箱', '客製化軟體開發', 'AI 工具開發', '網站架設', 'UI/UX 設計', '數位行銷'],
          }),
        },
        // WebSite Schema with SearchAction - AEO 優化
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Zeona Studio',
            url: 'https://zeona.vercel.app',
            description: 'AI 數位工具箱與客製化開發：一個人也能做出專業行銷與內容',
            publisher: {
              '@type': 'Organization',
              name: 'Zeona Studio',
            },
            potentialAction: {
              '@type': 'SearchAction',
              target: {
                '@type': 'EntryPoint',
                urlTemplate: 'https://zeona.vercel.app/blog?q={search_term_string}',
              },
              'query-input': 'required name=search_term_string',
            },
          }),
        },
      ],
    },
  },
})
