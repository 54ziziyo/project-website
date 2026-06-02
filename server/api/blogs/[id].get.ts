import { queryDatabase, getBlocks, extractText, pageToPost } from '~/server/utils/notion'

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

  const content = blocks.results
    .filter((b: any) => b.type === 'code')
    .map((b: any) => extractText(b.code?.rich_text))
    .join('')

  return pageToPost(page, content)
})
