'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './page.module.css';

export default function Home () {
  const { scrollYProgress } = useScroll();

  // Immediate size change when scrolling starts, then scaling animation
  const iconScale = useTransform(scrollYProgress, [0, 0.01, 0.3, 1], [8.57, 4, 4, 1]);

  // Color and background changes happen when scaling animation starts
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.01, 0.3, 1],
    ['transparent', '#4000FF', '#4000FF', '#4000FF']
  );
  const textColor = useTransform(
    scrollYProgress,
    [0, 0.01, 0.3, 1],
    ['#4000FF', 'white', 'white', 'white']
  );
  

  // Separate scale for other divs (scale only, no color changes)
  // const voiceToneScale = useTransform(scrollProgress, [0.3, 1], [2, 1]);
  // // const voiceToneOpacity = useTransform(scrollProgress, [0.3, 0.5], [0, 1]);
  // const voiceToneY = useTransform(scrollProgress, [0.3, 0.8], [-800, 0]);

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

  // Constant thin value for all lines
  const lineThickness = 0.3;

  // Inverse scales to keep lines thin - updated to match new icon scaling
  const iconLineScale = useTransform(scrollYProgress, [0, 0.01, 0.3, 1], [1 / 8.57, 1 / 4, 1 / 4, 1]);

  const colorLogoLineScale = useTransform(scrollYProgress, [0.3, 1], [1 / 1.5, 1]);
  const voiceImageryLineScale = useTransform(scrollYProgress, [0.4, 1], [1 / 1.7, 1]);
  const cornerLineScale = useTransform(scrollYProgress, [0.8, 1], [1 / 1.7, 1]);

  return (
    <>
      <div style={{ height: '300vh' }}>
        <div className={styles.gridContainer} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
          <motion.div
            style={{
              scale: iconScale,
              backgroundColor: backgroundColor,
              color: textColor,
              willChange: 'transform, background-color, color'
            }}
            className={`${styles.icon} p-5 font-bold`}
          >
            <motion.hr className='absolute top-[-1px] left-[-100vw] w-[200vw] h-[1px] bg-blue-500 border-0 m-0 p-0' style={{ scaleY: iconLineScale }} />
            <motion.hr className='absolute bottom-[-1px] left-[-100vw] w-[200vw] h-[1px] bg-blue-500 border-0 m-0 p-0' style={{ scaleY: iconLineScale }} />
            <motion.hr className='absolute left-[-1px] top-[-100vh] w-[1px] h-[200vh] bg-blue-500 border-0 m-0 p-0' style={{ scaleX: iconLineScale }} />
            <motion.hr className='absolute right-[-1px] top-[-100vh] w-[1px] h-[200vh] bg-blue-500 border-0 m-0 p-0' style={{ scaleX: iconLineScale }} />
            Icon
          </motion.div>

          <motion.div
            style={{
              scale: colorAndLogoScale,
              x: colorX,
              willChange: 'transform'
            }}
            className={`${styles.dropColor} bg-[#F08A2E] p-5 text-white font-bold`}
          >
            <motion.hr className='absolute top-[-1px] left-[-100vw] w-[200vw] h-[1px] bg-blue-500 border-0 m-0 p-0' style={{ scaleY: lineThickness }} />
            <motion.hr className='absolute bottom-[-1px] left-[-100vw] w-[200vw] h-[1px] bg-blue-500 border-0 m-0 p-0' style={{ scaleY: lineThickness }} />
            <motion.hr className='absolute left-[-1px] top-[-100vh] w-[1px] h-[200vh] bg-blue-500 border-0 m-0 p-0' style={{ scaleX: lineThickness }} />
            <motion.hr className='absolute right-[-1px] top-[-100vh] w-[1px] h-[200vh] bg-blue-500 border-0 m-0 p-0' style={{ scaleX: lineThickness }} />
            Color
          </motion.div>

          <motion.div
            style={{
              scale: colorAndLogoScale,
              x: logoX,
              willChange: 'transform'
            }}
            className={`${styles.logo} bg-[#5ED3EE] p-5 text-white font-bold`}
          >
            <motion.hr className='absolute top-[-1px] left-[-100vw] w-[200vw] h-[1px] bg-blue-500 border-0 m-0 p-0' style={{ scaleY: lineThickness }} />
            <motion.hr className='absolute bottom-[-1px] left-[-100vw] w-[200vw] h-[1px] bg-blue-500 border-0 m-0 p-0' style={{ scaleY: lineThickness }} />
            <motion.hr className='absolute left-[-1px] top-[-100vh] w-[1px] h-[200vh] bg-blue-500 border-0 m-0 p-0' style={{ scaleX: lineThickness }} />
            <motion.hr className='absolute right-[-1px] top-[-100vh] w-[1px] h-[200vh] bg-blue-500 border-0 m-0 p-0' style={{ scaleX: lineThickness }} />
            Logo
          </motion.div>

          <motion.div
            style={{
              scale: voiceToneAndImageryScale,
              y: voiceToneY,
              willChange: 'transform'
            }}
            className={`${styles.voiceTone} bg-[#FAD24B] p-5 text-white font-bold`}
          >
            <motion.hr className='absolute top-[-1px] left-[-100vw] w-[200vw] h-[1px] bg-blue-500 border-0 m-0 p-0' style={{ scaleY: lineThickness }} />
            <motion.hr className='absolute bottom-[-1px] left-[-100vw] w-[200vw] h-[1px] bg-blue-500 border-0 m-0 p-0' style={{ scaleY: lineThickness }} />
            <motion.hr className='absolute left-[-1px] top-[-100vh] w-[1px] h-[200vh] bg-blue-500 border-0 m-0 p-0' style={{ scaleX: lineThickness }} />
            <motion.hr className='absolute right-[-1px] top-[-100vh] w-[1px] h-[200vh] bg-blue-500 border-0 m-0 p-0' style={{ scaleX: lineThickness }} />
            Voice & Tone
          </motion.div>

          <motion.div
            style={{
              scale: voiceToneAndImageryScale,
              y: imageryY,
              willChange: 'transform'
            }}
            className={`${styles.imagery} bg-[#8A2F55] p-5 text-white font-bold`}
          >
            <motion.hr className='absolute top-[-1px] left-[-100vw] w-[200vw] h-[1px] bg-blue-500 border-0 m-0 p-0' style={{ scaleY: lineThickness }} />
            <motion.hr className='absolute bottom-[-1px] left-[-100vw] w-[200vw] h-[1px] bg-blue-500 border-0 m-0 p-0' style={{ scaleY: lineThickness }} />
            <motion.hr className='absolute left-[-1px] top-[-100vh] w-[1px] h-[200vh] bg-blue-500 border-0 m-0 p-0' style={{ scaleX: lineThickness }} />
            <motion.hr className='absolute right-[-1px] top-[-100vh] w-[1px] h-[200vh] bg-blue-500 border-0 m-0 p-0' style={{ scaleX: lineThickness }} />
            Imagery
          </motion.div>

          {/* corner cards */}
          <motion.div
            style={{
              scale: cornerCardScale,
              x: frameworkX,
              y: frameworkY,
              willChange: 'transform'
            }}
            className={`${styles.framework} bg-[#283351] p-5 text-white font-bold rounded-tl-[8px]`}
          >
            <motion.hr className='absolute top-[-1px] left-[-100vw] w-[200vw] h-[1px] bg-blue-500 border-0 m-0 p-0' style={{ scaleY: lineThickness }} />
            <motion.hr className='absolute bottom-[-1px] left-[-100vw] w-[200vw] h-[1px] bg-blue-500 border-0 m-0 p-0' style={{ scaleY: lineThickness }} />
            <motion.hr className='absolute left-[-1px] top-[-100vh] w-[1px] h-[200vh] bg-blue-500 border-0 m-0 p-0' style={{ scaleX: lineThickness }} />
            <motion.hr className='absolute right-[-1px] top-[-100vh] w-[1px] h-[200vh] bg-blue-500 border-0 m-0 p-0' style={{ scaleX: lineThickness }} />
            Framework
          </motion.div>

          <motion.div
            style={{
              scale: cornerCardScale,
              x: graphyX,
              y: graphyY,
              willChange: 'transform'
            }}
            className={`${styles.graphy} bg-[#B4DC19] p-5 text-white font-bold rounded-bl-[8px]`}
          >
            <motion.hr className='absolute top-[-1px] left-[-100vw] w-[200vw] h-[1px] bg-blue-500 border-0 m-0 p-0' style={{ scaleY: lineThickness }} />
            <motion.hr className='absolute bottom-[-1px] left-[-100vw] w-[200vw] h-[1px] bg-blue-500 border-0 m-0 p-0' style={{ scaleY: lineThickness }} />
            <motion.hr className='absolute left-[-1px] top-[-100vh] w-[1px] h-[200vh] bg-blue-500 border-0 m-0 p-0' style={{ scaleX: lineThickness }} />
            <motion.hr className='absolute right-[-1px] top-[-100vh] w-[1px] h-[200vh] bg-blue-500 border-0 m-0 p-0' style={{ scaleX: lineThickness }} />
            Iconography
          </motion.div>

          <motion.div
            style={{
              scale: cornerCardScale,
              x: typoX,
              y: typoY,
              willChange: 'transform'
            }}
            className={`${styles.typo} bg-[#FF3300] p-5 text-white font-bold rounded-tr-[8px]`}
          >
            <motion.hr className='absolute top-[-1px] left-[-100vw] w-[200vw] h-[1px] bg-blue-500 border-0 m-0 p-0' style={{ scaleY: lineThickness }} />
            <motion.hr className='absolute bottom-[-1px] left-[-100vw] w-[200vw] h-[1px] bg-blue-500 border-0 m-0 p-0' style={{ scaleY: lineThickness }} />
            <motion.hr className='absolute left-[-1px] top-[-100vh] w-[1px] h-[200vh] bg-blue-500 border-0 m-0 p-0' style={{ scaleX: lineThickness }} />
            <motion.hr className='absolute right-[-1px] top-[-100vh] w-[1px] h-[200vh] bg-blue-500 border-0 m-0 p-0' style={{ scaleX: lineThickness }} />
            Typography
          </motion.div>

          <motion.div
            style={{
              scale: cornerCardScale,
              x: motionX,
              y: motionY,
              willChange: 'transform'
            }}
            className={`${styles.motion} bg-[#C8AFF0] p-5 text-white font-bold rounded-br-[8px]`}
          >
            <motion.hr className='absolute top-[-1px] left-[-100vw] w-[200vw] h-[1px] bg-blue-500 border-0 m-0 p-0' style={{ scaleY: lineThickness }} />
            <motion.hr className='absolute bottom-[-1px] left-[-100vw] w-[200vw] h-[1px] bg-blue-500 border-0 m-0 p-0' style={{ scaleY: lineThickness }} />
            <motion.hr className='absolute left-[-1px] top-[-100vh] w-[1px] h-[200vh] bg-blue-500 border-0 m-0 p-0' style={{ scaleX: lineThickness }} />
            <motion.hr className='absolute right-[-1px] top-[-100vh] w-[1px] h-[200vh] bg-blue-500 border-0 m-0 p-0' style={{ scaleX: lineThickness }} />
            Motion
          </motion.div>

        </div>
      </div>
    </>
  );
}

