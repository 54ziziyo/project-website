import { verifyKitToken, KIT_COOKIE } from '~/server/utils/kitToken'
import { renderCourse } from '~/server/utils/renderCourse'

export default defineEventHandler(async (event) => {
  const enforceAuth = !import.meta.dev || !!useRuntimeConfig().kitForceAuth
  if (enforceAuth) {
    const payload = verifyKitToken(getCookie(event, KIT_COOKIE))
    if (!payload) return sendRedirect(event, '/kit/unlock', 302)
    const obj = payload as Record<string, unknown>
    if ('kits' in obj) {
      const kits = Array.isArray(obj.kits) ? obj.kits : []
      if (!kits.includes('ai-personal-brand')) return sendRedirect(event, '/kit/unlock', 302)
    }
  }

  const store = useStorage('assets:server')
  const [shell, md] = await Promise.all([
    store.getItem<string>('kit/_course-shell.html'),
    store.getItem<string>('kit/ai-personal-brand.md'),
  ])
  if (!shell || !md) throw createError({ statusCode: 404, statusMessage: 'Content not found' })

  setResponseHeaders(event, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'private, no-store' })
  return renderCourse(shell, md)
})
