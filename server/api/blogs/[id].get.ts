import { queryDatabase, getBlocks, extractText, pageToPost, type NotionBlock } from '~/server/utils/notion'

export default defineEventHandler(async (event) => {
  const { notionToken, notionDatabaseId } = useRuntimeConfig(event)
  const id = getRouterParam(event, 'id')

  const data = await queryDatabase(notionToken, notionDatabaseId, {
    filter: { property: 'ID', rich_text: { equals: id } },
  })

  if (!data.results.length) {
    throw createError({ statusCode: 404, message: '文章不存在' })
  }

  const page = data.results[0]
  const blocks = await getBlocks(notionToken, page.id)

  const codeBlocks = blocks.results.filter((b: NotionBlock) => b.type === 'code')
  // caption 含 "en" 的 code block 視為英文內文，其餘為中文內文
  const isEnBlock = (b: NotionBlock) => extractText(b.code?.caption).toLowerCase().includes('en')

  const content = codeBlocks
    .filter((b: NotionBlock) => !isEnBlock(b))
    .map((b: NotionBlock) => extractText(b.code?.rich_text))
    .join('')

  const contentEn = codeBlocks
    .filter((b: NotionBlock) => isEnBlock(b))
    .map((b: NotionBlock) => extractText(b.code?.rich_text))
    .join('')

  setResponseHeader(event, 'Cache-Control', 's-maxage=3600, stale-while-revalidate=86400')
  return pageToPost(page, content, contentEn)
})
