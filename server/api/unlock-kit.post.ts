import { signKitToken, verifyKitToken, KIT_COOKIE } from '~/server/utils/kitToken'
import { KIT_PRODUCTS, findKitProduct, type KitProduct } from '~/server/utils/kitProducts'

// 用 Gumroad 的 License API 驗證序號，通過就發一張 60 天的門票 cookie。
// 多商品：商品清單在 server/utils/kitProducts.ts（伺服器端，前端不可偽造）。
// 用戶只需貼序號 —— 後端會自動找出序號屬於哪個商品並解鎖對應內容。

interface GumroadVerifyResponse {
  success: boolean
  message?: string
  uses?: number
  purchase?: {
    refunded?: boolean
    chargebacked?: boolean
    disputed?: boolean
    subscription_cancelled_at?: string | null
    email?: string
  }
}

async function verifyLicense(permalink: string, licenseKey: string): Promise<GumroadVerifyResponse | null> {
  return await $fetch<GumroadVerifyResponse>('https://api.gumroad.com/v2/licenses/verify', {
    method: 'POST',
    body: new URLSearchParams({
      product_permalink: permalink,
      license_key: licenseKey,
      increment_uses_count: 'false',
    }),
  }).catch(() => null)
}

export default defineEventHandler(async (event) => {
  const body = await readBody<{ license_key?: string; kit?: string }>(event)
  const licenseKey = body?.license_key?.trim()
  if (!licenseKey) {
    throw createError({ statusCode: 400, statusMessage: '請輸入序號' })
  }

  // 若前端有帶 kit 提示且存在，先驗它（省一次 API）；否則對所有商品逐一嘗試，自動判斷序號屬於哪個商品。
  const hinted = findKitProduct(body?.kit)
  const candidates: KitProduct[] = hinted ? [hinted, ...KIT_PRODUCTS.filter((p) => p !== hinted)] : KIT_PRODUCTS

  let matched: KitProduct | null = null
  let result: GumroadVerifyResponse | null = null

  for (const product of candidates) {
    const res = await verifyLicense(product.permalink, licenseKey)
    if (res?.success) {
      matched = product
      result = res
      break
    }
  }

  if (!matched || !result) {
    throw createError({ statusCode: 403, statusMessage: '序號無效，請確認是否複製完整（注意：範例序號無法使用）' })
  }

  const p = result.purchase || {}
  if (p.refunded || p.chargebacked || p.disputed) {
    throw createError({ statusCode: 403, statusMessage: '此訂單已退款或停權，無法使用' })
  }

  // 合併既有可用 kit 權限，避免不同商品分次解鎖時互相覆蓋。
  const prev = verifyKitToken(getCookie(event, KIT_COOKIE))
  const prevKitsRaw = prev && typeof prev === 'object' && 'kits' in prev ? (prev as { kits?: unknown }).kits : undefined
  const prevKits = Array.isArray(prevKitsRaw) ? prevKitsRaw.filter((v): v is string => typeof v === 'string') : []
  const kits = Array.from(new Set([...prevKits, matched.kit]))

  const token = signKitToken({
    k: licenseKey.slice(-6),
    kits,
    exp: Date.now() + 1000 * 60 * 60 * 24 * 60, // 60 天
  })

  setCookie(event, KIT_COOKIE, token, {
    httpOnly: true,
    secure: !import.meta.dev, // 正式環境(https)才 secure；本機 http://localhost 設 false，否則瀏覽器不會回傳 cookie
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 60,
  })

  // 回傳解鎖目標，讓前端導向對應內容
  return {
    ok: true,
    kit: matched.kit,
    label: matched.label,
    type: matched.type,
    next: matched.next ?? null,
    nextEn: matched.nextEn ?? null,
    url: matched.url ?? null,
  }
})
