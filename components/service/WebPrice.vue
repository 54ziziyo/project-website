<script lang="ts" setup>
const { t, tm, rt } = useI18n()
// 客製化軟體開發：皆依需求評估報價
const customDevServices = computed(
  () => tm('svc.customServices') as { title: string; highlight: string; description: string; ta: string }[],
)
// 網站架設服務：我能提供哪些服務（能力說明，方案與費用見下方）
const webServices = computed(() => tm('svc.webServices') as { title: string; items: string[] }[])
</script>
<template>
  <div class="px-6 pt-28 md:pt-32 pb-10 md:px-20 md:space-y-24 space-y-16 relative overflow-x-clip">
    <div class="absolute top-0 left-0 w-[10%] h-[10%] bg-[#8782FF] rounded-full blur-[120px] opacity-40" />
    <div class="absolute top-[50%] right-0 w-[10%] h-[10%] bg-[#8782FF] rounded-full blur-[120px] opacity-40" />
    <div class="absolute top-[80%] left-0 w-[10%] h-[10%] bg-[#8782FF] rounded-full blur-[120px] opacity-40" />

    <!-- 頁面標題 -->
    <div class="flex flex-col items-center mb-10 space-y-4">
      <h2 class="text-[28px] md:text-[36px] font-bold leading-none text-center mb-6">{{ t('svc.title') }}</h2>
      <div class="w-12 h-1 bg-[#8782FF] rounded-full" />
      <h1 class="text-gray-600 text-[16px] md:text-[20px] text-center md:mb-4 leading-relaxed">
        {{ t('svc.intro1') }}<br />
        {{ t('svc.intro2') }}
      </h1>
      <a
        href="https://line.me/ti/p/@768viuqz"
        target="_blank"
        rel="noopener noreferrer"
        class="mt-4 px-8 py-3 text-white text-sm bg-[#8782FF] rounded-full cursor-pointer hover:bg-[#6f6bff] transition-colors duration-300 font-semibold"
      >
        {{ t('svc.lineCta') }}
      </a>
    </div>

    <!-- 客製化軟體開發 -->
    <div class="space-y-8 max-w-7xl mx-auto">
      <div class="text-center space-y-2">
        <div class="text-[24px] md:text-[32px] font-bold leading-none">{{ t('svc.customTitle') }}</div>
        <p class="text-[#8782FF] text-[15px] md:text-[18px] font-bold">{{ t('svc.customSub') }}</p>
        <p class="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
          {{ t('svc.customDesc') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div
          v-for="(service, index) in customDevServices"
          :key="index"
          class="bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl p-8 md:p-10 flex flex-col space-y-3 border border-[#8782FF] duration-300 transform hover:-translate-y-1"
        >
          <div class="text-xl md:text-2xl font-bold">{{ rt(service.title) }}</div>
          <p class="text-sm md:text-base text-[#8782FF] font-semibold">{{ rt(service.highlight) }}</p>
          <p class="text-sm md:text-base text-gray-600 leading-relaxed">{{ rt(service.description) }}</p>
          <div class="text-sm text-gray-600 pt-1">{{ rt(service.ta) }}</div>
        </div>
      </div>
    </div>

    <!-- 網站架設服務（能力說明） -->
    <div class="space-y-8 max-w-7xl mx-auto">
      <div class="text-center space-y-2">
        <div class="text-[24px] md:text-[32px] font-bold leading-none">{{ t('svc.webTitle') }}</div>
        <p class="text-[#8782FF] text-[15px] md:text-[18px] font-bold">{{ t('svc.webSub') }}</p>
        <p class="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
          {{ t('svc.webDesc') }}
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <div
          v-for="(service, index) in webServices"
          :key="index"
          class="bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl p-8 flex flex-col space-y-4 border border-[#8782FF] duration-300 transform hover:-translate-y-1"
        >
          <div class="text-xl font-bold">{{ rt(service.title) }}</div>
          <ul class="space-y-2 text-sm md:text-base text-gray-600">
            <li v-for="(item, itemIndex) in service.items" :key="itemIndex" class="flex items-start gap-2">
              <span class="text-[#8782FF] mt-0.5 flex-shrink-0">▹</span>
              <span>{{ rt(item) }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
