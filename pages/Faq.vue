<script setup lang="ts">
// SEO 優化 - 常見問題頁面 (AEO 關鍵頁面)
useHead({
  title: '常見問題 FAQ | Zeona Studio - 網站開發、行銷、設計服務解答',
  meta: [
    {
      name: 'description',
      content:
        '查看 Zeona Studio 常見問題解答：網站開發流程、行銷服務付款方式、設計修改規則、SEO 優化週期等，快速找到您需要的答案。',
    },
    { property: 'og:title', content: '常見問題 FAQ | Zeona Studio - 服務疑問解答' },
    { property: 'og:description', content: '從網站開發到數位行銷，一次解答您的所有疑問。' },
    { property: 'og:url', content: 'https://zeona.vercel.app/faq' },
  ],
  link: [{ rel: 'canonical', href: 'https://zeona.vercel.app/faq' }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: '網站從洽談到上線的完整流程是什麼？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '1. 需求諮詢：填寫表單提供參考範例與初步預算。2. 報價與簽約：確認功能後提供報價單，簽約後需支付 50% 專案訂金。3. 啟動排程：訂金確認入帳後，專案將正式進入製作時程排程。4. 視覺與開發：依據排程進行 UI 設計與前端開發，期間提供測試連結確認進度。5. 驗收與結清：於測試環境確認無誤後結清尾款。6. 部署上線：確認尾款入帳後，正式部署至伺服器上線。',
            },
          },
          {
            '@type': 'Question',
            name: '網站完成後有提供後續維護服務嗎？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '我提供上線後 1 個月的「前端技術協助」（針對原有功能的 Bug 或排版異常進行免費修復）。如有長期代管需求，可尋洽「定期維護」報價。',
            },
          },
          {
            '@type': 'Question',
            name: '可以幫我安裝 Google Analytics 分析或 SEO 嗎？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '我提供加購服務，包含 GA4 數據監測、Google Search Console 登錄及基本 SEO 優化（Meta 標籤與網站地圖），幫助提升搜尋曝光率。',
            },
          },
          {
            '@type': 'Question',
            name: '行銷服務的合作流程與付款方式？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '1. 需求溝通：討論產品資訊、風格與目標。2. 簽約與訂金：支付 50% 訂金後啟動案件；包月方案則採全額預付制。3. 內容提案：每月初提供「內容日曆」與發文主題規劃，確認後進入製作。4. 成品交付：按進度交付並提供 2 次微調修正。5. 結案與續約：尾款結清後交付檔案；包月續約應於期末 15 日前確認。',
            },
          },
          {
            '@type': 'Question',
            name: 'SEO 文章寫完後，多久會看到搜尋排名提升？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'SEO 為長期投資，通常需 3-6 個月逐漸見效。我提供關鍵字研究與佈局，但不保證特定關鍵字必能排名首頁。',
            },
          },
          {
            '@type': 'Question',
            name: '設計專案的合作流程與付款方式？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '1. 需求確認：討論風格偏好並確認設計規格。2. 簽約與訂金：支付 50% 訂金後，專案正式啟動排程。3. 初稿提案：依專案性質提供 1-3 款風格提案。4. 細節微調：包含 2 次免費微調。5. 尾款與交付：結清 50% 尾款後，交付最終格式檔案。',
            },
          },
        ],
      }),
    },
  ],
})
</script>
<template>
  <Faq />
</template>
