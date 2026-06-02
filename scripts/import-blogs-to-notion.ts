/**
 * 將 data/blogs.ts 的文章批次匯入到 Notion Database
 * 執行方式：npx tsx scripts/import-blogs-to-notion.ts
 */

import { Client } from '@notionhq/client'
import { blogPosts } from '../data/blogs'

const NOTION_TOKEN = process.env.NOTION_TOKEN
const DATABASE_ID = process.env.NOTION_DATABASE_ID

if (!NOTION_TOKEN || !DATABASE_ID) {
  console.error('❌ 請先在 .env 設定 NOTION_TOKEN 和 NOTION_DATABASE_ID')
  process.exit(1)
}

const notion = new Client({ auth: NOTION_TOKEN })

async function setupDatabaseSchema() {
  const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${NOTION_TOKEN}`,
      'Content-Type': 'application/json',
      'Notion-Version': '2022-06-28',
    },
    body: JSON.stringify({
      properties: {
        Name: { name: 'Title' },
        ID: { rich_text: {} },
        Category: { select: {} },
        Tags: { multi_select: {} },
        Excerpt: { rich_text: {} },
        'Cover Image': { url: {} },
        Author: { rich_text: {} },
        'Published At': { date: {} },
        Status: { select: {} },
        'SEO Title': { rich_text: {} },
        'SEO Description': { rich_text: {} },
        'SEO Keywords': { rich_text: {} },
      },
    }),
  })
  if (!res.ok) {
    const err = await res.json()
    throw new Error(`Schema 建立失敗：${JSON.stringify(err)}`)
  }
  console.log('✅ Database 欄位建立完成')
}

function splitContent(html: string): string[] {
  const chunks: string[] = []
  let i = 0
  while (i < html.length) {
    chunks.push(html.slice(i, i + 2000))
    i += 2000
  }
  return chunks
}

async function importPost(post: (typeof blogPosts)[0]) {
  const contentChunks = splitContent(post.content.trim())

  await notion.pages.create({
    parent: { database_id: DATABASE_ID! },
    cover: post.coverImage
      ? { type: 'external', external: { url: post.coverImage } }
      : undefined,
    properties: {
      Title: {
        title: [{ text: { content: post.title } }],
      },
      ID: {
        rich_text: [{ text: { content: post.id } }],
      },
      Category: {
        select: { name: post.category },
      },
      Tags: {
        multi_select: post.tags.map((tag) => ({ name: tag })),
      },
      Excerpt: {
        rich_text: [{ text: { content: post.excerpt.slice(0, 2000) } }],
      },
      'Cover Image': {
        url: post.coverImage || null,
      },
      Author: {
        rich_text: [{ text: { content: post.author } }],
      },
      'Published At': {
        date: { start: post.publishedAt },
      },
      Status: {
        select: { name: 'Published' },
      },
      'SEO Title': {
        rich_text: [{ text: { content: post.seo.title.slice(0, 2000) } }],
      },
      'SEO Description': {
        rich_text: [{ text: { content: post.seo.description.slice(0, 2000) } }],
      },
      'SEO Keywords': {
        rich_text: [{ text: { content: post.seo.keywords.slice(0, 2000) } }],
      },
    },
    children: [
      {
        object: 'block',
        type: 'heading_2',
        heading_2: {
          rich_text: [{ text: { content: '文章內容（HTML）' } }],
        },
      },
      ...contentChunks.map((chunk) => ({
        object: 'block' as const,
        type: 'code' as const,
        code: {
          rich_text: [{ text: { content: chunk } }],
          language: 'html' as const,
        },
      })),
    ],
  })

  console.log(`✅ 匯入：${post.title}`)
}

async function main() {
  await setupDatabaseSchema()
  console.log(`🚀 開始匯入 ${blogPosts.length} 篇文章到 Notion...`)

  for (const post of blogPosts) {
    try {
      await importPost(post)
      await new Promise((r) => setTimeout(r, 400))
    } catch (err: any) {
      console.error(`❌ 失敗：${post.title}`, err?.message)
    }
  }

  console.log('🎉 全部匯入完成！')
}

main()
