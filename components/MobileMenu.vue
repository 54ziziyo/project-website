<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean
}>()
const emit = defineEmits(['update:modelValue'])

const isOpen = ref(props.modelValue)
const expandedIndex = ref<number | null>(null)

watch(
  () => props.modelValue,
  (val) => {
    isOpen.value = val
  },
)
watch(isOpen, (val) => {
  emit('update:modelValue', val)
  document.body.style.overflow = val ? 'hidden' : ''
})

const { t, locale } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()

const navItems = computed(() => [
  { title: 'About', href: localePath('/about'), sub: t('nav.about'), no: '01' },
  {
    title: 'Services',
    sub: t('nav.services'),
    no: '02',
    children: [
      { title: t('nav.servicesSoftware'), href: localePath('/services/website') },
      { title: t('nav.servicesDesign'), href: localePath('/services/design') },
      { title: t('nav.faq'), href: localePath('/faq') },
    ],
  },
  { title: 'Toolbox', href: localePath('/toolbox'), sub: t('nav.toolbox'), no: '03' },
  { title: 'Works', href: localePath('/works'), sub: t('nav.works'), no: '04' },
  { title: 'Blog', href: localePath('/blog'), sub: t('nav.blog'), no: '05' },
  { title: 'Contact', href: localePath('/contact'), sub: t('nav.contact'), no: '06' },
])

function toggleExpand(index: number) {
  expandedIndex.value = expandedIndex.value === index ? null : index
}
</script>

