<script setup lang="ts">
// 類別類型定義
type Category = 'web' | 'marketing' | 'design'

type FaqBlock = { type: 'p'; text: string } | { type: 'ol'; items: string[] }

// FAQ 各分類的題目 ID（順序對應 i18n faq.items.*；ID 不隨語言改變）
const faqValues: Record<Category, string[]> = {
  web: [
    'web-process',
    'web-quote',
    'web-third-party',
    'web-scope-change',
    'web-schedule-delay',
    'web-maintenance',
    'web-ownership',
    'web-ai-disclaimer',
  ],
  marketing: [
    'marketing-process-payment',
    'marketing-assets-liability',
    'marketing-performance-claim',
    'marketing-revision-rules',
    'marketing-urgent-fee',
    'marketing-ownership',
    'marketing-communication',
    'marketing-seo-duration',
  ],
  design: [
    'design-process',
    'design-revision-rules',
    'design-proofreading',
    'design-color-difference',
    'design-copyright-liability',
    'design-ownership',
    'design-cancel-policy',
    'design-urgent-fee',
  ],
}

const { t, tm, rt } = useI18n()
const localePath = useLocalePath()

const categories = [{ value: 'web' }, { value: 'marketing' }, { value: 'design' }] as const

const route = useRoute()
const router = useRouter()

const selectedCategory = ref<Category>('web')
const activeAccordion = ref('')
const currentFaqs = computed(() => {
  const ids = faqValues[selectedCategory.value]
  const items = tm(`faq.items.${selectedCategory.value}`) as { title: string; blocks: FaqBlock[] }[]
  return ids.map((value, i) => ({ value, title: items[i]?.title, blocks: items[i]?.blocks || [] }))
})

const categoryRefs = ref<Record<string, HTMLElement | null>>({})
const indicatorStyle = ref<{ width: string; transform: string }>({ width: '0px', transform: 'translateX(0px)' })

const getFaqValues = (category: Category) => faqValues[category]

const normalizeCategory = (raw: unknown): Category => {
  if (typeof raw === 'string') {
    const match = categories.find((cat) => cat.value === raw)
    if (match) return match.value
  }
  return 'web'
}

const applyRouteState = () => {
  const normalizedCategory = normalizeCategory(route.query.category)
  selectedCategory.value = normalizedCategory

  const values = getFaqValues(normalizedCategory)
  const queryFaq = typeof route.query.faq === 'string' ? route.query.faq : ''
  activeAccordion.value = values.includes(queryFaq) ? queryFaq : values[0] || ''
}

const setCategory = (category: Category) => {
  selectedCategory.value = category
  const values = getFaqValues(category)
  if (!values.includes(activeAccordion.value)) {
    activeAccordion.value = values[0] || ''
  }
}

applyRouteState()

const updateIndicator = () => {
  const el = categoryRefs.value[selectedCategory.value]
  if (!el) return

  // 取得按鈕的寬度與相對於父容器的距離
  const { offsetWidth, offsetLeft } = el

  indicatorStyle.value = {
    width: `${offsetWidth}px`,
    // 使用 transform 來達成平滑滑動，起始點由 left-0 決定
    transform: `translateX(${offsetLeft}px)`,
  }
}

onMounted(() => {
  nextTick(updateIndicator)
  window.addEventListener('resize', updateIndicator)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateIndicator)
})

watch(selectedCategory, () => nextTick(updateIndicator))

watch(
  [selectedCategory, activeAccordion],
  () => {
    const query: Record<string, string> = {}
    query.category = selectedCategory.value
    if (activeAccordion.value) query.faq = activeAccordion.value
    router.replace({ query })
  },
  { immediate: true },
)

watch(
  () => route.query,
  () => {
    applyRouteState()
  },
)

applyRouteState()
const scrollContainer = ref<HTMLElement | null>(null)
const showLeftGradient = ref(false)
const showRightGradient = ref(true)

// 監聽滾動事件，判斷遮罩顯示
const handleScroll = () => {
  if (!scrollContainer.value) return
  const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.value

  // 加上 1px 的 buffer 以應對瀏覽器計算誤差
  showLeftGradient.value = scrollLeft > 5
  showRightGradient.value = scrollLeft + clientWidth < scrollWidth - 5
}

// 點擊類別時自動滾動到該選項（優化體驗）
const scrollToActive = () => {
  const activeEl = categoryRefs.value[selectedCategory.value]
  if (activeEl && scrollContainer.value) {
    activeEl.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }
}

