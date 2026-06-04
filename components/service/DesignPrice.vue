<script lang="ts" setup>
const { t, tm, rt } = useI18n()
type PriceItem = { title: string; highlight: string; description: string; price: string; unit: string }
const servicesPrice = computed(() => tm('designPrice.items') as PriceItem[])
</script>

<template>
  <div class="relative px-6 py-24 md:py-32 md:px-20 overflow-hidden">
    <div class="absolute pointer-events-none -z-10 opacity-30 top-0 left-0">
      <img
        src="@/assets/images/round-purple.svg"
        alt="裝飾圓形圖案"
        title="Zeona Studio 網站裝飾元素"
        class="max-w-none transform -translate-x-1/2 -translate-y-1/4"
        width="1500"
        height="1500"
      />
    </div>

    <div class="relative z-10 mb-10 md:mb-20">
      <p class="mb-4 text-[#8782FF] text-[16px] md:text-[20px] font-bold text-center tracking-widest uppercase">
        Price List
      </p>
      <div class="text-[32px] md:text-[42px] font-bold leading-tight text-center text-[#2D2D2D]">{{ t('designPrice.heading') }}</div>
      <div class="w-12 h-1 bg-[#8782FF] mx-auto my-6 rounded-full"></div>
      <h1 class="text-gray-600 text-[16px] md:text-[20px] text-center md:mb-4">
        {{ t('designPrice.sub1') }}<br />{{ t('designPrice.sub2') }}
      </h1>
    </div>

    <div class="max-w-6xl mx-auto relative z-10">
      <div class="grid gap-6">
        <div
          v-for="(service, index) in servicesPrice"
          :key="index"
          class="group flex flex-col md:flex-row justify-between items-start md:items-center p-6 md:p-8 rounded-3xl transition-all duration-300 bg-[#8782ff05] border-[#8782ff25] shadow-sm md:bg-transparent md:border-transparent md:shadow-none md:hover:bg-white md:hover:shadow-xl md:hover:shadow-[#8782ff15] md:hover:border-[#8782ff20]"
        >
          <div class="flex items-start md:pr-10">
            <span
              class="hidden md:block text-[24px] font-black text-[#8782ff9e] mr-6 mt-1 group-hover:text-[#8782FF] transition-colors"
            >
              {{ (index + 1).toString().padStart(2, '0') }}
            </span>

            <div>
              <div class="text-xl font-bold mb-2 text-[#333] flex items-center">
                {{ rt(service.title) }}
                <span class="ml-3 h-[1px] w-0 group-hover:w-8 bg-[#8782FF] transition-all duration-500"></span>
              </div>
              <p class="text-[15px] font-semibold mb-2">
                {{ rt(service.highlight) }}
              </p>
              <p class="text-sm text-gray-400 leading-relaxed max-w-2xl group-hover:text-gray-600 transition-colors">
                {{ rt(service.description) }}
              </p>
            </div>
          </div>

          <div class="mt-6 md:mt-0 flex items-baseline whitespace-nowrap">
            <span class="text-sm font-bold text-[#8782FF] mr-1">NT$</span>
            <span class="text-3xl font-black text-[#8782FF] tracking-tight">{{ rt(service.price) }}</span>
            <span class="ml-1 text-sm text-gray-400 font-medium">{{ rt(service.unit) }}</span>
          </div>
        </div>
      </div>

      <div class="mt-16 p-8 bg-white/40 backdrop-blur-md rounded-[2rem] border border-[#8782ff20] shadow-sm">
        <div class="flex items-start">
          <span class="text-xl mr-4">🎨</span>
          <div>
            <p class="text-gray-500 text-sm leading-7">
              <span class="text-[#8782FF] font-bold block mb-1 text-lg">{{ t('designPrice.noteTitle') }}</span>
              {{ t('designPrice.noteBody') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.group {
  backface-visibility: hidden;
  will-change: transform, box-shadow;
}
</style>
