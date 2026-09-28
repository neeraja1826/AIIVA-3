import React, { useRef, useState } from 'react';
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { JourneyBackdrop } from './JourneyBackdrop';
import { dayMoments } from '../../data/dayMoments';
import { pad } from '../../utils/motion';

export function JourneyScroller() {
  const ref = useRef<HTMLDivElement>(null);
  const n = dayMoments.length;
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const x = useTransform(scrollYProgress, [0, 1], ['0vw', `-${(n - 1) * 100}vw`]);
  const [active, setActive] = useState(0);

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setActive(Math.min(n - 1, Math.max(0, Math.round(v * (n - 1)))));
  });

  const jump = (i: number) => {
    const el = ref.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const distance = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: top + distance * i / (n - 1), behavior: 'smooth' });
  };

  return (
    <div ref={ref} className="relative" style={{ height: `${n * 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden bg-ink">
        {dayMoments.map((m, i) =>
        <JourneyBackdrop key={m.time} moment={m} index={i} total={n} progress={scrollYProgress} />
        )}

        {/* Timeline */}
        <div className="absolute inset-x-0 top-24 z-20">
          <div className="mx-auto max-w-[1600px] px-10">
            <div className="relative h-px bg-cream/30">
              <motion.div className="absolute inset-0 origin-left bg-cream" style={{ scaleX: scrollYProgress }} />
            </div>
            <ol className="mt-4 flex justify-between">
              {dayMoments.map((m, i) =>
              <li key={m.time} className={i === n - 1 ? 'text-right' : ''}>
                  <button
                  type="button"
                  onClick={() => jump(i)}
                  aria-current={i === active ? 'step' : undefined}
                  className={`transition-colors duration-200 ${
                  i === active ? 'text-cream' : 'text-cream/55 hover:text-cream/85'}`
                  }>
                  
                    <span className="block font-display text-2xl font-light tabular-nums">{m.time}</span>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.22em]">{m.label}</span>
                  </button>
                </li>
              )}
            </ol>
          </div>
        </div>

        {/* Horizontal track */}
        <motion.div className="absolute inset-y-0 left-0 z-10 flex" style={{ x, width: `${n * 100}vw` }}>
          {dayMoments.map((m, i) =>
          <article key={m.time} className="relative h-full w-screen shrink-0" aria-label={`${m.time} ${m.label}`}>
              <div className="absolute inset-x-0 bottom-0 mx-auto flex max-w-[1600px] items-end justify-between gap-10 px-10 pb-14">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cream/85">
                    {pad(i + 1)} / {pad(n)} — {m.label}
                  </p>
                  <p className="font-display text-[clamp(6rem,15vw,15rem)] font-light leading-[0.8] tracking-[-0.04em] text-cream tabular-nums">
                    {m.time}
                  </p>
                </div>
                <div className="w-[380px] shrink-0 bg-cream p-8 text-ink">
                  <h3 className="font-display text-3xl font-light leading-tight">{m.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink/70">{m.description}</p>
                  <ul className="mt-6 border-t border-ink/10">
                    {m.automations.map((a) =>
                  <li key={a.name} className="flex items-center justify-between border-b border-ink/10 py-3">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.18em]">{a.name}</span>
                        <span className="flex items-center gap-2 text-[13px] text-ink/65">
                          <span className="h-1.5 w-1.5 rounded-full bg-sage" aria-hidden="true" />
                          {a.state}
                        </span>
                      </li>
                  )}
                  </ul>
                </div>
              </div>
            </article>
          )}
        </motion.div>
      </div>
    </div>);

}