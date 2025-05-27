'use client';

import { motion, MotionValue, useTransform } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import styles from '../../app/page.module.css';

interface IconCardProps {
  scale: MotionValue<number>;
  backgroundColor: MotionValue<string>;
  textColor: MotionValue<string>;
  iconCardSize: MotionValue<string>;
  iconLineScale: MotionValue<number>;
  iconLineOpacity: MotionValue<number>;
}

export default function IconCard ({
  scale,
  backgroundColor,
  textColor,
  iconCardSize,
  iconLineScale,
  iconLineOpacity
}: IconCardProps) {
  const contentVisibility = useTransform(
    scale,
    [8.57, 6.5, 6],
    [1, 1, 0]
  );

  return (
    <motion.div
      style={{
        scale,
        backgroundColor,
        color: textColor,
        width: iconCardSize,
        height: iconCardSize,
        willChange: 'transform'
      }}
      className={`${styles.icon} px-2 font-bold flex items-center justify-center`}
    >
      <motion.hr
        className='absolute top-[-1px] left-[-100vw] w-[200vw] h-[1px] bg-blue-500 border-0 m-0 p-0'
        style={{ scaleY: iconLineScale, opacity: iconLineOpacity }}
      />
      <motion.hr
        className='absolute bottom-[-1px] left-[-100vw] w-[200vw] h-[1px] bg-blue-500 border-0 m-0 p-0'
        style={{ scaleY: iconLineScale, opacity: iconLineOpacity }}
      />
      <motion.hr
        className='absolute left-[-1px] top-[-100vh] w-[1px] h-[200vh] bg-blue-500 border-0 m-0 p-0'
        style={{ scaleX: iconLineScale, opacity: iconLineOpacity }}
      />
      <motion.hr
        className='absolute right-[-1px] top-[-100vh] w-[1px] h-[200vh] bg-blue-500 border-0 m-0 p-0'
        style={{ scaleX: iconLineScale, opacity: iconLineOpacity }}
      />
      <motion.div
        className="flex items-center gap-2"
        style={{ opacity: contentVisibility }}
      >
        <motion.span className="text-[8px] leading-[1.2] font-bold tracking-tight">
          At Dropbox, our Brand Guidelines help us infuse everything we make with identity.
        </motion.span>
      </motion.div>
      <motion.div
        style={{ opacity: useTransform(contentVisibility, v => 1 - v) }}
        className="absolute"
      >
        <FiArrowRight className="text-2xl" />
      </motion.div>
    </motion.div>
  );
}
