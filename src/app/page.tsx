'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

// Components
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

// Types and Hooks
import { CardType } from '../types/cards';
import { useCardAnimations } from '../hooks/useCardAnimations';

export default function Home () {
  const router = useRouter();
  const [hoveredCard, setHoveredCard] = useState<CardType | null>(null);

  // Get all animation values from custom hook
  const {
    iconScaleBase,
    backgroundColor,
    textColor,
    iconCardSize,
    iconLineScale,
    colorAndLogoScale,
    colorX,
    logoX,
    voiceToneAndImageryScale,
    voiceToneY,
    imageryY,
    cornerCardScale,
    frameworkX,
    frameworkY,
    graphyX,
    graphyY,
    typoX,
    typoY,
    motionX,
    motionY,
  } = useCardAnimations();

  // Card click handler - navigate to same page (refresh)
  const handleCardClick = (cardType: CardType) => {
    console.log(`Clicked on ${cardType} card`);
    // Navigate to the same page (refresh/reload)
    router.push('/');
    // Alternative: window.location.reload() for hard refresh
  };

  return (
    <>
      <div className='h-[300vh]'>
        <div
          className={styles.gridContainer}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
        >
          {/* Icon Card - Center */}
          <IconCard
            scale={iconScaleBase}
            backgroundColor={backgroundColor}
            textColor={textColor}
            iconCardSize={iconCardSize}
            iconLineScale={iconLineScale}
          />

          {/* Color Card */}
          <ColorCard
            scale={colorAndLogoScale}
            x={colorX}
            isHovered={hoveredCard === 'color'}
            onMouseEnter={() => setHoveredCard('color')}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => handleCardClick('color')}
          />

          {/* Logo Card */}
          <LogoCard
            scale={colorAndLogoScale}
            x={logoX}
            isHovered={hoveredCard === 'logo'}
            onMouseEnter={() => setHoveredCard('logo')}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => handleCardClick('logo')}
          />

          {/* Voice & Tone Card */}
          <VoiceToneCard
            scale={voiceToneAndImageryScale}
            y={voiceToneY}
            isHovered={hoveredCard === 'voiceTone'}
            onMouseEnter={() => setHoveredCard('voiceTone')}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => handleCardClick('voiceTone')}
          />

          {/* Imagery Card */}
          <ImageryCard
            scale={voiceToneAndImageryScale}
            y={imageryY}
            isHovered={hoveredCard === 'imagery'}
            onMouseEnter={() => setHoveredCard('imagery')}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => handleCardClick('imagery')}
          />

          {/* Framework Card */}
          <FrameworkCard
            scale={cornerCardScale}
            x={frameworkX}
            y={frameworkY}
            isHovered={hoveredCard === 'framework'}
            onMouseEnter={() => setHoveredCard('framework')}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => handleCardClick('framework')}
          />

          {/* Iconography Card */}
          <IconographyCard
            scale={cornerCardScale}
            x={graphyX}
            y={graphyY}
            isHovered={hoveredCard === 'iconography'}
            onMouseEnter={() => setHoveredCard('iconography')}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => handleCardClick('iconography')}
          />

          {/* Typography Card */}
          <TypographyCard
            scale={cornerCardScale}
            x={typoX}
            y={typoY}
            isHovered={hoveredCard === 'typography'}
            onMouseEnter={() => setHoveredCard('typography')}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => handleCardClick('typography')}
          />

          {/* Motion Card */}
          <MotionCard
            scale={cornerCardScale}
            x={motionX}
            y={motionY}
            isHovered={hoveredCard === 'motion'}
            onMouseEnter={() => setHoveredCard('motion')}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => handleCardClick('motion')}
          />
        </div>
      </div>
    </>
  );
}