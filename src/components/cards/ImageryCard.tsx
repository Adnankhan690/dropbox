'use client';

import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import styles from '../../app/page.module.css';
import animationData6 from '../../../public/Animation6.json';
import { CardProps } from '../../types/cardProps';

export default function ImageryCard ({
  scale,
  y,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: CardProps) {
  return (
    <motion.div
      style={{
        scale,
        y,
        willChange: 'transform'
      }}
      className={`${styles.imagery} bg-[#8A2F55] p-6 text-[#FFA8A0] font-normal cursor-pointer hover:bg-black hover:text-white`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <div className="h-full flex flex-col">
        <h2 className="text-4xl font-bold mb-auto">Imagery</h2>
        <div className="flex-1 flex items-center justify-center">
          <motion.div
            animate={{
              scale: isHovered ? 1.2 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            <Lottie
              animationData={animationData6}
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