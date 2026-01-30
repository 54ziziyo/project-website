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
      value: 'process',
      title: '網站從洽談到上線的完整流程是什麼？',
      content: `
  <ol class="list-decimal pl-5 space-y-2">
    <li><strong>預約諮詢</strong>：填寫需求表單，提供行業別、預算、參考網站範例。</li>
    <li><strong>需求確認</strong>：1-2個工作日內線上會議，釐清功能與頁面架構。</li>
    <li><strong>報價與簽約</strong>：2-5個工作日提供報價書，簽約後收取50%訂金。</li>
    <li><strong>設計階段</strong>：1-3週完成設計稿（含2次修改）。<br><span class="text-gray-600">*急件可縮短至7天（+20%費用）</span></li>
    <li><strong>開發與測試</strong>：2-5週完成功能開發，提供測試站修正。</li>
    <li><strong>上線與教學</strong>：部署網站，交付操作手冊與教學影片，並收取尾款。</li>
  </ol>
  <p class="mt-4">💡 <strong>全程溝通工具</strong>：Figma（設計審核）、Google Meet（會議）。</p>
  `,
    },
    {
      value: 'item-2',
      title: '網站預算有限，還有辦法做網站嗎？',
      content:
        '當然沒問題！<br/>我可依您的預算規劃合適的建站方案，像是模板網站、單頁式網站、分期付款等，協助小資創業或新品牌順利起步。',
    },
    {
      value: 'budget',
      title: '預算有限的情況下，有哪些低成本建站選擇？',
      content: `
  <table class="w-full border mt-2">
    <tr class="bg-gray-50">
      <th class="p-2 border text-left">方案</th>
      <th class="p-2 border text-left">適合對象</th>
      <th class="p-2 border text-left">價格範圍</th>
    </tr>
    <tr>
      <td class="p-2 border">半客製化一頁式網站</td>
      <td class="p-2 border">短期活動、個人品牌</td>
      <td class="p-2 border">NT$8,000起</td>
    </tr>
    <tr>
      <td class="p-2 border">WordPress 模板網站</td>
      <td class="p-2 border">中小企業、部落格</td>
      <td class="p-2 border">NT$25,000起</td>
    </tr>
  </table>
  `,
    },
    {
      value: 'item-3',
      title: '網站完成後可以自己更新嗎？',
      content: '可以，我會使用方便操作的 CMS 後台系統，並提供線上教學或操作影片，協助您後續自行更新網站內容。',
    },
    {
      value: 'item-4',
      title: '網站架設完成後，之後還會有維護嗎？如果後來突然壞掉怎麼辦？',
      content:
        '我提供免費的 1 個月技術協助，後續如需長期維護，可選擇維護方案，包含內容更新、系統安全檢查、備份與技術支援等。',
    },
    {
      value: 'item-5',
      title: '主機伺服器和網域是什麼？我要自己處理嗎？',
      content: '如果您已有主機與網域可協助設定，若沒有，我也可協助代為購買與設定，讓您無需煩惱技術細節。',
    },
    {
      value: 'item-6',
      title: '網站會支援其他裝置嗎？如手機、平板？',
      content: '會的，所有網站皆採響應式設計（RWD），可自動適應手機、平板與電腦等不同裝置。',
    },
    {
      value: 'item-7',
      title: '網站需要多久時間製作？',
      content: '依據網站複雜程度而定，簡易網站約 3～4 週，進階功能網站如電商或會員系統或更客製化網站，需經過評估。',
    },
    {
      value: 'item-8',
      title: '可以幫我接 GA 分析、SEO 嗎？',
      content:
        '可以！我可協助安裝 Google Analytics 分析、基本 SEO 設定（如 meta 標籤、關鍵字、網站地圖）等，幫助提升搜尋曝光率。',
    },
    {
      value: 'item-9',
      title: '報價會報多久？',
      content:
        '在我釐清您的網站需求、功能與預算後，通常會在 2～5 個工作日內提供完整報價與合作內容。若有特殊需求或加購功能，時間可能略有延長，會事先與您確認。',
    },
    //   {
    //     value: "tech-stack",
    //     title: "網站開發使用哪些技術？",
    //     content: `
    // <ul class="list-disc pl-5 space-y-1">
    //   <li><strong>前端</strong>：HTML5/CSS3、JavaScript（Vue.js/React）、RWD設計</li>
    //   <li><strong>後端</strong>：WordPress/Node.js（依需求選用）</li>
    //   <li><strong>資料庫</strong>：MySQL、Firebase（簡易會員系統）</li>
    //   <li><strong>部署</strong>：AWS LightSail、Vercel、或客戶指定主機</li>
    // </ul>
    // `,
    //   },
    {
      value: 'add-ons',
      title: '常見加購項目有哪些？價格如何計算？',
      content: `
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
    <div class="border p-3 rounded-lg">
      <h4 class="font-bold">基礎加購</h4>
      <ul class="list-disc pl-5 mt-1 text-sm">
        <li>多語系支援：NT$15,000/語系</li>
        <li>GA4 安裝：NT$2,000</li>
        <li>SSL 憑證：NT$1,500/年</li>
      </ul>
    </div>
    <div class="border p-3 rounded-lg">
      <h4 class="font-bold">進階功能</h4>
      <ul class="list-disc pl-5 mt-1 text-sm">
        <li>電商金流串接：NT$15,000起</li>
        <li>會員系統：NT$25,000起</li>
        <li>動畫特效：NT$10,000起</li>
      </ul>
    </div>
  </div>
  `,
    },
    {
      value: 'seo-maintenance',
      title: '網站上線後如何提升SEO？有維護建議嗎？',
      content: `
  <p><strong>SEO 基礎服務</strong>（含在部分方案）：</p>
  <ul class="list-disc pl-5 mt-1">
    <li>Meta標籤優化</li>
    <li>網站速度優化</li>
    <li>行動裝置相容性檢測</li>
  </ul>
  `,
    },
  ],
  marketing: [
    // 社群貼文相關
    {
      value: 'social-post',
      title: '單篇社群貼文包含哪些內容？',
      content:
        '每篇貼文含 3-4 張設計圖 + 文案撰寫（依主題優化），可額外加購增圖或調整版型。適用 FB/IG 平台，確保格式兼容。',
    },
    {
      value: 'story-design',
      title: '限時動態設計的交付檔格式？',
      content: '提供 JPG/PNG/GIF 檔（依需求），建議尺寸 1080x1920px。若需加入互動功能（如投票、問答），請提前告知。',
    },

    // SEO 相關
    {
      value: 'seo-article',
      title: 'SEO 文章如何確保關鍵字效果？',
      content:
        '我會執行以下步驟：<br/>（1) 關鍵字研究（搜尋量/競爭度分析） <br/>（2) 內容結構優化（H2/H3 標籤） <br/>（3) 內部連結規劃 <br/>（4) 圖片 ALT 標籤設定。完成後提供關鍵字排名追蹤建議。',
    },
    {
      value: 'seo-price',
      title: 'SEO 文章和一般部落格文章差在哪呢？',
      content:
        '一般部落格以品牌觀點為主，SEO文章則需平衡『讀者需求』與『搜尋意圖』。<br/>SEO文章包含「策略性撰寫」與「長期效益」，需研究產業趨勢、分析競爭對手，並優化內容結構。<br/>相較一般文案，SEO 文章能持續帶來自然流量。',
    },

    // 影音剪輯相關
    {
      value: 'short-video',
      title: '短影音剪輯是否含字幕與配樂？',
      content:
        '60秒內剪輯已包含基礎字幕、配樂、音效及轉場特效；30秒剪輯則含字幕與配樂。<br/>所有配樂均符合社群平台版權規範，避免遭下架風險，如需專業配音或商用版權音樂，需額外報價。',
    },
    {
      value: 'video-format',
      title: '剪輯後的影音交付格式？',
      content: '提供 MP4 檔（1080p），可依需求輸出橫式（16:9）或直式（9:16）。',
    },

    // 包月方案相關
    {
      value: 'monthly-plan',
      title: '包月方案可否調整內容數量？',
      content:
        '可依需求增減服務項目，例如：貼文數量升級，越多篇越便宜、追加短影音(按照需求報價)。<br/>最低月費為 NT$15,000 起。',
    },
    {
      value: 'schedule',
      title: '發文排程如何安排？',
      content: '我會根據您的產業特性，建議最佳發文時段（例：電商適合晚間 8-10 點），並於每月初提供內容日曆確認。',
    },

    // 加購與客製化
    {
      value: 'extra-service',
      title: '哪些服務可額外加購？',
      content:
        '常見加購項目：<br/>（1) 貼文增圖（+NT$300/張） <br/>（2) 動態貼文設計（+NT$500/篇） <br/>（3) 短影音拍攝（另報價） <br/>（4) 數據分析報告（+NT$2,000/月）。',
    },
    {
      value: 'custom-plan',
      title: '沒有適合的方案怎麼辦？',
      content: '歡迎聯繫我討論客製化報價！提供「需求表單」勾選項目後，將於 1-3 個工作天提供專屬方案。',
    },
    {
      value: 'payment',
      title: '付款方式和合約如何簽訂？',
      content:
        '支援銀行轉帳/線上支付，單次專案需付50%訂金；包月方案採季付（享5%折扣）。合約以電子簽署確認，可提供範本預覽。',
    },
    {
      value: 'revision',
      title: '成品可修改幾次？如何提出意見？',
      content:
        '每項成品包含2次免費修改（需於交付後7天內提出），額外修改依工時報價。<br/>議透過Google文件/線上表單標註具體意見。',
    },
    {
      value: 'urgent',
      title: '有急件需求該如何處理？',
      content:
        '急件需+30%費用，請提前告知需求檔期。<br/>包月客戶可優先排程，但單日最多處理2篇貼文或1支影音以確保品質。',
    },
  ],
  design: [
    // Logo設計相關
    {
      value: 'logo-process',
      title: 'Logo設計流程需要多久？',
      content:
        '通常需 7-10 個工作天，包含：<br/>（1) 需求溝通 <br/>（2) 初稿提案（3款） <br/>（3) 2次修改 <br/>（4) 最終交付（AI/EPS/PNG檔）。<br/><br/>急件可加購縮短至5天內（+20%費用）。',
    },
    {
      value: 'logo-usage',
      title: 'Logo設計包含哪些應用檔案？',
      content:
        '交付：<br/>（1) 彩色/單色版 <br/>（2) 標準字組合 <br/>（3) 橫式/直式排版 <br/>（4) 檔案格式（.AI/.EPS/.PNG）。<br/><br/>如需名片、信封等應用設計可額外報價。',
    },

    // 社群視覺相關
    {
      value: 'banner-size',
      title: '社群Banner的建議尺寸？',
      content:
        'FB封面：1200x630px<br/>IG貼文：1080x1080px<br/>蝦皮主圖：800x800px。<br/><br/>我會依平台自動調整，無需擔心尺寸問題。',
    },
    {
      value: 'dynamic-fee',
      title: '動態設計的「+30%費用」包含哪些效果？',
      content: '基礎動態含：文字浮入、簡單轉場、元素微動畫。<br/>若需複雜特效（如粒子動畫、3D旋轉），需另報價。',
    },

    // 印刷與輸出
    {
      value: 'print-file',
      title: '印刷檔的「+NT$500」是什麼？',
      content:
        '此費用包含：<br/>（1) CMYK色彩校正 <br/>（2) 出血設定（3mm） <br/>（3) 300dpi高解析檔 <br/>（4) 提供PDF印刷專用檔。',
    },

    // LINE選單設計
    {
      value: 'line-template',
      title: 'LINE選單設計會提供可編輯的模板嗎？',
      content:
        '交付PSD/AI檔（需另+NT$1,000），或直接提供JPG/PNG檔。<br/>建議非設計師客戶選擇「代客上架服務」（+NT$800）。',
    },

    // EDM設計
    {
      value: 'edm-rwd',
      title: 'EDM的RWD設計支援哪些郵件系統？',
      content:
        '相容於Gmail、Outlook、Apple Mail等主流客戶端，並通過Mailchimp/Benchmark測試。<br/>特殊需求（如互動式按鈕）需提前告知。',
    },

    // 懶人包/資訊圖表
    {
      value: 'infographic-format',
      title: '動態網頁版懶人包如何交付？',
      content:
        '提供：<br/>（1) 靜態JPG預覽圖 <br/>（2) HTML+CSS檔（可嵌入網站） <br/>（3) 動態GIF展示（如需互動功能需另報價）。',
    },

    // UI/UX設計
    {
      value: 'ui-deliverables',
      title: 'UI/UX設計的「Figma交付」包含哪些權限？',
      content:
        '提供可編輯的Figma原檔，含元件庫（Components）與設計規範（Style Guide）。<br/>企業客戶可選「團隊協作權限」（+NT$3,000）。',
    },

    // 網站設計系統
    {
      value: 'design-system',
      title: '網站設計系統的「Wireframe 5頁內」是指？',
      content: '包含首頁+4個核心頁面（如產品頁/關於頁/聯絡頁）的線框稿。<br/>超出頁數按NT$2,000/頁計費。',
    },

    // 簡報設計
    {
      value: 'ppt-animation',
      title: '簡報動畫的「+50%」包含哪些類型？',
      content:
        '基礎動畫：文字/圖片淡入<br/>進階動畫（+50%）：路徑移動、互動式觸發、數據圖表動態化<br/>過場特效另計（+NT$200/頁）',
    },
    // 通用問題
    {
      value: 'revision',
      title: '成品不滿意可以修改嗎？',
      content: '每項服務包含2次免費修改（需於交付後7日內提出），額外修改依工時計費（NT$500/小時）。',
    },
    {
      value: 'payment',
      title: '付款方式和合約如何進行？',
      content: '單次專案付50%訂金，尾款於交付前結清；包套服務可分期。<br/>合約電子簽署，明確定義交付項目與時程。',
    },
  ],
}

