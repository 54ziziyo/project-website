<script lang="ts" setup>
import MarketingProject from '~/components/service/MarketingProject.vue'
import MarketingPrice from '~/components/service/MarketingPrice.vue'

// SEO 優化 - 數位行銷服務頁面
useHead({
  title: '數位行銷服務 | Zeona Studio - SEO優化、社群經營、內容行銷',
  meta: [
    {
      name: 'description',
      content:
        'Zeona Studio 數位行銷服務：SEO 搜尋引擎優化、社群媒體經營、內容行銷策略、短影音製作。用數據驅動的行銷思維，協助品牌提升線上曝光與轉換率。',
    },
    { property: 'og:title', content: '數位行銷服務 | Zeona Studio - SEO、社群經營專家' },
    { property: 'og:description', content: '數據驅動的行銷策略，讓您的品牌被更多人看見。' },
    { property: 'og:url', content: 'https://zeona.vercel.app/services/marketing' },
  ],
  link: [{ rel: 'canonical', href: 'https://zeona.vercel.app/services/marketing' }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: '數位行銷服務',
        provider: {
          '@type': 'Organization',
          name: 'Zeona Studio',
        },
        description: 'SEO 優化、社群經營、內容行銷一站式服務',
        areaServed: { '@type': 'Country', name: 'Taiwan' },
        serviceType: 'Digital Marketing',
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'TWD',
          lowPrice: '5000',
          highPrice: '50000',
        },
      }),
    },
  ],
})
</script>
<template>
  <div>
    <MarketingPrice />
    <MarketingProject />
  </div>
</template>

<style></style>
