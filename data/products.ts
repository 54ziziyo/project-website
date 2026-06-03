export interface Product {
  id: string
  name: string
  category: ProductCategory
  price: number
  originalPrice?: number
  description: string
  fullDescription: string
  coverImage: string
  features: string[]
  purchaseUrl: string
  fileType: string
  tags: string[]
  isNew?: boolean
  isBestSeller?: boolean
  status: 'available' | 'coming-soon'
}

export const productCategories = [
  '全部',
  'Prompt 提示詞',
  'Notion 模板',
  'Canva 模板',
  '素材工具包',
] as const
export type ProductCategory = (typeof productCategories)[number]

export const products: Product[] = [
  // ─── Prompt 提示詞 ────────────────────────────────────────────
  {
    id: 'workplace-chatgpt-50-scenarios',
    name: '上班族 ChatGPT 職場提示包｜50 個即貼即用場景',
    category: 'Prompt 提示詞',
    price: 199,
    description: '週報、會議摘要、Email、簡報、績效評估…50 種真實職場場景，直接貼給 ChatGPT，不用再想怎麼下指令。',
    fullDescription: `你有沒有每次打開 ChatGPT，卻不知道怎麼跟它說話？

這包提示詞就是為台灣上班族設計的「職場 AI 作弊卡」。

50 個場景全部來自真實工作情境，每個都附：
✅ 完整提示詞（繁體中文，可直接貼上）
✅ 實際輸出範例（讓你知道效果）
✅ 調整技巧說明（怎麼改成自己的風格）

涵蓋部門：
• 行銷/社群：文案、活動企劃、競品分析
• PM/企劃：PRD 撰寫、使用者故事、需求規格
• 業務/客服：客戶提案、陌生開發信、投訴處理話術
• HR：招募 JD、員工公告、離職訪談問題
• 所有人都用得到：週報生成、Email 潤稿、會議摘要、績效自評

買了這包，今晚就能開始用。`,
    coverImage: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=800&h=600&fit=crop',
    features: [
      '50 個繁體中文職場提示詞，copy-paste 即用',
      '每個場景附真實輸出範例',
      '涵蓋行銷、PM、業務、HR 等部門',
      '附「如何讓 AI 輸出更像人說話」教學',
      '購買後永久下載，終身免費更新',
    ],
    purchaseUrl: 'https://gumroad.com',
    fileType: 'PDF',
    tags: ['上班族', 'ChatGPT', '職場', 'Email', '週報'],
    isBestSeller: true,
    status: 'coming-soon',
  },
  {
    id: 'service-industry-ig-prompts',
    name: '服務業 IG 文案提示詞包｜美業・餐廳・生活服務',
    category: 'Prompt 提示詞',
    price: 299,
    description: '美甲、美髮、餐廳、按摩、寵物美容…兩種口吻（專業型 / 親和力型）任選，讓 AI 幫你寫出有溫度的 IG 文案。',
    fullDescription: `你每天忙著服務客人，哪有時間想 IG 文案？

這包提示詞專為台灣服務業設計，提供兩種風格口吻：

🎯 專業型：建立信任感、強調技術與品質
💛 親和力型：暖心、生活感、讓客人想走進來

涵蓋服務類型：
• 美業（美甲/美睫/美髮/美膚）
• 餐飲（咖啡廳/餐廳/下午茶/手搖飲）
• 生活服務（按摩/寵物美容/瑜珈教室/健身房）
• 婚禮婚攝與活動攝影

每種場景包含：
• 新客開發文案 × 3 種
• 老客回訪召喚文案 × 2 種
• 限時優惠/節慶行銷文案 × 3 種
• 好評分享鼓勵文 × 2 種

複製貼上給 ChatGPT，30 秒出一篇文案。`,
    coverImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=600&fit=crop',
    features: [
      '專業型 & 親和力型雙口吻任選',
      '涵蓋美業、餐飲、生活服務 10+ 業種',
      '80 組即貼即用文案提示詞',
      '節慶行銷特別版（情人節/母親節/聖誕等）',
      '購買後永久下載',
    ],
    purchaseUrl: 'https://gumroad.com',
    fileType: 'PDF',
    tags: ['服務業', 'IG文案', '美業', '餐廳', 'ChatGPT'],
    isNew: true,
    status: 'coming-soon',
  },
  {
    id: 'short-video-script-pack',
    name: '短影音爆款腳本生成包｜Reels / TikTok / YT Shorts',
    category: 'Prompt 提示詞',
    price: 349,
    description: '100 個黃金開頭 hook + 5 種腳本框架 + ChatGPT 提示詞，30 秒生成完整腳本，拯救低播放量。',
    fullDescription: `前 3 秒沒抓住人，後面再好看都沒用。

這包幫你解決短影音最難的部分：「怎麼開場」和「怎麼說故事」。

包含：

🎣 100 個黃金開頭 Hook（按主題分類）
• 知識型開場（「99% 的人不知道…」）
• 爭議型開場（「你一直做錯這件事」）
• 情感型開場（「我從來沒跟你說過…」）
• 清單型開場（「5 個方法讓你…」）
• 問句型開場（「你有沒有遇過…」）

📋 5 種腳本框架
1. 教學型：問題 → 步驟 → 結果
2. 故事型：衝突 → 轉折 → 收尾
3. 對比型：Before → After → 方法
4. 爭議型：觀點 → 反擊 → 立場
5. 清單型：數字 → 展開 → 行動

🤖 ChatGPT 提示詞模板
把你的主題填入，30 秒生成完整腳本初稿。`,
    coverImage: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=600&fit=crop',
    features: [
      '100 個分類整理的黃金開場 Hooks',
      '5 種可套用的腳本框架',
      'ChatGPT 提示詞：30 秒生成完整腳本',
      '附「哪種 Hook 適合哪種主題」選擇指南',
      '繁體中文，台灣語境',
    ],
    purchaseUrl: 'https://gumroad.com',
    fileType: 'PDF',
    tags: ['短影音', 'Reels', 'TikTok', '腳本', 'Hook'],
    isNew: true,
    status: 'coming-soon',
  },
  {
    id: 'threads-hook-formula-200',
    name: 'Threads 爆流量鉤子文案庫｜200 個引爆留言的開頭公式',
    category: 'Prompt 提示詞',
    price: 0,
    description: '200 個實測能引爆留言、爭議與轉發的第一句話。複製貼上就自帶流量，不需要粉絲基礎也能破百讚。',
    fullDescription: `Threads 的演算法只看一件事：你的第一句話夠不夠讓人想回覆。

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
    coverImage: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=600&fit=crop',
    features: [
      '200 個實測有效的 Threads 開場公式',
      '10 種流量策略分類，按需求選用',
      '每個公式附實際範例',
      '適合各種帳號類型（個人/品牌/素人）',
      '無需粉絲基礎也能引爆互動',
    ],
    purchaseUrl: '#',
    fileType: 'PDF',
    tags: ['Threads', '社群', '文案', '流量', '鉤子'],
    status: 'available',
  },
  {
    id: 'midjourney-chatgpt-prompt-dictionary',
    name: 'AI 詠唱大師｜Midjourney & ChatGPT 商業生圖提示詞字典',
    category: 'Prompt 提示詞',
    price: 399,
    description: '不是一堆亂七八糟的 prompts，是分類整理的「詠唱字典」。選風格、選場景、拼出提示詞，一秒生出專業商業圖。',
    fullDescription: `用 AI 生圖很多人都會，但生出「能用在商業上的圖」，你需要這本字典。

這份字典把商業生圖需要的元素拆解成模組化組件：

🎨 風格詞典（50 種）
• 極簡北歐風 / 賽博朋克 / 皮克斯 3D / 日系插畫 / 奢華質感...

📸 場景詞典（30 種）
• 商品攝影棚 / 咖啡廳氛圍 / 辦公空間 / 戶外街拍 / 自然光...

👤 人像詞典（20 組）
• 專業顧問 / 療癒系 / 知性女性 / 青春活力 / 成熟男性...

✨ 特效詞典（40 種）
• 玻璃光澤 / 粒子飛舞 / 霓虹發光 / 柔焦夢幻 / 電影感...

使用方式：
選風格 + 選場景 + 選特效 = 一組完整提示詞
不需要從零想，拼積木就好。

全部附精美成品圖，讓你下單前就知道效果。`,
    coverImage: 'https://images.unsplash.com/photo-1547954575-855750c57bd3?w=800&h=600&fit=crop',
    features: [
      '140+ 分類模組化商業生圖提示詞',
      '每組附精美成品示意圖',
      '適用 Midjourney V6 / DALL-E 3 / Firefly',
      '積木組合邏輯，不需要從頭想',
      '商業授權使用（客戶商業素材可用）',
    ],
    purchaseUrl: 'https://gumroad.com',
    fileType: 'PDF',
    tags: ['Midjourney', 'AI生圖', '商業攝影', 'ChatGPT', '提示詞'],
    isNew: true,
    status: 'coming-soon',
  },

  // ─── Notion 模板 ──────────────────────────────────────────────
  {
    id: 'rpg-notion-homepage',
    name: 'RPG 電玩風 Notion 個人主頁｜把進度條變成遊戲血條',
    category: 'Notion 模板',
    price: 599,
    description: '誰說生產力工具一定要無聊？把你的習慣追蹤、目標進度做成 RPG 遊戲介面，完成任務還能賺經驗值升級。',
    fullDescription: `完成任務應該像打怪一樣爽，不是填表格。

這個 Notion 模板把你的日常任務變成真實 RPG 體驗：

⚔️ 角色系統
• 完成任務賺取 EXP（經驗值）
• 累積 EXP 自動升等（Lv.1 新手 → Lv.99 傳說）
• 不同類型任務給不同屬性點數

🗡️ 任務系統
• 每日主線任務（必做）
• 支線任務（加分）
• 隱藏成就解鎖
• Boss 關：每週大目標

📊 狀態面板
• HP 血條（睡眠品質）
• MP 魔力（專注時間）
• STR 力量（運動次數）
• INT 智力（學習進度）

🏆 成就系統
• 解鎖成就時出現通知
• 可分享的「本週成就」卡片

畫面極炫，發到 Threads 馬上有人問你用什麼工具。`,
    coverImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop',
    features: [
      'RPG 角色升等系統，完成任務賺 EXP',
      '血條式進度追蹤（睡眠/專注/運動/學習）',
      '每日任務 + 隱藏成就解鎖機制',
      '可一鍵分享的「本週成就」視覺卡',
      '繁體中文介面，附完整設置教學影片',
    ],
    purchaseUrl: 'https://gumroad.com',
    fileType: 'Notion 模板',
    tags: ['Notion', 'RPG', '習慣追蹤', '生產力', 'Y2K'],
    isNew: true,
    status: 'coming-soon',
  },
  {
    id: 'adhd-focus-digital-journal',
    name: '無痛專注數位手帳｜為分心腦設計的極簡 Notion',
    category: 'Notion 模板',
    price: 399,
    description: '選項越少，越容易開始。這款手帳主打「今天只做一件事」，無多餘欄位、防迷路設計，讓你打開就能動。',
    fullDescription: `太多手帳 App 讓你花更多時間整理，而不是真的做事。

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
    coverImage: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
    features: [
      '防分心極簡介面，每天只看一個頁面',
      '「今日唯一目標」強迫優先排序',
      '快速捕捉區：腦子冒出來就丟進去',
      '番茄鐘整合 + 自動記錄完成數',
      '每日 2 分鐘回顧模板',
    ],
    purchaseUrl: 'https://gumroad.com',
    fileType: 'Notion 模板',
    tags: ['Notion', 'ADHD', '專注', '生產力', '數位手帳'],
    status: 'coming-soon',
  },
  {
    id: 'anime-tracking-wall',
    name: '追劇 & 動漫進度管理牆｜貼上網址自動抓劇照',
    category: 'Notion 模板',
    price: 299,
    description: '輸入劇名自動抓劇照，內建評分系統、二刷心得、劇荒推薦演算法。影痴御宅族的夢幻書房。',
    fullDescription: `你的看劇清單還在 Excel 或備忘錄裡嗎？

這個 Notion 模板讓你的追劇變成一面超酷的媒體牆：

🎬 自動劇照抓取
• 輸入劇名 + 來源（Netflix/Disney+/巴哈）
• 自動填入封面圖（透過 API 或手動上傳）
• 清單視圖 / 卡片視圖 / 時間軸 三種模式

⭐ 評分與心得系統
• 5 維度評分（劇情/演技/節奏/視覺/OST）
• 一句話心得 + 詳細感想區
• 隱藏「雷點」功能（防止爆雷）

📈 個人追劇統計
• 今年看了幾部？幾集？幾小時？
• 最常看哪個平台？最愛哪種類型？
• 自動生成「我的 2025 追劇報告」

🎯 劇荒救援
• 按類型、評分篩選已看清單
• 朋友推薦收集區
• 下一部想看排行榜`,
    coverImage: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&h=600&fit=crop',
    features: [
      '媒體牆視覺介面，好看又好用',
      '5 維度評分系統 + 防雷心得區',
      '自動生成追劇年度統計報告',
      '劇荒篩選器：按類型找下一部',
      '繁體中文，台灣平台（巴哈/愛奇藝/Netflix）',
    ],
    purchaseUrl: 'https://gumroad.com',
    fileType: 'Notion 模板',
    tags: ['Notion', '追劇', '動漫', '御宅族', '媒體牆'],
    status: 'coming-soon',
  },
  {
    id: 'freelancer-client-tracker-notion',
    name: '接案者 Notion CRM 客戶管理系統（中文版）',
    category: 'Notion 模板',
    price: 499,
    originalPrice: 699,
    description: '報價→簽約→執行→收款→追蹤，整套接案流程一個 Notion 搞定。英文版賣 $39，這是繁體中文版。',
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
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    features: [
      '客戶資料庫：聯絡資訊、黑名單標記、交易總額',
      'Kanban 案件追蹤：從詢價到收款全流程',
      '財務儀表板：應收帳款、月收入趨勢',
      '報價單生成器：自動計算、一鍵 PDF 匯出',
      '繁體中文介面，附 30 分鐘上手教學',
    ],
    purchaseUrl: 'https://gumroad.com',
    fileType: 'Notion 模板',
    tags: ['Notion', '接案', 'CRM', '財務管理', '自由工作者'],
    isBestSeller: true,
    status: 'coming-soon',
  },
  {
    id: 'client-project-dashboard-notion',
    name: '外包案件進度即時看板｜讓客戶自己去看，不要再追你',
    category: 'Notion 模板',
    price: 499,
    description: '開放給客戶的唯讀進度頁面，自動顯示完成百分比、里程碑狀態，徹底杜絕「現在做到哪了？」',
    fullDescription: `每次客戶傳來「請問進度如何？」，你的心都沉一下嗎？

這個模板讓你把一個唯讀連結給客戶，他自己去看，不用打擾你。

🔗 客戶專屬看板
• 每個案件有獨立的公開頁面（Notion 分享）
• 客戶只能看，不能編輯
• 手機版顯示也清楚

📊 自動進度計算
• 里程碑清單打勾，完成百分比自動更新
• 圓形進度條，一眼看出現在哪個階段

📅 時間軸與 Deadline
• Gantt 視圖（甘特圖）顯示各階段時程
• 紅色警示：即將到期的任務

💬 溝通紀錄區
• 每次的需求確認、修改請求都記錄在這
• 告別「你之前說的那個改動」的爭議

📎 交付物存檔
• 每個版本的交付成果都有連結
• 讓客戶隨時回去找「第一版的設計」`,
    coverImage: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=600&fit=crop',
    features: [
      '可公開給客戶的唯讀進度看板',
      '自動計算完成百分比',
      'Gantt 甘特圖時程視圖',
      '需求確認 & 修改記錄，告別扯皮',
      '每版交付物連結存檔',
    ],
    purchaseUrl: 'https://gumroad.com',
    fileType: 'Notion 模板',
    tags: ['Notion', '接案', '客戶管理', '專案管理', '設計師'],
    status: 'coming-soon',
  },

  // ─── Canva 模板 ───────────────────────────────────────────────
  {
    id: 'dark-mode-personal-brand-canva',
    name: '暗黑質感個人品牌 Canva 全套視覺包｜Dark Mode 高級感',
    category: 'Canva 模板',
    price: 499,
    description: '仿 Apple 官網的高對比極簡黑風格。換上這套視覺包，IG 整體感瞬間像年薪百萬的顧問。',
    fullDescription: `質感不是設計出來的，是顏色和字型決定的。

這套 Canva 模板包含你在 IG 上會用到的所有版型，統一的暗黑極簡風格：

📱 IG 貼文系列（20 個版型）
• 1:1 方形貼文（知識分享、報價公告、成果展示）
• 4:5 直式貼文（長文知識、個人觀點）
• 輪播圖封面 + 內頁（教學系列用）

🎬 限動/Story 系列（15 個版型）
• 9:16 倒數限動
• Q&A 問答版
• 好物推薦版
• 幕後花絮版

🖼️ 個人簡介卡（5 種版型）
• Threads/Twitter 分享用
• 媒體合作提案用
• 演講介紹卡

🎨 品牌色彩系統
• 主色盤：深黑 #0D0D0D + 白 #FFFFFF + 強調色 2 個
• 字型組合：3 種搭配方案
• 使用指南 PDF`,
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop',
    features: [
      '40 個 Canva 版型（貼文/限動/個人簡介卡）',
      '深黑極簡風格，統一高級質感',
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
  {
    id: 'group-buy-review-canva-templates',
    name: '團購主專用好評截圖美化模板｜讓信任感翻倍的限動版型',
    category: 'Canva 模板',
    price: 249,
    description: '把亂七八糟的 LINE 截圖，一秒套入超美的限動版型。視覺整齊了，客人信任感直接飆。',
    fullDescription: `同樣是五顆星好評，放在設計精美的版型裡，就是比截圖有說服力。

這套模板專為台灣團購主設計：

📲 好評展示版型（20 個）
• 單則好評放大版
• 多則好評拼貼版（3 則/6 則）
• 圖文對比版（前後/使用心得）
• 星星評分視覺化版

📦 商品開箱版型（10 個）
• 包裝美照版（強調精美包裝）
• 內容物一覽版
• 使用前後對比版
• 特寫細節版

🔥 限時優惠版型（10 個）
• 倒數計時版
• 名額限制版
• 加碼贈品版
• 最後 XX 份版

使用方式：
截圖複製貼入 Canva → 選版型 → 換顏色 → 發文
全程 3 分鐘。`,
    coverImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    features: [
      '40 個限動版型（好評/開箱/限時優惠）',
      '台灣團購主實際使用情境設計',
      'Canva 免費版可用',
      '購買後可自行更換品牌色彩',
      '附「如何讓好評更有說服力」文案技巧',
    ],
    purchaseUrl: 'https://gumroad.com',
    fileType: 'Canva 模板',
    tags: ['Canva', '團購', 'IG限動', '好評', '社群行銷'],
    status: 'coming-soon',
  },

  // ─── 素材工具包 ───────────────────────────────────────────────
  {
    id: 'neon-ipad-digital-journal',
    name: '霓虹發光 iPad 數位電子手帳｜1000 款 Y3K 風格貼紙包',
    category: '素材工具包',
    price: 399,
    description: '黑底發光字體，在 GoodNotes 裡用賽博朋克美學寫手帳。酷到讓人忍不住發 IG 炫耀的那種。',
    fullDescription: `誰說手帳一定要是文青風淡彩色系？

這套電子手帳素材包讓你的 GoodNotes 變成賽博城市：

🌟 手帳封面主題（12 個月份）
• 每個月份都有獨立主題（霓虹城市/太空站/地下城/未來東京...）
• 黑底發光設計，螢幕上看效果超炸

📄 內頁模板（50+ 種版型）
• 週計劃頁（電路板網格設計）
• 月曆頁（RPG 任務版）
• 習慣追蹤頁（像素進度條）
• 讀書/追劇記錄頁
• 心情日記頁（賽博龐克氛圍）

🎨 1000 款 Y3K 貼紙
• 霓虹光效貼紙（200 款）
• 賽博朋克圖案（200 款）
• 外星/太空系貼紙（150 款）
• 發光文字/符號（200 款）
• UI 元素/圖示（250 款）

📱 適用 App
GoodNotes 5 / Notability / Noteshelf`,
    coverImage: 'https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=800&h=600&fit=crop',
    features: [
      '12 個月份主題封面（霓虹/賽博/太空風格）',
      '50+ 種內頁版型（週計劃/月曆/習慣追蹤）',
      '1000 款 Y3K 風格 PNG 貼紙',
      '適用 GoodNotes / Notability / Noteshelf',
      'PDF + PNG 格式，購買後立即下載',
    ],
    purchaseUrl: 'https://gumroad.com',
    fileType: 'PDF + PNG',
    tags: ['iPad', '數位手帳', 'GoodNotes', '貼紙', '賽博朋克'],
    isNew: true,
    status: 'coming-soon',
  },
  {
    id: 'short-video-hook-asset-pack',
    name: '短影音開頭 3 秒爆點素材包｜字幕動畫 + 轉場音效 + 鉤子公式',
    category: '素材工具包',
    price: 349,
    description: '前 3 秒決定一切。這包給你現成的字幕動畫模板、抓住注意力的轉場音效，和 100 個黃金開頭鉤子。',
    fullDescription: `CapCut / Premiere / Final Cut 都可以用的短影音素材包。

🎬 字幕動畫模板（30 個）
• 爆炸式文字衝出（適合知識型影片）
• 打字機逐字顯現（適合故事型）
• 霓虹發光掃過（適合科技/炫酷主題）
• 手寫感塗鴉（適合生活感 vlog）
• 警示條/新聞快訊（適合爭議型）

🔊 轉場音效包（50 個）
• 衝擊音效（讓人注意力拉回來）
• 滑動音效（切換場景用）
• 鈴聲/提示音（強調重點用）
• 氛圍音（懸念感/緊張感）
• 喜劇音效（搞笑內容用）

📝 100 個黃金開頭鉤子
• 依主題分類：知識/爭議/共鳴/懸念/清單
• 附「哪種內容適合哪種鉤子」選擇指南

⚙️ 使用格式
• MP4（動畫模板）
• MP3 + WAV（音效）
• PDF（鉤子文案庫）`,
    coverImage: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&h=600&fit=crop',
    features: [
      '30 個字幕動畫模板（MP4，可直接套用）',
      '50 個轉場音效（MP3 + WAV）',
      '100 個黃金開頭鉤子文案',
      '適用 CapCut / Premiere / Final Cut',
      '繁體中文字幕版本',
    ],
    purchaseUrl: 'https://gumroad.com',
    fileType: 'MP4 + MP3 + PDF',
    tags: ['短影音', 'CapCut', '素材包', '轉場', 'Hook'],
    status: 'coming-soon',
  },
  {
    id: '3d-mockup-library',
    name: '3D 質感 Web & App Mockup 素材庫｜玻璃擬態 + 黏土風',
    category: '素材工具包',
    price: 499,
    description: '不是一般平面截圖，是玻璃擬態、黏土風、霧面磨砂質感的 3D 模型素材。提案給客戶，秒過。',
    fullDescription: `設計提案的第一眼決定客戶買不買單。

這套素材庫包含 UI 設計師最愛的高質感 3D Mockup：

📱 手機 Mockup（40 款）
• iPhone 玻璃擬態版（透明/磨砂/彩色）
• 黏土風 3D 手機（Claymorphism 超可愛）
• 懸浮效果手機（附陰影/光暈）
• 雙手持手機情境版

💻 電腦 Mockup（20 款）
• MacBook 玻璃桌面版
• 霧面磨砂質感
• 等距視角（Isometric）
• 多螢幕展示版

🖥️ 網頁瀏覽器 Mockup（15 款）
• 玻璃擬態瀏覽器框架
• 深色模式版本
• 捲軸長截圖展示版

📐 平板 Mockup（10 款）
• iPad 黏土風（各角度）
• 手寫筆使用情境版

格式：PNG（透明背景）+ Figma 元件`,
    coverImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
    features: [
      '85 款 3D Mockup（手機/電腦/平板/瀏覽器）',
      '玻璃擬態 / 黏土風 / 磨砂質感三種風格',
      'PNG 透明背景 + Figma 元件版',
      '附使用教學（5 分鐘上手）',
      '商業授權，可用於客戶提案與交付',
    ],
    purchaseUrl: 'https://gumroad.com',
    fileType: 'PNG + Figma',
    tags: ['Mockup', 'UI設計', 'Figma', '素材庫', '提案'],
    isNew: true,
    status: 'coming-soon',
  },
  {
    id: 'github-readme-templates',
    name: 'GitHub Readme 極客風自我介紹模板包｜動態打字 + 技能徽章',
    category: '素材工具包',
    price: 0,
    description: '動態打字效果、科技感技能徽章、程式碼統計圖，讓你的 GitHub 個人頁面讓面試官一眼記住你。',
    fullDescription: `你的 GitHub 個人頁面，是工程師的第一張名片。

這包模板讓你的 README.md 從空白頁變成：

⌨️ 動態效果
• 打字機效果：自動切換「我是...前端工程師/後端工程師/全端工程師」
• 波浪動態橫幅
• 蛇吃貢獻格動畫（Snake eating contributions）

🎖️ 技能徽章系統
• 150+ 技術棧徽章（React/Vue/Python/Go/AWS...）
• 四種樣式：扁平/圓角/for-the-badge/塑膠感
• 自訂顏色、Logo、文字

📊 統計圖整合
• GitHub Stats Card（星星數/提交數/PR 數）
• Top Languages Card（最常用語言圓餅圖）
• GitHub Streak Stats（連續提交天數）
• WakaTime 編碼時間統計

🎨 10 種主題設計
• 深色極客風（最受歡迎）
• 賽博朋克霓虹
• 清爽白底科技
• 日系動漫風
• 極簡黑白

使用方式：複製 markdown 代碼，填入你的資訊，貼到 README.md。`,
    coverImage: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=600&fit=crop',
    features: [
      '10 種主題 README 模板（Markdown 即貼即用）',
      '動態打字 + 波浪橫幅 + 蛇吃貢獻格動畫',
      '150+ 技術棧徽章代碼',
      'GitHub 統計圖整合教學',
      '附「如何讓你的 GitHub 被 HR 注意到」指南',
    ],
    purchaseUrl: '#',
    fileType: 'Markdown + PDF',
    tags: ['GitHub', '工程師', 'Readme', '求職', '前端'],
    status: 'available',
  },
  {
    id: 'tailwind-component-library',
    name: 'Tailwind CSS 超炫元件庫｜發光按鈕 + 微動畫卡片 + Apple 風介面',
    category: '素材工具包',
    price: 699,
    description: '複製程式碼，網頁瞬間變 Apple 官網等級。30 個現成元件，從接案到個人作品集都能用。',
    fullDescription: `不要再從零寫按鈕了。

這包 Tailwind CSS 元件庫包含 30 個高質感元件，複製就能用：

✨ 按鈕元件（8 個）
• 霓虹發光按鈕（Glow Effect）
• 磁吸跟隨滑鼠按鈕
• 液態波紋按鈕（Liquid Ripple）
• 邊框流光按鈕（Border Beam）
• 漸層 CTA 大按鈕

🃏 卡片元件（8 個）
• 玻璃擬態卡片（Glassmorphism）
• 3D 傾斜卡片（Tilt on Hover）
• 微動畫資訊卡
• 展開詳情卡（Accordion）
• 特色功能展示卡

📊 介面元件（8 個）
• 動態數字計數器
• 粒子背景（Particle）
• 漸層 Hero Section
• 捲軸觸發動畫
• 打字機文字效果

🎨 完整頁面模板（6 個）
• 個人作品集頁
• SaaS Landing Page
• 定價方案頁
• 個人部落格首頁
• 聯絡我們頁
• 404 錯誤頁（酷炫版）

附 React + Vue 版本，Tailwind v3 & v4 都支援。`,
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
    features: [
      '30 個高質感 Tailwind CSS 元件',
      'React + Vue 雙版本提供',
      'Tailwind v3 & v4 皆相容',
      '6 個完整頁面模板即插即用',
      '附設計稿（Figma）可自行調整',
    ],
    purchaseUrl: 'https://gumroad.com',
    fileType: 'Code + Figma',
    tags: ['Tailwind', 'CSS', '元件庫', '前端', '工程師'],
    isNew: true,
    status: 'coming-soon',
  },
  {
    id: 'ai-personal-brand-full-pack',
    name: 'AI 個人品牌建立包｜IG + 部落格 + 電子報全套攻略',
    category: 'Prompt 提示詞',
    price: 790,
    originalPrice: 1290,
    description: '不用湊團隊、不用從零摸索。一套 AI 提示詞與模板，帶你把 IG、部落格、電子報一次建立起來——從定位到 30 天發文，填空、複製、發布就好。',
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
    coverImage: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=600&fit=crop',
    features: [
      'IG 帳號建立：Bio 提示詞＋品牌定位工作表',
      'IG 內容點子庫：16 個發文點子＋提示詞',
      '部落格提示詞 ×20（SEO 標題、大綱、CTA）',
      '電子報提示詞 ×5（含主旨列生成）',
      '30 天執行行事曆（0→1000 粉路徑）',
    ],
    purchaseUrl: 'https://gumroad.com',
    fileType: '線上閱讀版（序號解鎖）',
    tags: ['個人品牌', 'IG', '電子報', '部落格', 'ChatGPT'],
    isNew: true,
    status: 'coming-soon',
  },
  {
    id: 'line-auto-budget-bot',
    name: '懶人 LINE 自動記帳機器人腳本',
    category: '素材工具包',
    price: 499,
    description: '在 LINE 打「午餐 150」，自動同步到 Google 試算表並產出超美圖表。不用打開任何 App，邊走路邊記帳。',
    fullDescription: `記帳 App 的最大問題是：你記得打開嗎？

這個腳本讓你在 LINE 隨手記，自動整理。

🤖 使用方式超簡單
1. 在 LINE 傳「午餐 150」或「交通費 45 悠遊卡」
2. 機器人自動分類、記錄到 Google 試算表
3. 每週日自動傳來本週消費報告

📊 自動生成的圖表
• 月支出圓餅圖（按分類）
• 每日消費折線圖
• 和上個月對比的長條圖
• 「危險類別」警示（超過預算自動通知）

🗂️ 支出分類（可自訂）
• 餐飲/交通/購物/娛樂/醫療/日用/其他
• 固定支出 vs 變動支出分開計算

⚙️ 建置說明
• 使用 LINE Messaging API（免費額度）
• Google Apps Script（完全免費）
• 全程不需要寫程式，照步驟設定即可
• 附 30 分鐘建置影片教學`,
    coverImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
    features: [
      'LINE 傳訊息自動記帳，不用開 App',
      '自動同步 Google 試算表',
      '每週自動產出消費圓餅圖 + 折線圖',
      '超預算自動 LINE 通知',
      '附逐步建置影片教學（30 分鐘完成）',
    ],
    purchaseUrl: 'https://gumroad.com',
    fileType: 'Script + PDF',
    tags: ['LINE', '記帳', '自動化', 'Google試算表', '懶人工具'],
    status: 'coming-soon',
  },
]
