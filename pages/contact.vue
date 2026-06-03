<script lang="ts" setup>
// SEO 優化 - 聯繫頁面
useHead({
  title: '聯繫我 | Zeona Studio - 填寫表單，聊聊你的需求',
  meta: [
    {
      name: 'description',
      content:
        '想聊聊你的需求嗎？填寫表單留下資料，我會在 24 小時內回覆你。無論是客製化軟體開發（網站、AI 工具、LINE 機器人、自動化）、網站架設或設計行銷服務，都能依需求量身規劃；也歡迎加 LINE 直接聊聊。',
    },
    { property: 'og:title', content: '聯繫我 | Zeona Studio - 填寫表單，聊聊你的需求' },
    { property: 'og:description', content: '填寫表單留下需求，我會盡快與你聯繫，也可以加 LINE 直接聊聊。' },
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
        description: '填寫表單聯繫，洽談客製化軟體開發、網站架設與設計行銷服務',
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
