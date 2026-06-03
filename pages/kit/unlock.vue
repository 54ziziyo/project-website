<script setup lang="ts">
useHead({
  title: '解鎖 AI 個人品牌建立包 | Zeona Studio',
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
})

const licenseKey = ref('')
const loading = ref(false)
const error = ref('')

async function unlock() {
  error.value = ''
  if (!licenseKey.value.trim()) {
    error.value = '請輸入你的序號'
    return
  }
  loading.value = true
  try {
    await $fetch('/api/unlock-kit', {
      method: 'POST',
      body: { license_key: licenseKey.value.trim() },
    })
    // 成功後整頁導向（才會打到受保護的 server route）
    window.location.href = '/kit/ai-personal-brand'
  } catch (e: any) {
    error.value = e?.statusMessage || e?.data?.statusMessage || '驗證失敗，請稍後再試'
    loading.value = false
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-[#f8fafc] px-6 py-24 font-sans">
    <div class="w-full max-w-md">
      <div class="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-11 h-11 rounded-xl bg-[#8782FF] flex items-center justify-center text-xl">🎯</div>
          <div>
            <div class="font-bold text-gray-900 leading-tight">AI 個人品牌建立包</div>
            <div class="text-xs text-gray-400">Zeona Studio</div>
          </div>
        </div>

        <h1 class="text-xl font-black text-gray-900 mb-2">輸入你的序號解鎖</h1>
        <p class="text-sm text-gray-500 leading-relaxed mb-6">
          在 Gumroad 購買後，你會收到一組產品序號（License Key）。把它貼在下方即可永久開啟內容。
        </p>

        <form @submit.prevent="unlock">
          <input
            v-model="licenseKey"
            type="text"
            placeholder="例如：XXXXXXXX-XXXXXXXX-XXXXXXXX-XXXXXXXX"
            class="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#8782FF] focus:ring-2 focus:ring-[#8782FF]/20 transition"
            :disabled="loading"
          />
          <p v-if="error" class="text-sm text-red-500 mt-2">{{ error }}</p>

          <button
            type="submit"
            :disabled="loading"
            class="w-full mt-4 py-3 rounded-lg bg-[#8782FF] text-white font-bold text-sm hover:bg-[#6f6bff] transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {{ loading ? '驗證中…' : '解鎖內容' }}
          </button>
        </form>

        <div class="mt-6 pt-5 border-t border-gray-100 text-center">
          <p class="text-xs text-gray-400">
            還沒購買？
            <a href="https://gumroad.com" target="_blank" rel="noopener" class="text-[#8782FF] font-semibold hover:underline">
              前往 Gumroad 取得
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
