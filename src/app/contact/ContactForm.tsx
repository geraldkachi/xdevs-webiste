'use client'

import { useState } from 'react'
import { SERVICES_NAV } from '@/lib/data'

interface FormData {
  name: string; email: string; company: string
  service: string; budget: string; message: string
}

export function ContactForm() {
  const [form, setForm]     = useState<FormData>({ name:'', email:'', company:'', service:'', budget:'', message:'' })
  const [focused, setFocus] = useState<string | null>(null)
  const [sent, setSent]     = useState(false)
  const [loading, setLoad]  = useState(false)

  const iCls = (f: string) => [
    'w-full bg-transparent border px-4 py-3.5 text-sm font-medium outline-none transition-all duration-200',
    'placeholder:opacity-20',
    focused === f ? 'border-current' : '',
    focused !== f ? 'border-[var(--border-col)]' : '',
  ].join(' ')

  const set = (k: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(p => ({ ...p, [k]: e.target.value }))

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoad(true)
    setTimeout(() => { setLoad(false); setSent(true) }, 1200)
  }

  if (sent) return (
    <div className="flex flex-col items-center justify-center h-full py-20 text-center">
      <p className="font-display opacity-20 mb-6" style={{ fontSize: '5rem', lineHeight: 1 }}>✓</p>
      <h3 className="font-display mb-4" style={{ fontSize: '3rem' }}>MESSAGE SENT</h3>
      <p className="text-sm opacity-60">We&apos;ll get back to you within 24 hours.</p>
    </div>
  )

  return (
    <form onSubmit={submit} noValidate className="space-y-8">
      <div className="grid grid-cols-2 gap-6">
        {(['name','email'] as const).map(f => (
          <div key={f}>
            <label className="block text-xs font-bold uppercase tracking-[0.18em] mb-2 opacity-30">
              {f === 'name' ? 'Name *' : 'Email *'}
            </label>
            <input
              required
              type={f === 'email' ? 'email' : 'text'}
              className={iCls(f)}
              placeholder={f === 'name' ? 'Your name' : 'you@company.com'}
              value={form[f]}
              onChange={set(f)}
              onFocus={() => setFocus(f)}
              onBlur={() => setFocus(null)}
            />
          </div>
        ))}
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-[0.18em] mb-2 opacity-30">Company</label>
        <input
          className={iCls('company')}
          placeholder="Your company"
          value={form.company}
          onChange={set('company')}
          onFocus={() => setFocus('company')}
          onBlur={() => setFocus(null)}
        />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-bold uppercase tracking-[0.18em] mb-2 opacity-30">Service</label>
          <select
            className={iCls('service')}
            value={form.service}
            onChange={set('service')}
            onFocus={() => setFocus('service')}
            onBlur={() => setFocus(null)}
            style={{ background: 'transparent' }}
          >
            <option value="">Select…</option>
            {SERVICES_NAV.map(s => (
              <option key={s.href} value={s.label} style={{ background: 'var(--bg-primary)' }}>{s.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-[0.18em] mb-2 opacity-30">Budget</label>
          <select
            className={iCls('budget')}
            value={form.budget}
            onChange={set('budget')}
            onFocus={() => setFocus('budget')}
            onBlur={() => setFocus(null)}
            style={{ background: 'transparent' }}
          >
            <option value="">Select…</option>
            {['< $10k','$10k – $50k','$50k – $150k','$150k+'].map(b => (
              <option key={b} value={b} style={{ background: 'var(--bg-primary)' }}>{b}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-[0.18em] mb-2 opacity-30">Message *</label>
        <textarea
          required
          rows={5}
          className={`${iCls('message')} resize-none`}
          placeholder="Tell us about your project…"
          value={form.message}
          onChange={set('message')}
          onFocus={() => setFocus('message')}
          onBlur={() => setFocus(null)}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn btn-primary w-full justify-center disabled:opacity-50 disabled:pointer-events-none"
      >
        {loading ? 'SENDING…' : 'SEND MESSAGE →'}
      </button>
    </form>
  )
}
