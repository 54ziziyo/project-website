<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const defaultValue = "item-1";

const accordionItems = [
  {
    value: "item-1",
    title: "報價的流程是什麼樣呢？",
    content: ` <p>填寫需求表單或聯絡我們<br/>提供基本資訊（行業別、預算範圍、想要的網站樣式、功能需求）</p>
      <ol class="list-decimal pl-5 space-y-2 mt-2">
        <li>初步溝通 & 咨詢（免費）<br/>我們會主動聯絡你，釐清功能細節與期望目標</li>
        <li>網站報價書 & 方案建議<br/>根據你提供的資訊，給出合適的方案與價格範圍</li>
        <li>簽約／下訂（收取訂金）<br/>確認報價與範圍後，簽署合作合約，並收取約50%訂金</li>
        <li>正式啟動專案與結案<br/>進入設計與開發階段，按階段進行交付與溝通</li>
      </ol>`,
  },
  {
    value: "item-2",
    title: "網站預算有限，還有辦法做網站嗎？",
    content:
      "當然沒問題！我們可依您的預算規劃合適的建站方案，像是模板網站、單頁式網站、分期付款等，協助小資創業或新品牌順利起步。",
  },
  {
    value: "item-3",
    title: "網站完成後可以自己更新嗎？",
    content:
      "可以，我們會使用方便操作的 CMS 後台系統，並提供線上教學或操作影片，協助您後續自行更新網站內容。",
  },
  {
    value: "item-4",
    title: "網站架設完成後，之後還會有維護嗎？如果後來突然壞掉怎麼辦？",
    content:
      "我們提供免費的 1 個月技術協助，後續如需長期維護，可選擇維護方案，包含內容更新、系統安全檢查、備份與技術支援等。",
  },
  {
    value: "item-5",
    title: "主機伺服器和網域是什麼？我們要自己處理嗎？",
    content:
      "如果您已有主機與網域可協助設定，若沒有，我們也可協助代為購買與設定，讓您無需煩惱技術細節。",
  },
  {
    value: "item-6",
    title: "網站會支援其他裝置嗎？如手機、平板？",
    content:
      "會的，所有網站皆採響應式設計（RWD），可自動適應手機、平板與電腦等不同裝置。",
  },
  {
    value: "item-7",
    title: "網站需要多久時間製作？",
    content:
      "依據網站複雜程度而定，簡易網站約 3～4 週，進階功能網站如電商或會員系統約 5～8 週。",
  },
  {
    value: "item-8",
    title: "可以幫我接 GA 分析、SEO 嗎？",
    content:
      "可以！我們可協助安裝 Google Analytics 分析、基本 SEO 設定（如 meta 標籤、關鍵字、網站地圖）等，幫助提升搜尋曝光率。",
  },
  {
    value: "item-9",
    title: "報價會報多久？",
    content:
      "在我們釐清您的網站需求、功能與預算後，通常會在 2～5 個工作日內提供完整報價與合作內容。若有特殊需求或加購功能，時間可能略有延長，會事先與您確認。",
  },
  {
    value: "item-10",
    title: "網站製作流程是什麼？",
    content: `
    <ol class="list-decimal pl-5 space-y-2 mt-2">
      <li><strong>預約諮詢：</strong>透過「聯絡我們」或「詢問表單」提交需求，我們會在 1～2 個工作日內主動聯繫，了解產業、網站目標與功能需求。</li>
      <li><strong>需求釐清與方案建議：</strong>透過線上會議進一步討論頁數、預算、功能，提供建置方案與加購選項（如多語系、GA、SEO）。</li>
      <li><strong>報價與簽約：</strong>2～5 個工作日內提供報價與合約，確認後收取訂金（30%～50%）。</li>
      <li><strong>設計階段：</strong>提供首頁初版設計，確認方向後完成全站設計。設計期約 1～3 週。</li>
      <li><strong>網站開發：</strong>同步進行前端切版與功能開發，依功能不同約需 2～5 週，並安排多次測試。</li>
      <li><strong>測試與修正：</strong>網站完成後提供測試站，進行修改直到滿意。</li>
      <li><strong>上線與教學：</strong>協助設定網域與主機，網站上線並提供 CMS 操作教學影片。</li>
      <li><strong>售後服務與維護：</strong>提供 1 個月免費保固，亦可加購長期維護方案（內容更新、安全檢查、備份等）。</li>
    </ol>
  `,
  },
];
</script>
<template>
  <div class="relative pt-[250px] pb-[145px] overflow-x-clip">
    <div class="px-10 pb-32 flex justify-center flex-col items-center">
      <div class="text-[52px] font-bold leading-none mb-[32px]">常見問題</div>
      <span class="h-[1px] w-[70px] bg-[#A2A2A2] mb-[20px]"></span>
      <div class="text-[#5B5B5B] text-[20px] text-center">
        我們提供了一些常見問題的解答，幫助您更了解我們的服務與流程
      </div>
    </div>

    <div
      class="absolute -left-60 top-10 w-[450px] h-[450px] rounded-full border border-[#8782FF] opacity-50"
    ></div>
    <div
      class="absolute left-20 top-40 w-[200px] h-[200px] rounded-full border border-gray-300 opacity-70"
    ></div>

    <div
      class="absolute -left-90 bottom-30 w-[450px] h-[450px] rounded-full border border-[#8782FF] opacity-50"
    ></div>
    <div
      class="absolute -left-30 bottom-10 w-[200px] h-[200px] rounded-full border border-gray-300 opacity-70"
    ></div>

    <div class="absolute top-1/2 -translate-y-1/2 -right-[85%]">
      <img
        src="../assets/images/round-purple.svg"
        alt="circle pattern"
        class="max-w-none"
        width="1500"
        height="1500"
      />
    </div>

    <div class="relative w-full px-[10%]">
      <Accordion type="single" collapsible :default-value="defaultValue">
        <AccordionItem
          v-for="item in accordionItems"
          :key="item.value"
          :value="item.value"
        >
          <AccordionTrigger class="text-[20px] cursor-pointer">{{
            item.title
          }}</AccordionTrigger>
          <AccordionContent>
            <div v-html="item.content" class="border-t px-4 py-6" />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </div>
</template>
