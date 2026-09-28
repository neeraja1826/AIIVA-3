import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { Room } from '../../types/content';

interface PlanDrawingProps {
  rooms: Room[];
  activeId: string;
  onActaiivate: (id: string) => void;
}

const INK = '#202321';
const CREAM = '#F8F7F2';
const TERRACOTTA = '#B9684A';
const SAGE = '#A8B09B';

export function PlanDrawing({ rooms, activeId, onActaiivate }: PlanDrawingProps) {
  const reduce = useReducedMotion();

  return (
    <svg viewBox="0 0 1000 640" className="h-auto w-full select-none" role="group" aria-label="Interactive floor plan of the house">
      {/* Room hit areas + highlight */}
      {rooms.map((room) => {
        const isActive = room.id === activeId;
        return (
          <g
            key={room.id}
            className="plan-room cursor-pointer outline-none"
            tabIndex={0}
            role="button"
            aria-pressed={isActive}
            aria-label={`${room.name}: ${room.automations.map((a) => a.name).join(', ')}`}
            onMouseEnter={() => onActaiivate(room.id)}
            onFocus={() => onActaiivate(room.id)}
            onClick={() => onActaiivate(room.id)}>
            
            <motion.rect
              className="plan-hit"
              x={room.rect.x}
              y={room.rect.y}
              width={room.rect.w}
              height={room.rect.h}
              fill={TERRACOTTA}
              stroke="none"
              initial={false}
              animate={{ fillOpacity: isActive ? 0.13 : 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }} />
            
          </g>);

      })}

      {/* Furniture & landscape */}
      <g fill="none" stroke={INK} strokeOpacity={0.3} strokeWidth={1.5} pointerEvents="none">
        {/* Bedroom */}
        <rect x={120} y={50} width={160} height={170} rx={4} />
        <rect x={132} y={60} width={64} height={26} rx={6} />
        <rect x={204} y={60} width={64} height={26} rx={6} />
        <line x1={120} y1={120} x2={280} y2={120} />
        <rect x={84} y={52} width={30} height={30} rx={2} />
        <rect x={286} y={52} width={30} height={30} rx={2} />
        {/* Bath */}
        <rect x={412} y={52} width={70} height={150} rx={32} />
        <rect x={520} y={52} width={48} height={34} rx={12} />
        <ellipse cx={548} cy={160} rx={14} ry={20} />
        {/* Entry */}
        <rect x={716} y={110} width={34} height={110} rx={2} />
        <rect x={612} y={130} width={88} height={100} strokeDasharray="4 6" />
        {/* Living */}
        <rect x={100} y={362} width={280} height={190} strokeDasharray="4 6" />
        <rect x={90} y={498} width={230} height={60} rx={10} />
        <line x1={96} y1={544} x2={314} y2={544} />
        <ellipse cx={210} cy={430} rx={62} ry={32} />
        <rect x={340} y={400} width={62} height={62} rx={14} />
        <circle cx={420} cy={560} r={14} />
        {/* Kitchen */}
        <rect x={480} y={556} width={262} height={36} rx={2} />
        <rect x={540} y={420} width={150} height={64} rx={4} />
        {[560, 600, 640, 680].map((cx) =>
        <circle key={cx} cx={cx} cy={504} r={8} />
        )}
        {/* Outdoor */}
        {Array.from({ length: 20 }).map((_, i) =>
        <line key={i} x1={776} y1={56 + i * 27} x2={944} y2={56 + i * 27} strokeOpacity={0.12} />
        )}
        <rect x={800} y={370} width={120} height={190} rx={4} fill={SAGE} fillOpacity={0.35} />
        <circle cx={905} cy={115} r={30} strokeDasharray="3 5" />
        <circle cx={815} cy={260} r={22} strokeDasharray="3 5" />
        <rect x={790} y={300} width={26} height={52} rx={4} />
        <rect x={826} y={300} width={26} height={52} rx={4} />
      </g>

      {/* Walls */}
      <g stroke={INK} fill="none" strokeLinecap="square" pointerEvents="none">
        <rect x={40} y={40} width={720} height={560} strokeWidth={7} />
        <rect x={760} y={40} width={200} height={560} strokeWidth={1.5} strokeOpacity={0.35} strokeDasharray="6 8" />
        {/* Interior walls */}
        <g strokeWidth={3}>
          <line x1={40} y1={300} x2={320} y2={300} />
          <line x1={380} y1={300} x2={470} y2={300} />
          <line x1={520} y1={300} x2={620} y2={300} />
          <line x1={720} y1={300} x2={760} y2={300} />
          <line x1={400} y1={40} x2={400} y2={300} />
          <line x1={580} y1={40} x2={580} y2={300} />
        </g>
        <line x1={460} y1={300} x2={460} y2={600} strokeWidth={1.5} strokeOpacity={0.4} strokeDasharray="6 8" />
        {/* Glazing: terrace + living */}
        <line x1={760} y1={330} x2={760} y2={570} stroke={CREAM} strokeWidth={8} />
        <line x1={757} y1={330} x2={757} y2={570} strokeWidth={1.5} />
        <line x1={763} y1={330} x2={763} y2={570} strokeWidth={1.5} />
        <line x1={80} y1={600} x2={420} y2={600} stroke={CREAM} strokeWidth={8} />
        <line x1={80} y1={597} x2={420} y2={597} strokeWidth={1.5} />
        <line x1={80} y1={603} x2={420} y2={603} strokeWidth={1.5} />
        {/* Front door */}
        <line x1={630} y1={40} x2={690} y2={40} stroke={CREAM} strokeWidth={9} />
        <line x1={630} y1={40} x2={630} y2={100} strokeWidth={2} />
        <path d="M630 100 A60 60 0 0 0 690 40" strokeWidth={1} strokeOpacity={0.45} strokeDasharray="3 4" />
        {/* Interior doors */}
        <line x1={380} y1={300} x2={380} y2={240} strokeWidth={2} />
        <path d="M380 240 A60 60 0 0 0 320 300" strokeWidth={1} strokeOpacity={0.45} strokeDasharray="3 4" />
        <line x1={470} y1={300} x2={470} y2={250} strokeWidth={2} />
        <path d="M470 250 A50 50 0 0 1 520 300" strokeWidth={1} strokeOpacity={0.45} strokeDasharray="3 4" />
      </g>

      {/* Labels + markers */}
      {rooms.map((room) => {
        const isActive = room.id === activeId;
        return (
          <g key={`${room.id}-overlay`} pointerEvents="none">
            <text
              x={room.labelPos.x}
              y={room.labelPos.y}
              fontFamily="Inter Tight, sans-serif"
              fontSize={14}
              fontWeight={600}
              letterSpacing={3}
              fill={isActive ? TERRACOTTA : INK}
              fillOpacity={isActive ? 1 : 0.75}
              style={{ transition: 'fill 200ms ease-out' }}>
              
              {room.name.toUpperCase()}
            </text>
            <motion.text
              x={room.labelPos.x}
              y={room.labelPos.y + 20}
              fontFamily="Inter Tight, sans-serif"
              fontSize={11}
              letterSpacing={1}
              fill={INK}
              initial={false}
              animate={{ opacity: isActive ? 0.6 : 0 }}
              transition={{ duration: 0.2 }}>
              
              {room.automations.length} automations
            </motion.text>
            {room.markers.map((m, i) =>
            <g key={i} transform={`translate(${m.x} ${m.y})`}>
                {isActive && !reduce &&
              <motion.circle
                r={10}
                fill="none"
                stroke={TERRACOTTA}
                strokeWidth={1.5}
                initial={{ scale: 1, opacity: 0.6 }}
                animate={{ scale: 2.4, opacity: 0 }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut', delay: i * 0.3 }} />

              }
                <motion.circle
                fill={TERRACOTTA}
                initial={false}
                animate={{ r: isActive ? 10 : 5 }}
                transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }} />
              
                <motion.circle
                fill={CREAM}
                initial={false}
                animate={{ r: isActive ? 3 : 0 }}
                transition={{ duration: 0.25 }} />
              
              </g>
            )}
          </g>);

      })}
    </svg>);

}