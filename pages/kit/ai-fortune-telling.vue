<script setup lang="ts">
const localePath = useLocalePath()

useHead({
  title: 'AI 算命｜命運的演算法：數位命理工具箱 | Zeona',
  meta: [
    {
      name: 'description',
      content: '9 大流派命理提示詞庫，完全免費。東方八字紫微 × 西方占星靈數，一鍵複製給 AI，讓演算法成為你的專屬人生解碼師。',
    },
  ],
})

// ─── Prompt Cards Data ─────────────────────────────────────

interface PromptCard {
  id: string
  icon: string
  title: string
  desc: string
  hook: string
  prompt: string
  category: string
  badge?: string
  tip?: string
  tipUrl?: string
}

const allCards: PromptCard[] = [
  // ── 西方占星/數字 ──────────────────────────────────────
  {
    id: 'astrology',
    icon: '🌠',
    title: '星座占星解析',
    desc: '三方四正全面解盤，太陽月亮上升一次讀透你的靈魂地圖',
    hook: '98% 的人只知道太陽星座——這個提示詞讓你解鎖完整的「靈魂三角」，看清真實的自己。',
    category: '西方占星/數字',
    badge: '熱門',
    tip: '使用前建議先生成完整星盤，再將截圖或文字一起貼上提示詞，AI 解析會更準確。',
    tipUrl: 'https://astrodoor.cc/horoscope.jsp',
    prompt: `你是一位精通現代心理占星學的顧問，擅長將星盤用商業思維語言解析。

我的出生資訊：
- 請貼上你的完整星盤資訊，或提供生成星盤的截圖
- 生日：[YYYY年MM月DD日]
- 出生時間：[HH:MM（若不知道，可能問你媽媽或去事務所ＸＤ）]
- 出生城市：[城市名稱]

請幫我分析以下三個核心維度，並全程使用心理學 + 現代職場語言，避免神祕學術語：

1. ☀️ 太陽星座（核心自我認同與生命使命）
   - 這個人的核心驅動力是什麼？
   - 他在哪種工作環境下能最完整發揮？

2. 🌙 月亮星座（情緒模式與潛意識需求）
   - 當他壓力大時，會有什麼典型反應？
   - 他的「情感需求語言」是什麼？

3. ⬆️ 上升星座（外在形象與第一印象）
   - 他人對他的第一印象通常是什麼？
   - 他的「個人品牌天賦」體現在哪裡？

最後給出：
✅ 最適合的職業方向（列出 3 個）
⚠️ 需要特別注意的人際盲點（1–2 個）
💡 一句話人生策略：「你的最佳路徑是____。」`,
  },
  {
    id: 'numerology',
    icon: '🔢',
    title: '生命靈數',
    desc: '用生日數字計算你的命定密碼，解鎖今年的財富高峰期',
    hook: '你的生日不是隨機的——靈數系統把它轉換成你的「財富密碼」，今年的高峰月份藏在裡面。',
    category: '西方占星/數字',
    prompt: `你是一位生命靈數解析師，請根據我的生日計算並解析以下數字：

我的生日：[YYYY年MM月DD日]
我的中文全名：[（可選，若不提供則跳過表達數）]

請逐一計算並解析：

1. 🛤️ 生命靈數（Life Path Number）
   計算方式：將生日所有數字相加至個位數（11、22、33 例外，保留主數）
   請解析：核心性格特質、天生使命、財富流向模式

2. 📅 流年數字（Personal Year Number，今年）
   計算方式：生日月+日 的各位數 + 今年年份的各位數，加總至個位數
   請解析：今年的整體能量主題、最適合行動的月份（標出 3 個高峰月）、需要避開的決策類型

3. 💫 天賦潛能數（Expression Number，若有提供名字）
   請解析：職業天賦方向與溝通風格

輸出格式：請用表格整理數字結果，再用條列式 + 粗體關鍵詞輸出解析，方便製作個人品牌簡介。`,
  },
  {
    id: 'inborn-code',
    icon: '🧬',
    title: '天賦優勢心理學',
    desc: '以生日數字為基礎的論碼工具，側重職場性格剖析與財富行為模式',
    hook: '不是命運決定你能賺多少——是你的「先天操作系統」。這個提示詞讓 AI 給你一份職場生存手冊。',
    category: '西方占星/數字',
    prompt: `你是一位商業天賦分析師，專門用生日數字碼解析一個人的「內建操作系統」。

我的生日：[YYYY年MM月DD日]
我目前的職業/副業方向：[（請簡述）]

請根據我的生日數字組合，分析以下四個維度：

1. 🏷️ 天賦黃金組合（Birthday Code）
   - 我的主要驅動力是什麼？（金錢驅動 / 成就驅動 / 關係驅動 / 意義驅動）
   - 我天生的「超能力」與「盲點」各是什麼？

2. 🏢 職場生存策略
   - 我最適合什麼類型的工作環境？
   - 我在哪種管理風格下能爆發最大潛力？

3. 💰 財富賺錢模式
   - 我適合「主動收入型」還是「槓桿資產型」？
   - 我的錢流方向是什麼？（服務財 / 創作財 / 投資財 / 人脈財）

4. 🗣️ 溝通與人際盲點
   - 我在人際互動中最容易踩哪些雷？
   - 給我 1 個立即可用的溝通升級建議

輸出格式：每個維度用 emoji 標題 + 2–3 個條列重點，最後一句話整合成「你的個人品牌核心句」。`,
  },
  {
    id: 'digit-divination',
    icon: '🎴',
    title: '細木數字占卜法',
    desc: '針對當下特定單一問題的靈數占卜，3 分鐘給你行動指引',
    hook: '不用算整張命盤，只問一件事。這個提示詞讓 AI 聚焦你此刻最想問的問題，給出清晰行動建議。',
    category: '西方占星/數字',
    prompt: `你是一位專精細木數字法的占卜師，請幫我針對以下具體問題進行靈數占卜：

我想詢問的問題：[請用一句話描述，例如：「這份合作機會值得接嗎？」]
今天的日期：[YYYY年MM月DD日]
我的生日：[YYYY年MM月DD日]

占卜流程：

步驟一：計算今日靈數
將今天日期所有數字相加至個位數，得到「環境能量數」

步驟二：計算問題能量數
將問題中最關鍵的 3 個詞轉換成對應數值（A=1, B=2...），加總至個位數

步驟三：計算個人當下數
生日靈數 + 今日靈數加總

步驟四：三數綜合解讀，輸出：
✅ 建議行動：現在最適合做的一件具體事
⚠️ 需要避開的風險：這個決策中最大的隱藏陷阱
⏰ 最佳時機窗口：接下來 30 天中，哪幾天的能量最有利？
🎯 一句話總結：給我一個可以立即執行的決策建議`,
  },

  // ── 東方八字/紫微 ──────────────────────────────────────
  {
    id: 'bazi',
    icon: '☯️',
    title: '八字命盤與批命',
    desc: '天干地支 × 五行旺衰 × 十神定位，白話批命讓你看懂命盤結構',
    hook: '最高精度的東方命理——但你需要一個懂現代語言的「解碼師」。這個提示詞就是那把鑰匙。',
    category: '東方八字/紫微',
    badge: '高精度',
    tip: '使用前建議先生成八字命盤，截圖或複製命盤文字後，一起貼上提示詞，解析更精準。',
    tipUrl: 'https://myfate.herokuapp.com/',
    prompt: `你是一位現代化命理師，精通八字批命但擅長用企業管理語言表達，完全避免恐嚇式或消極性的傳統術語。

我的生辰八字資訊：
- 這是圖片或文字的八字命盤資訊：[請貼上你的命盤資訊，或提供生成命盤的截圖]
- 生日：[YYYY年MM月DD日]
- 出生時辰：[子/丑/寅/卯/辰/巳/午/未/申/酉/戌/亥（不知道可填「不詳」）]
- 性別：[男 / 女]

請幫我完成以下分析（全程使用現代商業語言）：

1. 📋 四柱八字排盤
   請排出年柱、月柱、日柱、時柱的天干地支

2. ⚖️ 五行旺衰分析
   - 哪個五行過旺？（解讀為：哪種特質過度強化？）
   - 哪個五行缺失？（解讀為：哪種能力需要後天培養？）

3. 🌟 喜用神與行業方向
   - 喜用神是哪個五行？（這是你的「能量充電器」）
   - 對應的有利顏色、方位與行業類型

4. 🎭 十神性格剖析（現代轉譯）
   官星=職場資源、財星=財富機遇、印星=學習能力、食傷=創造力、比劫=獨立意識
   請說明我命中哪些十神強旺，代表什麼機遇

5. 💡 三點核心人生策略（以今年的視角）
   基於以上分析，給我今年最重要的 3 個行動建議`,
  },
  {
    id: 'annual-fortune',
    icon: '📅',
    title: '流年運勢解析',
    desc: '流年干支對你命盤的影響，財運桃花健康按季精準拆解',
    hook: '每個月的財運高峰與低谷，可以提前佈局。這個提示詞讓你知道今年何時要衝、何時要守。',
    category: '東方八字/紫微',
    tip: '使用前建議先生成八字命盤，截圖或複製命盤文字後，一起貼上提示詞，解析更精準。',
    tipUrl: 'https://myfate.herokuapp.com/',
    prompt: `你是一位精通八字流年的命理分析師，請結合我的命盤與當前年份進行深度運勢解析。

我的命盤資訊：
- 這是圖片或文字的八字命盤資訊：[請貼上命盤資訊，或提供生成命盤的截圖]
- 生日：[YYYY年MM月DD日]
- 出生時辰：[時辰名稱，不知道可寫「不詳」]
- 性別：[男 / 女]
- 分析年份：[例如：2026年]

請按季度輸出（Q1–Q4），每季包含：

📊 事業運（是衝刺期還是鞏固期？有無升職/轉職/創業窗口？）
💰 財運（財富高峰月份？需避開的重大財務決策？）
🌸 感情桃花（動向與機遇點？已婚者：關係質量的升降？）
🏥 健康提醒（今年需特別注意的身體部位或作息模式）

最後整合「年度行動日曆」：
- 全年最強能量月（2 個）：最適合做重大決策的月份
- 全年低潮期（1–2 個月）：建議靜守觀望的時段
- 一句話年度主題詞：「____年是你的____之年」`,
  },
  {
    id: 'ziwei',
    icon: '🌌',
    title: '紫微斗數命宮解密',
    desc: '命宮主星的現代職涯語言轉譯，從七殺到紫微，找到你的天命角色',
    hook: '七殺星不是壞事——它是「高執行力開拓型 PM」的標配。讓 AI 把你的命宮轉譯成現代職涯語言。',
    category: '東方八字/紫微',
    tip: '使用前建議先生成紫微斗數命盤，截圖或複製命盤文字後，和提示詞一起附上，解析更精準。',
    tipUrl: 'https://fate.windada.com/cgi-bin/fate',
    prompt: `你是一位現代紫微斗數顧問，專門將傳統命盤轉譯為現代職涯、財富與人際語言，全程避免吉凶斷語。

我的出生資訊：
- 這是圖片或文字的紫微斗數命盤資訊：[請貼上命盤資訊，或提供生成命盤的截圖]
- 生日：[YYYY年MM月DD日]
- 出生時辰：[時辰名稱]
- 性別：[男 / 女]

請完成以下分析：

1. 🌟 命宮主星推算
   根據出生年份與時辰，推算命宮落入哪個宮位、入駐哪顆主星

2. 💼 現代職涯語言轉譯（對照表）
   紫微=策略型領導者、天機=系統設計師、太陽=公眾型品牌人
   武曲=財務型執行者、天同=服務型療癒者、廉貞=競爭型開拓者
   天府=資產守護者、太陰=感知型藝術家、貪狼=魅力型社交家
   巨門=口才型分析師、天梁=智慧型引導者、七殺=執行型戰將
   破軍=革新型顛覆者
   （根據實際推算結果填入對應角色）

3. 🔑 三宮聯動人生策略
   命宮（性格核心）× 財帛宮（財富模式）× 官祿宮（事業走向）
   給我一個整合三宮特質的人生行動策略

4. 📅 今年的星曜運勢
   哪顆吉星入宮帶來機遇？哪顆煞星提示需要謹慎的領域？
   用「今年應抓住的一個機遇 + 應避開的一個陷阱」作結`,
  },

  // ── 事業天賦 ──────────────────────────────────────────
  {
    id: 'career-wealth',
    icon: '🎯',
    title: '事業天賦與財富卡點',
    desc: '結合命理特質找到你的錢流方向，精準定位財富卡點與突破路徑',
    hook: '80% 的人在做錯的工作——不是能力問題，是「財富模式不匹配」。這個提示詞幫你找到錢流方向。',
    category: '事業天賦',
    badge: '🔥 最熱門',
    prompt: `你是一位融合命理學與商業心理學的天賦顧問，專門幫人找出「財富卡點」與「事業天花板」。

我的資訊：
- 生日：[YYYY年MM月DD日]
- 性別：[男 / 女]
- 目前職業或副業方向：[請描述]
- 感覺卡住的具體問題：[例如：接不到理想案子 / 升職困難 / 副業收入停滯]
- 月收入範圍（可選）：[幫助 AI 給出更精準的突破策略]

請從命理視角 + 商業心理學分析以下四個維度：

1. 💰 命定財富模式
   基於你的命盤特質，你的錢傾向從哪裡來？
   人脈財 / 技術財 / 資產財 / 平台財

2. 🚧 財富卡點剖析
   哪個信念或行為模式正在阻礙你的收入突破？
   用「行為模式 → 財務影響 → 解法」的格式輸出

3. 🚀 立即可行的 3 個財富加速動作
   結合你目前的處境，給我 3 個這個月可以執行的具體步驟

4. 🏗️ 副業 vs 全職創業決策
   根據你的命理特質，你更適合：
   A. 穩定主業 + 高收益副業（槓桿型）
   B. 全職創業（爆發型）
   C. 接案自由工作者（靈活型）
   請給出你的推薦方案 + 理由`,
  },

  // ── 情感合婚 ──────────────────────────────────────────
  {
    id: 'relationship',
    icon: '💫',
    title: '八字合婚與情感關係',
    desc: '不論吉凶，只聚焦溝通盲點與互補指數——讓 AI 成為你的感情分析師',
    hook: '不是算合不合，而是算「怎麼相處更好」。這個提示詞讓 AI 幫你找到這段關係的互補密碼。',
    category: '情感合婚',
    badge: '💕',
    tip: '使用前建議先分別生成兩人的八字命盤，截圖或複製命盤文字後，一起貼上提示詞，解析更精準。',
    tipUrl: 'https://myfate.herokuapp.com/',
    prompt: `你是一位現代命理感情顧問，擅長用八字分析「關係兼容性」，全程避免傳統吉凶斷語，聚焦於「如何讓關係更美好」。

我的資訊：
- 這是圖片或文字的八字命盤資訊：[請貼上我的八字命盤資訊，或提供生成命盤的截圖]
- 我的生日：[YYYY年MM月DD日]
- 我的性別：[男 / 女]

對方的資訊：
- 這是圖片或文字的八字命盤資訊：[請貼上對方的八字命盤資訊，或提供生成命盤的截圖]
- 對方生日：[YYYY年MM月DD日]
- 對方性別：[男 / 女]

目前關係狀態：[例如：追求中 / 交往 X 個月 / 已婚 X 年]
最想了解的問題：[例如：為什麼我們常為同一件事吵架？]

請分析以下五個維度：

1. ⚡ 五行組合分析
   兩人的五行是「相生」（互補、滋養）還是「相剋」（摩擦、挑戰）？

2. 🗣️ 溝通風格對比
   根據各自的日主，兩人的決策模式與表達方式有什麼差異？
   哪種溝通框架最適合你們？

3. 🤝 關係優勢
   這段關係最大的互補點是什麼？你們各自能帶給對方什麼成長？

4. ⚠️ 潛在衝突模式
   最容易爆發摩擦的場景是什麼？
   給出 1 個具體的「衝突預防句型」

5. 📊 今年的關係走向
   今年流年對這段關係的影響——穩固期、磨合期還是重要決定期？
   給出今年最重要的一個「感情行動建議」`,
  },
]

