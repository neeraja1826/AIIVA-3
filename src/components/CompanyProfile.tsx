import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, ShieldCheck, Sparkles, UserCheck } from 'lucide-react';
import { Label } from './Label';
import { RevealText } from './RevealText';
import { companyInfo } from '../data/company';
import { EASE } from '../utils/motion';

export function CompanyProfile() {
  return (
    <section id="company" className="relative bg-sand/30 py-24 lg:py-36 border-t border-ink/10">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        
        {/* Section Header */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-6">
            <Label>01 / Company Profile</Label>
            <RevealText
              as="h2"
              text={'Smart Living.\nSimple Automation.\nAffordable Tech.'}
              accent={['Affordable']}
              accentClassName="italic text-terracotta"
              className="mt-6 font-display text-[clamp(2.5rem,5.2vw,5.5rem)] font-light uppercase leading-[0.92] tracking-[-0.025em]"
            />
            
            <div className="mt-8 flex items-center gap-3">
              <span className="inline-block h-2 w-2 rounded-full bg-terracotta" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-terracotta">
                {companyInfo.legalName}
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 lg:pt-8">
            <p className="text-[17px] leading-relaxed text-ink/80 font-normal">
              {companyInfo.detailedProfile}
            </p>

            <div className="mt-8 rounded-2xl bg-cream p-6 border border-ink/10 shadow-sm">
              <h3 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-ink/50">Our Core Promise</h3>
              <p className="mt-3 font-display text-2xl font-light italic text-ink">
                “Making smart, reliable, and luxury automation accessible to every home and business in Hyderabad and beyond.”
              </p>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:mt-24">
          <div className="rounded-2xl border border-ink/10 bg-cream p-6 transition-all duration-300 hover:shadow-md hover:border-terracotta/30">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-sand text-terracotta">
              <Award className="h-6 w-6" />
            </div>
            <h4 className="mt-5 font-display text-xl font-medium">Quality Products</h4>
            <p className="mt-2 text-[14px] leading-relaxed text-ink/70">
              Rigidly tested high-durability components, scratch-proof tempered glass touch panels, and surge-protected relays.
            </p>
          </div>

          <div className="rounded-2xl border border-ink/10 bg-cream p-6 transition-all duration-300 hover:shadow-md hover:border-terracotta/30">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-sand text-terracotta">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h4 className="mt-5 font-display text-xl font-medium">Professional Team</h4>
            <p className="mt-2 text-[14px] leading-relaxed text-ink/70">
              In-house certified automation engineers handling flawless installation, clean wiring, and full system commissioning.
            </p>
          </div>

          <div className="rounded-2xl border border-ink/10 bg-cream p-6 transition-all duration-300 hover:shadow-md hover:border-terracotta/30">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-sand text-terracotta">
              <Sparkles className="h-6 w-6" />
            </div>
            <h4 className="mt-5 font-display text-xl font-medium">Seamless Integration</h4>
            <p className="mt-2 text-[14px] leading-relaxed text-ink/70">
              Flawless interoperability across voice assistants (Alexa/Google), touch glass switchboards, sensors, and mobile apps.
            </p>
          </div>

          <div className="rounded-2xl border border-ink/10 bg-cream p-6 transition-all duration-300 hover:shadow-md hover:border-terracotta/30">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-sand text-terracotta">
              <UserCheck className="h-6 w-6" />
            </div>
            <h4 className="mt-5 font-display text-xl font-medium">Value-for-Money</h4>
            <p className="mt-2 text-[14px] leading-relaxed text-ink/70">
              Affordable luxury without inflated brand markups. Transparent modular pricing for every budget and room size.
            </p>
          </div>
        </div>

        {/* Company Offerings Checklist */}
        <div className="mt-16 rounded-3xl bg-ink p-8 text-cream md:p-12 lg:mt-24">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-terracotta">Comprehensive Scope</span>
              <h3 className="mt-3 font-display text-3xl font-light uppercase tracking-[-0.02em] md:text-4xl text-cream">
                What We Specialize In
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-cream/70">
                From luxury new construction architectural designs to zero-damage 1-day retrofits for existing homes.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
              {companyInfo.offerings.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 rounded-xl bg-cream/5 p-4 border border-cream/10">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-terracotta mt-0.5" />
                  <span className="text-[14px] font-medium text-cream/90">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Directors & Leadership Spotlight */}
        <div id="leadership" className="mt-20 lg:mt-28">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-ink/10 pb-6">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/50">Leadership</span>
              <h3 className="mt-2 font-display text-3xl font-light uppercase tracking-[-0.02em] md:text-4xl">
                Board of Directors
              </h3>
            </div>
            <p className="text-[14px] text-ink/60 max-w-md">
              Led by visionary directors dedicated to making Hyderabad and Pan-India smart living simpler and accessible.
            </p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {companyInfo.directors.map((director, i) => (
              <motion.div
                key={director.name}
                className="relative overflow-hidden rounded-3xl border border-ink/10 bg-cream p-8 md:p-10 shadow-sm"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, ease: EASE, delay: i * 0.1 }}
              >
                <div className="flex items-center justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-terracotta text-cream font-display text-lg">
                    {director.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                  </div>
                  <span className="rounded-full bg-sand px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/70">
                    {director.designation}
                  </span>
                </div>

                <h4 className="mt-6 font-display text-2xl font-light uppercase tracking-[-0.01em] md:text-3xl text-ink">
                  {director.name}
                </h4>
                <p className="mt-1 text-[12px] font-semibold uppercase tracking-[0.18em] text-terracotta">
                  {director.role}
                </p>
                <p className="mt-4 text-[15px] leading-relaxed text-ink/70 font-normal">
                  {director.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
