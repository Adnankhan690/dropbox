import { MotionValue } from 'framer-motion';

export interface CardProps {
  scale: MotionValue<number>;
  x?: MotionValue<number>;
  y?: MotionValue<number>;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
  lineThickness?: number;
  lineOpacity?: MotionValue<number>;
}

export interface IconCardProps {
  scale: MotionValue<number>;
  backgroundColor: MotionValue<string>;
  textColor: MotionValue<string>;
  iconCardSize: MotionValue<string>;
  iconLineScale: MotionValue<number>;
  iconLineOpacity: MotionValue<number>;
} 