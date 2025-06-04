<script setup lang="ts">
const isDesktop = ref(false);

onMounted(() => {
  isDesktop.value = window.innerWidth >= 1024;
});
</script>
<template>
  <NuxtLayout>
    <CustomCursor v-if="isDesktop" />
    <NuxtPage />
  </NuxtLayout>
</template>
