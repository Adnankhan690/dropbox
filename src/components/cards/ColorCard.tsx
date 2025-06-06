'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Lottie from 'lottie-react';
import styles from '../../app/page.module.css';
import animationData2 from '../../../public/Animation2.json';
import { CardProps } from '../../types/cardProps';

export default function ColorCard ({
  scale,
  x,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  onClick,
  lineThickness = 0.3,
}: CardProps) {
  const { scrollYProgress } = useScroll();
  const lineOpacity = useTransform(scrollYProgress, [0, 0.9, 1], [0, 1, 0]);
  return (
    <motion.div
      style={{
        scale,
        x,
        willChange: 'transform'
      }}
      className={`${styles.dropColor} bg-[#F08A2E] text-[#762800] p-6 font-normal cursor-pointer hover:bg-black hover:text-white`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <motion.hr className='absolute top-[-1px] left-[-100vw] w-[200vw] h-[1px] bg-blue-500 border-0 m-0 p-0 ' style={{ scaleY: lineThickness, opacity: lineOpacity }} />
      <motion.hr className='absolute bottom-[-1px] left-[-100vw] w-[200vw] h-[1px] bg-blue-500 border-0 m-0 p-0 ' style={{ scaleY: lineThickness, opacity: lineOpacity }} />
      <motion.hr className='absolute left-[-1px] top-[-100vh] w-[1px] h-[200vh] bg-blue-500 border-0 m-0 p-0 ' style={{ scaleX: lineThickness, opacity: lineOpacity }} />
      <motion.hr className='absolute right-[-1px] top-[-100vh] w-[1px] h-[200vh] bg-blue-500 border-0 m-0 p-0 ' style={{ scaleX: lineThickness, opacity: lineOpacity }} />
      <div className="h-full flex flex-col">
        <h2 className="text-4xl font-bold mb-auto">Color</h2>
        <div className="flex-1 flex items-center justify-center">
          <motion.div
            animate={{
              scale: isHovered ? 4 : 3,
            }}
            transition={{ duration: 0.3 }}
          >
            <Lottie
              animationData={animationData2}
              loop={isHovered}
              autoplay={isHovered}
              style={{ width: '100px', height: '100px' }}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
} 