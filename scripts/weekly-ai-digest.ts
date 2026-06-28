/**
 * 每週自動爬 Product Hunt + Ben's Bites，用 Gemini 生成中英雙語文章，發布到 Notion。
 * 執行：npx tsx scripts/weekly-ai-digest.ts
 */

import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { execSync } from 'node:child_process'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')

const PRODUCT_HUNT_TOKEN = process.env.PRODUCT_HUNT_TOKEN
const GROQ_API_KEY = process.env.GROQ_API_KEY

if (!PRODUCT_HUNT_TOKEN || !GROQ_API_KEY) {
  console.error('❌ 請在 .env 設定 PRODUCT_HUNT_TOKEN 和 GROQ_API_KEY')
  process.exit(1)
}

// ── 1. 爬 Product Hunt 本週 Top AI 工具 ─────────────────────────────────────

async function fetchProductHunt(): Promise<{ name: string; tagline: string; description: string; url: string; votesCount: number }[]> {
  const query = `{
    posts(order: VOTES, topic: "artificial-intelligence", first: 5) {
      edges {
        node {
          name
          tagline
          description
          website
          votesCount
        }
      }
    }
  }`

  const res = await fetch('https://api.producthunt.com/v2/api/graphql', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${PRODUCT_HUNT_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  })

  if (!res.ok) throw new Error(`Product Hunt API 失敗：${res.status}`)
  const data: any = await res.json()
  return data.data.posts.edges.map((e: any) => ({
    name: e.node.name,
    tagline: e.node.tagline,
    description: e.node.description || e.node.tagline,
    url: e.node.website,
    votesCount: e.node.votesCount,
  }))
}

// ── 2. 爬 TechCrunch AI RSS ──────────────────────────────────────────────────

async function fetchBensBites(): Promise<{ title: string; summary: string; link: string }[]> {
  const res = await fetch('https://techcrunch.com/category/artificial-intelligence/feed/')
  if (!res.ok) throw new Error(`TechCrunch AI RSS 失敗：${res.status}`)
  const xml = await res.text()

  const items: { title: string; summary: string; link: string }[] = []
  const itemRegex = /<item>([\s\S]*?)<\/item>/g
  let match
  while ((match = itemRegex.exec(xml)) !== null && items.length < 5) {
    const block = match[1]
    const title = (/<title><!\[CDATA\[(.*?)\]\]><\/title>/.exec(block) || /<title>(.*?)<\/title>/.exec(block))?.[1] || ''
    const link = (/<link>(.*?)<\/link>/.exec(block))?.[1] || ''
    const desc = (/<description><!\[CDATA\[(.*?)\]\]><\/description>/.exec(block) || /<description>(.*?)<\/description>/.exec(block))?.[1] || ''
    const summary = desc.replace(/<[^>]+>/g, '').slice(0, 500)
    if (title) items.push({ title, summary, link })
  }
  return items
}

// ── 3. 用 Groq 生成中英文章 ──────────────────────────────────────────────────

async function groq(prompt: string): Promise<string> {
  const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${GROQ_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'llama-3.3-70b-versatile',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7,
      max_tokens: 4000,
    }),
  })
  if (!res.ok) throw new Error(`Groq API 失敗：${res.status} ${await res.text()}`)
  const data: any = await res.json()
  return data.choices?.[0]?.message?.content || ''
}

function today(): string {
  return new Date().toISOString().split('T')[0]
}

function slugify(text: string): string {
  return `weekly-ai-digest-${today()}`
}

// ── 4. 主流程 ─────────────────────────────────────────────────────────────────

