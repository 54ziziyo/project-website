<script setup lang="ts">
// SEO 優化 - 常見問題頁面 (AEO 關鍵頁面)
useHead({
  title: '常見問題 FAQ | Zeona Studio - 軟體開發、行銷、設計服務解答',
  meta: [
    {
      name: 'description',
      content:
        '查看 Zeona Studio 常見問題解答：軟體開發流程與報價方式、AI 工具與 LINE 機器人第三方串接、需求變更規則、維護與版權歸屬、行銷付款與設計修改規則等，常見疑問一次解答。',
    },
    { property: 'og:title', content: '常見問題 FAQ | Zeona Studio - 服務疑問解答' },
    { property: 'og:description', content: '從軟體開發到數位行銷，一次解答您的所有疑問。' },
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
            name: '軟體開發從洽談到交付的完整流程是什麼？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '1. 需求諮詢：說明目標、使用情境與初步預算。2. 需求確認與報價：釐清功能規格與串接範圍後提供報價單與時程。3. 簽約與訂金：確認規格後簽約，需支付 50% 專案訂金。4. 啟動排程：訂金入帳後正式進入開發排程。5. 開發與測試：依排程開發，期間提供測試環境或 Demo 確認進度。6. 驗收與結清：確認功能無誤後結清尾款。7. 部署與交付：尾款入帳後正式部署上線或交付系統。',
            },
          },
          {
            '@type': 'Question',
            name: '為什麼客製化軟體一定要先評估才能報價？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '客製化開發沒有固定售價，費用會依功能規格、系統複雜度、串接的第三方服務數量與預估工時而有差異，因此需先了解完整需求才能準確報價。提供的需求描述與參考範例越清楚，報價就越精準；報價單與規格經雙方確認並簽約後，即作為開發與驗收的依據。',
            },
          },
          {
            '@type': 'Question',
            name: 'AI 工具的產出與成效有保證嗎？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'AI 模型的回覆具機率性與不確定性，可能產生不準確或不預期的內容，最終結果仍需由使用者審閱把關。我提供的是 AI 工具的開發與整合服務，不保證特定準確率、業績或營運成效，產出亦不應作為法律、醫療、財務等專業領域的最終判斷依據。涉及資料與個資之應用，雙方將於合約中約定使用範圍與責任。',
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
