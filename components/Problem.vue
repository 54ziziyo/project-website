<script lang="ts" setup>
const problemPoints = ref([
  {
    title: '訪客來了卻留不住',
    problems: [
      `<b>載入慢、動線差</b> → 訪客3秒就離開`,
      `<b>內容雜亂無重點</b> → 客戶看不懂你做什麼`,
      `<b>沒有行動呼籲</b> → 浪費潛在客戶`,
    ],
  },
  {
    title: '行銷預算像丟進黑洞',
    problems: [`漏斗漏洞沒修補`, `缺乏數據分析，不知道錢花去哪`, `每次換廠商都要重新解釋需求`],
  },
  {
    title: '外包合作像短期戀愛',
    problems: [
      `<b>結案就失聯</b> → 網站上線後問題沒人管`,
      `<b>報價不透明</b> → 同樣需求每次價格都變`,
      `<b>缺乏長期累積</b> → 換個廠商就要從新來過`,
    ],
  },
])
</script>
<template>
  <div class="md:pt-30 py-14 md:px-20 pt-20 flex flex-col items-center">
    <div class="text-[32px] md:text-[52px] font-bold leading-none text-center md:mb-20 mb-10">
      你是否也遇到這些問題？
    </div>
    <div class="space-y-12 md:w-1/2 md:divide-y-1">
      <div
        v-for="(item, index) in problemPoints"
        :key="index"
        class="flex items-center flex-col md:flex-row md:space-x-15 space-y-4 md:space-y-0 justify-center mb:pb-12 pb-8"
      >
        <div
          class="text-[52px] md:text-[80px] font-bold border-b md:border-b-0"
          style="
            -webkit-text-stroke-width: 1px;
            stroke-width: 1px;
            font-family: 'Inter', 'Arial', sans-serif;
            -webkit-text-stroke-color: #6b6b6b;
            stroke: #6b6b6b;
            color: #ffffff00;
          "
        >
          0{{ index + 1 }}
        </div>
        <div class="flex flex-col space-y-2 text-center md:text-left flex-1">
          <div class="text-[24px] font-bold md:mb-2 mb-4">
            {{ item.title }}
          </div>
          <div v-html="item.problems[0]"></div>
          <div v-html="item.problems[1]"></div>
          <div v-html="item.problems[2]"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
