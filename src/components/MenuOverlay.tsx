import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageSquare, ArrowRight } from 'lucide-react';
import { Label } from './Label';
import { menuLinks } from '../data/navigation';
import { companyInfo } from '../data/company';
import { EASE, pad } from '../utils/motion';

interface MenuOverlayProps {
  open: boolean;
  onClose: () => void;
}

export function MenuOverlay({ open, onClose }: MenuOverlayProps) {
  const [hovered, setHovered] = useState(0);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  const preview = menuLinks[hovered] || menuLinks[0];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="site-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="fixed inset-0 z-40 overflow-y-auto bg-ink text-cream"
          initial={{ clipPath: 'circle(0% at 50% 40px)' }}
          animate={{ clipPath: 'circle(150% at 50% 40px)' }}
          exit={{ clipPath: 'circle(0% at 50% 40px)' }}
          transition={{ duration: 0.3, ease: EASE }}
        >
          <div className="mx-auto grid min-h-full max-w-[1600px] gap-12 px-5 pb-12 pt-28 md:px-10 lg:grid-cols-12 lg:pt-32">
            
            {/* Left Nav List */}
            <nav className="lg:col-span-7" aria-label="Main Navigation">
              <div className="flex items-center justify-between border-b border-cream/15 pb-4">
                <div className="flex items-center gap-3">
                  <img
                    src="/images/aiiva/media_1790578630874.png"
                    alt="AIIVA Logo"
                    className="h-10 w-auto object-contain rounded bg-white p-1"
                  />
                  <div>
                    <p className="font-display text-lg font-bold tracking-tight text-cream">AIIVA AUTOMATION</p>
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-terracotta">SMART AND AFFORDABLE</p>
                  </div>
                </div>
                <Label tone="cream">Navigation</Label>
              </div>

              <ul className="mt-4">
                {menuLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    className="border-b border-cream/10"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.08 + i * 0.03, duration: 0.25, ease: EASE }}
                  >
                    <a
                      href={link.href}
                      onClick={onClose}
                      onMouseEnter={() => setHovered(i)}
                      onFocus={() => setHovered(i)}
                      className="group flex items-baseline gap-6 py-3.5 focus-visible:outline-none"
                    >
                      <span className="w-8 shrink-0 text-[11px] tracking-[0.2em] text-terracotta">{pad(i + 1)}</span>
                      <span className="font-display text-[clamp(1.75rem,3.8vw,3.75rem)] font-light uppercase leading-none tracking-[-0.02em] transition-[transform,color] duration-300 ease-editorial group-hover:translate-x-3 group-hover:italic group-hover:text-terracotta">
                        {link.label}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* Direct Quick WhatsApp Bar for Mobile */}
              <div className="mt-8 flex flex-wrap gap-4 lg:hidden">
                <a
                  href="https://wa.me/919000006000?text=Hi%20AIIVA%20Automation%2C%20I%20would%20like%20to%20know%20more."
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-[12px] font-bold uppercase tracking-[0.14em] text-white"
                >
                  <MessageSquare className="h-4 w-4" />
                  Chat on WhatsApp
                </a>

                <a
                  href="tel:+919000006000"
                  className="flex items-center gap-2 rounded-full border border-cream/20 bg-cream/10 px-5 py-3 text-[12px] font-semibold text-cream"
                >
                  <Phone className="h-4 w-4 text-terracotta" />
                  +91 90000 06000
                </a>
              </div>
            </nav>

            {/* Right Preview & Contact Details */}
            <div className="hidden flex-col justify-between gap-8 lg:col-span-5 lg:flex">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-cream/10 border border-cream/15 shadow-xl">
                <AnimatePresence initial={false}>
                  <motion.img
                    key={preview.href}
                    src={preview.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                    initial={{ clipPath: 'inset(0% 0% 100% 0%)', zIndex: 1 }}
                    animate={{ clipPath: 'inset(0% 0% 0% 0%)', zIndex: 1 }}
                    exit={{ zIndex: 0, transition: { duration: 0.25 } }}
                    transition={{ duration: 0.25, ease: EASE }}
                  />
                </AnimatePresence>
                <div className="absolute bottom-3 left-3 rounded-lg bg-black/60 px-3 py-1 backdrop-blur-sm text-[11px] font-semibold uppercase tracking-[0.18em] text-cream">
                  {preview.label}
                </div>
              </div>

              {/* Office Details */}
              <div className="rounded-2xl bg-cream/5 p-6 border border-cream/10 space-y-4 text-[13px] text-cream/80">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-terracotta mb-1">Hyderabad Studio</p>
                  <p className="font-medium text-cream">{companyInfo.contact.address}</p>
                  <p className="text-cream/60">{companyInfo.contact.landmark}, {companyInfo.contact.city} - {companyInfo.contact.pincode}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 border-t border-cream/10 pt-3">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-terracotta">Phone / WA</p>
                    <p className="font-semibold text-cream mt-0.5">+91 90000 06000</p>
                    <p className="text-cream/60">+91 97043 00006</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-terracotta">Email</p>
                    <a href={`mailto:${companyInfo.contact.email}`} className="text-cream font-medium hover:underline block mt-0.5 truncate">
                      {companyInfo.contact.email}
                    </a>
                    <p className="text-cream/60">{companyInfo.contact.workingHours}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}