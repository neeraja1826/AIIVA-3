import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { EASE } from '../utils/motion';

interface RevealImageProps {
  src: string;
  alt: string;
  className?: string;
  parallax?: boolean;
  zoomOnHover?: boolean;
  eager?: boolean;
}

export function RevealImage({
  src,
  alt,
  className = '',
  parallax = false,
  zoomOnHover = false,
  eager = false
}: RevealImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden bg-sand ${className}`}
      initial={reduce ? false : { clipPath: 'inset(100% 0% 0% 0%)' }}
      whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.3, ease: EASE }}>
      
      <motion.div className="absolute inset-0" style={parallax && !reduce ? { y, scale: 1.14 } : undefined}>
        <div
          className={`h-full w-full ${
          zoomOnHover ? 'transition-transform duration-300 ease-editorial group-hover:scale-[1.04]' : ''}`
          }>
          
          <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} className="h-full w-full object-cover" />
        </div>
      </motion.div>
    </motion.div>);

}