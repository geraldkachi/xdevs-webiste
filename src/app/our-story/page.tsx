import type { Metadata } from 'next'
import { PageShell }    from '@/components/PageShell'
import { FadeIn }       from '@/components/FadeIn'
import { ParallaxText } from '@/components/ParallaxText'
import { Breadcrumb }   from '@/components/Breadcrumb'
import { MILESTONES }   from '@/lib/data'
import { buildMetadata } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata({
  title: 'Our Story | XDEVS',
  description: 'The origin story of XDEVS — from three engineers with a vision in 2016 to a global engineering firm with 50+ specialists across 6 continents.',
  path: '/our-story',
})

export default function OurStoryPage() {
  return (
    <PageShell>
      <section
        className="relative min-h-[50vh] flex flex-col justify-end pb-20 px-6 md:px-16 grid-texture pt-24"
        style={{ background: 'var(--bg-secondary)' }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <FadeIn>
            <Breadcrumb items={[{ name: 'Our Story', href: '/our-story' }]} />
            <p className="text-xs font-bold uppercase tracking-[0.3em] mt-6 mb-4 opacity-40">Origin Story</p>
            <h1 className="font-display" style={{ fontSize: 'clamp(4rem,11vw,10rem)' }}>OUR STORY</h1>
          </FadeIn>
        </div>
      </section>

      <ParallaxText text="HISTORY · GROWTH · MILESTONES · JOURNEY · ORIGIN" direction={-1} />

      <section className="py-28 px-6 md:px-16" style={{ background: 'var(--bg-primary)' }}>
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-xl md:text-2xl leading-relaxed mb-20 opacity-70">
              It started with a frustration. Three engineers kept watching companies overpay for mediocre software. They knew they could do better.
              <br /><br />
              So they did.
            </p>
          </FadeIn>

          <div className="relative">
            <div className="absolute left-[1.9rem] top-0 bottom-0 w-px" style={{ background: 'var(--border-col)' }} />
            {MILESTONES.map((m, i) => (
              <FadeIn key={m.year} delay={i * 100}>
                <div className="flex gap-10 mb-14 relative">
                  <div className="flex-shrink-0 mt-1.5">
                    <div
                      className="w-4 h-4 rounded-full border-2 z-10 relative"
                      style={{ marginLeft: '0.45rem', background: 'var(--bg-primary)', borderColor: 'var(--fg-primary)' }}
                    />
                  </div>
                  <div className="pb-2">
                    <p className="font-display mb-2 opacity-30" style={{ fontSize: '1rem', letterSpacing: '0.15em' }}>{m.year}</p>
                    <h3 className="font-display mb-3" style={{ fontSize: '1.8rem' }}>{m.title}</h3>
                    <p className="text-sm leading-relaxed opacity-60">{m.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  )
}
