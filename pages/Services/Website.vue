<script lang="ts" setup>
import WebProject from '~/components/service/WebProject.vue'
import AutoScrollCards from '~/components/service/WebAutoScrollCards.vue'
import WebPrice from '~/components/service/WebPrice.vue'
import WebAddOnItems from '~/components/service/WebAddOnItems.vue'

// SEO 優化 - 網站開發服務頁面
useHead({
  title: '網站開發服務 | Zeona Studio - 全客製化網頁設計與開發方案',
  meta: [
    {
      name: 'description',
      content:
        'Zeona Studio 提供全客製化網站開發服務，從 UI/UX 設計到後端系統整合，打造高效能、高轉換率的品牌官網。支援 RWD 響應式設計、SEO 優化、CMS 內容管理系統。',
    },
    { property: 'og:title', content: '網站開發服務 | Zeona Studio - 全客製化網頁設計' },
    { property: 'og:description', content: '從設計到開發，為您打造 24 小時不間斷的線上業務引擎。' },
    { property: 'og:url', content: 'https://zeona.vercel.app/services/website' },
  ],
  link: [{ rel: 'canonical', href: 'https://zeona.vercel.app/services/website' }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: '網站開發服務',
        provider: {
          '@type': 'Organization',
          name: 'Zeona Studio',
        },
        description: '全客製化網站開發，從 UI/UX 設計到後端系統整合',
        areaServed: { '@type': 'Country', name: 'Taiwan' },
        serviceType: 'Web Development',
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'TWD',
          lowPrice: '15000',
          highPrice: '200000',
        },
      }),
    },
  ],
})
</script>
<template>
  <div>
    <WebPrice />
    <AutoScrollCards />
    <WebProject />
    <WebAddOnItems />
  </div>
</template>

<style></style>
