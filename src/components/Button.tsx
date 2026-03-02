'use client'

import { useRef, useState } from 'react'

interface Props {
  children:  React.ReactNode
  onClick?:  () => void
  href?:     string
  variant?:  'primary' | 'outline'
  className?: string
  type?:     'button' | 'submit'
  disabled?: boolean
}

function MagBase({
  children,
  className,
  onMouseMove,
  onMouseLeave,
  style,
}: {
  children: React.ReactNode
  className: string
  onMouseMove: (e: React.MouseEvent) => void
  onMouseLeave: () => void
  style: React.CSSProperties
}) {
  return (
    <span
      className={className}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={style}
    >
      {children}
    </span>
  )
}

export function Button({ children, onClick, href, variant = 'primary', className = '', type = 'button', disabled = false }: Props) {
  const ref = useRef<HTMLElement>(null)
  const [mag, setMag] = useState({ x: 0, y: 0 })

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    setMag({ x: (e.clientX - r.left - r.width / 2) * 0.25, y: (e.clientY - r.top - r.height / 2) * 0.25 })
  }
  const onLeave = () => setMag({ x: 0, y: 0 })

  const cls   = `btn btn-${variant} ${className} ${disabled ? 'opacity-50 pointer-events-none' : ''}`
  const style = {
    transform:  `translate(${mag.x}px,${mag.y}px)`,
    transition: 'transform 0.2s ease, background 0.2s ease, color 0.2s ease, border-color 0.2s ease',
    display:    'inline-flex',
    alignItems: 'center',
  }

  if (href) {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        className={cls}
        style={style}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cls}
      style={style}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </button>
  )
}
