<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import MobileDrawer from "../components/MobileMenu.vue";

const isScrolled = ref(false);
const isHidden = ref(false);

let lastScrollY = 0;

const handleScroll = () => {
  const currentScrollY = window.scrollY;

  // 控制 header 的 shadow / padding
  isScrolled.value = currentScrollY > 10;

  // 控制 header 隱藏與顯示
  if (currentScrollY > lastScrollY && currentScrollY > 10) {
    // 往下滑 & 超過一定高度才隱藏
    isHidden.value = true;
  } else {
    // 往上滑或回頂部
    isHidden.value = false;
  }

  lastScrollY = currentScrollY;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const components: { title: string; href: string; description: string }[] = [
  {
    title: "網站架設",
    href: "/services/website",
    description: "網站架設、SEO優化、網站維護等服務，讓你的網站更具競爭力",
  },
  {
    title: "行銷服務",
    href: "/services/marketing",
    description: "行銷策略、社群媒體管理、內容行銷等服務，提升品牌曝光率",
  },
  {
    title: "文宣設計",
    href: "/services/design",
    description: "設計方案、品牌設計、UI/UX設計等服務，打造獨特的品牌形象",
  },
  {
    title: "VIP全站客製",
    href: "/services/all",
    description: "提供全方位的數位服務，從網站建置到行銷推廣，滿足各種需求。",
  },
];

// 控制 Drawer 開關
const showMenu = ref(false);
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
      class="flex w-full max-w-7xl items-center justify-between md:px-[4.68rem] px-5 mx-auto"
    >
      <!-- Logo -->
      <div class="font-extrabold text-xl font-[Hammersmith_One] cursor-pointer">
        <a href="/">Zeona</a>
      </div>

      <!-- Navigation -->
      <NavigationMenu class="md:flex hidden">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/about"
              :class="navigationMenuTriggerStyle()"
            >
              關於Zeona
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>服務項目</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul
                class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]"
              >
                <li v-for="component in components" :key="component.title">
                  <div as-child>
                    <a
                      :href="component.href"
                      class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foregroun"
                    >
                      <div class="text-sm font-medium leading-none">
                        {{ component.title }}
                      </div>
                      <p
                        class="line-clamp-2 text-sm leading-snug text-muted-foreground"
                      >
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
              href="/faq"
              :class="navigationMenuTriggerStyle()"
            >
              常見問題
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="/toolbox"
              :class="navigationMenuTriggerStyle()"
            >
              數位工具箱
            </NavigationMenuLink>
          </NavigationMenuItem>

          <!-- <NavigationMenuItem>
            <NavigationMenuLink
              href="/works"
              :class="navigationMenuTriggerStyle()"
            >
              作品集
            </NavigationMenuLink>
          </NavigationMenuItem> -->
        </NavigationMenuList>
      </NavigationMenu>

      <!-- CTA Button -->
      <div class="md:flex hidden">
        <a
          href="/contact"
          class="px-5 py-2 text-white text-sm bg-[#8782FF] rounded-full cursor-pointer flex items-center space-x-2 hover:bg-[#6f6bff] transition-colors duration-300"
        >
          <span>立即聯繫</span>
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
