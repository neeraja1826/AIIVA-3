import React from 'react';
import type { AudienceMarkType } from '../types/content';

interface AudienceMarkProps {
  type: AudienceMarkType;
  className?: string;
}

export function AudienceMark({ type, className = '' }: AudienceMarkProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      {type === 'house' &&
      <>
          <path d="M6 18 L20 7 L34 18" />
          <path d="M10 15 V33 H30 V15" />
          <circle cx={20} cy={24} r={2.5} fill="currentColor" stroke="none" />
        </>
      }
      {type === 'estate' &&
      <>
          <path d="M4 33 H36" />
          <path d="M7 33 V17 H22 V33" />
          <path d="M22 33 V10 H33 V33" />
          <circle cx={27.5} cy={17} r={2.5} fill="currentColor" stroke="none" />
        </>
      }
      {type === 'apartment' &&
      <>
          <rect x={11} y={5} width={18} height={28} />
          <path d="M11 14 H29 M11 23 H29" />
          <circle cx={20} cy={18.5} r={2.5} fill="currentColor" stroke="none" />
        </>
      }
      {type === 'villa' &&
      <>
          <path d="M5 20 H35" />
          <path d="M8 20 V11 H26 V20" />
          <path d="M5 28 Q10 25 15 28 T25 28 T35 28" />
          <circle cx={17} cy={15.5} r={2.5} fill="currentColor" stroke="none" />
        </>
      }
      {type === 'renovation' &&
      <>
          <path d="M6 18 L20 7 L34 18" strokeDasharray="3 3" />
          <path d="M10 15 V33 H30 V15" />
          <circle cx={20} cy={24} r={2.5} fill="currentColor" stroke="none" />
        </>
      }
    </svg>);

}