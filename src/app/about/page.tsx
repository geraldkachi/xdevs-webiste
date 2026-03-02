import type { Metadata } from 'next'
import Link from 'next/link'
import { PageShell }    from '@/components/PageShell'
import { FadeIn }       from '@/components/FadeIn'
import { ParallaxText } from '@/components/ParallaxText'
import { Breadcrumb }   from '@/components/Breadcrumb'
import { TEAM }         from '@/lib/data'
import { buildMetadata } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata({
  title:       'About Us | XDEVS',
  description: 'Learn about XDEVS — a global engineering firm founded in 2016. 50+ engineers, 120+ products shipped, 6 continents. Meet the team behind the technology.',
  path:        '/about',
  keywords:    ['about xdevs', 'engineering company', 'tech team'],
})

export default function AboutPage() {
  return (
    <PageShell>
      <section
        className="relative min-h-[55vh] flex flex-col justify-end pb-20 px-6 md:px-16 grid-texture pt-24"
        style={{ background: 'var(--bg-secondary)' }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <FadeIn>
            <Breadcrumb items={[{ name: 'About Us', href: '/about' }]} />
            <p className="text-xs font-bold uppercase tracking-[0.3em] mt-6 mb-4 opacity-40">About XDEVS</p>
            <h1 className="font-display" style={{ fontSize: 'clamp(4rem,11vw,10rem)' }}>ABOUT US</h1>
          </FadeIn>
        </div>
      </section>

      <ParallaxText text="PEOPLE · PASSION · PRECISION · PERFORMANCE · PURPOSE" />

      <section className="py-28 px-6 md:px-16" style={{ background: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <FadeIn>
            <h2 className="font-display mb-8" style={{ fontSize: 'clamp(2.5rem,5vw,4.5rem)' }}>
              WE ARE<br /><span style={{ opacity: 0.25 }}>XDEVS</span>
            </h2>
            <p className="text-base leading-relaxed mb-5 opacity-60">
              Founded in 2016, XDEVS began as a small team of engineers with a radical belief: that exceptional technology should be accessible to every company, not just those with unlimited budgets.
            </p>
            <p className="text-base leading-relaxed mb-5 opacity-60">
              Today we are a global engineering firm with specialists across software, data, AI, cloud, and business intelligence. We've shipped over 120 products and processed billions of data points for clients ranging from seed-stage startups to Fortune 500 enterprises.
            </p>
            <p className="text-base leading-relaxed mb-10 opacity-60">
              Our edge? We don't just write code — we become part of your team, align on your goals, and build technology that outlasts the engagement.
            </p>
            <Link href="/our-story" className="btn btn-outline">Read Our Story →</Link>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="divide-y" style={{ borderColor: 'var(--border-col)' }}>
              {[
                ['Mission', 'To democratize elite engineering for ambitious companies worldwide.'],
                ['Vision',  'A world where great technology is a catalyst for human progress.'],
                ['Values',  'Craftsmanship · Accountability · Curiosity · Transparency'],
              ].map(([k, v]) => (
                <div key={k} className="py-8">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3 opacity-40">{k}</p>
                  <p className="font-semibold text-sm leading-relaxed">{v}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Team */}
      <section className="py-28 px-6 md:px-16" style={{ background: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="font-display mb-16" style={{ fontSize: 'clamp(2.5rem,6vw,5rem)' }}>LEADERSHIP</h2>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px" style={{ background: 'var(--border-col)' }}>
            {TEAM.map((m, i) => (
              <FadeIn key={m.name} delay={i * 70}>
                <div className="p-8 h-full" style={{ background: 'var(--bg-secondary)' }}>
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-6 text-sm font-bold"
                    style={{ background: 'var(--fg-primary)', color: 'var(--bg-primary)' }}
                  >
                    {m.initials}
                  </div>
                  <p className="font-bold text-base">{m.name}</p>
                  <p className="text-xs font-bold uppercase tracking-widest mt-1 opacity-40">{m.role}</p>
                  <p className="text-xs mt-2 opacity-30">{m.expertise}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  )
}
