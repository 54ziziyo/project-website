<template>
  <footer
    class="bg-[#F1F0FF] text-stone-600 py-6 text-center text-sm space-y-16"
  >
    <div class="flex justify-evenly">
      <div class="text-left">
        <div class="font-bold">Luzar</div>
        <div>感謝您訪問我們的網站，期待為您提供優質的服務！</div>
      </div>
      <div class="space-x-4 flex">
        <div class="space-y-2 flex flex-col">
          <div>關於我們</div>
          <div>服務項目</div>
          <div>常見問題</div>
        </div>
        <div class="space-y-2 flex flex-col">
          <div>隱私政策</div>
          <div>使用條款</div>
          <div>聯繫我們</div>
        </div>
      </div>
      <div class="space-y-2 flex flex-col">
        <div class="flex space-x-2">
          <div>營業時間</div>
          <div>平日 9:00-18:00</div>
        </div>
        <div class="flex space-x-2">
          <div>電子信箱</div>
          <div>54ziziyo@gmail.com</div>
        </div>
        <div class="flex space-x-2">
          <div>LINE ID</div>
          <div>0980191031</div>
        </div>
      </div>
    </div>
    <div class="container mx-auto font-bold">
      <p>© {{ currentYear }} Luzar. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>
