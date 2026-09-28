import React, { useEffect, useState } from 'react';
import { ArrowRightIcon, PlusIcon, Phone, MessageSquare } from 'lucide-react';
import { companyInfo } from '../data/company';

interface HeaderProps {
  menuOpen: boolean;
  onToggleMenu: () => void;
}

export function Header({ menuOpen, onToggleMenu }: HeaderProps) {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const showSolid = solid && !menuOpen;
  const tone = showSolid ? 'text-ink' : 'text-cream';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,color] duration-300 ease-editorial ${tone} ${
        showSolid
          ? 'border-ink/10 bg-cream/95 backdrop-blur-md shadow-sm'
          : 'border-white/10 bg-ink/30 backdrop-blur-sm'
      }`}
    >
      <div className="relative mx-auto flex h-20 max-w-[1600px] items-center justify-between px-5 md:px-10">
        
        {/* Brand Logo & Name */}
        <a href="#top" className="flex items-center gap-3 focus-visible:outline-none" aria-label="AIIVA Automation — home">
          <img
            src="/images/aiiva/media_1790578630874.png"
            alt="AIIVA Automation Logo"
            className="h-11 w-auto object-contain rounded-lg bg-white/90 p-1 shadow-sm"
          />
          <div className="flex flex-col">
            <span className={`font-display text-xl md:text-2xl font-semibold tracking-[-0.02em] ${showSolid ? 'text-ink' : 'text-cream'}`}>
              AIIVA
            </span>
            <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-terracotta -mt-1">
              SMART & AFFORDABLE
            </span>
          </div>
        </a>

        {/* Center Menu Trigger */}
        <button
          type="button"
          onClick={onToggleMenu}
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          className={`absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border transition-[background-color,color,border-color] duration-200 hover:bg-terracotta hover:border-terracotta hover:text-cream md:h-14 md:w-14 ${
            showSolid ? 'border-ink/20 text-ink bg-sand/30' : 'border-white/30 text-cream bg-ink/40'
          }`}
        >
          <span className="flex flex-col items-center gap-0.5 text-[9px] font-semibold uppercase tracking-[0.2em]">
            <span className="pl-[0.2em]">{menuOpen ? 'Close' : 'Menu'}</span>
            <PlusIcon
              className={`h-3 w-3 transition-transform duration-200 ease-editorial ${menuOpen ? 'rotate-45' : ''}`}
              aria-hidden="true"
            />
          </span>
        </button>

        {/* Right Actions */}
        <div className="flex items-center gap-3 md:gap-5">
          <a
            href="https://wa.me/919000006000?text=Hi%20AIIVA%20Automation%2C%20I%20would%20like%20to%20know%20more%20about%20your%20smart%20automation%20services."
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-[#25D366]/20 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all"
          >
            <MessageSquare className="h-3.5 w-3.5" />
            +91 90000 06000
          </a>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-terracotta px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-cream shadow-sm transition-all hover:bg-burgundy md:px-5 md:py-2.5"
          >
            <span>Let’s talk</span>
            <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 ease-editorial group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </div>

      </div>
    </header>
  );
}