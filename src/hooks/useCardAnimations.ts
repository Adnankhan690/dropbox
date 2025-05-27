import { useScroll, useTransform } from 'framer-motion';
import { SCROLL_RANGES, TRANSFORM_VALUES } from '../constants/animations';

export function useCardAnimations () {
  const { scrollYProgress } = useScroll();

  // Transform values for icon card scaling and background changes
  const iconCardScale = useTransform(scrollYProgress, SCROLL_RANGES.ICON_CARD_SCALE, TRANSFORM_VALUES.ICON_CARD_SCALE);

  const iconCardBackgroundColor = useTransform(
    scrollYProgress,
    SCROLL_RANGES.ICON_CARD_SCALE,
    ['transparent', '#3b82f6']
  );

  const iconCardTextColor = useTransform(
    scrollYProgress,
    SCROLL_RANGES.ICON_CARD_SCALE,
    ['#3b82f6', 'white']
  );

  const iconCardDimensions = useTransform(
    scrollYProgress,
    SCROLL_RANGES.ICON_CARD_SCALE,
    ['100%', '100%']
  );

  const colorLogoCardsScale = useTransform(scrollYProgress, SCROLL_RANGES.COLOR_LOGO_CARDS_SCALE, TRANSFORM_VALUES.COLOR_LOGO_CARDS_SCALE);
  const colorCardTranslateX = useTransform(scrollYProgress, SCROLL_RANGES.COLOR_LOGO_CARDS_TRANSLATE, TRANSFORM_VALUES.TRANSLATE_DISTANCE_NEGATIVE);
  const logoCardTranslateX = useTransform(scrollYProgress, SCROLL_RANGES.COLOR_LOGO_CARDS_TRANSLATE, TRANSFORM_VALUES.TRANSLATE_DISTANCE_POSITIVE);

  const voiceImageryCardsScale = useTransform(scrollYProgress, SCROLL_RANGES.VOICE_IMAGERY_CARDS_SCALE, TRANSFORM_VALUES.VOICE_IMAGERY_CARDS_SCALE);
  const voiceToneCardTranslateY = useTransform(scrollYProgress, SCROLL_RANGES.VOICE_IMAGERY_CARDS_SCALE, TRANSFORM_VALUES.VOICE_TONE_CARD_TRANSLATE_Y);
  const imageryCardTranslateY = useTransform(scrollYProgress, SCROLL_RANGES.VOICE_IMAGERY_CARDS_SCALE, TRANSFORM_VALUES.IMAGERY_CARD_TRANSLATE_Y);

  const cornerCardsScale = useTransform(scrollYProgress, SCROLL_RANGES.CORNER_CARDS_SCALE, TRANSFORM_VALUES.CORNER_CARDS_SCALE);
  const frameworkCardTranslateX = useTransform(scrollYProgress, SCROLL_RANGES.CORNER_CARDS_SCALE, TRANSFORM_VALUES.TRANSLATE_DISTANCE_NEGATIVE);
  const frameworkCardTranslateY = useTransform(scrollYProgress, SCROLL_RANGES.CORNER_CARDS_SCALE, TRANSFORM_VALUES.CORNER_CARD_TRANSLATE_Y_UP);
  const iconographyCardTranslateX = useTransform(scrollYProgress, SCROLL_RANGES.CORNER_CARDS_SCALE, TRANSFORM_VALUES.TRANSLATE_DISTANCE_NEGATIVE);
  const iconographyCardTranslateY = useTransform(scrollYProgress, SCROLL_RANGES.CORNER_CARDS_SCALE, TRANSFORM_VALUES.CORNER_CARD_TRANSLATE_Y_DOWN);
  const typographyCardTranslateX = useTransform(scrollYProgress, SCROLL_RANGES.CORNER_CARDS_SCALE, TRANSFORM_VALUES.TRANSLATE_DISTANCE_POSITIVE);
  const typographyCardTranslateY = useTransform(scrollYProgress, SCROLL_RANGES.CORNER_CARDS_SCALE, TRANSFORM_VALUES.CORNER_CARD_TRANSLATE_Y_UP);
  const motionCardTranslateX = useTransform(scrollYProgress, SCROLL_RANGES.CORNER_CARDS_SCALE, TRANSFORM_VALUES.TRANSLATE_DISTANCE_POSITIVE);
  const motionCardTranslateY = useTransform(scrollYProgress, SCROLL_RANGES.CORNER_CARDS_SCALE, TRANSFORM_VALUES.CORNER_CARD_TRANSLATE_Y_DOWN);

  const iconCardLineScale = useTransform(scrollYProgress, SCROLL_RANGES.ICON_CARD_LINE_SCALE, TRANSFORM_VALUES.ICON_CARD_LINE_SCALE);
  const lineOpacity = useTransform(scrollYProgress, [0, 0.9, 1], [1, 1, 0]);

  return {
    iconCardScale,
    iconCardBackgroundColor,
    iconCardTextColor,
    iconCardDimensions,
    iconCardLineScale,
    lineOpacity,

    colorLogoCardsScale,
    colorCardTranslateX,
    logoCardTranslateX,

    voiceImageryCardsScale,
    voiceToneCardTranslateY,
    imageryCardTranslateY,

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