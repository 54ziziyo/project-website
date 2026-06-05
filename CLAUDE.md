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

## i18n

`@nuxtjs/i18n@9`（**勿升 v10**）。`zh-TW` 為預設（URL 不變）、英文加 `/en` 前綴（`prefix_except_default`）。字典在 `i18n/locales/{zh-TW,en}.json`。
