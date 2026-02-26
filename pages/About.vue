<script lang="ts" setup>
// SEO 優化 - 關於頁面
useHead({
  title: '關於我們 | Zeona Studio - 品牌數位轉型專家的故事',
  meta: [
    {
      name: 'description',
      content:
        '認識 Zeona Studio：擁有 5 年以上網站開發與數位行銷背景，擅長將複雜技術轉化為直覺品牌體驗，協助新創與中小企業建立兼具美感與高效能的線上競爭力。',
    },
    { property: 'og:title', content: '關於我們 | Zeona Studio - 品牌數位轉型專家的故事' },
    { property: 'og:description', content: '從技術到行銷的一站式數位服務，讓您的品牌在線上脫穎而出。' },
    { property: 'og:url', content: 'https://zeona.vercel.app/about' },
  ],
  link: [{ rel: 'canonical', href: 'https://zeona.vercel.app/about' }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: '關於 Zeona Studio',
        description: '品牌數位轉型專家的故事與服務理念',
        url: 'https://zeona.vercel.app/about',
        mainEntity: {
          '@type': 'Organization',
          name: 'Zeona Studio',
          foundingDate: '2024',
          knowsAbout: ['Web Development', 'Digital Marketing', 'UI/UX Design', 'SEO', 'Brand Strategy'],
        },
      }),
    },
  ],
})
</script>
<template>
  <div class="relative overflow-x-clip">
    <About />
    <Info />
  </div>
</template>

<style></style>
