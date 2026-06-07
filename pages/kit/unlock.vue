<script setup lang="ts">
import { products } from '~/data/products'

const { t, locale } = useI18n()
const route = useRoute()
const { pName } = useLocalizedContent()

const licenseKey = ref('')
const loading = ref(false)
const error = ref('')

interface UnlockResult {
  ok: boolean
  kit: string
  type: 'page' | 'link'
  next: string | null
  nextEn: string | null
  url: string | null
}

// 選填的 kit 提示（?kit=crm 或 ?p=crm）：用來顯示對應商品名、並省一次 API；沒帶也沒關係，後端會自動判斷序號屬於哪個商品。
const kitHint = computed(() => {
  const v = route.query.kit ?? route.query.p
  return typeof v === 'string' && v.trim() ? v.trim() : undefined
})

// 依 kit 提示找對應商品，動態顯示商品名（沒對到就用通用標題，不寫死任何商品）
const hintedProduct = computed(() => (kitHint.value ? products.find((p) => p.kitSlug === kitHint.value) : undefined))
const brandName = computed(() => (hintedProduct.value ? pName(hintedProduct.value) : t('unlock.brand')))

useHead(() => ({
  title: hintedProduct.value ? `${brandName.value} | Zeona Studio` : t('unlock.metaTitle'),
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
}))

// 解鎖成功後在本地記住「商品↔序號」對應，供商品頁直接跳轉。
// 注意：不在輸入框預填序號，以免測試 A 商品時看到 B 商品的序號。
const { rememberKeyForKit } = useLicenseStore()

async function unlock() {
  error.value = ''
  if (!licenseKey.value.trim()) {
    error.value = t('unlock.errEmpty')
    return
  }
  loading.value = true
  try {
    const r = await $fetch<UnlockResult>('/api/unlock-kit', {
      method: 'POST',
      body: {
        license_key: licenseKey.value.trim(),
        kit: kitHint.value,
      },
    })
    rememberKeyForKit(r.kit, licenseKey.value.trim()) // 依解鎖到的商品記住序號，供商品頁直接跳轉/預填
    // 依後端回傳的解鎖目標導向：link→外部連結（如 Notion）；page→站內受保護頁（整頁導向才會打到 server route）
    if (r.type === 'link' && r.url) {
      window.location.href = r.url
    } else {
      window.location.href = (locale.value === 'en' && r.nextEn) || r.next || '/'
    }
  } catch (e: any) {
    // 後端自訂訊息在 e.data；e.statusMessage 常只是 HTTP reason（如 "Forbidden"），放最後備援
    error.value = e?.data?.statusMessage || e?.data?.message || e?.statusMessage || t('unlock.errFail')
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
            <div class="font-bold text-gray-900 leading-tight">{{ brandName }}</div>
            <div class="text-xs text-gray-400">Zeona Studio</div>
          </div>
        </div>

        <h1 class="text-xl font-black text-gray-900 mb-2">{{ t('unlock.heading') }}</h1>
        <p class="text-sm text-gray-500 leading-relaxed mb-6">
          {{ t('unlock.sub') }}
        </p>

        <form @submit.prevent="unlock">
          <input
            v-model="licenseKey"
            type="text"
            :placeholder="t('unlock.placeholder')"
            class="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#8782FF] focus:ring-2 focus:ring-[#8782FF]/20 transition"
            :disabled="loading"
          />
          <p v-if="error" class="text-sm text-red-500 mt-2">{{ error }}</p>

          <button
            type="submit"
            :disabled="loading"
            class="w-full mt-4 py-3 rounded-lg bg-[#8782FF] text-white font-bold text-sm hover:bg-[#6f6bff] transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {{ loading ? t('unlock.verifying') : t('unlock.unlockBtn') }}
          </button>
        </form>

        <div class="mt-6 pt-5 border-t border-gray-100 text-center">
          <p class="text-xs text-gray-400">
            {{ t('unlock.notYet') }}
            <a href="https://zeona.vercel.app/toolbox" target="_blank" rel="noopener" class="text-[#8782FF] font-semibold hover:underline">
              {{ t('unlock.getOnGumroad') }}
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
