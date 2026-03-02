import type { Metadata } from 'next'
import { PageShell }     from '@/components/PageShell'
import { FadeIn }        from '@/components/FadeIn'
import { ParallaxText }  from '@/components/ParallaxText'
import { Breadcrumb }    from '@/components/Breadcrumb'
import { CASE_STUDIES }  from '@/lib/data'
import { buildMetadata } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata({
  title: 'Case Studies | XDEVS',
  description: 'Real results from real projects: fraud detection, data lake migrations, zero-downtime deployments, AI integrations, and more. See how XDEVS delivers.',
  path: '/case-studies',
  keywords: ['case studies', 'project portfolio', 'engineering results'],
})

export default function CaseStudiesPage() {
  return (
    <PageShell>
      <section
        className="relative min-h-[50vh] flex flex-col justify-end pb-20 px-6 md:px-16 grid-texture pt-24"
        style={{ background: 'var(--bg-secondary)' }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <FadeIn>
            <Breadcrumb items={[{ name: 'Case Studies', href: '/case-studies' }]} />
            <p className="text-xs font-bold uppercase tracking-[0.3em] mt-6 mb-4 opacity-40">Work</p>
            <h1 className="font-display" style={{ fontSize: 'clamp(3.5rem,10vw,9rem)' }}>CASE STUDIES</h1>
          </FadeIn>
        </div>
      </section>

      <ParallaxText text="RESULTS · IMPACT · INNOVATION · SCALE · EXCELLENCE" direction={-1} />

      <section className="py-28 px-6 md:px-16" style={{ background: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-px" style={{ background: 'var(--border-col)' }}>
            {CASE_STUDIES.map((c, i) => (
              <FadeIn key={c.title} delay={i * 70}>
                <article
                  className="group p-10 h-full transition-colors duration-300"
                  style={{ background: 'var(--bg-primary)' }}
                  // onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'var(--bg-secondary)' }}
                  // onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'var(--bg-primary)' }}
                >
                  <p className="text-5xl mb-6" aria-hidden="true">{c.icon}</p>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] mb-1 opacity-40">{c.tag}</p>
                  <p className="text-xs uppercase tracking-[0.15em] mb-5 opacity-20">{c.client}</p>
                  <h2 className="font-display mb-4 group-hover:opacity-50 transition-opacity" style={{ fontSize: '1.6rem', letterSpacing: '0.02em' }}>
                    {c.title}
                  </h2>
                  <p className="text-sm leading-relaxed mb-6 opacity-50">{c.description}</p>
                  <p className="text-sm font-bold border-t pt-5 opacity-50" style={{ borderColor: 'var(--border-col)' }}>
                    {c.result}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  )
}
