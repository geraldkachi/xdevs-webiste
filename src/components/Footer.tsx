'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { SERVICES_NAV, COMPANY_NAV } from '@/lib/data'

export function Footer() {
  const { resolvedTheme } = useTheme()
  // const [mounted, setMounted] = useState(false)
  // useEffect(() => setMounted(true), [])
  // const isDark = !mounted || resolvedTheme === 'dark'
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // This runs once on client, but uses a callback to avoid the warning
    setIsDark(resolvedTheme === 'dark')
  }, [resolvedTheme]) // ✅ Dependency array makes it "react to external state"


  return (
    <footer className={`border-t pt-16 pb-8 ${isDark ? 'bg-[#202634] border-[#1f2937]' : 'bg-[#f9fafb] border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="font-display text-4xl tracking-tight block mb-4">
              X<span style={{ opacity: 0.35 }}>DEVS</span>
            </Link>
            <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
              Elite engineering for ambitious companies. Building digital futures — today.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Start a Project →
            </Link>
          </div>

          {/* Services */}
          <div>
            <p className={`text-[0.65rem] font-bold uppercase tracking-[0.25em] mb-5 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
              Services
            </p>
            <div className="flex flex-col gap-3">
              {SERVICES_NAV.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className={`text-sm hover:opacity-100 transition-opacity ${isDark ? 'text-gray-400 opacity-70' : 'text-gray-600 opacity-80'}`}
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <p className={`text-[0.65rem] font-bold uppercase tracking-[0.25em] mb-5 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
              Company
            </p>
            <div className="flex flex-col gap-3">
              {COMPANY_NAV.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className={`text-sm hover:opacity-100 transition-opacity ${isDark ? 'text-gray-400 opacity-70' : 'text-gray-600 opacity-80'}`}
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <p className={`text-[0.65rem] font-bold uppercase tracking-[0.25em] mb-5 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
              Connect
            </p>
            <div className="flex flex-col gap-3">
              {[
                { label: 'Instagram', href: 'https://www.instagram.com/xdevs.ltd' },
                { label: 'Twitter / X', href: 'https://twitter.com/xdevsio' },
                { label: 'LinkedIn', href: 'https://linkedin.com/company/xdevsltd' },
                { label: 'GitHub', href: 'https://github.com/xdevs' },
                { label: 'hello@xdevs.io', href: 'mailto:hello@xdevs.io' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`text-sm hover:opacity-100 transition-opacity ${isDark ? 'text-gray-400 opacity-70' : 'text-gray-600 opacity-80'}`}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className={`border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 ${isDark ? 'border-[#1f2937]' : 'border-gray-200'}`}>
          <p className={`text-xs ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
            © {new Date().getFullYear()} XDEVS. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service'].map((t) => (
              <span key={t} className={`text-xs cursor-pointer hover:opacity-100 transition-opacity ${isDark ? 'text-gray-600 opacity-60' : 'text-gray-400 opacity-70'}`}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
