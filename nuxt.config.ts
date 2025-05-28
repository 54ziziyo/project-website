import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },

  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/ui",
    "shadcn-nuxt",
    "nuxt-lottie",
  ],
  css: ["~/assets/css/tailwind.css", "@/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  lottie: {
    componentName: "Lottie", // 預設就是 Lottie
    lottieFolder: "/assets/lottie", // 預設就是 assets/lottie
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
});
