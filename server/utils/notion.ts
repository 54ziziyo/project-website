const NOTION_VERSION = '2022-06-28'

export function notionHeaders(token: string) {
  return {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
    'Notion-Version': NOTION_VERSION,
  }
}

export function extractText(richText: any[]): string {
  return richText?.map((t: any) => t.plain_text).join('') || ''
}

export async function queryDatabase(token: string, databaseId: string, body: object) {
  const res = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
    method: 'POST',
    headers: notionHeaders(token),
    body: JSON.stringify(body),
  })
  if (!res.ok) throw createError({ statusCode: res.status, message: await res.text() })
  return res.json()
}

export async function getBlocks(token: string, blockId: string) {
  const res = await fetch(`https://api.notion.com/v1/blocks/${blockId}/children`, {
    headers: notionHeaders(token),
  })
  if (!res.ok) throw createError({ statusCode: res.status, message: await res.text() })
  return res.json()
}

export function pageToPost(page: any, content = '') {
  const p = page.properties
  const coverImage = p['Cover Image']?.url || ''
  return {
    id: extractText(p.ID?.rich_text) || page.id,
    title: extractText(p.Title?.title),
    category: p.Category?.select?.name || '',
    tags: p.Tags?.multi_select?.map((t: any) => t.name) || [],
    excerpt: extractText(p.Excerpt?.rich_text),
    coverImage,
    author: extractText(p.Author?.rich_text),
    publishedAt: p['Published At']?.date?.start || '',
    updatedAt: p['Published At']?.date?.start || '',
    featured: p.Featured?.checkbox || false,
    seo: {
      title: extractText(p['SEO Title']?.rich_text),
      description: extractText(p['SEO Description']?.rich_text),
      keywords: extractText(p['SEO Keywords']?.rich_text),
      ogImage: coverImage,
    },
    content,
  }
}