const categories = ['全部', '東方八字/紫微', '西方占星/數字', '事業天賦', '情感合婚'] as const
type Category = (typeof categories)[number]

const activeCategory = ref<Category>('全部')

const filteredCards = computed(() =>
  activeCategory.value === '全部' ? allCards : allCards.filter((c) => c.category === activeCategory.value),
)

// ─── Copy ─────────────────────────────────────────────────
const copiedId = ref('')
async function copy(text: string, id: string) {
  try {
    await navigator.clipboard.writeText(text)
    copiedId.value = id
    setTimeout(() => {
      if (copiedId.value === id) copiedId.value = ''
    }, 1500)
  } catch {
    // clipboard blocked
  }
}

// ─── Mobile nav ───────────────────────────────────────────
const mobileNavOpen = ref(false)
</script>

<template>
  <div class="min-h-screen bg-[#f8fafc] font-sans">

    <!-- ══ HERO ═══════════════════════════════════════════ -->
    <header class="bg-gradient-animated relative px-6 pt-24 pb-12 md:pb-16 md:pt-32">
      <div class="max-w-6xl mx-auto">
        <NuxtLink
          :to="localePath('/toolbox')"
          class="inline-flex items-center gap-1 text-xs text-white/60 hover:text-white/90 transition-colors mb-4"
        >
          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          ZEONA · 數位工具箱
        </NuxtLink>
        <h1 class="text-2xl md:text-4xl font-black leading-snug text-white drop-shadow-2xl">
          探索命運的演算法：AI 數位命理工具箱
        </h1>
        <p class="mt-4 text-sm md:text-base text-white/90 leading-relaxed max-w-2xl drop-shadow">
          融合東方千年智慧與西方靈數統計學的命理提示詞庫。輸入生日，讓 AI 成為你的專屬人生解碼師。
        </p>
        <ul class="mt-6 flex flex-wrap gap-2">
          <li
            v-for="feat in ['算命提示詞', '一鍵複製即用', '東方八字紫微', '西方占星靈數', '完全免費']"
            :key="feat"
            class="text-xs bg-white/15 backdrop-blur-md border border-white/25 text-white px-3 py-1.5 rounded-full"
          >
            ✓ {{ feat }}
          </li>
        </ul>
      </div>
    </header>

    <!-- ══ MOBILE NAV ═════════════════════════════════════ -->
    <div class="lg:hidden">
      <button
        v-show="!mobileNavOpen"
        type="button"
        class="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-[#F1F0FF] shadow-xl rounded-l-2xl px-3 py-4 flex flex-col items-center gap-2 transition-all duration-300 hover:pr-4 active:scale-95 border border-r-0 border-[#5853E5]/50"
        aria-label="開啟分類篩選"
        @click="mobileNavOpen = true"
      >
        <span class="text-xs">🔮</span>
        <span class="w-auto text-sm tracking-tight text-[#5853E5] leading-[1.1] text-center">篩<br />選</span>
      </button>

      <div
        class="fixed inset-0 z-40 bg-black/30 transition-opacity duration-300"
        :class="mobileNavOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'"
        @click="mobileNavOpen = false"
      />

      <nav
        class="fixed left-0 top-0 z-50 h-full w-64 max-w-[80%] bg-white shadow-2xl p-5 overflow-y-auto transition-transform duration-300"
        :class="mobileNavOpen ? 'translate-x-0' : '-translate-x-full'"
      >
        <div class="flex items-center justify-between mb-4">
          <p class="text-sm font-bold text-gray-900">流派篩選</p>
          <button type="button" class="text-gray-400 text-2xl leading-none" @click="mobileNavOpen = false">×</button>
        </div>
        <button
          v-for="cat in categories"
          :key="cat"
          class="w-full text-left text-sm rounded-lg px-3 py-2 mb-1 transition"
          :class="activeCategory === cat ? 'text-[#8782FF] font-bold bg-[#8782FF]/5' : 'text-gray-600 hover:bg-gray-50'"
          @click="activeCategory = cat; mobileNavOpen = false"
        >
          {{ cat }}
          <span v-if="cat === '全部'" class="ml-1 text-xs text-gray-400">{{ allCards.length }}</span>
        </button>
      </nav>
    </div>

    <!-- ══ MAIN LAYOUT ════════════════════════════════════ -->
    <div class="max-w-6xl mx-auto px-6 py-10 lg:flex lg:gap-10">

      <!-- Left sidebar (desktop) -->
      <aside class="hidden lg:block lg:w-52 lg:shrink-0">
        <nav class="sticky top-24 space-y-1">
          <p class="text-xs font-bold text-gray-400 px-3 mb-2">流派篩選</p>
          <button
            v-for="cat in categories"
            :key="cat"
            class="w-full text-left text-sm rounded-lg px-3 py-2 border-l-2 transition"
            :class="
              activeCategory === cat
                ? 'border-[#8782FF] text-[#8782FF] font-bold bg-[#8782FF]/5'
                : 'border-transparent text-gray-500 hover:text-gray-900 hover:bg-gray-50'
            "
            @click="activeCategory = cat"
          >
            {{ cat }}
            <span v-if="cat === '全部'" class="ml-1 text-xs text-gray-400">{{ allCards.length }}</span>
          </button>

        </nav>
      </aside>

      <!-- Main content -->
      <main class="flex-1 min-w-0 space-y-12">

        <!-- ── Prompt Cards ─────────────────────────────── -->
        <section>
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-lg font-black text-gray-900">
              {{ activeCategory === '全部' ? '全部提示詞' : activeCategory }}
              <span class="ml-2 text-sm font-normal text-gray-400">{{ filteredCards.length }} 個</span>
            </h2>
          </div>

          <div class="grid gap-5 md:grid-cols-2">
            <article
              v-for="card in filteredCards"
              :key="card.id"
              class="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex flex-col"
            >
              <!-- Header -->
              <div class="flex items-start justify-between mb-3">
                <div class="flex items-center gap-2">
                  <span class="text-xl">{{ card.icon }}</span>
                  <div>
                    <h3 class="font-bold text-gray-900 text-sm leading-snug">{{ card.title }}</h3>
                    <span class="text-xs text-[#8782FF]/70">{{ card.category }}</span>
                  </div>
                </div>
                <span
                  v-if="card.badge"
                  class="flex-shrink-0 text-xs font-bold px-2 py-0.5 rounded-full bg-[#8782FF]/10 text-[#8782FF]"
                >{{ card.badge }}</span>
              </div>

              <!-- Description -->
              <p class="text-sm text-gray-500 leading-relaxed mb-3">{{ card.desc }}</p>

              <!-- Hook -->
              <div class="bg-amber-50 border-l-2 border-amber-400 px-3 py-2 rounded-r-lg mb-4">
                <p class="text-xs text-amber-700 leading-relaxed">
                  <span class="font-bold">✦ 10 秒亮點：</span>{{ card.hook }}
                </p>
              </div>

              <!-- Tip (optional external tool hint) -->
              <div v-if="card.tip" class="flex items-start gap-2 bg-sky-50 border border-sky-200 rounded-lg px-3 py-2 mb-4">
                <span class="text-sky-500 text-sm mt-0.5 shrink-0">🔗</span>
                <p class="text-xs text-sky-700 leading-relaxed">
                  {{ card.tip }}
                  <a
                    v-if="card.tipUrl"
                    :href="card.tipUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="underline font-semibold hover:text-sky-900 ml-1"
                  >前往生成星盤 →</a>
                </p>
              </div>

              <!-- Prompt code block -->
              <div class="relative bg-[#0f172a] text-[#e2e8f0] rounded-lg p-4 pr-16 text-xs leading-relaxed flex-1">
                <pre class="whitespace-pre-wrap break-words font-mono">{{ card.prompt }}</pre>
                <button
                  type="button"
                  class="absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 transition whitespace-nowrap"
                  @click="copy(card.prompt, card.id)"
                >
                  {{ copiedId === card.id ? '已複製 ✓' : '複製' }}
                </button>
              </div>
            </article>
          </div>
        </section>

        <section>
          <div class="mt-8 bg-white rounded-xl border border-gray-100 shadow-sm p-6 pt-12 text-center">
            <h3 class="text-base font-black text-gray-900 mb-2">如果你也喜歡的話，幫 Zeona 分享出去吧～</h3>
            <p class="text-sm text-gray-500 mb-5">以上為心靈抒發與自我調解，若人生中有任何困難，請找身邊的親朋好友或是專業人士協助。</p>
            <NuxtLink
              :to="localePath('/contact')"
              class="inline-block px-6 py-2.5 bg-[#8782FF] text-white text-sm font-bold rounded-full hover:bg-[#6f6bff] transition"
            >
              歡迎敲碗其他內容
            </NuxtLink>
          </div>
        </section>

        <p class="text-center text-xs text-gray-400 pt-2">※ 提示詞庫免費使用，請勿整包轉售，雖然我也抓不到嗚嗚ＱＡＯ</p>
      </main>
    </div>
  </div>
