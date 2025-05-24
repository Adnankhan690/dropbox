'use client';
import styles from './page.module.css';

export default function Home () {

  return (
    <>
      <div className={styles.gridContainer}>
        <div className={`${styles.voiceTone} bg-[#FAD24B] p-5 text-white font-bold`}>Voice & Tone</div>
        <div className={`${styles.dropColor} bg-[#F08A2E] p-5 text-white font-bold`}>Color</div>
        <div className={`${styles.icon} bg-[#4000FF] p-5 text-white font-bold`}>Icon</div>
        <div className={`${styles.imagery} bg-[#8A2F55] p-5 text-white font-bold`}>Imagery</div>
        <div className={`${styles.logo} bg-[#5ED3EE] p-5 text-white font-bold`}>Logo</div>
        <div className={`${styles.framework} bg-[#283351] p-5 text-white font-bold rounded-tl-[8px]`}>Framework</div>
        <div className={`${styles.graphy} bg-[#B4DC19] p-5 text-white font-bold rounded-bl-[8px]`}>Graphy</div>
        <div className={`${styles.typo} bg-[#FF3300] p-5 text-white font-bold rounded-tr-[8px]`}>Typography</div>
        <div className={`${styles.motion} bg-[#C8AFF0] p-5 text-white font-bold rounded-br-[8px]`}>Motion</div>
      </div>
    </>
  );
}
