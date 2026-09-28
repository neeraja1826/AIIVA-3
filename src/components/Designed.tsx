import React from 'react';
import { motion } from 'framer-motion';
import { Label } from './Label';
import { RevealText } from './RevealText';
import { AudienceMark } from './AudienceMark';
import { audiences, commitments, standards } from '../data/audiences';
import { EASE } from '../utils/motion';

export function Designed() {
  return (
    <section id="solutions" className="border-t border-ink/10 bg-cream py-24 lg:py-36">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Label>10 / Who we design for</Label>
            <RevealText
              as="h2"
              text={'Designed for\nthe way\nyou live.'}
              accent={['you']}
              className="mt-6 font-display text-[clamp(2.75rem,5.6vw,6rem)] font-light uppercase leading-[0.9] tracking-[-0.025em]" />
            
          </div>

          <ul className="border-t border-ink/15 lg:col-span-7">
            {audiences.map((a, i) =>
            <motion.li
              key={a.name}
              className="grid grid-cols-[40px_1fr] items-center gap-x-5 gap-y-2 border-b border-ink/15 py-6 md:grid-cols-[48px_1fr_minmax(0,240px)] md:gap-x-8"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '0px 0px -10% 0px' }}
              transition={{ duration: 0.3, ease: EASE, delay: i * 0.05 }}>
              
                <AudienceMark type={a.mark} className="h-10 w-10 text-terracotta" />
                <h3 className="font-display text-3xl font-light uppercase leading-none tracking-[-0.02em] md:text-5xl">{a.name}</h3>
                <p className="col-start-2 text-[14px] leading-relaxed text-ink/60 md:col-start-3">{a.description}</p>
              </motion.li>
            )}
          </ul>
        </div>

        <div className="mt-24 grid gap-10 border-t border-ink/15 pt-10 md:grid-cols-3 lg:mt-32">
          {commitments.map((c) =>
          <div key={c.title}>
              <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em]">
                <span className="h-1.5 w-1.5 rounded-full bg-sage-deep" aria-hidden="true" />
                {c.title}
              </p>
              <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-ink/65">{c.text}</p>
            </div>
          )}
        </div>

        <div className="mt-16 flex flex-col gap-4 md:flex-row md:items-baseline md:gap-10">
          <p className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/50">Works with</p>
          <ul className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
            {standards.map((s, i) =>
            <li key={s} className="flex items-baseline gap-6 font-display text-2xl font-light italic text-ink/80 md:text-3xl">
                {s}
                {i < standards.length - 1 && <span className="h-1 w-1 rounded-full bg-terracotta" aria-hidden="true" />}
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>);

}