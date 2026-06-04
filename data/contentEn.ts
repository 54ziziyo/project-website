// 英文版「卡片摘要」內容（介面 + 卡片摘要層級）。
// 長文內容（部落格全文、商品完整介紹、作品詳細案例）維持中文。
// 以 id 對應；找不到對應時，accessor 會 fallback 回原本的中文欄位。

// 分類顯示標籤：中文分類值（同時是篩選 key）→ 英文標籤
export const categoryLabelsEn: Record<string, string> = {
  全部: 'All',
  'Prompt 提示詞': 'Prompts',
  'Notion 模板': 'Notion Templates',
  'Canva 模板': 'Canva Templates',
  素材工具包: 'Asset Kits',
  軟體開發: 'Software Dev',
  行銷營運: 'Marketing',
  視覺設計: 'Design',
  'AI 人工智慧': 'AI',
  網站開發: 'Web Development',
  品牌行銷策略: 'Brand Marketing',
  社群與短影音: 'Social & Video',
  'AI 數位行銷': 'AI Marketing',
  工具推薦: 'Tool Picks',
}

export const productEn: Record<string, { name: string; description: string; tags: string[] }> = {
  'workplace-chatgpt-50-scenarios': {
    name: 'ChatGPT for Work｜50 Copy-Paste Prompts for Professionals',
    description:
      'Weekly reports, meeting summaries, emails, slides, performance reviews… 50 real workplace scenarios. Just paste into ChatGPT — no more wondering how to prompt.',
    tags: ['Professionals', 'ChatGPT', 'Work', 'Email', 'Reports'],
  },
  'short-video-script-pack': {
    name: 'Viral Short-Video Script Pack｜Reels / TikTok / YT Shorts',
    description:
      'Golden hooks + script frameworks + ChatGPT prompts. Generate a full script in 30 seconds and rescue low view counts.',
    tags: ['Short Video', 'Reels', 'TikTok', 'Script', 'Hook'],
  },
  'threads-hook-formula-200': {
    name: 'Threads Viral Hook Library｜200 Opening Lines That Spark Replies',
    description:
      '200 tested first lines that trigger replies, debate and reshares. Copy-paste and they bring their own reach — no follower base needed to break 100 likes.',
    tags: ['Threads', 'Social', 'Copywriting', 'Reach', 'Hooks'],
  },
  'adhd-focus-digital-journal': {
    name: 'Self-Discipline Made Simple｜A Tool for Scattered Minds',
    description:
      'Fewer choices, easier starts. This tool focuses on “what can I actually do today,” with a get-unstuck design so you move the moment you open it.',
    tags: ['Notion', 'ADHD', 'Focus', 'Productivity', 'Digital Planner'],
  },
  'freelancer-client-tracker-notion': {
    name: 'Freelancer Notion CRM｜Client Management System',
    description:
      'Quote → contract → delivery → payment → follow-up: run your whole freelance workflow in one Notion. (Traditional Chinese edition.)',
    tags: ['Notion', 'Freelance', 'CRM', 'Finance', 'Freelancer'],
  },
  'dark-mode-personal-brand-canva': {
    name: 'Canva Template Pack｜IG Posts & Stories for Creators',
    description:
      'Drop in this visual kit and your IG instantly levels up — posts, stories, bio cards and every layout you need on IG. Works with free Canva.',
    tags: ['Canva', 'Personal Brand', 'IG', 'Design', 'Dark Mode'],
  },
  'short-video-hook-asset-pack': {
    name: '3-Second Hook Asset Pack｜Caption Animations + SFX + Hook Formulas',
    description:
      'The first 3 seconds decide everything. This pack gives you ready-made caption animations, attention-grabbing transition SFX and golden opening hooks.',
    tags: ['Short Video', 'CapCut', 'Asset Pack', 'Transitions', 'Hook'],
  },
  'ai-personal-brand-full-pack': {
    name: 'AI Social-Media Playbook｜IG + Blog + Newsletter, Done For You',
    description:
      'No team, no starting from scratch. One set of AI prompts and templates to build your IG, blog and newsletter at once — from positioning to a 30-day plan: fill in, copy, publish.',
    tags: ['Personal Brand', 'IG', 'Newsletter', 'Blog', 'ChatGPT'],
  },
  'line-auto-budget-bot': {
    name: 'Lazy LINE Auto Expense-Tracking Bot Script',
    description:
      'Type “lunch 150” in LINE — it auto-syncs to Google Sheets and builds beautiful charts. No app to open; track expenses on the go.',
    tags: ['LINE', 'Budgeting', 'Automation', 'Google Sheets', 'Lazy Tool'],
  },
}

