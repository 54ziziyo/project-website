<script setup lang="ts">
import MedoaPlanImg from "../assets/images/info/media-planning.png";
import TrainingImg from "../assets/images/info/training.png";
import WebDevImg from "../assets/images/info/web-development.png";
import DesignImg from "../assets/images/info/web-design.png";

const services = [
  {
    title: "數位行銷",
    items: [
      "社群貼文設計與文案撰寫",
      "SEO 關鍵字部落格撰寫",
      "短影音剪輯（30s～60s）",
      "社群經營與排程代發",
    ],
    img: MedoaPlanImg,
  },
  {
    title: "平面設計",
    items: [
      "LOGO 與品牌標準字設計",
      "活動主視覺 / 海報 / EDM",
      "LINE 選單設計、社群圖卡",
      "名片、DM、產品包裝設計",
    ],
    img: DesignImg,
  },
  {
    title: "網站設計與開發",
    items: [
      "UI/UX 設計",
      "網站前端開發",
      "後端串接 API、部署上線",
      "可額外加購：GA數據、SEO優化等",
    ],
    img: WebDevImg,
  },
  {
    title: "打包方案",
    items: [
      "建立風格視覺＋行銷素材製作",
      "網站設計＋社群經營＋SEO寫手",
      "提供包月內容製作、數據追蹤",
    ],
    img: TrainingImg,
  },
];
</script>
<template>
  <div class="relative md:pt-[80px] pt-[80px] overflow-x-clip">
    <div
      class="absolute z-0 top-0 h-fit left-8 min-[480px]:text-[100px] min-[737px]:text-[120px] md:-bottom-[10%] md:left-24 text-[70px] md:text-[200px] font-bold text-[#FAFAFA] leading-none"
    >
      Service
    </div>
    <div
      class="absolute top-[30%] right-0 w-[30%] h-[30%] bg-[#8782FF] rounded-full blur-[120px] opacity-40"
    />

    <section class="relative md:py-10">
      <div class="relative max-w-7xl mx-auto text-center">
        <p
          class="mb-2 md:mb-4 text-[#8782FF] text-[16px] md:text-[16px] md:text-[24px] font-bold"
        >
          服務項目與流程
        </p>
        <div
          class="text-[24px] md:text-[52px] font-bold leading-none mb:mb-8 mb-6"
        >
          可以怎麼幫助你？
        </div>
        <div class="text-[#5B5B5B] text-[14px] md:text-[20px]">
          我提供客製化的一站式數位服務<br />特別適合剛起步的新創品牌、個人工作室、小型企業
        </div>
      </div>

      <div
        class="relative md:mt-20 mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto px-10 items-top"
      >
        <div
          v-for="(item, index) in services"
          :key="index"
          class="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 py-8 transition-transform duration-300 border hover:scale-105"
        >
          <img :src="item.img" alt="Icon" class="mx-auto h-12 mb-4" />
          <div class="text-lg font-bold mb-2">{{ item.title }}</div>
          <ul
            class="list-disc list-inside text-sm text-gray-500 mt-1 text-left"
          >
            <li>{{ item.items[0] }}</li>
            <li>{{ item.items[1] }}</li>
            <li>{{ item.items[2] }}</li>
            <li v-if="item.items[3]">{{ item.items[3] }}</li>
          </ul>
        </div>
      </div>
    </section>

    <section
      class="relative pl-8 md:pl-[6.875rem] md:pt-40 py-30 transition-opacity duration-700"
    >
      <div
        class="mb-2 md:mb-4 text-[#8782FF] text-[16px] md:text-[24px] font-bold"
      >
        為什麼選擇我呢？
      </div>
      <div
        class="text-[24px] md:text-[52px] font-bold leading-none mb-8 md:mb-[80px]"
      >
        量身打造品牌門面
      </div>
      <div class="space-y-[32px] md:space-y-[60px]">
        <div class="space-y-[8px] md:space-y-[16px]">
          <div class="flex items-center space-x-[12px] md:space-x-[24px]">
            <img
              class="w-[20px] md:w-fit"
              src="../assets/images/project-team.svg"
              alt=""
            />
            <div class="text-[16px] md:text-[24px] font-bold pr-8">
              全面一站式｜設計 × 技術 × 行銷整合力
            </div>
          </div>
          <div
            class="text-[#5B5B5B] text-[14px] px-8 md:text-[20px] md:pl-[54px]"
          >
            我不只會做設計與前端開發，更懂得行銷的邏輯，協助品牌真正產生「價值」與「轉換」
          </div>
        </div>

        <div class="space-y-[8px] md:space-y-[16px] md:pl-[50px]">
          <div class="flex items-center space-x-[12px] md:space-x-[24px]">
            <img
              class="w-[20px] md:w-fit"
              src="../assets/images/custom-project.svg"
              alt=""
            />
            <div class="text-[16px] md:text-[24px] font-bold pr-8">
              高彈性客製方案｜一對一深度服務，靈活彈性調整
            </div>
          </div>
          <div
            class="text-[#5B5B5B] text-[14px] px-8 md:text-[20px] md:pl-[54px]"
          >
            不論是剛起步的品牌或已經營一段時間的企業，我都會依照你的目標與預算，給出最合適的建議與內容規劃
          </div>
        </div>

        <div class="space-y-[8px] md:space-y-[16px] md:pl-[100px]">
          <div class="flex items-center space-x-[12px] md:space-x-[24px]">
            <img
              class="w-[20px] md:w-fit"
              src="../assets/images/ongoing-maintenance.svg"
              alt=""
            />
            <div class="text-[16px] md:text-[24px] font-bold pr-8">
              長期訂閱服務｜合作透明、流程清楚、溝通快速
            </div>
          </div>
          <div
            class="text-[#5B5B5B] text-[14px] px-8 md:text-[20px] md:pl-[54px]"
          >
            你將清楚知道每一階段該交付什麼、何時完成，所有內容與成本明確透明，合作起來沒有壓力
          </div>
        </div>
      </div>
    </section>

    <section class="md:py-20">
      <div
        class="relative w-full md:rounded-2xl overflow-hidden bg-gray-500 text-white"
        style="height: 200px"
      >
        <img
          src="../assets/images/solution-3.webp"
          alt="背景圖"
          class="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div class="absolute inset-0 bg-black/40" />

        <div
          class="relative z-10 flex items-center justify-between h-full px-10"
        >
          <div>
            <h2 class="text-2xl font-bold mb-2">用簡報將你想法完整表達</h2>
            <p class="text-sm text-gray-200">
              用簡報，驅使聽眾達成你想要的行動
            </p>
          </div>

          <div class="text-center text-[#F1F0FF]">
            <div class="text-5xl font-bold leading-tight">100%</div>
            <div class="text-sm text-white mt-1">成效提升</div>
          </div>
        </div>
      </div>
    </section>

    <section class="flex justify-center items-center py-40 px-10">
      <div class="max-w-4xl text-center">
        <h2 class="text-[24px] md:text-[32px] font-bold mb-4">
          想了解更多嗎？讓我們聊聊吧！
        </h2>
        <p class="text-[#5B5B5B] text-[16px] md:text-[20px] mb-12">
          無論你是新創品牌還是小型企業，我都能提供量身打造的解決方案
          <br />
          讓你的品牌在數位世界中脫穎而出
        </p>
        <button>
          <a
            href="/contact"
            class="animate-bounce font-semibold py-3 px-6 rounded-full text-white text-sm bg-[#8782FF] rounded-full cursor-pointer flex items-center space-x-2 hover:bg-[#6f6bff] transition-colors duration-300"
          >
            <span>我要免費諮詢 →</span>
          </a>
        </button>
      </div>
    </section>
  </div>
</template>
