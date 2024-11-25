import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Page1.css';

// Importing images
import SpurpunkTitle from '../assets/images/Spurpunk-Title@.png';
import SkeletonFrame from '../assets/images/Skeleton-Frame@.png';
import TrailerRibbon from '../assets/images/Trailer-Ribbon@.png';
import DiscordNormal from '../assets/images/Discord_normal@.png';
import DiscordPressed from '../assets/images/Discord_pressed@.png';
import InstagramNormal from '../assets/images/Instagram_normal@.png';
import InstagramPressed from '../assets/images/Instagram_pressed@.png';
import YoutubeNormal from '../assets/images/Youtube_normal@.png';
import YoutubePressed from '../assets/images/Youtube_pressed@.png';
import XNormal from '../assets/images/X_normal@.png';
import XPressed from '../assets/images/X_pressed@.png';
import FacebookNormal from '../assets/images/Facebook_normal@.png';
import FacebookPressed from '../assets/images/Facebook_pressed@.png';
import AreYouSpurpunk from '../assets/images/Are-You-a-Spurpunk@.png';
import MapCactus2Icon from '../assets/images/map-cactus2-icon@.png';
import CompassIcon from '../assets/images/compass-icon@.png';
import MapGrassIcon from '../assets/images/map-grass-icon@.png';
import MapCactusIcon from '../assets/images/map-cactus-icon@.png';
import Page1DottedLine from '../assets/images/Page1_Dotteed_Line@.png';
import ArrowDown from '../assets/images/Arrow_Down@.png';
import PlayTrailerNormal from '../assets/images/PlayTrailer_normal@.png';
import PlayTrailerPressed from '../assets/images/PlayTrailer_pressed@.png';
import GooglePlayBtn from '../assets/images/GooglePlay_BTN@.png';
import AppleStoreBtn from '../assets/images/AppleStore_BTN@.png';
import Page1Landmass from '../assets/images/Page1_Landmass@.png';
import PressKitButton from '../assets/images/PressKit_Button@.png';
import BuyNowButton from '../assets/images/Buy-Now@.png';
// Importing video
import GameplayVideo from '../assets/videos/Gameplay_BurialGrounds_Clips_Better.mp4';




