'use client'

import { useEffect, useRef, useState } from 'react'

interface Props {
  children: React.ReactNode
  delay?:   number
  className?: string
  direction?: 'up' | 'left' | 'right' | 'none'
}

export function FadeIn({ children, delay = 0, className = '', direction = 'up' }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const transforms: Record<string, string> = {
    up:    'translateY(28px)',
    left:  'translateX(-28px)',
    right: 'translateX(28px)',
    none:  'none',
  }

  return (
    <div
      ref={ref}
      style={{
        transitionDelay:          `${delay}ms`,
        transitionDuration:       '700ms',
        transitionTimingFunction: 'cubic-bezier(0.25,0.46,0.45,0.94)',
        transitionProperty:       'opacity, transform',
        opacity:                  visible ? 1 : 0,
        transform:                visible ? 'none' : transforms[direction],
      }}
      className={className}
    >
      {children}
    </div>
  )
}