{/* <div className={`${styles.motion} bg-[#C8AFF0] p-5 text-white font-bold rounded-br-[8px]`}>Motion</div> */ }
{/* <div className={`${styles.typo} bg-[#FF3300] p-5 text-white font-bold rounded-tr-[8px]`}>Typography</div> */ }
{/* <div className={`${styles.graphy} bg-[#B4DC19] p-5 text-white font-bold rounded-bl-[8px]`}>Graphy</div> */ }
{/* <div className={`${styles.framework} bg-[#283351] p-5 text-white font-bold rounded-tl-[8px]`}>Framework</div> */ }
{/* <div className={`${styles.imagery} bg-[#8A2F55] p-5 text-white font-bold`}>Imagery</div> */ }
{/* <div className={`${styles.voiceTone} bg-[#FAD24B] p-5 text-white font-bold`}>Voice & Tone</div> */ }
{/* <div className={`${styles.dropColor} bg-[#F08A2E] p-5 text-white font-bold`}>Color</div> */ }
// <div className={`${styles.logo} bg-[#5ED3EE] p-5 text-white font-bold`}>Logo</div>// 'use client';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import styles from './page.module.css';

// export default function Home () {
//   const { scrollYProgress } = useScroll();

//   const iconScale = useTransform(scrollYProgress, [0, 1], [6, 1]);
//   const backgroundColor = useTransform(
//     scrollYProgress,
//     [0, 1],
//     ['transparent', '#4000FF']
//   );
//   const textColor = useTransform(
//     scrollYProgress,
//     [0, 1],
//     ['#4000FF', 'white']
//   );