<template>
  <transition name="blur-fade">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-[100] flex flex-col bg-white/50 backdrop-blur-3xl h-screen overflow-y-auto custom-scrollbar"
      @click.stop
    >
      <div
        class="fixed -z-10 top-[-5%] right-[-10%] w-[350px] h-[350px] bg-[#8782FF]/15 rounded-full blur-[90px] animate-pulse"
      ></div>
      <div
        class="fixed -z-10 bottom-[5%] left-[-10%] w-[280px] h-[280px] bg-[#8782FF]/10 rounded-full blur-[70px]"
      ></div>

      <div
        class="sticky top-0 z-30 flex justify-between items-center px-10 py-8 bg-white/40 backdrop-blur-2xl border-b border-white/20 relative"
      >
        <NuxtLink
          to="/"
          class="text-[#8782FF] font-black text-2xl tracking-tighter relative z-40"
          @click="isOpen = false"
        >
          Zeona
        </NuxtLink>

        <button
          class="absolute right-2 top-1/2 -translate-y-1/2 w-24 h-24 flex items-center justify-center rounded-full transition-all active:scale-95 z-50 bg-transparent shadow-none"
        >
          <Icon
            name="ph:plus"
            class="text-gray-400 rotate-45 hover:text-[#8782FF] transition-colors cursor-pointer"
            style="width: 28px; height: 28px"
            @click="isOpen = false"
          />
        </button>
      </div>

      <nav class="flex-1 px-10 py-10 flex flex-col justify-center space-y-12 relative z-10">
        <div v-for="(item, index) in navItems" :key="item.title" class="relative group">
          <div
            class="flex justify-between items-end cursor-pointer relative"
            @click="item.children ? toggleExpand(index) : null"
          >
            <NuxtLink v-if="!item.children" :to="item.href" class="absolute inset-0 z-20" @click="isOpen = false" />

            <div class="flex flex-col relative z-10">
              <span class="text-[10px] font-black text-[#8782FF]/80 uppercase tracking-[0.4em] mb-1">
                NO.{{ item.no }}
              </span>
              <span
                class="text-4xl md:text-5xl font-bold tracking-tighter text-[#4A4A4A] group-hover:text-[#8782FF] transition-colors leading-none"
              >
                {{ item.title }}
              </span>
            </div>
            <div class="flex flex-col items-end relative z-10">
              <div v-if="!item.children" class="flex flex-col items-end">
                <span
                  class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-1 group-hover:translate-x-0"
                >
                  {{ item.sub }}
                </span>
                <div
                  class="h-[1.5px] w-8 bg-[#8782FF]/60 group-hover:w-12 group-hover:bg-[#8782FF] transition-all duration-500"
                ></div>
              </div>

              <div v-else class="flex flex-col items-end relative h-auto">
                <span
                  class="text-[10px] font-bold uppercase tracking-widest transition-all duration-500 whitespace-nowrap"
                  :class="[
                    expandedIndex === index
                      ? 'opacity-100 translate-x-0 text-gray-400 mr-4'
                      : 'opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 mb-2 text-gray-400',
                  ]"
                >
                  {{ item.sub }}
                </span>

                <div class="relative flex items-center justify-end h-[1.5px]">
                  <div
                    :class="[
                      'h-[1.5px] transition-all duration-500 ease-in-out',
                      expandedIndex === index
                        ? 'w-0 opacity-0 bg-[#8782FF]'
                        : 'w-8 bg-[#8782FF]/60 group-hover:w-14 group-hover:bg-[#8782FF]',
                    ]"
                  >
                    <div
                      class="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-[1.5px] border-r-[1.5px] rotate-45 transition-all duration-500"
                      :class="[
                        expandedIndex === index ? 'opacity-0' : 'opacity-100',
                        'border-[#8782FF]/40 group-hover:border-[#8782FF]',
                      ]"
                    ></div>
                  </div>

                  <div
                    class="absolute right-0 w-[1.5px] bg-[#8782FF] transition-all duration-500 ease-in-out"
                    :class="expandedIndex === index ? 'h-6 opacity-100 -translate-y-2' : 'h-0 opacity-0'"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <transition name="list-slide">
            <div
              v-if="item.children && expandedIndex === index"
              class="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 border-t border-gray-400 pt-6 relative z-30"
            >
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
          <div class="flex items-center gap-2 text-sm font-bold mb-3">
            <NuxtLink
              :to="switchLocalePath('zh-TW')"
              :class="locale === 'zh-TW' ? 'text-[#8782FF]' : 'text-gray-400'"
              @click="isOpen = false"
              >中文</NuxtLink
            >
            <span class="text-gray-300">/</span>
            <NuxtLink
              :to="switchLocalePath('en')"
              :class="locale === 'en' ? 'text-[#8782FF]' : 'text-gray-400'"
              @click="isOpen = false"
              >EN</NuxtLink
            >
          </div>
          <span class="text-[10px] text-gray-400 uppercase tracking-widest">{{ t('mobile.connect') }}</span>
          <div class="flex items-center space-x-4 font-black text-sm text-[#4A4A4A]">
            <a
              href="https://www.instagram.com/lunn_yan/"
              target="__blank"
              rel="noopener noreferrer"
              class="hover:text-[#8782FF]"
              >INSTAGRAM</a
            >
            <a
              href="https://line.me/ti/p/@768viuqz"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-[#8782FF]"
              >LINE</a
            >
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

/* 💡 修正 2：你最愛的動態模糊與漸層 */
.blur-fade-enter-active,
.blur-fade-leave-active {
  transition: all 0.7s cubic-bezier(0.19, 1, 0.22, 1);
}
.blur-fade-enter-from,
.blur-fade-leave-to {
  opacity: 0;
  backdrop-filter: blur(0px);
}

/* 子清單滑動動畫 */
.list-slide-enter-active {
  transition: all 0.5s cubic-bezier(0.33, 1, 0.68, 1);
}
.list-slide-leave-active {
  transition: all 0.3s ease-in;
}
.list-slide-enter-from,
.list-slide-leave-to {
  opacity: 0;
  transform: translateY(-15px);
}

@keyframes pulse {
  0%,
  100% {
    opacity: 0.2;
    transform: scale(1) translate(0, 0);
  }
  50% {
    opacity: 0.35;
    transform: scale(1.1) translate(20px, -20px);
  }
}
.animate-pulse {
  animation: pulse 12s infinite ease-in-out;
}
</style>

<style scoped>
.blur-fade-enter-active,
.blur-fade-leave-active {
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
.blur-fade-enter-from,
.blur-fade-leave-to {
  opacity: 0;
  backdrop-filter: blur(0px);
}

.list-slide-enter-active {
  transition: all 0.5s ease-out;
}
.list-slide-leave-active {
  transition: all 0.3s ease-in;
}
.list-slide-enter-from,
.list-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* 💡 讓背景光圈有呼吸感 */
@keyframes pulse {
  0%,
  100% {
    opacity: 0.15;
    transform: scale(1);
  }
  50% {
    opacity: 0.25;
    transform: scale(1.1);
  }
}
.animate-pulse {
  animation: pulse 8s infinite ease-in-out;
}
</style>
