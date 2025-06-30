<script lang="ts" setup>
const scrollY = ref(0)
const handleScroll = () => {
  scrollY.value = window.scrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="relative overflow-x-clip">
    <div class="relative h-[600px] md:h-[1100px] overflow-hidden">
      <div class="absolute inset-0 bg-gradient clip-custom" />

      <div
        class="absolute -bottom-[25%] -left-[60%] md:bottom-[12%] md:-left-[5%] min-[737px]:-left-[40%] min-[480px]:-left-[50%]"
        :style="{ transform: `translateY(${scrollY * 0.3}px)` }"
      >
        <img src="../assets/images/circle-dot.svg" alt="circle pattern" width="400" height="400" />
      </div>

      <div
        class="absolute top-[5vh] md:top-[15vh] -right-[80vw] md:-right-[10vw] opacity-60 pointer-events-none min-[480px]:-right-[20%]"
        :style="{ transform: `translateY(${scrollY * 0.1}px)` }"
      >
        <img src="../assets/images/circle-dot.svg" alt="circle pattern" />
      </div>

      <div class="absolute text-white md:top-[150px] top-[60px] md:left-[100px] left-[32px] pr-4">
        <div class="space-x-1 flex items-center">
          <span class="md:w-3 w-2 md:h-12 h-6 bg-white" />
          <span class="md:w-2 w-1 md:h-12 h-6 bg-white" />
          <p class="md:text-[52px] text-[24px] font-bold md:ml-2 ml-1">從流量到成交</p>
        </div>
        <p class="text-[28px] md:text-[80px] font-bold">打造會賺錢的線上門面</p>
        <p class="text-[16px] md:text-[20px] md:font-thin mt-4 mb-8 pr-10">
          從品牌建立、網站開發到數位行銷，提供一站式數位服務，讓你的網站成為24小時金牌業務
        </p>
        <button
          class="cursor-pointer md:px-12 px-10 py-2 md:py-3 bg-white rounded-full hover:shadow-lg text-black text-[14px] md:text-[20px]"
        >
          免費下載流量秘笈 →
        </button>
      </div>

      <div class="absolute md:bottom-0 -bottom-[2%] md:right-[5%] right-0 min-[480px]:hidden lg:block">
        <div
          class="w-[340px] h-[340px] min-[480px]:w-[500px] min-[480px]:h-[500px] min-[737px]:w-[700px] min-[737px]:h-[700px]"
        >
          <client-only>
            <Lottie name="web-animations" />
          </client-only>
        </div>
      </div>
    </div>

    <div
      class="absolute -bottom-[8%] left-8 min-[480px]:text-[100px] min-[737px]:text-[120px] md:-bottom-[10%] md:left-24 text-[70px] md:text-[200px] font-bold text-[#FAFAFA] leading-none"
    >
      Problem
    </div>
  </div>
</template>

<style scoped>
/* 定義自訂屬性（部分瀏覽器需支援） */
@property --red-x {
  syntax: '<percentage>';
  inherits: true;
  initial-value: 50%;
}
@property --red-y {
  syntax: '<percentage>';
  inherits: true;
  initial-value: 0%;
}
@property --purple-x {
  syntax: '<percentage>';
  inherits: true;
  initial-value: 0%;
}
@property --purple-y {
  syntax: '<percentage>';
  inherits: true;
  initial-value: 0%;
}
@property --yellow-x {
  syntax: '<percentage>';
  inherits: true;
  initial-value: 100%;
}
@property --yellow-y {
  syntax: '<percentage>';
  inherits: true;
  initial-value: 100%;
}

.bg-gradient {
  /* background-image: linear-gradient(172deg, #fcfcfc23 64%, #fff 64%),
    radial-gradient(circle at 0 100%, #90e0ff, #90e0ff00 28%),
    radial-gradient(
      circle at var(--purple-x, 0%) var(--purple-y, 0%),
      #bd79feba,
      #a960ee00 50%,
      #a960ee00
    ),
    radial-gradient(
      circle at var(--red-x, 50%) var(--red-y, 0%),
      #ff333d,
      #ff333d59 60%,
      #ff333d00
    ),
    radial-gradient(
      circle at var(--yellow-x, 100%) var(--yellow-y, 100%),
      #ffcb57,
      #ffca578f 70%
    );
  animation: moveGradients 20s linear infinite; */

  background-image:
    linear-gradient(172deg, #fcfcfc00 64%, #fff 64%), radial-gradient(circle at 0 100%, #90e0ff, #90e0ff00 28%),
    radial-gradient(circle at 0%, #a960ee, #a960ee00 34%, #a960ee00),
    radial-gradient(circle at 50% 0, #ff333d, #ff333d00 60%, #ff333d00),
    radial-gradient(circle at 100% 100%, #ffcb57, #ffcb5700 67%);
}

.clip-custom {
  clip-path: polygon(0 0, 100% 0, 100% 70%, 0 100%);
}

/* 讓三個漸層的中心點自然流動 */
@keyframes moveGradients {
  0% {
    --purple-x: 0%;
    --purple-y: 0%;
    --red-x: 50%;
    --red-y: 0%;
    --yellow-x: 100%;
    --yellow-y: 100%;
  }
  20% {
    --purple-x: 40%;
    --purple-y: 40%;
    --red-x: 70%;
    --red-y: 30%;
    --yellow-x: 70%;
    --yellow-y: 40%;
  }
  40% {
    --purple-x: 80%;
    --purple-y: 80%;
    --red-x: 30%;
    --red-y: 60%;
    --yellow-x: 40%;
    --yellow-y: 10%;
  }
  60% {
    --purple-x: 60%;
    --purple-y: 20%;
    --red-x: 80%;
    --red-y: 80%;
    --yellow-x: 20%;
    --yellow-y: 80%;
  }
  80% {
    --purple-x: 20%;
    --purple-y: 60%;
    --red-x: 20%;
    --red-y: 20%;
    --yellow-x: 80%;
    --yellow-y: 20%;
  }
  100% {
    --purple-x: 0%;
    --purple-y: 0%;
    --red-x: 50%;
    --red-y: 0%;
    --yellow-x: 100%;
    --yellow-y: 100%;
  }
}
</style>