//   // Separate scale for other divs (scale only, no color changes)
//   // const voiceToneScale = useTransform(scrollProgress, [0.3, 1], [2, 1]);
//   // // const voiceToneOpacity = useTransform(scrollProgress, [0.3, 0.5], [0, 1]);
//   // const voiceToneY = useTransform(scrollProgress, [0.3, 0.8], [-800, 0]);

//   const colorAndLogoScale = useTransform(scrollYProgress, [0.3, 1], [1.5, 1]);
//   // // const voiceToneOpacity = useTransform(scrollProgress, [0.3, 0.5], [0, 1]);
//   const colorX = useTransform(scrollYProgress, [0.2, 1], [-1100, 0]);
//   const logoX = useTransform(scrollYProgress, [0.2, 1], [1100, 0]);

//   const voiceToneAndImageryScale = useTransform(scrollYProgress, [0.4, 1], [1.7, 1]);
//   const voiceToneY = useTransform(scrollYProgress, [0.4, 1], [-800, 0]);
//   const imageryY = useTransform(scrollYProgress, [0.4, 1], [800, 0]);

//   const cornerCardScale = useTransform(scrollYProgress, [0.8, 1], [1.7, 1]);
//   const frameworkX = useTransform(scrollYProgress, [0.8, 1], [-1100, 0]);
//   const frameworkY = useTransform(scrollYProgress, [0.8, 1], [-1100, 0]);
//   const graphyX = useTransform(scrollYProgress, [0.8, 1], [-1100, 0]);
//   const graphyY = useTransform(scrollYProgress, [0.8, 1], [1100, 0]);
//   const typoX = useTransform(scrollYProgress, [0.8, 1], [1100, 0]);
//   const typoY = useTransform(scrollYProgress, [0.8, 1], [-1100, 0]);
//   const motionX = useTransform(scrollYProgress, [0.8, 1], [1100, 0]);
//   const motionY = useTransform(scrollYProgress, [0.8, 1], [1100, 0]);

