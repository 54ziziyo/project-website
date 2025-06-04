<script setup lang="ts">
import { ref, watch, onUnmounted } from "vue";

const props = defineProps<{
  modelValue: boolean;
}>();
const emit = defineEmits(["update:modelValue"]);

// 控制 Drawer 開關
const isOpen = ref(props.modelValue);

// 同步外部 v-model 狀態
watch(
  () => props.modelValue,
  (val) => {
    isOpen.value = val;
  }
);
watch(isOpen, (val) => {
  emit("update:modelValue", val);
});

// 控制 body overflow
watch(isOpen, (val) => {
  if (val) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
});
onUnmounted(() => {
  document.body.classList.remove("overflow-hidden");
});

// 導覽項目
const navItems = [
  { title: "首頁", href: "/" },
  { title: "網站架設", href: "/services/website" },
  { title: "行銷服務", href: "/services/marketing" },
  { title: "作品集", href: "/portfolio" },
  { title: "聯絡我們", href: "/contact" },
];
</script>

<template>
  <transition
    enter-active-class="transition-opacity duration-300"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-300"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 bg-black/40 flex"
      @click.self="isOpen = false"
    >
      <transition
        enter-active-class="transition-transform duration-300"
        enter-from-class="-translate-x-full"
        enter-to-class="translate-x-0"
        leave-active-class="transition-transform duration-300"
        leave-from-class="translate-x-0"
        leave-to-class="-translate-x-full"
      >
        <div
          v-if="isOpen"
          class="w-full h-content bg-white px-9 py-7 flex flex-col"
        >
          <div class="flex justify-end items-center mb-4">
            <div
              @click="isOpen = false"
              aria-label="關閉選單"
              class="cursor-pointer inline-block"
            >
              <svg
                class="w-7 h-7 text-gray-800 transition-transform duration-300 active:rotate-180"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="5" y1="5" x2="19" y2="19" />
                <line x1="19" y1="5" x2="5" y2="19" />
              </svg>
            </div>
          </div>
          <nav class="flex flex-col gap-4">
            <a
              v-for="item in navItems"
              :key="item.title"
              :href="item.href"
              class="text-base font-medium hover:text-blue-600"
              @click="isOpen = false"
            >
              {{ item.title }}
            </a>
          </nav>
        </div>
      </transition>

      <div class="flex-1" @click="isOpen = false"></div>
    </div>
  </transition>
</template>
