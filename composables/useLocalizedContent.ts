import { categoryLabelsEn, productEn, portfolioEn, blogEn } from '~/data/contentEn'

// 依目前語系，回傳卡片摘要的本地化內容；en 缺漏時 fallback 回中文原欄位。
export function useLocalizedContent() {
  const { locale } = useI18n()
  const isEn = computed(() => locale.value === 'en')

  const catLabel = (c: string) => (isEn.value ? categoryLabelsEn[c] ?? c : c)

  const pName = (p: { id: string; name: string }) =>
    isEn.value ? productEn[p.id]?.name ?? p.name : p.name
  const pDesc = (p: { id: string; description: string }) =>
    isEn.value ? productEn[p.id]?.description ?? p.description : p.description
  const pTags = (p: { id: string; tags: string[] }) =>
    isEn.value ? productEn[p.id]?.tags ?? p.tags : p.tags

  const wTitle = (p: { id: string; title: string }) =>
    isEn.value ? portfolioEn[p.id]?.title ?? p.title : p.title
  const wDesc = (p: { id: string; shortDesc: string }) =>
    isEn.value ? portfolioEn[p.id]?.shortDesc ?? p.shortDesc : p.shortDesc

  const bTitle = (p: { id: string; title: string }) =>
    isEn.value ? blogEn[p.id]?.title ?? p.title : p.title
  const bExcerpt = (p: { id: string; excerpt: string }) =>
    isEn.value ? blogEn[p.id]?.excerpt ?? p.excerpt : p.excerpt

  return { isEn, catLabel, pName, pDesc, pTags, wTitle, wDesc, bTitle, bExcerpt }
}
