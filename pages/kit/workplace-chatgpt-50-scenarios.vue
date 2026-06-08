<script setup lang="ts">
import { workplacePrompts } from '~/data/kit/workplace'

// 免費商品內容頁（資料在 data/kit/workplace.ts，與版型分離）。
useHead({
  title: `${workplacePrompts.title} | Zeona`,
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
})

const { title, intro, features, sections, bonus } = workplacePrompts

// 左側目錄 = 7 個分類 + 加碼章節；加碼章節的 id 接在最後
const bonusIndex = sections.length
const navItems = [...sections.map((s) => s.title), bonus.title]

// 複製提示詞
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
  const els = navItems
    .map((_, i) => document.getElementById(`sec-${i}`))
    .filter((el): el is HTMLElement => !!el)
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
    <!-- Header：與首頁 hero 同款動畫漸層 -->
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
          v-for="(label, i) in navItems"
          :key="i"
          :href="`#sec-${i}`"
          class="block text-sm rounded-lg px-3 py-2 mb-1 transition"
          :class="activeIndex === i ? 'text-[#8782FF] font-bold bg-[#8782FF]/5' : 'text-gray-600 hover:bg-gray-50'"
          @click="mobileNavOpen = false"
        >
          {{ shortTitle(label) }}
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
            v-for="(label, i) in navItems"
            :key="i"
            :href="`#sec-${i}`"
            class="block text-sm rounded-lg px-3 py-2 border-l-2 transition"
            :class="
              activeIndex === i
                ? 'border-[#8782FF] text-[#8782FF] font-bold bg-[#8782FF]/5'
                : 'border-transparent text-gray-500 hover:text-gray-900 hover:bg-gray-50'
            "
          >
            {{ shortTitle(label) }}
          </a>
        </nav>
      </aside>

      <!-- 內容 -->
      <main class="flex-1 min-w-0 space-y-12">
        <!-- 提示詞分類 -->
        <section v-for="(s, i) in sections" :id="`sec-${i}`" :key="i" class="scroll-mt-24 lg:scroll-mt-6">
          <h2 class="text-lg md:text-xl font-black text-gray-900 mb-5">{{ s.title }}</h2>

          <div class="grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
            <article
              v-for="item in s.items"
              :key="`${i}-${item.n}`"
              class="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex flex-col"
            >
              <div class="flex items-baseline gap-2 mb-3">
                <span class="text-[#8782FF] font-black text-sm">{{ item.n }}.</span>
                <h3 class="font-bold text-gray-900">{{ item.name }}</h3>
              </div>

              <!-- 提示詞（可複製） -->
              <div class="relative bg-[#0f172a] text-[#e2e8f0] rounded-lg p-4 pr-16 text-sm leading-relaxed">
                <p class="whitespace-pre-wrap break-words">{{ item.prompt }}</p>
                <button
                  type="button"
                  class="absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 transition"
                  @click="copy(item.prompt, `${i}-${item.n}`)"
                >
                  {{ copiedKey === `${i}-${item.n}` ? '已複製 ✓' : '複製' }}
                </button>
              </div>

              <!-- 調整技巧 -->
              <p v-if="item.tip" class="mt-3 text-sm text-gray-600 leading-relaxed">
                <span class="text-[#8782FF] font-semibold">調整技巧：</span>{{ item.tip }}
              </p>
            </article>
          </div>
        </section>

        <!-- 加碼章節：讓 AI 輸出更像人說話 -->
        <section :id="`sec-${bonusIndex}`" class="scroll-mt-24 lg:scroll-mt-6">
          <h2 class="text-lg md:text-xl font-black text-gray-900 mb-5">{{ bonus.title }}</h2>
          <ol class="bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-4 list-none">
            <li v-for="(p, i) in bonus.points" :key="i" class="flex gap-3 text-sm text-gray-700 leading-relaxed">
              <span class="shrink-0 w-6 h-6 rounded-full bg-[#8782FF]/10 text-[#8782FF] font-bold text-xs flex items-center justify-center">
                {{ i + 1 }}
              </span>
              <span>{{ p }}</span>
            </li>
          </ol>
        </section>

        <p class="text-center text-xs text-gray-400 pt-4">© Zeona · 本提示包僅供取得者使用，請勿轉售或公開散布。</p>
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
