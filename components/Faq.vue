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
      title: '軟體開發從洽談到交付的完整流程是什麼？',
      content: `
        無論是網站、AI 工具、LINE 機器人或自動化流程，流程大致如下：
        <ol class="list-decimal pl-5 space-y-2 mt-3">
          <li><strong>需求諮詢</strong>：說明你的目標、使用情境與初步預算，提供參考範例。</li>
          <li><strong>需求確認與報價</strong>：釐清功能規格與串接範圍後，提供報價單與時程。</li>
          <li><strong>簽約與訂金</strong>：確認規格後簽約，需支付 <strong>50% 專案訂金</strong>。</li>
          <li><strong>啟動排程</strong>：<span class="font-bold">訂金入帳後，專案正式進入開發排程。</span></li>
          <li><strong>開發與測試</strong>：依排程進行開發，期間提供測試環境或 Demo 確認進度。</li>
          <li><strong>驗收與結清</strong>：於測試環境確認功能無誤後結清尾款。</li>
          <li><strong>部署與交付</strong>：確認尾款入帳後，正式部署上線或交付系統。</li>
        </ol>
      `,
    },
    {
      value: 'web-quote',
      title: '為什麼客製化軟體一定要先評估才能報價？',
      content: `
        客製化開發沒有固定售價，費用會依<strong>功能規格、系統複雜度、串接的第三方服務數量與預估工時</strong>而有明顯差異。<br/><br/>
        因此需先了解你的完整需求才能提供準確報價。<span class="font-bold">提供的需求描述、參考範例與範圍越清楚，報價就越精準</span>；報價單與規格經雙方確認並簽約後，即作為開發與驗收的依據。
      `,
    },
    {
      value: 'web-third-party',
      title: 'AI 工具、LINE 機器人或自動化會用到第三方服務，費用與穩定性怎麼算？',
      content: `
        這類專案通常需串接第三方平台（如 OpenAI / Claude API、LINE Messaging API、Make / n8n、雲端主機等）。<br/><br/>
        <strong>1. 費用：</strong>第三方服務的訂閱費、API 用量費與授權費<span class="font-bold">由客戶自行負擔</span>，並依各平台實際計價。<br/>
        <strong>2. 不可控因素：</strong>若因第三方平台<strong>調整政策、變更或停用 API、調漲費用、服務中斷或帳號遭該平台停權</strong>等非我方可控之情況，導致功能受影響，我方不負賠償責任，但會協助評估替代方案（可能涉及額外工時報價）。<br/>
        <strong>3. 建議：</strong>客製方案會盡量保留調整彈性，以因應平台變動。
      `,
    },
    {
      value: 'web-scope-change',
      title: '專案進行中可以一直追加或修改需求嗎？',
      content: `
        為確保如期交付，<strong>規格確認後即作為開發基準</strong>；若有介面設計，設計階段包含 <strong>2 次調整機會</strong>。<br/><br/>
        若於開發中途<strong>更動已確認的規格</strong>，或在驗收階段提出<strong>原始需求範圍以外的新功能</strong>，將視為「新增需求」，依工時另行報價並調整時程。
      `,
    },
    {
      value: 'web-schedule-delay',
      title: '如果我的資料或帳號權限準備不及，會影響進度嗎？',
      content: `
        為確保品質與交付時間，我會於合約中載明<strong>「資料提供期限」</strong>。<br/><br/>
        若因客戶端資料（如文字、圖片、串接所需的帳號權限、API 金鑰、授權碼）延遲提供超過預定時程，原定交付日期將依<strong>實際延遲天數順延</strong>；若延遲嚴重影響後續其他專案排程，可能需重新排隊或支付額外的「重啟排程費用」。
      `,
    },
    {
      value: 'web-maintenance',
      title: '系統上線後有提供維護或保固嗎？',
      content: `
        交付後提供 <strong>1 個月的技術協助</strong>，針對<strong>原有功能</strong>的 Bug 或異常進行免費修復。<br/><br/>
        以下情況<span class="font-bold">不在免費範圍內</span>：新增功能、內容/規格變更、因第三方平台或環境更新（如套件停止支援、API 變更、自行更動原始碼）所造成之失效。<br/><br/>
        如有長期需求，可另洽「定期維護」報價；維護客戶將優先處理並享優惠，非維護客戶則依技術難度與工時專案報價。
      `,
    },
    {
      value: 'web-ownership',
      title: '程式原始碼、帳號與系統的版權歸屬？',
      content: `
        <strong>結清全額尾款後</strong>，系統管理權限、客製化開發之原始碼與內容版權歸客戶所有。<br/><br/>
        我方保有將本案作為<strong>作品集展示</strong>之權利（不含機密資料）。所使用之第三方套件、框架與服務，依其<strong>各自的授權條款</strong>規範。尾款結清前，相關權限與原始碼不予轉移。
      `,
    },
    {
      value: 'web-ai-disclaimer',
      title: 'AI 工具的產出與成效有保證嗎？',
      content: `
        AI 模型的回覆具<strong>機率性與不確定性</strong>，可能產生不準確或不預期的內容，<span class="font-bold">最終結果仍需由使用者審閱與把關</span>。<br/><br/>
        我提供的是 AI 工具的<strong>開發與整合服務</strong>，不保證特定的準確率、業績或營運成效，產出亦<strong>不應作為法律、醫療、財務等專業領域的最終判斷依據</strong>。<br/><br/>
        涉及資料蒐集、儲存與個資之應用，雙方將於合約中約定使用範圍與責任，客戶須確保其使用方式符合相關法規。
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
  { value: 'web', label: '軟體開發' },
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
