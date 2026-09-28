import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Building2, Layers, SunMedium, Shield, Wrench, CheckCircle2, ArrowRight } from 'lucide-react';
import { Label } from './Label';
import { RevealText } from './RevealText';
import { mainServices } from '../data/services';
import { EASE } from '../utils/motion';

const iconMap: Record<string, React.ReactNode> = {
  Home: <Home className="h-5 w-5" />,
  Building2: <Building2 className="h-5 w-5" />,
  Layers: <Layers className="h-5 w-5" />,
  SunMedium: <SunMedium className="h-5 w-5" />,
  Shield: <Shield className="h-5 w-5" />,
  Wrench: <Wrench className="h-5 w-5" />
};

export function ServicesSection() {
  const [selectedId, setSelectedId] = useState(mainServices[0].id);
  const activeService = mainServices.find(s => s.id === selectedId) || mainServices[0];

  return (
    <section id="services" className="relative bg-cream py-24 lg:py-36">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Label>02 / Services & Solutions</Label>
            <RevealText
              as="h2"
              text={'Smart Solutions,\nTailored For You.'}
              accent={['Tailored']}
              accentClassName="italic text-terracotta"
              className="mt-6 font-display text-[clamp(2.5rem,5.5vw,6rem)] font-light uppercase leading-[0.9] tracking-[-0.025em]"
            />
          </div>
          <p className="text-[15px] leading-relaxed text-ink/70 lg:col-span-4">
            Whether for your personal residence, luxury penthouse, gated villa, or corporate office, AIIVA brings end-to-end automation tailored to your unique lifestyle.
          </p>
        </div>

        {/* Interactive Service Tab Bar */}
        <div className="mt-12 flex flex-wrap gap-2 border-b border-ink/10 pb-4">
          {mainServices.map((service) => {
            const isSelected = service.id === selectedId;
            return (
              <button
                key={service.id}
                type="button"
                onClick={() => setSelectedId(service.id)}
                className={`flex items-center gap-2.5 rounded-full px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] transition-all duration-200 ${
                  isSelected
                    ? 'bg-ink text-cream shadow-md'
                    : 'bg-sand/60 text-ink/70 hover:bg-sand hover:text-ink'
                }`}
              >
                <span className={isSelected ? 'text-terracotta' : 'text-ink/50'}>
                  {iconMap[service.iconName]}
                </span>
                {service.title}
              </button>
            );
          })}
        </div>

        {/* Selected Service Detailed View */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-ink/10 bg-sand/30 p-6 md:p-10 lg:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25, ease: EASE }}
              className="grid gap-10 lg:grid-cols-12 lg:items-center"
            >
              <div className="lg:col-span-7">
                <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-terracotta">
                  {activeService.category}
                </span>
                <h3 className="mt-2 font-display text-3xl font-light uppercase tracking-[-0.02em] md:text-5xl text-ink">
                  {activeService.title}
                </h3>
                <p className="mt-5 text-[16px] leading-relaxed text-ink/80 font-normal">
                  {activeService.fullDesc}
                </p>

                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div className="rounded-2xl bg-cream p-5 border border-ink/10">
                    <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/50">Key Benefits</h4>
                    <ul className="mt-3 space-y-2">
                      {activeService.benefits.map((b, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-[13px] text-ink/75">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-terracotta mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl bg-cream p-5 border border-ink/10">
                    <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/50">Features Included</h4>
                    <ul className="mt-3 space-y-2">
                      {activeService.features.map((f, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-[13px] text-ink/75">
                          <span className="h-1.5 w-1.5 rounded-full bg-terracotta shrink-0 mt-1.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href={`https://wa.me/919000006000?text=Hi%20AIIVA%20Automation%2C%20I%20am%20interested%20in%20${encodeURIComponent(activeService.title)}%20solutions.`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-terracotta px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-cream shadow-md transition-colors hover:bg-burgundy"
                  >
                    Inquire About {activeService.title}
                    <ArrowRight className="h-4 w-4" />
                  </a>

                  <div className="flex items-center gap-2 text-[12px] text-ink/60">
                    <span className="font-semibold uppercase tracking-[0.1em]">Best for:</span>
                    <span>{activeService.applicableFor.join(', ')}</span>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-ink/10 lg:col-span-5 aspect-[4/3] shadow-lg">
                <img
                  src={activeService.image}
                  alt={activeService.title}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-cream">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cream/80">AIIVA Implementation</p>
                  <p className="font-display text-lg font-light italic text-cream">{activeService.shortDesc}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
