import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { MessageSquare, ArrowRight, Phone } from 'lucide-react';
import { Label } from './Label';
import { RevealText } from './RevealText';
import { ArrowButton } from './ArrowButton';
import { companyInfo } from '../data/company';

export function FinalCta() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const x = useTransform(scrollYProgress, [0, 1], ['12%', '0%']);

  return (
    <section id="cta" ref={ref} className="relative overflow-hidden bg-sand border-t border-ink/10">
      <motion.div
        aria-hidden="true"
        className="absolute -right-[60vw] top-[18%] aspect-square w-[130vw] rounded-full bg-terracotta md:-right-[26vw] md:top-[calc(50%-38vw)] md:w-[76vw]"
        style={reduce ? undefined : { scale, x }}
      />
      
      <div className="relative z-10 mx-auto flex min-h-[90svh] max-w-[1600px] flex-col px-5 pb-8 pt-24 md:px-10 md:pt-32">
        <Label>Get Started Today</Label>
        
        <RevealText
          as="h2"
          text={'Experience Smart Living.\nAffordable.\nEffortless.'}
          accent={['Affordable.']}
          accentClassName="italic"
          stagger={0.06}
          className="mt-8 font-display text-[clamp(2.75rem,8vw,8.5rem)] font-light uppercase leading-[0.88] tracking-[-0.035em] text-ink"
        />
        
        <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
          <a
            href="https://wa.me/919000006000?text=Hi%20AIIVA%20Automation%2C%20I%20would%20like%20to%20start%20my%20smart%20home%20automation%20journey."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-ink px-8 py-4 text-[13px] font-bold uppercase tracking-[0.18em] text-cream shadow-xl transition-all hover:bg-burgundy hover:scale-105"
          >
            <MessageSquare className="h-4 w-4 text-[#25D366]" />
            <span>Connect on WhatsApp (+91 90000 06000)</span>
          </a>

          <p className="max-w-[280px] text-[14px] leading-snug text-ink/80">
            Free consultation & demo at our Basheer Bagh studio or at your doorstep in Hyderabad.
          </p>
        </div>

        <div className="mt-auto pt-20 flex flex-col md:flex-row items-baseline justify-between border-t border-ink/15">
          <p
            aria-hidden="true"
            className="whitespace-nowrap font-display text-[7vw] font-light uppercase leading-[0.8] tracking-[-0.04em] text-ink"
          >
            AIIVA AUTOMATION
          </p>
          <span className="text-[12px] font-bold uppercase tracking-[0.24em] text-terracotta mt-2 md:mt-0">
            {companyInfo.tagline}
          </span>
        </div>
      </div>
    </section>
  );
}