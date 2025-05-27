'use client';

import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import styles from '../../app/page.module.css';
import animationData5 from '../../../public/Animation5.json';
import { CardProps } from '../../types/cardProps';

export default function FrameworkCard ({
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
      className={`${styles.framework} bg-[#283351] p-6 text-[#B2C0C6] font-normal rounded-tl-[8px] cursor-pointer hover:bg-black hover:text-white`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <motion.div className='absolute right-[-1px] top-[-100vh] w-[1px] h-[200vh] bg-blue-500 border-0 m-0 p-0 ' style={{ scaleX: lineThickness, opacity: lineOpacity }} />
      <div className="h-full flex flex-col">
        <h2 className="text-4xl mb-auto font-bold">Framework</h2>
        <div className="flex-1 flex items-center justify-center">
          <motion.div
            animate={{
              scale: isHovered ? 3 : 2,
            }}
            transition={{ duration: 0.3 }}
          >
            <Lottie
              animationData={animationData5}
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