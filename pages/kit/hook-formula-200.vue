<script setup lang="ts">
import { threadsHooks } from '~/data/kit/hooks'

// 免費商品內容頁（資料在 data/kit/hooks.ts，與版型分離）。
useHead({
  title: `${threadsHooks.title} | Zeona`,
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
})

const { title, intro, features, sections } = threadsHooks

// 複製公式
const copiedKey = ref('')
async function copy(text: string, key: string) {
  try {
    await navigator.clipboard.writeText(text)
    copiedKey.value = key
    setTimeout(() => {
      if (copiedKey.value === key) copiedKey.value = ''
    }, 1500)
  } catch {
    // 忽略（部分瀏覽器需 https 或使用者手勢）
  }
}

// 左側目錄：scroll-spy 高亮目前分類
const activeIndex = ref(0)
const mobileNavOpen = ref(false)
let observer: IntersectionObserver | null = null

function shortTitle(t: string) {
  return t.split('：')[0]
}

onMounted(() => {
  const els = sections.map((_, i) => document.getElementById(`sec-${i}`)).filter((el): el is HTMLElement => !!el)
  observer = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) activeIndex.value = Number((e.target as HTMLElement).id.split('-')[1])
      }
    },
    { rootMargin: '-15% 0px -75% 0px', threshold: 0 },
  )
  els.forEach((el) => observer!.observe(el))
})
onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <div class="min-h-screen bg-[#f8fafc] font-sans">
    <!-- Header：與首頁 hero 同款動畫漸層（淺底→深色文字） -->
    <header class="bg-gradient-animated relative px-6 pt-24 pb-12 md:pb-16 md:pt-32">
      <div class="max-w-6xl mx-auto">
        <p class="text-xs font-bold tracking-[0.2em] text-white/80 mb-3">ZEONA · 數位工具箱</p>
        <h1 class="text-2xl md:text-4xl font-black leading-snug text-white drop-shadow-2xl">{{ title }}</h1>
        <p class="mt-4 text-sm md:text-base text-white/90 leading-relaxed max-w-2xl drop-shadow">{{ intro }}</p>
        <ul class="mt-6 flex flex-wrap gap-2">
          <li
            v-for="f in features"
            :key="f"
            class="text-xs bg-white/15 backdrop-blur-md border border-white/25 text-white px-3 py-1.5 rounded-full"
          >
            ✓ {{ f }}
          </li>
        </ul>
      </div>
    </header>

    <!-- 手機版：左側中間懸浮目錄鈕 + 滑出抽屜 -->
    <div class="lg:hidden">
      <!-- 懸浮鈕 -->
      <button
        v-show="!mobileNavOpen"
        type="button"
        class="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-[#F1F0FF] shadow-xl rounded-l-2xl px-3 py-4 flex flex-col items-center gap-2 transition-all duration-300 hover:pr-4 active:scale-95 border border-r-0 border-[#5853E5]/50"
        aria-label="開啟分類目錄"
        @click="mobileNavOpen = true"
      >
        <span class="text-xs filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]">📑</span>

        <span class="w-auto text-sm tracking-tight text-[#5853E5] leading-[1.1] text-center">
          分<br />類<br />目<br />錄
        </span>
      </button>

      <!-- 遮罩 -->
      <div
        class="fixed inset-0 z-40 bg-black/30 transition-opacity duration-300"
        :class="mobileNavOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'"
        @click="mobileNavOpen = false"
      />

      <!-- 抽屜 -->
      <nav
        class="fixed left-0 top-0 z-50 h-full w-64 max-w-[80%] bg-white shadow-2xl p-5 overflow-y-auto transition-transform duration-300"
        :class="mobileNavOpen ? 'translate-x-0' : '-translate-x-full'"
      >
        <div class="flex items-center justify-between mb-4">
          <p class="text-sm font-bold text-gray-900">分類目錄</p>
          <button
            type="button"
            class="text-gray-400 text-2xl leading-none"
            aria-label="關閉"
            @click="mobileNavOpen = false"
          >
            ×
          </button>
        </div>
        <a
          v-for="(s, i) in sections"
          :key="i"
          :href="`#sec-${i}`"
          class="block text-sm rounded-lg px-3 py-2 mb-1 transition"
          :class="activeIndex === i ? 'text-[#8782FF] font-bold bg-[#8782FF]/5' : 'text-gray-600 hover:bg-gray-50'"
          @click="mobileNavOpen = false"
        >
          {{ shortTitle(s.title) }}
        </a>
      </nav>
    </div>

    <!-- 主體：左側 sticky 目錄 + 右側內容 -->
    <div class="max-w-6xl mx-auto px-6 py-10 lg:flex lg:gap-10">
      <!-- 桌機左側目錄 -->
      <aside class="hidden lg:block lg:w-52 lg:shrink-0">
        <nav class="sticky top-6 space-y-1">
          <p class="text-xs font-bold text-gray-400 px-3 mb-2">分類目錄</p>
          <a
            v-for="(s, i) in sections"
            :key="i"
            :href="`#sec-${i}`"
            class="block text-sm rounded-lg px-3 py-2 border-l-2 transition"
            :class="
              activeIndex === i
                ? 'border-[#8782FF] text-[#8782FF] font-bold bg-[#8782FF]/5'
                : 'border-transparent text-gray-500 hover:text-gray-900 hover:bg-gray-50'
            "
          >
            {{ shortTitle(s.title) }}
          </a>
        </nav>
      </aside>

      <!-- 內容 -->
      <main class="flex-1 min-w-0 space-y-12">
        <section v-for="(s, i) in sections" :id="`sec-${i}`" :key="i" class="scroll-mt-24 lg:scroll-mt-6">
          <h2 class="text-lg md:text-xl font-black text-gray-900 mb-5">{{ s.title }}</h2>

          <div class="grid gap-4 2xl:grid-cols-2">
            <article
              v-for="h in s.hooks"
              :key="`${i}-${h.n}`"
              class="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex flex-col"
            >
              <div class="flex items-baseline gap-2 mb-3">
                <span class="text-[#8782FF] font-black text-sm">{{ h.n }}.</span>
                <h3 class="font-bold text-gray-900">{{ h.name }}</h3>
              </div>

              <!-- 公式（可複製） -->
              <div class="relative bg-[#0f172a] text-[#e2e8f0] rounded-lg p-4 pr-16 text-sm leading-relaxed">
                <p class="whitespace-pre-wrap break-words">{{ h.formula }}</p>
                <button
                  type="button"
                  class="absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 transition"
                  @click="copy(h.formula, `${i}-${h.n}`)"
                >
                  {{ copiedKey === `${i}-${h.n}` ? '已複製 ✓' : '複製' }}
                </button>
              </div>

              <!-- 範例 -->
              <p v-if="h.example" class="mt-3 text-sm text-gray-600 leading-relaxed">
                <span class="text-gray-400">範例：</span>{{ h.example }}
              </p>

              <!-- 適合帳號 -->
              <div v-if="h.accounts.length" class="mt-3 flex flex-wrap gap-1.5">
                <span
                  v-for="a in h.accounts"
                  :key="a"
                  class="text-[11px] text-[#8782FF] bg-[#8782FF]/10 px-2 py-0.5 rounded-full"
                >
                  {{ a }}
                </span>
              </div>
            </article>
          </div>
        </section>

        <p class="text-center text-xs text-gray-400 pt-4">© Zeona · 本文案庫僅供購買者使用，請勿轉售或公開散布。</p>
      </main>
    </div>
  </div>
</template>

<style scoped>
/* 與首頁 Hero 同款動畫漸層 */
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

@media (max-width: 1023px) {
  .bg-gradient-animated {
    animation-duration: 20s;
  }
}

@media (prefers-reduced-motion: reduce) {
  .bg-gradient-animated {
    animation: none;
  }
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
</style>
