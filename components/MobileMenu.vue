<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean
}>()
const emit = defineEmits(['update:modelValue'])

const isOpen = ref(props.modelValue)
const expandedIndex = ref<number | null>(null)

watch(() => props.modelValue, (val) => { isOpen.value = val })
watch(isOpen, (val) => { 
  emit('update:modelValue', val)
  document.body.style.overflow = val ? 'hidden' : ''
})

const navItems = [
  { title: 'Home', href: '/', sub: '首頁', no: '01' },
  { title: 'About', href: '/about', sub: '關於 Zeona', no: '02' },
  {
    title: 'Services',
    sub: '服務項目',
    no: '03',
    children: [
      { title: '網站架設', href: '/services/website' },
      { title: '行銷服務', href: '/services/marketing' },
      { title: '文宣設計', href: '/services/design' },
      { title: '整合服務', href: '/services/all' },
    ],
  },
  { title: 'FAQ', href: '/faq', sub: '常見問題', no: '04' },
  { title: 'Works', href: '/works', sub: '作品集', no: '05' },
  { title: 'Contact', href: '/contact', sub: '聯繫我', no: '06' },
]

function toggleExpand(index: number) {
  expandedIndex.value = expandedIndex.value === index ? null : index
}
</script>

<template>
  <transition name="blur-fade">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-[100] flex flex-col bg-white/20 backdrop-blur-3xl h-screen overflow-y-auto custom-scrollbar"
      @click.stop
    >
      
      <div class="fixed -z-10 top-[-5%] right-[-10%] w-[350px] h-[350px] bg-[#8782FF]/15 rounded-full blur-[90px] animate-pulse"></div>
      <div class="fixed -z-10 bottom-[5%] left-[-10%] w-[280px] h-[280px] bg-[#8782FF]/10 rounded-full blur-[70px]"></div>

      <div class="sticky top-0 z-30 flex justify-between items-center px-10 py-8 bg-white/40 backdrop-blur-2xl border-b border-white/20">
        <div class="text-[#8782FF] font-black text-2xl tracking-tighter relative z-40">Zeona.</div>
        
        <button 
          class="w-12 h-12 flex items-center justify-center rounded-full bg-white/80 shadow-sm border border-white/40 active:scale-90 transition-all relative z-40"
          @click="isOpen = false"
        >
          <Icon name="ph:plus-bold" width="24" height="24" class="text-gray-400 rotate-45" />
        </button>
      </div>

      <nav class="flex-1 px-10 py-10 flex flex-col justify-center space-y-12 relative z-10">
  <div v-for="(item, index) in navItems" :key="item.title" class="relative group">
    
    <div
      class="flex justify-between items-end cursor-pointer relative"
      @click="item.children ? toggleExpand(index) : null"
    >
      <NuxtLink
        v-if="!item.children"
        :to="item.href"
        class="absolute inset-0 z-20"
        @click="isOpen = false"
      />

      <div class="flex flex-col relative z-10">
        <span class="text-[10px] font-black text-[#8782FF]/40 uppercase tracking-[0.4em] mb-1">
          NO.{{ item.no }}
        </span>
        <span class="text-4xl md:text-5xl font-bold tracking-tighter text-[#4A4A4A] group-hover:text-[#8782FF] transition-colors leading-none">
          {{ item.title }}
        </span>
      </div>

      <div class="flex flex-col items-end relative z-10">
        <span class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
          {{ item.sub }}
        </span>
        <Icon 
          v-if="item.children" 
          name="ph:arrow-right-bold" 
          :class="['text-[#8782FF] transition-all duration-500 transform', expandedIndex === index ? 'rotate-90 scale-125' : 'opacity-30']"
          width="24"
        />
        <div v-else class="h-[1.5px] w-8 bg-[#8782FF]/40 group-hover:w-12 group-hover:bg-[#8782FF] transition-all duration-500"></div>
      </div>
    </div>

    <transition name="list-slide">
      <div v-if="item.children && expandedIndex === index" class="mt-8 grid grid-cols-2 gap-x-4 gap-y-6 border-t border-[#8782FF]/10 pt-8 relative z-30">
        <NuxtLink
          v-for="child in item.children"
          :key="child.title"
          :to="child.href"
          class="text-lg font-bold text-gray-500 hover:text-[#8782FF] transition-all active:scale-95"
          @click="isOpen = false"
        >
          {{ child.title }}
        </NuxtLink>
      </div>
    </transition>
  </div>
</nav>

      <div class="mt-auto px-10 py-12 flex justify-between items-end relative z-10">
        <div class="flex flex-col space-y-1">
          <span class="text-[10px] text-gray-400 uppercase tracking-widest">Connect with me</span>
          <div class="flex items-center space-x-4 font-black text-sm text-[#4A4A4A]">
            <a 
              href="https://www.instagram.com/lunn_yan/" 
              target="__blank" 
              rel="noopener noreferrer"
              class="hover:text-[#8782FF]"
            >INSTAGRAM</a>
            <a
              href="https://line.me/ti/p/@768viuqz"
              target="_blank"
              rel="noopener noreferrer" class="hover:text-[#8782FF]"
            >LINE</a>
          </div>
        </div>
        <div class="text-[10px] text-gray-400 font-mono tracking-tighter">©2026 ZEONA DESIGN</div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
/* 💡 修正 1：確保容器可以滾動並隱藏原生捲軸 */
.custom-scrollbar {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
}
.custom-scrollbar::-webkit-scrollbar {
  display: none; /* Chrome, Safari */
}

/* 💡 修正 2：妳最愛的動態模糊與漸層 */
.blur-fade-enter-active, .blur-fade-leave-active { transition: all 0.7s cubic-bezier(0.19, 1, 0.22, 1); }
.blur-fade-enter-from, .blur-fade-leave-to { opacity: 0; backdrop-filter: blur(0px); }

/* 子清單滑動動畫 */
.list-slide-enter-active { transition: all 0.5s cubic-bezier(0.33, 1, 0.68, 1); }
.list-slide-leave-active { transition: all 0.3s ease-in; }
.list-slide-enter-from, .list-slide-leave-to { opacity: 0; transform: translateY(-15px); }

@keyframes pulse {
  0%, 100% { opacity: 0.2; transform: scale(1) translate(0, 0); }
  50% { opacity: 0.35; transform: scale(1.1) translate(20px, -20px); }
}
.animate-pulse { animation: pulse 12s infinite ease-in-out; }
</style>

<style scoped>
.blur-fade-enter-active, .blur-fade-leave-active { transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1); }
.blur-fade-enter-from, .blur-fade-leave-to { opacity: 0; backdrop-filter: blur(0px); }

.list-slide-enter-active { transition: all 0.5s ease-out; }
.list-slide-leave-active { transition: all 0.3s ease-in; }
.list-slide-enter-from, .list-slide-leave-to { opacity: 0; transform: translateY(-10px); }

/* 💡 讓背景光圈有呼吸感 */
@keyframes pulse {
  0%, 100% { opacity: 0.15; transform: scale(1); }
  50% { opacity: 0.25; transform: scale(1.1); }
}
.animate-pulse { animation: pulse 8s infinite ease-in-out; }
</style>