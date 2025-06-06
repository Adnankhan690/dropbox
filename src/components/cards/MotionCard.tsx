'use client';

import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import styles from '../../app/page.module.css';
import animationData from '../../../public/animate1.json';
import { CardProps } from '../../types/cardProps';

export default function MotionCard ({
  scale,
  x,
  y,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  onClick,
  lineThickness = 0.3,
  lineOpacity
}: CardProps) {
  return (
    <motion.div
      style={{
        scale,
        x,
        y,
        willChange: 'transform'
      }}
      className={`${styles.motion} bg-[#C8AFF0] text-[#74005F] p-6 font-normal cursor-pointer rounded-br-[8px] hover:bg-black hover:text-white`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <motion.hr className='absolute left-[-1px] top-[-100vh] w-[1px] h-[200vh] bg-blue-500 border-0 m-0 p-0 z-[-100]' style={{ scaleX: lineThickness, opacity: lineOpacity }} />
      <div className="h-full flex flex-col">
        <h2 className="text-4xl font-bold mb-4">Motion</h2>
        <div className="flex-1 flex items-center justify-center">
          <motion.div
            animate={{
              scale: isHovered ? 4 : 3,
            }}
            transition={{ duration: 0.3 }}
          >
            <Lottie
              animationData={animationData}
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