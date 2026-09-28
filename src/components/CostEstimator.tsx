import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Check, MessageSquare, Sparkles, Building, Home, Shield, SunMedium, Wind, Sliders } from 'lucide-react';
import { Label } from './Label';
import { RevealText } from './RevealText';
import { companyInfo } from '../data/company';

interface PropertyType {
  id: string;
  name: string;
  baseRooms: number;
  multiplier: number;
  tag: string;
}

const propertyTypes: PropertyType[] = [
  { id: '2bhk', name: '2 BHK Apartment', baseRooms: 4, multiplier: 1.0, tag: 'Standard Flat' },
  { id: '3bhk', name: '3 BHK Apartment', baseRooms: 5, multiplier: 1.4, tag: 'Most Popular' },
  { id: '4bhk', name: '4 BHK / Duplex', baseRooms: 7, multiplier: 1.85, tag: 'Luxury Flat' },
  { id: 'villa', name: 'Independent Villa', baseRooms: 10, multiplier: 2.6, tag: 'Large Estate' },
  { id: 'office', name: 'Commercial Office', baseRooms: 6, multiplier: 1.6, tag: 'Corporate' }
];

interface ModuleOption {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  icon: React.ReactNode;
}

const moduleOptions: ModuleOption[] = [
  {
    id: 'switches',
    name: 'AIIVA Tempered Glass Touch Switchboards',
    description: 'Capacitive touch panels with fan regulators & sockets across all rooms',
    basePrice: 28000,
    icon: <Sliders className="h-5 w-5" />
  },
  {
    id: 'curtains',
    name: 'Motorized Curtain & Blind Automation',
    description: 'Whisper-quiet automated tracks for living & master bedroom drapery',
    basePrice: 22000,
    icon: <SunMedium className="h-5 w-5" />
  },
  {
    id: 'climate',
    name: 'Smart Climate & AC Energy Automation',
    description: 'Multi-zone smartphone & voice AC controls with automated cutoff',
    basePrice: 14000,
    icon: <Wind className="h-5 w-5" />
  },
  {
    id: 'lock',
    name: 'AIIVA Pro 5-in-1 Biometric Smart Door Lock',
    description: 'Fingerprint, passcode, RFID card, physical key & mobile app access',
    basePrice: 16500,
    icon: <Shield className="h-5 w-5" />
  },
  {
    id: 'hub',
    name: 'AIIVA Core IoT Multi-Protocol Hub & Voice',
    description: 'Local execution gateway with Alexa & Google Assistant synchronization',
    basePrice: 12000,
    icon: <Sparkles className="h-5 w-5" />
  }
];

