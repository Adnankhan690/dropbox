'use client';

import { motion, MotionValue } from 'framer-motion';
import styles from '../../app/page.module.css';

interface IconCardProps {
  scale: MotionValue<number>;
  backgroundColor: MotionValue<string>;
  textColor: MotionValue<string>;
  iconCardSize: MotionValue<string>;
  iconLineScale: MotionValue<number>;
}

export default function IconCard ({
  scale,
  backgroundColor,
  textColor,
  iconCardSize,
  iconLineScale
}: IconCardProps) {
  return (
    <motion.div
      style={{
        scale,
        backgroundColor,
        color: textColor,
        width: iconCardSize,
        height: iconCardSize,
        willChange: 'transform, background-color, color, width, height, size'
      }}
      className={`${styles.icon} p-5 font-bold`}
    >
      <motion.hr
        className='absolute top-[-1px] left-[-100vw] w-[200vw] h-[1px] bg-blue-500 border-0 m-0 p-0'
        style={{ scaleY: iconLineScale }}
      />
      <motion.hr
        className='absolute bottom-[-1px] left-[-100vw] w-[200vw] h-[1px] bg-blue-500 border-0 m-0 p-0'
        style={{ scaleY: iconLineScale }}
      />
      <motion.hr
        className='absolute left-[-1px] top-[-100vh] w-[1px] h-[200vh] bg-blue-500 border-0 m-0 p-0'
        style={{ scaleX: iconLineScale }}
      />
      <motion.hr
        className='absolute right-[-1px] top-[-100vh] w-[1px] h-[200vh] bg-blue-500 border-0 m-0 p-0'
        style={{ scaleX: iconLineScale }}
      />
      Icon
    </motion.div>
  );
}
