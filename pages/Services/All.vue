<script lang="ts" setup>
// SEO 優化 - 服務總覽頁面
useHead({
  title: '服務項目總覽 | Zeona Studio - 網站開發、數位行銷、視覺設計方案',
  meta: [
    {
      name: 'description',
      content:
        '瀏覽 Zeona Studio 完整服務方案：全客製化網站開發、SEO 優化、數位行銷策略、品牌視覺設計。一站式數位服務，從網站建置到社群行銷，為您的品牌打造線上競爭優勢，讓您的事業 24 小時不間斷運作。',
    },
    { property: 'og:title', content: '服務項目總覽 | Zeona Studio - 數位服務方案' },
    { property: 'og:description', content: '從網站到行銷，一站式數位解決方案助您品牌成長。' },
    { property: 'og:url', content: 'https://zeona.vercel.app/services/all' },
  ],
  link: [{ rel: 'canonical', href: 'https://zeona.vercel.app/services/all' }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Zeona Studio 服務項目',
        description: '網站開發、數位行銷、視覺設計一站式服務',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@type': 'Service',
              name: '網站開發服務',
              url: 'https://zeona.vercel.app/services/website',
            },
          },
          {
            '@type': 'ListItem',
            position: 2,
            item: {
              '@type': 'Service',
              name: '數位行銷服務',
              url: 'https://zeona.vercel.app/services/marketing',
            },
          },
          {
            '@type': 'ListItem',
            position: 3,
            item: {
              '@type': 'Service',
              name: '視覺設計服務',
              url: 'https://zeona.vercel.app/services/design',
            },
          },
        ],
      }),
    },
  ],
})
</script>
<template>
  <ServiceAllPrice />
</template>

<style></style>
