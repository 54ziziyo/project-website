<script lang="ts" setup>
// SEO 優化 - 關於頁面
useHead({
  title: '關於我們 | Zeona Studio - 網站設計與社群行銷專家',
  meta: [
    {
      name: 'description',
      content:
        '認識 Zeona Studio：擁有 5 年以上網站開發與數位行銷經驗，專注於全客製化網站設計、UI/UX 介面規劃、品牌官網建置與社群行銷服務。我們協助新創公司與中小企業打造兼具美感與高效能的線上品牌，從網站規劃、視覺設計到社群經營一站搞定，讓您的品牌 24 小時持續曝光獲客。',
    },
    { property: 'og:title', content: '關於我們 | Zeona Studio - 網站設計與社群行銷專家' },
    {
      property: 'og:description',
      content: '擁有 5 年以上經驗，專注網站設計開發與社群行銷服務，協助品牌打造高效能線上競爭力。',
    },
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
        description: '專注網站設計開發與社群行銷服務，協助品牌建立線上競爭力',
        url: 'https://zeona.vercel.app/about',
        mainEntity: {
          '@type': 'Organization',
          name: 'Zeona Studio',
          foundingDate: '2024',
          knowsAbout: ['Web Development', 'Social Media Marketing', 'UI/UX Design', 'SEO', 'Brand Strategy'],
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
