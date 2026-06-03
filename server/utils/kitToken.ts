import { createHmac, timingSafeEqual } from 'node:crypto'

// 用 HMAC 簽一張「已驗證」的門票，存在 httpOnly cookie 裡。
// 序號本身不存進 cookie，只存後 6 碼方便除錯 + 到期時間。

function getSecret(): string {
  const { kitSecret } = useRuntimeConfig()
  return (kitSecret as string) || 'zeona-dev-insecure-secret-change-me'
}

export function signKitToken(payload: Record<string, unknown>): string {
  const data = Buffer.from(JSON.stringify(payload)).toString('base64url')
  const sig = createHmac('sha256', getSecret()).update(data).digest('base64url')
  return `${data}.${sig}`
}

export function verifyKitToken(token?: string | null): Record<string, unknown> | null {
  if (!token) return null
  const [data, sig] = token.split('.')
  if (!data || !sig) return null

  const expected = createHmac('sha256', getSecret()).update(data).digest('base64url')
  const a = Buffer.from(sig)
  const b = Buffer.from(expected)
  if (a.length !== b.length || !timingSafeEqual(a, b)) return null

  try {
    const payload = JSON.parse(Buffer.from(data, 'base64url').toString())
    if (payload.exp && Date.now() > payload.exp) return null
    return payload
  } catch {
    return null
  }
}

export const KIT_COOKIE = 'kit_ai_brand'
