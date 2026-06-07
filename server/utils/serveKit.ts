import type { H3Event } from 'h3'
import { verifyKitToken, KIT_COOKIE } from '~/server/utils/kitToken'

// 共用的「上鎖內容」處理：驗證序號 cookie 後，依語言提供對應的 HTML 檔。
// zh → kit/ai-personal-brand.html；en → kit/ai-personal-brand.en.html
export async function serveKit(
  event: H3Event,
  file: string,
  lang: 'zh' | 'en' = 'zh',
  requiredKit: string = 'ai-personal-brand',
) {
  // 本機開發免驗證，方便預覽
  if (!import.meta.dev) {
    const token = getCookie(event, KIT_COOKIE)
    const payload = verifyKitToken(token)

    if (!payload) {
      return sendRedirect(event, lang === 'en' ? '/en/kit/unlock' : '/kit/unlock', 302)
    }

    // 新版 token 帶 kits 陣列做細粒度存取控制；
    // 舊版 token（升級前已解鎖的用戶）沒有 kits 欄位，視為有所有基礎 kit 存取權，避免強制重新解鎖。
    const payloadObj = payload as Record<string, unknown>
    if ('kits' in payloadObj) {
      const kits = Array.isArray(payloadObj.kits) ? payloadObj.kits : []
      if (!kits.includes(requiredKit)) {
        return sendRedirect(event, lang === 'en' ? '/en/kit/unlock' : '/kit/unlock', 302)
      }
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
