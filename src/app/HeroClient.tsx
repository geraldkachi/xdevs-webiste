'use client'

import { useEffect, useLayoutEffect, useState } from 'react'
import Link from 'next/link'
import { Counter } from '@/components/Counter'
import type { Stat } from '@/lib/types'
import AnimatedEngineer from '@/components/AnimatedEngineer'

export function HeroClient({ stats }: { stats: Stat[] }) {
  const [mouse,   setMouse]   = useState({ x: 0, y: 0 })
  const [mounted, setMounted] = useState(false)

useLayoutEffect(() => {
    // This runs before paint, so no flash of unstyled content
    setMounted(true)
  }
  , [])

  useEffect(() => {
    const h = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', h)
    return () => window.removeEventListener('mousemove', h)
  }, [])

  return (
    <section
      className="relative min-h-screen flex flex-col justify-end pb-20 md:pb-28 px-6 md:px-16 grid-texture"
      style={{ background: 'var(--bg-primary)' }}
    >
      {/* Radial spotlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at top right, rgba(128,128,128,0.04), transparent 60%)`,
        }}
      />

      {/* Mouse glow — dark only */}
      <div
        className="spotlight dark:block hidden"
        style={{
          background: `radial-gradient(500px at ${mouse.x}px ${mouse.y}px, rgba(255,255,255,0.04), transparent 75%)`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Eyebrow */}
        <p
          className="text-xs font-bold uppercase tracking-[0.35em] mb-8 opacity-40"
          style={{
            opacity:    mounted ? undefined : 0,
            transform:  mounted ? 'none' : 'translateY(16px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          ◆&nbsp; Technology Partner for Forward-Thinking Companies
        </p>

        {/* Headline */}
        <h1
          className="font-display"
          style={{
            fontSize:   'clamp(4.5rem, 13vw, 12rem)',
            lineHeight:  0.92,
            opacity:    mounted ? 1 : 0,
            transform:  mounted ? 'none' : 'translateY(32px)',
            transition: 'opacity 0.9s ease 0.12s, transform 0.9s ease 0.12s',
          }}
        >
          WE BUILD<br />
          DIGITAL<br />
          <span style={{ opacity: 0.2 }}>FUTURES</span>
        </h1>

        {/* Sub + CTA */}
        <div
          style={{
            opacity:    mounted ? 1 : 0,
            transform:  mounted ? 'none' : 'translateY(24px)',
            transition: 'opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s',
          }}
          className="mt-10 flex flex-col md:flex-row md:items-end gap-10"
        >
          <p className="text-base md:text-lg max-w-sm leading-relaxed opacity-60">
            From AI pipelines to cloud infrastructure — XDEVS engineers bespoke solutions that scale, perform, and evolve with your ambitions.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-primary">Start a Project →</Link>
            <Link href="/case-studies" className="btn btn-outline">Case Studies</Link>
          </div>
        </div>

          {/* Animated Engineer - Absolute positioned */}
  <div 
    className="absolute right-0 bottom-96 hidden lg:block"
    style={{
      opacity: mounted ? 1 : 0,
      transform: mounted ? 'none' : 'translateX(32px)',
      transition: 'opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s',
    }}
  >
    <div className="relative w-80 h-80">
      <AnimatedEngineer />
    </div>
  </div>

        {/* Stats */}
        <div
          style={{
            opacity:    mounted ? 1 : 0,
            transition: 'opacity 0.8s ease 0.5s',
          }}
          className="mt-20 pt-8 border-t grid grid-cols-2 md:grid-cols-4 gap-8"
          // style2={{ borderColor: 'var(--border-col)' }}
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div className="stat-num">
                <Counter target={s.value} suffix={s.suffix} />
              </div>
              <p className="text-xs uppercase tracking-[0.15em] font-semibold mt-1 opacity-40">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
