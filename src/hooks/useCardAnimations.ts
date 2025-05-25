import { useScroll, useTransform } from 'framer-motion';
import { SCROLL_RANGES, TRANSFORM_VALUES } from '../constants/animations';

export function useCardAnimations () {
  const { scrollYProgress } = useScroll();

  // Transform values for icon scaling and background changes
  const iconScaleBase = useTransform(scrollYProgress, SCROLL_RANGES.ICON_SCALE, TRANSFORM_VALUES.ICON_SCALE);

  // Color and background changes happen when scaling animation starts
  const backgroundColor = useTransform(
    scrollYProgress,
    SCROLL_RANGES.ICON_SCALE,
    ['transparent', '#4000FF']
  );

  const textColor = useTransform(
    scrollYProgress,
    SCROLL_RANGES.ICON_SCALE,
    ['#4000FF', 'white']
  );

  const iconCardSize = useTransform(
    scrollYProgress,
    SCROLL_RANGES.ICON_SCALE,
    ['100%', '100%']
  );

  // Color and Logo animations
  const colorAndLogoScale = useTransform(scrollYProgress, SCROLL_RANGES.COLOR_LOGO, TRANSFORM_VALUES.COLOR_LOGO_SCALE);
  const colorX = useTransform(scrollYProgress, SCROLL_RANGES.COLOR_LOGO_X, TRANSFORM_VALUES.MOVEMENT_DISTANCE);
  const logoX = useTransform(scrollYProgress, SCROLL_RANGES.COLOR_LOGO_X, TRANSFORM_VALUES.MOVEMENT_DISTANCE_POSITIVE);

  // Voice Tone and Imagery animations
  const voiceToneAndImageryScale = useTransform(scrollYProgress, SCROLL_RANGES.VOICE_IMAGERY, TRANSFORM_VALUES.VOICE_IMAGERY_SCALE);
  const voiceToneY = useTransform(scrollYProgress, SCROLL_RANGES.VOICE_IMAGERY, TRANSFORM_VALUES.VOICE_TONE_Y);
  const imageryY = useTransform(scrollYProgress, SCROLL_RANGES.VOICE_IMAGERY, TRANSFORM_VALUES.IMAGERY_Y);

  // Corner cards animations
  const cornerCardScale = useTransform(scrollYProgress, SCROLL_RANGES.CORNER_CARDS, TRANSFORM_VALUES.CORNER_CARD_SCALE);
  const frameworkX = useTransform(scrollYProgress, SCROLL_RANGES.CORNER_CARDS, TRANSFORM_VALUES.MOVEMENT_DISTANCE);
  const frameworkY = useTransform(scrollYProgress, SCROLL_RANGES.CORNER_CARDS, TRANSFORM_VALUES.CORNER_Y_UP);
  const graphyX = useTransform(scrollYProgress, SCROLL_RANGES.CORNER_CARDS, TRANSFORM_VALUES.MOVEMENT_DISTANCE);
  const graphyY = useTransform(scrollYProgress, SCROLL_RANGES.CORNER_CARDS, TRANSFORM_VALUES.CORNER_Y_DOWN);
  const typoX = useTransform(scrollYProgress, SCROLL_RANGES.CORNER_CARDS, TRANSFORM_VALUES.MOVEMENT_DISTANCE_POSITIVE);
  const typoY = useTransform(scrollYProgress, SCROLL_RANGES.CORNER_CARDS, TRANSFORM_VALUES.CORNER_Y_UP);
  const motionX = useTransform(scrollYProgress, SCROLL_RANGES.CORNER_CARDS, TRANSFORM_VALUES.MOVEMENT_DISTANCE_POSITIVE);
  const motionY = useTransform(scrollYProgress, SCROLL_RANGES.CORNER_CARDS, TRANSFORM_VALUES.CORNER_Y_DOWN);

  // Inverse scales to keep lines thin
  const iconLineScale = useTransform(scrollYProgress, SCROLL_RANGES.ICON_LINE_SCALE, TRANSFORM_VALUES.ICON_LINE_SCALE_VALUES);

  return {
    // Icon card
    iconScaleBase,
    backgroundColor,
    textColor,
    iconCardSize,
    iconLineScale,

    // Color and Logo cards
    colorAndLogoScale,
    colorX,
    logoX,

    // Voice Tone and Imagery cards
    voiceToneAndImageryScale,
    voiceToneY,
    imageryY,

    // Corner cards
    cornerCardScale,
    frameworkX,
    frameworkY,
    graphyX,
    graphyY,
    typoX,
    typoY,
    motionX,
    motionY,
  };
} 