//   // Constant thin value for all lines
//   const lineThickness = 0.3;

//   // Inverse scales to keep lines thin
//   const iconLineScale = useTransform(scrollYProgress, [0, 1], [1 / 6, 1]);
//   const colorLogoLineScale = useTransform(scrollYProgress, [0.3, 1], [1 / 1.5, 1]);
//   const voiceImageryLineScale = useTransform(scrollYProgress, [0.4, 1], [1 / 1.7, 1]);
//   const cornerLineScale = useTransform(scrollYProgress, [0.8, 1], [1 / 1.7, 1]);

//   return (
//     <>
//       <div style={{ height: '300vh' }}>
//         <div className={styles.gridContainer} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
//           <motion.div
//             style={{
//               scale: iconScale,
//               backgroundColor: backgroundColor,
//               color: textColor,
//               willChange: 'transform, background-color, color'
//             }}
//             className={`${styles.icon} p-5 font-bold`}
//           >
//             <motion.hr className='absolute top-[-1px] left-[-100vw] w-[200vw] h-[1px] bg-blue-500 border-0 m-0 p-0' style={{ scaleY: iconLineScale }} />
//             <motion.hr className='absolute bottom-[-1px] left-[-100vw] w-[200vw] h-[1px] bg-blue-500 border-0 m-0 p-0' style={{ scaleY: iconLineScale }} />
//             <motion.hr className='absolute left-[-1px] top-[-100vh] w-[1px] h-[200vh] bg-blue-500 border-0 m-0 p-0' style={{ scaleX: iconLineScale }} />
//             <motion.hr className='absolute right-[-1px] top-[-100vh] w-[1px] h-[200vh] bg-blue-500 border-0 m-0 p-0' style={{ scaleX: iconLineScale }} />
//             Icon
//           </motion.div>

