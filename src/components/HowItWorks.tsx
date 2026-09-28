import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Label } from './Label';
import { RevealText } from './RevealText';
import { processSteps } from '../data/process';

export function HowItWorks() {
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 70%', 'end 60%'] });
  const fill = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="process" className="bg-cream py-24 lg:py-36">
      <div className="mx-auto grid max-w-[1600px] gap-16 px-5 md:px-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <Label>07 / How it works</Label>
            <RevealText
              as="h2"
              text={'From first\nconversation\nto home.'}
              accent={['home']}
              className="mt-6 font-display text-[clamp(2.5rem,4.8vw,5rem)] font-light uppercase leading-[0.92] tracking-[-0.025em]" />
            
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-ink/70">
              One team from first visit to lifelong care. No subcontractors, no guesswork — just a clear, calm process.
            </p>
          </div>
        </div>

        <ol ref={listRef} className="relative lg:col-span-7 lg:col-start-6">
          <span className="absolute bottom-0 left-[7px] top-0 w-px bg-ink/15" aria-hidden="true" />
          <motion.span
            className="absolute bottom-0 left-[7px] top-0 w-px origin-top bg-terracotta"
            style={{ scaleY: fill }}
            aria-hidden="true" />
          
          {processSteps.map((step) =>
          <li key={step.index} className="relative pb-16 pl-12 last:pb-0 md:pb-24 md:pl-20">
              <motion.span
              className="absolute left-0 top-3 h-[15px] w-[15px] rounded-full border"
              initial={{ backgroundColor: '#F8F7F2', borderColor: 'rgba(32,35,33,0.3)' }}
              whileInView={{ backgroundColor: '#B9684A', borderColor: '#B9684A' }}
              viewport={{ margin: '0px 0px -45% 0px' }}
              transition={{ duration: 0.2 }}
              aria-hidden="true" />
            
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-terracotta">{step.index}</p>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/45">{step.meta}</p>
              </div>
              <h3 className="mt-3 font-display text-[clamp(2.5rem,5.5vw,5.5rem)] font-light uppercase leading-[0.9] tracking-[-0.03em]">
                {step.title}
              </h3>
              <p className="mt-4 font-display text-xl italic text-ink/85 md:text-2xl">{step.description}</p>
              <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-ink/65">{step.detail}</p>
            </li>
          )}
        </ol>
      </div>
    </section>);

}