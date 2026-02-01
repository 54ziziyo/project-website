<script lang="ts" setup>
const scrollY = ref(0)
const isLoaded = ref(false)
const guideModalOpen = ref(false)
const guideForm = {
  name: ref(''),
  email: ref(''),
}
const guideErrors = ref<{ name?: string; email?: string }>({})
const guideStatus = ref<'idle' | 'submitting' | 'sent'>('idle')
const bodyLockClass = 'modal-lock'

const handleScroll = () => {
  scrollY.value = window.scrollY
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    guideModalOpen.value = false
  }
}

const validateGuide = () => {
  guideErrors.value = {}

  if (!guideForm.name.value.trim()) {
    guideErrors.value.name = '請填寫姓名'
  }

  const email = guideForm.email.value.trim()
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email || !emailRegex.test(email)) {
    guideErrors.value.email = '請輸入有效電子信箱'
  }

  return Object.keys(guideErrors.value).length === 0
}

const submitGuide = () => {
  if (!validateGuide()) return
  guideStatus.value = 'submitting'
  window.setTimeout(() => {
    guideStatus.value = 'sent'
    guideModalOpen.value = false
    guideForm.name.value = ''
    guideForm.email.value = ''
    window.setTimeout(() => {
      guideStatus.value = 'idle'
    }, 1200)
  }, 500)
}

const openGuideModal = () => {
  guideModalOpen.value = true
}

const closeGuideModal = () => {
  guideModalOpen.value = false
}

watch(guideModalOpen, (open) => {
  if (open) {
    document.body.classList.add(bodyLockClass)
  } else {
    document.body.classList.remove(bodyLockClass)
  }
})

