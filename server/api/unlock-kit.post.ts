import { signKitToken, KIT_COOKIE } from '~/server/utils/kitToken'

// 用 Gumroad 的 License API 驗證序號，通過就發一張 60 天的門票 cookie。
// 需要環境變數 GUMROAD_PRODUCT_ID（你 Gumroad 產品的 product_id）。

interface GumroadVerifyResponse {
  success: boolean
  uses?: number
  purchase?: {
    refunded?: boolean
    chargebacked?: boolean
    disputed?: boolean
    subscription_cancelled_at?: string | null
    email?: string
  }
}

export default defineEventHandler(async (event) => {
  const body = await readBody<{ license_key?: string }>(event)
  const licenseKey = body?.license_key?.trim()
  if (!licenseKey) {
    throw createError({ statusCode: 400, statusMessage: '請輸入序號' })
  }

  const { gumroadProductId } = useRuntimeConfig(event)
  if (!gumroadProductId) {
    throw createError({ statusCode: 500, statusMessage: '尚未設定 GUMROAD_PRODUCT_ID' })
  }

  const res = await $fetch<GumroadVerifyResponse>('https://api.gumroad.com/v2/licenses/verify', {
    method: 'POST',
    body: new URLSearchParams({
      product_id: String(gumroadProductId),
      license_key: licenseKey,
      increment_uses_count: 'false',
    }),
  }).catch(() => null)

  if (!res || !res.success) {
    throw createError({ statusCode: 403, statusMessage: '序號無效，請確認是否複製完整' })
  }

  const p = res.purchase || {}
  if (p.refunded || p.chargebacked || p.disputed) {
    throw createError({ statusCode: 403, statusMessage: '此訂單已退款或停權，無法使用' })
  }

  const token = signKitToken({
    k: licenseKey.slice(-6),
    exp: Date.now() + 1000 * 60 * 60 * 24 * 60, // 60 天
  })

  setCookie(event, KIT_COOKIE, token, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 60,
  })

  return { ok: true }
})