//           <motion.div
//             style={{
//               scale: colorAndLogoScale,
//               x: colorX,
//               willChange: 'transform'
//             }}
//             className={`${styles.dropColor} bg-[#F08A2E] p-5 text-white font-bold`}
//           >
//             <motion.hr className='absolute top-[-1px] left-[-100vw] w-[200vw] h-[1px] bg-blue-500 border-0 m-0 p-0' style={{ scaleY: colorLogoLineScale }} />
//             <motion.hr className='absolute bottom-[-1px] left-[-100vw] w-[200vw] h-[1px] bg-blue-500 border-0 m-0 p-0' style={{ scaleY: colorLogoLineScale }} />
//             <motion.hr className='absolute left-[-1px] top-[-100vh] w-[1px] h-[200vh] bg-blue-500 border-0 m-0 p-0' style={{ scaleX: colorLogoLineScale }} />
//             <motion.hr className='absolute right-[-1px] top-[-100vh] w-[1px] h-[200vh] bg-blue-500 border-0 m-0 p-0' style={{ scaleX: colorLogoLineScale }} />
//             Color
//           </motion.div>

//           <motion.div
//             style={{
//               scale: colorAndLogoScale,
//               x: logoX,
//               willChange: 'transform'
//             }}
//             className={`${styles.logo} bg-[#5ED3EE] p-5 text-white font-bold`}
//           >
//             <motion.hr className='absolute top-[-1px] left-[-100vw] w-[200vw] h-[1px] bg-blue-500 border-0 m-0 p-0' style={{ scaleY: colorLogoLineScale }} />
//             <motion.hr className='absolute bottom-[-1px] left-[-100vw] w-[200vw] h-[1px] bg-blue-500 border-0 m-0 p-0' style={{ scaleY: colorLogoLineScale }} />
//             <motion.hr className='absolute left-[-1px] top-[-100vh] w-[1px] h-[200vh] bg-blue-500 border-0 m-0 p-0' style={{ scaleX: colorLogoLineScale }} />
//             <motion.hr className='absolute right-[-1px] top-[-100vh] w-[1px] h-[200vh] bg-blue-500 border-0 m-0 p-0' style={{ scaleX: colorLogoLineScale }} />
//             Logo
//           </motion.div>