const Page1 = () => {
  const [discordPressed, setDiscordPressed] = useState(false);
  const [instagramPressed, setInstagramPressed] = useState(false);
  const [youtubePressed, setYoutubePressed] = useState(false);
  const [xPressed, setXPressed] = useState(false);
  const [facebookPressed, setFacebookPressed] = useState(false);
  const [playTrailerPressed, setPlayTrailerPressed] = useState(false);

  const handlePress = (setPressed, timeout) => {
    setPressed(true);
    setTimeout(() => setPressed(false), timeout);
  };

  return (
    <div className="page1">
      {/* Black Background for Top Section */}
      <div className="top-bar"></div>

      {/* Background Video */}
      <motion.video
        src={GameplayVideo}
        autoPlay
        loop
        muted
        className="background-video"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.375, ease: 'easeOut' }}
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
        transition={{ duration: 0.25, ease: 'easeOut' }}
      />

      {/* Skeleton Frame (Blue) */}
      <motion.img
        src={SkeletonFrame}
        alt="Skeleton Frame"
        className="skeleton-frame"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.375, ease: 'easeOut' }}
      />

      {/* Trailer Ribbon with Link (Green) */}
      <a href="https://youtu.be/GEHQamurmBI?si=I8-euk5_BwD9Zi6m" target="_blank" rel="noopener noreferrer">
        <motion.img
          src={TrailerRibbon}
          alt="Trailer Ribbon"
          className="trailer-ribbon"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.375, ease: 'easeOut' }}
        />
      </a>

      {/* Play Trailer Button */}
      <motion.img
        src={playTrailerPressed ? PlayTrailerPressed : PlayTrailerNormal}
        alt="Play Trailer"
        className="play-trailer-normal"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.375, ease: 'easeOut' }}
        onClick={() => handlePress(setPlayTrailerPressed, 200)}
      />

      {/* Are You a Spurpunk (Pink) */}
      <motion.img
        src={AreYouSpurpunk}
        alt="Are You a Spurpunk?"
        className="are-you-spurpunk"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.625, duration: 0.375, ease: 'easeOut' }}
      />

      {/* Social Media Links */}
      <motion.img
        src={discordPressed ? DiscordPressed : DiscordNormal}
        alt="Discord"
        className="discord-normal"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        onClick={() => handlePress(setDiscordPressed, 200)}
      />
      <motion.img
        src={instagramPressed ? InstagramPressed : InstagramNormal}
        alt="Instagram"
        className="instagram-normal"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        onClick={() => handlePress(setInstagramPressed, 200)}
      />
      <motion.img
        src={youtubePressed ? YoutubePressed : YoutubeNormal}
        alt="Youtube"
        className="youtube-normal"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        onClick={() => handlePress(setYoutubePressed, 200)}
      />
      <motion.img
        src={xPressed ? XPressed : XNormal}
        alt="X"
        className="x-normal"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        onClick={() => handlePress(setXPressed, 200)}
      />
      <motion.img
        src={facebookPressed ? FacebookPressed : FacebookNormal}
        alt="Facebook"
        className="facebook-normal"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        onClick={() => handlePress(setFacebookPressed, 200)}
      />

      {/* PressKit Button */}
      <motion.img
        src={PressKitButton}
        alt="Press Kit"
        className="presskit-button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      />

      {/* Buy Now Button */}
      <motion.img
        src={BuyNowButton}
        alt="Buy Now"
        className="buy-now"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      />

      {/* Buy Now Buttons for iOS and Android */}
      <a href="https://play.google.com/store/apps/details?id=com.easleydunnproductions.spurpunk&hl=en_US&gl=US" target="_blank" rel="noopener noreferrer">
        <motion.img
          src={GooglePlayBtn}
          alt="Google Play Store"
          className="googleplay-btn"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        />
      </a>
      <a href="https://apps.apple.com/ge/app/spurpunk-td/id1487386202#?platform=iphone" target="_blank" rel="noopener noreferrer">
        <motion.img
          src={AppleStoreBtn}
          alt="Apple App Store"
          className="applestore-btn"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        />
      </a>

      {/* Landmass Section for the Background */}
      <motion.img
        src={Page1Landmass}
        alt="Page 1 Landmass"
        className="page1-landmass"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.75, duration: 0.375, ease: 'easeOut' }}
      />

      {/* Map Cactus2 Icon */}
      <motion.img
        src={MapCactus2Icon}
        alt="Map Cactus 2"
        className="map-cactus2"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.75, duration: 0.375, ease: 'easeOut' }}
      />

      {/* Compass Icon */}
      <motion.img
        src={CompassIcon}
        alt="Compass Icon"
        className="compass-icon"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.875, duration: 0.375, ease: 'easeOut' }}
      />

      {/* Map Grass Icon */}
      <motion.img
        src={MapGrassIcon}
        alt="Map Grass Icon"
        className="map-grass-icon"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.375, ease: 'easeOut' }}
      />

      {/* Duplicate Map Grass Icon with Different Position */}
      <motion.img
        src={MapGrassIcon}
        alt="Map Grass Icon Duplicate"
        className="map-grass-icon-duplicate"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.375, ease: 'easeOut' }}
      />

      {/* Map Cactus Icon */}
      <motion.img
        src={MapCactusIcon}
        alt="Map Cactus Icon"
        className="map-cactus-icon"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.25, duration: 0.375, ease: 'easeOut' }}
      />

      {/* Page 1 Dotted Line */}
      <motion.img
        src={Page1DottedLine}
        alt="Page 1 Dotted Line"
        className="page1-dotted-line"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.375, duration: 0.375, ease: 'easeOut' }}
      />

      {/* Arrow Down */}
      <motion.img
        src={ArrowDown}
        alt="Arrow Down"
        className="arrow-down"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.625, duration: 0.375, ease: 'easeOut' }}
      />

    </div>
  );
};

export default Page1;