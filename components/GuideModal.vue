<script setup lang="ts">
const open = defineModel<boolean>('open', { default: false })

type Grecaptcha = {
  ready: (cb: () => void) => void
  execute: (siteKey: string, options: { action: string }) => Promise<string>
}

const recaptchaSiteKey = '6LezflssAAAAAAyrX2klGOA-XG6g7Kj2cgY9oiEz'
const scriptUrl =
  'https://script.google.com/macros/s/AKfycbwbSt3nyNmYePhPTXzNjLuJnbHnS7h7b6fvegfFQ1j1rH8bBFIQfLO-pcfs4-FPIeEs/exec'
const guideUrl = 'https://zeona-studio--89izure.gamma.site/'
const storageKey = 'guide-submission-v1'

const form = {
  name: ref(''),
  email: ref(''),
}

const errors = ref<{ name?: string; email?: string }>({})
const status = ref<'idle' | 'submitting' | 'sent'>('idle')
const bodyLockClass = 'modal-lock'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const loadRecaptcha = () => {
  return new Promise<Grecaptcha>((resolve, reject) => {
    const existing = (window as any).grecaptcha as Grecaptcha | undefined
    if (existing) {
      existing.ready(() => resolve(existing))
      return
    }

    const script = document.createElement('script')
    script.src = `https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`
    script.async = true
    script.defer = true
    script.onload = () => {
      const grecaptcha = (window as any).grecaptcha as Grecaptcha | undefined
      if (!grecaptcha) {
        reject(new Error('reCAPTCHA 載入失敗'))
        return
      }
      grecaptcha.ready(() => resolve(grecaptcha))
    }
    script.onerror = () => reject(new Error('reCAPTCHA 載入失敗'))
    document.head.appendChild(script)
  })
}

const submitToContact = async () => {
  const grecaptcha = await loadRecaptcha()
  const token = await grecaptcha.execute(recaptchaSiteKey, { action: 'guide' })

  const formData = new URLSearchParams()
  formData.append('name', form.name.value)
  formData.append('brand', '')
  formData.append('mail', form.email.value)
  formData.append('line', '')
  formData.append('desc', '領取攻略秘笈')
  formData.append('startDate', '')
  formData.append('endDate', '')
  formData.append('budget', '0')
  formData.append('recaptchaToken', token)

  await fetch(scriptUrl, {
    method: 'POST',
    mode: 'no-cors',
    body: formData,
  })
}

const validate = () => {
  errors.value = {}

  if (!form.name.value.trim()) {
    errors.value.name = '請填寫姓名'
  }

  const email = form.email.value.trim()
  if (!email || !emailRegex.test(email)) {
    errors.value.email = '請輸入有效電子信箱'
  }

  return Object.keys(errors.value).length === 0
}

const submit = async () => {
  if (!validate()) return
  status.value = 'submitting'

  try {
    await submitToContact()
    status.value = 'sent'
    const payload = JSON.stringify({ name: form.name.value, email: form.email.value })
    window.localStorage.setItem(storageKey, payload)
  } catch (err) {
    console.error('送出失敗', err)
    status.value = 'idle'
  }
}

const openGuide = () => {
  window.open(guideUrl, '_blank', 'noopener')
}

const close = () => {
  open.value = false
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    close()
  }
}

const hydrateFromStorage = () => {
  if (typeof window === 'undefined') return
  try {
    const raw = window.localStorage.getItem(storageKey)
    if (!raw) return
    const parsed = JSON.parse(raw) as { name?: string; email?: string }
    if (parsed.name) form.name.value = parsed.name
    if (parsed.email) form.email.value = parsed.email
    if (parsed.name || parsed.email) {
      status.value = 'sent'
    }
  } catch (err) {
    console.error('hydrate storage error', err)
  }
}

onMounted(() => {
  hydrateFromStorage()
})

watch(open, (isOpen) => {
  if (isOpen) {
    document.body.classList.add(bodyLockClass)
    window.addEventListener('keydown', handleKeydown)
  } else {
    document.body.classList.remove(bodyLockClass)
    window.removeEventListener('keydown', handleKeydown)
  }
})

onBeforeUnmount(() => {
  document.body.classList.remove(bodyLockClass)
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <Teleport to="body">
    <transition name="fade-modal">
      <div
        v-if="open"
        class="fixed inset-0 z-[120] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 md:px-6"
        @click.self="close"
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
                  整合網站開發、行銷設計的實戰地圖，填寫資料即可獲得連結。
                </p>
              </div>
              <button
                class="h-10 w-10 flex-none cursor-pointer rounded-full bg-black/5 flex items-center justify-center text-[#4a4a4a] hover:bg-black/10 transition"
                aria-label="關閉視窗"
                @click="close"
              >
                ✕
              </button>
            </div>

            <div v-if="status !== 'sent'" class="space-y-6">
              <div class="space-y-4">
                <div class="flex flex-col space-y-2">
                  <label class="text-[#5B5B5B] text-sm md:text-base font-medium">姓名</label>
                  <input
                    v-model="form.name.value"
                    type="text"
                    placeholder="請輸入您的姓名"
                    class="bg-white px-4 py-3 rounded-xl placeholder:text-[#A2A2A2] md:placeholder:text-[14px] focus-visible:outline-none md:text-sm border border-[#ececff] shadow-sm"
                  />
                  <p v-if="errors.name" class="text-red-500 text-sm px-1">{{ errors.name }}</p>
                </div>

                <div class="flex flex-col space-y-2">
                  <label class="text-[#5B5B5B] text-sm md:text-base font-medium">電子信箱</label>
                  <input
                    v-model="form.email.value"
                    type="email"
                    placeholder="請輸入電子信箱"
                    class="bg-white px-4 py-3 rounded-xl placeholder:text-[#A2A2A2] md:placeholder:text-[14px] focus-visible:outline-none md:text-sm border border-[#ececff] shadow-sm"
                  />
                  <p v-if="errors.email" class="text-red-500 text-sm px-1">{{ errors.email }}</p>
                </div>
              </div>

              <div class="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
                <div class="text-xs text-[#8a8a8a] leading-relaxed">
                  點擊送出即同意接收攻略秘笈，送出後會顯示下載按鈕。
                </div>
                <button
                  class="w-full flex-none cursor-pointer md:w-auto px-8 py-3 bg-gradient-to-r from-[#7A7DFE] via-[#8D80FF] to-[#B188FF] text-white font-semibold rounded-xl shadow-lg shadow-[#8d80ff4d] hover:shadow-xl hover:shadow-[#8d80ff59] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  :disabled="status === 'submitting'"
                  @click="submit"
                >
                  <span v-if="status === 'submitting'" class="flex items-center gap-2">
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

            <div v-else class="space-y-4 text-center">
              <p class="text-base text-[#4a4a4a] font-semibold">資料已送出，點擊下方按鈕閱讀完整地圖</p>
              <button
                class="w-full px-6 py-3 bg-gradient-to-r from-[#7A7DFE] via-[#8D80FF] to-[#B188FF] text-white font-semibold rounded-xl shadow-lg shadow-[#8d80ff4d] hover:shadow-xl hover:shadow-[#8d80ff59] transition-all"
                @click="openGuide"
              >
                📖 點此閱讀 (免費) →
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<style scoped>
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
</style>
