import type { Metadata } from 'next'
import { PageShell }      from '@/components/PageShell'
import { FadeIn }         from '@/components/FadeIn'
import { ParallaxText }   from '@/components/ParallaxText'
import { Breadcrumb }     from '@/components/Breadcrumb'
import { PROCESS_STEPS }  from '@/lib/data'
import { buildMetadata }  from '@/lib/metadata'

export const metadata: Metadata = buildMetadata({
  title: 'Our Process | XDEVS',
  description: 'How XDEVS works: a 6-step engineering process from discovery to evolution. Agile sprints, zero-downtime deploys, and continuous improvement baked in.',
  path: '/process',
})

export default function ProcessPage() {
  return (
    <PageShell>
      <section
        className="relative min-h-[50vh] flex flex-col justify-end pb-20 px-6 md:px-16 grid-texture pt-24"
        style={{ background: 'var(--bg-secondary)' }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <FadeIn>
            <Breadcrumb items={[{ name: 'Our Process', href: '/process' }]} />
            <p className="text-xs font-bold uppercase tracking-[0.3em] mt-6 mb-4 opacity-40">How We Work</p>
            <h1 className="font-display" style={{ fontSize: 'clamp(3.5rem,10vw,9rem)' }}>OUR PROCESS</h1>
          </FadeIn>
        </div>
      </section>

      <ParallaxText text="DISCOVER · ARCHITECT · BUILD · REVIEW · DEPLOY · EVOLVE" />

      <section className="py-28 px-6 md:px-16" style={{ background: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'var(--border-col)' }}>
            {PROCESS_STEPS.map((s, i) => (
              <FadeIn key={s.n} delay={i * 70}>
                <div className="p-10 h-full" style={{ background: 'var(--bg-primary)' }}>
                  <p className="font-display mb-6 opacity-15" style={{ fontSize: '4rem', lineHeight: 1 }}>{s.n}</p>
                  <h2 className="font-display mb-5" style={{ fontSize: '2rem' }}>{s.title.toUpperCase()}</h2>
                  <p className="text-sm leading-relaxed opacity-60">{s.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 px-6 md:px-16" style={{ background: 'var(--bg-secondary)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="font-display opacity-10 mb-8" style={{ fontSize: 'clamp(3rem,7vw,5rem)' }} aria-hidden="true">"</p>
            <blockquote className="text-xl md:text-2xl leading-relaxed opacity-70">
              We believe the best technology is invisible. It just works — reliably, elegantly, at every scale.
            </blockquote>
            <p className="mt-8 text-xs font-bold uppercase tracking-[0.3em] opacity-30">— XDEVS Engineering Philosophy</p>
          </FadeIn>
        </div>
      </section>
    </PageShell>
  )
}