//           <motion.div
//             style={{
//               scale: voiceToneAndImageryScale,
//               y: voiceToneY,
//               willChange: 'transform'
//             }}
//             className={`${styles.voiceTone} bg-[#FAD24B] p-5 text-white font-bold`}
//           >
//             <motion.hr className='absolute top-[-1px] left-[-100vw] w-[200vw] h-[1px] bg-blue-500 border-0 m-0 p-0' style={{ scaleY: voiceImageryLineScale }} />
//             <motion.hr className='absolute bottom-[-1px] left-[-100vw] w-[200vw] h-[1px] bg-blue-500 border-0 m-0 p-0' style={{ scaleY: voiceImageryLineScale }} />
//             <motion.hr className='absolute left-[-1px] top-[-100vh] w-[1px] h-[200vh] bg-blue-500 border-0 m-0 p-0' style={{ scaleX: voiceImageryLineScale }} />
//             <motion.hr className='absolute right-[-1px] top-[-100vh] w-[1px] h-[200vh] bg-blue-500 border-0 m-0 p-0' style={{ scaleX: voiceImageryLineScale }} />
//             Voice & Tone
//           </motion.div>

//           <motion.div
//             style={{
//               scale: voiceToneAndImageryScale,
//               y: imageryY,
//               willChange: 'transform'
//             }}
//             className={`${styles.imagery} bg-[#8A2F55] p-5 text-white font-bold`}
//           >
//             <motion.hr className='absolute top-[-1px] left-[-100vw] w-[200vw] h-[1px] bg-blue-500 border-0 m-0 p-0' style={{ scaleY: voiceImageryLineScale }} />
//             <motion.hr className='absolute bottom-[-1px] left-[-100vw] w-[200vw] h-[1px] bg-blue-500 border-0 m-0 p-0' style={{ scaleY: voiceImageryLineScale }} />
//             <motion.hr className='absolute left-[-1px] top-[-100vh] w-[1px] h-[200vh] bg-blue-500 border-0 m-0 p-0' style={{ scaleX: voiceImageryLineScale }} />
//             <motion.hr className='absolute right-[-1px] top-[-100vh] w-[1px] h-[200vh] bg-blue-500 border-0 m-0 p-0' style={{ scaleX: voiceImageryLineScale }} />
//             Imagery
//           </motion.div>


//           {/* corner cards */}
//           <motion.div
//             style={{
//               scale: cornerCardScale,
//               x: frameworkX,
//               y: frameworkY,
//               willChange: 'transform'
//             }}
//             className={`${styles.framework} bg-[#283351] p-5 text-white font-bold rounded-tl-[8px]`}
//           >
//             <motion.hr className='absolute top-[-1px] left-[-100vw] w-[200vw] h-[1px] bg-blue-500 border-0 m-0 p-0' style={{ scaleY: cornerLineScale }} />
//             <motion.hr className='absolute bottom-[-1px] left-[-100vw] w-[200vw] h-[1px] bg-blue-500 border-0 m-0 p-0' style={{ scaleY: cornerLineScale }} />
//             <motion.hr className='absolute left-[-1px] top-[-100vh] w-[1px] h-[200vh] bg-blue-500 border-0 m-0 p-0' style={{ scaleX: cornerLineScale }} />
//             <motion.hr className='absolute right-[-1px] top-[-100vh] w-[1px] h-[200vh] bg-blue-500 border-0 m-0 p-0' style={{ scaleX: cornerLineScale }} />
//             Framework
//           </motion.div>

//           <motion.div

//             style={{
//               scale: cornerCardScale,
//               x: graphyX,
//               y: graphyY,
//               willChange: 'transform'
//             }}
//             className={`${styles.graphy} bg-[#B4DC19] p-5 text-white font-bold rounded-bl-[8px]`}
//           >
//             <motion.hr className='absolute top-[-1px] left-[-100vw] w-[200vw] h-[1px] bg-blue-500 border-0 m-0 p-0' style={{ scaleY: cornerLineScale }} />
//             <motion.hr className='absolute bottom-[-1px] left-[-100vw] w-[200vw] h-[1px] bg-blue-500 border-0 m-0 p-0' style={{ scaleY: cornerLineScale }} />
//             <motion.hr className='absolute left-[-1px] top-[-100vh] w-[1px] h-[200vh] bg-blue-500 border-0 m-0 p-0' style={{ scaleX: cornerLineScale }} />
//             <motion.hr className='absolute right-[-1px] top-[-100vh] w-[1px] h-[200vh] bg-blue-500 border-0 m-0 p-0' style={{ scaleX: cornerLineScale }} />
//             Iconography
//           </motion.div>

