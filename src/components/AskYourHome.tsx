import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Label } from './Label';
import { askActions } from '../data/askActions';
import { EASE } from '../utils/motion';

const INTERVAL = 4.5;

export function AskYourHome() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const action = askActions[active];

  useEffect(() => {
    if (paused) return;
    const t = window.setTimeout(() => setActive((a) => (a + 1) % askActions.length), INTERVAL * 1000);
    return () => window.clearTimeout(t);
  }, [active, paused]);

  return (
    <section id="moments" className="bg-sand py-24 lg:py-36">
      <div className="mx-auto grid max-w-[1600px] gap-12 px-5 md:px-10 lg:grid-cols-12 lg:items-center lg:gap-8">
        <div className="lg:col-span-6">
          <Label>08 / What can your home do?</Label>
          <h2 className="mt-6 font-display text-[clamp(2.5rem,5.4vw,6rem)] font-light uppercase leading-[0.92] tracking-[-0.025em]">
            Ask your home to…
          </h2>
          <div
            className="relative mt-2 h-[2.1em] overflow-hidden font-display text-[clamp(2.25rem,4.6vw,5rem)] font-light italic leading-[1.05] tracking-[-0.02em] text-terracotta sm:h-[1.2em]"
            aria-live="polite">
            
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.p
                key={action.id}
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: '-100%', opacity: 0 }}
                transition={{ duration: 0.3, ease: EASE }}
                className="absolute inset-x-0 top-0">
                
                {action.phrase}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="mt-8 min-h-[96px]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/50">AIIVA responds</p>
            <AnimatePresence mode="wait" initial={false}>
              <motion.ul
                key={action.id}
                className="mt-3 space-y-1.5"
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, transition: { duration: 0.15 } }}>
                
                {action.responses.map((r, i) =>
                <motion.li
                  key={r}
                  className="flex items-center gap-3 text-[15px] text-ink/80"
                  variants={{
                    hidden: { opacity: 0, x: -8 },
                    show: { opacity: 1, x: 0, transition: { delay: 0.1 + i * 0.05, duration: 0.22, ease: EASE } }
                  }}>
                  
                    <span className="h-1.5 w-1.5 rounded-full bg-sage-deep" aria-hidden="true" />
                    {r}
                  </motion.li>
                )}
              </motion.ul>
            </AnimatePresence>
          </div>

          <div
            className="mt-10 flex flex-wrap gap-2"
            role="tablist"
            aria-label="Things to ask your home"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}>
            
            {askActions.map((a, i) =>
            <button
              key={a.id}
              type="button"
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={`relative overflow-hidden rounded-full border px-4 py-2 text-[13px] transition-colors duration-200 ${
              i === active ? 'border-ink bg-ink text-cream' : 'border-ink/20 text-ink/75 hover:border-ink/50 hover:text-ink'}`
              }>
              
                {a.phrase.replace('.', '')}
                {i === active && !paused &&
              <motion.span
                key={`bar-${active}`}
                className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-terracotta"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: INTERVAL, ease: 'linear' }}
                aria-hidden="true" />

              }
              </button>
            )}
          </div>
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <div className="relative aspect-[4/5] overflow-hidden bg-cream">
            <AnimatePresence initial={false}>
              <motion.img
                key={action.id}
                src={action.image}
                alt={action.alt}
                className="absolute inset-0 h-full w-full object-cover"
                initial={{ clipPath: 'inset(100% 0% 0% 0%)', scale: 1.1, zIndex: 1 }}
                animate={{ clipPath: 'inset(0% 0% 0% 0%)', scale: 1, zIndex: 1 }}
                exit={{ zIndex: 0, transition: { duration: 0.3 } }}
                transition={{ clipPath: { duration: 0.3, ease: EASE }, scale: { duration: 3, ease: 'linear' } }} />
              
            </AnimatePresence>
          </div>
          <div className="mt-4 flex justify-between text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/50">
            <span>“{action.phrase.replace('.', '')}”</span>
            <span className="tabular-nums">
              {String(active + 1).padStart(2, '0')} / {String(askActions.length).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>
    </section>);

}