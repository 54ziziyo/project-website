<script lang="ts" setup></script>

<template>
  <div class="relative h-[800px] overflow-hidden">
    <div class="absolute inset-0 bg-gradient clip-custom"></div>
    <div class="absolute text-white top-[150px] left-[100px]">
      <div class="space-x-1 flex items-center">
        <span class="w-3 h-8 bg-white"></span>
        <span class="w-2 h-8 bg-white"></span>
        <p class="text-[32px] font-bold ml-2">匠心獨具</p>
      </div>
      <p class="text-[52px] font-bold">打造你的專屬網站</p>
      <p class="text-[16px] font-normal mt-4 mb-8">
        不只是設計，我們用技術與品牌力讓你的事業被看見
      </p>
      <button
        class="cursor-pointer px-7 py-3 bg-white rounded-full shadow-lg text-black"
      >
        查看方案
      </button>
    </div>

    <div class="absolute right-[5%] bottom-[5%]">
      <ClientOnly>
        <iframe
          class="w-[500px] h-[500px]"
          src="https://lottie.host/embed/49e1df4a-0384-43ea-b65c-873a7718d0d7/LUKmTXVzsI.lottie"
        ></iframe>
      </ClientOnly>
    </div>

    <div class="absolute bottom-0 -left-[15%]">
      <img src="../assets/images/circle-dot.svg" alt="circle pattern" />
    </div>

    <div class="absolute top-0 -right-[10%] opacity-50">
      <img src="../assets/images/circle-dot.svg" alt="circle pattern" />
    </div>
  </div>
</template>

<style scoped>
/* 定義自訂屬性（部分瀏覽器需支援） */
@property --red-x {
  syntax: "<percentage>";
  inherits: true;
  initial-value: 50%;
}
@property --red-y {
  syntax: "<percentage>";
  inherits: true;
  initial-value: 0%;
}
@property --purple-x {
  syntax: "<percentage>";
  inherits: true;
  initial-value: 0%;
}
@property --purple-y {
  syntax: "<percentage>";
  inherits: true;
  initial-value: 0%;
}
@property --yellow-x {
  syntax: "<percentage>";
  inherits: true;
  initial-value: 100%;
}
@property --yellow-y {
  syntax: "<percentage>";
  inherits: true;
  initial-value: 100%;
}

.bg-gradient {
  /* 靜止的線性漸層和藍色 */
  background-image: linear-gradient(172deg, #fcfcfc23 64%, #fff 64%),
    radial-gradient(circle at 0 100%, #90e0ff, #90e0ff00 28%),
    /* 流動的紫色、紅色、黃色 */
      radial-gradient(
        circle at var(--purple-x, 0%) var(--purple-y, 0%),
        #a960ee,
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
  animation: moveGradients 10s linear infinite;
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
    --purple-x: 10%;
    --purple-y: 10%;
    --red-x: 55%;
    --red-y: 10%;
    --yellow-x: 90%;
    --yellow-y: 90%;
  }
  40% {
    --purple-x: 20%;
    --purple-y: 20%;
    --red-x: 60%;
    --red-y: 20%;
    --yellow-x: 80%;
    --yellow-y: 80%;
  }
  60% {
    --purple-x: 10%;
    --purple-y: 30%;
    --red-x: 45%;
    --red-y: 10%;
    --yellow-x: 90%;
    --yellow-y: 60%;
  }
  80% {
    --purple-x: 0%;
    --purple-y: 20%;
    --red-x: 50%;
    --red-y: 0%;
    --yellow-x: 100%;
    --yellow-y: 80%;
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
