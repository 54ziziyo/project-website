<script setup lang="ts">
import avatar1 from '../assets/images/avatar/avatar-1.png'
import avatar2 from '../assets/images/avatar/avatar-2.png'
import avatar3 from '../assets/images/avatar/avatar-3.png'
import avatar4 from '../assets/images/avatar/avatar-4.png'
import avatar5 from '../assets/images/avatar/avatar-5.png'
import avatar6 from '../assets/images/avatar/avatar-6.png'
import Autoplay from 'embla-carousel-autoplay'

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'

const { t, tm, rt } = useI18n()
const localePath = useLocalePath()

const isVisible = ref(false)
const cardVisible = ref(false)
const sectionRef = ref(null)
const cardRef = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.2 },
  )

  if (sectionRef.value) observer.observe(sectionRef.value)

  // 為卡片區域單獨設置觀察
  const cardObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          cardVisible.value = true
          cardObserver.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.2 },
  )

  if (cardRef.value) cardObserver.observe(cardRef.value)
})

const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6]

const testimonials = computed(() => tm('feedback.items') as { content: string; author: string; role: string }[])
</script>
<template>
  <div ref="sectionRef" class="w-full">
    <section class="gradient-p-to-y-bg py-24 px-4">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-6">
          <div
            class="inline-block border px-4 py-1 rounded-full text-sm transition-all duration-1000 transform"
            :class="[isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']"
          >
            {{ t('feedback.badge') }}
          </div>
          <div
            class="text-[24px] md:text-[52px] font-bold leading-none mb:mb-8 mb-6 text-center mt-3 transition-all duration-1000 transform"
            :class="[isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']"
          >
            {{ t('feedback.heading') }}
          </div>
        </div>

        <div
          class="flex justify-center items-center space-x-[-10px] mb-4 transition-all duration-1000 transform"
          :class="[isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0']"
        >
          <img
            v-for="(item, index) in avatars"
            :key="item"
            :src="item"
            :alt="`客戶頭像 ${index + 1}`"
            :title="`Zeona Studio 客戶評價 ${index + 1}`"
            class="w-12 h-12 rounded-full border-2 border-white"
            width="48"
            height="48"
          />
        </div>

        <div
          class="text-center mb-6 transition-all duration-1000 transform"
          :class="[isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']"
        >
          <p class="text-sm">{{ t('feedback.rating') }}</p>
          <div class="flex justify-center items-center gap-1 text-yellow-400 text-xl">
            <span v-for="i in 5" :key="i">★</span>
            <span class="ml-2">5.0</span>
          </div>
        </div>
      </div>

      <Carousel
        class="w-full pb-24"
        :opts="{
          align: 'start',
          slidesToScroll: 1,
          loop: true,
        }"
        :plugins="[
          Autoplay({
            delay: 2000,
          }),
        ]"
      >
        <CarouselContent class="-ml-0">
          <CarouselItem
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="pl-4 basis-full md:basis-1/2 lg:basis-1/3"
          >
            <div class="p-4 h-full select-none">
              <div class="bg-white p-8 rounded-xl shadow-lg h-full flex flex-col">
                <p class="text-gray-600 italic mb-6 flex-grow">
                  {{ rt(testimonial.content) }}
                </p>

                <div class="flex items-center">
                  <img
                    :src="avatars[index]"
                    :alt="rt(testimonial.author)"
                    :title="rt(testimonial.author)"
                    class="w-12 h-12 rounded-full object-cover mr-4"
                    width="48"
                    height="48"
                    loading="lazy"
                  />

                  <div>
                    <p class="font-semibold text-gray-900">
                      {{ rt(testimonial.author) }}
                    </p>
                    <p class="text-sm text-gray-500">{{ rt(testimonial.role) }}</p>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>

      <div class="pt-24 px-4 border-t md:border-none">
        <div
          class="max-w-6xl mx-auto text-center transition-all duration-1000 transform"
          :class="[isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']"
        >
          <h2
            class="font-bold leading-none mb:mb-8 mb-6 text-center text-[#6f6bff]"
            style="font-size: clamp(24px, 5vw, 52px)"
          >
            {{ t('feedback.ctaHeading') }}
          </h2>
          <p class="text-[#5B5B5B] text-[14px] md:text-[20px] mb-4 text-center mb-16">
            {{ t('feedback.ctaSub1') }}<br />{{ t('feedback.ctaSub2') }}
          </p>
        </div>

        <div
          ref="cardRef"
          class="max-w-4xl mx-auto rounded-xl bg-white/50 backdrop-blur-md p-12 shadow-xl border border-[#6f6bff] border-2 transition-all duration-1000 transform"
          :class="[cardVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0']"
        >
          <div class="text-left mb-8 border-b pb-8">
            <span class="bg-[#6f6bff] text-white px-2 py-1 text-sm font-semibold rounded">{{ t('feedback.tag') }}</span>
            <div class="text-2xl font-bold mt-4 mb-1">{{ t('feedback.boxTitle') }}</div>
            <p class="text-xs text-[#5B5B5B] mb-6">{{ t('feedback.boxNote') }}</p>

            <div class="grid md:grid-cols-2 gap-4 text-sm md:text-base">
              <div>
                <div class="text-lg font-semibold mb-4">{{ t('feedback.col1Title') }}</div>
                <ul class="space-y-2 text-sm md:text-base">
                  <li>{{ t('feedback.col1a') }}</li>
                  <li>{{ t('feedback.col1b') }}</li>
                </ul>
              </div>

              <div>
                <div class="text-lg font-semibold mb-4">{{ t('feedback.col2Title') }}</div>
                <ul class="space-y-2 text-sm md:text-base">
                  <li>{{ t('feedback.col2a') }}</li>
                  <li>{{ t('feedback.col2b') }}</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-4 text-sm md:text-base">
            <div>
              <div class="text-lg font-semibold mb-4">{{ t('feedback.col3Title') }}</div>
              <ul class="space-y-2">
                <li>{{ t('feedback.col3a') }}</li>
                <li>{{ t('feedback.col3b') }}</li>
                <li>{{ t('feedback.col3c') }}</li>
              </ul>
            </div>

            <div>
              <div class="text-lg font-semibold mb-4">{{ t('feedback.col4Title') }}</div>
              <ul class="space-y-2">
                <li>{{ t('feedback.col4a') }}</li>
                <li>{{ t('feedback.col4b') }}</li>
                <li>{{ t('feedback.col4c') }}</li>
              </ul>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12">
            <NuxtLink
              :to="localePath('/toolbox')"
              class="relative bg-[#8782FF] text-white font-semibold py-3 px-6 rounded-full hover:bg-[#6f6bff] transition btn-glow"
            >
              <span>{{ t('feedback.ctaToolbox') }}</span>
            </NuxtLink>
            <NuxtLink
              :to="localePath('/contact')"
              class="font-semibold py-3 px-6 rounded-full border border-[#8782FF] text-[#8782FF] hover:bg-[#8782FF] hover:text-white transition"
            >
              <span>{{ t('feedback.ctaContact') }}</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
