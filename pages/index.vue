<script setup lang="ts">
// SEO 優化 - 首頁
useHead({
  title: 'Zeona Studio | AI 數位工具箱：提示詞、模板與素材，一個人也能做出專業行銷與內容',
  meta: [
    {
      name: 'description',
      content:
        'Zeona Studio：用 AI 與自動化經營品牌，把實戰中的 AI 提示詞包、行銷模板與素材工具整理成「數位工具箱」分享給你，一個人也能快速做出專業的行銷、設計與內容。需要更進階的客製化軟體開發、網站架設與設計行銷服務，也能依需求量身打造。',
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
                name: '數位工具箱',
                description: 'AI 提示詞包、行銷模板與素材工具，即買即用、永久下載',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: '客製化軟體開發',
                description: '網站系統、AI 工具、LINE 機器人與自動化流程，依需求打造',
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
