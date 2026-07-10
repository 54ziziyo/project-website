import { defineConfig } from 'vitest/config'

// 純 TS 單元測試設定（不吃 Nuxt runtime）。
// 之後若要測 composables / Vue 元件，改用 @nuxt/test-utils 的 defineVitestConfig。
export default defineConfig({
  test: {
    environment: 'node',
    include: ['tests/**/*.spec.ts'],
  },
})
