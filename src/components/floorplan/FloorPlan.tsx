import React, { useState } from 'react';
import { Label } from '../Label';
import { RevealText } from '../RevealText';
import { PlanDrawing } from './PlanDrawing';
import { RoomInfoPanel } from './RoomInfoPanel';
import { rooms } from '../../data/rooms';

export function FloorPlan() {
  const [activeId, setActiveId] = useState('living');
  const activeIndex = Math.max(0, rooms.findIndex((r) => r.id === activeId));
  const active = rooms[activeIndex];

  return (
    <section id="system" className="relative bg-sand py-24 lg:py-36">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Label>02 / The home as a system</Label>
            <RevealText
              as="h2"
              text={'Every room.\nOne quiet system.'}
              accent={['quiet']}
              className="mt-6 font-display text-[clamp(2.75rem,6vw,6.5rem)] font-light uppercase leading-[0.9] tracking-[-0.025em]" />
            
          </div>
          <p className="text-[15px] leading-relaxed text-ink/70 lg:col-span-3 lg:col-start-10">
            Hover a room to see what AIIVA takes care of there. Each marker is a connected device — together, they behave like one home.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-10">
          <div className="border border-ink/10 bg-cream p-3 sm:p-6 lg:p-8">
            <PlanDrawing rooms={rooms} activeId={activeId} onActaiivate={setActiveId} />
            <div className="mt-4 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.22em] text-ink/45 sm:text-[11px]">
              <span>The Garden House · Ground floor</span>
              <span>184 m²</span>
            </div>
          </div>
          <RoomInfoPanel room={active} index={activeIndex} total={rooms.length} />
        </div>

        <div className="no-scrollbar -mx-5 mt-6 flex gap-2 overflow-x-auto px-5 lg:hidden" role="group" aria-label="Choose a room">
          {rooms.map((room) =>
          <button
            key={room.id}
            type="button"
            onClick={() => setActiveId(room.id)}
            aria-pressed={room.id === activeId}
            className={`shrink-0 rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors duration-200 ${
            room.id === activeId ? 'border-ink bg-ink text-cream' : 'border-ink/20 text-ink/70'}`
            }>
            
              {room.name}
            </button>
          )}
        </div>
      </div>
    </section>);

}