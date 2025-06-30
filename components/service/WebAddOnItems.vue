<script lang="ts" setup>
const basicAddons = [
  {
    name: '網域 & 主機代管',
    description: '代購網域 + 基本主機部署（1年）',
    price: 'NT$6,000元/年起',
  },
  {
    name: 'SSL 憑證',
    description: '安裝 HTTPS 安全憑證',
    price: 'NT$1,500元/年起',
  },
  {
    name: 'SEO 優化設定',
    description: '關鍵字優化、sitemap、meta tag 設定',
    price: 'NT$3,000-5,000元/頁',
  },
  {
    name: 'Google Analytics 安裝',
    description: '流量追蹤代設定',
    price: 'NT$1,500元',
  },
  {
    name: '多語言切換',
    description: '新增英文/日文等語言版本',
    price: 'NT$15,000元/語系',
  },
]
const advancedAddons = [
  // 原始項目
  {
    name: '動畫特效升級',
    description: '加入 Lottie 精緻動畫或 WebGL 互動效果',
    price: 'NT$10,000元起',
    compatible: '全客製化網站',
  },
  {
    name: '會員系統',
    description: '註冊/登入功能（Firebase 或基礎後台）',
    price: 'NT$25,000元起',
    compatible: 'WordPress/多頁式網站',
  },
  {
    name: 'LINE 串接',
    description: '官方帳號綁定、LINE Login 或 Messaging API',
    price: 'NT$15,000元起',
    compatible: '活動頁或電商',
  },
  {
    name: '金流串接',
    description: '綠界/Line Pay 等支付（不含簽約費）',
    price: 'NT$15,000元/個起',
    compatible: '電商或預約型網站',
  },

  // 新增：數據分析類
  {
    name: 'GTM 轉換追蹤',
    description: '設定轉換目標、事件追蹤（含基礎報告解讀）',
    price: 'NT$10,000元起',
    compatible: '所有網站類型',
  },
  {
    name: '熱點分析工具',
    description: 'Hotjar 或 Microsoft Clarity 安裝與設定',
    price: 'NT$6,000元起',
    compatible: '所有網站類型',
  },

  // 新增：功能模組類
  {
    name: '進階表單系統',
    description: '多步驟表單、檔案上傳、條件式邏輯跳題',
    price: '另外報價',
    compatible: '全客製化網站/WordPress',
  },
  {
    name: '預約排程系統',
    description: '線上預約時段選擇（含 Google Calendar 串接）',
    price: '另外報價',
    compatible: '服務型網站',
  },
  {
    name: '自動化郵件通知',
    description: '客製化 Email 範本 + SendGrid/Mailchimp 串接',
    price: '另外報價',
    compatible: '會員制網站',
  },

  // 新增：跨平台服務
  {
    name: 'Wix 功能擴充',
    description: '自訂程式碼嵌入、資料庫整合等其他客製化需求',
    price: '另外報價',
    compatible: 'Wix 網站',
  },
  {
    name: 'Shopify 商店客製',
    description: '主題修改、結帳流程優化等其他客製化需求',
    price: '另外報價',
    compatible: 'Shopify',
  },
]
</script>
<template>
  <div class="relative px-4 flex justify-center flex-col items-center text-center">
    <div class="md:px-20 w-full py-40 space-y-28">
      <!-- 基礎加購項目 -->
      <div>
        <div class="text-[24px] md:text-[28px] font-bold leading-none mb-2">基礎加購項目</div>
        <div class="text-[#8782FF] text-[16px] md:text-[20px] font-bold mb-10">針對客製化方案</div>
        <div class="overflow-x-auto shadow-md rounded-md border">
          <table class="w-full">
            <thead class="border-b bg-[#F1F0FF]">
              <tr>
                <th class="px-6 py-4 text-center text-xs font-medium text-gray-700 uppercase tracking-wider">
                  加購項目
                </th>
                <th class="px-6 py-4 text-center text-xs font-medium text-gray-700 uppercase tracking-wider">說明</th>
                <th class="px-6 py-4 text-center text-xs font-medium text-gray-700 uppercase tracking-wider">
                  價格(實際價格以評估後的報價為主)
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr v-for="(item, index) in basicAddons" :key="'basic-' + index" class="hover:bg-[#F1F0FF]/30">
                <td class="px-6 py-4 font-medium text-gray-900">
                  {{ item.name }}
                </td>
                <td class="px-6 py-4 text-gray-600">
                  {{ item.description }}
                </td>
                <td class="px-6 py-4 font-semibold">
                  {{ item.price }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- 進階功能加購 -->
      <div>
        <div class="text-[24px] md:text-[28px] font-bold leading-none mb-2">進階功能加購項目</div>
        <div class="text-[#8782FF] text-[16px] md:text-[20px] font-bold mb-10">針對客製化方案</div>
        <div class="overflow-x-auto shadow-md rounded-md border">
          <table class="w-full">
            <thead class="border-b bg-[#F1F0FF]">
              <tr>
                <th class="px-6 py-4 text-center text-xs font-medium text-gray-700 uppercase tracking-wider">
                  加購項目
                </th>
                <th class="px-6 py-4 text-center text-xs font-medium text-gray-700 uppercase tracking-wider">說明</th>
                <th class="px-6 py-4 text-center text-xs font-medium text-gray-700 uppercase tracking-wider">
                  價格(實際價格以評估後的報價為主)
                </th>
                <th class="px-6 py-4 text-center text-xs font-medium text-gray-700 uppercase tracking-wider">
                  搭配方案
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr v-for="(item, index) in advancedAddons" :key="'advanced-' + index" class="hover:bg-[#F1F0FF]/30">
                <td class="px-6 py-4 font-medium text-gray-900">
                  {{ item.name }}
                </td>
                <td class="px-6 py-4 text-gray-600">
                  {{ item.description }}
                </td>
                <td class="px-6 py-4 font-semibold">
                  {{ item.price }}
                </td>
                <td class="px-6 py-4 text-gray-600">{{ item.compatible }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
