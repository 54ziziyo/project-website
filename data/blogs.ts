export interface BlogPost {
  id: string
  title: string
  category: string
  tags: string[]
  excerpt: string
  content: string
  coverImage: string
  author: string
  publishedAt: string
  updatedAt: string
  readingTime: number
  seo: {
    title: string
    description: string
    keywords: string
    ogImage: string
  }
}

export const blogCategories = ['全部', 'AI 人工智慧', '數位行銷', '網站開發'] as const
export type BlogCategory = (typeof blogCategories)[number]

export const blogPosts: BlogPost[] = [
  // ===== AI 人工智慧 =====
  {
    id: 'ai-business-automation-2026',
    title: 'AI 自動化如何改變中小企業的運營模式？2026 完整指南',
    category: 'AI 人工智慧',
    tags: ['AI', '自動化', '中小企業', '數位轉型'],
    excerpt:
      '探索 AI 自動化技術如何協助中小企業降低成本、提升效率。從客服機器人到智能排程，一次掌握最實用的 AI 工具與導入策略。',
    coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop',
    author: 'Zeona Studio',
    publishedAt: '2026-02-18',
    updatedAt: '2026-02-18',
    readingTime: 8,
    seo: {
      title: 'AI 自動化如何改變中小企業運營？2026 完整指南 | Zeona Studio',
      description: '探索 AI 自動化技術如何協助中小企業降低成本、提升效率，從客服機器人到智能排程的實用導入策略。',
      keywords: 'AI自動化, 中小企業AI, 數位轉型, AI工具, 企業自動化',
      ogImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=630&fit=crop',
    },
    content: `
      <h2>為什麼中小企業需要 AI 自動化？</h2>
      <p>在 2026 年的商業環境中，AI 自動化已不再是大企業的專利。隨著技術門檻降低和工具普及，中小企業也能輕鬆導入 AI 解決方案，大幅提升營運效率。根據最新研究，導入 AI 自動化的中小企業平均節省了 <strong>30% 的營運成本</strong>，並將客戶回應速度提升了 <strong>5 倍以上</strong>。</p>

      <h2>五大 AI 自動化應用場景</h2>

      <h3>1. 智能客服機器人</h3>
      <p>透過 AI 聊天機器人，企業可以 24/7 全天候回應客戶諮詢。現代的 AI 客服不僅能處理基本問答，還能理解上下文語意、判斷客戶情緒，並在需要時智能轉接人工客服。</p>
      <ul>
        <li>減少 70% 的重複性客服工作</li>
        <li>提升客戶滿意度達 85%</li>
        <li>支援多國語言即時翻譯</li>
      </ul>

      <h3>2. 自動化行銷流程</h3>
      <p>AI 可以根據用戶行為自動觸發個性化的行銷活動，包括 Email 行銷、社群媒體排程、廣告投放優化等。透過機器學習，系統會持續優化投放策略，確保每一分行銷預算都花在刀口上。</p>

      <h3>3. 智能排程與資源管理</h3>
      <p>AI 排程系統能根據歷史數據、員工偏好和業務需求，自動產生最佳排班表。同時，也能智能管理庫存、預測需求量，避免缺貨或過度囤積的問題。</p>

      <h3>4. 文件處理自動化</h3>
      <p>從發票識別、合約審閱到報表生成，AI 文件處理工具可以將原本需要數小時的文書工作縮短到幾分鐘。OCR 技術結合自然語言處理，讓紙本文件也能快速數位化。</p>

      <h3>5. 數據分析與商業洞察</h3>
      <p>AI 分析工具可以從海量數據中找出隱藏的商業模式和趨勢，協助企業主做出更精準的決策。不需要聘請專業數據分析師，中小企業也能享受數據驅動的決策優勢。</p>

      <h2>如何開始導入 AI 自動化？</h2>
      <p>導入 AI 不需要一步到位，建議分階段執行：</p>
      <ol>
        <li><strong>評估需求：</strong>盤點目前最花時間的重複性工作</li>
        <li><strong>選擇工具：</strong>從成熟穩定的 SaaS 工具開始</li>
        <li><strong>小規模測試：</strong>選擇一個部門或流程先行試驗</li>
        <li><strong>培訓團隊：</strong>確保員工了解並接受新工具</li>
        <li><strong>逐步擴展：</strong>根據成效逐步擴大 AI 應用範圍</li>
      </ol>

      <h2>結論</h2>
      <p>AI 自動化是中小企業在競爭中脫穎而出的關鍵工具。現在開始行動，讓技術為你的事業加速。Zeona Studio 提供專業的 AI 導入諮詢服務，協助您找到最適合的自動化方案。</p>
    `,
  },
  {
    id: 'chatgpt-content-creation-guide',
    title: '用 ChatGPT 打造高品質內容：品牌文案與部落格寫作全攻略',
    category: 'AI 人工智慧',
    tags: ['ChatGPT', 'AI 寫作', '內容行銷', '品牌文案'],
    excerpt:
      '學會正確使用 ChatGPT 撰寫品牌文案與部落格文章。掌握 Prompt 技巧、內容校驗流程，讓 AI 成為你的最佳寫作夥伴。',
    coverImage: 'https://images.unsplash.com/photo-1684163761883-8a2a tried-and-true?w=800&h=450&fit=crop',
    author: 'Zeona Studio',
    publishedAt: '2026-02-12',
    updatedAt: '2026-02-12',
    readingTime: 10,
    seo: {
      title: '用 ChatGPT 打造高品質內容：品牌文案與部落格寫作全攻略 | Zeona Studio',
      description: '學會正確使用 ChatGPT 撰寫品牌文案與部落格文章，掌握 Prompt 技巧與內容校驗流程。',
      keywords: 'ChatGPT, AI寫作, 內容行銷, 品牌文案, Prompt技巧',
      ogImage: 'https://images.unsplash.com/photo-1684163761883-8a2a?w=1200&h=630&fit=crop',
    },
    content: `
      <h2>為什麼 ChatGPT 是內容創作者的最佳夥伴？</h2>
      <p>在內容為王的時代，持續產出高品質的文章是品牌成功的關鍵。ChatGPT 作為目前最先進的 AI 語言模型，可以大幅加速內容創作流程，但前提是——你要學會正確使用它。</p>
      <p>本文將帶你從零開始，掌握用 ChatGPT 撰寫專業品牌文案和部落格文章的完整方法論。</p>

      <h2>Prompt 工程：與 AI 溝通的藝術</h2>
      <h3>基礎原則</h3>
      <p>好的 Prompt 是 AI 產出好內容的前提。以下是撰寫高效 Prompt 的四個核心要素：</p>
      <ul>
        <li><strong>角色設定（Role）：</strong>告訴 AI 扮演什麼角色，例如「你是一位資深的 SEO 文案專家」</li>
        <li><strong>背景說明（Context）：</strong>提供足夠的產業背景和品牌資訊</li>
        <li><strong>任務描述（Task）：</strong>清楚說明你需要什麼，包括文章長度、語氣、目標受眾</li>
        <li><strong>輸出格式（Format）：</strong>指定你希望的輸出格式，如 Markdown、條列式等</li>
      </ul>

      <h3>進階技巧：Chain of Thought</h3>
      <p>對於複雜的寫作任務，使用分步驟的方式讓 AI 思考，可以獲得更好的結果。例如先請 AI 擬定大綱，再逐段展開內容，最後進行統一修飾。</p>

      <h2>實戰：用 ChatGPT 撰寫 SEO 部落格文章</h2>
      <h3>步驟一：關鍵字研究輔助</h3>
      <p>先請 ChatGPT 幫你腦力激盪相關的長尾關鍵字和主題方向，再結合 Google Trends 或專業 SEO 工具進行驗證。</p>

      <h3>步驟二：生成文章大綱</h3>
      <p>提供主要關鍵字與目標受眾，讓 AI 產出結構化的文章大綱。記得要求加入 H2、H3 標題層級，以利 SEO 優化。</p>

      <h3>步驟三：逐段撰寫內容</h3>
      <p>按照大綱逐段請 AI 撰寫，每次只處理一個小節。這樣可以確保每段內容的品質和連貫性。</p>

      <h3>步驟四：人工審校與優化</h3>
      <p>AI 生成的內容一定需要人工審校。重點檢查：事實正確性、品牌語氣一致性、SEO 關鍵字密度、以及是否有 AI 常見的重複用語。</p>

      <h2>品牌文案的 AI 輔助寫作流程</h2>
      <p>品牌文案比部落格文章更需要創意和情感共鳴。建議的流程是：</p>
      <ol>
        <li>準備品牌風格指南（Brand Voice Guide）提供給 AI</li>
        <li>先產出多個版本，再由人工篩選最佳方案</li>
        <li>用 AI 做 A/B Testing 文案的快速迭代</li>
        <li>建立品牌專屬的 Prompt 模板庫</li>
      </ol>

      <h2>結論</h2>
      <p>ChatGPT 不是要取代文案人員，而是成為最強大的輔助工具。掌握正確的使用方法，你就能用更少的時間，產出更多更好的內容。</p>
    `,
  },
  {
    id: 'ai-image-generation-brand-design',
    title: 'AI 圖片生成工具在品牌設計中的應用：Midjourney 與 DALL-E 實戰教學',
    category: 'AI 人工智慧',
    tags: ['AI 繪圖', 'Midjourney', 'DALL-E', '品牌設計', '視覺設計'],
    excerpt:
      '深入了解如何運用 Midjourney、DALL-E 等 AI 圖片生成工具，加速品牌視覺設計流程，從概念發想到最終成品的完整工作流。',
    coverImage: 'https://images.unsplash.com/photo-1686191128892-3b37add4c844?w=800&h=450&fit=crop',
    author: 'Zeona Studio',
    publishedAt: '2026-02-05',
    updatedAt: '2026-02-05',
    readingTime: 7,
    seo: {
      title: 'AI 圖片生成工具在品牌設計中的應用 | Zeona Studio',
      description: '深入了解如何運用 Midjourney、DALL-E 等 AI 圖片生成工具加速品牌視覺設計流程。',
      keywords: 'AI繪圖, Midjourney, DALL-E, 品牌設計, AI視覺設計',
      ogImage: 'https://images.unsplash.com/photo-1686191128892-3b37add4c844?w=1200&h=630&fit=crop',
    },
    content: `
      <h2>AI 圖片生成正在革新品牌設計</h2>
      <p>2026 年，AI 圖片生成技術已經成熟到足以應用在實際的品牌設計工作流中。從 Midjourney 的藝術風格到 DALL-E 的精確控制，設計師有了前所未有的創意工具。但如何在商業設計中正確運用這些工具？讓我們一起深入探討。</p>

      <h2>主流 AI 圖片生成工具比較</h2>
      <h3>Midjourney</h3>
      <p>以藝術性和美學著稱的 AI 繪圖工具。特別適合用於概念設計、情緒板製作和品牌視覺探索。其輸出的圖片具有獨特的藝術質感，非常適合做為設計靈感的起點。</p>

      <h3>DALL-E</h3>
      <p>OpenAI 旗下的圖片生成模型，以精確理解文字描述著稱。適合需要高度控制的場景，如產品模擬圖、Banner 設計素材等。</p>

      <h3>Stable Diffusion</h3>
      <p>開源的圖片生成模型，最大優勢是可以在本地運行和高度客製化。適合有技術團隊的企業進行深度整合。</p>

      <h2>品牌設計實戰應用</h2>
      <h3>1. 概念發想與情緒板</h3>
      <p>在品牌設計初期，使用 AI 快速生成大量視覺概念，協助團隊和客戶溝通設計方向。一個小時內就能產出數十張不同風格的概念圖。</p>

      <h3>2. 社群媒體素材</h3>
      <p>AI 可以快速生成符合品牌調性的社群貼文圖片，特別適合需要大量視覺內容的行銷團隊。搭配品牌色彩和風格指引，可以確保視覺一致性。</p>

      <h3>3. 網頁設計元素</h3>
      <p>從背景插圖、Icon 設計到 Hero Section 的圖片，AI 都能提供高品質的設計素材。但要注意授權問題，商業使用時請確認各平台的使用條款。</p>

      <h2>注意事項與最佳實踐</h2>
      <ul>
        <li>AI 生成的圖片作為「起點」而非「終點」，仍需設計師進行修飾</li>
        <li>注意著作權規範與各平台的商用授權條款</li>
        <li>建立統一的 Prompt 模板，確保品牌風格一致性</li>
        <li>定期更新和優化 Prompt 以跟上技術發展</li>
      </ul>

      <h2>結論</h2>
      <p>AI 圖片生成工具是設計師的好幫手，不是替代品。善用這些工具，可以大幅提升設計效率和創意品質。</p>
    `,
  },
  {
    id: 'ai-seo-optimization-strategy',
    title: 'AI 驅動的 SEO 優化策略：讓搜尋引擎排名穩步攀升',
    category: 'AI 人工智慧',
    tags: ['AI', 'SEO', '搜尋優化', '數據分析', '內容策略'],
    excerpt: '了解如何善用 AI 工具進行 SEO 優化，從關鍵字研究、內容優化到技術 SEO，全面提升網站搜尋排名。',
    coverImage: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=450&fit=crop',
    author: 'Zeona Studio',
    publishedAt: '2026-01-28',
    updatedAt: '2026-01-28',
    readingTime: 9,
    seo: {
      title: 'AI 驅動的 SEO 優化策略：讓搜尋引擎排名穩步攀升 | Zeona Studio',
      description: '善用 AI 工具進行 SEO 優化，從關鍵字研究、內容優化到技術 SEO，全面提升網站搜尋排名。',
      keywords: 'AI SEO, 搜尋引擎優化, AI關鍵字研究, 內容優化, 技術SEO',
      ogImage: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=630&fit=crop',
    },
    content: `
      <h2>AI 如何重新定義 SEO？</h2>
      <p>搜尋引擎優化（SEO）一直是數位行銷的核心，而 AI 技術的加入正在徹底改變 SEO 的遊戲規則。從 Google 的 AI 搜尋體驗（SGE）到各種 AI 驅動的 SEO 工具，2026 年的 SEO 已經進入全新的時代。</p>

      <h2>AI 在 SEO 各階段的應用</h2>

      <h3>關鍵字研究 2.0</h3>
      <p>傳統的關鍵字研究依賴搜尋量和競爭度指標，而 AI 可以更深入地理解搜尋意圖（Search Intent）。透過自然語言處理技術，AI 能夠：</p>
      <ul>
        <li>分析搜尋查詢背後的真實需求</li>
        <li>發現長尾關鍵字的語意關聯</li>
        <li>預測即將興起的搜尋趨勢</li>
        <li>自動產出主題群集（Topic Clusters）策略</li>
      </ul>

      <h3>內容優化</h3>
      <p>AI 內容優化工具可以即時分析你的文章，並提供具體的改善建議：</p>
      <ul>
        <li>內容完整度評分：與排名前十的頁面比較</li>
        <li>語意關鍵字建議：補足遺漏的相關詞彙</li>
        <li>可讀性分析：確保內容適合目標受眾</li>
        <li>結構優化：H 標籤、段落長度、重點標記</li>
      </ul>

      <h3>技術 SEO 自動化</h3>
      <p>AI 可以自動偵測和修復技術 SEO 問題：</p>
      <ol>
        <li>自動發現和修復損壞的連結</li>
        <li>生成和優化 Schema Markup</li>
        <li>網站速度優化建議</li>
        <li>行動裝置友善度檢測</li>
        <li>Core Web Vitals 監控與優化</li>
      </ol>

      <h2>因應 AI 搜尋的 SEO 策略調整</h2>
      <p>隨著 Google SGE 和 AI 搜尋的普及，SEO 策略也需要隨之調整：</p>
      <ul>
        <li><strong>結構化資料更重要：</strong>AI 搜尋引擎更依賴結構化資料來理解內容</li>
        <li><strong>專業性與權威性：</strong>E-E-A-T 原則比以往更加重要</li>
        <li><strong>長篇深度內容：</strong>比起淺談多個主題，深入一個主題更有價值</li>
        <li><strong>多媒體內容：</strong>圖片、影片、資訊圖表可以增加內容豐富度</li>
      </ul>

      <h2>結論</h2>
      <p>AI 是 SEO 從業者的強力工具，但核心仍是為使用者提供有價值的內容。善用 AI 來提升效率，但不要忽視內容的原創性和專業性。</p>
    `,
  },

  // ===== 數位行銷 =====
  {
    id: 'social-media-marketing-strategy-2026',
    title: '2026 社群媒體行銷策略：從 Instagram 到 Threads 的全平台佈局指南',
    category: '數位行銷',
    tags: ['社群行銷', 'Instagram', 'Threads', '品牌曝光', '內容策略'],
    excerpt: '深入解析 2026 年最新的社群媒體行銷趨勢與策略，幫助品牌在各大平台建立有效的社群存在感。',
    coverImage: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=450&fit=crop',
    author: 'Zeona Studio',
    publishedAt: '2026-02-15',
    updatedAt: '2026-02-15',
    readingTime: 11,
    seo: {
      title: '2026 社群媒體行銷策略：全平台佈局指南 | Zeona Studio',
      description:
        '深入解析 2026 年最新的社群媒體行銷趨勢與策略，幫助品牌在 Instagram、Threads 等平台建立有效的社群存在感。',
      keywords: '社群媒體行銷, Instagram行銷, Threads行銷, 品牌社群策略, 2026行銷趨勢',
      ogImage: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=630&fit=crop',
    },
    content: `
      <h2>2026 年社群媒體趨勢概覽</h2>
      <p>社群媒體行銷持續演化，短影音內容依然強勁，但純文字社群（如 Threads）的崛起帶來新的機會。品牌需要理解各平台的特性，制定差異化的內容策略。</p>

      <h2>各大平台的品牌策略</h2>

      <h3>Instagram：視覺內容的主戰場</h3>
      <p>Instagram 仍是品牌視覺行銷的核心平台。2026 年的重點趨勢包括：</p>
      <ul>
        <li><strong>Reels 優先：</strong>短影音內容的觸及率遠高於靜態貼文</li>
        <li><strong>Carousel 深度內容：</strong>多圖文滑動貼文持續高互動</li>
        <li><strong>Stories 互動功能：</strong>投票、問答、倒數等功能增加參與度</li>
        <li><strong>Instagram Shop：</strong>社群電商的無縫整合</li>
      </ul>

      <h3>Threads：文字社群的新機遇</h3>
      <p>Meta 的 Threads 平台在 2026 年已發展為重要的品牌溝通管道。其特點是：</p>
      <ul>
        <li>演算法友善，新帳號也能獲得曝光</li>
        <li>適合分享產業洞察和品牌觀點</li>
        <li>對話式內容更容易引發討論</li>
        <li>與 Instagram 帳號的互通優勢</li>
      </ul>

      <h3>YouTube Shorts：影音觸及的擴大器</h3>
      <p>在短影音領域，YouTube Shorts 不容忽視。其優勢在於與 YouTube 搜尋生態的整合，讓短影音也能透過搜尋被找到。</p>

      <h2>內容策略核心框架</h2>
      <h3>80/20 法則的應用</h3>
      <p>80% 的內容提供價值（教學、啟發、娛樂），20% 的內容進行推廣。這個比例可以維持粉絲的忠誠度，同時達成商業目標。</p>

      <h3>內容支柱（Content Pillars）</h3>
      <p>建議為品牌設定 3-5 個內容支柱，例如：</p>
      <ol>
        <li>產業知識分享</li>
        <li>品牌幕後故事</li>
        <li>客戶成功案例</li>
        <li>產品/服務介紹</li>
        <li>團隊文化展現</li>
      </ol>

      <h2>社群經營數據指標</h2>
      <p>不要只看粉絲數！2026 年更重要的社群指標包括：</p>
      <ul>
        <li><strong>互動率（Engagement Rate）：</strong>衡量內容是否真正引起共鳴</li>
        <li><strong>分享次數：</strong>最有價值的互動行為</li>
        <li><strong>連結點擊率：</strong>衡量社群導流效能</li>
        <li><strong>客戶取得成本（CAC）：</strong>評估社群行銷的 ROI</li>
      </ul>

      <h2>結論</h2>
      <p>成功的社群行銷需要一致性和耐心。選擇適合品牌的平台，維持穩定的發布頻率，並持續根據數據優化策略。</p>
    `,
  },
  {
    id: 'email-marketing-automation-guide',
    title: 'Email 行銷自動化完全指南：提升開信率與轉換率的實戰策略',
    category: '數位行銷',
    tags: ['Email 行銷', '行銷自動化', '轉換率', '客戶經營'],
    excerpt:
      '從電子報設計到自動化序列信，全面解析 Email 行銷的關鍵技術。學會如何用電子郵件有效培養潛在客戶並轉換成實際訂單。',
    coverImage: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=450&fit=crop',
    author: 'Zeona Studio',
    publishedAt: '2026-02-08',
    updatedAt: '2026-02-08',
    readingTime: 9,
    seo: {
      title: 'Email 行銷自動化完全指南：提升開信率與轉換率 | Zeona Studio',
      description: '全面解析 Email 行銷的關鍵技術，從電子報設計到自動化序列信，有效培養潛在客戶並轉換成實際訂單。',
      keywords: 'Email行銷, 行銷自動化, 電子報, 開信率提升, 轉換率優化',
      ogImage: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=1200&h=630&fit=crop',
    },
    content: `
      <h2>Email 行銷在 2026 年依然強勁</h2>
      <p>儘管社群媒體日新月異，Email 行銷的 ROI 仍然高居所有數位行銷管道之首。根據統計，每投入 1 元的 Email 行銷預算，平均能產生 42 元的回報。關鍵在於如何做好自動化和個人化。</p>

      <h2>Email 行銷自動化的核心概念</h2>

      <h3>什麼是行銷自動化？</h3>
      <p>簡單來說，就是根據用戶的行為觸發預設的電子郵件序列。當用戶完成某個動作（如註冊、瀏覽特定頁面、放棄購物車），系統會自動寄出對應的郵件，無需人工介入。</p>

      <h3>五大必備自動化流程</h3>
      <ol>
        <li><strong>歡迎序列：</strong>新訂閱者的 3-5 封歡迎信，介紹品牌並建立信任</li>
        <li><strong>購物車挽回：</strong>自動提醒放棄結帳的潛在客戶</li>
        <li><strong>售後關懷：</strong>購買後的感謝信、使用教學、評價邀請</li>
        <li><strong>再互動序列：</strong>喚回沉睡訂閱者的重啟信件</li>
        <li><strong>生日/紀念日：</strong>個人化的節日祝福與專屬優惠</li>
      </ol>

      <h2>提升開信率的關鍵技巧</h2>
      <ul>
        <li><strong>主旨行優化：</strong>保持 30 字以內，創造好奇感或急迫感</li>
        <li><strong>發送時間：</strong>根據受眾的活躍時間測試最佳發送時段</li>
        <li><strong>寄件者名稱：</strong>使用真實姓名比品牌名稱更具親和力</li>
        <li><strong>預覽文字：</strong>善用 Email 預覽文字補充主旨行</li>
        <li><strong>名單清理：</strong>定期移除無效和不活躍的訂閱者</li>
      </ul>

      <h2>內容設計最佳實踐</h2>
      <p>好的 Email 內容應該兼具價值與美感。以下是設計要點：</p>
      <ul>
        <li>保持簡潔，一封信只傳達一個核心訊息</li>
        <li>使用響應式模板，確保手機閱讀體驗</li>
        <li>CTA 按鈕要明顯且具有吸引力</li>
        <li>圖文比例建議 40:60，純圖片容易進垃圾郵件</li>
        <li>加入個人化元素，如收件者姓名、推薦商品</li>
      </ul>

      <h2>結論</h2>
      <p>Email 行銷自動化是一次建設、長期受益的投資。花時間設計好每個自動化流程，就能在不增加人力的情況下持續培養客戶關係、提升銷售。</p>
    `,
  },
  {
    id: 'content-marketing-roi-framework',
    title: '內容行銷 ROI 如何衡量？建立以數據驅動的內容策略框架',
    category: '數位行銷',
    tags: ['內容行銷', 'ROI', '數據分析', '行銷策略', 'KPI'],
    excerpt:
      '許多企業投入大量資源做內容行銷，卻不知道如何衡量成效。本文教你建立完整的內容行銷 KPI 體系，讓每一篇內容都有跡可循。',
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop',
    author: 'Zeona Studio',
    publishedAt: '2026-01-30',
    updatedAt: '2026-01-30',
    readingTime: 8,
    seo: {
      title: '內容行銷 ROI 如何衡量？數據驅動的內容策略框架 | Zeona Studio',
      description: '建立完整的內容行銷 KPI 體系，讓每一篇內容都有跡可循，提升內容行銷的投資報酬率。',
      keywords: '內容行銷ROI, 行銷KPI, 數據驅動行銷, 內容策略, 行銷成效衡量',
      ogImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop',
    },
    content: `
      <h2>內容行銷的投資報酬率難題</h2>
      <p>「我們持續在做內容行銷，但到底有沒有效？」這是許多行銷主管和企業主的共同疑問。內容行銷的效果往往不像付費廣告那樣立竿見影，但只要建立正確的衡量框架，你就能清楚看到每一篇內容帶來的價值。</p>

      <h2>內容行銷漏斗與對應指標</h2>

      <h3>認知階段（Top of Funnel）</h3>
      <p>這個階段的目標是擴大品牌曝光和觸及潛在受眾。主要衡量指標包括：</p>
      <ul>
        <li>自然搜尋流量與排名變化</li>
        <li>社群媒體內容觸及率與互動</li>
        <li>品牌關鍵字搜尋量變化</li>
        <li>網站新訪客數量</li>
      </ul>

      <h3>考慮階段（Middle of Funnel）</h3>
      <p>潛在客戶已經認識品牌，正在評估是否符合需求。衡量指標：</p>
      <ul>
        <li>Email 訂閱轉換率</li>
        <li>白皮書/電子書下載次數</li>
        <li>網站停留時間與瀏覽深度</li>
        <li>回訪率</li>
      </ul>

      <h3>決策階段（Bottom of Funnel）</h3>
      <p>最接近成交的階段，衡量指標：</p>
      <ul>
        <li>表單提交數量（諮詢、報價請求）</li>
        <li>試用申請或 Demo 預約</li>
        <li>直接產生的營收</li>
        <li>客戶取得成本（CAC）</li>
      </ul>

      <h2>建立內容行銷 ROI 公式</h2>
      <p>ROI 計算公式可以簡化為：</p>
      <p><strong>內容行銷 ROI = (內容帶來的收入 - 內容製作成本) / 內容製作成本 × 100%</strong></p>
      <p>關鍵是正確追蹤「內容帶來的收入」，這需要在分析工具中設定正確的歸因模型（Attribution Model），並追蹤從第一次觸及到最終轉換的完整路徑。</p>

      <h2>實用的衡量工具組合</h2>
      <ol>
        <li><strong>Google Analytics 4：</strong>追蹤網站流量、轉換路徑與行為</li>
        <li><strong>Google Search Console：</strong>監控 SEO 排名與搜尋流量</li>
        <li><strong>社群分析工具：</strong>各平台内建分析 + Hootsuite / Buffer</li>
        <li><strong>CRM 系統：</strong>追蹤從內容到成交的完整客戶旅程</li>
      </ol>

      <h2>結論</h2>
      <p>內容行銷的 ROI 需要時間累積，但只要持續追蹤和優化，長期回報是非常可觀的。建立清晰的衡量體系，讓團隊對內容投資充滿信心。</p>
    `,
  },
  {
    id: 'short-video-marketing-trends',
    title: '短影音行銷趨勢與製作技巧：抓住 15 秒黃金注意力',
    category: '數位行銷',
    tags: ['短影音', 'Reels', 'TikTok', '影音行銷', '社群經營'],
    excerpt: '短影音已成為品牌行銷的必備形式。掌握短影音的製作技巧、腳本結構和投放策略，讓品牌在滑動時代脫穎而出。',
    coverImage: 'https://images.unsplash.com/photo-1626544827763-d516dce335e2?w=800&h=450&fit=crop',
    author: 'Zeona Studio',
    publishedAt: '2026-01-22',
    updatedAt: '2026-01-22',
    readingTime: 7,
    seo: {
      title: '短影音行銷趨勢與製作技巧 | Zeona Studio',
      description: '掌握短影音的製作技巧、腳本結構和投放策略，讓品牌在滑動時代脫穎而出。',
      keywords: '短影音行銷, Reels行銷, TikTok行銷, 影音製作, 社群短影音',
      ogImage: 'https://images.unsplash.com/photo-1626544827763-d516dce335e2?w=1200&h=630&fit=crop',
    },
    content: `
      <h2>為什麼品牌必須掌握短影音？</h2>
      <p>在注意力經濟的時代，短影音已成為最有效觸及用戶的內容形式。Instagram Reels、TikTok、YouTube Shorts 的日均觀看量持續創新高。數據顯示，短影音的平均互動率是靜態貼文的 <strong>3 倍以上</strong>。</p>

      <h2>高效短影音的腳本結構</h2>

      <h3>黃金三秒法則</h3>
      <p>觀眾會在前 3 秒決定是否繼續觀看，因此開頭至關重要。有效的開頭技巧：</p>
      <ul>
        <li>提出引人好奇的問題</li>
        <li>展示令人震撼的結果（Before/After）</li>
        <li>使用熱門音效或流行梗</li>
        <li>直接切入痛點</li>
      </ul>

      <h3>內容主體：AIDA 架構</h3>
      <p>即使是 15 秒的影片，也可以套用 AIDA 架構：</p>
      <ol>
        <li><strong>Attention (注意)：</strong>前 3 秒的 Hook</li>
        <li><strong>Interest (興趣)：</strong>展示問題或痛點</li>
        <li><strong>Desire (慾望)：</strong>呈現解決方案或成果</li>
        <li><strong>Action (行動)：</strong>明確的 CTA 呼籲</li>
      </ol>

      <h3>結尾的號召行動</h3>
      <p>每支短影音都需要清楚的 CTA，例如：「追蹤獲取更多技巧」、「留言告訴我你的想法」、「點擊主頁連結了解更多」。</p>

      <h2>製作技巧與工具推薦</h2>
      <ul>
        <li><strong>拍攝：</strong>使用自然光，保持畫面穩定，豎屏 9:16 比例</li>
        <li><strong>剪輯：</strong>CapCut 是最受歡迎的免費剪輯工具</li>
        <li><strong>字幕：</strong>85% 的用戶靜音觀看，字幕必不可少</li>
        <li><strong>音樂：</strong>使用平台熱門音效可以增加曝光</li>
        <li><strong>節奏：</strong>快速切換畫面，保持視覺刺激</li>
      </ul>

      <h2>投放策略</h2>
      <p>短影音除了自然觸及，也可以透過廣告投放擴大效益。建議做法：</p>
      <ol>
        <li>先發布自然內容，觀察數據表現</li>
        <li>篩選互動率高的影片進行付費推廣</li>
        <li>設定精準的受眾定位</li>
        <li>A/B 測試不同的封面和文案</li>
      </ol>

      <h2>結論</h2>
      <p>短影音是品牌與年輕受眾溝通的最佳橋樑。保持持續產出，根據數據不斷優化，你的品牌也能在短影音時代大放異彩。</p>
    `,
  },

  // ===== 網站開發 =====
  {
    id: 'nuxt3-fullstack-development-guide',
    title: 'Nuxt 3 全端開發完整教學：從零建立現代化 Web 應用',
    category: '網站開發',
    tags: ['Nuxt 3', 'Vue.js', '全端開發', 'SSR', 'TypeScript'],
    excerpt:
      '從專案初始化到部署上線，手把手教你使用 Nuxt 3 + TypeScript 建立高效能的全端 Web 應用，涵蓋 SSR、API 路由與效能優化。',
    coverImage: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=450&fit=crop',
    author: 'Zeona Studio',
    publishedAt: '2026-02-20',
    updatedAt: '2026-02-20',
    readingTime: 12,
    seo: {
      title: 'Nuxt 3 全端開發完整教學 | Zeona Studio',
      description:
        '從專案初始化到部署上線，使用 Nuxt 3 + TypeScript 建立高效能的全端 Web 應用，涵蓋 SSR、API 路由與效能優化。',
      keywords: 'Nuxt 3教學, Vue.js全端開發, SSR, TypeScript, 網站開發教學',
      ogImage: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=1200&h=630&fit=crop',
    },
    content: `
      <h2>為什麼選擇 Nuxt 3？</h2>
      <p>Nuxt 3 是基於 Vue 3 的全端框架，結合了最新的 Web 開發技術。它提供了開箱即用的 SSR（伺服器端渲染）、自動路由、TypeScript 支援，以及極致的開發體驗。</p>
      <p>對於需要 SEO 友好、高效能的網站，Nuxt 3 是目前最佳選擇之一。</p>

      <h2>專案初始化與基礎設定</h2>
      <h3>建立新專案</h3>
      <p>使用 Nuxt CLI 可以快速建立新專案：</p>
      <pre><code>npx nuxi@latest init my-project
cd my-project
pnpm install
pnpm dev</code></pre>

      <h3>TypeScript 配置</h3>
      <p>Nuxt 3 原生支援 TypeScript，只需確保 tsconfig.json 繼承 Nuxt 的配置即可。善用 TypeScript 的型別系統可以大幅減少執行期錯誤。</p>

      <h2>核心概念</h2>

      <h3>檔案式路由（File-based Routing）</h3>
      <p>Nuxt 3 根據 pages/ 目錄結構自動生成路由，無需手動配置：</p>
      <ul>
        <li><code>pages/index.vue</code> → <code>/</code></li>
        <li><code>pages/about.vue</code> → <code>/about</code></li>
        <li><code>pages/blog/[id].vue</code> → <code>/blog/:id</code></li>
      </ul>

      <h3>自動匯入（Auto Imports）</h3>
      <p>Nuxt 3 會自動匯入 Vue 的組合式 API、Nuxt 工具函式和自訂 composables，不需要手動 import。</p>

      <h3>伺服器端渲染（SSR）</h3>
      <p>SSR 是 Nuxt 3 的核心優勢。頁面先在伺服器端渲染完整的 HTML，提供最佳的 SEO 和首屏載入速度，再透過 Hydration 接管為互動式應用。</p>

      <h2>進階功能</h2>
      <h3>API 路由</h3>
      <p>Nuxt 3 的 server/ 目錄讓你可以直接建立 API 端點，無需額外設定後端伺服器。這對於小到中型專案非常實用。</p>

      <h3>狀態管理</h3>
      <p>使用 useState 可以建立跨元件的共享狀態。對於複雜的狀態管理需求，也可以搭配 Pinia 使用。</p>

      <h3>效能優化</h3>
      <ul>
        <li>使用 NuxtImage 進行圖片優化</li>
        <li>實作元件的 Lazy Loading</li>
        <li>善用快取策略減少 API 呼叫</li>
        <li>使用 Lighthouse 檢測效能分數</li>
      </ul>

      <h2>部署方案</h2>
      <p>Nuxt 3 支援多種部署方式：</p>
      <ol>
        <li><strong>Vercel：</strong>一鍵部署，零配置</li>
        <li><strong>Netlify：</strong>靜態網站的最佳選擇</li>
        <li><strong>AWS / GCP：</strong>企業級部署方案</li>
        <li><strong>Docker：</strong>容器化部署，方便擴展</li>
      </ol>

      <h2>結論</h2>
      <p>Nuxt 3 是現代化 Web 開發的利器。掌握其核心概念和進階功能，就能高效建立出色的網站應用。</p>
    `,
  },
  {
    id: 'website-performance-optimization',
    title: '網站效能優化全攻略：讓 Core Web Vitals 全部達標',
    category: '網站開發',
    tags: ['效能優化', 'Core Web Vitals', 'LCP', 'CLS', 'FID'],
    excerpt: '網站載入速度直接影響使用者體驗和 SEO 排名。深入了解 Core Web Vitals 的三大指標，並學習實際的優化技巧。',
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop',
    author: 'Zeona Studio',
    publishedAt: '2026-02-10',
    updatedAt: '2026-02-10',
    readingTime: 10,
    seo: {
      title: '網站效能優化全攻略：Core Web Vitals 達標教學 | Zeona Studio',
      description: '深入了解 Core Web Vitals 的三大指標 LCP、CLS、INP，並學習實際的網站效能優化技巧。',
      keywords: '網站效能優化, Core Web Vitals, LCP優化, CLS修復, 網頁載入速度',
      ogImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop',
    },
    content: `
      <h2>為什麼網站效能如此重要？</h2>
      <p>Google 的研究顯示，當頁面載入時間從 1 秒增加到 3 秒，跳出率增加 32%；增加到 5 秒，跳出率增加 90%。此外，Core Web Vitals 已成為 Google 搜尋排名因素之一。</p>

      <h2>Core Web Vitals 三大指標</h2>

      <h3>LCP（Largest Contentful Paint）</h3>
      <p>衡量最大內容元素的載入時間。目標是在 <strong>2.5 秒內</strong>完成。常見的 LCP 元素包括：大型圖片、視訊、大區塊文字。</p>
      <p>優化方法：</p>
      <ul>
        <li>使用 WebP/AVIF 格式壓縮圖片</li>
        <li>實作圖片 lazy loading，但 LCP 圖片要 eager loading</li>
        <li>使用 CDN 加速資源載入</li>
        <li>優化伺服器回應時間（TTFB）</li>
      </ul>

      <h3>INP（Interaction to Next Paint）</h3>
      <p>取代了 FID，衡量使用者互動的整體回應性，目標是在 <strong>200 毫秒內</strong>。</p>
      <p>優化方法：</p>
      <ul>
        <li>減少 JavaScript 執行時間</li>
        <li>使用 Web Workers 處理複雜運算</li>
        <li>優化事件監聽器的效率</li>
        <li>避免在主執行緒上進行長時間的任務</li>
      </ul>

      <h3>CLS（Cumulative Layout Shift）</h3>
      <p>衡量視覺穩定性，目標值在 <strong>0.1 以下</strong>。頁面元素的意外位移會嚴重影響使用體驗。</p>
      <p>優化方法：</p>
      <ul>
        <li>為圖片和影片指定明確的尺寸</li>
        <li>避免在既有內容上方插入新內容</li>
        <li>使用 font-display: swap 處理字型載入</li>
        <li>避免使用會導致重排的 CSS 動畫</li>
      </ul>

      <h2>通用效能優化技巧</h2>
      <ol>
        <li><strong>程式碼分割（Code Splitting）：</strong>只載入當前頁面需要的程式碼</li>
        <li><strong>資源壓縮：</strong>啟用 Gzip/Brotli 壓縮</li>
        <li><strong>瀏覽器快取：</strong>設定適當的 Cache-Control 標頭</li>
        <li><strong>預連接（Preconnect）：</strong>提前建立與第三方服務的連線</li>
        <li><strong>關鍵 CSS 內嵌：</strong>將首屏所需的 CSS 直接嵌入 HTML</li>
      </ol>

      <h2>檢測工具</h2>
      <ul>
        <li><strong>Google PageSpeed Insights：</strong>最全面的效能評估工具</li>
        <li><strong>Chrome DevTools Lighthouse：</strong>開發階段的即時檢測</li>
        <li><strong>Web Vitals 擴充功能：</strong>瀏覽器即時監控</li>
        <li><strong>GTmetrix：</strong>進階效能分析與歷史追蹤</li>
      </ul>

      <h2>結論</h2>
      <p>網站效能優化是一個持續的過程。定期檢測、持續優化，確保使用者和搜尋引擎都能獲得最佳體驗。</p>
    `,
  },
  {
    id: 'responsive-web-design-best-practices',
    title: '響應式網頁設計最佳實踐：打造完美跨裝置體驗',
    category: '網站開發',
    tags: ['RWD', '響應式設計', 'CSS', 'Mobile First', 'UX'],
    excerpt:
      '在行動裝置流量超過桌面端的時代，響應式設計不再是選項而是必須。學習 Mobile First 設計思維和現代 CSS 技巧。',
    coverImage: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=450&fit=crop',
    author: 'Zeona Studio',
    publishedAt: '2026-01-25',
    updatedAt: '2026-01-25',
    readingTime: 8,
    seo: {
      title: '響應式網頁設計最佳實踐：打造完美跨裝置體驗 | Zeona Studio',
      description: '學習 Mobile First 設計思維和現代 CSS 技巧，打造完美的跨裝置網頁體驗。',
      keywords: '響應式設計, RWD, Mobile First, CSS Grid, 跨裝置設計',
      ogImage: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&h=630&fit=crop',
    },
    content: `
      <h2>Mobile First：從小螢幕開始設計</h2>
      <p>Mobile First 不只是一種技術策略，更是一種設計思維。當你從最小的螢幕開始設計，被迫要做出內容的優先排序，這反而能讓整體設計更加精煉和聚焦。</p>

      <h2>現代 CSS 響應式技巧</h2>

      <h3>CSS Grid 與 Flexbox</h3>
      <p>CSS Grid 和 Flexbox 是建立響應式佈局的兩大利器。Grid 適合二維佈局（行列同時控制），Flexbox 適合一維佈局（行或列）。</p>
      <pre><code>/* CSS Grid 響應式範例 */
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}</code></pre>
      <p>這段 CSS 可以自動根據容器寬度調整欄位數量，無需寫任何媒體查詢。</p>

      <h3>CSS Container Queries</h3>
      <p>2026 年，Container Queries 已獲得所有主流瀏覽器支援，這是響應式設計的重大突破。它允許元素根據其容器（而非視窗）的大小進行樣式調整。</p>

      <h3>clamp() 函數</h3>
      <p>clamp() 函數可以建立流暢的響應式字體大小和間距：</p>
      <pre><code>/* 字體在 16px 到 24px 之間流暢縮放 */
font-size: clamp(1rem, 2.5vw, 1.5rem);</code></pre>

      <h2>響應式設計的常見誤區</h2>
      <ul>
        <li><strong>只測試常見斷點：</strong>應該測試各種寬度，而不只是 375px、768px、1024px</li>
        <li><strong>忽略觸控體驗：</strong>按鈕和連結的點擊區域至少 44×44px</li>
        <li><strong>文字過小：</strong>手機上的正文字體不應小於 16px</li>
        <li><strong>水平滾動：</strong>確保沒有元素超出視窗寬度</li>
        <li><strong>忽略橫向模式：</strong>手機橫向持握時的顯示也需要測試</li>
      </ul>

      <h2>效能面的響應式考量</h2>
      <h3>響應式圖片</h3>
      <p>不同裝置載入不同尺寸的圖片，避免手機載入桌面版的大圖：</p>
      <pre><code>&lt;picture&gt;
  &lt;source media="(max-width: 767px)" srcset="image-mobile.webp"&gt;
  &lt;source media="(min-width: 768px)" srcset="image-desktop.webp"&gt;
  &lt;img src="image-desktop.webp" alt="描述"&gt;
&lt;/picture&gt;</code></pre>

      <h3>條件載入</h3>
      <p>某些功能在手機上不需要（如複雜的動畫效果），可以使用 JavaScript 或 CSS 條件載入。</p>

      <h2>測試工具與流程</h2>
      <ol>
        <li>Chrome DevTools 裝置模擬器</li>
        <li>BrowserStack 跨裝置實機測試</li>
        <li>Responsively App 同步多裝置預覽</li>
        <li>真實裝置測試（至少涵蓋 iOS 和 Android）</li>
      </ol>

      <h2>結論</h2>
      <p>響應式設計是現代網頁開發的基本功。用 Mobile First 的思維出發，善用現代 CSS 技術，就能打造出色的跨裝置體驗。</p>
    `,
  },
  {
    id: 'web-security-essentials-for-business',
    title: '企業網站安全防護指南：從 HTTPS 到資料保護的完整策略',
    category: '網站開發',
    tags: ['網站安全', 'HTTPS', 'XSS', 'CSRF', '資安防護'],
    excerpt: '網站安全是企業信譽的基石。從基本的 HTTPS 設定到進階的攻擊防護，全面了解保護網站和用戶資料的關鍵措施。',
    coverImage: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=450&fit=crop',
    author: 'Zeona Studio',
    publishedAt: '2026-01-18',
    updatedAt: '2026-01-18',
    readingTime: 10,
    seo: {
      title: '企業網站安全防護指南 | Zeona Studio',
      description: '從 HTTPS 到進階攻擊防護，全面了解保護企業網站和用戶資料的關鍵安全措施。',
      keywords: '網站安全, HTTPS, XSS防護, CSRF防護, 企業資安',
      ogImage: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1200&h=630&fit=crop',
    },
    content: `
      <h2>為什麼網站安全對企業至關重要？</h2>
      <p>一次安全事件可能造成客戶資料外洩、品牌信譽受損和巨額罰款。根據統計，中小企業在遭受網路攻擊後，有 <strong>60%</strong> 會在六個月內倒閉。預防永遠比補救更重要。</p>

      <h2>基礎安全措施</h2>

      <h3>HTTPS 是基本配備</h3>
      <p>HTTPS 不只是加密傳輸，更是用戶信任的基本標誌：</p>
      <ul>
        <li>申請和安裝 SSL/TLS 憑證（Let's Encrypt 免費方案）</li>
        <li>強制將 HTTP 重導向到 HTTPS</li>
        <li>設定 HSTS 標頭防止降級攻擊</li>
        <li>定期更新和續約憑證</li>
      </ul>

      <h3>安全標頭設定</h3>
      <p>HTTP 安全標頭是最容易實施但經常被忽視的防護措施：</p>
      <ul>
        <li><strong>Content-Security-Policy：</strong>控制資源載入來源，防止 XSS</li>
        <li><strong>X-Frame-Options：</strong>防止網站被嵌入其他頁面（Clickjacking）</li>
        <li><strong>X-Content-Type-Options：</strong>防止 MIME 類型嗅探</li>
        <li><strong>Referrer-Policy：</strong>控制 Referer 資訊的傳送</li>
      </ul>

      <h2>常見網站攻擊與防護</h2>

      <h3>XSS（跨站腳本攻擊）</h3>
      <p>攻擊者將惡意腳本注入到網頁中，竊取用戶資料或操控頁面。防護方法：</p>
      <ol>
        <li>對所有用戶輸入進行淨化（Sanitize）</li>
        <li>使用 Content Security Policy 限制腳本來源</li>
        <li>使用模板引擎的自動轉義功能</li>
        <li>設定 HttpOnly 和 Secure 的 Cookie 屬性</li>
      </ol>

      <h3>CSRF（跨站請求偽造）</h3>
      <p>攻擊者誘騙用戶在已登入的狀態下執行非預期的操作。防護方法：</p>
      <ul>
        <li>使用 CSRF Token 驗證請求來源</li>
        <li>設定 SameSite Cookie 屬性</li>
        <li>驗證 Referer 和 Origin 標頭</li>
      </ul>

      <h3>SQL Injection（SQL 注入）</h3>
      <p>透過惡意的 SQL 查詢語句存取或修改資料庫。防護方法：</p>
      <ul>
        <li>使用參數化查詢（Prepared Statements）</li>
        <li>使用 ORM 框架產生 SQL</li>
        <li>實施最小權限原則的資料庫帳號管理</li>
      </ul>

      <h2>資料保護</h2>
      <p>用戶資料的保護不只是技術問題，更涉及法規遵循：</p>
      <ul>
        <li>密碼使用 bcrypt 等強力雜湊演算法儲存</li>
        <li>敏感資料加密儲存</li>
        <li>實施定期備份策略</li>
        <li>遵循 GDPR / 個資法相關規範</li>
        <li>設立安全事件應變計畫</li>
      </ul>

      <h2>結論</h2>
      <p>網站安全需要多層次的防護策略。從基本的 HTTPS 和安全標頭開始，逐步建立完整的安全體系，保護你的企業和客戶。</p>
    `,
  },
]

