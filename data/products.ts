export interface Product {
  id: string
  name: string
  category: ProductCategory
  price: number
  originalPrice?: number
  description: string
  fullDescription: string
  coverImage: string
  coverImageEn?: string
  features: string[]
  purchaseUrl: string
  fileType: string
  tags: string[]
  isNew?: boolean
  isBestSeller?: boolean
  status: 'available' | 'coming-soon'
  // 若此商品的內容透過 /kit 序號解鎖交付，填對應的 kit slug（= server/utils/kitProducts.ts 的 kit）。
  // 有填才會在詳情頁顯示「已購買，前往商品」並能用記住的序號直接跳轉。
  kitSlug?: string
}

export const productCategories = ['全部', 'Prompt 提示詞', 'Notion 模板', 'Canva 模板', '素材工具包'] as const
export type ProductCategory = (typeof productCategories)[number]

export const products: Product[] = [
  // ─── 素材工具包 ───────────────────────────────────────────────
  {
    id: 'super-voice-assistant',
    name: '拜託！使用提示詞的人，先下載語音助理',
    category: '素材工具包',
    price: 0,
    description:
      '不要再慢慢打字了！直接用說的告訴 AI 你是誰、你在做什麼，再搭配我提供給你的提示詞，立刻出效果。免費下載，現在就去用。',
    fullDescription: `你有沒有遇過這個問題：照著提示詞貼給 AI，產出的東西感覺很通用、跟你沒關係？

「 因為 AI 根本不知道你是誰！！！ 」

雖然現在用 Claude、Codex 等都有 .md 可以讓他記得你誰，但你還是需要打字。
而且也不是大家都會用去用 Claude、Codex 這類的工具，因為學習時間和門檻還是相對高。

等於每次下提示詞之前，還是要先告訴 AI 你的背景、你在做什麼——但打字說明一遍又一遍，非常花時間。

我原本也不知道，但自從我接了一個業配，越用越上手，而且去國外你聽不懂，也可以手機直接讓他聽，讓他翻譯，真的好用的不像話，所以才叫你們趕快去下載。

這個工具叫做 Typeless，完全免費，手機電腦都可以用。

────────────────
🎙️ 四步驟口說自我介紹法

打開 Typeless，直接對著麥克風說：
1. 你是誰（身份、背景、職業）
2. 你在做什麼（目前的項目或工作內容）
3. 你想達到的目的（這次要解決什麼問題）
4. 你希望成果是什麼樣子（具體的輸出格式或風格）

說完之後，Typeless 會把你說的話清楚轉成文字並整理好。
把這段內文貼到任何提示詞的最前面，AI 立刻就知道在跟誰說話——產出的內容更精準、更有你的味道。

────────────────
🌏 我為什麼這麼喜歡 Typeless

說個真實的場景：我常常出國，遇到聽不懂的廣播或通話，雖然有 Google 翻譯，但對方講太快、收音不好時完全沒辦法。

Typeless 解決了這件事。直接按下翻譯，它會原封不動把對方說的話即時呈現在螢幕上。
雖然沒辦法馬上快速回話，但你至少先看懂對方在說什麼——這在陌生環境裡非常重要。

我手機和電腦版都有下載，現在已經是出門必帶工具之一。

────────────────
📥 免費索取方式

點下方按鈕，透過我的連結免費下載 Typeless。
下載完成後，試著對它說一遍你的四步驟自我介紹，再把整理好的內容貼進我的任何一個提示詞包——你會發現產出品質差很多。`,
    coverImage: 'https://i.ibb.co/d4K2tdS3/Chat-GPT-Image-2026-6-10-02-19-51.png',
    coverImageEn: 'https://i.ibb.co/KxgbwtGs/Chat-GPT-Image-2026-6-10-02-33-35.png',
    features: [
      '四步驟口說自我介紹法，讓 AI 真正認識你',
      '語音轉文字速度比打字快 10 倍',
      '搭配任何提示詞包使用，產出更精準',
      '即時翻譯功能，出國聽不懂也不怕',
      '免費下載，手機與電腦版皆可用',
    ],
    purchaseUrl: 'https://www.typeless.com/?via=ziyun',
    fileType: '免費工具（外部連結）',
    tags: ['語音輸入', 'AI工具', 'Typeless', '提示詞', '免費'],
    isNew: true,
    status: 'available',
  },
  {
    id: 'ai-personal-brand-full-pack',
    name: '手把手帶你 AI 社群經營包｜IG + 部落格 + 電子報全套攻略',
    category: 'Prompt 提示詞',
    price: 1290,
    originalPrice: 3290,
    description:
      '不用湊團隊、不用從零摸索，一套 AI 提示詞與模板，帶你把 IG、部落格、電子報一次建立起來——從定位到 30 天發文，填空、複製、發布就好。',
    fullDescription: `還在羨慕別人的個人品牌經營得有聲有色，自己卻連「第一步該做什麼」都不知道？

問題從來不是你不夠努力，而是少了一套能直接照做的系統。

這一包，把「從 0 到有個人品牌」需要的工具、提示詞與步驟一次幫你準備好。你只要填空、複製、發布。

────────────────
🎯 這包適合誰
• 想經營個人品牌、卻不知道從哪開始的人
• 內容產出又慢又沒方向、常常開天窗的創作者
• 想用 AI 加速，卻不知道怎麼下提示詞的人

────────────────
📦 你會拿到什麼（5 大部分）

📱 Part 1｜IG 帳號建立
• AI 生成 Bio 提示詞（輸入定位，一次給你 5 個版本）
• 個人品牌定位工作表（4 個問題找到差異化）
• Highlights 分類與封面設計建議

💡 Part 2｜IG 內容點子庫
• 16 個發文點子，依內容支柱（價值／趨勢／故事）分類
• 每個點子都附格式建議＋可直接套用的 ChatGPT 提示詞
• 不用再對著空白螢幕發呆

✍️ Part 3｜部落格提示詞 ×20
• SEO 標題生成器、文章大綱、結論與 CTA
• 「讓 AI 寫出你的語氣」調教技巧

📧 Part 4｜電子報提示詞 ×5
• 週報／乾貨清單／個人故事／促銷通知／特別感謝
• 每種格式一個提示詞，連主旨列都幫你生成

🚀 Part 5｜30 天執行行事曆
• 每天只做一件事的行動主線
• 從建立帳號到第一個 1000 追蹤的完整路徑圖

────────────────
💡 為什麼有效
裡面的提示詞都是實際經營驗證、能直接產出可發布內容的版本，不是那種「複製貼上卻生不出東西」的空泛範本。搭配清楚的內容支柱與穩定的發文節奏，前 30 天有機會累積 250–500 粉（依領域與執行而定）。

────────────────
📂 取得方式：購買後以專屬序號解鎖線上版，永久存取、提示詞可一鍵複製`,
    coverImage: 'https://i.ibb.co/VG9NgNz/6c5d68c4-6d01-4717-8963-ed4ed9492e11.png',
    features: [
      'IG 帳號建立：Bio 提示詞＋品牌定位工作表',
      'IG 內容點子庫：16 個發文點子＋提示詞',
      '部落格提示詞 ×20（SEO 標題、大綱、CTA）',
      '電子報提示詞 ×5（含主旨列生成）',
      '30 天執行行事曆（0→1000 粉路徑）',
    ],
    purchaseUrl: 'https://zeona.gumroad.com/l/pmqqiu',
    fileType: '線上閱讀版（序號解鎖）',
    tags: ['個人品牌', 'IG', '電子報', '部落格', 'ChatGPT'],
    isBestSeller: true,
    status: 'available',
    kitSlug: 'ai-personal-brand',
  },
  
  // ─── Notion 模板 ──────────────────────────────────────────────
  {
    id: 'geo-ai-recommendation-prompt-pack',
    name: 'GEO 實作提示詞包｜讓 ChatGPT、Perplexity 主動推薦你',
    category: 'Prompt 提示詞',
    price: 0,
    description:
      '7 個步驟、可直接複製的提示詞，加一張內容追蹤表。把你的內容變成「AI 好引用」的樣子，讓 AI 在回答時主動把你講出來。',
    fullDescription: `客人不再 Google、直接問 AI「推薦哪一間」時，你的品牌出現在答案裡了嗎？

這份免費包，是把 GEO（生成引擎最佳化）拆成「動手做」的提示詞，照貼就能用。

內容物：
🎯 7 段現成提示詞（把 [方括號] 換成你的內容即可）
• 盤點客戶真的會問 AI 的 12 個問題
• 把答案寫成「AI 好引用」的格式
• 一次產出一組 FAQ（GEO 最高 CP 值招式）
• 用數據與來源強化可信度
• 產生結構化資料（JSON-LD Schema）
• 統一各平台的品牌描述
• 每月「AI 有沒有推薦你」自我檢測

📊 GEO 內容追蹤表（Notion 資料庫，含範例列）
• 一眼看出哪些主題已寫成 FAQ、有沒有被 AI 引用

適合：個人品牌、小商家、接案者、做內容行銷的人。
完整觀念教學看部落格〈GEO 完整教學（附提示詞）〉，這份包負責讓你「直接動手」。`,
    coverImage: 'https://i.ibb.co/bMZJKK7Q/Chat-GPT-Image-2026-6-8-01-43-51.png',
    features: [
      '7 段可直接複製的繁中提示詞，填空即用',
      '涵蓋 FAQ、結構化資料、品牌一致性等 GEO 關鍵動作',
      '附 Notion「GEO 內容追蹤表」資料庫（含範例）',
      '每月自我檢測提示詞，追蹤 AI 推薦能見度',
      '免費下載，搭配〈GEO 完整教學〉部落格文一起看',
    ],
    purchaseUrl: 'https://app.notion.com/p/376cf51200d281d1a426d4d64e06e6a2',
    fileType: 'Notion 模板',
    tags: ['GEO', 'AI搜尋優化', '提示詞', 'ChatGPT', '免費'],
    isNew: true,
    status: 'available',
  },
  {
    id: 'adhd-focus-digital-journal',
    name: 'P人神器｜原來自律這麼簡單',
    category: 'Notion 模板',
    price: 0,
    description: '選項越少，越容易開始。這款神器主打「今天能做到的事有哪些」，防迷路設計，讓你打開就能動。',
    fullDescription: `一整天太多事情了，光規劃就讓你花好多時間整理，而不是真的做事。

這款為容易分心、難以開始的人而生。

設計哲學：
• 每天只看一個頁面
• 只有一個主要任務區
• 所有非必要功能都藏起來

核心功能：
🎯 今日唯一目標（Today's One Thing）
• 強迫你在所有事情中選出最重要的一件
• 完成即標記，產生成就感

📍 快速捕捉區
• 腦子冒出什麼就丟進來，不用管分類
• 每晚 5 分鐘整理成任務

⏱️ 番茄鐘整合
• 內建 25 分鐘計時器連結
• 每個番茄鐘結束自動記錄

🌙 每日回顧（3 個問題，2 分鐘完成）
• 今天最棒的一件事？
• 明天的唯一目標？
• 一句話紀念今天？`,
    coverImage: 'https://i.ibb.co/9kSP6mQ8/Chat-GPT-Image-2026-6-8-01-20-13.png',
    features: [
      '防分心極簡介面，每天只看一個頁面',
      '「今日唯一目標」強迫優先排序',
      '快速捕捉區：腦子冒出來就丟進去',
      '番茄鐘整合 + 自動記錄完成數',
    ],
    purchaseUrl: 'https://app.notion.com/p/P-376cf51200d281ffb2abfda49be3ee56?source=copy_link',
    fileType: 'Notion 模板',
    tags: ['Notion', 'ADHD', '專注', '生產力', '數位手帳'],
    status: 'available',
  },
  {
    id: 'freelancer-client-tracker-notion',
    name: '接案者 Notion CRM 客戶管理系統',
    category: 'Notion 模板',
    price: 499,
    originalPrice: 699,
    description: '報價→簽約→執行→收款→追蹤，整套接案流程一個 Notion 搞定。這是繁體中文版。',
    fullDescription: `接案者最怕兩件事：忘記追款，和搞不清楚現在做哪個案子。

這個 CRM 系統讓你的接案業務像企業一樣運作：

👥 客戶資料庫
• 每位客戶的聯絡資訊、合作紀錄、付款習慣
• 標記「好客戶 ⭐」和「黑名單 🚫」
• 自動計算與該客戶的總交易金額

📋 案件追蹤看板
• Kanban 視圖：詢價 → 提案 → 進行中 → 收款 → 完成
• 每個案件的 Deadline 倒數警示
• 附件、參考資料、修改紀錄全部在這

💰 財務儀表板
• 本月預計收入 vs 實際已收
• 應收帳款（誰還沒付錢！）
• 月收入趨勢折線圖
• 依客戶、依類型分析收入來源

📄 報價單生成器
• 填入服務項目自動算總額
• 一鍵匯出 PDF 給客戶（附你的品牌 Logo）

📑 合約存檔區
• 所有合約集中管理
• 重要條款備忘提醒`,
    coverImage: 'https://i.ibb.co/3mdMfxn0/Chat-GPT-Image-2026-6-8-01-02-03.png',
    features: [
      '客戶資料庫：聯絡資訊、黑名單標記、交易總額',
      'Kanban 案件追蹤：從詢價到收款全流程',
      '財務儀表板：應收帳款、月收入趨勢',
      '報價單生成器：自動計算、一鍵 PDF 匯出',
      '繁體中文介面，附 30 分鐘上手教學',
    ],
    purchaseUrl: 'https://zeona.gumroad.com/l/jcfhy',
    fileType: 'Notion 模板',
    tags: ['Notion', '接案', 'CRM', '財務管理', '自由工作者'],
    isBestSeller: true,
    status: 'available',
    kitSlug: 'crm',
  },

  // ─── Canva 模板 ───────────────────────────────────────────────
  {
    id: 'dark-mode-personal-brand-canva',
    name: 'Canva 模板包｜小編神器 IG 貼文＆限動',
    category: 'Canva 模板',
    price: 699,
    description:
      '換上這套視覺包，你的 IG 立刻質感升級，包含貼文、限動、個人簡介卡等所有你在 IG 上會用到的版型，適合 Canva 免費版使用。',
    fullDescription: `質感不是設計出來的，是顏色和字型決定的。
這套 Canva 模板，有你在 IG 上會用到的所有版型：

📱 IG 貼文系列
• 1:1 方形貼文（知識分享、報價公告、成果展示）
• 4:5 直式貼文（長文知識、個人觀點）
• 輪播圖封面 + 內頁（教學系列用）

🎬 限動/Story 系列
• 9:16 倒數限動
• Q&A 問答版
• 好物推薦版

🖼️ 個人簡介卡
• Threads/Twitter 分享用
• 媒體合作提案用
• 演講介紹卡`,
    coverImage: 'https://i.ibb.co/21PmtDwS/Chat-GPT-Image-2026-6-8-03-26-41.png',
    features: [
      'Canva 版型（貼文/限動/個人簡介卡）',
      '小編神器發文不求人，不該讓發文變成負擔',
      '品牌色彩系統 + 字型使用指南',
      '適合 Canva 免費版使用',
      '購買後可無限修改，商業授權',
    ],
    purchaseUrl: 'https://gumroad.com',
    fileType: 'Canva 模板',
    tags: ['Canva', '個人品牌', 'IG', '視覺設計', 'Dark Mode'],
    isNew: true,
    status: 'coming-soon',
  },

  // ─── Prompt 提示詞 ────────────────────────────────────────────
  {
    id: 'workplace-chatgpt-50-scenarios',
    name: '上班族 ChatGPT 職場提示包｜50 個即貼即用場景',
    category: 'Prompt 提示詞',
    price: 0,
    description: '週報、會議摘要、Email、簡報、績效評估…50 種真實職場場景，直接貼給 ChatGPT，不用再想怎麼下指令。',
    fullDescription: `你有沒有每次打開 ChatGPT，卻不知道怎麼跟它說話？

這包提示詞就是為台灣上班族設計的「職場 AI 作弊卡」。

50 個場景全部來自真實工作情境，每個都附：
✅ 完整提示詞（繁體中文，可直接複製貼上）
✅ 調整技巧（教你微調成自己的風格）
✅ 加碼教學：如何讓 AI 輸出更像人說話

涵蓋部門：
• 行銷/社群：文案、活動企劃、競品分析
• PM/企劃：PRD 撰寫、使用者故事、需求規格
• 業務/客服：客戶提案、陌生開發信、投訴處理話術
• HR：招募 JD、員工公告、離職訪談問題
• 所有人都用得到：週報生成、Email 潤稿、會議摘要、績效自評

買了這包，今晚就能開始用。`,
    coverImage: 'https://i.ibb.co/MxF5qMRt/Chat-GPT-Image-2026-6-8-03-12-02.png',
    features: [
      '50 個繁體中文職場提示詞，copy-paste 即用',
      '多數場景附「調整技巧」教你微調方向',
      '涵蓋行銷、PM、業務、HR 等部門',
      '附「如何讓 AI 輸出更像人說話」教學',
      '線上閱讀版，打開即用、免費開放',
    ],
    purchaseUrl: '/kit/workplace-chatgpt-50-scenarios',
    fileType: '線上閱讀版',
    tags: ['上班族', 'ChatGPT', '職場', 'Email', '週報'],
    isBestSeller: false,
    status: 'available',
  },
  {
    id: 'hook-formula-200',
    name: '爆流量鉤子文案庫｜200 個引爆留言的開頭公式',
    category: '素材工具包',
    price: 0,
    description: '200 個實測能引爆留言、爭議與轉發的第一句話。複製貼上就自帶流量，不需要粉絲基礎也能破百讚。',
    fullDescription: `演算法只看一件事：你的第一句話夠不夠讓人想回覆。

這份文案庫收錄 200 個經過實測的開場公式，分成 10 種策略類型：

🔥 爭議觸發型：讓人忍不住要反駁或力挺
💡 知識衝擊型：讓人感覺學到東西，想分享
😂 共鳴吐槽型：讓人覺得「就是這樣」然後留言
🎯 預言挑戰型：讓人想看接下來發生什麼
😮 反常識型：讓人質疑自己既有認知
📊 數字震撼型：具體數字讓人停下來看
💬 問句引互動型：讓人忍不住要回答
🔗 故事入場型：一句話讓人想看下去
⚡ 急迫感型：讓人覺得現在不學就來不及
👑 身份認同型：「這種人才看得懂」式的歸屬感

每個公式附：使用範例 + 適合的帳號類型。`,
    coverImage: 'https://i.ibb.co/dFRDNj5/Chat-GPT-Image-2026-6-8-03-06-40.png',
    features: [
      '200 個實測有效的開場公式',
      '10 種流量策略分類，按需求選用',
      '每個公式附實際範例',
      '適合各種帳號類型（個人/品牌/素人）',
      '無需粉絲基礎也能引爆互動',
    ],
    purchaseUrl: '/kit/hook-formula-200',
    fileType: '線上閱讀版',
    tags: ['Threads', '社群', '文案', '流量', '鉤子'],
    status: 'available',
  },
]
