import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { EASE } from '../utils/motion';

type TextTag = 'h1' | 'h2' | 'h3' | 'p' | 'div';

interface RevealTextProps {
  text: string;
  as?: TextTag;
  className?: string;
  accent?: string[];
  accentClassName?: string;
  delay?: number;
  stagger?: number;
  immediate?: boolean;
}

export function RevealText({
  text,
  as: Tag = 'h2',
  className = '',
  accent = [],
  accentClassName = 'italic text-terracotta',
  delay = 0,
  stagger = 0.04,
  immediate = false
}: RevealTextProps) {
  const reduce = useReducedMotion();
  const lines = text.split('\n');
  let wordIndex = 0;

  const trigger = immediate ?
  { animate: 'show' } :
  { whileInView: 'show', viewport: { once: true, margin: '0px 0px -10% 0px' } };

  return (
    <Tag className={className} aria-label={text.replace(/\n/g, ' ')}>
      <motion.span className="block" initial="hidden" {...trigger} aria-hidden="true">
        {lines.map((line, li) =>
        <span key={li} className="block">
            {line.split(' ').map((word, wi, arr) => {
            const i = wordIndex++;
            const clean = word.replace(/[.,…’']/g, '').toLowerCase();
            const isAccent = accent.map((a) => a.toLowerCase()).includes(clean);
            return (
              <React.Fragment key={wi}>
                  <span className="-mb-[0.12em] inline-block overflow-hidden pb-[0.12em] pr-[0.04em] align-top">
                    <motion.span
                    className={`inline-block ${isAccent ? accentClassName : ''}`}
                    variants={{
                      hidden: { y: reduce ? 0 : '110%', opacity: reduce ? 0 : 1 },
                      show: {
                        y: 0,
                        opacity: 1,
                        transition: { duration: 0.3, ease: EASE, delay: delay + i * stagger }
                      }
                    }}>
                    
                      {word}
                    </motion.span>
                  </span>
                  {wi < arr.length - 1 && ' '}
                </React.Fragment>);

          })}
          </span>
        )}
      </motion.span>
    </Tag>);

}