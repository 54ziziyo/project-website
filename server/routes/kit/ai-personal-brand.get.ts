import { verifyKitToken, KIT_COOKIE } from '~/server/utils/kitToken'

// 受保護的內容頁：只有持有效門票 cookie 的人才看得到 HTML，
// 否則導去 /kit/unlock 輸入序號。
// HTML 放在 server/assets/kit/ 裡（不在 public/，所以不會被直接存取）。

export default defineEventHandler(async (event) => {
  // 本機開發時免驗證，方便預覽編輯
  if (!import.meta.dev) {
    const token = getCookie(event, KIT_COOKIE)
    if (!verifyKitToken(token)) {
      return sendRedirect(event, '/kit/unlock', 302)
    }
  }

  const html = await useStorage('assets:server').getItem<string>('kit/ai-personal-brand.html')
  if (!html) {
    throw createError({ statusCode: 404, statusMessage: '找不到內容檔' })
  }

  setResponseHeaders(event, {
    'Content-Type': 'text/html; charset=utf-8',
    'Cache-Control': 'private, no-store',
  })
  return html
})
