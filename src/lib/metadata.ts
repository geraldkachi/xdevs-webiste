import type { Metadata } from 'next'
import { SITE_URL, SITE_NAME, SITE_DESC, TWITTER_HANDLE, OG_IMAGE } from './data'

interface PageSEO {
  title:       string
  description: string
  path:        string
  ogImage?:    string
  noIndex?:    boolean
  keywords?:   string[]
}

export function buildMetadata({
  title,
  description,
  path,
  ogImage = OG_IMAGE,
  noIndex = false,
  keywords = [],
}: PageSEO): Metadata {
  const url = `${SITE_URL}${path}`

  return {
    title,
    description,
    keywords: [
      'software engineering',
      'data engineering',
      'AI integration',
      'cloud devops',
      'business intelligence',
      ...keywords,
    ],
    authors:  [{ name: SITE_NAME, url: SITE_URL }],
    creator:  SITE_NAME,
    publisher: SITE_NAME,
    metadataBase: new URL(SITE_URL),

    // Canonical
    alternates: { canonical: url },

    // Open Graph
    openGraph: {
      type:        'website',
      url,
      siteName:    SITE_NAME,
      title,
      description,
      images: [
        {
          url:    ogImage,
          width:  1200,
          height: 630,
          alt:    title,
        },
      ],
      locale: 'en_US',
    },

    // Twitter / X
    twitter: {
      card:        'summary_large_image',
      site:        TWITTER_HANDLE,
      creator:     TWITTER_HANDLE,
      title,
      description,
      images:      [ogImage],
    },

    // Robots
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 },

    // Verification placeholders — replace with real codes
    verification: {
      google: 'REPLACE_WITH_GOOGLE_VERIFICATION_CODE',
      // yandex: 'REPLACE',
      // bing: 'REPLACE',
    },
  }
}

// ── Structured Data helpers (JSON-LD) ──────────────────────────────────────

export function organizationSchema() {
  return {
    '@context':   'https://schema.org',
    '@type':      'Organization',
    name:          SITE_NAME,
    url:           SITE_URL,
    logo:          `${SITE_URL}/favicon.svg`,
    description:   SITE_DESC,
    foundingDate:  '2016',
    numberOfEmployees: { '@type': 'QuantitativeValue', value: 50 },
    address: {
      '@type':           'PostalAddress',
      addressLocality:   'Lagos',
      addressCountry:    'NG',
    },
    sameAs: [
      'https://twitter.com/xdevsio',
      'https://linkedin.com/company/xdevs',
      'https://github.com/xdevs',
    ],
    contactPoint: {
      '@type':       'ContactPoint',
      email:         'hello@xdevs.io',
      contactType:   'customer service',
      availableLanguage: 'English',
    },
  }
}

export function serviceSchema(name: string, description: string, url: string) {
  return {
    '@context':    'https://schema.org',
    '@type':       'Service',
    name,
    description,
    url,
    provider: {
      '@type': 'Organization',
      name:     SITE_NAME,
      url:      SITE_URL,
    },
  }
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type':    'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type':   'ListItem',
      position:  i + 1,
      name:      item.name,
      item:      `${SITE_URL}${item.href}`,
    })),
  }
}

export function blogPostSchema({
  title,
  excerpt,
  date,
  slug,
}: {
  title: string
  excerpt: string
  date: string
  slug: string
}) {
  return {
    '@context':      'https://schema.org',
    '@type':         'BlogPosting',
    headline:        title,
    description:     excerpt,
    datePublished:   date,
    dateModified:    date,
    author: { '@type': 'Organization', name: SITE_NAME },
    publisher: {
      '@type': 'Organization',
      name:     SITE_NAME,
      logo:     { '@type': 'ImageObject', url: `${SITE_URL}/favicon.svg` },
    },
    url: `${SITE_URL}/blog/${slug}`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/${slug}` },
  }
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type':    'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type':          'Question',
      name:              q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }
}
