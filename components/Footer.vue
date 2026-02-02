<template>
  <footer class="bg-[#F1F0FF] text-stone-600 pt-10 pb-5 text-center text-sm space-y-16">
    <div
      class="flex md:justify-evenly flex-col md:flex-row items-start space-y-8 md:space-y-0 md:space-x-8 mx-10 md:mx-0"
    >
      <div class="text-left">
        <div class="font-bold font-[Hammersmith_One]">Zeona</div>
        <div>感謝您訪問我的網站，期待為您提供優質的服務！</div>
      </div>
      <div class="space-x-4 flex">
        <div class="space-y-2 flex flex-col items-start">
          <NuxtLink to="/about" class="hover:text-[#8782FF] transition">關於我</NuxtLink>
          <NuxtLink to="/faq" class="hover:text-[#8782FF] transition">常見問題</NuxtLink>
          <NuxtLink to="/works" class="hover:text-[#8782FF] transition">作品集</NuxtLink>
        </div>
        <div class="space-y-2 flex flex-col items-start">
          <NuxtLink to="/privacy" class="hover:text-[#8782FF] transition">隱私政策</NuxtLink>
          <NuxtLink to="/terms" class="hover:text-[#8782FF] transition">使用條款</NuxtLink>
          <NuxtLink to="/contact" class="hover:text-[#8782FF] transition">聯繫我</NuxtLink>
        </div>
        <div class="space-y-2 flex flex-col items-start">
          <NuxtLink to="/services/website" class="hover:text-[#8782FF] transition">網站開發</NuxtLink>
          <NuxtLink to="/services/marketing" class="hover:text-[#8782FF] transition">行銷推廣</NuxtLink>
          <NuxtLink to="/services/design" class="hover:text-[#8782FF] transition">視覺設計</NuxtLink>
        </div>
      </div>
      <div class="space-y-2 flex flex-col">
        <div class="flex space-x-2">
          <div>營業時間</div>
          <div>平日 10:00-18:00</div>
        </div>
        <div class="flex space-x-2">
          <div>電子信箱</div>
          <a href="mailto:54ziziyo@gmail.com" class="hover:text-[#8782FF] transition">54ziziyo@gmail.com</a>
        </div>
        <div class="flex space-x-2">
          <div>LINE ID</div>
          <a
            href="https://line.me/ti/p/@768viuqz"
            target="_blank"
            rel="noopener noreferrer"
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
