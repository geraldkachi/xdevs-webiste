'use client';

import AnimatedEngineer from './AnimatedEngineer';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 py-2 px-6 border-b border-gray-200">
        <p className="text-xs tracking-widest text-gray-500 text-center uppercase">
          Technology Partner for Forward-Thinking Companies
        </p>
      </div>

      {/* Navigation */}
      <nav className="absolute top-12 left-0 right-0 px-12 py-6 flex items-center justify-between z-10">
        <div className="text-2xl font-bold tracking-tight">XDEVS</div>
        
        <div className="flex items-center gap-8">
          <a href="#services" className="text-sm font-medium hover:text-gray-600 transition-colors">
            SERVICES
          </a>
          <a href="#company" className="text-sm font-medium hover:text-gray-600 transition-colors">
            COMPANY
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-gray-600 transition-colors">
            CONTACT
          </a>
          
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          </button>
          
          <button className="px-6 py-3 bg-black text-white text-sm font-semibold hover:bg-gray-800 transition-colors flex items-center gap-2">
            GET STARTED
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </nav>

      {/* Main content grid */}
      <div className="h-screen grid grid-cols-2 gap-12 px-12 pt-32">
        {/* Left side - Text content */}
        <div className="flex flex-col justify-center">
          <div className="max-w-xl">
            <h1 className="text-[120px] font-black leading-[0.9] tracking-tighter mb-12">
              WE BUILD
              <br />
              DIGITAL
              <br />
              <span className="text-gray-300">FUTURES</span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-12 max-w-md">
              From AI pipelines to cloud infrastructure —<br />
              XDEVS engineers bespoke solutions that<br />
              scale, perform, and evolve with your<br />
              ambitions.
            </p>

            <div className="flex items-center gap-6">
              <button className="px-8 py-4 bg-black text-white font-semibold hover:bg-gray-800 transition-colors flex items-center gap-2">
                START A PROJECT
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>

              <button className="px-8 py-4 border-2 border-black font-semibold hover:bg-black hover:text-white transition-colors">
                CASE STUDIES
              </button>
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute bottom-12 left-12">
            <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white font-bold">
              N
            </div>
          </div>
        </div>

        {/* Right side - Animated Engineer */}
        <div className="flex items-center justify-center">
          <AnimatedEngineer />
        </div>
      </div>
    </section>
  );
}
