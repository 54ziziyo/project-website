// 在瀏覽器本地記住「哪個 kit（商品）用哪一組序號」，讓回訪買家不必再去信箱翻序號、也不必每次重新解鎖。
// 只存序號字串，不含任何敏感資訊；以 kit slug 為鍵，支援多個商品各自的序號。
const STORAGE_KEY = 'zeona_licenses'

type LicenseMap = Record<string, string>

function read(): LicenseMap {
  if (!import.meta.client) return {}
  try {
    const v = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
    return v && typeof v === 'object' ? (v as LicenseMap) : {}
  } catch {
    return {}
  }
}

function write(map: LicenseMap) {
  if (!import.meta.client) return
  localStorage.setItem(STORAGE_KEY, JSON.stringify(map))
}

export function useLicenseStore() {
  // 記住某商品的序號（解鎖成功後呼叫）。重插以保留「最近使用」順序。
  function rememberKeyForKit(kit: string, key: string) {
    if (!kit || !key) return
    const map = read()
    delete map[kit]
    map[kit] = key
    write(map)
  }

  // 取某商品已記住的序號
  function getKeyForKit(kit: string): string | undefined {
    return read()[kit]
  }

  // 取最近一次使用的序號（解鎖頁無特定商品時用來預填）
  function getRecentKey(): string | undefined {
    const vals = Object.values(read())
    return vals.length ? vals[vals.length - 1] : undefined
  }

  return { rememberKeyForKit, getKeyForKit, getRecentKey }
}
