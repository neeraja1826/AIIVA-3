import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, MessageSquare, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import { Label } from './Label';
import { RevealText } from './RevealText';
import { ArrowButton } from './ArrowButton';
import { heroScenes } from '../data/heroScenes';
import { companyInfo } from '../data/company';
import { EASE } from '../utils/motion';

const SCENE_DURATION = 6;

export function Hero() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '16%']);
  const panelY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  useEffect(() => {
    const t = window.setTimeout(() => setActive((a) => (a + 1) % heroScenes.length), SCENE_DURATION * 1000);
    return () => window.clearTimeout(t);
  }, [active]);

  const scene = heroScenes[active];

  return (
    <section id="top" ref={ref} className="relative bg-cream">
      {/* Background Image Carousel */}
      <div className="relative h-[85svh] min-h-[580px] overflow-hidden md:h-[100svh] md:min-h-[720px]">
        <motion.div className="absolute inset-0" style={reduce ? undefined : { y: imageY }}>
          <AnimatePresence initial={false}>
            <motion.img
              key={scene.id}
              src={scene.image}
              alt={scene.alt}
              className="absolute inset-0 h-full w-full object-cover"
              initial={{ clipPath: 'inset(0% 0% 0% 100%)', scale: 1.06, zIndex: 1 }}
              animate={{ clipPath: 'inset(0% 0% 0% 0%)', scale: 1, zIndex: 1 }}
              exit={{ zIndex: 0, transition: { duration: 0.3 } }}
              transition={{
                clipPath: { duration: 0.3, ease: EASE },
                scale: { duration: reduce ? 0 : 8, ease: 'linear' }
              }}
            />
          </AnimatePresence>
        </motion.div>
        
        {/* Soft Overlays */}
        <div className="absolute inset-0 z-[2] bg-gradient-to-r from-ink/70 via-ink/30 to-transparent" aria-hidden="true" />
        <div className="absolute inset-0 z-[2] bg-ink/20" aria-hidden="true" />

        {/* Scene Switcher (Right Side) */}
        <div
          className="absolute right-5 top-1/2 z-[3] hidden -translate-y-1/2 flex-col gap-5 sm:flex md:right-10"
          role="tablist"
          aria-label="Hero scenes"
        >
          {heroScenes.map((s, i) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={`group flex items-center justify-end gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] transition-colors duration-200 ${
                i === active ? 'text-cream' : 'text-cream/60 hover:text-cream/90'
              }`}
            >
              <span>
                {s.index} — {s.label}
              </span>
              <span
                className={`relative h-px overflow-hidden bg-cream/40 transition-[width] duration-300 ease-editorial ${
                  i === active ? 'w-12' : 'w-5'
                }`}
              >
                {i === active && (
                  <motion.span
                    key={`progress-${active}`}
                    className="absolute inset-0 origin-left bg-cream"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: SCENE_DURATION, ease: 'linear' }}
                  />
                )}
              </span>
            </button>
          ))}
        </div>

        {/* Hero Bottom Bar Tags */}
        <div className="absolute bottom-8 right-10 z-[3] hidden items-center gap-6 text-cream/90 md:flex">
          <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.2em]">
            <MapPin className="h-3.5 w-3.5 text-terracotta" /> Basheer Bagh, Hyderabad
          </span>
          <span className="text-cream/40">•</span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em]">{scene.caption}</span>
        </div>
      </div>

      {/* Floating Hero Card */}
      <div className="relative z-10 mx-4 -mt-28 sm:mx-6 md:absolute md:bottom-[-4rem] md:left-0 md:mx-0 md:mt-0 md:w-[min(880px,72vw)]">
        <motion.div
          style={reduce ? undefined : { y: panelY }}
          className="rounded-tr-3xl bg-cream px-6 pb-10 pt-8 md:px-12 md:pb-14 md:pt-12 lg:px-16 shadow-2xl border-t border-r border-ink/10"
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-terracotta" />
              <Label>AIIVA Automation Pvt. Ltd.</Label>
            </div>
            <span className="rounded-full bg-terracotta/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-terracotta">
              SMART & AFFORDABLE
            </span>
          </div>

          <RevealText
            as="h1"
            immediate
            delay={0.1}
            text={'Smart Living.\nSimple Automation.\nAffordable Tech.'}
            accent={['Simple', 'Affordable']}
            accentClassName="italic text-terracotta"
            className="mt-6 font-display text-[clamp(2.5rem,5.2vw,5.75rem)] font-light uppercase leading-[0.92] tracking-[-0.025em] text-ink"
          />

          <p className="mt-6 max-w-xl text-[15px] md:text-[16px] leading-relaxed text-ink/75 font-normal">
            AIIVA Automation is a Hyderabad-based home and building automation leader providing smart, reliable and affordable solutions for lighting, motorized curtains, climate, glass touch switchboards, and security.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#estimator"
              className="inline-flex items-center gap-2 rounded-full bg-terracotta px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-cream shadow-md transition-all hover:bg-burgundy hover:shadow-lg"
            >
              <span>Instant Cost Estimator</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="https://wa.me/919000006000?text=Hi%20AIIVA%20Automation%2C%20I%20would%20like%20to%20know%20more%20about%20your%20smart%20home%20solutions."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-cream px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-ink transition-colors hover:bg-sand"
            >
              <MessageSquare className="h-4 w-4 text-[#25D366]" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-ink/10 pt-6">
            <div>
              <p className="font-display text-2xl font-light text-ink">100%</p>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/50 mt-0.5">Retrofit & New Build</p>
            </div>
            <div>
              <p className="font-display text-2xl font-light text-ink">Hyderabad</p>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/50 mt-0.5">HQ & Experience Center</p>
            </div>
            <div>
              <p className="font-display text-2xl font-light text-ink">&lt; 1 Day</p>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/50 mt-0.5">Switchboard Upgrade</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}