// 取得所有標籤（去重）
export const allTags = [...new Set(blogPosts.flatMap((post) => post.tags))]

// 依分類取得文章
export function getPostsByCategory(category: string): BlogPost[] {
  if (category === '全部') return blogPosts
  return blogPosts.filter((post) => post.category === category)
}

// 依 ID 取得文章
export function getPostById(id: string): BlogPost | undefined {
  return blogPosts.find((post) => post.id === id)
}

// 取得推薦文章（排除目前文章，同分類優先）
export function getRecommendedPosts(currentId: string, limit = 3): BlogPost[] {
  const current = getPostById(currentId)
  if (!current) return blogPosts.slice(0, limit)

  const sameCategoryPosts = blogPosts.filter((post) => post.id !== currentId && post.category === current.category)
  const otherPosts = blogPosts.filter((post) => post.id !== currentId && post.category !== current.category)

  return [...sameCategoryPosts, ...otherPosts].slice(0, limit)
}

// 搜尋文章
export function searchPosts(keyword: string): BlogPost[] {
  const lowerKeyword = keyword.toLowerCase()
  return blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(lowerKeyword) ||
      post.excerpt.toLowerCase().includes(lowerKeyword) ||
      post.tags.some((tag) => tag.toLowerCase().includes(lowerKeyword)),
  )
}
