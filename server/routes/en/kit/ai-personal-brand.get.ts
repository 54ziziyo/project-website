import { serveKit } from '~/server/utils/serveKit'

// 受保護的英文內容頁
export default defineEventHandler((event) =>
  serveKit(event, 'kit/ai-personal-brand.en.html', 'en', 'ai-personal-brand'),
)
