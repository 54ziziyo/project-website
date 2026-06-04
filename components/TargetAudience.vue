<script setup lang="ts">
import img1 from '../assets/images/targetAudience/business-plan.svg'
import img2 from '../assets/images/targetAudience/digital-nomad.svg'
import img3 from '../assets/images/targetAudience/marketing.svg'
import img4 from '../assets/images/targetAudience/online-shopping.svg'
import img5 from '../assets/images/targetAudience/product-iteration.svg'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

const isVisible = ref(false)
const sectionRef = ref(null)
const activeCards = ref(new Set())

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        // 依序啟動卡片動畫
        const items = entry.target.querySelectorAll('.target-audience-card')
        items.forEach((el, i) => {
          setTimeout(() => {
            activeCards.value.add(i)
          }, i * 150)
        })
      }
    })
  }, { threshold: 0.1 })

  if (sectionRef.value) observer.observe(sectionRef.value)
})

const { t, tm, rt } = useI18n()
const audienceImgs = [img1, img2, img3, img4, img5]
const audienceItems = computed(
  () => tm('audience.items') as { title: string; l1: string; l2: string; l3: string }[],
)
</script>

<template>
  <div ref="sectionRef" class="w-full md:px-4 px-0 pt-20 pb-32 select-none">
    <div
      class="text-[24px] md:text-[52px] font-bold leading-none mb:mb-8 mb-6 text-center transition-all duration-1000 transform"
      :class="[isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']"
    >
      {{ t('audience.heading') }}
    </div>
    <div
      class="text-[#5B5B5B] text-[14px] md:text-[20px] mb-4 text-center md:mb-16 mb-8 transition-all duration-1000 transform"
      :class="[isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']"
    >
      {{ t('audience.sub') }}
    </div>
    <Carousel
      class="w-full md:px-15 px-12 relative"
      :opts="{
        align: 'start',
        slidesToScroll: 1,
        loop: true,
      }"
    >
      <CarouselContent>
        <CarouselItem
          v-for="(item, index) in audienceItems"
          :key="index"
          class="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
        >
          <div class="p-2 h-full target-audience-card transition-all duration-1000 transform" :class="[activeCards.has(index) ? 'scale-100 opacity-100' : 'scale-95 opacity-0']">
            <div
              class="group bg-white hover:scale-101 p-8 rounded-xl border h-full flex flex-col space-y-4 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div class="flex items-center justify-center w-full h-48 md:h-56 overflow-hidden">
                <img
                  :src="audienceImgs[index]"
                  :alt="rt(item.title)"
                  :title="rt(item.title) + ' | Zeona Studio'"
                  class="max-h-full max-w-full object-contain"
                  width="200"
                  height="200"
                  loading="lazy"
                />
              </div>
              <p class="font-semibold text-gray-900 mt-4">
                {{ rt(item.title) }}
              </p>
              <ul class="text-gray-600 list-disc pl-4">
                <li>{{ rt(item.l1) }}</li>
                <li>{{ rt(item.l2) }}</li>
                <li>{{ rt(item.l3) }}</li>
              </ul>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious class="absolute left-2 md:left-4 top-1/2 -translate-y-1/2" />
      <CarouselNext class="absolute right-2 md:right-4 top-1/2 -translate-y-1/2" />
    </Carousel>
  </div>
</template>
