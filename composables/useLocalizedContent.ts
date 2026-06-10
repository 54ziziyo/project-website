import { categoryLabelsEn, productEn, portfolioEn, blogEn, productDetailEn } from '~/data/contentEn'
import { blogTagsEn } from '~/data/blogTagsEn'

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
  const pFullDesc = (p: { id: string; fullDescription: string }) =>
    isEn.value ? productDetailEn[p.id]?.fullDescription ?? p.fullDescription : p.fullDescription
  const pFeatures = (p: { id: string; features: string[] }) =>
    isEn.value ? productDetailEn[p.id]?.features ?? p.features : p.features

  const pCoverImage = (p: { coverImage: string; coverImageEn?: string }) =>
    isEn.value ? p.coverImageEn ?? p.coverImage : p.coverImage

  const bCoverImage = (p: { coverImage: string; coverImageEn?: string }) =>
    isEn.value ? p.coverImageEn ?? p.coverImage : p.coverImage

  const wTitle = (p: { id: string; title: string }) =>
    isEn.value ? portfolioEn[p.id]?.title ?? p.title : p.title
  const wDesc = (p: { id: string; shortDesc: string }) =>
    isEn.value ? portfolioEn[p.id]?.shortDesc ?? p.shortDesc : p.shortDesc

  // 部落格：優先用 Notion 的英文欄位，其次 contentEn 對照表，最後中文
  const bTitle = (p: { id: string; title: string; titleEn?: string }) =>
    isEn.value ? p.titleEn || blogEn[p.id]?.title || p.title : p.title
  const bExcerpt = (p: { id: string; excerpt: string; excerptEn?: string }) =>
    isEn.value ? p.excerptEn || blogEn[p.id]?.excerpt || p.excerpt : p.excerpt
  // 英文版：每個中文 tag 走全站字典翻譯（缺漏才 fallback 原文），與部落格列表頁一致
  const bTags = (p: { tags: string[]; tagsEn?: string[] }) =>
    isEn.value ? (p.tags || []).map((tg) => blogTagsEn[tg] || tg) : p.tags

  return { isEn, catLabel, pName, pDesc, pTags, pFullDesc, pFeatures, pCoverImage, bCoverImage, wTitle, wDesc, bTitle, bExcerpt, bTags }
}
