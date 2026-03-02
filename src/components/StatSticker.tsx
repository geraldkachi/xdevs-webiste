'use client'

import { useRef } from 'react'

type StatItem = {
  num: string
  label: string
}

interface StatsTickerProps {
  stats?: StatItem[]
  speed?: number // in seconds
}

const DEFAULT_STATS: StatItem[] = [
  { num: '50+',  label: 'Products Shipped' },
  { num: '98%',  label: 'Client Retention' },
  { num: '10TB+',label: 'Data Processed Daily' },
  { num: '12+',  label: 'Industries Served' },
  { num: '4x',   label: 'Avg Efficiency Gain' },
  { num: '24/7', label: 'System Uptime SLA' },
]

export default function StatsTicker({ 
  stats = DEFAULT_STATS,
  speed = 30,
}: StatsTickerProps) {
  
  const doubledStats = [...stats, ...stats]
  const tickerRef = useRef<HTMLDivElement>(null)

  return (
    <div className="w-full border-t border-b overflow-hidden" style={{ borderColor: 'var(--border-col)', background: 'var(--bg-primary)' }}>
      <div
        ref={tickerRef}
        className="flex"
        style={{
          animation: `ticker ${speed}s linear infinite`,
          width: 'max-content',
        }}
        onMouseEnter={() => {
          if (tickerRef.current) tickerRef.current.style.animationPlayState = 'paused'
        }}
        onMouseLeave={() => {
          if (tickerRef.current) tickerRef.current.style.animationPlayState = 'running'
        }}
      >
        {doubledStats.map((stat, index) => (
          <div
            key={`${stat.num}-${index}`}
            className="flex items-center gap-4 px-12 py-5 border-r shrink-0"
            style={{ borderColor: 'var(--border-col)' }}
          >
            <span 
              className="font-display text-2xl font-black tracking-tight"
              style={{ color: 'var(--fg-primary)' }}
            >
              {stat.num}
            </span>
            <span 
              className="font-outfit text-sm whitespace-nowrap"
              style={{ opacity: 0.4 }}
            >
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}