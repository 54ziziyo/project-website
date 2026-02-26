<script lang="ts" setup>
// SEO 優化 - 聯繫頁面
useHead({
  title: '聯繫我們 | Zeona Studio - 免費諮詢品牌數位轉型方案',
  meta: [
    {
      name: 'description',
      content:
        '立即聯繫 Zeona Studio，獲取免費 15 分鐘品牌數位化諮詢。無論是客製化網站開發、SEO 搜尋優化或社群行銷策略，我們為您量身打造最適合的數位解決方案。讓專業團隊協助您的品牌在數位世界脫穎而出，實現線上曝光與業績增長。填寫表單或直接撥打電話，開始您的數位轉型之旅！',
    },
    { property: 'og:title', content: '聯繫我們 | Zeona Studio - 免費諮詢品牌數位轉型方案' },
    { property: 'og:description', content: '立即預約免費諮詢，讓專業團隊協助您的品牌在數位世界脫穎而出。' },
    { property: 'og:url', content: 'https://zeona.vercel.app/contact' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: 'https://zeona.vercel.app/og-cover.jpg' },
    { name: 'theme-color', content: '#8782FF' },
  ],
  link: [{ rel: 'canonical', href: 'https://zeona.vercel.app/contact' }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: '聯繫 Zeona Studio',
        description: '免費諮詢品牌數位轉型方案',
        url: 'https://zeona.vercel.app/contact',
        mainEntity: {
          '@type': 'Organization',
          name: 'Zeona Studio',
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            availableLanguage: ['Chinese', 'English'],
          },
        },
      }),
    },
  ],
})
</script>
<template>
  <div class="pt-24 md:pt-32 pb-16 p-4">
    <Contact />
  </div>
</template>

<style></style>
