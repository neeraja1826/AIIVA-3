import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';
import type { DayMoment } from '../../types/content';

interface JourneyBackdropProps {
  moment: DayMoment;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

export function JourneyBackdrop({ moment, index, total, progress }: JourneyBackdropProps) {
  const step = 1 / (total - 1);
  const center = index * step;
  const opacity = useTransform(
    progress,
    [center - step * 0.6, center - step * 0.2, center + step * 0.2, center + step * 0.6],
    [0, 1, 1, 0]
  );
  const scale = useTransform(progress, [center - step, center + step], [1.12, 1]);

  return (
    <motion.div className="absolute inset-0" style={{ opacity }} aria-hidden="true">
      <motion.img src={moment.image} alt="" className="h-full w-full object-cover" style={{ scale }} />
      <div className="absolute inset-0" style={{ backgroundColor: moment.tint }} />
      <div className="absolute inset-0 bg-ink/20" />
    </motion.div>);

}