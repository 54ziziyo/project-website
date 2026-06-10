import { queryDatabase, pageToPost } from '~/server/utils/notion'

export default defineEventHandler(async (event) => {
  const { notionToken, notionDatabaseId } = useRuntimeConfig(event)

  const data = await queryDatabase(notionToken, notionDatabaseId, {
    filter: { property: 'Status', select: { equals: 'Published' } },
    sorts: [{ property: 'Published At', direction: 'descending' }],
  })

  setResponseHeader(event, 'Cache-Control', 's-maxage=300, stale-while-revalidate=3600')
  return data.results.map((page: any) => pageToPost(page))
})
