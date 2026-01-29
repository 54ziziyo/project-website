<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const scrollY = ref(0)
const isLoaded = ref(false)

const handleScroll = () => {
  scrollY.value = window.scrollY
}

onMounted(() => {
  isLoaded.value = true
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <section class="relative overflow-x-clip bg-white font-sans">
    <div class="relative min-h-[850px] lg:h-[95vh] flex flex-col overflow-hidden">
      
      <div class="absolute inset-0 bg-gradient-animated z-0" />
      
      <div
        class="hidden lg:block absolute bottom-[10%] lg:bottom-[4%] left-4 lg:left-8 lg:text-[160px] xl:text-[200px] font-black text-white select-none pointer-events-none z-10 opacity-15 tracking-tighter italic transition-all duration-300"
        :style="{ transform: `translateX(${scrollY * 0.1}px)` }"
      >
        SOLUTIONS
      </div>

      <div class="container mx-auto px-12 relative z-20 flex-1 flex items-center">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full py-16 lg:py-0">
          
          <div 
            class="lg:col-span-7 transition-all duration-1000 transform text-center lg:text-left pt-20 lg:pt-0"
            :class="[isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']"
          >
            <div class="flex justify-center lg:justify-start mb-8 pt-4 lg:pt-0">
              <div class="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-sm">
                <div class="flex gap-1">
                  <span class="w-1.5 h-4 bg-white rounded-full animate-pulse" />
                  <span class="w-1.5 h-4 bg-white/50 rounded-full animate-pulse [animation-delay:0.3s]" />
                </div>
                <p class="text-xs md:text-sm font-bold tracking-[0.2em] text-white uppercase">
                  Digital Branding Expert
                </p>
              </div>
            </div>

            <h1 class="text-white leading-[1.2] tracking-tight">
              <span class="block text-3xl md:text-5xl lg:text-4xl xl:text-6xl font-light mb-4">打造會賺錢的</span>
              <span class="block text-5xl md:text-7xl lg:text-6xl xl:text-[90px] font-extrabold drop-shadow-2xl uppercase">
                線上數位門面
              </span>
            </h1>

            <p class="text-white/85 text-base md:text-xl max-w-2xl mt-8 mb-12 leading-relaxed font-normal mx-auto lg:mx-0">
              結合 <span class="text-white font-bold border-b-2 border-white/40 pb-1">品牌敘事</span> 與 
              <span class="text-white font-bold border-b-2 border-white/40 pb-1">頂尖技術</span>，
              讓網站成為你最強的 24 小時業務員。
            </p>

            <div class="flex flex-col sm:flex-row justify-center lg:justify-start gap-5">
              <button class="px-12 py-4 bg-white text-black font-bold text-lg rounded-full transition-all hover:scale-105 hover:shadow-xl active:scale-95 cursor-pointer">
                免費下載網站秘笈 →
              </button>
              <!-- <button class="px-12 py-4 border border-white/40 text-white font-semibold text-lg rounded-full backdrop-blur-sm hover:bg-white/10 transition-all active:scale-95">
                觀看案例
              </button> -->
            </div>
          </div>

          <div 
            class="lg:col-span-5 flex justify-center lg:justify-end transition-all duration-1000 delay-300 transform pb-16 lg:pb-0"
            :class="[isLoaded ? 'scale-100 opacity-100' : 'scale-90 opacity-0']"
          >
            <div class="relative w-full max-w-[340px] md:max-w-[460px] px-8 md:(px-10 py-2)flex items-center justify-center animate-float">
              <div class="absolute inset-0 bg-white/10 backdrop-blur-3xl rounded-[3rem] border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.1)]" />
              
              <div class="relative z-10 w-full aspect-square flex items-center justify-center overflow-hidden">
                <client-only>
                  <Lottie name="web-animations" class="transform scale-[1.3] md:scale-[1.5]" />
                </client-only>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div class="absolute bottom-0 left-0 w-full leading-[0] z-30">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto translate-y-[1px]">
          <path d="M0 120L60 110C120 100 240 80 360 76.7C480 73.3 600 86.7 720 90C840 93.3 960 86.7 1080 73.3C1200 60 1320 40 1380 30L1440 20V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* 核心：恢復原本代碼中的 @property 設定，讓漸層能夠動起來 */
@property --red-x { syntax: '<percentage>'; inherits: true; initial-value: 50%; }
@property --red-y { syntax: '<percentage>'; inherits: true; initial-value: 0%; }
@property --purple-x { syntax: '<percentage>'; inherits: true; initial-value: 0%; }
@property --purple-y { syntax: '<percentage>'; inherits: true; initial-value: 0%; }
@property --yellow-x { syntax: '<percentage>'; inherits: true; initial-value: 100%; }
@property --yellow-y { syntax: '<percentage>'; inherits: true; initial-value: 100%; }

.bg-gradient-animated {
  background-image: 
    radial-gradient(circle at 0 100%, #90e0ff, #90e0ff00 20%),
    radial-gradient(circle at var(--purple-x) var(--purple-y), #8782FF, #a960ee00 100%),
    radial-gradient(circle at var(--red-x) var(--red-y), #ff333d, #ff333d00 90%),
    radial-gradient(circle at var(--yellow-x) var(--yellow-y), #ffe3a8, #fffdf9 50%);
  background-color: #ffffff;
  animation: moveGradients 10s linear infinite;
}

@keyframes moveGradients {
  0% { --purple-x: 0%; --purple-y: 100%; --red-x: 60%; --red-y: 0%; --yellow-x: 100%; --yellow-y: 100%; }
  40% { --purple-x: 20%; --purple-y: 40%; --red-x: 70%; --red-y: 30%; --yellow-x: 70%; --yellow-y: 40%; }
  60% { --purple-x: 0%; --purple-y: 80%; --red-x: 100%; --red-y: 60%; --yellow-x: 0%; --yellow-y: 20%; }
  100% { --purple-x: 0%; --purple-y: 100%; --red-x: 60%; --red-y: 0%; --yellow-x: 100%; --yellow-y: 100%; }
}

:deep(.lottie-animation-container) {
  width: 100% !important;
  height: 100% !important;
  margin: 0 !important;
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
}

.animate-float {
  animation: float 5s ease-in-out infinite;
}

.container {
  max-width: 1280px;
}
</style>