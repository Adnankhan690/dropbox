'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState } from 'react';
import Lottie from 'lottie-react';
import styles from './page.module.css';
import animationData from '../../public/animate1.json';
import animationData2 from '../../public/Animation2.json';
import animationData3 from '../../public/Animation3.json';
import animationData4 from '../../public/Animation4.json';
import animationData5 from '../../public/Animation5.json';
import animationData6 from '../../public/Animation6.json';
import animationData7 from '../../public/Animation7.json';

export default function Home () {
  const { scrollYProgress } = useScroll();

  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const iconScaleBase = useTransform(scrollYProgress, [0, 1], [8.57, 1]);

  // Apply spring physics for smooth, natural scaling
  // const iconScale = useSpring(iconScaleBase, {
  //   stiffness: 100,
  //   damping: 30,
  //   mass: 1
  // });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ['transparent', '#4000FF']
  );
  const textColor = useTransform(
    scrollYProgress,
    [0, 1],
    ['#4000FF', 'white']
  );
  const iconCardSize = useTransform(
    scrollYProgress,
    [0, 1],
    ['100%', '100%']
  );



  const colorAndLogoScale = useTransform(scrollYProgress, [0.3, 1], [1.5, 1]);
  // // const voiceToneOpacity = useTransform(scrollProgress, [0.3, 0.5], [0, 1]);
  const colorX = useTransform(scrollYProgress, [0.2, 1], [-1100, 0]);
  const logoX = useTransform(scrollYProgress, [0.2, 1], [1100, 0]);

  const voiceToneAndImageryScale = useTransform(scrollYProgress, [0.4, 1], [1.7, 1]);
  const voiceToneY = useTransform(scrollYProgress, [0.4, 1], [-800, 0]);
  const imageryY = useTransform(scrollYProgress, [0.4, 1], [800, 0]);

  const cornerCardScale = useTransform(scrollYProgress, [0.8, 1], [1.7, 1]);
  const frameworkX = useTransform(scrollYProgress, [0.8, 1], [-1100, 0]);
  const frameworkY = useTransform(scrollYProgress, [0.8, 1], [-1100, 0]);
  const graphyX = useTransform(scrollYProgress, [0.8, 1], [-1100, 0]);
  const graphyY = useTransform(scrollYProgress, [0.8, 1], [1100, 0]);
  const typoX = useTransform(scrollYProgress, [0.8, 1], [1100, 0]);
  const typoY = useTransform(scrollYProgress, [0.8, 1], [-1100, 0]);
  const motionX = useTransform(scrollYProgress, [0.8, 1], [1100, 0]);
  const motionY = useTransform(scrollYProgress, [0.8, 1], [1100, 0]);

  // Inverse scales to keep lines thin - updated to work with spring animation
  // const iconLineScale = useTransform(iconScale, [8.57, 1], [1 / 8.57, 1]);
  const iconLineScale = useTransform(scrollYProgress, [0, 1], [1 / 30, 1]);

  return (
    <>
      <div className='h-[300vh]'>
        <div className={styles.gridContainer} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>

          <motion.div
            style={{
              // scale: iconScale,
              scale: iconScaleBase,
              backgroundColor: backgroundColor,
              color: textColor,
              width: iconCardSize,
              height: iconCardSize,
              willChange: 'transform, background-color, color, width, height, size'
            }}
            className={`${styles.icon} p-5 font-bold`}
          >
            <motion.hr className='absolute top-[-1px] left-[-100vw] w-[200vw] h-[1px] bg-blue-500 border-0 m-0 p-0 ' style={{ scaleY: iconLineScale }} />
            <motion.hr className='absolute bottom-[-1px] left-[-100vw] w-[200vw] h-[1px] bg-blue-500 border-0 m-0 p-0 ' style={{ scaleY: iconLineScale }} />
            <motion.hr className='absolute left-[-1px] top-[-100vh] w-[1px] h-[200vh] bg-blue-500 border-0 m-0 p-0 ' style={{ scaleX: iconLineScale }} />
            <motion.hr className='absolute right-[-1px] top-[-100vh] w-[1px] h-[200vh] bg-blue-500 border-0 m-0 p-0 ' style={{ scaleX: iconLineScale }} />
            Icon
          </motion.div>

          <motion.div
            style={{
              scale: colorAndLogoScale,
              x: colorX,
              willChange: 'transform'
            }}
            className={`${styles.dropColor} bg-[#F08A2E] text-[#762800] p-6 font-normal cursor-pointer hover:bg-black hover:text-white`}
            onMouseEnter={() => setHoveredCard('color')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* <motion.hr className='absolute top-[-1px] left-[-100vw] w-[200vw] h-[1px] bg-blue-500 border-0 m-0 p-0 ' style={{ scaleY: lineThickness }} />
            <motion.hr className='absolute bottom-[-1px] left-[-100vw] w-[200vw] h-[1px] bg-blue-500 border-0 m-0 p-0 ' style={{ scaleY: lineThickness }} />
            <motion.hr className='absolute left-[-1px] top-[-100vh] w-[1px] h-[200vh] bg-blue-500 border-0 m-0 p-0 ' style={{ scaleX: lineThickness }} />
            <motion.hr className='absolute right-[-1px] top-[-100vh] w-[1px] h-[200vh] bg-blue-500 border-0 m-0 p-0 ' style={{ scaleX: lineThickness }} /> */}
            <div className="h-full flex flex-col">
              <h2 className="text-4xl font-bold mb-auto">Color</h2>
              <div className="flex-1 flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: hoveredCard === 'color' ? 4 : 3,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Lottie
                    animationData={animationData2}
                    loop={hoveredCard === 'color'}
                    autoplay={hoveredCard === 'color'}
                    style={{ width: '100px', height: '100px' }}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            style={{
              scale: colorAndLogoScale,
              x: logoX,
              willChange: 'transform'
            }}
            className={`${styles.logo} bg-[#5ED3EE] p-6 text-[#005564] font-normal cursor-pointer hover:bg-black hover:text-white`}
            onMouseEnter={() => setHoveredCard('logo')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* <motion.hr className='absolute top-[-1px] left-[-100vw] w-[200vw] h-[1px] bg-blue-500 border-0 m-0 p-0 ' style={{ scaleY: lineThickness }} />
            <motion.hr className='absolute bottom-[-1px] left-[-100vw] w-[200vw] h-[1px] bg-blue-500 border-0 m-0 p-0 ' style={{ scaleY: lineThickness }} />
            <motion.hr className='absolute left-[-1px] top-[-100vh] w-[1px] h-[200vh] bg-blue-500 border-0 m-0 p-0 ' style={{ scaleX: lineThickness }} />
            <motion.hr className='absolute right-[-1px] top-[-100vh] w-[1px] h-[200vh] bg-blue-500 border-0 m-0 p-0 ' style={{ scaleX: lineThickness }} /> */}
            <div className="h-full flex flex-col">
              <h2 className="text-4xl font-bold mb-auto ">Logo</h2>
              <div className="flex-1 flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: hoveredCard === 'logo' ? 3 : 2,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Lottie
                    animationData={animationData4}
                    loop={hoveredCard === 'logo'}
                    autoplay={hoveredCard === 'logo'}
                    style={{ width: '100px', height: '100px' }}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            style={{
              scale: voiceToneAndImageryScale,
              y: voiceToneY,
              willChange: 'transform'
            }}
            className={`${styles.voiceTone} bg-[#FAD24B] p-6 text-amber-900 font-medium cursor-pointer hover:bg-black hover:text-white`}
            onMouseEnter={() => setHoveredCard('voiceTone')}
            onMouseLeave={() => setHoveredCard(null)}
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
                    scale: hoveredCard === 'voiceTone' ? 3 : 2,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Lottie
                    animationData={animationData7}
                    loop={hoveredCard === 'voiceTone'}
                    autoplay={hoveredCard === 'voiceTone'}
                    style={{ width: '100px', height: '100px' }}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            style={{
              scale: voiceToneAndImageryScale,
              y: imageryY,
              willChange: 'transform'
            }}
            className={`${styles.imagery} bg-[#8A2F55] p-6 text-[#FFA8A0] font-normal cursor-pointer hover:bg-black hover:text-white`}
            onMouseEnter={() => setHoveredCard('imagery')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* <motion.hr className='absolute top-[-1px] left-[-100vw] w-[200vw] h-[1px] bg-blue-500 border-0 m-0 p-0 ' style={{ scaleY: lineThickness }} />
            <motion.hr className='absolute bottom-[-1px] left-[-100vw] w-[200vw] h-[1px] bg-blue-500 border-0 m-0 p-0 ' style={{ scaleY: lineThickness }} />
            <motion.hr className='absolute left-[-1px] top-[-100vh] w-[1px] h-[200vh] bg-blue-500 border-0 m-0 p-0 ' style={{ scaleX: lineThickness }} />
            <motion.hr className='absolute right-[-1px] top-[-100vh] w-[1px] h-[200vh] bg-blue-500 border-0 m-0 p-0 ' style={{ scaleX: lineThickness }} /> */}
            <div className="h-full flex flex-col">
              <h2 className="text-4xl font-bold mb-auto">Imagery</h2>
              <div className="flex-1 flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: hoveredCard === 'imagery' ? 1.2 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Lottie
                    animationData={animationData6}
                    loop={hoveredCard === 'imagery'}
                    autoplay={hoveredCard === 'imagery'}
                    style={{ width: '100px', height: '100px' }}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            style={{
              scale: cornerCardScale,
              x: frameworkX,
              y: frameworkY,
              willChange: 'transform'
            }}
            className={`${styles.framework} bg-[#283351] p-6 text-[#B2C0C6] font-normal  rounded-tl-[8px] cursor-pointer hover:bg-black hover:text-white`}
            onMouseEnter={() => setHoveredCard('framework')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* <motion.div className='absolute top-[-1px] left-[-100vw] w-[200vw] h-[1px] bg-blue-500 border-0 m-0 p-0 ' style={{ scaleY: lineThickness }} />
            <motion.div className='absolute bottom-[-1px] left-[-100vw] w-[200vw] h-[1px] bg-blue-500 border-0 m-0 p-0 ' style={{ scaleY: lineThickness }} />
            <motion.div className='absolute left-[-1px] top-[-100vh] w-[1px] h-[200vh] bg-blue-500 border-0 m-0 p-0 ' style={{ scaleX: lineThickness }} />
            <motion.div className='absolute right-[-1px] top-[-100vh] w-[1px] h-[200vh] bg-blue-500 border-0 m-0 p-0 ' style={{ scaleX: lineThickness }} /> */}
            <div className="h-full flex flex-col">
              <h2 className="text-4xl  mb-auto font-bold">Framework</h2>
              <div className="flex-1 flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: hoveredCard === 'framework' ? 3 : 2,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Lottie
                    animationData={animationData5}
                    loop={hoveredCard === 'framework'}
                    autoplay={hoveredCard === 'framework'}
                    style={{ width: '100px', height: '100px' }}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            style={{
              scale: cornerCardScale,
              x: graphyX,
              y: graphyY,
              willChange: 'transform'
            }}
            className={`${styles.graphy} bg-[#B4DC19] p-6 text-[#005C43] font-normal cursor-pointer rounded-bl-[8px]  hover:bg-black hover:text-white`}
            onMouseEnter={() => setHoveredCard('iconography')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* <motion.hr className='absolute top-[-1px] left-[-100vw] w-[200vw] h-[1px] bg-blue-500 border-0 m-0 p-0 ' style={{ scaleY: lineThickness }} />
            <motion.hr className='absolute bottom-[-1px] left-[-100vw] w-[200vw] h-[1px] bg-blue-500 border-0 m-0 p-0 ' style={{ scaleY: lineThickness }} />
            <motion.hr className='absolute left-[-1px] top-[-100vh] w-[1px] h-[200vh] bg-blue-500 border-0 m-0 p-0 ' style={{ scaleX: lineThickness }} />
            <motion.hr className='absolute right-[-1px] top-[-100vh] w-[1px] h-[200vh] bg-blue-500 border-0 m-0 p-0 ' style={{ scaleX: lineThickness }} /> */}
            <div className="h-full flex flex-col">
              <h2 className="text-4xl font-bold mb-auto">Iconography</h2>
              <div className="flex-1 flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: hoveredCard === 'iconography' ? 1.2 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Lottie
                    animationData={animationData3}
                    loop={hoveredCard === 'iconography'}
                    autoplay={hoveredCard === 'iconography'}
                    style={{ width: '100px', height: '100px' }}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            style={{
              scale: cornerCardScale,
              x: typoX,
              y: typoY,
              willChange: 'transform'
            }}
            className={`${styles.typo} bg-[#FF3300] p-6 text-[#570014] font-normal cursor-pointer rounded-tr-[8px] hover:bg-black hover:text-white`}
            onMouseEnter={() => setHoveredCard('typography')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* <motion.hr className='absolute top-[-1px] left-[-100vw] w-[200vw] h-[1px] bg-blue-500 border-0 m-0 p-0 ' style={{ scaleY: lineThickness }} />
            <motion.hr className='absolute bottom-[-1px] left-[-100vw] w-[200vw] h-[1px] bg-blue-500 border-0 m-0 p-0 ' style={{ scaleY: lineThickness }} />
            <motion.hr className='absolute left-[-1px] top-[-100vh] w-[1px] h-[200vh] bg-blue-500 border-0 m-0 p-0 ' style={{ scaleX: lineThickness }} />
            <motion.hr className='absolute right-[-1px] top-[-100vh] w-[1px] h-[200vh] bg-blue-500 border-0 m-0 p-0 ' style={{ scaleX: lineThickness }} /> */}
            <div className="h-full flex flex-col">
              <h2 className="text-4xl font-bold mb-auto">Typography</h2>
              <div className="flex-1 flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: hoveredCard === 'typography' ? 3 : 2,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Lottie
                    animationData={animationData7}
                    loop={hoveredCard === 'typography'}
                    autoplay={hoveredCard === 'typography'}
                    style={{ width: '100px', height: '100px' }}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            style={{
              scale: cornerCardScale,
              x: motionX,
              y: motionY,
              willChange: 'transform'
            }}
            className={`${styles.motion} bg-[#C8AFF0] text-[#74005F] p-6 font-normal cursor-pointer rounded-br-[8px] hover:bg-black hover:text-white`}
            onMouseEnter={() => setHoveredCard('motion')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* <motion.hr className='absolute top-[-1px] left-[-100vw] w-[200vw] h-[1px] bg-blue-500 border-0 m-0 p-0 z-[-100]' style={{ scaleY: lineThickness }} />
            <motion.hr className='absolute bottom-[-1px] left-[-100vw] w-[200vw] h-[1px] bg-blue-500 border-0 m-0 p-0 z-[-100]' style={{ scaleY: lineThickness }} />
            <motion.hr className='absolute left-[-1px] top-[-100vh] w-[1px] h-[200vh] bg-blue-500 border-0 m-0 p-0 z-[-100]' style={{ scaleX: lineThickness }} />
            <motion.hr className='absolute right-[-1px] top-[-100vh] w-[1px] h-[200vh] bg-blue-500 border-0 m-0 p-0 z-[-100]' style={{ scaleX: lineThickness }} /> */}
            <div className="h-full flex flex-col">
              <h2 className="text-4xl font-bold mb-4">Motion</h2>
              <div className="flex-1 flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: hoveredCard === 'motion' ? 4 : 3,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Lottie
                    animationData={animationData}
                    loop={hoveredCard === 'motion'}
                    autoplay={hoveredCard === 'motion'}
                    style={{ width: '100px', height: '100px' }}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </>
  );
}