<script lang="ts" setup>
const problemPoints = ref([
  {
    title: "網站像無人商店，訪客來了卻留不住",
    problems: [
      `<b>載入慢＋內容無用</b> ——訪客 3 秒內就判定這網站不值得等`,
      `<b>動線像迷宮＋廣告轟炸</b> ——找不到重點還被干擾，不跳才怪`,
      `<b>沒有『行動呼籲』</b> ——像逛超市卻找不到結帳櫃檯，自然放棄`,
    ],
  },
  {
    title: "行銷預算像丟進黑洞，看不到效果",
    problems: [
      `<b>漏斗漏洞沒修補</b> ——從廣告點擊到成交的流失環節完全沒追蹤`,
      `<b>數據儀表板失能</b> ——只看得到點擊數，看不到哪個環節在燒錢`,
      `<b>沒有A/B測試機制</b> ——永遠用同一版文案賭運氣`,
    ],
  },
  {
    title: "品牌形象模糊不清，客戶記不住你",
    problems: [
      `<b>競品網站拼貼對比</b> ——版型、色系、文案同質化嚴重`,
      `<b>缺乏記憶點設計</b> ——沒有專屬 ICON、Slogan 口號或視覺錨點`,
      `<b>價值主張不明確</b> ——客戶看完還是不知道你「特別在哪」`,
    ],
  },
]);
</script>
<template>
  <div
    class="md:pt-30 py-14 pb-[120px] mx:px-20 pt-20 flex flex-col items-center"
  >
    <div
      class="text-[32px] md:text-[52px] font-bold leading-none text-center mb:mb-20 mb-10"
    >
      你是否也遇到這些問題？
    </div>
    <div class="space-y-12 w-[70%] md:divide-y-1">
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
        <div class="flex flex-col space-y-2 text-center md:text-left">
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
