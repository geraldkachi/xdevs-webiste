import type { Metadata }   from 'next'
import Link                  from 'next/link'
import { PageShell }         from '@/components/PageShell'
import { FadeIn }            from '@/components/FadeIn'
import { ParallaxText }      from '@/components/ParallaxText'
import { Breadcrumb }        from '@/components/Breadcrumb'
import { JOB_ROLES, PERKS }  from '@/lib/data'
import { buildMetadata }     from '@/lib/metadata'

export const metadata: Metadata = buildMetadata({
  title: 'Careers | XDEVS',
  description: 'Join XDEVS. We are hiring exceptional engineers, data scientists, and architects. Remote-first, competitive equity, unlimited PTO, and $2k learning budget.',
  path: '/careers',
  keywords: ['engineering jobs', 'remote tech jobs', 'software engineer hiring', 'data engineer jobs'],
})

export default function CareersPage() {
  return (
    <PageShell>
      <section
        className="relative min-h-[55vh] flex flex-col justify-end pb-20 px-6 md:px-16 grid-texture pt-24"
        style={{ background: 'var(--bg-secondary)' }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <FadeIn>
            <Breadcrumb items={[{ name: 'Careers', href: '/careers' }]} />
            <p className="text-xs font-bold uppercase tracking-[0.3em] mt-6 mb-4 opacity-40">Join the Team</p>
            <h1 className="font-display" style={{ fontSize: 'clamp(4rem,11vw,10rem)' }}>CAREERS</h1>
          </FadeIn>
          <FadeIn delay={140}>
            <p className="mt-6 text-lg max-w-lg opacity-60">
              We hire exceptional humans who care deeply about their craft. Remote-first, ambitious, collaborative.
            </p>
          </FadeIn>
        </div>
      </section>

      <ParallaxText text="JOIN US · GROW · BUILD · IMPACT · THRIVE · LEAD" />

      {/* Roles */}
      <section className="py-28 px-6 md:px-16" style={{ background: 'var(--bg-primary)' }}>
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="font-display mb-12" style={{ fontSize: 'clamp(2rem,5vw,4rem)' }}>OPEN ROLES</h2>
          </FadeIn>
          <div className="divide-y" style={{ borderColor: 'var(--border-col)' }}>
            {JOB_ROLES.map((r, i) => (
              <FadeIn key={r.title} delay={i * 60}>
                <Link
                  href="/contact"
                  className="group flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-7 transition-opacity hover:opacity-50"
                >
                  <div>
                    <h3 className="font-bold text-lg">{r.title}</h3>
                    <p className="text-xs mt-1 opacity-40">{r.team}</p>
                  </div>
                  <div className="flex items-center gap-5">
                    <span className="text-sm opacity-60">📍 {r.location}</span>
                    <span className="text-xs font-semibold px-3 py-1.5 border" style={{ borderColor: 'var(--border-col)', opacity: 0.6 }}>
                      {r.type}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest hidden md:block">Apply →</span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-28 px-6 md:px-16" style={{ background: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="font-display mb-14" style={{ fontSize: 'clamp(2rem,5vw,4rem)' }}>WHY XDEVS</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'var(--border-col)' }}>
            {PERKS.map((p, i) => (
              <FadeIn key={p.title} delay={i * 70}>
                <div className="p-8 h-full" style={{ background: 'var(--bg-secondary)' }}>
                  <p className="text-3xl mb-4" aria-hidden="true">{p.icon}</p>
                  <h3 className="font-bold text-base mb-2">{p.title}</h3>
                  <p className="text-sm leading-relaxed opacity-50">{p.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  )
}
