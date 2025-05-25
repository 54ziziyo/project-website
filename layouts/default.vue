<script setup lang="ts"></script>

<template>
  <div class="flex flex-col">
    <!-- 導覽選單 -->
    <Header />

    <!-- 內容區塊 -->
    <main class="flex-1 py-[3.625rem]">
      <slot />
    </main>

    <!-- 頁尾 -->
    <Footer />
  </div>
</template>

<style></style>
