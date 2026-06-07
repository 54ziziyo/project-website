// 付費數位商品註冊表（伺服器端唯一真實來源，前端不可偽造）。
// 新增商品 = 在這裡加一筆即可，/kit/unlock 會自動支援、依序號跳對應內容。
//
// 解鎖流程：用戶在 /kit/unlock 貼序號 → 後端拿序號輪流向 Gumroad 驗證每個商品，
// 命中哪個就解鎖哪個。所以同一個 /kit/unlock 入口可服務所有商品，PDF 不必帶參數。
//
// ⚠️ Gumroad 驗證一律用 productId（部分商品強制要求 product_id，不接受 product_permalink）。
//    productId 取得：Gumroad 商品 → Content → 展開 License key 區塊 →
//    「Use your product ID to verify licenses through the API」那串（例：JxC5LPY90o9Oblk4dfDlFQ==）。
//
// type:
//   'page' → 站內受保護 HTML 頁（serveKit 用 cookie 控管），解鎖後導向 next/nextEn
//   'link' → 交付為外部連結（如 Notion 公開複製連結），解鎖後直接導過去 url

export interface KitProduct {
  kit: string // 唯一代號；存進 token.kits、serveKit 的 requiredKit 也用它
  productId: string // Gumroad product_id（驗證序號用，必填）
  permalink: string // Gumroad 商品網址 /l/ 後面那段（購買連結用）
  label: string
  type: 'page' | 'link'
  next?: string // type=page：中文內容頁
  nextEn?: string // type=page：英文內容頁
  url?: string // type=link：解鎖後導向的連結
}

export const KIT_PRODUCTS: KitProduct[] = [
  {
    kit: 'ai-personal-brand',
    productId: 'JxC5LPY90o9Oblk4dfDlFQ==',
    permalink: 'pmqqiu',
    label: 'AI 個人品牌建立包',
    type: 'page',
    next: '/kit/ai-personal-brand',
    nextEn: '/en/kit/ai-personal-brand',
  },
  {
    kit: 'crm',
    // TODO：填入 CRM 在 Gumroad 的 product_id（Content → License key → Use your product ID…）
    productId: '',
    permalink: 'jcfhy',
    label: 'CRM 客戶管理系統',
    type: 'link',
    // TODO：換成 CRM 在 Notion「Publish to web + Allow duplicate as template」後的公開 notion.site 連結
    url: 'https://app.notion.com/p/CRM-376cf51200d28132af47ed83e7c62046',
  },
]

export function findKitProduct(kit?: string | null): KitProduct | undefined {
  if (!kit) return undefined
  return KIT_PRODUCTS.find((p) => p.kit === kit)
}
