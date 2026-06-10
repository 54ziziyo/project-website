/**
 * 只發布「單一篇」文章到 Notion（中英雙語 + SEO），用原生 fetch，免裝任何套件。
 * 用 ID 去重：若 Notion 已有同 ID 文章，會先 archive 舊的再建新的，避免重複。
 * 執行：npx tsx scripts/publish-single-blog.ts <post-id>
 * 例：  npx tsx scripts/publish-single-blog.ts google-ai-search-duckduckgo-surge-2026
 */

import { readFileSync, existsSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { blogPosts } from '../data/blogs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const TOKEN = process.env.NOTION_TOKEN
const DB = process.env.NOTION_DATABASE_ID
const NOTION_VERSION = '2022-06-28'

if (!TOKEN || !DB) {
  console.error('❌ 請先在 .env 設定 NOTION_TOKEN 和 NOTION_DATABASE_ID')
  process.exit(1)
}

const postId = process.argv[2]
if (!postId) {
  console.error('❌ 用法：npx tsx scripts/publish-single-blog.ts <post-id>')
  process.exit(1)
}

const post = blogPosts.find((p) => p.id === postId)
if (!post) {
  console.error(`❌ data/blogs.ts 找不到 id="${postId}"`)
  process.exit(1)
}

const headers = {
  Authorization: `Bearer ${TOKEN}`,
  'Content-Type': 'application/json',
  'Notion-Version': NOTION_VERSION,
}

async function api(path: string, method: string, body?: object) {
  const res = await fetch(`https://api.notion.com/v1${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  })
  if (!res.ok) throw new Error(`${method} ${path} → ${res.status} ${await res.text()}`)
  return res.json()
}

async function ensureSchema() {
  await api(`/databases/${DB}`, 'PATCH', {
    properties: {
      Featured: { checkbox: {} },
      'Title (EN)': { rich_text: {} },
      'Excerpt (EN)': { rich_text: {} },
      'Tags (EN)': { multi_select: {} },
      'SEO Title (EN)': { rich_text: {} },
      'SEO Description (EN)': { rich_text: {} },
      'SEO Keywords (EN)': { rich_text: {} },
      'Cover Image (EN)': { url: {} },
    },
  })
  console.log('✅ 欄位確認/補齊完成')
}

function splitContent(html: string): string[] {
  const chunks: string[] = []
  const s = html.trim()
  for (let i = 0; i < s.length; i += 2000) chunks.push(s.slice(i, i + 2000))
  return chunks
}

function readEnHtml(id: string): string {
  const f = resolve(__dirname, '..', 'blog-en', `${id}.html`)
  return existsSync(f) ? readFileSync(f, 'utf8') : ''
}

async function archiveExisting(id: string) {
  const data: any = await api(`/databases/${DB}/query`, 'POST', {
    filter: { property: 'ID', rich_text: { equals: id } },
  })
  for (const page of data.results) {
    await api(`/pages/${page.id}`, 'PATCH', { archived: true })
    console.log(`🗑  已封存舊版本：${page.id}`)
  }
}

function rt(text: string) {
  return { rich_text: [{ text: { content: (text || '').slice(0, 2000) } }] }
}

async function main() {
  await ensureSchema()
  await archiveExisting(post!.id)

  const zhChunks = splitContent(post!.content)
  const enHtml = readEnHtml(post!.id)
  const enChunks = enHtml ? splitContent(enHtml) : []
  console.log(`📝 中文 ${zhChunks.length} 段、英文 ${enChunks.length} 段`)

  const children: any[] = [
    { object: 'block', type: 'heading_2', heading_2: { rich_text: [{ text: { content: '文章內容（HTML）' } }] } },
    ...zhChunks.map((c) => ({
      object: 'block', type: 'code',
      code: { rich_text: [{ text: { content: c } }], language: 'html' },
    })),
    ...enChunks.map((c) => ({
      object: 'block', type: 'code',
      code: { rich_text: [{ text: { content: c } }], caption: [{ text: { content: 'en' } }], language: 'html' },
    })),
  ]

  await api('/pages', 'POST', {
    parent: { database_id: DB },
    cover: post!.coverImage ? { type: 'external', external: { url: post!.coverImage } } : undefined,
    properties: {
      Title: { title: [{ text: { content: post!.title } }] },
      ID: rt(post!.id),
      Category: { select: { name: post!.category } },
      Tags: { multi_select: post!.tags.map((t) => ({ name: t })) },
      Excerpt: rt(post!.excerpt),
      'Cover Image': { url: post!.coverImage || null },
      'Cover Image (EN)': { url: post!.coverImageEn || null },
      Author: rt(post!.author),
      'Published At': { date: { start: post!.publishedAt } },
      Status: { select: { name: 'Published' } },
      Featured: { checkbox: !!post!.featured },
      'SEO Title': rt(post!.seo.title),
      'SEO Description': rt(post!.seo.description),
      'SEO Keywords': rt(post!.seo.keywords),
      'Title (EN)': rt(post!.titleEn || ''),
      'Excerpt (EN)': rt(post!.excerptEn || ''),
      'Tags (EN)': { multi_select: (post!.tagsEn || []).map((t) => ({ name: t })) },
      'SEO Title (EN)': rt(post!.seoEn?.title || ''),
      'SEO Description (EN)': rt(post!.seoEn?.description || ''),
      'SEO Keywords (EN)': rt(post!.seoEn?.keywords || ''),
    },
    children,
  })

  console.log(`🎉 已發布：${post!.title}`)
  console.log(`🔗 /blog/${post!.id}  (英：/en/blog/${post!.id})`)
}

main().catch((e) => {
  console.error('❌ 發布失敗：', e?.message || e)
  process.exit(1)
})
