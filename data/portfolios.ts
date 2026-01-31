import fantasi from '~/assets/images/portfolio/fantasi_pro.png'
import freelance from '~/assets/images/portfolio/freelance_pro.jpg'
import funlooker from '~/assets/images/portfolio/funlooker_pro.png'
import levert from '~/assets/images/portfolio/levert_dev.jpg'
import luxetravel from '~/assets/images/portfolio/luxetravel_dev.jpg'
import miniclub from '~/assets/images/portfolio/miniclub_dev.jpg'
import oneCallCar from '~/assets/images/portfolio/oneCallCar_des.jpeg'
import oneCallCarBg from '~/assets/images/portfolio/oneCallCarBg_des.webp'
import oneId from '~/assets/images/portfolio/oneID_des.webp'
import photography from '~/assets/images/portfolio/photography_dev.jpg'
import qrcode from '~/assets/images/portfolio/qrcode_des.jpeg'
import ticketBg from '~/assets/images/portfolio/ticketBg_dev.webp'
import ticketInfo from '~/assets/images/portfolio/ticketInfo_dev.jpeg'
import travelTw from '~/assets/images/portfolio/travelTw_dev.png'
import tww from '~/assets/images/portfolio/tww_pro.png'
import vida from '~/assets/images/portfolio/vida_dev.png'

export interface Portfolio {
  id: string
  title: string
  category: string
  description: string
  shortDesc: string
  features: string[]
  techStack: string[]
  image: string
  link: string
  websiteLink: string
  flowchartLink?: string
}