//           <motion.div
//             style={{
//               scale: cornerCardScale,
//               x: typoX,
//               y: typoY,
//               willChange: 'transform'
//             }}
//             className={`${styles.typo} bg-[#FF3300] p-5 text-white font-bold rounded-tr-[8px]`}
//           >
//             <motion.hr className='absolute top-[-1px] left-[-100vw] w-[200vw] h-[1px] bg-blue-500 border-0 m-0 p-0' style={{ scaleY: cornerLineScale }} />
//             <motion.hr className='absolute bottom-[-1px] left-[-100vw] w-[200vw] h-[1px] bg-blue-500 border-0 m-0 p-0' style={{ scaleY: cornerLineScale }} />
//             <motion.hr className='absolute left-[-1px] top-[-100vh] w-[1px] h-[200vh] bg-blue-500 border-0 m-0 p-0' style={{ scaleX: cornerLineScale }} />
//             <motion.hr className='absolute right-[-1px] top-[-100vh] w-[1px] h-[200vh] bg-blue-500 border-0 m-0 p-0' style={{ scaleX: cornerLineScale }} />
//             Typography
//           </motion.div>

//           <motion.div
//             style={{
//               scale: cornerCardScale,
//               x: motionX,
//               y: motionY,
//               willChange: 'transform'
//             }}
//             className={`${styles.motion} bg-[#C8AFF0] p-5 text-white font-bold rounded-br-[8px]`}
//           >
//             <motion.hr className='absolute top-[-1px] left-[-100vw] w-[200vw] h-[1px] bg-blue-500 border-0 m-0 p-0' style={{ scaleY: cornerLineScale }} />
//             <motion.hr className='absolute bottom-[-1px] left-[-100vw] w-[200vw] h-[1px] bg-blue-500 border-0 m-0 p-0' style={{ scaleY: cornerLineScale }} />
//             <motion.hr className='absolute left-[-1px] top-[-100vh] w-[1px] h-[200vh] bg-blue-500 border-0 m-0 p-0' style={{ scaleX: cornerLineScale }} />
//             <motion.hr className='absolute right-[-1px] top-[-100vh] w-[1px] h-[200vh] bg-blue-500 border-0 m-0 p-0' style={{ scaleX: cornerLineScale }} />
//             Motion
//           </motion.div>


//         </div>
//       </div>
//     </>
//   );
// }

// {/* <div className={`${styles.motion} bg-[#C8AFF0] p-5 text-white font-bold rounded-br-[8px]`}>Motion</div> */ }
// {/* <div className={`${styles.typo} bg-[#FF3300] p-5 text-white font-bold rounded-tr-[8px]`}>Typography</div> */ }
// {/* <div className={`${styles.graphy} bg-[#B4DC19] p-5 text-white font-bold rounded-bl-[8px]`}>Graphy</div> */ }
// {/* <div className={`${styles.framework} bg-[#283351] p-5 text-white font-bold rounded-tl-[8px]`}>Framework</div> */ }
// {/* <div className={`${styles.imagery} bg-[#8A2F55] p-5 text-white font-bold`}>Imagery</div> */ }
// {/* <div className={`${styles.voiceTone} bg-[#FAD24B] p-5 text-white font-bold`}>Voice & Tone</div> */ }
// {/* <div className={`${styles.dropColor} bg-[#F08A2E] p-5 text-white font-bold`}>Color</div> */ }
// // <div className={`${styles.logo} bg-[#5ED3EE] p-5 text-white font-bold`}>Logo</div>