// 類別列表（顯示用）
const categories = [
  { value: 'web', label: '網站開發' },
  { value: 'marketing', label: '行銷推廣' },
  { value: 'design', label: '設計視覺' },
] as const

// 當前選取的類別
const selectedCategory = ref<Category>('web')

// 根據選取的類別取得對應 FAQ
const currentFaqs = computed(() => allFaqs[selectedCategory.value])
</script>

<template>
  <div class="relative pt-24 md:pt-32 pb-24 overflow-x-clip">
    <!-- Header -->
    <div class="px-10 flex justify-center flex-col items-center">
      <div class="text-[28px] md:text-[36px] font-bold leading-none text-center mb-6">常見問題</div>
      <span class="h-[1px] w-[70px] bg-[#A2A2A2] mb-[20px]" />
      <div class="text-gray-600 text-[16px] md:text-[20px] text-center mb-4 md:mb-10">
        我提供了一些常見問題的解答，幫助您更了解我的服務與流程
      </div>
    </div>

    <!-- 分類切換按鈕 -->
    <div class="flex justify-center gap-4 mb-12">
      <button
        v-for="cat in categories"
        :key="cat.value"
        :class="[
          'px-6 py-2 rounded-lg border transition-all cursor-pointer text-sm',
          selectedCategory === cat.value
            ? 'text-[#8782FF]  font-bold  border-[#8782FF] border'
            : 'bg-white  text-[#5B5B5B] border-[#CCC]',
        ]"
        @click="selectedCategory = cat.value"
      >
        {{ cat.label }}
      </button>
    </div>

    <!-- FAQ Accordion -->
    <div class="relative w-full px-[10%]">
      <Accordion type="single" collapsible :default-value="currentFaqs[0]?.value">
        <AccordionItem v-for="item in currentFaqs" :key="item.value" :value="item.value">
          <AccordionTrigger class="text-[16px] md:text-[20px] cursor-pointer">
            {{ item.title }}
          </AccordionTrigger>
          <AccordionContent>
            <div class="border-t px-4 py-6 text-[14px] text-[#5B5B5B]" v-html="item.content" />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </div>
</template>
