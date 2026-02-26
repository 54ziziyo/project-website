<script setup lang="ts">
// 類別類型定義
type Category = 'web' | 'marketing' | 'design'

// FAQ 結構定義
interface Faq {
  value: string
  title: string
  content: string
}

// 所有 FAQ 資料
const allFaqs: Record<Category, Faq[]> = {
  web: [
    {
      value: 'web-process',
      title: '網站從洽談到上線的完整流程是什麼？',
      content: `
        <ol class="list-decimal pl-5 space-y-2">
          <li><strong>需求諮詢</strong>：填寫表單提供參考範例與初步預算。</li>
          <li><strong>報價與簽約</strong>：確認功能後提供報價單，簽約後需支付 <strong>50% 專案訂金</strong>。</li>
          <li><strong>啟動排程</strong>：<span class="font-bold">訂金確認入帳後，專案將正式進入製作時程排程。</span></li>
          <li><strong>視覺與開發</strong>：依據排程進行 UI 設計與前端開發，期間提供測試連結確認進度。</li>
          <li><strong>驗收與結清</strong>：於測試環境確認無誤後結清尾款。</li>
          <li><strong>部署上線</strong>：確認尾款入帳後，正式部署至伺服器上線。</li>
        </ol>
      `,
    },
    {
      value: 'web-schedule-delay',
      title: '如果因為我的資料準備不及，會影響專案進度嗎？',
      content: `
        為了確保每個案件的品質與交付時間，我會於合約中載明<strong>「資料提供期限」</strong>。<br/><br/>
        若因客戶端資料（如文字、圖片、授權碼）延遲提供超過預定時程，原定上線日期將依據實際延遲天數順延；若延遲嚴重導致影響後續其他案場排程，專案可能需重新排隊或支付額外的「重啟排程費用」。
      `,
    },
    {
      value: 'web-maintenance',
      title: '網站完成後有提供後續維護服務嗎？',
      content: `
        我提供上線後 <strong>1 個月的「前端技術協助」</strong>（針對原有功能的 Bug 或排版異常進行免費修復）。<br/><br/>
        如有長期代管需求，可尋洽「定期維護」報價。
      `,
    },
    {
      value: 'web-repair-quote',
      title: '如果網站後來「壞掉」或是需要「版本更新」怎麼辦？',
      content: `
        若發生非開發因素之失效（如：瀏覽器更新導致不相容、第三方套件停止支援、自行更動原始碼等）：<br/>
        1. <strong>維護客戶</strong>：將優先處理，若涉及架構異動將提供優惠報價。<br/>
        2. <strong>非維護客戶</strong>：將依技術難度與修復工時，進行<strong>專案制另外報價</strong>。
      `,
    },
    {
      value: 'web-self-update',
      title: '網站完成後可以自己更新內容嗎？',
      content:
        '若方案包含內容管理系統（CMS），我會提供教學協助您自行更新文字與圖片；若為純前端網頁，後續修改將按件或按工時計費。',
    },
    {
      value: 'web-domain-hosting',
      title: '主機伺服器和網域是什麼？我要自己處理嗎？',
      content:
        '如果您已有主機可提供權限協助設定；若無，我也能代辦部署。請注意，主機與網域屬於每年需續費之租借費用，需按時繳納以確保網站持續運作。',
    },
    {
      value: 'web-seo-ga',
      title: '可以幫我安裝 Google Analytics 分析或 SEO 嗎？',
      content:
        '我提供加購服務，包含 GA4 數據監測、Google Search Console 登錄及基本 SEO 優化（Meta 標籤與網站地圖），幫助提升搜尋曝光率。',
    },
    {
      value: 'web-revision-limit',
      title: '專案進行中可以無限次修改嗎？',
      content: `
        為了確保專案如期交付，<strong>設計階段包含 2 次調整機會</strong>；前端開發階段則以確定的設計稿為基準進行產製。<br/><br/>
        若於開發中途要求更動已確認的設計，或在驗收階段提出非原始需求範圍的功能調整，將視為「新增需求」並依工時另行報價。
      `,
    },
    {
      value: 'web-post-launch-edit',
      title: '網站驗收完畢並上線後，發現想改字或換圖怎麼辦？',
      content: `
        <strong>專案部署上線即視為正式驗收完畢。</strong><br/><br/>
        上線後若有文字微調或更換圖片之需求，若您有購買維護方案，將依合約內容處理；若無，則視更動幅度採「按件計費」或「工時計費」。建議在測試連結階段進行最終細緻校對，以確保正式版之正確性。
      `,
    },
  ],
  marketing: [
    {
      value: 'marketing-process-payment',
      title: '行銷服務的合作流程與付款方式？',
      content: `
        <ol class="list-decimal pl-5 space-y-2">
          <li><strong>需求溝通</strong>：討論產品資訊、風格與目標。</li>
          <li><strong>簽約與訂金</strong>：<span class="font-bold">支付 50% 訂金後啟動案件</span>；包月方案則採全額預付制。</li>
          <li><strong>內容提案</strong>：若有訂閱長期服務，每月初提供「內容日曆」與發文主題規劃，確認後進入製作。若無則以單案方式進行內容製作。</li>
          <li><strong>成品交付</strong>：按進度交付並提供 2 次微調修正。</li>
          <li><strong>結案與續約</strong>：<span class="font-bold">尾款結清後交付檔案</span>；包月續約應於期末 15 日前確認。</li>
        </ol>
      `,
    },
    {
      value: 'marketing-assets-liability',
      title: '如果我沒有素材怎麼辦？提供素材有什麼要注意的？',
      content: `
        服務<strong>不含實地拍攝</strong>。客戶需自行確保提供之素材（照片、Logo、字體）已獲商用授權，<span class="font-bold">若產生版權糾紛由客戶端承擔全額法律責任</span>。<br/><br/>
        若因客戶延遲提供素材導致當月無法如期發文，<strong>該篇額度視同放棄，不得折現退款或遞延至次月。</strong>
      `,
    },
    {
      value: 'marketing-performance-claim',
      title: '可以保證觸及率、追蹤人數或業績成長嗎？',
      content: `
        我提供專業的「內容製作與策略佈局」。由於社群演算法與市場變因為不可控因素，<strong>不保證任何具體數字成效。</strong><br/><br/>
        所有費用均為「專業勞務製作費」，而非「成效保證金」，不接受因數據未達預期而要求退費或扣款。<br/><br/>
        若因社群平台（如 FB/IG）官方政策更動、帳號遭無預警停權或演算法大規模更新導致之影響，我方不負賠償責任。
      `,
    },
    {
      value: 'marketing-revision-rules',
      title: '貼文或影音成品可以修改幾次？',
      content: `
        每項成品包含 <strong>2 次免費微調</strong>（如文字修正、局部排版）。<br/><br/>
        若涉及「風格重新設定」、「腳本大改」或「定稿發布後要求修改」，將視為新專案另外報價。
      `,
    },
    {
      value: 'marketing-urgent-fee',
      title: '如有急稿（急件）該如何處理？',
      content: `
        若需求時程短於該項目的平均工作天（如：ㄈLogo < 5天、Banner < 2天），將額外收取 30% - 50% 的急件處理費，並視當下排程決定是否承接。
      `,
    },
    {
      value: 'marketing-ownership',
      title: '製作出的圖文/影音原始檔（編輯檔）可以提供給我嗎？',
      content: `
        交付成果為最終發布檔（JPG/MP4）。未註明買斷者，<strong>不提供編輯檔（AI、PR 專案檔）</strong>。<br/><br/>
        若需索取原始編輯檔，需額外支付 <strong>專案總金額 50% 之版權轉讓費</strong>。未經授權不得轉售或提供予第三方使用。
      `,
    },
    {
      value: 'marketing-communication',
      title: '關於專案溝通與聯繫的時間限制？',
      content: `
        服務時間為 <strong>週一至週五 10:00 - 18:00</strong>。非作業時間訊息將於下個工作日回覆。除帳號遭盜等重大危機外，請尊重非辦公時間之休息與作業空間。
      `,
    },
    {
      value: 'marketing-seo-duration',
      title: 'SEO 文章寫完後，多久會看到搜尋排名提升？',
      content: `
        SEO 為長期投資，通常需 3-6 個月逐漸見效。我提供關鍵字研究與佈局，但<strong>不保證特定關鍵字必能排名首頁</strong>。
      `,
    },
  ],
  design: [
    {
      value: 'design-process',
      title: '設計專案的合作流程與付款方式？',
      content: `
        <ol class="list-decimal pl-5 space-y-2">
          <li><strong>需求確認</strong>：討論風格偏好並確認設計規格。</li>
          <li><strong>簽約與訂金</strong>：<span class="font-bold">支付 50% 訂金後，專案正式啟動排程。</span></li>
          <li><strong>初稿提案</strong>：依專案性質提供 1-3 款風格提案。</li>
          <li><strong>細節微調</strong>：包含 2 次免費微調（如顏色、位置調整）。</li>
          <li><strong>尾款與交付</strong>：<span class="font-bold">結清 50% 尾款後，交付最終格式檔案。</span></li>
        </ol>
      `,
    },
    {
      value: 'design-revision-rules',
      title: '關於修改次數與範圍的限制？',
      content: `
        每項成品包含 2 次微調額度。若微調後仍有需求，將按次收取專案總額 15-20% 的修改費。<br/><br/>
        <span class="text-[#8782FF] font-bold">💡 提醒：</span>若要求的更動偏離原本討論之風格（如打掉重練），將視為新專案重新報價。設計稿經確認定稿後，任何後續更動皆需額外付費。
      `,
    },
    {
      value: 'design-proofreading',
      title: '如果成品上線或印刷後發現「字打錯」怎麼辦？',
      content: `
        在交付過程中，<span class="font-bold">「文字校對」由客戶負最終確認責任。</span><br/><br/>
        請務必在定稿前仔細檢查所有文案、電話、網址等內容。若成品經客戶確認定稿後才發現文字錯誤，後續產生的修改工時或印刷損失，我方不負賠償責任。
      `,
    },
    {
      value: 'design-color-difference',
      title: '為什麼設計稿在手機看和電腦看顏色不一樣？',
      content: `
        因各顯示器（手機、電腦螢幕）顯色技術不同，存在 10-15% 的色差屬於正常範圍。<br/><br/>
        若有印刷需求，強烈建議加購<strong>「印刷檔優化服務（+NT$500）」</strong>，我將進行 CMYK 色彩校正。若客戶自行使用 RGB 網頁圖檔進行印刷導致之嚴重色差，我方恕不負責。
      `,
    },
    {
      value: 'design-copyright-liability',
      title: '我可以提供網路找的照片請你放在設計裡嗎？',
      content: `
        可以，但<span class="font-bold">客戶需自行確保所提供素材（照片、字體、Logo）已獲得商用授權。</span><br/><br/>
        若因客戶提供之素材產生版權糾紛，相關法律責任由客戶端全額承擔。若需代為購買商用圖庫，費用將另行報價。
      `,
    },
    {
      value: 'design-ownership',
      title: '設計完成後的版權與原始檔歸屬？',
      content: `
        全額付清尾款後，客戶享有成品之永久使用權。我方保有作品之發表權與展示權（作為作品集使用）。<br/><br/>
        <span class="text-[#8782FF] font-bold">關於原始檔：</span>交付不含編輯檔（AI/PSD/Figma）。如需買斷可編輯原始檔，需另支付<strong>專案總金額 50% 之版權轉讓費</strong>。
      </span>
      `,
    },
    {
      value: 'design-cancel-policy',
      title: '如果專案執行一半想終止合約，可以退費嗎？',
      content: `
        1. <strong>初稿提案前</strong>：退還 20% 訂金。<br/>
        2. <strong>初稿提案後</strong>：<span class="font-bold">訂金全額不予退還</span>，客戶亦不可使用已提案之任何設計草案。<br/><br/>
        此舉是為了保障已投入的創意發想與產製工時，敬請見諒。
      `,
    },
    {
      value: 'design-urgent-fee',
      title: '急件設計如何計費？',
      content: `
        若需求時程短於該項目的平均工作天（如：Logo < 5天、Banner < 2天），將額外收取 <strong>30% - 50% 的急件處理費</strong>，並視當下排程決定是否承接。
      `,
    },
  ],
}

