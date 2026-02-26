import { blogPosts } from '~/data/blogs'

export default defineSitemapEventHandler(() => {
  // 動態生成部落格文章的 sitemap URLs
  return blogPosts.map((post) => ({
    loc: `/blog/${post.id}`,
    lastmod: post.publishedAt,
    changefreq: 'monthly',
    priority: 0.7,
  }))
})
