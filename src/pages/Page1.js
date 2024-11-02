import React from 'react';
import { motion } from 'framer-motion';
import './Page1.css';

// Importing images
import SpurpunkTitle from '../assets/images/Spurpunk-Title@.png';
import SkeletonFrame from '../assets/images/Skeleton-Frame@.png';
import TrailerRibbon from '../assets/images/Trailer-Ribbon@.png';
import SocialMedia from '../assets/images/Social-Media@.png';
import AreYouSpurpunk from '../assets/images/Are-You-a-Spurpunk@.png';
import MapCactus2Icon from '../assets/images/map-cactus2-icon@.png';
import CompassIcon from '../assets/images/compass-icon@.png';
import MapGrassIcon from '../assets/images/map-grass-icon@.png';
import MapCactusIcon from '../assets/images/map-cactus-icon@.png';
import Page1DottedLine from '../assets/images/Page1_Dotteed_Line@.png';
import ArrowDown from '../assets/images/Arrow_Down@.png';
import PlayTrailerArrow from '../assets/images/Play-Trailer-Arrow@.png';
// Importing video
import GameplayVideo from '../assets/videos/Gameplay_BurialGrounds_Clips_Better.mp4';

const Page1 = () => {
  return (
    <div className="page1">
      {/* Background Video */}
      <motion.video
        src={GameplayVideo}
        autoPlay
        loop
        muted
        className="background-video"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: 'easeOut' }}
      />

      {/* Background Color Section */}
      <div className="background-color"></div>

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
        transition={{ delay: 0.5, duration: 0.75, ease: 'easeOut' }}
      />

      {/* Trailer Ribbon with Link (Green) */}
      <a href="https://youtu.be/GEHQamurmBI?si=I8-euk5_BwD9Zi6m" target="_blank" rel="noopener noreferrer">
        <motion.img
          src={TrailerRibbon}
          alt="Trailer Ribbon"
          className="trailer-ribbon"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.75, ease: 'easeOut' }}
        />
      </a>

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

      {/* Map Cactus2 Icon */}
      <motion.img
        src={MapCactus2Icon}
        alt="Map Cactus 2"
        className="map-cactus2"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.75, ease: 'easeOut' }}
      />

      {/* Compass Icon */}
      <motion.img
        src={CompassIcon}
        alt="Compass Icon"
        className="compass-icon"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.75, duration: 0.75, ease: 'easeOut' }}
      />

      {/* Map Grass Icon */}
      <motion.img
        src={MapGrassIcon}
        alt="Map Grass Icon"
        className="map-grass-icon"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2, duration: 0.75, ease: 'easeOut' }}
      />

      {/* Duplicate Map Grass Icon with Different Position */}
      <motion.img
        src={MapGrassIcon}
        alt="Map Grass Icon Duplicate"
        className="map-grass-icon-duplicate"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.25, duration: 0.75, ease: 'easeOut' }}
      />

      {/* Map Cactus Icon */}
      <motion.img
        src={MapCactusIcon}
        alt="Map Cactus Icon"
        className="map-cactus-icon"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.75, ease: 'easeOut' }}
      />

      {/* Page 1 Dotted Line */}
      <motion.img
        src={Page1DottedLine}
        alt="Page 1 Dotted Line"
        className="page1-dotted-line"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.75, duration: 0.75, ease: 'easeOut' }}
      />

      {/* Play Trailer Arrow */}
      <motion.img
        src={PlayTrailerArrow}
        alt="Play Trailer Arrow"
        className="play-trailer-arrow"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 3, duration: 0.75, ease: 'easeOut' }}
      />

      {/* Arrow Down */}
      <motion.img
        src={ArrowDown}
        alt="Arrow Down"
        className="arrow-down"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 3.25, duration: 0.75, ease: 'easeOut' }}
      />
    </div>
  );
};

export default Page1;
