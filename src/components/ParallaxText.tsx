'use client'

import { useEffect, useRef, useState } from 'react'

interface Props {
  text:       string
  direction?: 1 | -1
  speed?:     number
}

export function ParallaxText({ text, direction = 1, speed = 0.12 }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let ticking = false

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        if (!el) return
        const rect = el.getBoundingClientRect()
        const center = window.innerHeight / 2
        const delta = (rect.top + rect.height / 2 - center) * speed * direction
        setOffset(delta)
        ticking = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [speed, direction])

  const repeated = `${text} · ${text} · ${text} · ${text} · ${text} · `

  return (
    <div ref={ref} className="overflow-hidden select-none py-2" aria-hidden="true">
      <p
        style={{
          transform:    `translateX(${offset}px)`,
          transition:   'transform 0.05s linear',
          willChange:   'transform',
          whiteSpace:   'nowrap',
          fontFamily:   "var(--font-bebas), 'Bebas Neue', sans-serif",
          fontSize:     'clamp(3.5rem, 8vw, 7rem)',
          letterSpacing:'-0.01em',
          lineHeight:    1,
          opacity:       0.07,
          color:         'var(--fg-primary)',
        }}
      >
        {repeated}
      </p>
    </div>
  )
}
