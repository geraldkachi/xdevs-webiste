import type { Metadata } from 'next'
import { notFound }       from 'next/navigation'
import Link               from 'next/link'
import Script             from 'next/script'
import { PageShell }      from '@/components/PageShell'
import { FadeIn }         from '@/components/FadeIn'
import { ParallaxText }   from '@/components/ParallaxText'
import { Breadcrumb }     from '@/components/Breadcrumb'
import { SERVICE_DEFS, SITE_URL }   from '@/lib/data'
import { buildMetadata, serviceSchema } from '@/lib/metadata'

// ── Static params ──────────────────────────────────────────────────────────
export async function generateStaticParams() {
  return SERVICE_DEFS.map((s) => ({ slug: s.slug }))
}

// ── Metadata ───────────────────────────────────────────────────────────────
// export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
//   const service = SERVICE_DEFS.find((s) => s.slug === params.slug)
//   if (!service) return {}
//   return buildMetadata({
//     title:       service.seoTitle,
//     description: service.seoDesc,
//     path:        `/services/${service.slug}`,
//     keywords:    [service.label.toLowerCase(), ...service.tech.map((t) => t.toLowerCase())],
//   })
// }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params  // 👈 AWAIT THE PARAMS
  const service = SERVICE_DEFS.find((s) => s.slug === slug)
  
  if (!service) return {}
  
  return buildMetadata({
    title:       service.seoTitle,
    description: service.seoDesc,
    path:        `/services/${service.slug}`,
    keywords:    [service.label.toLowerCase(), ...service.tech.map((t) => t.toLowerCase())],
  })
}

// ── Page ───────────────────────────────────────────────────────────────────
export default async function ServicePage({ params }: { params: { slug: string } }) {
  // const service = SERVICE_DEFS.find((s) => s.slug === params.slug)
    const { slug } = await params  // 👈 AWAIT THE PARAMS HERE TOO
  const service = SERVICE_DEFS.find((s) => s.slug === slug)

  console.log(service, 'service now')
  if (!service) notFound()

  const structuredData = serviceSchema(
    service.label,
    service.seoDesc,
    `${SITE_URL}/services/${service.slug}`
  )

  return (
    <PageShell>
      <Script
        id={`service-schema-${service.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero */}
      <section
        className="relative min-h-[65vh] flex flex-col justify-end pb-20 px-6 md:px-16 grid-texture pt-24"
        style={{ background: 'var(--bg-secondary)' }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <FadeIn>
               {/* <Breadcrumb items={[{ name: 'Services', href: '/services' }, { name: service.label, href: `/services/${service.slug}` }]} /> */}
            <Breadcrumb items={[{ name: 'Services', href: `/services/${service.slug}` }, { name: service.label, href: `/services/${service.slug}` }]} />
            <div className="text-5xl mt-6 mb-6" aria-hidden="true">{service.icon}</div>
          </FadeIn>
          <FadeIn delay={80}>
            <p className="text-xs font-bold uppercase tracking-[0.3em] mb-4 opacity-40">Service</p>
            <h1 className="font-display" style={{ fontSize: 'clamp(3.5rem,10vw,9rem)' }}>
              {service.label.toUpperCase()}
            </h1>
          </FadeIn>
          <FadeIn delay={160}>
            <p className="mt-6 text-lg max-w-2xl opacity-60">{service.tagline}</p>
          </FadeIn>
        </div>
      </section>

      <ParallaxText text={`${service.label} · EXPERTISE · SCALE · PRECISION`} />

      {/* Capabilities + Approach */}
      <section className="py-28 px-6 md:px-16" style={{ background: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <FadeIn>
            <h2 className="font-display mb-10" style={{ fontSize: 'clamp(2rem,4vw,3.5rem)' }}>CAPABILITIES</h2>
            <div className="divide-y" style={{ borderColor: 'var(--border-col)' }}>
              {service.capabilities.map((c, i) => (
                <div key={c} className="flex items-center gap-5 py-4">
                  <span className="font-display opacity-20" style={{ fontSize: '1.1rem' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-semibold text-sm">{c}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={180}>
            <h2 className="font-display mb-10" style={{ fontSize: 'clamp(2rem,4vw,3.5rem)' }}>OUR APPROACH</h2>
            <p className="text-base leading-relaxed mb-10 opacity-60">{service.approach}</p>
            <h3 className="font-display mb-6" style={{ fontSize: '2rem' }}>TECH STACK</h3>
            <div className="flex flex-wrap gap-2">
              {service.tech.map((t) => (
                <span key={t} className="px-4 py-2 text-xs font-bold uppercase tracking-widest border opacity-60" style={{ borderColor: 'var(--border-col)' }}>
                  {t}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Related services */}
      <section className="py-20 px-6 md:px-16" style={{ background: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="font-display mb-10" style={{ fontSize: 'clamp(1.8rem,3.5vw,3rem)' }}>OTHER SERVICES</h2>
          </FadeIn>
          <div className="flex flex-wrap gap-3">
            {SERVICE_DEFS.filter((s) => s.slug !== service.slug).map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="text-xs font-bold uppercase tracking-widest px-5 py-3 border transition-opacity hover:opacity-60"
                style={{ borderColor: 'var(--border-col)' }}
              >
                {s.icon} {s.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-16" style={{ background: 'var(--fg-primary)' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem,5vw,4rem)', color: 'var(--bg-primary)' }}>
            INTERESTED IN {service.label.toUpperCase()}?
          </h2>
          <Link
            href="/contact"
            className="px-10 py-4 font-bold text-xs uppercase tracking-[0.2em] transition-opacity hover:opacity-75"
            style={{ background: 'var(--bg-primary)', color: 'var(--fg-primary)' }}
          >
            LET&apos;S TALK →
          </Link>
        </div>
      </section>
    </PageShell>
  )
}
