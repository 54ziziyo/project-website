# Zeona 官網（project-website）

Nuxt 3 + Tailwind + @nuxt/ui。線上：https://zeona.vercel.app

## ⚠️ 部落格資料來源：Notion，不是 `data/blogs.ts`

部落格頁面（線上與本地 `npm run dev` 都一樣）只透過 `/api/blogs`、`/api/blogs/[id]` 從 **Notion 資料庫**撈文章，**完全不讀 `data/blogs.ts`，也沒有 fallback**。

- `data/blogs.ts`＝本地原始稿／型別來源；改它**不會**讓網站變動。
- 文章要上線，必須**匯入 Notion**。
- 英文內文存在 `blog-en/<id>.html`（Notion 內以 caption 標 `en` 的 code block 呈現）；中文內文在 `data/blogs.ts` 的 `content`。
- 憑證在 `.env`：`NOTION_TOKEN`、`NOTION_DATABASE_ID`。

## 發布一篇新文章（中英＋SEO）

1. 在 `data/blogs.ts` 新增一筆（含中文 `content`、`seo`，以及英文 metadata：`titleEn`/`excerptEn`/`tagsEn`/`seoEn`）。
2. 在 `blog-en/<id>.html` 放英文內文。
3. 跑單篇發布腳本（**只發這一篇、以 ID 去重、自動補英文與 Featured 欄位**）：

```bash
set -a && . ./.env && set +a && npx tsx scripts/publish-single-blog.ts <文章id>
```

文章網址：`/blog/<id>`，英文：`/en/blog/<id>`。

> 注意：`scripts/import-blogs-to-notion.ts` 是**整包重匯**且只推中文，會造成重複，平常別用；單篇一律用 `publish-single-blog.ts`。
> 線上 Vercel 若沒馬上更新，是頁面快取／需 redeploy，不是資料問題。

## 付費商品序號解鎖（/kit/unlock，多商品）

買家在 Gumroad 買付費商品 → 拿到 License Key → 到 `/kit/unlock` 貼序號 → 後端驗證後解鎖對應內容。**單一 `/kit/unlock` 入口服務所有商品**，PDF 不必帶參數。

**商品清單在 `server/utils/kitProducts.ts`（伺服器端唯一來源，前端不可偽造）。** 新增商品＝加一筆：
- `productId`：Gumroad 商品的 product_id（**驗證一律用這個，不要用 permalink——部分商品強制要求 product_id 會拒收 permalink**）。取得：Gumroad 商品 → Content → 展開 License key 區塊 →「Use your product ID to verify licenses through the API」那串（例：`JxC5LPY90o9Oblk4dfDlFQ==`）。
- `type: 'page'`＝站內受保護 HTML 頁（`serveKit` 用 cookie 控管），解鎖後導 `next`/`nextEn`；`type: 'link'`＝解鎖後導向外部連結 `url`（如 Notion 公開範本）。

解鎖流程：`/api/unlock-kit` 收到序號 → **輪流用每個商品的 productId 去 Gumroad 驗證**，命中即解鎖、回傳該商品目標（前端據此跳轉）。驗證通過發 60 天 HMAC cookie（`KIT_SECRET` 簽）。

目前商品：`ai-personal-brand`（page→`/kit/ai-personal-brand`）、`crm`（link→Notion 公開範本）。

**環境變數**：`KIT_SECRET`（簽 cookie，本機 `.env` 與 Vercel 要同值、設了別改）。**`GUMROAD_PRODUCT_ID` 已棄用**（清單移到 kitProducts.ts）。

**本機完整測試解鎖**（不用 push 正式）：`.env` 設 `KIT_FORCE_AUTH=1` → 重啟 dev → `/kit/unlock` 貼**真序號**（範例序號 `6F0E…` 永遠無效）→ 會真的驗證並跳轉。測完拿掉 `KIT_FORCE_AUTH`。dev 預設免驗證方便預覽；解鎖 cookie 在 dev 為 `secure:false` 才能在 `http://localhost` 保存。

## i18n

`@nuxtjs/i18n@9`（**勿升 v10**）。`zh-TW` 為預設（URL 不變）、英文加 `/en` 前綴（`prefix_except_default`）。字典在 `i18n/locales/{zh-TW,en}.json`。
