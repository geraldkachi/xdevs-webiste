import Link from 'next/link'
import { PageShell } from '@/components/PageShell'

export default function NotFound() {
  return (
    <PageShell>
      <section
        className="min-h-screen flex flex-col items-center justify-center px-6 grid-texture"
        style={{ background: 'var(--bg-primary)' }}
      >
        <p
          className="font-display opacity-5 absolute"
          style={{ fontSize: 'clamp(8rem,25vw,20rem)', lineHeight: 1, userSelect: 'none' }}
          aria-hidden="true"
        >
          404
        </p>
        <div className="relative z-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] mb-6 opacity-40">Page not found</p>
          <h1 className="font-display mb-6" style={{ fontSize: 'clamp(3rem,8vw,7rem)' }}>
            NOTHING HERE
          </h1>
          <p className="text-base opacity-50 mb-10 max-w-sm mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or may have moved.
          </p>
          <Link href="/" className="btn btn-primary">Back to Home →</Link>
        </div>
      </section>
    </PageShell>
  )
}
