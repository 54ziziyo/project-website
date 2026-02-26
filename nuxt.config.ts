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
    '@nuxtjs/sitemap',
  ],

  // 網站基本 URL（sitemap 需要）
  site: {
    url: 'https://zeona.vercel.app',
  },

  // Sitemap 配置
  sitemap: {
    // 排除不需要索引的頁面
    exclude: ['/api/**'],
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
      title: 'Zeona Studio | 品牌數位轉型首選：全客製化網頁開發、SEO 視覺設計與精準數位行銷解決方案',
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
            'Zeona Studio 專注於提供全客製化網頁設計與開發，結合深度 UI/UX 設計思維，為品牌打造兼具美學與高轉換率的數位門面。我們整合專業 SEO 優化與精準數位行銷策略，確保網站不僅視覺吸睛，更能有效提升搜尋排名、創造獲客實力。從品牌形象建立到技術開發，Zeona 提供一站式數位轉型解決方案，助您精準觸及目標受眾，達成業績持續增長的商業目標。',
        },
        // AEO / AI 搜尋優化 meta (移除過時的 keywords meta tag)
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'author', content: 'Zeona Studio' },
        { name: 'publisher', content: 'Zeona Studio' },
        { name: 'generator', content: 'Nuxt 3' },
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
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Zeona Studio - 品牌數位轉型專家' },
        { property: 'og:locale', content: 'zh_TW' },
        // Twitter Card 強化
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@zeonastudio' },
        { name: 'twitter:creator', content: '@zeonastudio' },
        { name: 'twitter:title', content: 'Zeona Studio | 品牌數位轉型首選' },
        { name: 'twitter:description', content: '結合美學、技術與 SEO 的全客製化網站開發服務' },
        { name: 'twitter:image', content: 'https://zeona.vercel.app/og-cover.jpg' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://zeona.vercel.app' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      ],
      script: [
        // Google Analytics (gtag.js)
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-5QEVXM0T57',
          async: true,
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5QEVXM0T57');
          `,
        },
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
              'Zeona Studio 提供全客製化網站開發、UI/UX 設計、SEO 優化與數位行銷服務，協助品牌打造高轉換率的數位門面。',
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
            serviceType: ['網站開發', 'UI/UX 設計', 'SEO 優化', '數位行銷', '品牌設計'],
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
            description: '品牌數位轉型首選：全客製化網頁開發、SEO 視覺設計與精準數位行銷解決方案',
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
