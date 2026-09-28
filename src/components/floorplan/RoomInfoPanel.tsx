import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { Room } from '../../types/content';
import { EASE, pad } from '../../utils/motion';

interface RoomInfoPanelProps {
  room: Room;
  index: number;
  total: number;
}

export function RoomInfoPanel({ room, index, total }: RoomInfoPanelProps) {
  return (
    <aside className="relative min-h-[420px] bg-cream p-6 sm:p-8" aria-live="polite">
      <AnimatePresence mode="wait">
        <motion.div
          key={room.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.22, ease: EASE }}
          className="flex h-full flex-col">
          
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/50">
            Room {pad(index + 1)} / {pad(total)}
          </p>
          <h3 className="mt-4 font-display text-5xl font-light uppercase leading-none tracking-[-0.02em]">{room.name}</h3>
          <p className="mt-4 text-[14px] leading-relaxed text-ink/70">{room.summary}</p>

          <ul className="mt-8 border-t border-ink/10">
            {room.automations.map((a, i) =>
            <motion.li
              key={a.name}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 + i * 0.04, duration: 0.22, ease: EASE }}
              className="flex items-center justify-between gap-4 border-b border-ink/10 py-3">
              
                <span className="text-[12px] font-semibold uppercase tracking-[0.18em]">{a.name}</span>
                <span className="flex items-center gap-2 text-[13px] text-ink/65">
                  <span className="h-1.5 w-1.5 rounded-full bg-sage" aria-hidden="true" />
                  {a.state}
                </span>
              </motion.li>
            )}
          </ul>

          <div className="mt-8 bg-sand/60 p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-terracotta">Scene · {room.scene.name}</p>
            <p className="mt-1 text-[13px] text-ink/70">{room.scene.detail}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </aside>);

}