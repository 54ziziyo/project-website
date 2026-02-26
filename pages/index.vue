<script setup lang="ts">
// SEO 優化 - 首頁
useHead({
  title: 'Zeona Studio | 品牌數位轉型首選：全客製化網頁開發、SEO 視覺設計與精準數位行銷解決方案',
  meta: [
    {
      name: 'description',
      content:
        'Zeona Studio：擁有 5 年以上網站開發與數位行銷經驗，專注於全客製化網站設計、UI/UX 介面規劃、品牌官網建置與社群行銷服務。我們協助新創公司與中小企業打造兼具美感與高效能的線上品牌，從網站規劃、視覺設計到社群經營一站搞定，讓您的品牌 24 小時持續曝光獲客。',
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
