import type { MetadataRoute } from 'next'
import { SERVICE_DEFS, BLOG_POSTS, SITE_URL } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL,                           lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${SITE_URL}/about`,                lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/our-story`,            lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/process`,              lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/case-studies`,         lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${SITE_URL}/careers`,              lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${SITE_URL}/blog`,                 lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${SITE_URL}/contact`,              lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
  ]

  const servicePages: MetadataRoute.Sitemap = SERVICE_DEFS.map((s) => ({
    url:             `${SITE_URL}/services/${s.slug}`,
    lastModified:    now,
    changeFrequency: 'monthly',
    priority:        0.85,
  }))

  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((p) => ({
    url:             `${SITE_URL}/blog/${p.slug}`,
    lastModified:    now,
    changeFrequency: 'yearly',
    priority:        0.6,
  }))

  return [...staticPages, ...servicePages, ...blogPages]
}
