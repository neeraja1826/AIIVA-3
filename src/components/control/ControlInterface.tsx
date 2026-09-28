import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CloudSunIcon } from 'lucide-react';
import { Label } from '../Label';
import { RevealText } from '../RevealText';
import { ControlSidebar } from './ControlSidebar';
import { HomePanel } from './HomePanel';
import { RoomControlPanel } from './RoomControlPanel';
import { SecurityPanel } from './SecurityPanel';
import { ClimatePanel } from './ClimatePanel';
import { LightingPanel } from './LightingPanel';
import { EnergyPanel } from './EnergyPanel';
import { controlNav } from '../../data/control';
import type { ControlView } from '../../types/control';
import { EASE } from '../../utils/motion';

const facts = [
{ title: 'Local first', text: 'Keeps working offline' },
{ title: 'Praiivate', text: 'No cloud recordings' },
{ title: 'Open', text: 'KNX, Matter & more' }];


export function ControlInterface() {
  const [view, setView] = useState<ControlView>('home');
  const title = controlNav.find((n) => n.id === view)?.label ?? 'Home';

  return (
    <section id="control" className="bg-cream py-24 lg:py-36">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Label>06 / AIIVA Control</Label>
            <RevealText
              as="h2"
              text={'The technology,\nbeautifully quiet.'}
              accent={['beautifully']}
              className="mt-6 font-display text-[clamp(2.75rem,6vw,6.5rem)] font-light uppercase leading-[0.9] tracking-[-0.025em]" />
            
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-[15px] leading-relaxed text-ink/70">
              AIIVA Control brings every system into one calm app and a few elegant wall panels. Go ahead — every control below works.
            </p>
            <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-ink/15 pt-4">
              {facts.map((f) =>
              <div key={f.title}>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.18em]">{f.title}</dt>
                  <dd className="mt-1 text-[13px] text-ink/60">{f.text}</dd>
                </div>
              )}
            </dl>
          </div>
        </div>

        <motion.div
          className="mt-14 rounded-[32px] bg-sand p-2 md:p-4 lg:mt-20"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -15% 0px' }}
          transition={{ duration: 0.3, ease: EASE }}>
          
          <div className="overflow-hidden rounded-[24px] border border-ink/10 bg-cream shadow-[0_30px_80px_-40px_rgba(67,45,50,0.35)]">
            <div className="grid min-h-[700px] lg:grid-cols-[232px_minmax(0,1fr)]">
              <ControlSidebar view={view} onChange={setView} />
              <div className="flex min-w-0 flex-col">
                <div className="flex items-center justify-between gap-4 border-b border-ink/10 px-5 py-4 md:px-8">
                  <p className="text-[15px] font-medium">{title}</p>
                  <div className="flex items-center gap-4 text-[13px] text-ink/60">
                    <span className="hidden items-center gap-1.5 sm:flex">
                      <CloudSunIcon className="h-4 w-4" aria-hidden="true" /> 14° Clear
                    </span>
                    <span className="tabular-nums">21:04</span>
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-burgundy text-[12px] font-semibold text-cream">
                      M
                    </span>
                  </div>
                </div>
                <div className="flex-1 p-5 md:p-8">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={view}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2, ease: EASE }}>
                      
                      {view === 'home' && <HomePanel onOpen={setView} />}
                      {view === 'living' && <RoomControlPanel roomId="living" />}
                      {view === 'bedroom' && <RoomControlPanel roomId="bedroom" />}
                      {view === 'security' && <SecurityPanel />}
                      {view === 'climate' && <ClimatePanel />}
                      {view === 'lighting' && <LightingPanel />}
                      {view === 'energy' && <EnergyPanel />}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

}