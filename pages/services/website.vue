<script lang="ts" setup>
// import WebProject from '~/components/service/WebProject.vue' // 方案區暫時隱藏，恢復時一併取消註解
import AutoScrollCards from '~/components/service/WebAutoScrollCards.vue'
import WebPrice from '~/components/service/WebPrice.vue'
import WebAddOnItems from '~/components/service/WebAddOnItems.vue'

// SEO 優化 - 網站開發服務頁面
useHead({
  title: '軟體開發服務 | Zeona Studio - 客製化網站、AI 工具、LINE 機器人與自動化開發',
  meta: [
    {
      name: 'description',
      content:
        'Zeona Studio 提供客製化軟體開發服務：網站系統、AI 工具（ChatGPT / Claude API 整合、RAG 知識庫）、LINE 機器人與自動化流程開發，以及網站架設、UI/UX 設計、WordPress 與電商建置。客製化專案皆依需求評估報價，歡迎私訊洽談。',
    },
    { property: 'og:title', content: '軟體開發服務 | Zeona Studio - 客製化網站、AI 工具與自動化開發' },
    { property: 'og:description', content: '網站、AI 工具、LINE 機器人、自動化流程，依需求量身打造。' },
    { property: 'og:url', content: 'https://zeona.vercel.app/services/website' },
  ],
  link: [{ rel: 'canonical', href: 'https://zeona.vercel.app/services/website' }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: '軟體開發服務',
        provider: {
          '@type': 'Organization',
          name: 'Zeona Studio',
        },
        description: '客製化軟體開發：網站系統、AI 工具、LINE 機器人、自動化流程與網站架設',
        areaServed: { '@type': 'Country', name: 'Taiwan' },
        serviceType: 'Software Development',
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
    <!-- 方案顯示區，暫時先隱藏，等內容確定後再放出來 -->
    <!-- <WebProject /> -->
    <WebAddOnItems />
  </div>
</template>

<style></style>
