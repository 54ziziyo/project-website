<script lang="ts" setup>
// SEO 優化 - 關於頁面
useHead({
  title: '關於我 | Zeona Studio - 用 AI 經營品牌的數位創作者',
  meta: [
    {
      name: 'description',
      content:
        '認識 Zeona：用 AI 與自動化經營品牌的個人創作者，結合網站開發、設計與數位行銷。把實戰中在用的工具、提示詞與模板整理成數位工具箱分享給你，讓一個人也能做出專業內容；也提供客製化軟體開發、網站架設與設計行銷服務。',
    },
    { property: 'og:title', content: '關於我 | Zeona Studio - 用 AI 經營品牌的數位創作者' },
    {
      property: 'og:description',
      content: '用 AI 與自動化經營品牌，把工具與模板分享給你，也提供客製化開發與設計行銷服務。',
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
        description: '用 AI 與自動化經營品牌的個人創作者，提供數位工具箱與客製化軟體開發、設計行銷服務',
        url: 'https://zeona.vercel.app/about',
        mainEntity: {
          '@type': 'Organization',
          name: 'Zeona Studio',
          foundingDate: '2024',
          knowsAbout: [
            'AI Tools',
            'Automation',
            'Prompt Engineering',
            'Web Development',
            'Social Media Marketing',
            'UI/UX Design',
            'SEO',
            'Brand Strategy',
          ],
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
