import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { PageShell }    from '@/components/PageShell'
import { FadeIn }       from '@/components/FadeIn'
import { ParallaxText } from '@/components/ParallaxText'
import { Counter }      from '@/components/Counter'
import { HeroClient }   from './HeroClient'
import { STATS, SERVICE_DEFS, CASE_STUDIES, TESTIMONIALS } from '@/lib/data'
import { buildMetadata, faqSchema } from '@/lib/metadata'
import StatsTicker from '@/components/StatSticker'

export const metadata: Metadata = buildMetadata({
  title: 'XDEVS — Elite Engineering for Ambitious Companies',
  description: 'XDEVS delivers world-class software engineering, data engineering, AI/ML, cloud & DevOps, and BI services. 120+ products shipped for 50+ global clients.',
  path: '/',
  keywords: ['software development company', 'data engineering firm', 'AI consulting', 'devops agency'],
})

const faqs = [
  { q: 'What services does XDEVS offer?',                  a: 'XDEVS offers software engineering, data engineering, business intelligence, AI & ML integration, API development, and cloud & DevOps services.' },
  { q: 'Where is XDEVS based?',                            a: 'XDEVS is headquartered in Lagos, Nigeria, with global operations across the US, UK, EU, and Africa.' },
  { q: 'How long does a typical project take?',            a: 'Project timelines vary by scope. Small engagements take 4–8 weeks; enterprise platforms typically run 3–6 months. We provide a detailed timeline after discovery.' },
  { q: 'Do you work with startups or only enterprises?',   a: 'Both. We partner with seed-stage startups and Fortune 500 enterprises alike. Our engagement models scale to your needs and budget.' },
]