export const portfolioEn: Record<string, { title: string; shortDesc: string }> = {
  luxetravel: { title: 'Luxe Travel — European Travel Platform', shortDesc: 'Premium European travel planning service' },
  levert: { title: 'Levert — Probiotics E-commerce', shortDesc: 'A professional supplements shopping experience' },
  miniclub: { title: 'Miniclub — Travel Service Platform', shortDesc: 'Expert-led travel planning service' },
  funlooker: { title: 'Funlooker — Global Nightlife Guide', shortDesc: 'The best platform to explore nightlife worldwide' },
  'vida-creator-platform': { title: 'Vida — Creator Platform', shortDesc: 'A creator-led interactive subscription platform' },
  freelance: { title: 'Zeona Studio — Official Website', shortDesc: 'An all-in-one digital service platform' },
  'photographer-studio': { title: 'Photography Studio Portfolio Site', shortDesc: 'An interactive image showcase platform' },
  'taiwan-travel-guide': { title: 'Taiwan Travel Spots Guide', shortDesc: 'An interactive map built with the latest tech' },
  'roml-life-reels-hud': { title: '[Short Video] HUD Head-Up Display', shortDesc: 'As of Feb 1, 2026: 1,006,822 views' },
  'roml-life-reels-arai-neko': { title: '[Short Video] Arai Cat Helmet', shortDesc: 'As of Feb 1, 2026: 311,560 views' },
  'roml-life-reels-electronic-dimming': { title: '[Short Video] Electronic Anti-Fog Dimming Visor', shortDesc: 'As of Feb 1, 2026: 256,703 views' },
  'roml-life-post-93-white': { title: '[Social Post] 93 Pre-Order News', shortDesc: 'As of Feb 1, 2026: 238,493 views' },
  'roml-life-post-x15-valion': { title: '[Social Post] X15 Discontinuation Reversal', shortDesc: 'As of Feb 1, 2026: 229,249 views' },
  'roml-life-reels-shoei-helmet-bag': { title: '[Short Video] SHOEI Helmet Bag', shortDesc: 'As of Feb 1, 2026: 177,092 views' },
  'roml-life-reels-fearless': { title: '[Short Video] SHOEI Fearless', shortDesc: 'As of Feb 1, 2026: 112,814 views' },
  'roml-life-post-2026-x15-price': { title: '[Social Post] 2026 X15', shortDesc: 'As of Feb 1, 2026: 103,586 views' },
  'roml-life-post-2025-shoei-z8-price': { title: '[Social Post] 2025 SHOEI Z8', shortDesc: 'As of Feb 1, 2026: 91,710 views' },
  'roml-life-post-Marquez9-pre-order': { title: '[Social Post] Marquez9 News', shortDesc: 'As of Feb 1, 2026: 74,653 views' },
  'roml-life-reels-damper': { title: '[Short Video] Chassis Damper Bar', shortDesc: 'As of Feb 1, 2026: 48,436 views' },
  'roml-life-reels-elevate': { title: '[Short Video] Height-Boost Tool for Shorter Riders', shortDesc: 'As of Feb 1, 2026: 33,480 views' },
  'roml-life-reels-bike-parking': { title: '[Short Video] Motorcycle Parking Info in Japan', shortDesc: 'As of Feb 1, 2026: 5,256 views' },
  'one-click-car-bg': { title: 'One-Click Ride — Admin System', shortDesc: 'Device and tenant management hub' },
  'corporate-signing-web': { title: 'Corporate Billing Brand Website', shortDesc: 'Portal for e-ticket ride services' },
  'one-click-car': { title: 'One-Click Ride — Tablet App', shortDesc: 'Fast ride-hailing for brick-and-mortar stores' },
  'qrcode-scan-call': { title: 'QR Code Scan-to-Ride Service', shortDesc: 'Fast ride-hailing for app-free passengers' },
  'enterprise-management': { title: 'Corporate Billing Admin System', shortDesc: 'Centralized platform for company travel expenses' },
  'one-id-login': { title: 'One ID — Unified Login System', shortDesc: 'Shared-account authentication hub for groups' },
  'lunn-yan-reels-serena-eggroll': { title: '[Short Video] Serena Egg Rolls', shortDesc: 'Serena egg rolls intro video' },
  'lunn-yan-reels-harry-potter': { title: '[Short Video] Harry Potter Experience', shortDesc: 'New-store Harry Potter experience video' },
  'jieyijia-webview': { title: 'Jieyijia Webview — Mobile', shortDesc: '55688 App lifestyle-code shopping optimization' },
  fantasi: { title: 'Fantasi — Creator Community Platform', shortDesc: 'A unique space for creators and fans to connect' },
}

