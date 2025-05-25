'use client';

import { motion, MotionValue } from 'framer-motion';
import Lottie from 'lottie-react';
import styles from '../../app/page.module.css';
import animationData7 from '../../../public/Animation7.json';

interface VoiceToneCardProps {
  scale: MotionValue<number>;
  y: MotionValue<number>;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
}

export default function VoiceToneCard ({
  scale,
  y,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  onClick
}: VoiceToneCardProps) {
  return (
    <motion.div
      style={{
        scale,
        y,
        willChange: 'transform'
      }}
      className={`${styles.voiceTone} bg-[#FAD24B] p-6 text-amber-900 font-medium cursor-pointer hover:bg-black hover:text-white`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {/* <motion.hr className='absolute top-[-1px] left-[-100vw] w-[200vw] h-[1px] bg-blue-500 border-0 m-0 p-0 ' style={{ scaleY: lineThickness }} />
      <motion.hr className='absolute bottom-[-1px] left-[-100vw] w-[200vw] h-[1px] bg-blue-500 border-0 m-0 p-0 ' style={{ scaleY: lineThickness }} />
      <motion.hr className='absolute left-[-1px] top-[-100vh] w-[1px] h-[300vh] bg-blue-500 border-0 m-0 p-0 ' style={{ scaleX: lineThickness }} />
      <motion.hr className='absolute right-[-1px] top-[-100vh] w-[1px] h-[300vh] bg-blue-500 border-0 m-0 p-0 ' style={{ scaleX: lineThickness }} /> */}
      <div className="h-full flex flex-col">
        <h2 className="text-4xl mb-auto font-bold">Voice & Tone</h2>
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