import type { Metadata } from 'next'
import { PageShell }     from '@/components/PageShell'
import { FadeIn }        from '@/components/FadeIn'
import { ParallaxText }  from '@/components/ParallaxText'
import { Breadcrumb }    from '@/components/Breadcrumb'
import { ContactForm }   from './ContactForm'
import { buildMetadata } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata({
  title: 'Contact Us | XDEVS',
  description: 'Start a project with XDEVS. Tell us what you need and we will respond within 24 hours. Based in Lagos, serving clients globally.',
  path: '/contact',
  keywords: ['contact xdevs', 'hire engineers', 'start a project'],
})

export default function ContactPage() {
  return (
    <PageShell>
      <section
        className="relative min-h-[45vh] flex flex-col justify-end pb-20 px-6 md:px-16 grid-texture pt-24"
        style={{ background: 'var(--bg-secondary)' }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <FadeIn>
            <Breadcrumb items={[{ name: 'Contact', href: '/contact' }]} />
            <p className="text-xs font-bold uppercase tracking-[0.3em] mt-6 mb-4 opacity-40">Let&apos;s Work Together</p>
            <h1 className="font-display" style={{ fontSize: 'clamp(3.5rem,10vw,9rem)' }}>CONTACT US</h1>
          </FadeIn>
        </div>
      </section>

      <ParallaxText text="LET'S BUILD · GET IN TOUCH · START TODAY · CONNECT" />

      <section className="py-28 px-6 md:px-16" style={{ background: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">

          {/* Info */}
          <FadeIn>
            <h2 className="font-display mb-8" style={{ fontSize: 'clamp(2rem,4.5vw,3.8rem)' }}>
              LET&apos;S START<br />A CONVERSATION
            </h2>
            <p className="text-sm leading-loose mb-12 max-w-sm opacity-60">
              Whether you have a well-defined project or just an idea, we&apos;d love to hear from you. Our team typically responds within 24 hours.
            </p>

            <div className="divide-y" style={{ borderColor: 'var(--border-col)' }}>
              {[
                ['Email',          'hello@xdevs.io'],
                ['Response Time',  'Within 24 hours'],
                ['Headquarters',   'Lagos, Nigeria'],
                ['Global Coverage','US · UK · EU · Africa'],
              ].map(([k, v]) => (
                <div key={k} className="flex items-start gap-8 py-5">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] w-36 shrink-0 mt-0.5 opacity-30">{k}</span>
                  <span className="text-sm font-semibold">{v}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4 opacity-30">Follow</p>
              <div className="flex gap-3">
                {[
                  { label: 'Twitter', href: 'https://twitter.com/xdevsio' },
                  { label: 'LinkedIn', href: 'https://linkedin.com/company/xdevsltd' },
                  { label: 'GitHub', href: 'https://github.com/xdevsltd' },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold px-4 py-2 border opacity-50 hover:opacity-100 transition-opacity"
                    style={{ borderColor: 'var(--border-col)' }}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Form — client component */}
          <FadeIn delay={200}>
            <ContactForm />
          </FadeIn>
        </div>
      </section>

      {/* Location strip */}
      <section className="py-20 px-6 md:px-16" style={{ background: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto">
          <div
            className="border h-48 flex items-center justify-center relative overflow-hidden grid-texture"
            style={{ borderColor: 'var(--border-col)' }}
          >
            <div className="text-center z-10 relative">
              <p className="text-4xl mb-2">📍</p>
              <p className="font-display" style={{ fontSize: '1.4rem', letterSpacing: '0.05em' }}>Lagos, Nigeria</p>
              <p className="text-xs mt-1 opacity-40">Global Operations · Remote-First</p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
