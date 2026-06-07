import { serveKit } from '~/server/utils/serveKit'

// 受保護的中文內容頁；英文版見 /en/kit/ai-personal-brand
export default defineEventHandler((event) => serveKit(event, 'kit/ai-personal-brand.html', 'zh', 'ai-personal-brand'))
