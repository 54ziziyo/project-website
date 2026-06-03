<script setup lang="ts">
type Grecaptcha = {
  ready: (cb: () => void) => void
  execute: (siteKey: string, options: { action: string }) => Promise<string>
}

const recaptchaSiteKey = '6LezflssAAAAAAyrX2klGOA-XG6g7Kj2cgY9oiEz'
const route = useRoute()

const form = {
  name: ref(''),
  brand: ref(''),
  mail: ref(''),
  line: ref(''),
  desc: ref(''),
  startDate: ref(''),
  endDate: ref(''),
  budget: ref(''),
}

const errors = ref<Record<string, string>>({})
const isSubmitting = ref(false)
const statusMessage = ref<{ type: 'success' | 'error' | ''; text: string }>({ type: '', text: '' })
const toastVisible = ref(false)
let toastTimer: number | null = null
const showBookingModal = ref(false)

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const budgetRegex = /^[0-9,\-~\s]+$/

const applyPrefill = (prefill?: string | string[]) => {
  if (typeof prefill === 'string' && prefill.trim()) {
    form.desc.value = prefill
  }
}

onMounted(() => {
  applyPrefill(route.query.prefill)
})

watch(
  () => route.query.prefill,
  (val) => {
    applyPrefill(val)
  },
)

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

const validate = () => {
  errors.value = {}

  const name = form.name.value.trim()
  const mail = form.mail.value.trim()
  const line = form.line.value.trim()
  const desc = form.desc.value.trim()
  const budget = form.budget.value.trim()
  const start = form.startDate.value
  const end = form.endDate.value

  if (!name) errors.value.name = '姓名為必填'

  if (!mail || !emailRegex.test(mail)) {
    errors.value.mail = '請輸入有效的電子信箱'
  }

  if (!desc || desc.length < 10) {
    errors.value.desc = '請至少填寫 10 字的需求說明'
  }

  if (!budget) {
    errors.value.budget = '請填寫預算'
  } else if (!budgetRegex.test(budget)) {
    errors.value.budget = '僅允許數字、逗號、-、~'
  }

  if (line && line.length < 3) {
    errors.value.line = 'LINE ID 長度需大於 3'
  }

  if (start && end && new Date(end) < new Date(start)) {
    errors.value.endDate = '結案日不可早於開案日'
  }

  return Object.keys(errors.value).length === 0
}

const showToast = (type: 'success' | 'error', text: string) => {
  statusMessage.value = { type, text }
  toastVisible.value = true
  if (toastTimer) {
    window.clearTimeout(toastTimer)
  }
  toastTimer = window.setTimeout(() => {
    toastVisible.value = false
  }, 3200)
}

const onSubmit = async () => {
  if (!validate()) return
  isSubmitting.value = true

  const scriptUrl =
    'https://script.google.com/macros/s/AKfycbwbSt3nyNmYePhPTXzNjLuJnbHnS7h7b6fvegfFQ1j1rH8bBFIQfLO-pcfs4-FPIeEs/exec'

  // 1. 取得 reCAPTCHA Token
  let token = ''
  try {
    const grecaptcha = await loadRecaptcha()
    token = await grecaptcha.execute(recaptchaSiteKey, { action: 'contact' })
  } catch (err) {
    showToast('error', 'reCAPTCHA 載入失敗，請稍後再試。')
    isSubmitting.value = false
    return
  }

  // 2. 💡 關鍵修正：改用 URLSearchParams 避開 CORS 預檢
  const formData = new URLSearchParams()
  formData.append('name', form.name.value)
  formData.append('brand', form.brand.value)
  formData.append('mail', form.mail.value)
  formData.append('line', form.line.value)
  formData.append('desc', form.desc.value)
  formData.append('startDate', form.startDate.value)
  formData.append('endDate', form.endDate.value)
  formData.append('budget', form.budget.value)
  formData.append('recaptchaToken', token)

  try {
    // 3. 💡 關鍵修正：移除 headers，改用 no-cors
    await fetch(scriptUrl, {
      method: 'POST',
      mode: 'no-cors',
      body: formData, // 直接傳送 formData
    })

    // 在 no-cors 模式下，我們無法讀取回應內容
    // 只要沒噴 catch，通常代表資料已送達 Google 伺服器
    showToast('success', '感謝填寫！我會盡快與你聯繫。')
    showBookingModal.value = true
    resetForm()
  } catch (err) {
    console.error('送出失敗:', err)
    showToast('error', '送出失敗，請檢查網路。')
  } finally {
    isSubmitting.value = false
  }
}