async function main() {
  console.log('🔍 抓取 Product Hunt 資料...')
  const phTools = await fetchProductHunt()
  console.log(`✅ Product Hunt：${phTools.length} 個工具`)

  console.log('🔍 抓取 TechCrunch AI RSS...')
  const bbItems = await fetchBensBites()
  console.log(`✅ TechCrunch AI：${bbItems.length} 篇`)

  const toolsSummary = phTools.map((t, i) =>
    `${i + 1}. ${t.name}（${t.votesCount} votes）: ${t.tagline}. ${t.description?.slice(0, 150) || ''}`
  ).join('\n')

  const newsSummary = bbItems.map((b, i) =>
    `${i + 1}. ${b.title}: ${b.summary.slice(0, 200)}`
  ).join('\n')

  console.log('🤖 Groq 生成中文文章...')
  const zhPrompt = `
你是一位專業的 AI 科技部落客，替台灣讀者撰寫深度工具評測文章。

以下是本週 Product Hunt 上投票最多的 AI 工具（包含官網連結）：
${toolsSummary}

以下是本週 AI 新聞摘要：
${newsSummary}

請從上面資料挑選 3 個最值得關注的 AI 工具，依照以下規則撰寫一篇繁體中文部落格文章：

【嚴格規則】
- 全文使用繁體中文，絕對禁止出現簡體中文字（例：「信息」→「資訊」、「软件」→「軟體」、「视频」→「影片」）
- 標題不得使用「週報」二字，需根據介紹工具的實際內容命名，格式參考：「別再瞎忙了！這 3 款 AI 工具幫你搞定募資、行銷與自動化」，要讓人想點進來看，符合 SEO
- 正文字數必須達到 1,500 字以上，不得偷工減料，每個工具介紹至少 400 字
- 工具名稱第一次出現時必須加上 HTML 超連結，另開新分頁，例：<a href="https://官網" target="_blank" rel="noopener">工具名稱</a>
- 每個工具必須引用官方教學、官方文件或官方部落格的連結與圖片（用官方圖片 URL 即可，加上出處說明）
- 每個工具介紹都要有官方數據或可查證的來源佐證（如用戶數、準確率、市場數據等），並附出處
- 每個工具介紹後加一個「誰適合使用？」小節，這有助 Google Featured Snippet 收錄
- 加入「如何開始使用」操作步驟小節（至少 3 步驟）
- 加入「為什麼選它而不是同類產品？」對比分析
- 全文必須融入作者觀點：客觀評析但語氣親近、有溫度，像朋友推薦給你，不要像機器人在列清單
- 結尾加入 AI 倫理或趨勢觀點，增加讀者停留時間
- 符合 SEO 和 GEO 標準：自然帶入關鍵字、標題層級清晰（h2/h3）、段落簡短易讀

輸出格式（嚴格照這個格式，不要多寫其他東西）：

文章標題：[標題]
摘要：[100字以內的摘要]
標籤：[逗號分隔，5個標籤]
SEO標題：[含品牌名 Zeona Studio 的 SEO 標題]
SEO描述：[150字以內的 meta description]
SEO關鍵字：[逗號分隔的關鍵字]

---正文開始---
[完整 HTML 正文，使用 <h2>, <h3>, <p>, <ul>, <li>, <a> 標籤]
---正文結束---
`

  const zhRaw = await groq(zhPrompt)

  console.log('🤖 Groq 生成英文文章...')
  const enPrompt = `
You are a professional AI tech blogger writing in-depth tool reviews for an international audience.

AI tools this week from Product Hunt:
${toolsSummary}

AI news this week:
${newsSummary}

Pick the 3 most noteworthy tools and write an English blog post following these strict rules:

RULES:
- Title must NOT contain "weekly digest" or "roundup" — name it based on the specific tools covered. Make it compelling and SEO-optimized (e.g. "Stop Wasting Time: 3 AI Tools That Automate Fundraising, Email & Knowledge Management")
- Minimum 1,500 words — each tool section must be at least 400 words, no shortcuts
- Every tool name must be hyperlinked to its official website on first mention: <a href="https://url" target="_blank" rel="noopener">Tool Name</a>
- Include official tutorial/docs links and official images (use official image URLs, cite the source)
- Include official stats or verifiable data for each tool with source attribution
- After each tool, add a "Who is this for?" section (helps Google Featured Snippet)
- Add a "How to get started" step-by-step section per tool (at least 3 steps)
- Add a "Why choose this over alternatives?" comparison per tool
- Write with a warm, approachable author voice — like a knowledgeable friend recommending tools, not a robot listing features. Include genuine opinions and perspective
- End with an AI ethics or trend insight to increase dwell time
- SEO and GEO optimized: natural keyword integration, clear heading hierarchy (h2/h3), short readable paragraphs

Output format (strictly follow, nothing extra):

Title: [Title]
Excerpt: [Under 100 words]
Tags: [5 comma-separated tags]
SEO Title: [SEO title with brand name Zeona Studio]
SEO Description: [Under 150 words meta description]
SEO Keywords: [comma-separated keywords]

---BODY START---
[Full HTML body using <h2>, <h3>, <p>, <ul>, <li>, <a> tags]
---BODY END---
`

  console.log('⏳ 等待 90 秒避免 rate limit...')
  await new Promise(r => setTimeout(r, 90000))
  const enRaw = await groq(enPrompt)

  function extract(raw: string, ...keys: string[]): string {
    for (const key of keys) {
      const line = raw.split('\n').find(l => l.startsWith(key))
      if (line) return line.slice(key.length).trim()
    }
    return ''
  }

  function extractBody(raw: string, start: string, end: string): string {
    const s = raw.indexOf(start)
    const e = raw.indexOf(end)
    if (s === -1 || e === -1) return raw
    return raw.slice(s + start.length, e).trim()
  }

  const zhTitle = extract(zhRaw, '文章標題：', '文章標題:', '文章標題（一行）：') || `AI 工具精選 ${today()}`
  const zhExcerpt = extract(zhRaw, '摘要：', '摘要:') || ''
  const zhTags = extract(zhRaw, '標籤：', '標籤:').split(/[,，]/).map(t => t.trim()).filter(Boolean)
  const zhSeoTitle = extract(zhRaw, 'SEO標題：', 'SEO標題:') || zhTitle
  const zhSeoDesc = extract(zhRaw, 'SEO描述：', 'SEO描述:') || zhExcerpt
  const zhSeoKeywords = extract(zhRaw, 'SEO關鍵字：', 'SEO關鍵字:') || ''
  const zhContent = extractBody(zhRaw, '---正文開始---', '---正文結束---')

  const enTitle = extract(enRaw, 'Title: ', 'Title:') || `AI Tools Digest ${today()}`
  const enExcerpt = extract(enRaw, 'Excerpt: ', 'Excerpt:') || ''
  const enTags = extract(enRaw, 'Tags: ', 'Tags:').split(',').map(t => t.trim()).filter(Boolean)
  const enSeoTitle = extract(enRaw, 'SEO Title: ', 'SEO Title:') || enTitle
  const enSeoDesc = extract(enRaw, 'SEO Description: ', 'SEO Description:') || enExcerpt
  const enSeoKeywords = extract(enRaw, 'SEO Keywords: ', 'SEO Keywords:') || ''
  const enContent = extractBody(enRaw, '---BODY START---', '---BODY END---')

  console.log(`📌 中文標題：${zhTitle}`)
  console.log(`📌 英文標題：${enTitle}`)
  console.log(`📌 中文摘要：${zhExcerpt.slice(0, 50)}...`)

  const postId = slugify(today())

  // 寫英文 HTML
  const enHtmlPath = resolve(ROOT, 'blog-en', `${postId}.html`)
  writeFileSync(enHtmlPath, enContent, 'utf8')
  console.log(`✅ 英文 HTML 已寫入：blog-en/${postId}.html`)

  // 讀現有 blogs.ts 並追加新文章
  const blogsPath = resolve(ROOT, 'data', 'blogs.ts')
  let blogsContent = readFileSync(blogsPath, 'utf8')

  const coverImage = `https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80`

  const newPost = `  {
    id: '${postId}',
    title: ${JSON.stringify(zhTitle)},
    category: 'AI 人工智慧',
    tags: ${JSON.stringify(zhTags.length ? zhTags : ['AI工具', '週報', 'Product Hunt', 'AI趨勢', '2026'])},
    excerpt: ${JSON.stringify(zhExcerpt)},
    titleEn: ${JSON.stringify(enTitle)},
    excerptEn: ${JSON.stringify(enExcerpt)},
    tagsEn: ${JSON.stringify(enTags.length ? enTags : ['AI Tools', 'Weekly Digest', 'Product Hunt', 'AI Trends', '2026'])},
    coverImage: '${coverImage}',
    coverImageEn: '${coverImage}',
    author: 'Zeona Studio',
    publishedAt: '${today()}',
    updatedAt: '${today()}',
    featured: false,
    seo: {
      title: ${JSON.stringify(zhSeoTitle)},
      description: ${JSON.stringify(zhSeoDesc)},
      keywords: ${JSON.stringify(zhSeoKeywords)},
      ogImage: '${coverImage}',
    },
    seoEn: {
      title: ${JSON.stringify(enSeoTitle)},
      description: ${JSON.stringify(enSeoDesc)},
      keywords: ${JSON.stringify(enSeoKeywords)},
    },
    content: ${JSON.stringify(zhContent)},
  },`

  // 插入到 blogPosts 陣列最前面
  blogsContent = blogsContent.replace(
    'export const blogPosts: BlogPost[] = [',
    `export const blogPosts: BlogPost[] = [\n${newPost}`
  )
  writeFileSync(blogsPath, blogsContent, 'utf8')
  console.log(`✅ data/blogs.ts 已更新，新增文章：${postId}`)

  // 發布到 Notion
  console.log('🚀 發布到 Notion...')
  execSync(
    `set -a && . ./.env && set +a && npx tsx scripts/publish-single-blog.ts ${postId}`,
    { cwd: ROOT, stdio: 'inherit' }
  )

  console.log(`\n🎉 完成！`)
  console.log(`   中文：/blog/${postId}`)
  console.log(`   英文：/en/blog/${postId}`)
}

main().catch(e => {
  console.error('❌ 失敗：', e?.message || e)
  process.exit(1)
})
