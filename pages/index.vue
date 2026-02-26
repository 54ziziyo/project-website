<script setup lang="ts">
// SEO 優化 - 首頁
useHead({
  title: 'Zeona Studio | 品牌數位轉型首選：全客製化網頁開發、SEO 視覺設計與精準數位行銷解決方案',
  meta: [
    {
      name: 'description',
      content:
        'Zeona Studio 提供全客製化網站開發、UI/UX 設計、SEO 優化與數位行銷服務。結合美學與技術，為您打造 24 小時不間斷的線上業務引擎。',
    },
  ],
  link: [{ rel: 'canonical', href: 'https://zeona.vercel.app' }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        '@id': 'https://zeona.vercel.app/#business',
        name: 'Zeona Studio',
        description: '品牌數位轉型首選：全客製化網頁開發、SEO 視覺設計與精準數位行銷解決方案',
        url: 'https://zeona.vercel.app',
        logo: 'https://zeona.vercel.app/logo.png',
        image: 'https://zeona.vercel.app/og-cover.jpg',
        priceRange: '$$',
        areaServed: {
          '@type': 'Country',
          name: 'Taiwan',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: '數位服務',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: '全客製化網站開發',
                description: '從 UI/UX 設計到前後端整合，打造高效能品牌官網',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: '數位行銷策略',
                description: 'SEO 優化、社群經營、內容行銷一站式服務',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: '視覺設計',
                description: '品牌視覺識別、LOGO 設計、行銷素材製作',
              },
            },
          ],
        },
      }),
    },
  ],
})
</script>

<template>
  <div class="bg-white">
    <Hero />
    <Problem />
    <Solution />
    <TargetAudience />
    <CustomerFeedback />
  </div>
</template>
