<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import MobileDrawer from '../components/MobileMenu.vue'

const isScrolled = ref(false)
const isHidden = ref(false)

let lastScrollY = 0

const handleScroll = () => {
  const currentScrollY = window.scrollY

  // 控制 header 的 shadow / padding
  isScrolled.value = currentScrollY > 10

  // 控制 header 隱藏與顯示
  if (currentScrollY > lastScrollY && currentScrollY > 10) {
    // 往下滑 & 超過一定高度才隱藏
    isHidden.value = true
  } else {
    // 往上滑或回頂部
    isHidden.value = false
  }

  lastScrollY = currentScrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const { t, locale } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()

const components = computed(() => [
  {
    title: t('nav.servicesSoftware'),
    href: localePath('/services/website'),
    description: t('nav.servicesSoftwareDesc'),
  },
  {
    title: t('nav.servicesDesign'),
    href: localePath('/services/design'),
    description: t('nav.servicesDesignDesc'),
  },
])

// 控制 Drawer 開關
const showMenu = ref(false)
</script>

<template>
  <!-- Sticky Header Wrapper -->
  <div
    :class="[
      'fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out transform',
      isScrolled ? 'pt-5 md:px-7 px-4 ' : 'bg-white shadow-sm py-3',
      isHidden ? '-translate-y-full' : 'translate-y-0',
    ]"
  >
    <div
      :class="{
        'bg-white shadow-xl rounded-full py-2 border': isScrolled,
      }"
      class="flex w-full max-w-7xl items-center justify-between md:px-10 px-5 mx-auto"
    >
      <!-- Logo -->
      <div class="font-extrabold text-xl font-[Hammersmith_One] cursor-pointer">
        <a :href="localePath('/')" title="Zeona Studio 首頁 - 網站設計與社群行銷">Zeona</a>
      </div>

      <!-- Navigation -->
      <NavigationMenu class="md:flex hidden">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              :href="localePath('/about')"
              title="關於 Zeona Studio - 認識我們的服務與理念"
              :class="navigationMenuTriggerStyle()"
            >
              {{ $t('nav.about') }}
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>{{ $t('nav.services') }}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <li v-for="component in components" :key="component.title">
                  <div as-child>
                    <a
                      :href="component.href"
                      :title="component.title + ' - ' + component.description"
                      class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foregroun"
                    >
                      <div class="text-sm font-medium leading-none">
                        {{ component.title }}
                      </div>
                      <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {{ component.description }}
                      </p>
                    </a>
                  </div>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              :href="localePath('/faq')"
              title="常見問題 FAQ - 軟體開發與行銷服務疑問解答"
              :class="navigationMenuTriggerStyle()"
            >
              {{ $t('nav.faq') }}
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink :href="localePath('/toolbox')" :class="navigationMenuTriggerStyle()">
              {{ $t('nav.toolbox') }}
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              :href="localePath('/works')"
              title="作品集 - 網站開發與行銷案例展示"
              :class="navigationMenuTriggerStyle()"
            >
              {{ $t('nav.works') }}
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              :href="localePath('/blog')"
              title="部落格 - AI、行銷與網站開發教學"
              :class="navigationMenuTriggerStyle()"
            >
              {{ $t('nav.blog') }}
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <!-- 語言切換 + CTA Button -->
      <div class="md:flex hidden items-center gap-4">
        <div class="flex items-center gap-1 text-sm font-semibold">
          <NuxtLink
            :to="switchLocalePath('zh-TW')"
            :class="locale === 'zh-TW' ? 'text-[#8782FF]' : 'text-gray-400 hover:text-[#8782FF]'"
            >中</NuxtLink
          >
          <span class="text-gray-300">/</span>
          <NuxtLink
            :to="switchLocalePath('en')"
            :class="locale === 'en' ? 'text-[#8782FF]' : 'text-gray-400 hover:text-[#8782FF]'"
            >EN</NuxtLink
          >
        </div>
        <a
          :href="localePath('/contact')"
          title="聯繫我 - 填寫表單聊聊你的需求"
          class="px-5 py-2 text-white text-sm bg-[#8782FF] rounded-full cursor-pointer flex items-center space-x-2 hover:bg-[#6f6bff] transition-colors duration-300"
        >
          <span>{{ $t('nav.contact') }}</span>
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <div class="md:hidden flex cursor-pointer" @click="showMenu = true">
        <svg
          class="w-7 h-7 text-gray-800 transition-transform duration-300 active:rotate-180"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </div>
      <MobileDrawer v-model="showMenu" />
    </div>
  </div>
</template>
<style scoped></style>
