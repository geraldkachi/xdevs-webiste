'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { SERVICES_NAV, COMPANY_NAV } from '@/lib/data'

export function Navbar() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const pathname   = usePathname()
  const [scrolled,    setScrolled]    = useState(false)
  const [mobileOpen,  setMobileOpen]  = useState(false)
  const [dropdown,    setDropdown]    = useState<string | null>(null)
  const [mounted,     setMounted]     = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0)
    return () => clearTimeout(timer)
  }, [])
  
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  // Close mobile on route change
  // useEffect(() => { setMobileOpen(false) }, [pathname])
  // Close mobile on route change
  useEffect(() => {
    const timer = setTimeout(() => setMobileOpen(false), 0)
    return () => clearTimeout(timer)
  }, [pathname])

  const isDark = resolvedTheme === 'dark'

  const navBg = scrolled
    ? isDark
      ? 'bg-[#030712]/95 backdrop-blur-md border-b border-[#1f2937]'
      : 'bg-white/95 backdrop-blur-md border-b border-gray-200'
    : 'bg-transparent'

  const textCls   = isDark ? 'text-white' : 'text-[#030712]'
  const linkBase  = `text-[0.7rem] font-bold uppercase tracking-[0.18em] ${textCls} hover:opacity-50 transition-opacity duration-200`
  const ddBg      = isDark ? 'bg-[#0d1117] border border-[#1f2937]' : 'bg-white border border-gray-200 shadow-lg'
  const ddItem    = isDark
    ? 'text-gray-400 hover:text-white hover:bg-[#111827]'
    : 'text-gray-600 hover:text-black hover:bg-gray-50'

  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 h-16" />
    )
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className={`font-display text-2xl tracking-tight ${textCls} hover:opacity-80 transition-opacity`}>
          X<span style={{ opacity: 0.4 }}>DEVS</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdown('services')}
            onMouseLeave={() => setDropdown(null)}
          >
            <button className={linkBase} aria-expanded={dropdown === 'services'} aria-haspopup="true">
              Services
            </button>
            <div
              role="menu"
              className={`absolute top-7 left-0 w-58 z-50 transition-all duration-200 ${ddBg} ${
                dropdown === 'services'
                  ? 'opacity-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}
            >
              {SERVICES_NAV.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  role="menuitem"
                  className={`block px-4 py-3 text-xs font-semibold uppercase tracking-widest transition-colors ${ddItem}`}
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Company dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdown('company')}
            onMouseLeave={() => setDropdown(null)}
          >
            <button className={linkBase} aria-expanded={dropdown === 'company'} aria-haspopup="true">
              Company
            </button>
            <div
              role="menu"
              className={`absolute top-7 left-0 w-48 z-50 transition-all duration-200 ${ddBg} ${
                dropdown === 'company'
                  ? 'opacity-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}
            >
              {COMPANY_NAV.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  role="menuitem"
                  className={`block px-4 py-3 text-xs font-semibold uppercase tracking-widest transition-colors ${ddItem}`}
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/contact" className={linkBase}>
            Contact
          </Link>
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            className={`w-9 h-9 flex items-center justify-center border transition-all text-sm ${
              isDark
                ? 'border-[#1f2937] text-white hover:border-white'
                : 'border-gray-200 text-[#030712] hover:border-[#030712]'
            }`}
          >
            {isDark ? '☀' : '☾'}
          </button>

          <Link
            href="/contact"
            className="btn btn-primary hidden md:inline-flex"
          >
            Get Started →
          </Link>

          {/* Hamburger */}
          <button
            className={`md:hidden w-9 h-9 flex flex-col items-center justify-center gap-[5px] ${textCls}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span className={`block w-5 h-[1.5px] bg-current transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
            <span className={`block w-5 h-[1.5px] bg-current transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-[1.5px] bg-current transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-screen' : 'max-h-0'} ${
          isDark ? 'bg-[#030712] border-b border-[#1f2937]' : 'bg-white border-b border-gray-100'
        }`}
        aria-hidden={!mobileOpen}
      >
        <nav className="px-6 py-6 flex flex-col gap-4">
          <p className={`text-[0.6rem] font-bold uppercase tracking-[0.3em] ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
            Services
          </p>
          {SERVICES_NAV.map((s) => (
            <Link key={s.href} href={s.href} className={`text-sm font-semibold uppercase tracking-widest ${textCls} hover:opacity-50 transition-opacity`}>
              {s.label}
            </Link>
          ))}
          <p className={`text-[0.6rem] font-bold uppercase tracking-[0.3em] mt-2 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
            Company
          </p>
          {COMPANY_NAV.map((s) => (
            <Link key={s.href} href={s.href} className={`text-sm font-semibold uppercase tracking-widest ${textCls} hover:opacity-50 transition-opacity`}>
              {s.label}
            </Link>
          ))}
          <Link href="/contact" className={`text-sm font-semibold uppercase tracking-widest ${textCls} hover:opacity-50 transition-opacity`}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