export default function HomePage() {
  return (
    <PageShell>
      {/* FAQ JSON-LD */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />

      {/* ── HERO (client — needs mouse tracking) ── */}
      <HeroClient stats={STATS} />
        <StatsTicker 
            // speed={20} 
            // accentColor="#FF6B6B"
            // bgColor="#1a1a1a"
          />

      {/* ── PARALLAX BREAK ── */}
      <ParallaxText text="SOFTWARE · DATA · AI · CLOUD · DEVOPS · BI · API" direction={1} />
      <ParallaxText text="ENGINEERING · INTELLIGENCE · INTEGRATION · AUTOMATION" direction={-1} />

      {/* ── SERVICES GRID ── */}
      <section className="py-32 px-6 md:px-16" style={{ background: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <FadeIn>
              <p className="text-xs font-bold uppercase tracking-[0.3em] mb-3 opacity-40">Our Expertise</p>
              <h2 className="font-display" style={{ fontSize: 'clamp(3rem,7vw,6rem)' }}>SERVICES</h2>
            </FadeIn>
            <FadeIn>
              <Link href="/services/software-engineering" className="hidden md:block text-xs font-bold uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">
                All Services →
              </Link>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'var(--border-col)' }}>
            {SERVICE_DEFS.map((s, i) => (
              <FadeIn key={s.slug} delay={i * 60}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group block p-8 h-full transition-colors duration-300"
                  style={{ background: 'var(--bg-primary)' }}
                  // onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'var(--bg-secondary)' }}
                  // onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'var(--bg-primary)' }}
                >
                  <div className="text-3xl mb-6" aria-hidden="true">{s.icon}</div>
                  <h3 className="font-display text-xl mb-3 group-hover:opacity-50 transition-opacity" style={{ letterSpacing: '0.02em' }}>
                    {s.label.toUpperCase()}
                  </h3>
                  <p className="text-sm leading-relaxed opacity-50">{s.description}</p>
                  <p className="mt-6 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1">
                    Explore →
                  </p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT STRIP ── */}
      <section className="py-32 px-6 md:px-16" style={{ background: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-[0.3em] mb-4 opacity-40">Who We Are</p>
            <h2 className="font-display mb-6" style={{ fontSize: 'clamp(2.8rem,6vw,5rem)' }}>
              ENGINEERING<br />AT SCALE
            </h2>
            <p className="text-base leading-relaxed mb-8 opacity-60">
              XDEVS is a team of elite engineers, data scientists, and architects obsessed with building technology that matters. We partner with startups and enterprises to turn complex problems into elegant, scalable solutions.
            </p>
            <Link href="/about" className="btn btn-outline">Our Story →</Link>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="grid grid-cols-2 gap-3">
              {[{ n:"'16", l:'Founded' },{ n:'50+', l:'Engineers' },{ n:'6', l:'Continents' },{ n:'ISO', l:'Certified' }].map((item) => (
                <div key={item.l} className="p-6 border" style={{ borderColor: 'var(--border-col)' }}>
                  <div className="font-display" style={{ fontSize: '2.4rem', lineHeight: 1 }}>{item.n}</div>
                  <div className="text-xs uppercase tracking-widest mt-2 opacity-40">{item.l}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CASE STUDIES ── */}
      <section className="py-32 px-6 md:px-16" style={{ background: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-[0.3em] mb-3 opacity-40">Work</p>
            <h2 className="font-display mb-16" style={{ fontSize: 'clamp(3rem,7vw,6rem)' }}>CASE STUDIES</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-px" style={{ background: 'var(--border-col)' }}>
            {CASE_STUDIES.slice(0, 4).map((c, i) => (
              <FadeIn key={c.title} delay={i * 80}>
                <Link
                  href="/case-studies"
                  className="group block p-10 transition-colors duration-300"
                  style={{ background: 'var(--bg-primary)' }}
                  // onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'var(--bg-secondary)' }}
                  // onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'var(--bg-primary)' }}
                >
                  <div className="text-5xl mb-6" aria-hidden="true">{c.icon}</div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2 opacity-40">{c.tag}</p>
                  <h3 className="font-display mb-4 group-hover:opacity-50 transition-opacity" style={{ fontSize: '1.4rem', letterSpacing: '0.02em' }}>
                    {c.title}
                  </h3>
                  <p className="text-base font-bold opacity-40">{c.result}</p>
                </Link>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={200}>
            <div className="mt-8 text-center">
              <Link href="/case-studies" className="btn btn-outline">View All Case Studies →</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── PARALLAX BREAK ── */}
      <ParallaxText text="INNOVATION · PRECISION · EXCELLENCE · VELOCITY · SCALE" direction={-1} />

      {/* ── CTA BAND ── */}
      <section className="py-24 px-6 md:px-16" style={{ background: 'var(--fg-primary)' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <FadeIn>
            <h2 className="font-display" style={{ fontSize: 'clamp(2.5rem,6vw,5rem)', color: 'var(--bg-primary)' }}>
              READY TO BUILD?
            </h2>
            <p className="mt-2 text-sm" style={{ color: 'var(--bg-primary)', opacity: 0.5 }}>
              Let&apos;s talk about your next breakthrough.
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <Link
              href="/contact"
              className="px-10 py-4 font-bold text-xs uppercase tracking-[0.2em] transition-opacity hover:opacity-75"
              style={{ background: 'var(--bg-primary)', color: 'var(--fg-primary)' }}
            >
              GET IN TOUCH →
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-32 px-6 md:px-16" style={{ background: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-[0.3em] mb-3 opacity-40">Testimonials</p>
            <h2 className="font-display mb-16" style={{ fontSize: 'clamp(2.8rem,6vw,5rem)' }}>
              WHAT CLIENTS SAY
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <FadeIn key={i} delay={i * 100}>
                <blockquote className="p-8 h-full border" style={{ borderColor: 'var(--border-col)' }}>
                  <p className="font-display opacity-10 mb-6" style={{ fontSize: '4rem', lineHeight: 1 }} aria-hidden="true">&apos; &apos;</p>
                  <p className="text-sm leading-loose mb-8 opacity-70">{t.quote}</p>
                  <footer>
                    <cite className="text-xs font-bold uppercase tracking-widest not-italic opacity-40">
                      {t.flag} {t.author}
                    </cite>
                    <p className="text-xs mt-1 opacity-30">{t.company}</p>
                  </footer>
                </blockquote>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ (hidden visually but indexed by Google) ── */}
      <section className="py-24 px-6 md:px-16" style={{ background: 'var(--bg-primary)' }}>
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="font-display mb-12" style={{ fontSize: 'clamp(2rem,4vw,3.5rem)' }}>
              FREQUENTLY ASKED
            </h2>
          </FadeIn>
          <div className="divide-y" style={{ borderColor: 'var(--border-col)' }}>
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 60}>
                <details className="py-6 group cursor-pointer">
                  <summary className="font-bold text-sm list-none flex items-center justify-between gap-4">
                    {faq.q}
                    <span className="opacity-30 group-open:rotate-45 transition-transform duration-200 shrink-0">+</span>
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed opacity-60">{faq.a}</p>
                </details>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  )
}
