<script setup lang="ts">
import MedoaPlanImg from '../assets/images/info/media-planning.png'
import TrainingImg from '../assets/images/info/training.png'
import WebDevImg from '../assets/images/info/web-development.png'
import DesignImg from '../assets/images/info/web-design.png'

const { t, tm, rt } = useI18n()
const localePath = useLocalePath()
const serviceImgs = [MedoaPlanImg, TrainingImg, WebDevImg, DesignImg]
const services = computed(() => tm('info.services') as { title: string; items: string[] }[])
const whyItems = computed(() => tm('info.why') as { title: string; desc: string }[])

const serviceCardEls = ref<HTMLElement[]>([])
const visibleCards = ref(new Set<number>())
const servicesRef = ref<HTMLElement | null>(null)
const whyRef = ref<HTMLElement | null>(null)
const bannerRef = ref<HTMLElement | null>(null)
const ctaRef = ref<HTMLElement | null>(null)
const visibleSections = ref({ services: false, why: false, banner: false, cta: false })

const isInView = (el: HTMLElement, offset = 0.8) => {
  const rect = el.getBoundingClientRect()
  const viewHeight = window.innerHeight || document.documentElement.clientHeight
  return rect.top <= viewHeight * offset && rect.bottom >= 0
}

const collectCardRef = (el: Element | null) => {
  if (el instanceof HTMLElement && !serviceCardEls.value.includes(el)) {
    serviceCardEls.value.push(el)
  }
}

const checkVisibility = () => {
  serviceCardEls.value.forEach((el, idx) => {
    if (isInView(el)) {
      visibleCards.value.add(idx)
    }
  })

  if (servicesRef.value && isInView(servicesRef.value)) {
    visibleSections.value.services = true
  }
  if (whyRef.value && isInView(whyRef.value)) {
    visibleSections.value.why = true
  }
  if (bannerRef.value && isInView(bannerRef.value)) {
    visibleSections.value.banner = true
  }
  if (ctaRef.value && isInView(ctaRef.value)) {
    visibleSections.value.cta = true
  }
}

const handleScroll = () => {
  window.requestAnimationFrame(checkVisibility)
}