export const portfolios: Portfolio[] = [
  {
    id: 'luxetravel',
    title: 'Luxe Travel 歐洲旅遊平台',
    category: '平台開發',
    shortDesc: '頂級歐洲旅遊規劃服務',
    description: `Luxe Travel 是專精於歐洲度假的頂級旅遊規劃平台。提供多元化的旅遊服務，包括精選團體旅遊、客製化自由行和豪華郵輪，旨在滿足旅客對完美旅程的所有嚮往。<br /><br />在各大旅遊論壇上獲得了卓越的聲譽和好評。至今已幫助多名旅客實現探索歐洲的夢想，並為數百對新人打造難忘的蜜月之旅。`,
    features: ['精選團體旅遊方案', '客製化自由行規劃', '豪華郵輪行程', 'SEO 優化與搜尋排名', '響應式設計體驗'],
    techStack: ['Next.js', 'React', 'Restful API', 'HTML', 'CSS', 'Vercel', 'RWD', 'SEO', 'Tailwind CSS'],
    image: luxetravel,
    link: '/Works/luxetravel',
    websiteLink: 'https://luxetravel-frontend.vercel.app/',
  },
  {
    id: 'levert',
    title: 'Levert 益生菌電商平台',
    category: '平台開發',
    shortDesc: '專業保健品線上購物體驗',
    description: `Levert 益生菌提供無縫的線上購物體驗，具備專屬會員計畫、直覺化的產品預覽和簡化的結帳流程。<br/><br/>品牌堅定承諾打造真正有效的美容保健品，不含人工色素、香料或甜味劑，為消費者帶來最純淨的健康選擇。`,
    features: ['電商購物車', '直覺化產品瀏覽', '簡化結帳流程', '產品輪播展示', 'API 整合串接'],
    techStack: ['Nuxt', 'HTML', 'CSS', 'Vue', 'Swiper', 'Restful API', 'Figma'],
    image: levert,
    link: '/Works/levert',
    websiteLink: 'https://levertlabs.com/',
  },
  // {
  //   id: 'opticson',
  //   title: 'SHOEI 抬頭顯示器',
  //   category: '行銷營運',
  //   shortDesc: '專業保健品線上購物體驗',
  //   description: `Levert 益生菌提供無縫的線上購物體驗，具備專屬會員計畫、直覺化的產品預覽和簡化的結帳流程。<br/><br/>品牌堅定承諾打造真正有效的美容保健品，不含人工色素、香料或甜味劑，為消費者帶來最純淨的健康選擇。`,
  //   features: ['電商購物車', '直覺化產品瀏覽', '簡化結帳流程', '產品輪播展示', 'API 整合串接'],
  //   techStack: ['Nuxt', 'HTML', 'CSS', 'Vue', 'Swiper', 'Restful API', 'Figma'],
  //   image: levert,
  //   link: '/Works/levert',
  //   websiteLink: 'https://levertlabs.com/',
  // },
  {
    id: 'miniclub',
    title: 'Miniclub 旅遊服務平台',
    category: '品牌官網',
    shortDesc: '專業顧問旅遊規劃服務',
    description: `體驗兩全其美的旅遊方式——完整的行程彈性與專業團體旅遊的可靠便利，專業顧問為你打造專屬旅遊，省去訂房和駕駛的麻煩。<br/><br/>透過最完整精緻的導遊服務，致力為顧客提供最輕鬆、最享受的旅遊體驗。`,
    features: ['彈性客製化行程', '專車接送服務', '專業顧問規劃', 'SEO 搜尋優化', '響應式網頁設計'],
    techStack: ['SEO', 'Tailwind CSS', 'SASS', 'Vue', 'RWD', 'Nuxt', 'HTML'],
    image: miniclub,
    link: '/Works/miniclub',
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
    image: funlooker,
    link: '/Works/funlooker',
    websiteLink: 'https://funlooker.co',
  },
  {
    id: 'fantasi',
    title: 'Fantasi 創作者交流平台',
    category: '平台開發',
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
    image: fantasi,
    link: '/Works/fantasi',
    websiteLink: 'https://www.fantasigloble.com',
    flowchartLink:
      'https://www.figma.com/file/W14AyPCjUNNQXD0vGJGbqa/Wireframe?type=whiteboard&node-id=0%3A1&t=lvUa01celevNQyTo-1',
  },
  {
    id: 'vida-creator-platform',
    title: 'Vida 創作者平台',
    category: '平台開發',
    shortDesc: '創作者主導的互動訂閱平台',
    description: `VIDA 是一個以創作者為中心的平台，提供粉絲觀看、評論功能，創作者可透過「設定付款」或「天數訂閱」功能吸引流量並變現。`,
    features: ['訂閱制付費功能', '創作者天數訂閱方案', '多語系支援 (Vue-i18n)', '內容包裝與推廣邏輯'],
    techStack: ['Vant', 'Vuex', 'Swiper', 'Figma', 'Nuxt', 'Vue', 'Vue-i18n', 'Axios'],
    image: vida,
    link: '/Works/vida-creator-platform',
    websiteLink: 'https://vida.pub',
    flowchartLink: 'https://www.figma.com/file/Uyyom25m2tINK3BKYmxohF/Vida?type=whiteboard&node-id=0%3A1',
  },
  {
    id: 'freelance',
    title: 'Zeona Studio 官方網站',
    category: '網站設計',
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
    image: freelance,
    link: '/Works/freelance',
    websiteLink: 'https://project-website-sigma.vercel.app/',
  },
  {
    id: 'photographer-studio',
    title: '攝影工作室作品集網站',
    category: '平台開發',
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
    image: photography,
    link: '/Works/photographer-studio',
    websiteLink: 'https://zenoaworks.vercel.app/',
  },
  {
    id: 'one-click-car',
    title: '一鍵叫車平板應用',
    category: '平台開發',
    shortDesc: '實體店面快速叫車解決方案',
    description: `台灣大車隊與餐廳、百貨、住宅及超商合作，在樓層安裝叫車機，協助不熟悉 App 的長者或臨時需求的顧客。此 Android 應用程式基於 Lenovo 平板開發，透過內嵌網頁實現快速更新與部署，與後台平台保持即時聯繫。`,
    features: ['Android 平板應用開發', '內嵌網頁串接技術', '快速叫車流程優化', '多租戶權限設備管理'],
    techStack: ['Figma', 'HTML', 'CSS', 'Bootstrap', 'JavaScript', 'RWD'],
    image: oneCallCar,
    link: '/Works/one-click-car',
    websiteLink: '#',
  },
  {
    id: 'one-click-car-bg',
    title: '一鍵叫車後台管理系統',
    category: '平台開發',
    shortDesc: '設備與租戶管理中心',
    description: `專為內部管理人員設計，用於設定租戶與設備機器。系統支援設定多種叫車服務，如「掃碼叫車」、「Inline 串接」等後台參數設定。`,
    features: ['租戶權限管理', '設備狀態監控', '後台參數設定', 'QR Code 叫車管理', '設計規範系統 (Design Guideline)'],
    techStack: ['Bootstrap', 'HTML', 'JavaScript', 'CSS', 'Figma'],
    image: oneCallCarBg,
    link: '/Works/one-click-car-bg',
    websiteLink: 'https://onecallcomponent3-1.netlify.app',
  },
  {
    id: 'corporate-signing-web',
    title: '企業簽單形象官網',
    category: '網站設計',
    shortDesc: '電子乘車券服務入口',
    description: `解決企業對員工交通差旅的管理需求，並提供成員電子乘車券服務。透過形象官網，讓企業用戶了解數位簽單之服務。`,
    features: [
      '視差滾動效果 (Rellax.js)',
      'Wow.js 滾動動畫',
      'FB Pixel & GA 追蹤整合',
      '表單驗證機制',
      '產品特色輪播展示',
    ],
    techStack: ['Adobe XD', 'HTML', 'CSS', 'jQuery', 'Rellax.js', 'Wow.js', 'FB Pixel', 'GA'],
    image: ticketInfo,
    link: '/Works/corporate-signing-web',
    websiteLink: 'https://www.taiwantaxi.com.tw/businesspayment',
  },
  {
    id: 'taiwan-travel-guide',
    title: '台灣旅遊景點指南',
    category: '平台開發',
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
    image: travelTw,
    link: '/Works/taiwan-travel-guide',
    websiteLink: 'https://travel-tw.vercel.app',
  },
  {
    id: 'qrcode-scan-call',
    title: 'QR Code 掃碼叫車服務',
    category: '網站設計',
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
    image: qrcode,
    link: '/Works/qrcode-scan-call',
    websiteLink: '#',
  },
  {
    id: 'enterprise-management',
    title: '企業簽單後台管理系統',
    category: '平台開發',
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
    image: ticketBg,
    link: '/Works/enterprise-management',
    websiteLink: 'https://ticketweb.taiwantaxi.com.tw/ETicketCore',
    flowchartLink: 'https://www.figma.com/file/QcNZMZTFyfgRYJhpGT8jhc/55688---企業簽單-_-後台?node-id=213%3A1438',
  },
  {
    id: 'one-id-login',
    title: 'One ID 統一登入系統',
    category: '網站設計',
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
    image: oneId,
    link: '/Works/one-id-login',
    websiteLink: '#',
    flowchartLink: 'https://www.figma.com/file/D6VhQLWYJRGbAf44CmfhKr/One-ID-登入畫面?node-id=90%3A164',
  },
  {
    id: 'jieyijia-webview',
    title: '潔衣家 Webview 手機版',
    category: '網站設計',
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
    image: tww,
    link: '/Works/jieyijia-webview',
    websiteLink: 'https://www.tww.com.tw/Main/Index_m',
    flowchartLink: 'https://www.figma.com/file/x2LsP0yc67IJKEivlWNGWK/潔衣家?type=whiteboard&node-id=0%3A1',
  },
]

export const categories = ['全部', '平台開發', '行銷營運', '網站設計']
