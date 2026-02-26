<script lang="ts" setup>
// import DesignProject from "~/components/service/DesignProject.vue";
import DesignPrice from '~/components/service/DesignPrice.vue'

// SEO 優化 - 視覺設計服務頁面
useHead({
  title: '視覺設計服務 | Zeona Studio - 品牌設計、LOGO設計、行銷素材',
  meta: [
    {
      name: 'description',
      content:
        'Zeona Studio 視覺設計服務：品牌識別設計、LOGO 設計、社群貼文素材、行銷 Banner 製作。打造一致且令人印象深刻的品牌視覺形象。',
    },
    { property: 'og:title', content: '視覺設計服務 | Zeona Studio - 品牌設計專家' },
    { property: 'og:description', content: '專業視覺設計，為您的品牌建立獨特形象。' },
    { property: 'og:url', content: 'https://zeona.vercel.app/services/design' },
  ],
  link: [{ rel: 'canonical', href: 'https://zeona.vercel.app/services/design' }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: '視覺設計服務',
        provider: {
          '@type': 'Organization',
          name: 'Zeona Studio',
        },
        description: '品牌識別設計、LOGO 設計、行銷素材製作',
        areaServed: { '@type': 'Country', name: 'Taiwan' },
        serviceType: 'Graphic Design',
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'TWD',
          lowPrice: '3000',
          highPrice: '30000',
        },
      }),
    },
  ],
})
</script>
<template>
  <div>
    <DesignPrice />
    <!-- 暫時隱藏 DesignProject 勿刪 -->
    <!-- <DesignProject />  -->
  </div>
</template>

<style></style>
