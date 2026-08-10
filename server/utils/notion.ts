const NOTION_VERSION = '2022-06-28'

// Notion API 回傳的資料結構（只列出本專案實際用到的欄位）
export interface NotionRichText {
  plain_text: string
}

export interface NotionSelectProp {
  select?: { name: string } | null
}

export interface NotionMultiSelectProp {
  multi_select?: { name: string }[]
}

export interface NotionRichTextProp {
  rich_text?: NotionRichText[]
}

export interface NotionTitleProp {
  title?: NotionRichText[]
}

export interface NotionUrlProp {
  url?: string | null
}

export interface NotionDateProp {
  date?: { start: string } | null
}

export interface NotionCheckboxProp {
  checkbox?: boolean
}

export interface NotionNumberProp {
  number?: number | null
}

export interface NotionPageProperties {
  ID?: NotionRichTextProp
  Title?: NotionTitleProp
  Category?: NotionSelectProp
  Tags?: NotionMultiSelectProp
  Excerpt?: NotionRichTextProp
  'Cover Image'?: NotionUrlProp
  'Cover Image (EN)'?: NotionUrlProp
  Author?: NotionRichTextProp
  'Published At'?: NotionDateProp
  Featured?: NotionCheckboxProp
  'Featured Order'?: NotionNumberProp
  'SEO Title'?: NotionRichTextProp
  'SEO Description'?: NotionRichTextProp
  'SEO Keywords'?: NotionRichTextProp
  'Title (EN)'?: NotionRichTextProp
  'Excerpt (EN)'?: NotionRichTextProp
  'Tags (EN)'?: NotionMultiSelectProp
  'SEO Title (EN)'?: NotionRichTextProp
  'SEO Description (EN)'?: NotionRichTextProp
  'SEO Keywords (EN)'?: NotionRichTextProp
}

export interface NotionPage {
  id: string
  properties: NotionPageProperties
}

export interface NotionBlock {
  type: string
  id?: string
  code?: {
    caption?: NotionRichText[]
    rich_text?: NotionRichText[]
  }
}

export interface NotionQueryResult<T> {
  results: T[]
  has_more?: boolean
  next_cursor?: string | null
}

export function notionHeaders(token: string) {
  return {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
    'Notion-Version': NOTION_VERSION,
  }
}

export function extractText(richText: NotionRichText[] | undefined): string {
  return richText?.map((t) => t.plain_text).join('') || ''
}

export async function queryDatabase(
  token: string,
  databaseId: string,
  body: object,
): Promise<NotionQueryResult<NotionPage>> {
  const res = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
    method: 'POST',
    headers: notionHeaders(token),
    body: JSON.stringify(body),
  })
  if (!res.ok) throw createError({ statusCode: res.status, message: await res.text() })
  return res.json()
}

export async function getBlocks(token: string, blockId: string): Promise<NotionQueryResult<NotionBlock>> {
  const res = await fetch(`https://api.notion.com/v1/blocks/${blockId}/children`, {
    headers: notionHeaders(token),
  })
  if (!res.ok) throw createError({ statusCode: res.status, message: await res.text() })
  return res.json()
}

export function pageToPost(page: NotionPage, content = '', contentEn = '') {
  const p = page.properties
  const coverImage = p['Cover Image']?.url || ''
  const coverImageEn = p['Cover Image (EN)']?.url || undefined
  return {
    id: extractText(p.ID?.rich_text) || page.id,
    title: extractText(p.Title?.title),
    category: p.Category?.select?.name || '',
    tags: p.Tags?.multi_select?.map((t) => t.name) || [],
    excerpt: extractText(p.Excerpt?.rich_text),
    coverImage,
    coverImageEn,
    author: extractText(p.Author?.rich_text),
    publishedAt: p['Published At']?.date?.start || '',
    updatedAt: p['Published At']?.date?.start || '',
    featured: p.Featured?.checkbox || false,
    featuredOrder: p['Featured Order']?.number ?? undefined,
    seo: {
      title: extractText(p['SEO Title']?.rich_text),
      description: extractText(p['SEO Description']?.rich_text),
      keywords: extractText(p['SEO Keywords']?.rich_text),
      ogImage: coverImage,
    },
    // 英文欄位（Notion 上的 *(EN) 屬性）；空字串代表該篇尚未提供英文
    titleEn: extractText(p['Title (EN)']?.rich_text),
    excerptEn: extractText(p['Excerpt (EN)']?.rich_text),
    tagsEn: p['Tags (EN)']?.multi_select?.map((t) => t.name) || [],
    seoEn: {
      title: extractText(p['SEO Title (EN)']?.rich_text),
      description: extractText(p['SEO Description (EN)']?.rich_text),
      keywords: extractText(p['SEO Keywords (EN)']?.rich_text),
    },
    content,
    contentEn,
  }
}
