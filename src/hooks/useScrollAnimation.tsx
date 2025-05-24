'use client';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';

export function useScrollAnimation (ref: React.RefObject<HTMLElement>, threshold = 0.1) {
  const controls = useAnimation();
  const inView = useInView(ref, {
    once: true,
    threshold
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return { controls, inView };
} 