export const blogEn: Record<string, { title: string; excerpt: string }> = {
  'ai-fullstack-tools-lovable-bolt-manus': {
    title:
      'Generate an Entire Website With One AI Prompt? The Best Full-Stack Builders Compared: Lovable, Bolt.new & Manus AI',
    excerpt:
      'Can’t code but want a Web App that actually works? Get up to speed on the hottest AI full-stack builders — from Lovable and Bolt.new to Manus AI — comparing features, learning curve and best-fit use cases.',
  },
  'case-study-motorbike-geo-success': {
    title:
      '“ChatGPT Recommended You!” A Motorcycle-Gear Case Study on the Real Conversion Power of GEO',
    excerpt:
      'This isn’t a prediction — it’s already happening. A motorcycle-gear owner was stunned to find customers coming in because AI recommended them. Here’s how I helped a client build an AI trust circle.',
  },
  'ai-content-mastery': {
    title:
      'Ditch the Canned AI Feel! A New Content-Marketing Mindset: Writing High-Ranking Articles With a Soul Using AI',
    excerpt:
      'As search engines evolve, plain AI-generated content no longer earns traffic. Learn to combine your own perspective with AI’s horsepower to create high-converting, AI-detection-proof, SEO-friendly content.',
  },
  'ai-seo-mastery-2026': {
    title: 'Stop Chasing Keywords! The AEO Era: How to Get AI Search Engines to Recommend Your Content First',
    excerpt:
      'SEO has evolved into AEO (AI Engine Optimization). When AI summaries replace search results, how should SMEs adapt so Google Gemini and SearchGPT surface them?',
  },
  'social-media-marketing-strategy-2026': {
    title: '2026 Social Media Marketing Strategy: A Full-Platform Playbook From Instagram to Threads',
    excerpt:
      'An in-depth look at the latest 2026 social media trends and strategies to help brands build an effective presence across every platform.',
  },
  'responsive-web-design-mastery': {
    title:
      'Stop Writing Only Media Queries! The Modern Responsive Design Guide: From Figma to a Flawless Vue/React Cross-Device Workflow',
    excerpt:
      'In the post-breakpoint era, responsive design has evolved into “component-adaptive.” Learn to use Container Queries, the clamp() function and Figma auto-layout.',
  },
  'email-marketing-automation-masterclass': {
    title: 'More Than Sending Emails! Hands-On EDM Automation: Build a “Silent Salesperson” That Works 24/7',
    excerpt:
      'Still sending newsletters by hand? Master behavior-triggered email architecture, combined with AI prediction, to build a fully automated growth flywheel — from welcome to close to win-back.',
  },
  'ai-visual-identity-2026': {
    title:
      'Stop Rolling the Dice! The 2026 Brand Visual Playbook: Building a Highly Consistent Design System With AI',
    excerpt:
      'Frustrated that AI-generated images keep coming out inconsistent? The key to 2026 brand design is “style locking.” Learn to combine Midjourney’s artistry with DALL·E.',
  },
  'content-marketing-roi-mastery': {
    title:
      'Is Content Marketing Burning Cash or an Investment? A Data-Driven Framework to Calculate the Business Value of Every Piece',
    excerpt:
      'Stop measuring results by “gut feeling.” Build a content-ROI tracking system that convinces the boss — from LTV to content attribution, turning content from a cost center into a profit engine.',
  },
  'nuxt3-fullstack-mastery': {
    title:
      'More Than a Vue Framework: The Complete Nuxt 3 Full-Stack Guide to Building AI-Friendly, High-Performance Apps',
    excerpt:
      'From project init to edge deployment, a hands-on guide to building top-tier SEO full-stack web apps with Nuxt 3 — mastering the “edge-first” architecture and AI development.',
  },
  'ai-short-video-mastery-2026': {
    title: 'The Traffic Code Revealed! 2026 Short-Video AIGC Strategy: Make Your Brand Go Viral in Under 15 Seconds',
    excerpt:
      'Still stuck on scripts and editing? Leading brands have entered the era of AI-automated production. Learn to craft a golden 3-second hook with AI and make your Reels spread.',
  },
  'web-security-essentials': {
    title:
      'Don’t Wait for Hackers! The Complete Enterprise Security Guide: From Zero-Trust Architecture to AI Threat Detection',
    excerpt:
      'Website security is the last line of defense for your reputation. A deep dive into must-have zero-trust mechanisms, Content Security Policy 3.0 and data-encryption practices.',
  },
  'ai-business-automation-2026-guide': {
    title: 'The AI Automation Empire: A Complete 2026 Guide to Deploying AI Agents in Small Businesses',
    excerpt:
      'In 2026, AI is no longer just a chatbot but a “digital employee” that thinks and acts on its own. This guide reveals how SMEs can use multi-agent collaboration.',
  },
  'prompt-engineering-masterclass-2026': {
    title:
      'The Art of Talking to AI: The Complete Prompt-Engineering Guide, With 5 Examples to Multiply Your Efficiency',
    excerpt:
      'If AI feels useless, it’s because you haven’t mastered the right conversation formula. Learn 2026’s strongest prompt-design thinking — from structure to 5 hands-on examples.',
  },
}
