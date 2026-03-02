import type { Metadata } from 'next'
import Link               from 'next/link'
import { PageShell }      from '@/components/PageShell'
import { FadeIn }         from '@/components/FadeIn'
import { ParallaxText }   from '@/components/ParallaxText'
import { Breadcrumb }     from '@/components/Breadcrumb'
import { BLOG_POSTS }     from '@/lib/data'
import { buildMetadata }  from '@/lib/metadata'

export const metadata: Metadata = buildMetadata({
  title: 'Blog | XDEVS',
  description: 'Engineering insights from the XDEVS team: AI/ML in production, data pipeline patterns, zero-downtime deployments, modern BI stacks, and engineering culture.',
  path: '/blog',
  keywords: ['engineering blog', 'tech articles', 'AI ML insights', 'data engineering blog'],
})

export default function BlogPage() {
  return (
    <PageShell>
      <section
        className="relative min-h-[50vh] flex flex-col justify-end pb-20 px-6 md:px-16 grid-texture pt-24"
        style={{ background: 'var(--bg-secondary)' }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <FadeIn>
            <Breadcrumb items={[{ name: 'Blog', href: '/blog' }]} />
            <p className="text-xs font-bold uppercase tracking-[0.3em] mt-6 mb-4 opacity-40">Insights</p>
            <h1 className="font-display" style={{ fontSize: 'clamp(4rem,11vw,10rem)' }}>BLOG</h1>
          </FadeIn>
        </div>
      </section>

      <ParallaxText text="INSIGHTS · ENGINEERING · IDEAS · EXPERTISE · CULTURE" direction={-1} />

      <section className="py-28 px-6 md:px-16" style={{ background: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'var(--border-col)' }}>
            {BLOG_POSTS.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 70}>
                <article
                  className="group p-8 h-full transition-colors duration-300"
                  style={{ background: 'var(--bg-primary)' }}
                  // onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'var(--bg-secondary)' }}
                  // onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'var(--bg-primary)' }}
                >
                  <p className="text-4xl mb-6" aria-hidden="true">{post.icon}</p>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2 opacity-40">{post.tag}</p>
                  <h2 className="font-display mb-4 group-hover:opacity-50 transition-opacity" style={{ fontSize: '1.4rem', letterSpacing: '0.02em' }}>
                    {post.title}
                  </h2>
                  <p className="text-sm leading-relaxed mb-6 opacity-50">{post.excerpt}</p>
                  <div className="flex gap-5 text-xs opacity-30">
                    <time>{post.date}</time>
                    <span>{post.readTime} read</span>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  )
}
