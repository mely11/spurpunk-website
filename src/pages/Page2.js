import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';
import './Page2.css';

const Page2 = () => {
  return (
    <div className="page2-container">
      <div className="container">
        {/* All text */}
        <motion.img
        src={AllText}
        alt="Meet Your Instructors"
        className="all-text"
        // initial={{ y: 50, opacity: 0 }}
        // animate={{ y: 0, opacity: 1 }}
        // transition={{ delay: 1.625, duration: 0.375, ease: 'easeOut' }}
        />
        {/* All text background */}
        <motion.img
        src={AllTextBackground}
        alt="All Text Background"
        className="all-text-background"
        // initial={{ y: 50, opacity: 0 }}
        // animate={{ y: 0, opacity: 1 }}
        // transition={{ delay: 1.625, duration: 0.375, ease: 'easeOut' }}
        />

        {/* Text BG 1 */}
        <motion.img
        src={TextBackground}
        alt="Text Background"
        className="text-background1"
        // initial={{ y: 50, opacity: 0 }}
        // animate={{ y: 0, opacity: 1 }}
        // transition={{ delay: 1.625, duration: 0.375, ease: 'easeOut' }}
        />
        {/* Text BG 2 */}
        <motion.img
        src={TextBackground}
        alt="Text Background"
        className="text-background2"
        // initial={{ y: 50, opacity: 0 }}
        // animate={{ y: 0, opacity: 1 }}
        // transition={{ delay: 1.625, duration: 0.375, ease: 'easeOut' }}
        />
        {/* Text BG 3 */}
        <motion.img
        src={TextBackground}
        alt="Text Background"
        className="text-background3"
        // initial={{ y: 50, opacity: 0 }}
        // animate={{ y: 0, opacity: 1 }}
        // transition={{ delay: 1.625, duration: 0.375, ease: 'easeOut' }}
        />
        {/* Text BG 4 */}
        <motion.img
        src={TextBackground}
        alt="Text Background"
        className="text-background4"
        // initial={{ y: 50, opacity: 0 }}
        // animate={{ y: 0, opacity: 1 }}
        // transition={{ delay: 1.625, duration: 0.375, ease: 'easeOut' }}
        />

        {/* Page 2 Dotted Line */}
        <motion.img
        src={Page2DottedLine}
        alt="Page 2 Dotted Line"
        className="page2-dotted-line"
        // initial={{ y: 50, opacity: 0 }}
        // animate={{ y: 0, opacity: 1 }}
        // transition={{ delay: 1.375, duration: 0.375, ease: 'easeOut' }}
        />

        {/* Hero frame 1 */}
        <motion.img
        src={HeroFrame}
        alt="Hero frame 1"
        className="hero-frame1"
        // initial={{ y: 50, opacity: 0 }}
        // animate={{ y: 0, opacity: 1 }}
        // transition={{ delay: 1.375, duration: 0.375, ease: 'easeOut' }}
        />

        {/* Hero frame 2 */}
        <motion.img
        src={HeroFrame}
        alt="Hero frame 2"
        className="hero-frame2"
        // initial={{ y: 50, opacity: 0 }}
        // animate={{ y: 0, opacity: 1 }}
        // transition={{ delay: 1.375, duration: 0.375, ease: 'easeOut' }}
        />

        {/* Hero frame 3 */}
        <motion.img
        src={HeroFrame}
        alt="Hero frame 3"
        className="hero-frame3"
        // initial={{ y: 50, opacity: 0 }}
        // animate={{ y: 0, opacity: 1 }}
        // transition={{ delay: 1.375, duration: 0.375, ease: 'easeOut' }}
        />

        {/* Hero frame 4 */}
        <motion.img
        src={HeroFrame}
        alt="Hero frame 4"
        className="hero-frame4"
        // initial={{ y: 50, opacity: 0 }}
        // animate={{ y: 0, opacity: 1 }}
        // transition={{ delay: 1.375, duration: 0.375, ease: 'easeOut' }}
        />

        {/* Sean */}
        <motion.img
        src={Sean}
        alt="Hero Sean"
        className="sean"
        // initial={{ y: 50, opacity: 0 }}
        // animate={{ y: 0, opacity: 1 }}
        // transition={{ delay: 1.375, duration: 0.375, ease: 'easeOut' }}
        />
        {/* Margarita */}
        <motion.img
        src={Margarita}
        alt="Hero Margarita"
        className="margarita"
        // initial={{ y: 50, opacity: 0 }}
        // animate={{ y: 0, opacity: 1 }}
        // transition={{ delay: 1.375, duration: 0.375, ease: 'easeOut' }}
        />
        {/* Phil */}
        <motion.img
        src={Phil}
        alt="Hero Phil"
        className="phil"
        // initial={{ y: 50, opacity: 0 }}
        // animate={{ y: 0, opacity: 1 }}
        // transition={{ delay: 1.375, duration: 0.375, ease: 'easeOut' }}
        />
        {/* Mickey */}
        <motion.img
        src={Mickey}
        alt="Hero Mickey"
        className="mickey"
        // initial={{ y: 50, opacity: 0 }}
        // animate={{ y: 0, opacity: 1 }}
        // transition={{ delay: 1.375, duration: 0.375, ease: 'easeOut' }}
        />

        {/* Sean's gear silhouette*/}
        <motion.img
        src={SeanGearSilhouette}
        alt="Sean's gear silhouette"
        className="sean-gear-silhouette"
        // initial={{ y: 50, opacity: 0 }}
        // animate={{ y: 0, opacity: 1 }}
        // transition={{ delay: 1.375, duration: 0.375, ease: 'easeOut' }}
        />
        {/* Margarita's cards silhouette */}
        <motion.img
        src={MargaritaCardsSilhouette}
        alt="Margarita's cards silhouette"
        className="margarita-cards-silhouette"
        // initial={{ y: 50, opacity: 0 }}
        // animate={{ y: 0, opacity: 1 }}
        // transition={{ delay: 1.375, duration: 0.375, ease: 'easeOut' }}
        />
        {/* Phils' bomb silhouette */}
        <motion.img
        src={PhilBombSilhouette}
        alt="Phil's bomb silhouette"
        className="phil-bomb-silhouette"
        // initial={{ y: 50, opacity: 0 }}
        // animate={{ y: 0, opacity: 1 }}
        // transition={{ delay: 1.375, duration: 0.375, ease: 'easeOut' }}
        />
        {/* Mickey's skull silhouette */}
        <motion.img
        src={MickeySkullSilhouette}
        alt="Mickey's skull silhouette"
        className="mickey-skull-silhouette"
        // initial={{ y: 50, opacity: 0 }}
        // animate={{ y: 0, opacity: 1 }}
        // transition={{ delay: 1.375, duration: 0.375, ease: 'easeOut' }}
        />
        
      </div>
    </div>
  );
};

export default Page3;
