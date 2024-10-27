import React from 'react';
import { motion } from 'framer-motion';
import './Page1.css';

// Importing images
import SpurpunkTitle from '../assets/images/Spurpunk-Title@.png';
import BGMap from '../assets/images/BG_Map@.png';
import SkeletonFrame from '../assets/images/Skeleton-Frame@.png';
import TrailerRibbon from '../assets/images/Trailer-Ribbon@.png';
import SocialMedia from '../assets/images/Social-Media@.png';

const Page1 = () => {
  return (
    <div className="page1">
      {/* Background Map */}
      <motion.img
        src={BGMap}
        alt="Background Map"
        className="bg-map"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Spurpunk Title */}
      <motion.img
        src={SpurpunkTitle}
        alt="Spurpunk Title"
        className="spurpunk-title"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Skeleton Frame */}
      <motion.img
        src={SkeletonFrame}
        alt="Skeleton Frame"
        className="skeleton-frame"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      {/* Trailer Ribbon */}
      <motion.img
        src={TrailerRibbon}
        alt="Trailer Ribbon"
        className="trailer-ribbon"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8 }}
      />

      {/* Social Media Links */}
      <motion.img
        src={SocialMedia}
        alt="Social Media Links"
        className="social-media"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      />
    </div>
  );
};

export default Page1;