// 輔助函式：清空表單
const resetForm = () => {
  form.name.value = ''
  form.brand.value = ''
  form.mail.value = ''
  form.line.value = ''
  form.desc.value = ''
  form.startDate.value = ''
  form.endDate.value = ''
  form.budget.value = ''
}
</script>

<template>
  <div class="space-y-6">
    <!-- 姓名 -->
    <div class="flex flex-col space-y-2">
      <label for="name" class="text-[#5B5B5B] text-[16px] md:text-[18px] mb-2">聯絡人姓名※</label>
      <input
        id="name"
        v-model="form.name.value"
        type="text"
        placeholder="請輸入您的稱呼"
        class="bg-white px-4 py-2 md:py-3 rounded-lg placeholder:text-[#A2A2A2] md:placeholder:text-[14px] focus-visible:outline-none md:text-sm"
      />
      <p v-if="errors.name" class="text-red-500 text-sm px-2">
        {{ errors.name }}
      </p>
    </div>

    <!-- 公司品牌 -->
    <div class="flex flex-col space-y-2">
      <label for="brand" class="text-[#5B5B5B] text-[16px] md:text-[18px] mb-2">公司/品牌名稱</label>
      <input
        id="brand"
        v-model="form.brand.value"
        type="text"
        placeholder="請輸入您的公司/品牌名稱"
        class="bg-white px-4 py-2 md:py-3 rounded-lg placeholder:text-[#A2A2A2] md:placeholder:text-[14px] focus-visible:outline-none md:text-sm"
      />
    </div>

    <!-- 信箱 -->
    <div class="flex flex-col space-y-2">
      <label for="mail" class="text-[#5B5B5B] text-[16px] md:text-[18px] mb-2">電子信箱※</label>
      <input
        id="mail"
        v-model="form.mail.value"
        type="email"
        placeholder="請輸入電子信箱"
        class="bg-white px-4 py-2 md:py-3 rounded-lg placeholder:text-[#A2A2A2] md:placeholder:text-[14px] focus-visible:outline-none md:text-sm"
      />
      <p v-if="errors.mail" class="text-red-500 text-sm px-2">
        {{ errors.mail }}
      </p>
    </div>

    <!-- LINE ID -->
    <div class="flex flex-col space-y-2">
      <label for="line" class="text-[#5B5B5B] text-[16px] md:text-[18px] mb-2">LINE ID</label>
      <input
        id="line"
        v-model="form.line.value"
        type="text"
        placeholder="請提供您的 LINE 確保我可以與您聯繫"
        class="bg-white px-4 py-2 md:py-3 rounded-lg placeholder:text-[#A2A2A2] md:placeholder:text-[14px] focus-visible:outline-none md:text-sm"
      />
      <p v-if="errors.line" class="text-red-500 text-sm px-2">
        {{ errors.line }}
      </p>
    </div>

    <!-- 需求說明 -->
    <div class="flex flex-col space-y-2">
      <label for="desc" class="text-[#5B5B5B] text-[16px] md:text-[18px] mb-2">需求說明※</label>
      <textarea
        id="desc"
        v-model="form.desc.value"
        rows="4"
        placeholder="請提供需求項目、功能等說明..."
        class="bg-white px-4 py-2 md:py-3 rounded-lg placeholder:text-[#A2A2A2] md:placeholder:text-[14px] focus-visible:outline-none md:text-sm"
      ></textarea>
      <p v-if="errors.desc" class="text-red-500 text-sm px-2">
        {{ errors.desc }}
      </p>
    </div>

    <!-- 日期 -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="flex flex-col space-y-2">
        <label for="startDate" class="text-[#5B5B5B] text-[16px] md:text-[18px] mb-2">預計開案日</label>
        <input
          id="startDate"
          v-model="form.startDate.value"
          type="date"
          class="bg-white px-4 py-2 md:py-3 rounded-lg text-[#5B5B5B] focus-visible:outline-none md:text-normal text-[14px]"
        />
      </div>

      <div class="flex flex-col space-y-2">
        <label for="endDate" class="text-[#5B5B5B] text-[16px] md:text-[18px] mb-2">預計結案日</label>
        <input
          id="endDate"
          v-model="form.endDate.value"
          type="date"
          class="bg-white px-4 py-2 md:py-3 rounded-lg text-[#5B5B5B] focus-visible:outline-none md:text-normal text-[14px]"
        />
        <p v-if="errors.endDate" class="text-red-500 text-sm px-2">
          {{ errors.endDate }}
        </p>
      </div>
    </div>

    <!-- 預算 -->
    <div class="flex flex-col space-y-2">
      <label for="budget" class="text-[#5B5B5B] text-[16px] md:text-[18px] mb-2">預算範圍※</label>
      <input
        id="budget"
        v-model="form.budget.value"
        type="text"
        placeholder="$500,000"
        class="bg-white px-4 py-2 md:py-3 rounded-lg placeholder:text-[#A2A2A2] md:placeholder:text-[14px] focus-visible:outline-none md:text-sm"
      />
      <p v-if="errors.budget" class="text-red-500 text-sm px-2">
        {{ errors.budget }}
      </p>
    </div>

    <!-- 送出按鈕 -->
    <button
      class="mt-10 w-full py-4 text-white bg-gradient-to-r from-[#7A7DFE] via-[#8D80FF] to-[#B188FF] shadow-lg shadow-[#8d80ff4d] rounded-xl cursor-pointer flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-[#8d80ff59] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
      :disabled="isSubmitting"
      @click="onSubmit"
    >
      <span v-if="isSubmitting" class="flex items-center gap-2">
        <span
          class="h-5 w-5 border-2 border-white/40 border-t-white rounded-full animate-spin"
          aria-hidden="true"
        ></span>
        送出中...
      </span>
      <span v-else>送出表單</span>
    </button>

    <transition name="fade-slide">
      <div
        v-if="toastVisible && statusMessage.type"
        class="fixed bottom-6 right-6 z-50 max-w-xs rounded-2xl px-4 py-3 text-sm shadow-xl backdrop-blur bg-white/90 border border-white/60 md:right-10 md:bottom-10"
        :class="statusMessage.type === 'success' ? 'text-green-700' : 'text-red-600'"
      >
        <div class="font-semibold mb-1 flex items-center gap-2">
          <span
            class="h-2.5 w-2.5 rounded-full"
            :class="statusMessage.type === 'success' ? 'bg-green-500' : 'bg-red-500'"
          ></span>
          {{ statusMessage.type === 'success' ? '已送出' : '送出失敗' }}
        </div>
        <p class="leading-relaxed text-[#4A4A4A]">{{ statusMessage.text }}</p>
      </div>
    </transition>

    <transition name="fade-slide">
      <div v-if="showBookingModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
        <div class="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl text-center space-y-4">
          <h3 class="text-xl md:text-2xl font-black text-[#1f1f1f] leading-tight">送出成功 🎉</h3>
          <p class="text-base text-[#4A4A4A] leading-relaxed">
            感謝你的填寫！我會在 24 小時內回覆你。<br />想更快聊聊，也可以直接加我 LINE～
          </p>
          <a
            href="https://lin.ee/Tt7Apjc"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-[#7A7DFE] via-[#8D80FF] to-[#B188FF] text-white font-semibold rounded-xl shadow-lg shadow-[#8d80ff4d] hover:shadow-xl hover:shadow-[#8d80ff59] transition"
            @click="showBookingModal = false"
          >
            加 LINE 聊聊
          </a>
          <button
            type="button"
            class="text-sm text-[#5B5B5B] underline hover:text-[#7A7DFE]"
            @click="showBookingModal = false"
          >
            我知道了
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.25s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(6px);
}
</style>