const categories = [
  { value: 'web', label: '網站開發' },
  { value: 'marketing', label: '行銷推廣' },
  { value: 'design', label: '視覺設計' },
] as const

const route = useRoute()
const router = useRouter()

const selectedCategory = ref<Category>('web')
const activeAccordion = ref('')
const currentFaqs = computed(() => allFaqs[selectedCategory.value])

const categoryRefs = ref<Record<string, HTMLElement | null>>({})
const indicatorStyle = ref<{ width: string; transform: string }>({ width: '0px', transform: 'translateX(0px)' })

const getFaqValues = (category: Category) => allFaqs[category].map((faq) => faq.value)

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
      <div class="text-[28px] md:text-[42px] font-black leading-tight text-center text-[#2D2D2D] mb-4">常見問題</div>
      <div class="h-1.5 w-12 bg-[#8782FF] rounded-full mb-6"></div>
      <h1 class="text-gray-500 text-sm md:text-lg text-center max-w-2xl leading-relaxed">
        這裡整理了關於服務流程、費用與合作細節的說明
        <br class="hidden md:block" />建立清楚的共識，是專業合作的第一步。
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
          {{ cat.label }}
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
                {{ item.title }}
              </span>
            </AccordionTrigger>

            <AccordionContent>
              <div class="px-6 pb-6 pt-2 border-t border-gray-50">
                <div
                  class="text-[14px] md:text-[16px] text-gray-600 leading-7 font-normal faq-content"
                  v-html="item.content"
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>

    <div class="mt-20 text-center px-6">
      <p class="text-gray-400 text-sm mb-4">還有其他疑問嗎？</p>
      <NuxtLink
        to="/contact"
        class="text-[#8782FF] font-bold border-b-2 border-[#8782FF] pb-1 hover:text-[#6f6bff] hover:border-[#6f6bff] transition-all"
      >
        直接與我連繫談談
      </NuxtLink>
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