</template>

<style scoped>
/* ── bg-gradient-animated（與首頁、kit 頁相同） ─────────── */
@property --red-x { syntax: '<percentage>'; inherits: true; initial-value: 50%; }
@property --red-y { syntax: '<percentage>'; inherits: true; initial-value: 0%; }
@property --purple-x { syntax: '<percentage>'; inherits: true; initial-value: 0%; }
@property --purple-y { syntax: '<percentage>'; inherits: true; initial-value: 0%; }
@property --yellow-x { syntax: '<percentage>'; inherits: true; initial-value: 100%; }
@property --yellow-y { syntax: '<percentage>'; inherits: true; initial-value: 100%; }

.bg-gradient-animated {
  background-image:
    radial-gradient(circle at 0 100%, #90e0ff, #90e0ff00 20%),
    radial-gradient(circle at var(--purple-x) var(--purple-y), #8782ff, #a960ee00 100%),
    radial-gradient(circle at var(--red-x) var(--red-y), #ff333d, #ff333d00 90%),
    radial-gradient(circle at var(--yellow-x) var(--yellow-y), #ffe3a8, #fffdf9 50%);
  background-color: #ffffff;
  animation: moveGradients 10s linear infinite;
}

@media (max-width: 1023px) {
  .bg-gradient-animated { animation-duration: 20s; }
}

@media (prefers-reduced-motion: reduce) {
  .bg-gradient-animated { animation: none; }
}

@keyframes moveGradients {
  0%   { --purple-x: 0%;  --purple-y: 100%; --red-x: 60%;  --red-y: 0%;  --yellow-x: 100%; --yellow-y: 100%; }
  40%  { --purple-x: 20%; --purple-y: 40%;  --red-x: 70%;  --red-y: 30%; --yellow-x: 70%;  --yellow-y: 40%;  }
  60%  { --purple-x: 0%;  --purple-y: 80%;  --red-x: 100%; --red-y: 60%; --yellow-x: 0%;   --yellow-y: 20%;  }
  100% { --purple-x: 0%;  --purple-y: 100%; --red-x: 60%;  --red-y: 0%;  --yellow-x: 100%; --yellow-y: 100%; }
}

</style>
