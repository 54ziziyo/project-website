const images = import.meta.glob('~/assets/images/portfolio/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const getImageUrl = (name: string) => {
  const path = `/assets/images/portfolio/${name}`
  return images[path] || ''
}

export interface Portfolio {
  id: string
  title: string
  category: string
  description: string
  shortDesc: string
  features: string[]
  techStack: string[]
  image: string
  dataScreenshots?: string[]
  link: string
  websiteLink: string
  flowchartLink?: string
  instagramEmbed?: string | null
}

export const portfolios: Portfolio[] = [
  {
    id: 'luxetravel',
    title: 'Luxe Travel 歐洲旅遊平台',
    category: '網站架設',
    shortDesc: '頂級歐洲旅遊規劃服務',
    description: `Luxe Travel 是專精於歐洲度假的頂級旅遊規劃平台。提供多元化的旅遊服務，包括精選團體旅遊、客製化自由行和豪華郵輪，旨在滿足旅客對完美旅程的所有嚮往。<br /><br />在各大旅遊論壇上獲得了卓越的聲譽和好評。至今已幫助多名旅客實現探索歐洲的夢想，並為數百對新人打造難忘的蜜月之旅。`,
    features: ['精選團體旅遊方案', '客製化自由行規劃', '豪華郵輪行程', 'SEO 優化與搜尋排名', '響應式設計體驗'],
    techStack: ['Next.js', 'React', 'Restful API', 'HTML', 'CSS', 'Vercel', 'RWD', 'SEO', 'Tailwind CSS'],
    image: getImageUrl('luxetravel_dev.jpg'),
    link: '/works/luxetravel',
    websiteLink: 'https://luxetravel-frontend.vercel.app/',
  },
  {
    id: 'levert',
    title: 'Levert 益生菌電商平台',
    category: '網站架設',
    shortDesc: '專業保健品線上購物體驗',
    description: `Levert 益生菌提供無縫的線上購物體驗，具備專屬會員計畫、直覺化的產品預覽和簡化的結帳流程。<br/><br/>品牌堅定承諾打造真正有效的美容保健品，不含人工色素、香料或甜味劑，為消費者帶來最純淨的健康選擇。`,
    features: ['電商購物車', '直覺化產品瀏覽', '簡化結帳流程', '產品輪播展示', 'API 整合串接'],
    techStack: ['Nuxt', 'HTML', 'CSS', 'Vue', 'Swiper', 'Restful API', 'Figma'],
    image: getImageUrl('levert_dev.jpg'),
    link: '/works/levert',
    websiteLink: 'https://levertlabs.com/',
  },
  {
    id: 'miniclub',
    title: 'Miniclub 旅遊服務平台',
    category: '品牌官網',
    shortDesc: '專業顧問旅遊規劃服務',
    description: `體驗兩全其美的旅遊方式——完整的行程彈性與專業團體旅遊的可靠便利，專業顧問為你打造專屬旅遊，省去訂房和駕駛的麻煩。<br/><br/>透過最完整精緻的導遊服務，致力為顧客提供最輕鬆、最享受的旅遊體驗。`,
    features: ['彈性客製化行程', '專車接送服務', '專業顧問規劃', 'SEO 搜尋優化', '響應式網頁設計'],
    techStack: ['SEO', 'Tailwind CSS', 'SASS', 'Vue', 'RWD', 'Nuxt', 'HTML'],
    image: getImageUrl('miniclub_dev.jpg'),
    link: '/works/miniclub',
    websiteLink: 'https://miniclub.discoveredtravel.com.tw/',
  },
  {
    id: 'funlooker',
    title: 'Funlooker 全球夜生活指南',
    category: '品牌官網',
    shortDesc: '探索全球夜生活的最佳平台',
    description: `Funlooker 是一個全球夜生活指南平台，幫助使用者探索世界各地的酒吧、俱樂部、派對和獨特的娛樂場所，包括伴遊服務和專屬體驗。<br/><br/>無論是旅行者還是當地居民，都能在這裡找到從主流社交場所到各個娛樂的全方位資訊。`,
    features: [
      '全球娛樂場所搜尋與篩選',
      '多語系介面支援',
      '互動式地圖導覽',
      '用戶評價與推薦系統',
      '遊玩/場所/交友配對平台',
    ],
    techStack: ['Axios', 'Vue-i18n', 'Vant', 'Nuxt', 'HTML', 'CSS', 'Vue', 'Swiper', 'Vue-router', 'Figma'],
    image: getImageUrl('funlooker_pro.png'),
    link: '/works/funlooker',
    websiteLink: 'https://funlooker.co',
  },
  {
    id: 'fantasi',
    title: 'Fantasi 創作者交流平台',
    category: '網站架設',
    shortDesc: '創作者與粉絲的獨特交流空間',
    description: `Fantasi.one 是一個專為創作者與粉絲打造的獨特交流空間，創作者可以在平台上分享精彩的影片內容。<br/><br/>粉絲則可透過訂閱或單次購買的方式，取得專屬的獨家內容存取權限。平台致力於建立創作者與粉絲之間更緊密的連結，讓創作價值得到更好的實現。`,
    features: [
      '此網站為成人網站, 禁止未滿 18 歲進入',
      '創作者內容管理系統',
      '訂閱制與單次購買功能',
      '多語系支援 (Vue-i18n)',
      '會員管理與認證系統',
      '安全的金流整合',
    ],
    techStack: ['vue-gtm', 'vee-validate', 'Pinia', 'Vue-i18n', 'Vue-router', 'Figma', 'SCSS', 'Vue', 'Axios'],
    image: getImageUrl('fantasi_pro.png'),
    link: '/works/fantasi',
    websiteLink: 'https://www.fantasigloble.com',
    flowchartLink:
      'https://www.figma.com/file/W14AyPCjUNNQXD0vGJGbqa/Wireframe?type=whiteboard&node-id=0%3A1&t=lvUa01celevNQyTo-1',
  },
  {
    id: 'vida-creator-platform',
    title: 'Vida 創作者平台',
    category: '網站架設',
    shortDesc: '創作者主導的互動訂閱平台',
    description: `VIDA 是一個以創作者為中心的平台，提供粉絲觀看、評論功能，創作者可透過「設定付款」或「天數訂閱」功能吸引流量並變現。`,
    features: ['訂閱制付費功能', '創作者天數訂閱方案', '多語系支援 (Vue-i18n)', '內容包裝與推廣邏輯'],
    techStack: ['Vant', 'Vuex', 'Swiper', 'Figma', 'Nuxt', 'Vue', 'Vue-i18n', 'Axios'],
    image: getImageUrl('vida_dev.png'),
    link: '/works/vida-creator-platform',
    websiteLink: 'https://vida.pub',
    flowchartLink: 'https://www.figma.com/file/Uyyom25m2tINK3BKYmxohF/Vida?type=whiteboard&node-id=0%3A1',
  },
  {
    id: 'freelance',
    title: 'Zeona Studio 官方網站',
    category: '文宣設計',
    shortDesc: '一站式數位服務平台',
    description: `Zeona 提供一站式數位服務，涵蓋品牌建立、網站開發與數位行銷。從 0 到 1，我提供多種量身定制的方案，滿足顧客需求。無論是初創品牌還是成熟企業，我都能協助您在數位世界中建立強大的品牌形象。`,
    features: [
      '響應式網頁設計 (RWD)',
      'SEO 搜尋引擎優化',
      '流暢的動畫效果 (Lottiefiles)',
      '現代化 UI/UX 設計',
      '聯繫表單與驗證',
    ],
    techStack: ['Vercel', 'Lottiefiles', 'UI/UX', 'Nuxt', 'HTML', 'CSS', 'Vue', 'RWD', 'SEO', 'Tailwind CSS', 'Figma'],
    image: getImageUrl('freelance_pro.jpg'),
    link: '/works/freelance',
    websiteLink: 'https://project-website-sigma.vercel.app/',
  },
  {
    id: 'photographer-studio',
    title: '攝影工作室作品集網站',
    category: '網站架設',
    shortDesc: '互動式影像作品展示平台',
    description: `為攝影師量身打造的作品集網站。首頁具備互動效果，使用者只需懸停在項目縮略圖上即可預覽影片內容。系統使用 Google Sheets 作為輕量化 CMS，讓攝影師無需維護複雜後台即可即時更新內容。`,
    features: [
      '互動式影片預覽功能',
      'Google Sheets API 資料對接',
      '無後台輕量化管理系統',
      '高效能影片載入優化',
      'Vercel 自動化部署',
    ],
    techStack: ['Google Sheets API', 'Video Interaction', 'Nuxt.js', 'Vue.js', 'Vercel', 'RWD'],
    image: getImageUrl('photography_dev.jpg'),
    link: '/works/photographer-studio',
    websiteLink: 'https://zenoaworks.vercel.app/',
  },
  {
    id: 'taiwan-travel-guide',
    title: '台灣旅遊景點指南',
    category: '網站架設',
    shortDesc: '實作最新技術的互動地圖',
    description: `積極實踐新技術的 Side Project。具備導航篩選功能，讓訪客能輕鬆搜尋景點資訊。整合地圖圖資並可加入我的最愛清單，提供直覺的台灣地理位置查詢體驗。`,
    features: [
      '互動式地圖串接 (Leaflet)',
      '景點類別過濾篩選',
      'Pinia 狀態管理',
      'NaiveUI 組件庫應用',
      'Vercel 自動化部署',
    ],
    techStack: [
      'NaiveUI',
      'Leaflet',
      'VITE',
      'Figma',
      'HTML',
      'SCSS',
      'Vue',
      'RWD',
      'TailwindCss',
      'Axios',
      'Pinia',
      'Vue-Router',
      'Vercel Deploy',
    ],
    image: getImageUrl('travelTw_dev.png'),
    link: '/works/taiwan-travel-guide',
    websiteLink: 'https://travel-tw.vercel.app',
  },
  {
    id: 'roml-life-reels-hud',
    title: '【短影片】HUD 抬頭顯示器',
    category: '行銷營運',
    shortDesc: '影片截至2026年2月1日，達成 1,006,822 觀看',
    description: `這篇 Reels 專注於展示產品特色細節，並產生話題性與觀看者互動。<br /><br />
    根據後台數據顯示（下圖）：<br />
    1. 觀看數：突破 1,006,822 次。<br />
    2. 轉換率：帶動 + 1,054 位追蹤。<br />
    3. 互動率：71,301 次，顯示內容具有高度轉發價值。<br />
    4. 平均觀看時間：達 19 秒，顯示內容吸引力強。<br />
    5. 分享次數：27,098 次。<br />
    6. 儲存次數：3,332 次。<br />
    7. 評論數：301 則。
    `,
    features: ['特色商品介紹', '數據導向腳本', '後台數據追蹤分析'],
    techStack: ['CapCut', 'Strategy Planning', 'Instagram Edits'],
    image: getImageUrl('roml-life-reels-hud.jpg'),
    dataScreenshots: [
      getImageUrl('roml-life-reels-hud_01.jpg'),
      getImageUrl('roml-life-reels-hud_02.jpg'),
      getImageUrl('roml-life-reels-hud_03.jpg'),
    ],
    link: '/works/roml-life-reels-hud',
    websiteLink: 'https://www.instagram.com/reel/DLcX9Yzyv95/',
    instagramEmbed: 'DLcX9Yzyv95',
  },
  {
    id: 'roml-life-reels-arai-neko',
    title: '【短影片】Arai 貓貓安全帽',
    category: '行銷營運',
    shortDesc: '影片截至2026年2月1日，達成 311,560 觀看',
    description: `這篇 Reels 專注於展示產品特色細節，將「價格資訊」或「商品詳情」當作誘餌，吸引潛在客戶主動留下資訊，藉此收集有效潛在客戶名單。<br /><br />
    將公開平台的流量引導至私密的私訊對話框，建立自己的「私域流量池」，方便後續進行長期的追蹤與銷售。<br /><br />
    這種「在對話中成交」的手法，能大幅降低顧客跳轉到外部官網時產生的流失率。
。<br /><br />
    根據後台數據顯示（下圖）：<br />
    1. 觀看數：突破 311,560 次。<br />
    2. 轉換率：帶動 + 507 位追蹤。<br />
    3. 互動率：16,304 次，顯示內容具有高度轉發價值。<br />
    4. 平均觀看時間： 7 秒。<br />
    5. 分享次數：6,408 次。<br />
    6. 儲存次數：588 次。<br />
    7. 評論數：652 則。
    `,
    features: ['特色商品介紹', '第三方工具自動回覆', '數據導向腳本', '後台數據追蹤分析'],
    techStack: ['ManyChat ', 'CapCut', 'Strategy Planning', 'Instagram Edits'],
    image:
      'https://scontent-tpe1-1.cdninstagram.com/v/t51.71878-15/600209016_1118381913568907_5962086777417431337_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=100&ig_cache_key=Mzc4ODE0MjIxNTQ3NTM2NDg2OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHgxMTM2LnNkci5DMyJ9&_nc_ohc=s61Jx9QiqpUQ7kNvwHIDH3z&_nc_oc=Adnqp0oggteB0rKQMWnJuqyzaJvCJAu6h1dYfYPD4pZ8sYNYqtzU1WiwksFq3vAPJ5U&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-tpe1-1.cdninstagram.com&_nc_gid=qtKs4Dd9ugNTA0xSCh2s-Q&oh=00_AftclbXERawqu4rJELEiaw1lSdgn1xcXKTe_P4wEvdOWqw&oe=698436B6',
    dataScreenshots: [
      getImageUrl('roml-life-reels-arai-neko_01.jpg'),
      getImageUrl('roml-life-reels-arai-neko_02.jpg'),
      getImageUrl('roml-life-reels-arai-neko_03.jpg'),
    ],
    link: '/works/roml-life-reels-arai-neko',
    websiteLink: 'https://www.instagram.com/reel/DSSL0ZIEgQE/',
    instagramEmbed: 'DSSL0ZIEgQE',
  },
  {
    id: 'roml-life-reels-electronic-dimming',
    title: '【短影片】電子調光防霧鏡片',
    category: '行銷營運',
    shortDesc: '影片截至2026年2月1日，達成 256,703 觀看',
    description: `這篇 Reels 專注於展示產品特色細節，將「價格資訊」或「商品詳情」當作誘餌，吸引潛在客戶主動留下資訊，藉此收集有效潛在客戶名單。<br /><br />
    將公開平台的流量引導至私密的私訊對話框，建立自己的「私域流量池」，方便後續進行長期的追蹤與銷售。<br /><br />
    這種「在對話中成交」的手法，能大幅降低顧客跳轉到外部官網時產生的流失率。<br /><br />
    根據後台數據顯示（下圖）：<br />
    1. 觀看數：突破 256,703 次。<br />
    2. 轉換率：帶動 + 707 位追蹤。<br />
    3. 互動率：17,411 次，顯示內容具有高度轉發價值。<br />
    4. 平均觀看時間：15 秒。<br />
    5. 分享次數：8,289 次。<br />
    6. 儲存次數：890 次。<br />
    7. 評論數：324 則。
    `,
    features: ['特色商品介紹', '第三方工具自動回覆', '數據導向腳本', '後台數據追蹤分析'],
    techStack: ['BotBonnie ', 'CapCut', 'Strategy Planning', 'Instagram Edits'],
    image:
      'https://scontent-tpe1-1.cdninstagram.com/v/t51.71878-15/615891746_872182862329933_2923751492766694805_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=110&ig_cache_key=MzgwOTE5NjU4MDM0MzQ4NTg0MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHgxMTM2LnNkci5DMyJ9&_nc_ohc=9AWgMK5Z6ZEQ7kNvwHpVg4j&_nc_oc=AdmTtjnbuTzjA2tI7kuqlropbNk7BGn_nv5I8iS3xYDcRWc22KxwRvvAgzx51Ipurjo&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-tpe1-1.cdninstagram.com&_nc_gid=BG0T81agWRM9wly58Vr5NA&oh=00_Afs_0I_gKlZRTg74VYkFc2WkmzdjEw1hZN9hZgywq0sZEQ&oe=69844E43',
    dataScreenshots: [
      getImageUrl('roml-life-reels-electronic-dimming_01.jpg'),
      getImageUrl('roml-life-reels-electronic-dimming_02.jpg'),
      getImageUrl('roml-life-reels-electronic-dimming_03.jpg'),
    ],
    link: '/works/roml-life-reels-electronic-dimming',
    websiteLink: 'https://www.instagram.com/reel/DTc_BubAZWQ/',
    instagramEmbed: 'DTc_BubAZWQ',
  },
  {
    id: 'roml-life-post-93-white',
    title: '【社群貼文】93 預購消息',
    category: '行銷營運',
    shortDesc: '文章截至2026年2月1日，達成 238,493 觀看',
    description: `這篇文章專注於展示新產品售價與預購，提供客人購買服務。<br /><br />
    根據後台數據顯示（下圖）：<br />
    1. 觀看數：突破 238,493 次。<br />
    2. 轉換率：帶動 117 位追蹤。<br />
    3. 按讚數：2,464 次<br />
    4. 互動率：4,524 次<br />
    5. 分享次數：1,869 次。<br />
    `,
    features: ['最新消息', '新聞洞察', '後台數據追蹤分析'],
    techStack: ['Adobe Photoshop', 'Background Removal', 'Instagram'],
    image:
      'https://scontent-tpe1-1.cdninstagram.com/v/t51.82787-15/587787659_18300027937250820_7406361695499187455_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ig_cache_key=Mzc3NDg2OTIzODUxMjI1NjMyMw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=yCGB5Yk15lIQ7kNvwFqfSBu&_nc_oc=Adn6dUBUr9SJ5za9KjCOyg2l45rX9AkXxCkEEVDHUc3O4PbtgzQ6hxlhvjpqoANr-mg&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-tpe1-1.cdninstagram.com&_nc_gid=l1YyRIYhAIYii3fUDAUKsA&oh=00_AfvUeJfa-Yf3EFPPazUiVaiN3Dv68U5PbHYIHDdMWvaLtQ&oe=6984100D',
    dataScreenshots: [
      getImageUrl('roml-life-post-93-white_01.jpg'),
      getImageUrl('roml-life-post-93-white_02.jpg'),
      getImageUrl('roml-life-post-93-white_03.jpg'),
    ],
    link: '/works/roml-life-post-93-white',
    websiteLink: 'https://www.instagram.com/reel/DRjB5SSkgJE/',
    instagramEmbed: 'DRjB5SSkgJE',
  },
  {
    id: 'roml-life-post-x15-valion',
    title: '【社群貼文】X15 停產撤回',
    category: '行銷營運',
    shortDesc: '文章截至2026年2月1日，達成 229,249 觀看',
    description: `這篇文章專注於即時消息洞察，了解行業最新資訊並發布大家注重的關鍵點。<br /><br />
    根據後台數據顯示（下圖）：<br />
    1. 觀看數：突破 229,249 次。<br />
    2. 轉換率：帶動 20 位追蹤。<br />
    3. 互動率：597 次<br />
    4. 分享次數：267 次。<br />
    `,
    features: ['最新消息', '新聞洞察', '後台數據追蹤分析'],
    techStack: ['Adobe Photoshop', 'Background Removal', 'Instagram'],
    image:
      'https://scontent-tpe1-1.cdninstagram.com/v/t51.82787-15/571801566_18295298098250820_3465781322117408831_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=100&ig_cache_key=Mzc1MTEzMzQ1Nzg5NzYzMjU4OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEyODB4MTI4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=sWNIMltBl7MQ7kNvwEmZIg4&_nc_oc=Adl6LOReIKnrNT0ygELowIMdBUc8GSN9H4EdoC4TKX9fh3V3CYqSa1vl4n0RaBhuGqI&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-tpe1-1.cdninstagram.com&_nc_gid=f2tcfCcERazDLINxKygngQ&oh=00_AfucA9YBMMiE32gBIoyvAfSOuk7477CTsoaZSWa-X2LPFQ&oe=69843B63',
    dataScreenshots: [
      getImageUrl('roml-life-post-x15-valion_01.jpg'),
      getImageUrl('roml-life-post-x15-valion_02.jpg'),
      getImageUrl('roml-life-post-x15-valion_03.jpg'),
    ],
    link: '/works/roml-life-post-x15-valion',
    websiteLink: 'https://www.instagram.com/reel/DQOtAQEEuMn/',
    instagramEmbed: 'DQOtAQEEuMn',
  },
  {
    id: 'roml-life-reels-shoei-helmet-bag',
    title: '【短影片】SHOEI 安全帽包',
    category: '行銷營運',
    shortDesc: '影片截至2026年2月1日，達成 177,092 觀看',
    description: `這篇 Reels 專注於展示產品特色細節，將「價格資訊」或「商品詳情」當作誘餌，吸引潛在客戶主動留下資訊，藉此收集有效潛在客戶名單。<br /><br />
    將公開平台的流量引導至私密的私訊對話框，建立自己的「私域流量池」，方便後續進行長期的追蹤與銷售。<br /><br />
    這種「在對話中成交」的手法，能大幅降低顧客跳轉到外部官網時產生的流失率。
。<br /><br />
    根據後台數據顯示（下圖）：<br />
    1. 觀看數：突破 177,092 次。<br />
    2. 轉換率：帶動 + 373 位追蹤。<br />
    3. 互動率：6,940 次，顯示內容具有高度轉發價值。<br />
    4. 平均觀看時間：8 秒。<br />
    5. 分享次數：1,883 次。<br />
    6. 儲存次數：497 次。<br />
    7. 評論數：214 則。
    `,
    features: ['特色商品介紹', '第三方工具自動回覆', '數據導向腳本', '後台數據追蹤分析'],
    techStack: ['BotBonnie ', 'CapCut', 'Strategy Planning', 'Instagram Edits'],
    image:
      'https://scontent-tpe1-1.cdninstagram.com/v/t51.71878-15/588077052_1483816362912189_1705714752995936222_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=105&ig_cache_key=Mzc3NDI0MDI4Njc4OTc4MTMxNQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHgxMTM2LnNkci5DMyJ9&_nc_ohc=-Aa3fkbHciYQ7kNvwGgvMdl&_nc_oc=AdnvilT66CNiRDAln4q6vAsSnHJ51R68gVt2wXFelAeQdnfsd7kXj5-RN8gvOSMIB4o&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-tpe1-1.cdninstagram.com&_nc_gid=m9-2DNiug-HQclaFer9YNg&oh=00_AfuygO-C1WoI6zl1jLgTG4PH2HcoLoJfn9miKws_oBs6RQ&oe=69842EE0',
    dataScreenshots: [
      getImageUrl('roml-life-reels-shoei-helmet-bag_01.jpg'),
      getImageUrl('roml-life-reels-shoei-helmet-bag_02.jpg'),
      getImageUrl('roml-life-reels-shoei-helmet-bag_03.jpg'),
    ],
    link: '/works/roml-life-reels-shoei-helmet-bag',
    websiteLink: 'https://www.instagram.com/reel/DRgy4tHEsdD/',
    instagramEmbed: 'DRgy4tHEsdD',
  },

  {
    id: 'roml-life-reels-fearless',
    title: '【短影片】SHOEI Fearless',
    category: '行銷營運',
    shortDesc: '影片截至2026年2月1日，達成 112,814 觀看',
    description: `這篇 Reels 專注於展示產品特色細節，將「價格資訊」或「商品詳情」當作誘餌，吸引潛在客戶主動留下資訊，藉此收集有效潛在客戶名單。<br /><br />
    將公開平台的流量引導至私密的私訊對話框，建立自己的「私域流量池」，方便後續進行長期的追蹤與銷售。<br /><br />
    這種「在對話中成交」的手法，能大幅降低顧客跳轉到外部官網時產生的流失率。
。<br /><br />
    根據後台數據顯示（下圖）：<br />
    1. 觀看數：突破 112,814 次。<br />
    2. 轉換率：帶動 + 269 位追蹤。<br />
    3. 互動率：7,841 次，顯示內容具有高度轉發價值。<br />
    4. 平均觀看時間： 10 秒。<br />
    5. 分享次數：3,113 次。<br />
    6. 儲存次數：358 次。<br />
    7. 評論數：193 則。
    `,
    features: ['特色商品介紹', '第三方工具自動回覆', '數據導向腳本', '後台數據追蹤分析'],
    techStack: ['ManyChat ', 'CapCut', 'Strategy Planning', 'Instagram Edits'],
    image:
      'https://scontent-tpe1-1.cdninstagram.com/v/t51.75761-15/514915671_18281067643250820_1069311716476630565_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=102&ig_cache_key=MzY2NjQwNDA3OTM2ODE0NTEyNw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MjU2MC5zZHIuQzMifQ%3D%3D&_nc_ohc=pqVNZFyy35gQ7kNvwEURI8d&_nc_oc=AdmzuX2JaA4aq0m1wsu7Sx2dA8FSYREiCpVI0X7mfQnr5xadTKj4tMliPwXa5PwzT5E&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-tpe1-1.cdninstagram.com&_nc_gid=CtupHVnxRIZVqlkA7ub2Ow&oh=00_AfujzGYKIDRvykKTeOQwNGlwwwRnQexDIoMlz2rpFI-Qxw&oe=69842EAD',
    dataScreenshots: [
      getImageUrl('roml-life-reels-fearless_01.jpg'),
      getImageUrl('roml-life-reels-fearless_02.jpg'),
      getImageUrl('roml-life-reels-fearless_03.jpg'),
    ],
    link: '/works/roml-life-reels-fearless',
    websiteLink: 'https://www.instagram.com/reel/DLhrxWxyAjn/',
    instagramEmbed: 'DLhrxWxyAjn',
  },
  {
    id: 'roml-life-post-2026-x15-price',
    title: '【社群貼文】2026 X15',
    category: '行銷營運',
    shortDesc: '文章截至2026年2月1日，達成 103,586 觀看',
    description: `這篇文章專注於展示新產品售價與預購，提供客人購買服務。<br /><br />
    根據後台數據顯示（下圖）：<br />
    1. 觀看數：突破 103,586 次。<br />
    2. 轉換率：帶動 25 位追蹤。<br />
    3. 按讚數：750 次<br />
    4. 互動率：1,356 次<br />
    5. 分享次數：501 次。<br />
    `,
    features: ['最新消息', '新聞洞察', '後台數據追蹤分析'],
    techStack: ['Adobe Photoshop', 'Background Removal', 'Instagram'],
    image:
      'https://scontent-tpe1-1.cdninstagram.com/v/t51.82787-15/622704882_18306196228250820_219446141875307859_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&ig_cache_key=MzgxOTUzNzM4NjAyODg3MDk0Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=rF5c3Pa1NmgQ7kNvwFhsNOm&_nc_oc=AdnuG-nJIY0Bp5EPHD78YkHqDT7d-8hD1j7cjkWjC6JHHKZn3ESRqmzSnZjlWvHESqk&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-tpe1-1.cdninstagram.com&_nc_gid=Ml9mxlNKEd2MVUu7ckvb8g&oh=00_AfsNr8GSh9yjGVsXObKu_lr515XBb0eza0QW28zaSiLECg&oe=698444AE',
    dataScreenshots: [
      getImageUrl('roml-life-post-2026-x15-price_01.jpg'),
      getImageUrl('roml-life-post-2026-x15-price_02.jpg'),
      getImageUrl('roml-life-post-2026-x15-price_03.jpg'),
    ],
    link: '/works/roml-life-post-2026-x15-price',
    websiteLink: 'https://www.instagram.com/reel/DUCkgJ9kwZ3/',
    instagramEmbed: 'DUCkgJ9kwZ3',
  },
  {
    id: 'roml-life-post-2025-shoei-z8-price',
    title: '【社群貼文】2025 SHOEI Z8',
    category: '行銷營運',
    shortDesc: '文章截至2026年2月1日，達成 91,710 觀看',
    description: `這篇文章專注於展示新產品售價與預購，提供客人購買服務。<br /><br />
    根據後台數據顯示（下圖）：<br />
    1. 觀看數：突破 91,710 次。<br />
    2. 轉換率：帶動 32 位追蹤。<br />
    3. 按讚數：
    4. 互動率：1,153 次<br />
    5. 分享次數：540 次。<br />
    6. 儲存次數：87 次。<br />
    `,
    features: ['特色商品介紹', '數據導向腳本', '後台數據追蹤分析'],
    techStack: ['Adobe Photoshop', 'Background Removal', 'Instagram'],
    image:
      'https://scontent-tpe1-1.cdninstagram.com/v/t51.82787-15/516280273_18281681974250820_5220020617825884959_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=100&ig_cache_key=MzY3MDcxMDI0NTA3MDE4NDk2NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=c2mhuEYihqcQ7kNvwH2wWCG&_nc_oc=AdkQvCMU4B5zZrXT_xpMAi6-3Miofd_wa9LsRhWwDVoCK5EnJV6Pt-DxdsutGS1qYvo&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-tpe1-1.cdninstagram.com&_nc_gid=TKi8YoEFxZDVxwa2KGXoVQ&oh=00_AfsXS4HkH3fVja7SxrH1kIDNQZ8C8j9CQEolBi3MZbaRrA&oe=69841FE7',
    dataScreenshots: [
      getImageUrl('roml-life-post-2025-shoei-z8-price_01.jpg'),
      getImageUrl('roml-life-post-2025-shoei-z8-price_02.jpg'),
      getImageUrl('roml-life-post-2025-shoei-z8-price_03.jpg'),
    ],
    link: '/works/roml-life-post-2025-shoei-z8-price',
    websiteLink: 'https://www.instagram.com/reel/DLw-4dCSB6l/',
    instagramEmbed: 'DLw-4dCSB6l',
  },
  {
    id: 'roml-life-post-Marquez9-pre-order',
    title: '【社群貼文】Marquez9 消息',
    category: '行銷營運',
    shortDesc: '文章截至2026年2月1日，達成 74,653 觀看',
    description: `這篇文章專注於即時消息洞察，了解行業最新資訊並發布大家注重的關鍵點。<br /><br />
    根據後台數據顯示（下圖）：<br />
    1. 觀看數：突破 74,653 次。<br />
    2. 轉換率：帶動 37 位追蹤。<br />
    3. 按讚數：1,211 次<br />
    4. 互動率：2,021 次<br />
    5. 分享次數：736 次。<br />
    `,
    features: ['最新消息', '新聞洞察', '後台數據追蹤分析'],
    techStack: ['Adobe Photoshop', 'Background Removal', 'Instagram'],
    image:
      'https://scontent-tpe1-1.cdninstagram.com/v/t51.82787-15/603885226_18302704657250820_6770991902417855223_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&ig_cache_key=Mzc5NDM5Njg2MTg0NDA3MzY0OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=eX9CPkWij3UQ7kNvwEHFvpb&_nc_oc=AdmxXbB2VOJFLXBVUDGZIV_PLscIFTYvaDBHCVhUQDfZ0hW0ifZApFS0wD7fyJo711U&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-tpe1-1.cdninstagram.com&_nc_gid=CtSKdeAxiico3w9Bdv7eog&oh=00_AfvctsNWj6YsnAuIj-4bjtnAnixQ7Ha940x6BtZs4CeGHQ&oe=69840C38',
    dataScreenshots: [
      getImageUrl('roml-life-post-marquez9-pre-order_01.jpg'),
      getImageUrl('roml-life-post-marquez9-pre-order_02.jpg'),
      getImageUrl('roml-life-post-marquez9-pre-order_03.jpg'),
    ],
    link: '/works/roml-life-post-Marquez9-pre-order',
    websiteLink: 'https://www.instagram.com/reel/DSoZ9mSEomO/',
    instagramEmbed: 'DSoZ9mSEomO',
  },
  {
    id: 'roml-life-reels-damper',
    title: '【短影片】車身減震拉桿',
    category: '行銷營運',
    shortDesc: '影片截至2026年2月1日，達成 48,436 觀看',
    description: `這篇 Reels 專注於展示功能細節，並產生話題性與觀看者互動。<br /><br />
    根據後台數據顯示（下圖）：<br />
    1. 觀看數：突破 48,436 次。<br />
    2. 轉換率：帶動 53 位追蹤。<br />
    3. 互動率：783 次。<br />
    4. 平均觀看時間：達 15 秒。<br />
    5. 分享次數：139 次。<br />
    `,
    features: ['特色商品介紹', '數據導向腳本', '後台數據追蹤分析'],
    techStack: ['CapCut', 'Strategy Planning', 'Instagram Edits'],
    image:
      'https://scontent-tpe1-1.cdninstagram.com/v/t51.82787-15/518717728_18282306091250820_2465015438347671627_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=107&ig_cache_key=MzY3NTA1MjY5MjM0ODcxODY0Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MjU2MC5zZHIuQzMifQ%3D%3D&_nc_ohc=TPr1XQKKgSEQ7kNvwEUS6qB&_nc_oc=Adm89rryYqozNnASAQ4EthAiDuxA931W1vQiRhNa80zdwSTu-DgoOWhDinGbFXVMgug&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-tpe1-1.cdninstagram.com&_nc_gid=vF57erJIPjBo8B1YBO-ZKg&oh=00_AfsWb0crYqnJrtCBmgO5ZH-84MWs68_d-QDOX5jg9Op2Eg&oe=69841F7D',
    dataScreenshots: [
      getImageUrl('roml-life-reels-damper_01.jpg'),
      getImageUrl('roml-life-reels-damper_02.jpg'),
      getImageUrl('roml-life-reels-damper_03.jpg'),
    ],
    link: '/works/roml-life-reels-damper',
    websiteLink: 'https://www.instagram.com/reel/DMAaPPSSc4y/',
    instagramEmbed: 'DMAaPPSSc4y',
  },
  {
    id: 'roml-life-reels-elevate',
    title: '【短影片】小個子墊高神器',
    category: '行銷營運',
    shortDesc: '影片截至2026年2月1日，達成 33,480 觀看',
    description: `這篇 Reels 專注於展示產品特色細節，並產生話題性與觀看者互動。<br /><br />
    根據後台數據顯示（下圖）：<br />
    1. 觀看數：突破 33,480 次。<br />
    2. 轉換率：帶動 13 位追蹤。<br />
    3. 互動率：1,120 次，顯示內容具有高度轉發價值。<br />
    4. 平均觀看時間：達 17 秒，顯示內容吸引力強。<br />
    5. 分享次數：675 次。<br />
    `,
    features: ['特色商品介紹', '數據導向腳本', '後台數據追蹤分析'],
    techStack: ['CapCut', 'Strategy Planning', 'Instagram Edits'],
    image:
      'https://scontent-tpe1-1.cdninstagram.com/v/t51.71878-15/503580395_1075097591384279_8109923717898699051_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=106&ig_cache_key=MzY2MDcxMzAyNTc4MDMzODAzMg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHgxMTM2LnNkci5DMyJ9&_nc_ohc=7NZmtkHe9GcQ7kNvwGi3nkd&_nc_oc=Adl-E1RnVUS1ueqttmkhVSBeDMGd0wW48iGyvWcXZ75xJtO_D2FMIyDp2cBRXWZ7MM8&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-tpe1-1.cdninstagram.com&_nc_gid=T1_McBK8rIQOIa3IL8aDvQ&oh=00_AfvjL3PBKE-k-bkgS-iJENTVHQ82yT2HSVN8l9w0lABiJQ&oe=698426A2',
    dataScreenshots: [
      getImageUrl('roml-life-reels-elevate_01.jpg'),
      getImageUrl('roml-life-reels-elevate_02.jpg'),
      getImageUrl('roml-life-reels-elevate_03.jpg'),
    ],
    link: '/works/roml-life-reels-elevate',
    websiteLink: 'https://www.instagram.com/reel/DLNdxoGSE1w/',
    instagramEmbed: 'DLNdxoGSE1w',
  },
  {
    id: 'roml-life-reels-bike-parking',
    title: '【短影片】日本機車停車資訊',
    category: '行銷營運',
    shortDesc: '影片截至2026年2月1日，達成 5,256 觀看',
    description: `這篇 Reels 專注於分享日本停車資訊。<br /><br />
    根據後台數據顯示（下圖）：<br />
    1. 觀看數：突破 5,256 次。<br />
    2. 轉換率：帶動 10 位追蹤。<br />
    3. 互動率：190 次。<br />
    4. 平均觀看時間：達 14 秒。<br />
    `,
    features: ['日本資訊分享', '數據導向腳本', '後台數據追蹤分析'],
    techStack: ['CapCut', 'Strategy Planning', 'Instagram Edits'],
    image:
      'https://scontent-tpe1-1.cdninstagram.com/v/t51.82787-15/523968381_18283777156250820_7474935429761357768_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=104&ig_cache_key=MzY4NTE5MjIzOTg2Njc3NzQ4MQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MjU2MC5zZHIuQzIifQ%3D%3D&_nc_ohc=-9BMdw7DXLMQ7kNvwFf5VVh&_nc_oc=Adl9f3c3-j_WFBX2SIHv4BTBnjH2UpnK3P-WVb0UqJV9iEYbSmroqAFOq7lmP8EMXNc&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-tpe1-1.cdninstagram.com&_nc_gid=XePawuj2iVnAT57Yl3rGmQ&oh=00_Afu6_z6-JywsW_X-C1x1V0uR8BRKklsYtT9ztEqhBoDV5g&oe=69842037',
    dataScreenshots: [
      getImageUrl('roml-life-reels-bike-parking_01.jpg'),
      getImageUrl('roml-life-reels-bike-parking_02.jpg'),
      getImageUrl('roml-life-reels-bike-parking_03.jpg'),
    ],
    link: '/works/roml-life-reels-bike-parking',
    websiteLink: 'https://www.instagram.com/reel/DMkbtEySQ-J/',
    instagramEmbed: 'DMkbtEySQ-J',
  },
  {
    id: 'one-click-car-bg',
    title: '一鍵叫車後台管理系統',
    category: '網站架設',
    shortDesc: '設備與租戶管理中心',
    description: `專為內部管理人員設計，用於設定租戶與設備機器。系統支援設定多種叫車服務，如「掃碼叫車」、「Inline 串接」等後台參數設定。`,
    features: ['租戶權限管理', '設備狀態監控', '後台參數設定', 'QR Code 叫車管理', '設計規範系統 (Design Guideline)'],
    techStack: ['Bootstrap', 'HTML', 'JavaScript', 'CSS', 'Figma'],
    image: getImageUrl('oneCallCarBg_des.webp'),
    link: '/works/one-click-car-bg',
    websiteLink: 'https://onecallcomponent3-1.netlify.app',
  },
  {
    id: 'corporate-signing-web',
    title: '企業簽單形象官網',
    category: '文宣設計',
    shortDesc: '電子乘車券服務入口',
    description: `解決企業對員工交通差旅的管理需求，並提供成員電子乘車券服務。透過形象官網，讓企業用戶了解數位簽單之服務。`,
    features: [
      '視差滾動效果 (Rellax.js)',
      'Wow.js 滾動動畫',
      'FB Pixel & GA 追蹤整合',
      '表單驗證機制',
      '產品特色輪播展示',
    ],
    techStack: ['Bootstrap', 'Rellax.js', 'Wow.js', 'Adobe XD', 'HTML', 'CSS', 'jQuery', 'FB Pixel', 'GA'],
    image: getImageUrl('ticketInfo_dev.jpeg'),
    link: '/works/corporate-signing-web',
    websiteLink: 'https://www.taiwantaxi.com.tw/businesspayment',
  },
  {
    id: 'one-click-car',
    title: '一鍵叫車平板應用',
    category: '網站架設',
    shortDesc: '實體店面快速叫車解決方案',
    description: `台灣大車隊與餐廳、百貨、住宅及超商合作，在樓層安裝叫車機，協助不熟悉 App 的長者或臨時需求的顧客。此 Android 應用程式基於 Lenovo 平板開發，透過內嵌網頁實現快速更新與部署，與後台平台保持即時聯繫。`,
    features: ['Android 平板應用開發', '內嵌網頁串接技術', '快速叫車流程優化', '多租戶權限設備管理'],
    techStack: ['Figma', 'HTML', 'CSS', 'Bootstrap', 'JavaScript', 'RWD'],
    image: getImageUrl('oneCallCar_des.jpeg'),
    link: '/works/one-click-car',
    websiteLink: '#',
  },

  {
    id: 'qrcode-scan-call',
    title: 'QR Code 掃碼叫車服務',
    category: '文宣設計',
    shortDesc: '無 App 乘客的快速叫車方案',
    description: `佈署於車站、餐廳與商辦入口，為未下載叫車 App 的乘客提供掃碼即用的服務。提供多套 ColorStyle.css 供不同企業選擇，並進行 A/B 測試比較傳統風格與現代風格的使用者反饋。`,
    features: [
      'A/B 測試排版優化',
      '多主題色彩換膚系統',
      'Lottie 動態效果整合',
      '免下載快速叫車流程',
      '企業形象客製化視覺',
    ],
    techStack: ['jQuery', 'Bootstrap', 'UI/UX', 'Lottie Animations', 'RWD', 'Figma', 'HTML', 'SCSS'],
    image: getImageUrl('qrcode_des.jpeg'),
    link: '/works/qrcode-scan-call',
    websiteLink: '#',
  },
  {
    id: 'enterprise-management',
    title: '企業簽單後台管理系統',
    category: '網站架設',
    shortDesc: '企業交通費用集中管理平台',
    description: `「企業簽單後台管理系統」讓業主能集中管理員工差旅，清楚查看每趟行程的地點、時間與費用，簡化報支流程。`,
    features: [
      '差旅費用集中化管理',
      '行程時間地點精準追蹤',
      '報支流程自動化',
      '時間區間篩選功能',
      '後台管理 UI/UX 設計',
    ],
    techStack: ['ASP.Net MVC', 'Core UI', 'jQuery', 'Figma', 'HTML', 'CSS'],
    image: getImageUrl('ticketBg_dev.webp'),
    link: '/works/enterprise-management',
    websiteLink: 'https://ticketweb.taiwantaxi.com.tw/ETicketCore',
    flowchartLink: 'https://www.figma.com/file/QcNZMZTFyfgRYJhpGT8jhc/55688---企業簽單-_-後台?node-id=213%3A1438',
  },
  {
    id: 'one-id-login',
    title: 'One ID 統一登入系統',
    category: '文宣設計',
    shortDesc: '集團共享帳號驗證中心',
    description: `新一代會員系統「OneID」，為集團提供統一的註冊、登入、授權與驗證入口。透過共享帳號機制，整合集團內各項服務的登入介面與驗證流程。`,
    features: [
      '統一身分驗證入口',
      '集團共享帳號機制',
      '表單驗證 (Form Validation)',
      '密碼顯示切換功能',
      '響應式登入頁面',
    ],
    techStack: ['Form Validation', 'Figma', 'jQuery', 'HTML', 'SCSS', 'Bootstrap', 'RWD'],
    image: getImageUrl('oneID_des.webp'),
    link: '/works/one-id-login',
    websiteLink: '#',
    flowchartLink: 'https://www.figma.com/file/D6VhQLWYJRGbAf44CmfhKr/One-ID-登入畫面?node-id=90%3A164',
  },
  {
    id: 'jieyijia-webview',
    title: '潔衣家 Webview 手機版',
    category: '文宣設計',
    shortDesc: '55688 App 生活密碼購物優化',
    description: `針對潔衣家官方網站進行行動裝置優化，讓 55688 APP 使用者能流暢購買洗衣服務。從流程規劃、畫面設計到前端切版與後端串接皆一手包辦，大幅提升購物體驗。`,
    features: [
      '行動裝置專屬切版',
      'App 內嵌網頁流程規劃',
      '完整原型 (Prototype) 製作',
      '購物流程 UI/UX 優化',
      '前後端資料串接',
    ],
    techStack: ['Vue.js', 'ASP.Net MVC', 'jQuery', 'Figma', 'HTML', 'SCSS'],
    image: getImageUrl('tww_pro.png'),
    link: '/works/jieyijia-webview',
    websiteLink: 'https://www.tww.com.tw/Main/Index_m',
    flowchartLink: 'https://www.figma.com/file/x2LsP0yc67IJKEivlWNGWK/潔衣家?type=whiteboard&node-id=0%3A1',
  },
]

export const categories = ['全部', '網站架設', '行銷營運', '文宣設計']