export function CostEstimator() {
  const [selectedProperty, setSelectedProperty] = useState<PropertyType>(propertyTypes[1]);
  const [selectedModules, setSelectedModules] = useState<string[]>(['switches', 'curtains', 'lock', 'hub']);

  const toggleModule = (id: string) => {
    setSelectedModules(prev =>
      prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
    );
  };

  const rawTotal = selectedModules.reduce((sum, modId) => {
    const mod = moduleOptions.find(m => m.id === modId);
    return sum + (mod ? mod.basePrice * selectedProperty.multiplier : 0);
  }, 0);

  const roundedEstimate = Math.round(rawTotal / 1000) * 1000;
  const estimatedSavings = Math.round(roundedEstimate * 0.25);

  const whatsappMessage = `Hello AIIVA Automation, I used your website Cost Estimator for my ${selectedProperty.name}.
Modules Selected:
${selectedModules.map(m => `• ${moduleOptions.find(opt => opt.id === m)?.name}`).join('\n')}
Estimated Package: ~₹${roundedEstimate.toLocaleString('en-IN')}

I would like to get a formal quote and schedule a free site survey in Hyderabad.`;

  const whatsappUrl = `https://wa.me/919000006000?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="estimator" className="relative bg-sand/30 py-24 lg:py-36 border-t border-ink/10">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Label>05 / Interactive Solution Builder</Label>
            <RevealText
              as="h2"
              text={'Smart & Affordable.\nCalculate Your\nPackage Estimate.'}
              accent={['Affordable.']}
              accentClassName="italic text-terracotta"
              className="mt-6 font-display text-[clamp(2.5rem,5.5vw,6rem)] font-light uppercase leading-[0.9] tracking-[-0.025em]"
            />
          </div>
          <p className="text-[15px] leading-relaxed text-ink/70 lg:col-span-4">
            Get an instant transparent estimate for your home or office. AIIVA offers modular packages designed to fit your exact budget with zero hidden fees.
          </p>
        </div>

        {/* Interactive Estimator Layout */}
        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          
          {/* Left Column: Property & Module Selection */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Select Property Type */}
            <div className="rounded-3xl border border-ink/10 bg-cream p-6 md:p-8 shadow-sm">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-terracotta">Step 1</span>
              <h3 className="mt-1 font-display text-2xl font-light uppercase tracking-[-0.01em]">
                Select Property Type
              </h3>

              <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {propertyTypes.map((prop) => {
                  const isSel = prop.id === selectedProperty.id;
                  return (
                    <button
                      key={prop.id}
                      type="button"
                      onClick={() => setSelectedProperty(prop)}
                      className={`relative rounded-2xl p-4 text-left border transition-all ${
                        isSel
                          ? 'border-terracotta bg-sand/40 ring-2 ring-terracotta/20'
                          : 'border-ink/10 bg-cream hover:bg-sand/20'
                      }`}
                    >
                      <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-terracotta block">
                        {prop.tag}
                      </span>
                      <p className="mt-1 font-display text-base font-medium text-ink">{prop.name}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Select Automation Modules */}
            <div className="rounded-3xl border border-ink/10 bg-cream p-6 md:p-8 shadow-sm">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-terracotta">Step 2</span>
              <h3 className="mt-1 font-display text-2xl font-light uppercase tracking-[-0.01em]">
                Choose Automation Modules
              </h3>

              <div className="mt-5 space-y-3">
                {moduleOptions.map((mod) => {
                  const isChecked = selectedModules.includes(mod.id);
                  return (
                    <div
                      key={mod.id}
                      onClick={() => toggleModule(mod.id)}
                      className={`flex items-center justify-between gap-4 rounded-2xl p-4 border cursor-pointer transition-all ${
                        isChecked
                          ? 'border-terracotta bg-sand/40'
                          : 'border-ink/10 bg-cream hover:bg-sand/20'
                      }`}
                    >
                      <div className="flex items-start gap-3.5">
                        <div className={`mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl ${
                          isChecked ? 'bg-terracotta text-cream' : 'bg-sand text-ink/60'
                        }`}>
                          {mod.icon}
                        </div>
                        <div>
                          <p className="text-[14px] font-semibold text-ink">{mod.name}</p>
                          <p className="text-[12px] text-ink/65 mt-0.5">{mod.description}</p>
                        </div>
                      </div>

                      <div className={`grid h-6 w-6 shrink-0 place-items-center rounded-full border transition-all ${
                        isChecked ? 'border-terracotta bg-terracotta text-cream' : 'border-ink/30 bg-transparent'
                      }`}>
                        {isChecked && <Check className="h-3.5 w-3.5" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Live Summary & Direct WhatsApp Action */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 rounded-3xl border border-ink/10 bg-ink p-8 text-cream shadow-xl">
              
              <div className="flex items-center justify-between border-b border-cream/15 pb-4">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-terracotta">Live Estimate</span>
                  <h4 className="mt-1 font-display text-2xl font-light text-cream">{selectedProperty.name}</h4>
                </div>
                <div className="rounded-full bg-cream/10 px-3 py-1 text-[11px] font-semibold text-cream/80">
                  {selectedModules.length} Modules
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="mt-6">
                <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-cream/50">Approximate Package Investment</p>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="font-display text-4xl md:text-5xl font-light text-cream tracking-tight">
                    ₹{roundedEstimate.toLocaleString('en-IN')}
                  </span>
                  <span className="text-[13px] text-cream/60">approx. (+GST)</span>
                </div>
                <p className="mt-2 text-[12px] text-cream/70">
                  Includes hardware, in-house Hyderabad installation, configuration & 1-year on-site warranty.
                </p>
              </div>

              {/* Selected List */}
              <div className="mt-6 rounded-2xl bg-cream/5 p-4 border border-cream/10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cream/50 mb-2">Included Hardware:</p>
                <ul className="space-y-1.5 text-[12px] text-cream/85">
                  {selectedModules.map(m => {
                    const opt = moduleOptions.find(o => o.id === m);
                    return (
                      <li key={m} className="flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 text-terracotta" />
                        <span>{opt?.name.split('(')[0]}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Savings callout */}
              <div className="mt-6 flex items-center gap-3 rounded-xl bg-terracotta/20 p-3 border border-terracotta/30">
                <Sparkles className="h-5 w-5 text-terracotta shrink-0" />
                <p className="text-[12px] text-cream/90">
                  Estimated AC & electricity bill savings of up to <strong className="text-cream">₹{estimatedSavings.toLocaleString('en-IN')}/year</strong>.
                </p>
              </div>

              {/* Direct WhatsApp Call to Action */}
              <div className="mt-8 space-y-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-6 py-4 text-[13px] font-bold uppercase tracking-[0.16em] text-white shadow-lg transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <MessageSquare className="h-4 w-4" />
                  Get Formal Quote on WhatsApp
                </a>

                <a
                  href="#contact"
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-cream/20 bg-cream/10 px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-cream transition-colors hover:bg-cream/20"
                >
                  Book Free Site Survey in Hyderabad
                </a>
              </div>

              <div className="mt-4 text-center">
                <span className="text-[11px] text-cream/50">Direct WhatsApp: +91 90000 06000</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
