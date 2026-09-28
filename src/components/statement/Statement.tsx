import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Label } from '../Label';
import { StatementWord } from './StatementWord';
import { images } from '../../data/images';

const FIRST = 'It’s not about controlling your home.';
const SECOND = 'It’s about your home responding to you.';
const ITALIC = ['responding', 'to', 'you.'];

export function Statement() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const imgScale = useTransform(p, [0, 1], [1.2, 1]);
  const imgX = useTransform(p, [0, 1], ['-3%', '3%']);
  const firstOpacity = useTransform(p, [0.25, 0.42], [1, 0]);
  const firstY = useTransform(p, [0.25, 0.42], [0, -70]);
  const words = SECOND.split(' ');
  const span = 0.36 / words.length;

  return (
    <section ref={ref} className="relative h-[300vh] bg-terracotta" aria-label="Our belief">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.img
          src={images.architecture}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-multiply grayscale"
          style={{ scale: imgScale, x: imgX }} />
        
        <div className="relative mx-auto w-full max-w-[1600px] px-5 md:px-10">
          <Label tone="cream">05 / The feeling</Label>
          <div className="mt-10 grid font-display text-[clamp(2.5rem,7.2vw,8rem)] font-light uppercase leading-[0.92] tracking-[-0.025em] text-cream">
            <motion.p className="[grid-area:1/1]" style={{ opacity: firstOpacity, y: firstY }}>
              {FIRST}
            </motion.p>
            <p className="[grid-area:1/1]" aria-label={SECOND}>
              <span aria-hidden="true">
                {words.map((w, i) => {
                  const start = 0.44 + i * span;
                  return (
                    <StatementWord
                      key={i}
                      word={w}
                      progress={p}
                      range={[start, start + 0.08]}
                      italic={ITALIC.includes(w.toLowerCase())} />);


                })}
              </span>
            </p>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-cream/20">
          <motion.div className="h-full origin-left bg-cream/70" style={{ scaleX: p }} />
        </div>
      </div>
    </section>);

}