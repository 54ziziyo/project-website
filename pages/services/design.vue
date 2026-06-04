<script lang="ts" setup>
// import DesignProject from "~/components/service/DesignProject.vue";
import DesignPrice from '~/components/service/DesignPrice.vue'

// SEO 優化 - 視覺設計服務頁面
const { t } = useI18n()
useHead(() => ({
  title: t('designPrice.metaTitle'),
  meta: [
    { name: 'description', content: t('designPrice.metaDesc') },
    { property: 'og:title', content: t('designPrice.metaTitle') },
    { property: 'og:description', content: t('designPrice.sub2') },
    { property: 'og:url', content: 'https://zeona.vercel.app/services/design' },
  ],
  link: [{ rel: 'canonical', href: 'https://zeona.vercel.app/services/design' }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: t('designPrice.heading'),
        provider: {
          '@type': 'Organization',
          name: 'Zeona Studio',
        },
        description: t('designPrice.sub1'),
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
}))
</script>
<template>
  <div>
    <DesignPrice />
    <!-- 暫時隱藏 DesignProject 勿刪 -->
    <!-- <DesignProject />  -->
  </div>
</template>

<style></style>
