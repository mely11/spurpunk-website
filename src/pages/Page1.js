import React from 'react';
import { motion } from 'framer-motion';
import './Page1.css';

// Importing images
import SpurpunkTitle from '../assets/images/Spurpunk-Title@.png';
import BGMap from '../assets/images/BG_Map@.png';
import SkeletonFrame from '../assets/images/Skeleton-Frame@.png';
import TrailerRibbon from '../assets/images/Trailer-Ribbon@.png';
import SocialMedia from '../assets/images/Social-Media@.png';
import AreYouSpurpunk from '../assets/images/Are-You-a-Spurpunk@.png';

const Page1 = () => {
  return (
    <div className="page1">
      {/* Background Map - Moves up and fades in */}
      <motion.img
        src={BGMap}
        alt="Background Map"
        className="bg-map"
        initial={{ y: '100vh', opacity: 0 }}  /* Start below the page and hidden */
        animate={{ y: 0, opacity: 1 }}        /* Move to its position and fade in */
        transition={{ duration: 0.75, ease: 'easeOut' }} /* Duration halved */
      />

      {/* Spurpunk Title (Red) */}
      <motion.img
        src={SpurpunkTitle}
        alt="Spurpunk Title"
        className="spurpunk-title"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }} 
      />

      {/* Skeleton Frame (Blue) */}
      <motion.img
        src={SkeletonFrame}
        alt="Skeleton Frame"
        className="skeleton-frame"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.75, ease: 'easeOut' }} /* Delay and duration halved */
      />

      {/* Trailer Ribbon (Green) */}
      <motion.img
        src={TrailerRibbon}
        alt="Trailer Ribbon"
        className="trailer-ribbon"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.75, ease: 'easeOut' }} 
      />

      {/* Are You a Spurpunk (Pink) */}
      <motion.img
        src={AreYouSpurpunk}
        alt="Are You a Spurpunk?"
        className="are-you-spurpunk"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.25, duration: 0.75, ease: 'easeOut' }}
      />

      {/* Social Media Links */}
      <motion.img
        src={SocialMedia}
        alt="Social Media Links"
        className="social-media"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      />
    </div>
  );
};

export default Page1;
