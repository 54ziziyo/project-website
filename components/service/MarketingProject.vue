<script lang="ts" setup>
const { t, tm, rt } = useI18n()
const router = useRouter()
const localePath = useLocalePath()

type Plan = { title: string; subtitle: string; price: string; unit: string; isPopular: boolean; features: string[] }
const marketingPlans = computed(() => tm('mktg.plans') as Plan[])

const handleSelect = (plan: Plan) => {
  const featureLines = plan.features.map((feature) => `- ${rt(feature)}`).join('\n')
  const prefill = [
    `想詢問「行銷方案｜${rt(plan.title)}」`,
    `適用場景：${rt(plan.subtitle)}`,
    `預估方案：NT$${rt(plan.price)} ${rt(plan.unit)}`,
    '需求重點：',
    featureLines,
  ].join('\n')

  router.push({ path: localePath('/contact'), query: { prefill } })
}
</script>

<template>
  <div class="relative md:pt-20 md:pb-40 py-32 overflow-hidden">
    <div
      class="absolute left-1/2 -translate-x-1/2 md:translate-x-0 min-[480px]:text-[100px] min-[737px]:text-[120px] top-10 md:left-24 text-[70px] md:text-[200px] font-bold md:text-[#FAFAFA] leading-none text-gray-100 opacity-50"
    >
      Project
    </div>

    <div class="relative px-4 flex justify-center flex-col items-center text-center">
      <div class="z-10">
        <div class="mb-4 text-[#8782FF] text-[16px] md:text-[24px] font-bold">{{ t('mktg.planDiversity') }}</div>
        <div class="text-[28px] md:text-[52px] font-bold leading-none mb-[32px]">{{ t('mktg.planTitle') }}</div>
        <div class="h-[1px] w-[70px] bg-[#A2A2A2] mb-[20px] mx-auto" />
        <p class="text-[#5B5B5B] text-[14px] md:text-[20px] mb-1">{{ t('mktg.planSub1') }}</p>
        <p class="text-[#5B5B5B] text-[14px] md:text-[20px]">{{ t('mktg.planSub2') }}</p>
      </div>

      <div
        class="grid w-full md:px-20 lg:grid-cols-3 md:grid-cols-2 lg:mt-[100px] mt-12 grid-cols-1 gap-16 lg:gap-6 items-start"
      >
        <div
          v-for="plan in marketingPlans"
          :key="plan.title"
          class="bg-white/60 backdrop-blur-md relative px-8 py-12 flex flex-col space-y-[28px] transition-all duration-300 transform border-2 border-[#8782FF] shadow-lg"
          :class="[
            plan.isPopular
              ? 'rounded-3xl lg:-translate-y-6 scale-105 z-10 shadow-xl hover:shadow-2xl hover:-translate-y-8'
              : 'rounded-2xl hover:shadow-xl hover:-translate-y-2 z-0',
          ]"
        >
          <div
            v-if="plan.isPopular"
            class="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#8782FF] text-white px-6 py-1 rounded-full text-sm font-bold tracking-widest shadow-md z-20 whitespace-nowrap"
          >
            {{ t('mktg.planPopular') }}
          </div>

          <div class="space-y-2">
            <div class="text-[20px] lg:text-[28px] font-bold text-start text-[#4A4A4A]">{{ rt(plan.title) }}</div>
            <div class="text-[16px] md:text-[18px] text-[#5B5B5B] text-start">{{ rt(plan.subtitle) }}</div>
          </div>

          <div class="text-base flex items-end space-x-2">
            <div
              class="text-[24px] xl:text-[32px] leading-none font-black"
              :class="plan.isPopular ? 'text-[#8782FF]' : 'text-[#4A4A4A]'"
            >
              NT＄{{ rt(plan.price) }}
            </div>
            <span class="text-[14px] lg:text-[16px] text-[#5B5B5B]">{{ rt(plan.unit) }}</span>
          </div>

          <button
            type="button"
            class="text-base font-bold py-3 text-center cursor-pointer transition-all duration-300 active:scale-95 border border-[#8782FF]"
            :class="
              plan.isPopular
                ? 'bg-[#8782FF] text-white rounded-xl shadow-md hover:bg-[#6f6bff]'
                : 'text-[#8782FF] rounded-lg hover:bg-[#8782FF] hover:text-white'
            "
            @click="handleSelect(plan)"
          >
            {{ t('mktg.planSelect') }}
          </button>

          <div class="space-y-4">
            <div v-for="feature in plan.features" :key="feature" class="flex items-start text-start">
              <div class="flex-shrink-0 mt-1 w-5 h-5 flex items-center justify-center">
                <Icon name="pajamas:check-sm" class="text-[#8782FF] w-full h-full" />
              </div>
              <span class="ml-3 text-[#5B5B5B] text-sm md:text-base leading-relaxed tracking-wide">
                {{ rt(feature) }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
