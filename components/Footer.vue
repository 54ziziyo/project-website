<template>
  <footer class="bg-[#F1F0FF] text-stone-600 pt-10 pb-5 text-center text-sm space-y-16">
    <div
      class="flex lg:justify-evenly flex-col lg:flex-row items-start space-y-8 lg:space-y-0 lg:space-x-8 mx-10 lg:mx-0"
    >
      <div class="text-left">
        <div class="font-bold font-[Hammersmith_One]">Zeona</div>
        <div>感謝您訪問我的網站，期待為您提供優質的服務！</div>
      </div>
      <div class="space-x-4 flex">
        <div class="space-y-2 flex flex-col items-start">
          <NuxtLink to="/about" title="關於 Zeona Studio - 認識我們的服務與理念" class="hover:text-[#8782FF] transition"
            >關於我</NuxtLink
          >
          <NuxtLink to="/faq" title="常見問題 FAQ - 網站開發與行銷服務疑問解答" class="hover:text-[#8782FF] transition"
            >常見問題</NuxtLink
          >
          <NuxtLink to="/works" title="作品集 - 網站開發與行銷案例展示" class="hover:text-[#8782FF] transition"
            >作品集</NuxtLink
          >
        </div>
        <div class="space-y-2 flex flex-col items-start">
          <NuxtLink to="/privacy" title="隱私政策 - Zeona Studio 資料保護聲明" class="hover:text-[#8782FF] transition"
            >隱私政策</NuxtLink
          >
          <NuxtLink to="/terms" title="使用條款 - Zeona Studio 服務條款" class="hover:text-[#8782FF] transition"
            >使用條款</NuxtLink
          >
          <NuxtLink to="/contact" title="聯繫我們 - 免費諮詢網站設計與行銷服務" class="hover:text-[#8782FF] transition"
            >聯繫我</NuxtLink
          >
        </div>
        <div class="space-y-2 flex flex-col items-start">
          <NuxtLink
            to="/services/website"
            title="網站開發服務 - 全客製化網頁設計與開發"
            class="hover:text-[#8782FF] transition"
            >網站開發</NuxtLink
          >
          <NuxtLink
            to="/services/marketing"
            title="數位行銷服務 - SEO優化與社群經營"
            class="hover:text-[#8782FF] transition"
            >行銷推廣</NuxtLink
          >
          <NuxtLink
            to="/services/design"
            title="視覺設計服務 - 品牌設計與LOGO設計"
            class="hover:text-[#8782FF] transition"
            >視覺設計</NuxtLink
          >
        </div>
        <div class="space-y-2 flex flex-col items-start">
          <NuxtLink
            to="/services/all"
            title="整合服務方案 - 網站開發、行銷、設計一站式服務"
            class="hover:text-[#8782FF] transition"
            >整合服務</NuxtLink
          >
          <NuxtLink to="/blog" title="部落格 - AI、行銷與網站開發教學" class="hover:text-[#8782FF] transition"
            >部落格</NuxtLink
          >
        </div>
      </div>
      <div class="space-y-2 flex flex-col">
        <div class="flex space-x-2">
          <div>營業時間</div>
          <div>平日 10:00-18:00</div>
        </div>
        <div class="flex space-x-2">
          <div>電子信箱</div>
          <a
            href="mailto:54ziziyo@gmail.com"
            title="寄送電子郵件給 Zeona Studio"
            class="hover:text-[#8782FF] transition"
            >54ziziyo@gmail.com</a
          >
        </div>
        <div class="flex space-x-2">
          <div>LINE ID</div>
          <a
            href="https://line.me/ti/p/@768viuqz"
            target="_blank"
            rel="noopener noreferrer"
            title="透過 LINE 聯繫 Zeona Studio"
            class="hover:text-[#8782FF] transition"
            >@768viuqz</a
          >
        </div>
      </div>
    </div>
    <div class="container mx-auto font-bold">
      <p>© {{ currentYear }} Zeona. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>
