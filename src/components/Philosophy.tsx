import React from 'react';
import { ArrowDownIcon, Sparkles } from 'lucide-react';
import { Label } from './Label';
import { RevealText } from './RevealText';
import { companyInfo } from '../data/company';

export function Philosophy() {
  return (
    <section id="philosophy" className="relative bg-cream pb-24 pt-24 md:pt-48 lg:pb-32 lg:pt-56">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="flex items-center justify-between">
          <Label>Our Vision / Philosophy</Label>
          <span className="hidden text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/40 md:block">
            Hyderabad-Based Automation Studio
          </span>
        </div>

        <RevealText
          as="h2"
          text="Smart Living. Simple Automation. Affordable Technology."
          accent={['Affordable', 'Simple']}
          accentClassName="italic text-terracotta"
          stagger={0.04}
          className="mt-10 font-display text-[clamp(2.5rem,7.5vw,8.5rem)] font-light uppercase leading-[0.88] tracking-[-0.03em] text-ink md:mt-16"
        />

        <div className="mt-14 grid gap-10 md:mt-20 md:grid-cols-12">
          <div className="md:col-span-5 md:col-start-1">
            <span className="inline-flex items-center gap-2 rounded-full bg-sand px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-terracotta">
              <Sparkles className="h-3.5 w-3.5" />
              Accessible Luxury
            </span>
            <p className="mt-4 font-display text-2xl md:text-3xl font-light italic text-ink/90">
              “AIIVA Automation — Making Smart Living Accessible to Everyone.”
            </p>
          </div>

          <div className="md:col-span-6 md:col-start-7 lg:col-span-5 lg:col-start-8">
            <p className="text-[16px] leading-relaxed text-ink/75 font-normal">
              {companyInfo.shortIntro} We eliminate the high cost and unnecessary complexity of traditional home automation. Our sleek glass touch switchboards, whisper-quiet motorized curtains, and intelligent climate controllers seamlessly integrate into your space — quietly adapting to your daily lifestyle.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-6">
              <a
                href="#company"
                className="group inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink hover:text-terracotta transition-colors"
              >
                About AIIVA Automation
                <ArrowDownIcon className="h-4 w-4 text-terracotta transition-transform duration-200 ease-editorial group-hover:translate-y-0.5" aria-hidden="true" />
              </a>

              <a
                href="#products"
                className="group inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink hover:text-terracotta transition-colors"
              >
                Explore Touch Switchboards
                <ArrowDownIcon className="h-4 w-4 text-terracotta transition-transform duration-200 ease-editorial group-hover:translate-y-0.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}