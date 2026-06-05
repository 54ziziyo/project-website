<script setup lang="ts">
defineProps<{
  titlePre?: string
  titleHighlight?: string
  titlePost?: string
  subtitle?: string
  buttonText: string
}>()

const localePath = useLocalePath()

// 自帶進場動畫（滑入視窗才淡入），讓各頁 CTA 行為一致，頁面不需再傳狀態
const root = ref<HTMLElement | null>(null)
const isVisible = ref(false)

onMounted(() => {
  if (!root.value) {
    isVisible.value = true
    return
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          io.disconnect()
        }
      })
    },
    { threshold: 0.15 },
  )
  io.observe(root.value)
})
</script>

<template>
  <div ref="root" class="px-4 md:px-8 py-16 md:py-24 mx-4 md:mx-8">
    <div
      class="mx-auto text-center bg-gradient-to-br from-[#8782FF]/10 to-[#6f6bff]/10 p-12 md:p-20 rounded-[3rem] shadow-sm"
    >
      <h2
        class="font-black leading-tight mb-6 text-[32px] md:text-[48px] text-gray-900 tracking-tighter transition-all duration-1000 transform"
        :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
      >
        {{ titlePre }}<span class="text-[#8782FF]">{{ titleHighlight }}</span>{{ titlePost }}
      </h2>
      <p
        v-if="subtitle"
        class="text-gray-500 text-lg md:text-xl mb-10 transition-all duration-1000 transform"
        :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
      >
        {{ subtitle }}
      </p>
      <NuxtLink
        :to="localePath('/contact')"
        class="inline-block bg-[#8782FF] text-white font-bold py-4 px-10 rounded-full hover:bg-[#6f6bff] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 active:scale-95"
      >
        {{ buttonText }}
      </NuxtLink>
    </div>
  </div>
</template>
