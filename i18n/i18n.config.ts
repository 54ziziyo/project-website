export default defineI18nConfig(() => ({
  legacy: false,
  // FAQ 等內容以 HTML 字串存於語系檔，透過 v-html 渲染。
  warnHtmlMessage: false,
}))