onMounted(() => {
  isLoaded.value = true
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('keydown', handleKeydown)
  document.body.classList.remove(bodyLockClass)
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
            class="lg:col-span-7 transition-all duration-1000 transform text-center lg:text-left pt-4 sm:pt-20 lg:pt-0"
            :class="[isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']"
          >
            <div class="flex justify-center lg:justify-start mb-8 pt-4 lg:pt-0">
              <div
                class="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-sm"
              >
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
              <span
                class="block text-5xl md:text-7xl lg:text-6xl xl:text-[90px] font-extrabold drop-shadow-2xl uppercase"
              >
                線上數位門面
              </span>
            </h1>

            <p
              class="text-white/85 text-base md:text-xl max-w-2xl mt-8 mb-12 leading-relaxed font-normal mx-auto lg:mx-0"
            >
              結合 <span class="text-white font-bold border-b-2 border-white/40 pb-1">網頁開發與設計</span>、
              <span class="text-white font-bold border-b-2 border-white/40 pb-1">數位行銷</span>， 讓網站成為你最強的 24
              小時業務員。
            </p>

            <div class="flex flex-col sm:flex-row justify-center lg:justify-start gap-5">
              <button
                class="px-12 py-4 bg-white text-black font-bold text-lg rounded-full transition-all hover:scale-105 hover:shadow-xl active:scale-95 cursor-pointer"
                @click="openGuideModal"
              >
                免費領取攻略秘笈 →
              </button>
              <NuxtLink
                to="/works"
                class="px-12 py-4 border border-white/40 text-white font-semibold text-lg rounded-full backdrop-blur-sm hover:bg-white/10 transition-all active:scale-95"
              >
                查看作品
              </NuxtLink>
            </div>
          </div>

          <div
            class="lg:col-span-5 flex justify-center lg:justify-end transition-all duration-1000 delay-300 transform pb-16 lg:pb-0"
            :class="[isLoaded ? 'scale-100 opacity-100' : 'scale-90 opacity-0']"
          >
            <div
              class="relative w-full max-w-[340px] md:max-w-[460px] px-8 md:(px-10 py-2)flex items-center justify-center animate-float"
            >
              <div
                class="absolute inset-0 bg-white/10 backdrop-blur-3xl rounded-[3rem] border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
              />

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
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-full h-auto translate-y-[1px]"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 76.7C480 73.3 600 86.7 720 90C840 93.3 960 86.7 1080 73.3C1200 60 1320 40 1380 30L1440 20V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </div>

    <Teleport to="body">
      <transition name="fade-modal">
        <div
          v-if="guideModalOpen"
          class="fixed inset-0 z-[120] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 md:px-6"
          @click.self="closeGuideModal"
        >
          <div
            class="relative w-full max-w-[520px] bg-white/95 rounded-3xl shadow-2xl border border-white/60 overflow-hidden modal-pop"
          >
            <div class="absolute inset-0 bg-gradient-to-br from-[#f3f4ff] via-white to-[#fdf3ff] opacity-90" />
            <div class="relative z-10 p-6 md:p-8 space-y-6">
              <div class="flex items-start justify-between gap-4">
                <div class="flex-1 min-w-0">
                  <p class="text-xs uppercase tracking-[0.25em] text-[#7A7DFE] font-bold mb-2">guide</p>
                  <h3 class="text-2xl md:text-3xl font-black text-[#1f1f1f] leading-tight">免費領取攻略秘笈</h3>
                  <p class="text-sm md:text-base text-[#5B5B5B] mt-2 leading-relaxed">
                    整合網站開發、行銷設計的實戰地圖，填寫資料即可獲得下載連結。
                  </p>
                </div>
                <button
                  class="h-10 w-10 flex-none cursor-pointer rounded-full bg-black/5 flex items-center justify-center text-[#4a4a4a] hover:bg-black/10 transition"
                  aria-label="關閉視窗"
                  @click="closeGuideModal"
                >
                  ✕
                </button>
              </div>

              <div class="space-y-4">
                <div class="flex flex-col space-y-2">
                  <label class="text-[#5B5B5B] text-sm md:text-base font-medium">姓名</label>
                  <input
                    v-model="guideForm.name.value"
                    type="text"
                    placeholder="請輸入您的姓名"
                    class="bg-white px-4 py-3 rounded-xl placeholder:text-[#A2A2A2] md:placeholder:text-[14px] focus-visible:outline-none md:text-sm border border-[#ececff] shadow-sm"
                  />
                  <p v-if="guideErrors.name" class="text-red-500 text-sm px-1">{{ guideErrors.name }}</p>
                </div>

                <div class="flex flex-col space-y-2">
                  <label class="text-[#5B5B5B] text-sm md:text-base font-medium">電子信箱</label>
                  <input
                    v-model="guideForm.email.value"
                    type="email"
                    placeholder="請輸入電子信箱"
                    class="bg-white px-4 py-3 rounded-xl placeholder:text-[#A2A2A2] md:placeholder:text-[14px] focus-visible:outline-none md:text-sm border border-[#ececff] shadow-sm"
                  />
                  <p v-if="guideErrors.email" class="text-red-500 text-sm px-1">{{ guideErrors.email }}</p>
                </div>
              </div>

              <div class="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
                <div class="text-xs text-[#8a8a8a] leading-relaxed">
                  點擊送出即同意接收攻略秘笈，資訊僅用於提供下載連結。
                </div>
                <button
                  class="w-full flex-none cursor-pointer md:w-auto px-8 py-3 bg-gradient-to-r from-[#7A7DFE] via-[#8D80FF] to-[#B188FF] text-white font-semibold rounded-xl shadow-lg shadow-[#8d80ff4d] hover:shadow-xl hover:shadow-[#8d80ff59] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  :disabled="guideStatus === 'submitting'"
                  @click="submitGuide"
                >
                  <span v-if="guideStatus === 'submitting'" class="flex items-center gap-2">
                    <span
                      class="h-5 w-5 border-2 border-white/40 border-t-white rounded-full animate-spin"
                      aria-hidden="true"
                    />
                    傳送中...
                  </span>
                  <span v-else>送出</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </Teleport>
  </section>
</template>

<style scoped>
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

.bg-gradient-animated {
  background-image:
    radial-gradient(circle at 0 100%, #90e0ff, #90e0ff00 20%),
    radial-gradient(circle at var(--purple-x) var(--purple-y), #8782ff, #a960ee00 100%),
    radial-gradient(circle at var(--red-x) var(--red-y), #ff333d, #ff333d00 90%),
    radial-gradient(circle at var(--yellow-x) var(--yellow-y), #ffe3a8, #fffdf9 50%);
  background-color: #ffffff;
  animation: moveGradients 10s linear infinite;
}

@keyframes moveGradients {
  0% {
    --purple-x: 0%;
    --purple-y: 100%;
    --red-x: 60%;
    --red-y: 0%;
    --yellow-x: 100%;
    --yellow-y: 100%;
  }
  40% {
    --purple-x: 20%;
    --purple-y: 40%;
    --red-x: 70%;
    --red-y: 30%;
    --yellow-x: 70%;
    --yellow-y: 40%;
  }
  60% {
    --purple-x: 0%;
    --purple-y: 80%;
    --red-x: 100%;
    --red-y: 60%;
    --yellow-x: 0%;
    --yellow-y: 20%;
  }
  100% {
    --purple-x: 0%;
    --purple-y: 100%;
    --red-x: 60%;
    --red-y: 0%;
    --yellow-x: 100%;
    --yellow-y: 100%;
  }
}

:deep(.lottie-animation-container) {
  width: 100% !important;
  height: 100% !important;
  margin: 0 !important;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0px);
  }
}

.animate-float {
  animation: float 5s ease-in-out infinite;
}

.fade-modal-enter-active,
.fade-modal-leave-active {
  transition: opacity 0.22s ease;
}
.fade-modal-enter-from,
.fade-modal-leave-to {
  opacity: 0;
}

.modal-pop {
  animation: modal-pop 0.22s ease;
}

:global(body.modal-lock) {
  overflow: hidden;
  touch-action: none;
}

@keyframes modal-pop {
  0% {
    opacity: 0;
    transform: scale(0.96);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.container {
  max-width: 1280px;
}
</style>
