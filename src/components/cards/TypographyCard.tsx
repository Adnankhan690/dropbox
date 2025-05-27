'use client';

import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import styles from '../../app/page.module.css';
import animationData7 from '../../../public/Animation7.json';
import { CardProps } from '../../types/cardProps';

export default function TypographyCard ({
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
      className={`${styles.typo} bg-[#FF3300] p-6 text-[#570014] font-normal cursor-pointer rounded-tr-[8px] hover:bg-black hover:text-white`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <motion.hr className='absolute left-[-1px] top-[-100vh] w-[1px] h-[200vh] bg-blue-500 border-0 m-0 p-0 ' style={{ scaleX: lineThickness, opacity: lineOpacity }} />
      <div className="h-full flex flex-col">
        <h2 className="text-4xl font-bold mb-auto">Typography</h2>
        <div className="flex-1 flex items-center justify-center">
          <motion.div
            animate={{
              scale: isHovered ? 3 : 2,
            }}
            transition={{ duration: 0.3 }}
          >
            <Lottie
              animationData={animationData7}
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