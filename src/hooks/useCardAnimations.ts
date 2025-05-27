import { useScroll, useTransform } from 'framer-motion';
import { SCROLL_RANGES, TRANSFORM_VALUES } from '../constants/animations';

export function useCardAnimations () {
  const { scrollYProgress } = useScroll();

  // Transform values for icon scaling and background changes
  const iconCardScale = useTransform(scrollYProgress, SCROLL_RANGES.ICON_SCALE, TRANSFORM_VALUES.ICON_SCALE);

  // Color and background changes happen when scaling animation starts
  const iconCardBackgroundColor = useTransform(
    scrollYProgress,
    SCROLL_RANGES.ICON_SCALE,
    ['transparent', '#4000FF']
  );

  const iconCardTextColor = useTransform(
    scrollYProgress,
    SCROLL_RANGES.ICON_SCALE,
    ['#4000FF', 'white']
  );

  const iconCardDimensions = useTransform(
    scrollYProgress,
    SCROLL_RANGES.ICON_SCALE,
    ['100%', '100%']
  );

  // Color and Logo animations
  const colorLogoCardsScale = useTransform(scrollYProgress, SCROLL_RANGES.COLOR_LOGO, TRANSFORM_VALUES.COLOR_LOGO_SCALE);
  const colorCardTranslateX = useTransform(scrollYProgress, SCROLL_RANGES.COLOR_LOGO_X, TRANSFORM_VALUES.MOVEMENT_DISTANCE);
  const logoCardTranslateX = useTransform(scrollYProgress, SCROLL_RANGES.COLOR_LOGO_X, TRANSFORM_VALUES.MOVEMENT_DISTANCE_POSITIVE);

  // Voice Tone and Imagery animations
  const voiceImageryCardsScale = useTransform(scrollYProgress, SCROLL_RANGES.VOICE_IMAGERY, TRANSFORM_VALUES.VOICE_IMAGERY_SCALE);
  const voiceToneCardTranslateY = useTransform(scrollYProgress, SCROLL_RANGES.VOICE_IMAGERY, TRANSFORM_VALUES.VOICE_TONE_Y);
  const imageryCardTranslateY = useTransform(scrollYProgress, SCROLL_RANGES.VOICE_IMAGERY, TRANSFORM_VALUES.IMAGERY_Y);

  // Corner cards animations
  const cornerCardsScale = useTransform(scrollYProgress, SCROLL_RANGES.CORNER_CARDS, TRANSFORM_VALUES.CORNER_CARD_SCALE);
  const frameworkCardTranslateX = useTransform(scrollYProgress, SCROLL_RANGES.CORNER_CARDS, TRANSFORM_VALUES.MOVEMENT_DISTANCE);
  const frameworkCardTranslateY = useTransform(scrollYProgress, SCROLL_RANGES.CORNER_CARDS, TRANSFORM_VALUES.CORNER_Y_UP);
  const iconographyCardTranslateX = useTransform(scrollYProgress, SCROLL_RANGES.CORNER_CARDS, TRANSFORM_VALUES.MOVEMENT_DISTANCE);
  const iconographyCardTranslateY = useTransform(scrollYProgress, SCROLL_RANGES.CORNER_CARDS, TRANSFORM_VALUES.CORNER_Y_DOWN);
  const typographyCardTranslateX = useTransform(scrollYProgress, SCROLL_RANGES.CORNER_CARDS, TRANSFORM_VALUES.MOVEMENT_DISTANCE_POSITIVE);
  const typographyCardTranslateY = useTransform(scrollYProgress, SCROLL_RANGES.CORNER_CARDS, TRANSFORM_VALUES.CORNER_Y_UP);
  const motionCardTranslateX = useTransform(scrollYProgress, SCROLL_RANGES.CORNER_CARDS, TRANSFORM_VALUES.MOVEMENT_DISTANCE_POSITIVE);
  const motionCardTranslateY = useTransform(scrollYProgress, SCROLL_RANGES.CORNER_CARDS, TRANSFORM_VALUES.CORNER_Y_DOWN);

  // Inverse scales to keep lines thin
  const iconCardLineScale = useTransform(scrollYProgress, SCROLL_RANGES.ICON_LINE_SCALE, TRANSFORM_VALUES.ICON_LINE_SCALE_VALUES);

  return {
    // Icon card
    iconCardScale,
    iconCardBackgroundColor,
    iconCardTextColor,
    iconCardDimensions,
    iconCardLineScale,

    // Color and Logo cards
    colorLogoCardsScale,
    colorCardTranslateX,
    logoCardTranslateX,

    // Voice Tone and Imagery cards
    voiceImageryCardsScale,
    voiceToneCardTranslateY,
    imageryCardTranslateY,

    // Corner cards
    cornerCardsScale,
    frameworkCardTranslateX,
    frameworkCardTranslateY,
    iconographyCardTranslateX,
    iconographyCardTranslateY,
    typographyCardTranslateX,
    typographyCardTranslateY,
    motionCardTranslateX,
    motionCardTranslateY,
  };
} 