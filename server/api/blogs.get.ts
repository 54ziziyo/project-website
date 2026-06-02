import { queryDatabase, pageToPost } from '~/server/utils/notion'

export default defineEventHandler(async (event) => {
  const { notionToken, notionDatabaseId } = useRuntimeConfig(event)

  const data = await queryDatabase(notionToken, notionDatabaseId, {
    filter: { property: 'Status', select: { equals: 'Published' } },
    sorts: [{ property: 'Published At', direction: 'descending' }],
  })

  return data.results.map((page: any) => pageToPost(page))
})