const resolveText = (value: unknown) => {
  if (typeof value === 'string') return value
  return rt(value as any)
}

watch(selectedCategory, () => {
  nextTick(updateIndicator)
  scrollToActive()
})

onMounted(() => {
  nextTick(() => {
    updateIndicator()
    handleScroll() // 初始化檢查一次
  })
  window.addEventListener('resize', updateIndicator)
})
</script>

<template>
  <div class="relative pt-24 md:pt-32 pb-24 overflow-hidden bg-gray-50/50">
    <div class="absolute -top-24 -right-24 w-96 h-96 bg-[#8782FF]/5 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-[#8782FF]/5 rounded-full blur-3xl pointer-events-none"></div>

    <div class="px-6 md:px-10 flex justify-center flex-col items-center mb-10 relative z-10">
      <div class="text-[28px] md:text-[42px] font-black leading-tight text-center text-[#2D2D2D] mb-4">
        {{ t('faq.heading') }}
      </div>
      <div class="h-1.5 w-12 bg-[#8782FF] rounded-full mb-6"></div>
      <h1 class="text-gray-500 text-sm md:text-lg text-center max-w-2xl leading-relaxed">
        {{ t('faq.sub1') }}
        <br class="hidden md:block" />{{ t('faq.sub2') }}
      </h1>
    </div>

    <div class="flex justify-center px-4 mb-10 relative z-10">
      <div
        class="relative flex bg-white p-1.5 rounded-2xl shadow-sm border border-gray-200 overflow-x-auto no-scrollbar max-w-full"
      >
        <span
          class="absolute top-1.5 bottom-1.5 left-0 bg-[#8782FF] rounded-xl shadow-md transition-all duration-300 ease-out pointer-events-none"
          :style="indicatorStyle"
          aria-hidden="true"
        ></span>
        <button
          v-for="cat in categories"
          :key="cat.value"
          :ref="(el) => (categoryRefs[cat.value] = el)"
          :class="[
            'relative z-10 px-6 py-2.5 rounded-xl transition-all duration-300 text-sm md:text-base font-bold whitespace-nowrap cursor-pointer',
            selectedCategory === cat.value ? 'text-white' : 'text-gray-500 hover:text-[#8782FF]',
          ]"
          @click="setCategory(cat.value)"
        >
          {{ t(`faq.cat.${cat.value}`) }}
        </button>
      </div>
    </div>

    <div class="max-w-4xl mx-auto px-4 md:px-6 relative z-10">
      <div class="space-y-4">
        <Accordion v-model="activeAccordion" type="single" collapsible class="w-full">
          <AccordionItem
            v-for="item in currentFaqs"
            :key="item.value"
            :value="item.value"
            class="bg-white border border-gray-200 rounded-2xl mb-4 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <AccordionTrigger class="px-6 py-5 text-left hover:no-underline group">
              <span
                class="text-[16px] md:text-lg font-bold text-gray-800 group-hover:text-[#8782FF] transition-colors leading-snug pr-4"
              >
                {{ rt(item.title) }}
              </span>
            </AccordionTrigger>

            <AccordionContent>
              <div class="px-6 pb-6 pt-2 border-t border-gray-50">
                <div class="text-[14px] md:text-[16px] text-gray-600 leading-7 font-normal faq-content space-y-4">
                  <template v-for="(block, bi) in item.blocks" :key="`${item.value}-${bi}`">
                    <p v-if="resolveText((block as any).type) === 'p'" class="leading-7">
                      {{ resolveText((block as any).text) }}
                    </p>
                    <ol
                      v-else-if="resolveText((block as any).type) === 'ol'"
                      class="list-decimal pl-5 space-y-2 mt-1"
                    >
                      <li v-for="(line, li) in (block as any).items" :key="`${item.value}-${bi}-${li}`">
                        {{ resolveText(line) }}
                      </li>
                    </ol>
                  </template>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>

    <div class="mt-20 text-center px-6">
      <p class="text-gray-400 text-sm mb-4">{{ t('faq.moreQ') }}</p>
      <NuxtLink
        :to="localePath('/contact')"
        class="text-[#8782FF] font-bold border-b-2 border-[#8782FF] pb-1 hover:text-[#6f6bff] hover:border-[#6f6bff] transition-all"
      >
        {{ t('faq.contactLink') }}
      </NuxtLink>
      <p class="text-gray-300 text-xs mt-8">{{ t('faq.legalNote') }}</p>
    </div>
  </div>
</template>

<style scoped>
/* 隱藏捲動條但維持功能 (切換鈕用) */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
