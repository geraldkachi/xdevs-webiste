import type { Metadata, Viewport } from 'next'
import { Bebas_Neue, DM_Sans } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import Script from 'next/script'
import './globals.css'
import { SITE_NAME, SITE_DESC, SITE_URL, OG_IMAGE, TWITTER_HANDLE } from '@/lib/data'
import { organizationSchema } from '@/lib/metadata'

// ─── Fonts ────────────────────────────────────────────────────────────────
const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bebas',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
})

// ─── Root Metadata ────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default:  `${SITE_NAME} — Elite Engineering for Ambitious Companies`,
    template: `%s | ${SITE_NAME}`,
  },

  description: SITE_DESC,

  keywords: [
    'software engineering company',
    'data engineering services',
    'AI ML integration',
    'cloud devops consulting',
    'business intelligence services',
    'API integration company',
    'tech consultancy',
    'software development agency',
  ],

  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,

  openGraph: {
    type:     'website',
    url:       SITE_URL,
    siteName:  SITE_NAME,
    title:    `${SITE_NAME} — Elite Engineering`,
    description: SITE_DESC,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `${SITE_NAME} — Elite Engineering` }],
    locale:   'en_US',
  },

  twitter: {
    card:    'summary_large_image',
    site:     TWITTER_HANDLE,
    creator:  TWITTER_HANDLE,
    title:   `${SITE_NAME} — Elite Engineering`,
    description: SITE_DESC,
    images:  [OG_IMAGE],
  },

  robots: {
    index:   true,
    follow:  true,
    'max-snippet':       -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },

  alternates: { canonical: SITE_URL },

  icons: {
    icon:    '/favicon.svg',
    apple:   '/favicon.svg',
  },

  manifest: '/manifest.json',
}

export const viewport: Viewport = {
  width:        'device-width',
  initialScale:  1,
  themeColor:   [
    { media: '(prefers-color-scheme: dark)',  color: '#030712' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
}

// ─── Layout ────────────────────────────────────────────────────────────────
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${bebasNeue.variable} ${dmSans.variable}`}
    >
      <head>
        {/* Preconnect to Google Fonts (next/font handles it, but belt & braces) */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {/* Organisation JSON-LD — present on every page */}
        <Script
          id="org-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />

        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          storageKey="xdevs-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
