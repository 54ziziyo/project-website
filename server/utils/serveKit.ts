import type { H3Event } from 'h3'
import { verifyKitToken, KIT_COOKIE } from '~/server/utils/kitToken'

// 共用的「上鎖內容」處理：驗證序號 cookie 後，依語言提供對應的 HTML 檔。
// zh → kit/ai-personal-brand.html；en → kit/ai-personal-brand.en.html
export async function serveKit(event: H3Event, file: string, lang: 'zh' | 'en' = 'zh') {
  // 本機開發免驗證，方便預覽
  if (!import.meta.dev) {
    const token = getCookie(event, KIT_COOKIE)
    if (!verifyKitToken(token)) {
      return sendRedirect(event, lang === 'en' ? '/en/kit/unlock' : '/kit/unlock', 302)
    }
  }

  // 英文檔若尚未提供，先 fallback 回中文版，避免 404
  let html = await useStorage('assets:server').getItem<string>(file)
  if (!html && file.endsWith('.en.html')) {
    html = await useStorage('assets:server').getItem<string>('kit/ai-personal-brand.html')
  }
  if (!html) {
    throw createError({ statusCode: 404, statusMessage: 'Content not found' })
  }

  setResponseHeaders(event, {
    'Content-Type': 'text/html; charset=utf-8',
    'Cache-Control': 'private, no-store',
  })
  return html
}
