'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

import {
  IconCard,
  ColorCard,
  LogoCard,
  VoiceToneCard,
  ImageryCard,
  FrameworkCard,
  IconographyCard,
  TypographyCard,
  MotionCard
} from '../components/cards';

import { CardType } from '../types/cards';
import { useCardAnimations } from '../hooks/useCardAnimations';

export default function Home () {
  const router = useRouter();
  const [hoveredCard, setHoveredCard] = useState<CardType | null>(null);

  const {
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
  } = useCardAnimations();

  const handleCardClick = (cardType: CardType) => {
    console.log(`Clicked on ${cardType} card`);
    router.push('/');
  };

  return (
    <>
      <div className='h-[300vh] '></div>
      <div
        className={styles.gridContainer}
        style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
      >
        <IconCard
          scale={iconCardScale}
          backgroundColor={iconCardBackgroundColor}
          textColor={iconCardTextColor}
          iconCardSize={iconCardDimensions}
          iconLineScale={iconCardLineScale}
          iconLineOpacity={lineOpacity}
        />

        <ColorCard
          scale={colorLogoCardsScale}
          x={colorCardTranslateX}
          isHovered={hoveredCard === 'color'}
          onMouseEnter={() => setHoveredCard('color')}
          onMouseLeave={() => setHoveredCard(null)}
          onClick={() => handleCardClick('color')}
          lineThickness={0.3}
          lineOpacity={lineOpacity}
        />

        <LogoCard
          scale={colorLogoCardsScale}
          x={logoCardTranslateX}
          isHovered={hoveredCard === 'logo'}
          onMouseEnter={() => setHoveredCard('logo')}
          onMouseLeave={() => setHoveredCard(null)}
          onClick={() => handleCardClick('logo')}
          lineThickness={0.3}
          lineOpacity={lineOpacity}
        />

        <ImageryCard
          scale={voiceImageryCardsScale}
          y={imageryCardTranslateY}
          isHovered={hoveredCard === 'imagery'}
          onMouseEnter={() => setHoveredCard('imagery')}
          onMouseLeave={() => setHoveredCard(null)}
          onClick={() => handleCardClick('imagery')}
          lineThickness={0.3}
          lineOpacity={lineOpacity}
        />

        <VoiceToneCard
          scale={voiceImageryCardsScale}
          y={voiceToneCardTranslateY}
          isHovered={hoveredCard === 'voiceTone'}
          onMouseEnter={() => setHoveredCard('voiceTone')}
          onMouseLeave={() => setHoveredCard(null)}
          onClick={() => handleCardClick('voiceTone')}
          lineThickness={0.3}
          lineOpacity={lineOpacity}
        />

        <FrameworkCard
          scale={cornerCardsScale}
          x={frameworkCardTranslateX}
          y={frameworkCardTranslateY}
          isHovered={hoveredCard === 'framework'}
          onMouseEnter={() => setHoveredCard('framework')}
          onMouseLeave={() => setHoveredCard(null)}
          onClick={() => handleCardClick('framework')}
          lineThickness={0.3}
          lineOpacity={lineOpacity}
        />

        <IconographyCard
          scale={cornerCardsScale}
          x={iconographyCardTranslateX}
          y={iconographyCardTranslateY}
          isHovered={hoveredCard === 'iconography'}
          onMouseEnter={() => setHoveredCard('iconography')}
          onMouseLeave={() => setHoveredCard(null)}
          onClick={() => handleCardClick('iconography')}
          lineThickness={0.3}
          lineOpacity={lineOpacity}
        />

        <TypographyCard
          scale={cornerCardsScale}
          x={typographyCardTranslateX}
          y={typographyCardTranslateY}
          isHovered={hoveredCard === 'typography'}
          onMouseEnter={() => setHoveredCard('typography')}
          onMouseLeave={() => setHoveredCard(null)}
          onClick={() => handleCardClick('typography')}
          lineThickness={0.3}
          lineOpacity={lineOpacity}
        />

        <MotionCard
          scale={cornerCardsScale}
          x={motionCardTranslateX}
          y={motionCardTranslateY}
          isHovered={hoveredCard === 'motion'}
          onMouseEnter={() => setHoveredCard('motion')}
          onMouseLeave={() => setHoveredCard(null)}
          onClick={() => handleCardClick('motion')}
          lineThickness={0.3}
          lineOpacity={lineOpacity}
        />
      </div>
    </>
  );
}