onMounted(() => {
  checkVisibility()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
<template>
  <div class="relative md:pt-[80px] pt-[80px] overflow-x-clip">
    <div
      class="absolute z-0 top-0 h-fit left-8 min-[480px]:text-[100px] min-[737px]:text-[120px] md:-bottom-[10%] md:left-24 text-[70px] md:text-[200px] font-bold text-[#FAFAFA] leading-none"
    >
      Service
    </div>
    <div class="absolute top-[30%] right-0 w-[30%] h-[30%] bg-[#8782FF] rounded-full blur-[120px] opacity-40" />

    <section class="relative md:py-10">
      <div
        ref="servicesRef"
        class="relative max-w-7xl mx-auto text-center transition-all duration-700"
        :class="visibleSections.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
      >
        <p class="mb-2 md:mb-4 text-[#8782FF] text-[16px] md:text-[16px] md:text-[24px] font-bold">{{ t('info.kicker') }}</p>
        <div class="text-[24px] md:text-[52px] font-bold leading-none mb:mb-8 mb-6">{{ t('info.heading') }}</div>
        <div class="text-[#5B5B5B] text-[14px] md:text-[20px]">{{ t('info.sub1') }}<br />{{ t('info.sub2') }}</div>
      </div>

      <div
        class="relative md:mt-20 mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto px-10 items-top"
      >
        <div
          v-for="(item, index) in services"
          :key="index"
          :ref="collectCardRef"
          class="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 py-8 transition-all duration-700 border hover:scale-105 transform"
          :class="visibleCards.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
        >
          <img
            :src="serviceImgs[index]"
            :alt="rt(item.title)"
            :title="rt(item.title) + ' - Zeona Studio'"
            class="mx-auto h-12 mb-4"
            width="48"
            height="48"
          />
          <div class="text-lg font-bold mb-2">{{ rt(item.title) }}</div>
          <ul class="list-disc list-inside text-sm text-gray-500 mt-1 text-left">
            <li>{{ rt(item.items[0]) }}</li>
            <li>{{ rt(item.items[1]) }}</li>
            <li>{{ rt(item.items[2]) }}</li>
            <li v-if="item.items[3]">{{ rt(item.items[3]) }}</li>
          </ul>
        </div>
      </div>
    </section>

    <section
      ref="whyRef"
      class="relative pl-8 md:pl-[6.875rem] md:pt-40 py-30 transition-all duration-700"
      :class="visibleSections.why ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
    >
      <div class="mb-2 md:mb-4 text-[#8782FF] text-[16px] md:text-[24px] font-bold">{{ t('info.whyKicker') }}</div>
      <div class="text-[24px] md:text-[52px] font-bold leading-none mb-8 md:mb-[80px]">{{ t('info.whyHeading') }}</div>
      <div class="space-y-[32px] md:space-y-[60px]">
        <div class="space-y-[8px] md:space-y-[16px]">
          <div class="flex items-center space-x-[12px] md:space-x-[24px]">
            <img
              class="w-[20px] md:w-fit"
              src="../assets/images/project-team.svg"
              alt="團隊合作圖示"
              title="專案團隊合作"
              width="30"
              height="30"
            />
            <div class="text-[16px] md:text-[24px] font-bold pr-8">{{ rt(whyItems[0].title) }}</div>
          </div>
          <div class="text-[#5B5B5B] text-[14px] px-8 md:text-[20px] md:pl-[54px]">
            {{ rt(whyItems[0].desc) }}
          </div>
        </div>

        <div class="space-y-[8px] md:space-y-[16px] md:pl-[50px]">
          <div class="flex items-center space-x-[12px] md:space-x-[24px]">
            <img
              class="w-[20px] md:w-fit"
              src="../assets/images/custom-project.svg"
              alt="客製化專案圖示"
              title="客製化專案開發"
              width="30"
              height="30"
            />
            <div class="text-[16px] md:text-[24px] font-bold pr-8">{{ rt(whyItems[1].title) }}</div>
          </div>
          <div class="text-[#5B5B5B] text-[14px] px-8 md:text-[20px] md:pl-[54px]">
            {{ rt(whyItems[1].desc) }}
          </div>
        </div>

        <div class="space-y-[8px] md:space-y-[16px] md:pl-[100px]">
          <div class="flex items-center space-x-[12px] md:space-x-[24px]">
            <img
              class="w-[20px] md:w-fit"
              src="../assets/images/ongoing-maintenance.svg"
              alt="長期維護服務圖示"
              title="網站長期維護服務"
              width="30"
              height="30"
            />
            <div class="text-[16px] md:text-[24px] font-bold pr-8">{{ rt(whyItems[2].title) }}</div>
          </div>
          <div class="text-[#5B5B5B] text-[14px] px-8 md:text-[20px] md:pl-[54px]">
            {{ rt(whyItems[2].desc) }}
          </div>
        </div>
      </div>
    </section>

    <section
      ref="bannerRef"
      class="md:py-20 transition-all duration-700"
      :class="visibleSections.banner ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
    >
      <div class="relative w-full md:rounded-2xl overflow-hidden bg-gray-500 text-white" style="height: 200px">
        <img
          src="../assets/images/solution-3.webp"
          alt="Zeona Studio 品牌行銷服務背景圖"
          title="從品牌定位到數位落地"
          class="absolute inset-0 w-full h-full object-cover opacity-50"
          width="1200"
          height="200"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-black/40" />

        <div class="relative z-10 flex items-center justify-between h-full px-10">
          <div>
            <h2 class="text-2xl font-bold mb-2">{{ t('info.bannerTitle') }}</h2>
            <p class="text-sm text-gray-200">{{ t('info.bannerSub') }}</p>
          </div>

          <div class="text-center text-[#F1F0FF]">
            <div class="text-5xl font-bold leading-tight">100%</div>
            <div class="text-sm text-white mt-1">{{ t('info.bannerStat') }}</div>
          </div>
        </div>
      </div>
    </section>

    <section
      ref="ctaRef"
      class="flex justify-center items-center py-40 px-10 transition-all duration-700"
      :class="visibleSections.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
    >
      <div class="max-w-6xl text-center">
        <h2 class="text-[24px] md:text-[32px] font-bold mb-4">{{ t('info.ctaHeading') }}</h2>
        <p class="text-[#5B5B5B] text-[16px] md:text-[20px] mb-12">
          {{ t('info.ctaSub1') }}
          <br />
          {{ t('info.ctaSub2') }}
        </p>
        <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            :href="localePath('/toolbox')"
            :title="t('info.ctaToolbox')"
            class="font-semibold py-3 px-6 rounded-full text-white text-sm bg-[#8782FF] cursor-pointer hover:bg-[#6f6bff] transition-colors duration-300"
          >
            {{ t('info.ctaToolbox') }}
          </a>
          <a
            :href="localePath('/contact')"
            :title="t('info.ctaContact')"
            class="font-semibold py-3 px-6 rounded-full text-[#8782FF] text-sm border border-[#8782FF] cursor-pointer hover:bg-[#8782FF] hover:text-white transition-colors duration-300"
          >
            {{ t('info.ctaContact') }}
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
