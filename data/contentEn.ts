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

// 商品卡片「格式」標籤：中文值 → 英文標籤（全站共用，非以id對應，因為同一個值會重複出現在多個商品上）
export const productFileTypeEn: Record<string, string> = {
  'Canva 模板': 'Canva Template',
  'Notion 模板': 'Notion Template',
  '免費工具（外部連結）': 'Free Tool (External Link)',
  '免費提示詞庫（線上版）': 'Free Prompt Library (Online)',
  '免費服務（外部連結）': 'Free Service (External Link)',
  線上閱讀版: 'Online Edition',
  '線上閱讀版（序號解鎖）': 'Online Edition (License Key)',
}

export const productEn: Record<string, { name: string; description: string; tags: string[] }> = {
  'pikbest-design-resources': {
    name: 'No Design Assets? Pikbest Has Posters, PPT, Music & Sound Effects in One Place',
    description:
      '3.5M+ design resources — poster templates, PPT decks, e-commerce layouts, royalty-free music and sound effects, and tutorial videos, all on one site. Stop hunting for assets across ten tabs.',
    tags: ['Design Resources', 'Pikbest', 'PPT Templates', 'Royalty-Free Music', 'E-commerce Assets', 'Free'],
  },
  'subsubman-subscription-manager': {
    name: 'Too Many Subscriptions to Track? SubSubMan Manages All of Them for You',
    description:
      'Netflix, Disney+, Spotify, ChatGPT, Gemini and other popular subscriptions managed in one place, with renewal reminders and real human support — and it beats official pricing, especially the limited-time Gemini Pro deal.',
    tags: ['Subscription Management', 'Netflix', 'ChatGPT', 'Gemini', 'Money Saving', 'Free'],
  },
  'ai-fortune-telling': {
    name: 'AI Fortune Telling｜The Algorithm of Destiny: A Digital Divination Toolkit',
    description:
      'A free prompt library spanning every major school of fortune-telling. Eastern BaZi & Zi Wei Dou Shu × Western astrology & numerology — copy-paste into AI and let the algorithm become your personal life decoder.',
    tags: ['AI Fortune Telling', 'BaZi', 'Astrology', 'Numerology', 'Free'],
  },
  'geo-ai-recommendation-prompt-pack': {
    name: 'GEO Prompt Pack｜Get ChatGPT and Perplexity to Recommend You',
    description:
      '7 steps, all copy-paste-ready prompts, plus a content tracking sheet. Turn your content into something AI actually wants to cite.',
    tags: ['GEO', 'AI Search Optimization', 'Prompts', 'ChatGPT', 'Free'],
  },
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
  'hook-formula-200': {
    name: 'Viral Hook Library｜200 Opening Lines That Spark Replies',
    description:
      '200 tested first lines that trigger replies, debate and reshares. Copy-paste and they bring their own reach — no follower base needed to break 100 likes.',
    tags: ['Threads', 'Reels', 'TikTok', 'Social', 'Hooks'],
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
  'super-voice-assistant': {
    name: 'Please — Download This Voice Assistant Before Using Any Prompt',
    description:
      'Stop typing. Speak 4 sentences to tell AI who you are, then paste into any prompt — output becomes 10× more relevant to you. Free download, use it now.',
    tags: ['Voice Input', 'AI Tools', 'Typeless', 'Prompts', 'Free'],
  },
}

export const portfolioEn: Record<string, { title: string; shortDesc: string }> = {
  'roml-woo-seo-auto': {
    title: 'AI SEO Product Listing Automation',
    shortDesc: 'Fully automated pipeline from Japanese brand scraping to WooCommerce — 2 minutes vs. 60 minutes manual',
  },
  'hogan-ig-operation': {
    title: 'IG Account Management: Content Strategy to Sponsored Execution',
    shortDesc: '@hogan.tech software-engineer IG — 29K followers, 200 posts, commercial video produced end-to-end solo',
  },
  'roml-line-bot': {
    title: 'AI Shopping LINE Bot for Japan Proxy Purchasing',
    shortDesc: 'Send a product URL in LINE — the bot scrapes it, lets you pick color & size, and handles checkout with live FX rates',
  },
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

// 5個emailGate商品共用同一組保障說明文案（見 data/products.ts 對應中文版）
const emailGateTrustBadgesEn = [
  { icon: '📧', title: 'Get It With Your Email', desc: 'No payment — enter your name and email to get the link instantly' },
  { icon: '🔒', title: 'Data Protected', desc: 'Verified via reCAPTCHA, never used for anything else' },
  { icon: '♾️', title: 'Keep It Forever', desc: 'Save the link and come back anytime' },
]

// 商品內頁長文（fullDescription）＋功能列表（features）英文版
export const productDetailEn: Record<
  string,
  { fullDescription: string; features: string[]; trustBadges?: { icon: string; title: string; desc: string }[] }
> = {
  'pikbest-design-resources': {
    fullDescription: `Ever had a client ask for an event poster on short notice, or a pitch deck due tomorrow — and half your time goes into hunting down assets instead of actually designing?

When I'm doing IG posts, blog covers, or client pitches, the bottleneck is never the design itself — it's "where do I even find this stuff": one site for stock photos, another for PPT templates, another tab for royalty-free music. Constantly switching tabs gets exhausting.

Pikbest bundles nearly every asset type I regularly need into one site, so I finally stopped the tab-juggling habit.

📦 What's on Pikbest

🛍️ E-commerce templates: full-bleed promo banners, Double 11/anniversary sale layouts, product hero images — swap in your own text and they're ready to publish
🖼️ Stock photos: 40,000+ commercially licensable photos — portraits, scenes, lifestyle shots
🎵 Music & sound effects: background music, cartoon sound effects, transition sounds — no more hunting for licensed music for short-form video or ad edits
📊 PowerPoint / Word / Excel templates: pitch decks, report templates, attendance sheets — ready-made layouts for everyday office files
🎬 Video editing tutorials: AE/PR effects tutorials, free lessons on transitions and animated captions
📱 UI/App interface assets: app screens and UI mockups — useful for pitch demos or design reference

✅ Why I recommend this site
• So many asset types in one place you never need to open ten tabs to compare
• The free plan lets you browse and preview everything before deciding to upgrade
• Commercial-use licensing is spelled out clearly on every asset page — no accidental copyright landmines
• Trending categories and rising-popularity sorting make seasonal themes (Double 11, Christmas, Mother's Day) easy to find fast

🖱️ How to use it (3 steps for beginners)

1️⃣ Search by keyword (e.g. "e-commerce banner," "PPT deck," "sound effects") or click "All Categories" top-left to browse by type (design templates, graphics, video & audio, e-commerce templates, Office templates, photos, UI)
2️⃣ Click into an asset — the right side panel shows "License Info": whether it's free-plan usable or requires a paid upgrade for commercial download
3️⃣ Free-plan downloads usually require attribution — the page gives you copy-paste-ready credit text; for commercial use without attribution, you'll need to upgrade

📥 How to use it for free

Click the button below to go to Pikbest through my link — no payment required to browse and try free-plan assets. If you like it, consider upgrading for full commercial licensing.`,
    features: [
      '3.5M+ design resources: posters, PPT, Excel, Word templates in one place',
      'E-commerce templates: promo banners, Double 11/anniversary layouts, ready to use',
      '40,000+ commercially licensable stock photos',
      'Royalty-free music and sound effects for short-form video',
      'AE/PR editing tutorials — learn transitions and animated captions for free',
      'Clear commercial-use licensing on every asset page',
    ],
    trustBadges: [
      { icon: '🔗', title: 'Free to Browse', desc: 'No signup or payment — click the link and browse the whole site' },
      { icon: '⚡', title: 'Free to Try', desc: 'The free plan lets you download and try before upgrading' },
      { icon: '🔄', title: 'Constantly Updated', desc: 'Assets refresh daily — not a one-time purchase' },
    ],
  },
  'subsubman-subscription-manager': {
    fullDescription: `Do you have a pile of subscriptions too — Netflix, Disney+, Spotify, ChatGPT — and honestly have no idea which one's about to renew, then get charged for something you forgot you had?

SubSubMan exists to fix exactly that: it brings the streaming, music, and AI subscriptions you actually use into one place — from picking a plan and activating it, to reminding you before renewal and helping you extend it. A real person handles all of it.

📦 Which services can you subscribe to

All the usual streaming and music platforms are covered: Netflix, Disney+, HBO Max, YouTube Premium, Spotify, KKBOX, iQIYI, ChatGPT, Gemini and more. Not sure what to pick? Just tell the concierge what you need.

Especially right now: Gemini Pro is on a limited-time offer at NT$490 for 18 months (a Google AI + 5TB cloud storage upgrade in one go). Even if you're already a Gemini member, you can still buy it — you'll get a prorated refund.

✅ Join the member center for easier subscription management

• Subscription overview: see remaining days and expiry dates for everything at a glance
• Secure view: manage usage info for every service in one place
• Renewal management: quickly find subscriptions that need extending, before they lapse

🧮 See exactly how much you save vs. official pricing

Check off the services you currently subscribe to, enter what you're actually paying — three steps (select services → set your plan → see the difference) show "what you're paying now" against "what you'd pay on a SubSubMan plan," with the price difference and estimated yearly savings spelled out for every service. No calculator needed.

💬 Real human support, so you're never stuck

Their official LINE account is verified, with over 8,700 followers. Whether you're picking a plan or need after-sales help, there's a real person on the other end.

🎁 Exclusive discount

Go through my link and enter the fan discount code "zeona" — on top of the site-wide discount, new members who link LINE currently get an extra discount credit too.

If you're like me — a pile of subscriptions and no interest in overpaying — it's worth a look.`,
    features: [
      'Netflix, Disney+, Spotify, ChatGPT, Gemini and other popular subscriptions in one place',
      'Gemini Pro limited-time deal: NT$490/18 months, members can still buy with a prorated refund',
      'Subscription overview: remaining days and expiry dates at a glance',
      'Renewal management: proactive reminders, extend subscriptions fast',
      'A 3-step calculator showing the price difference vs. official pricing, monthly and yearly',
      'Real human support on LINE — verified, 8,700+ followers',
    ],
    trustBadges: [
      { icon: '💬', title: 'Real Human Support', desc: 'Real support on LINE for plan selection and renewals' },
      { icon: '⚡', title: 'Free Consultation', desc: 'Free consultation through the link, no pressure to pay' },
      { icon: '🔄', title: 'Flexible Plans', desc: 'Adjust your subscriptions as needed, no lock-in' },
    ],
  },
  'ai-fortune-telling': {
    fullDescription: `Ever wondered what happens when thousands of years of fortune-telling wisdom meets AI?

This toolkit turns the most established Eastern and Western divination systems into high-precision prompts you can paste straight into AI.

No fortune teller needed, no payment required — just enter your birthdate and AI becomes your personal fortune-telling consultant.

🌌 Western astrology & life-code readings (4 prompts)
• Zodiac astrology: a full reading of your Sun, Moon, and Rising signs
• Life-path numerology: calculate your destiny number and yearly code
• Birthdate strengths psychology: decode your workplace personality from your birth numbers
• Numerology divination: guidance on one specific question

☯️ Traditional Eastern divination (3 prompts)
• BaZi (Four Pillars) chart: Heavenly Stems × Earthly Branches, explained in plain language
• Yearly fortune reading: wealth, romance, and health broken down by season
• Zi Wei Dou Shu (Purple Star Astrology): your chart's main star, translated into modern career language

🎯 Real-life applications (2 prompts)
• Career & wealth blockers: find your money flow direction and financial blind spots
• BaZi compatibility matching: analyze relationship compatibility and communication styles

📌 Every prompt comes with modern psychology framing plus a management-style structure, so AI reads accurately and you understand it easily.`,
    features: [
      'High-precision prompts from every major school, completely free, copy-paste ready',
      'Full coverage: Eastern BaZi & Zi Wei Dou Shu × Western astrology & numerology',
      'Pair with the "AI Fortune Teller" interactive experience for an instant reading',
      'Modern psychology framing that strips away traditional mystical jargon',
      'Filter by school to quickly find the reading you actually want',
    ],
    trustBadges: emailGateTrustBadgesEn,
  },
  'geo-ai-recommendation-prompt-pack': {
    fullDescription: `When customers stop Googling and just ask AI "which one do you recommend" — does your brand show up in the answer?

This free pack breaks GEO (Generative Engine Optimization) down into copy-paste, hands-on prompts.

What's inside:

🎯 7 ready-to-use prompts (just swap in your own content)
• Map out the 12 questions customers actually ask AI
• Rewrite your answers into a format AI wants to cite
• Generate a full FAQ set in one pass (GEO's highest-leverage move)
• Strengthen credibility with data and sources
• Generate structured data (JSON-LD schema)
• Unify your brand description across platforms
• A monthly self-check: "is AI recommending you or not"

📊 GEO content tracking sheet (Notion database, with example rows)
• See at a glance which topics are already FAQ-ready and which have been cited by AI

Built for: personal brands, small businesses, freelancers, and anyone doing content marketing.
For the full framework, see the blog post "The Complete GEO Guide (with Prompts)" — this pack is what gets you actually doing it.`,
    features: [
      '7 copy-paste prompts in Traditional Chinese, fill in the blanks and go',
      'Covers the key GEO moves: FAQs, structured data, brand consistency',
      'Includes a Notion "GEO Content Tracking Sheet" database with examples',
      'A monthly self-check prompt to track your AI-recommendation visibility',
      'Free download, pairs with the "Complete GEO Guide" blog post',
    ],
    trustBadges: emailGateTrustBadgesEn,
  },
  'workplace-chatgpt-50-scenarios': {
    fullDescription: `Ever open ChatGPT and have no idea how to talk to it?

This prompt pack is the "workplace AI cheat sheet" built for professionals.

All 50 scenarios come from real work situations, each with:
✅ A complete prompt (ready to paste)
✅ A real output example (so you know what to expect)
✅ Tweaking tips (how to make it your own style)

Departments covered:
• Marketing/Social: copy, campaign planning, competitor analysis
• PM/Product: PRD writing, user stories, requirement specs
• Sales/Support: client proposals, cold outreach emails, complaint-handling scripts
• HR: recruiting JDs, staff announcements, exit-interview questions
• Everyone: weekly reports, email polishing, meeting summaries, self-reviews

Buy it and you can start using it tonight.`,
    features: [
      '50 copy-paste workplace prompts',
      'A real output example for every scenario',
      'Covers Marketing, PM, Sales, HR and more',
      'Includes a "make AI sound more human" guide',
      'Lifetime download, free updates forever',
    ],
    trustBadges: emailGateTrustBadgesEn,
  },
  'short-video-script-pack': {
    fullDescription: `If you don't grab people in the first 3 seconds, nothing after matters.

This pack solves the hardest parts of short video: "how to open" and "how to tell the story."

Includes:

🎣 Golden opening hooks (by theme)
• Knowledge opener: "99% of people don't know…"
• Controversy opener: "You've been doing this wrong"
• Emotional opener: "I've never told you this…"
• List opener: "5 ways to…"
• Question opener: "Have you ever…"

📋 Script frameworks
1. Tutorial: problem → steps → result
2. Story: conflict → twist → ending
3. Contrast: Before → After → method
4. Controversy: claim → counter → stance
5. List: number → expand → action

🤖 ChatGPT prompt templates
Drop in your topic and generate a full first-draft script in 30 seconds.`,
    features: [
      'Categorized golden opening hooks',
      'Ready-to-use script frameworks',
      'ChatGPT prompts: full script in 30 seconds',
      'Includes a "which hook fits which topic" guide',
      'Written for a real, on-the-ground voice',
    ],
  },
  'hook-formula-200': {
    fullDescription: `The Threads algorithm cares about one thing: whether your first line makes people want to reply.

This library collects 200 tested opening formulas across 10 strategy types:

🔥 Controversy triggers: make people compelled to push back or defend
💡 Knowledge shocks: make people feel they learned something and want to share
😂 Relatable rants: make people think "exactly" and comment
🎯 Prophecy/challenge: make people want to see what happens next
😮 Counter-intuitive: make people question what they thought they knew
📊 Number shocks: concrete numbers that make people stop
💬 Question prompts: make people compelled to answer
🔗 Story openers: one line that makes people read on
⚡ Urgency: make people feel they'll miss out if they don't act now
👑 Identity: a sense of belonging — "only people like us get this"

Each formula comes with a usage example + the type of account it suits.`,
    features: [
      '200 tested Threads opening formulas',
      '10 reach-strategy categories to pick from',
      'A real example for every formula',
      'Fits any account type (personal/brand/newcomer)',
      'Drives engagement with no follower base needed',
    ],
    trustBadges: emailGateTrustBadgesEn,
  },
  'adhd-focus-digital-journal': {
    fullDescription: `Too many things in a day — and just planning eats up your time instead of actually doing.

This is built for people who get distracted easily and struggle to start.

Design philosophy:
• See only one page per day
• Just one main task area
• Everything non-essential is hidden

Core features:
🎯 Today's One Thing
• Forces you to pick the single most important thing
• Mark it done for an instant sense of achievement

📍 Quick-capture area
• Dump whatever pops into your head, no categorizing needed
• Spend 5 minutes each night turning it into tasks

⏱️ Pomodoro integration
• Built-in 25-minute timer link
• Auto-logs each completed Pomodoro

🌙 Daily review (3 questions, 2 minutes)
• Best thing today?
• Tomorrow's one goal?
• One line to remember today?`,
    features: [
      'Distraction-free minimal UI — one page a day',
      '“Today’s One Thing” forces prioritization',
      'Quick-capture: dump thoughts the moment they appear',
      'Pomodoro integration + auto-logging',
    ],
    trustBadges: emailGateTrustBadgesEn,
  },
  'freelancer-client-tracker-notion': {
    fullDescription: `Freelancers fear two things most: forgetting to chase payment, and losing track of which project they're on.

This CRM makes your freelance business run like a company:

👥 Client database
• Each client's contact info, history and payment habits
• Tag "great client ⭐" and "blacklist 🚫"
• Auto-calculates total deals with each client

📋 Project tracking board
• Kanban view: inquiry → proposal → in progress → payment → done
• Deadline countdown alerts for each project
• Attachments, references and revision logs all in one place

💰 Finance dashboard
• Expected vs. actual income this month
• Accounts receivable (who hasn't paid!)
• Monthly income trend line chart
• Income source analysis by client and by type

📄 Quote generator
• Enter line items and it totals automatically
• Export a PDF to clients in one click (with your brand logo)

📑 Contract archive
• All contracts managed in one place
• Reminders for key terms`,
    features: [
      'Client database: contacts, blacklist tags, total deals',
      'Kanban tracking: from inquiry to payment',
      'Finance dashboard: receivables, monthly income trend',
      'Quote generator: auto-total, one-click PDF export',
      'Includes a 30-minute getting-started guide',
    ],
  },
  'dark-mode-personal-brand-canva': {
    fullDescription: `Quality isn't "designed" — it's decided by color and type.
This Canva template set has every layout you'll use on IG:

📱 IG post series
• 1:1 square posts (knowledge, price announcements, results showcase)
• 4:5 portrait posts (long-form knowledge, opinions)
• Carousel covers + inner pages (for tutorial series)

🎬 Story series
• 9:16 countdown stories
• Q&A layout
• Product-recommendation layout

🖼️ Bio cards
• For sharing on Threads/Twitter
• For media-collaboration pitches
• Speaker introduction cards`,
    features: [
      'Canva layouts (posts/stories/bio cards)',
      'Post on your own without a designer',
      'Brand color system + font usage guide',
      'Works with the free version of Canva',
      'Unlimited edits after purchase, commercial license',
    ],
    trustBadges: [
      { icon: '🔒', title: 'Secure Payment', desc: 'Encrypted payment via Gumroad, credit cards supported' },
      { icon: '⚡', title: 'Unlock on Purchase', desc: 'Get the Canva template link instantly after payment' },
      { icon: '🎨', title: 'Unlimited Edits', desc: 'Edit and reuse endlessly after purchase, commercial license included' },
    ],
  },
  'short-video-hook-asset-pack': {
    fullDescription: `A short-video asset pack that works in CapCut / Premiere / Final Cut.

🎬 Caption animation templates
• Explosive text burst (for knowledge videos)
• Typewriter reveal (for story videos)
• Neon glow sweep (for tech/cool themes)
• Handwritten doodle (for lifestyle vlogs)
• Alert bar / breaking news (for controversy)

🔊 Transition SFX pack
• Impact SFX (pull attention back)
• Swipe SFX (for scene changes)
• Bell/notification (for emphasis)
• Ambient (suspense/tension)
• Comedy SFX (for funny content)

📝 100 golden opening hooks
• By theme: knowledge/controversy/relatable/suspense/list
• Includes a "which content fits which hook" guide

⚙️ File formats
• MP4 (animation templates)
• MP3 + WAV (SFX)
• PDF (hook copy library)`,
    features: [
      'Caption animation templates (MP4, drop-in)',
      'Transition SFX (MP3 + WAV)',
      'Golden opening-hook copy',
      'Works with CapCut / Premiere / Final Cut',
      'Includes captioned versions',
    ],
  },
  'ai-personal-brand-full-pack': {
    fullDescription: `Still envying how well others run their personal brand while you don't even know "what the first step is"?

The problem was never that you don't try hard enough — it's that you're missing a system you can just follow.

This pack prepares everything you need to go "from 0 to a personal brand" — the tools, prompts and steps. You just fill in the blanks, copy, and publish.

🎯 Who it's for
• People who want to build a personal brand but don't know where to start
• Creators whose content is slow and directionless, who keep going dark
• People who want to use AI but don't know how to prompt

📦 What you get (5 parts)

📱 Part 1｜Setting up your IG account
• AI bio prompts (enter your positioning, get 5 versions at once)
• Personal-brand positioning worksheet (4 questions to find your edge)
• Highlights categories and cover design tips

💡 Part 2｜IG content idea bank
• 16 post ideas, organized by content pillar (value / trends / story)
• Each idea comes with a format suggestion + a ready-to-use ChatGPT prompt
• No more staring at a blank screen

✍️ Part 3｜Blog prompts ×20
• SEO title generator, article outlines, conclusions and CTAs
• "Make AI write in your voice" tuning techniques

📧 Part 4｜Newsletter prompts ×5
• Weekly digest / tips list / personal story / promo notice / special thanks
• One prompt per format — it even generates the subject line

🚀 Part 5｜30-day execution calendar
• One action per day, a single clear throughline
• A full roadmap from setting up your account to your first 1,000 followers

💡 Why it works
The prompts are versions proven in real operation that produce publish-ready content — not vague templates you copy but can't get anything out of. Paired with clear content pillars and a steady posting rhythm, the first 30 days can realistically build 250–500 followers (depending on niche and execution).

📂 How you get it: unlock the online version with a personal serial after purchase — permanent access, prompts copy in one click.`,
    features: [
      'IG account setup: bio prompts + positioning worksheet',
      'IG content idea bank: 16 ideas + prompts',
      'Blog prompts ×20 (SEO titles, outlines, CTAs)',
      'Newsletter prompts ×5 (subject lines included)',
      '30-day execution calendar (0→1,000 followers path)',
    ],
    trustBadges: [
      { icon: '🔒', title: 'Secure Payment', desc: 'Encrypted payment via Gumroad, credit cards supported' },
      { icon: '⚡', title: 'Unlock on Purchase', desc: 'Instantly unlock the online edition with your license key after payment' },
      { icon: '♾️', title: 'Key Never Expires', desc: 'Log back in anytime with the same license key' },
    ],
  },
  'line-auto-budget-bot': {
    fullDescription: `The biggest problem with budgeting apps is: do you remember to open them?

This script lets you log on the go in LINE, organized automatically.

🤖 Dead simple to use
1. Message LINE "lunch 150" or "transit 45 EasyCard"
2. The bot auto-categorizes and logs it to Google Sheets
3. Every Sunday it sends you a weekly spending report

📊 Auto-generated charts
• Monthly spending pie chart (by category)
• Daily spending line chart
• Bar chart comparing with last month
• "Danger category" alerts (auto-notify when over budget)

🗂️ Spending categories (customizable)
• Food/Transit/Shopping/Entertainment/Medical/Daily/Other
• Fixed vs. variable expenses calculated separately

⚙️ Setup notes
• Uses the LINE Messaging API (free tier)
• Google Apps Script (completely free)
• No coding needed — just follow the steps
• Includes a 30-minute setup video tutorial`,
    features: [
      'Log expenses by messaging LINE — no app to open',
      'Auto-syncs to Google Sheets',
      'Weekly auto pie chart + line chart',
      'Auto LINE alert when over budget',
      'Includes a step-by-step video (done in 30 min)',
    ],
  },
  'super-voice-assistant': {
    fullDescription: `Ever follow a prompt exactly, paste it into ChatGPT, and get something that feels totally generic — like anyone could have written it?

The problem isn't the prompt. **AI just doesn't know who you are.**

Every time you use a prompt, you're supposed to tell AI your background and context first. But typing that out from scratch every single time is slow. Most people skip it — and that's why they keep getting generic output.

That's why I always tell people to download **Typeless** first.

🎙️ The 4-Step Spoken Self-Intro

Open Typeless and speak these four things into your mic:
1. **Who you are** (your identity, background, role)
2. **What you're working on** (your current project or task)
3. **What you want to achieve** (the goal for this session)
4. **What the output should look like** (tone, format, style)

Typeless transcribes everything into clean, structured text — no filler words, no mess. Paste that at the top of any prompt, and AI instantly knows who it's talking to. Outputs become more relevant, more on-brand, and need far fewer revisions.

🌏 Why I Love Typeless Abroad

I started using Typeless through a partnership, but I got genuinely hooked — especially for travel. When someone speaks too fast or the audio is bad, Google Translate often can't keep up. Typeless puts their exact words on your screen in real time, so you at least know what's being said — even if you can't respond immediately.

I keep it on both my phone and laptop. It's become a travel essential.

📥 How to Get It

Click the button below to download Typeless free through my link.
Once installed, speak your 4-step intro once and save the text — paste it at the top of any AI session from now on.`,
    features: [
      '4-step spoken self-intro — give AI the context it needs',
      'Voice input is 4× faster than typing (220 wpm vs 45 wpm)',
      'Pairs with any prompt pack for far more relevant output',
      "Live translation — great when you can't understand someone abroad",
      'Free download, works on mobile and desktop',
    ],
    trustBadges: [
      { icon: '📱', title: 'Free Download', desc: 'Available on phone and desktop, download directly through the link' },
      { icon: '⚡', title: 'Free to Use', desc: 'Completely free, no payment needed to get started' },
      { icon: '🌏', title: 'Travel Translator', desc: 'Works abroad too — real-time voice translation' },
    ],
  },
}

