<script setup lang="ts">
import { ref, onMounted } from "vue";

const isTextVisible = ref(false);
const sectionRef = ref<HTMLElement | null>(null);

const isCardsVisible = ref(false);
const cardsRef = ref<HTMLElement | null>(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isTextVisible.value = true;
          observer.disconnect(); // 只觸發一次
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  if (sectionRef.value) {
    observer.observe(sectionRef.value);
  }

  if (cardsRef.value) {
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isCardsVisible.value = true;
            cardObserver.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    cardObserver.observe(cardsRef.value);
  }
});
</script>
<template>
  <div class="relative pt-[100px] overflow-x-clip">
    <div class="absolute -bottom-[50%] -left-[65%]">
      <img
        src="../assets/images/round-purple.svg"
        alt="circle pattern"
        class="max-w-none"
        width="1500"
        height="1500"
      />
    </div>

    <div class="relative px-[6.875rem] pb-30">
      <div
        ref="sectionRef"
        :class="[
          ' transition-opacity duration-700',
          isTextVisible
            ? 'slide-in-from-top delay-1000'
            : 'invisible-before-animate',
        ]"
      >
        <div class="mb-4 text-[#8782FF] text-[24px] font-bold">
          價值的交會點
        </div>
        <div class="text-[52px] font-bold leading-none mb-8">關於我們</div>
        <div class="text-[#5B5B5B] text-[20px] mb-4">
          我們是一間專注於「網站整合設計 ×
          技術實現」的工作室，由具備業界經驗的全端工程師與設計師組成。
          我們相信，好的網站不只好看，還要好用、好操作、好維護。
        </div>
        <div class="text-[#5B5B5B] text-[20px]">
          因此，我們從視覺設計、功能規劃到技術架構，都堅持一步到位。
        </div>
      </div>

      <div
        ref="cardsRef"
        class="grid lg:grid-cols-4 grid-cols-2 gap-8 mt-20"
        :class="
          isCardsVisible
            ? `slide-in-from-bottom delay-100}`
            : 'invisible-before-animate'
        "
      >
        <!-- 卡片1 -->
        <div
          class="order-1 lg:order-1 bg-white rounded-xl hover:shadow-xl shadow-lg p-5 flex flex-col gap-2"
        >
          <div class="text-[#8782FF] text-base font-bold mb-1">
            兼具美感與份量
          </div>
          <div class="text-xl font-bold mb-2">網站建置</div>
          <div class="text-[#5B5B5B] text-base">
            我們助你輕鬆建立成功的線上品牌，吸引更多目標客群並實現業績增長。
          </div>
        </div>

        <!-- 卡片2 -->
        <div
          class="order-2 lg:order-2 rounded-2xl hover:shadow-xl shadow-lg flex flex-col"
        >
          <img
            src="../assets/images/website-building.png"
            alt=""
            class="w-full h-full object-cover rounded-xl"
          />
        </div>

        <!-- 卡片3 -->
        <div
          class="order-4 lg:order-3 bg-white rounded-xl hover:shadow-xl shadow-lg p-5 flex flex-col gap-2"
        >
          <div class="text-[#8782FF] text-base font-bold mb-1">
            讓你被受眾看到
          </div>
          <div class="text-xl font-bold mb-2">多元行銷</div>
          <div class="text-[#5B5B5B] text-base">
            透過網站門面，讓網路上更多人看到你，了解你提供的服務。
          </div>
        </div>

        <!-- 卡片4 -->
        <div
          class="order-3 lg:order-4 rounded-2xl hover:shadow-xl shadow-lg flex flex-col"
        >
          <img
            src="../assets/images/diversified-marketing.png"
            alt=""
            class="w-full h-full object-cover rounded-xl"
          />
        </div>

        <!-- 卡片5 -->
        <div
          class="order-6 lg:order-5 rounded-2xl hover:shadow-xl shadow-lg flex flex-col"
        >
          <img
            src="../assets/images/high-quality.png"
            alt=""
            class="w-full h-full object-cover rounded-xl"
          />
        </div>

        <!-- 卡片6 -->
        <div
          class="order-5 lg:order-6 bg-white rounded-xl hover:shadow-xl shadow-lg p-5 flex flex-col gap-2"
        >
          <div class="text-[#8782FF] text-base font-bold mb-1">高CP的價值</div>
          <div class="text-xl font-bold mb-2">客製化質感</div>
          <div class="text-[#5B5B5B] text-base">
            做出屬於您的專屬質感，才能在眾多競爭者中，更獨樹一職，成為行業佼佼者。
          </div>
        </div>

        <!-- 卡片7 -->
        <div
          class="order-7 lg:order-7 rounded-2xl hover:shadow-xl shadow-lg flex flex-col"
        >
          <img
            src="../assets/images/brand-context.png"
            alt=""
            class="w-full h-full object-cover rounded-xl"
          />
        </div>

        <!-- 卡片8 -->
        <div
          class="order-8 lg:order-8 bg-white rounded-xl hover:shadow-xl shadow-lg p-5 flex flex-col gap-2"
        >
          <div class="text-[#8782FF] text-base font-bold mb-1">品牌脈絡</div>
          <div class="text-xl font-bold mb-2">解決問題</div>
          <div class="text-[#5B5B5B] text-base">
            根據發展脈絡與背景，完成品牌里程碑，為您的產品找到一條自己的路。
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
