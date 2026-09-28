import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';

interface StatementWordProps {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
  italic?: boolean;
}

export function StatementWord({ word, progress, range, italic = false }: StatementWordProps) {
  const opacity = useTransform(progress, range, [0, 1]);
  const y = useTransform(progress, range, [28, 0]);

  return (
    <>
      <motion.span className={`inline-block ${italic ? 'italic' : ''}`} style={{ opacity, y }}>
        {word}
      </motion.span>{' '}
    </>);

}