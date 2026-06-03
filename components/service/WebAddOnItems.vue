<script lang="ts" setup>
const basicAddons = [
  {
    name: '網域 & 主機代管',
    description: '代購網域、基本主機部署、HTTPS 安全加密憑證 SSL',
  },
  {
    name: 'SSL 進階商用憑證',
    description: '若有特殊商務需求，才需要額外加購',
  },
  {
    name: 'SEO 優化設定',
    description: '關鍵字優化、sitemap、meta tag 設定',
  },
  {
    name: 'Google Analytics 安裝',
    description: '流量追蹤代設定',
  },
  {
    name: '多語言切換',
    description: '新增英文/日文等語言版本 (不含翻譯稿費用)',
  },
]
const advancedAddons = [
  {
    name: '動畫特效',
    description: '基礎 Lottie 動畫，WebGL 互動另議',
    compatible: '全客製化網站',
  },
  {
    name: '會員系統',
    description: '註冊/登入功能（Firebase 或基礎後台）',
    compatible: 'WordPress/多頁式網站',
  },
  {
    name: 'LINE 串接',
    description: '官方帳號綁定、LINE Login 或 Messaging API',
    compatible: '活動頁或電商',
  },
  {
    name: '金流串接',
    description: '綠界/Line Pay 等支付（不含簽約費）',
    compatible: '電商或預約型網站',
  },
  {
    name: 'GTM 轉換追蹤',
    description: '設定轉換目標、事件追蹤（含基礎報告解讀）',
    compatible: '所有網站類型',
  },
  {
    name: '熱點分析工具',
    description: 'Hotjar 或 Microsoft Clarity 安裝與設定',
    compatible: '所有網站類型',
  },
  {
    name: '串接數據服務',
    description: '串接第三方資料整合（如：Google 日曆、即時匯率、地圖資訊等）',
    compatible: '全客製化網站/WordPress',
  },
  {
    name: '自動化流程串接',
    description: '自動化通知與跨平台整合（如：LINE Notify、簡訊通知、Slack 提醒）',
    compatible: '全客製化服務',
  },
  {
    name: '進階表單系統',
    description: '多步驟表單、檔案上傳、條件式邏輯跳題',
    compatible: '全客製化網站/WordPress',
  },
  {
    name: '預約排程系統',
    description: '線上預約時段選擇（含 Google Calendar 串接）',
    compatible: '服務型網站',
  },
  {
    name: '自動化郵件通知',
    description: '客製化 Email 範本 + SendGrid/Mailchimp 串接',
    compatible: '會員制網站',
  },
  {
    name: 'Wix 功能擴充',
    description: '自訂程式碼嵌入、資料庫整合等其他客製化需求',
    compatible: 'Wix 網站',
  },
  {
    name: 'Shopify 商店客製',
    description: '主題修改、結帳流程優化等其他客製化需求',
    compatible: 'Shopify',
  },
]
</script>
<template>
  <div class="relative px-4 flex justify-center flex-col items-center text-center">
    <div class="max-w-6xl mx-auto w-full px-6 md:px-12 mb-32 space-y-32 lg:pb-40 lg:space-y-40">
      <div>
        <div class="text-[24px] md:text-[28px] font-bold leading-none mb-2">基礎加購項目</div>
        <div class="text-[#8782FF] text-[16px] md:text-[20px] font-bold mb-3">針對客製化方案</div>
        <p class="text-gray-500 text-sm md:text-base mb-10">可依需求加選的服務項目，費用會於評估後一併報價。</p>

        <div class="overflow-x-auto shadow-md rounded-md border">
          <table class="w-full min-w-[500px]">
            <thead class="border-b bg-[#F1F0FF]">
              <tr>
                <th
                  class="px-6 py-4 text-center text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap"
                >
                  加購項目
                </th>
                <th
                  class="px-6 py-4 text-center text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap"
                >
                  說明
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 text-sm md:text-base">
              <tr v-for="(item, index) in basicAddons" :key="'basic-' + index" class="hover:bg-[#F1F0FF]/30">
                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap min-w-[150px]">
                  {{ item.name }}
                </td>
                <td class="px-6 py-4 text-gray-600 text-left min-w-[300px]">
                  {{ item.description }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <div class="text-[24px] md:text-[28px] font-bold leading-none mb-2">進階功能加購項目</div>
        <div class="text-[#8782FF] text-[16px] md:text-[20px] font-bold mb-3">針對客製化方案</div>
        <p class="text-gray-500 text-sm md:text-base mb-10">可擴充的進階功能，依專案需求評估後報價。</p>
        <div class="overflow-x-auto shadow-md rounded-md border">
          <table class="w-full min-w-[600px]">
            <thead class="border-b bg-[#F1F0FF]">
              <tr>
                <th
                  class="px-6 py-4 text-center text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap"
                >
                  加購項目
                </th>
                <th
                  class="px-6 py-4 text-center text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap"
                >
                  說明
                </th>
                <th
                  class="px-6 py-4 text-center text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap"
                >
                  搭配方案
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr v-for="(item, index) in advancedAddons" :key="'advanced-' + index" class="hover:bg-[#F1F0FF]/30">
                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{{ item.name }}</td>
                <td class="px-6 py-4 text-gray-600 text-left min-w-[300px]">{{ item.description }}</td>
                <td class="px-6 py-4 text-gray-600 whitespace-nowrap">{{ item.compatible }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
