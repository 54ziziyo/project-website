<script lang="ts" setup>
const scrollY = ref(0);
const handleScroll = () => {
  scrollY.value = window.scrollY;
};

const developRef = ref<HTMLElement | null>(null);
const lottieRef = ref<HTMLElement | null>(null);
const isVisible = ref(false);
const isLottieVisible = ref(false);

const heroTextRef = ref(null);
const showHeroText = ref(false);

function createObserver(target: Ref<HTMLElement | null>, callback: () => void) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback();
          observer.disconnect(); // 只執行一次
        }
      });
    },
    {
      threshold: 0.1,
    }
  );
  if (target.value) observer.observe(target.value);
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  showHeroText.value = true;

  createObserver(developRef, () => {
    isVisible.value = true;
  });

  createObserver(lottieRef, () => {
    isLottieVisible.value = true;
  });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div class="relative overflow-x-clip">
    <div class="relative h-[1100px] overflow-hidden">
      <div class="absolute inset-0 bg-gradient clip-custom"></div>
      <div
        class="absolute text-white md:top-[150px] top-[140px] md:left-[100px] left-[32px]"
      >
        <div class="space-x-1 flex items-center">
          <span class="md:w-3 w-2 md:h-12 h-6 bg-white"></span>
          <span class="md:w-2 w-1 md:h-12 h-6 bg-white"></span>
          <p class="md:text-[52px] text-[24px] font-bold md:ml-2 ml-1">
            匠心獨具
          </p>
        </div>
        <p class="text-[32px] md:text-[80px] font-bold">打造你的專屬網站</p>
        <p class="text-[16px] md:text-[20px] md:font-thin mt-4 mb-8 pr-10">
          不只是設計，我們用技術與品牌力讓你的事業被看見
        </p>
        <button
          class="cursor-pointer md:px-12 px-10 py-2 md:py-3 bg-white rounded-full hover:shadow-lg text-black text-[14px] md:text-[20px]"
        >
          查看方案
        </button>
      </div>

      <div
        class="absolute bottom-[15%] -left-[60%] md:bottom-[12%] md:-left-[5%] min-[737px]:-left-[40%] min-[480px]:-left-[50%]"
        :style="{ transform: `translateY(${scrollY * 0.3}px)` }"
      >
        <img
          src="../assets/images/circle-dot.svg"
          alt="circle pattern"
          width="400"
          height="400"
        />
      </div>

      <div
        class="absolute top-[5vh] md:top-[15vh] -right-[80vw] md:-right-[10vw] opacity-60 pointer-events-none min-[480px]:-right-[20%]"
        :style="{ transform: `translateY(${scrollY * 0.5}px)` }"
      >
        <img src="../assets/images/circle-dot.svg" alt="circle pattern" />
      </div>

      <div
        class="absolute md:bottom-0 bottom-[41%] md:right-[5%] right-0 min-[480px]:bottom-[30%] min-[737px]:bottom-[15%]"
      >
        <div
          class="w-[300px] h-[300px] min-[480px]:w-[500px] min-[480px]:h-[500px] min-[737px]:w-[700px] min-[737px]:h-[700px]"
        >
          <client-only>
            <Lottie name="web-animations" />
          </client-only>
        </div>
      </div>
    </div>

    <div
      class="absolute -bottom-[10%] text-[200px] font-bold text-[#FAFAFA] left-24 leading-none"
    >
      DEVELOP
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
  animation: moveGradients 20s linear infinite;
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
