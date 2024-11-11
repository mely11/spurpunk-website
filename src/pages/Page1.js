import React from 'react';
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
import PlayTrailerArrow from '../assets/images/Play-Trailer-Arrow@.png';
// Importing video
import GameplayVideo from '../assets/videos/Gameplay_BurialGrounds_Clips_Better.mp4';

// Page2
import AllText from '../assets/images/All_text@.png'
import Page2DottedLine from '../assets/images/Page-2-dotted_line@.png'
import HeroFrame from '../assets/images/Hero_frame@.png'
import TextBackground from '../assets/images/Page2_Rectangle_1@.png'
import AllTextBackground from '../assets/images/Page2-Rectangle@.png'
import Sean from '../assets/images/Hero_Sean@.png'
import Margarita from '../assets/images/Hero_Margarita@.png'
import Phil from '../assets/images/Hero_Phil@.png'
import Mickey from '../assets/images/Hero_Mickey@.png'
import SeanGearSilhouette from '../assets/images/Page2_Phil_Gear_silhouette@.png'
import SeanGear from '../assets/images/Page2_Phil_Gear@.png'
import MargaritaCardsSilhouette from '../assets/images/Page2_Susies_Cards_silhouette@.png'
import MargaritaCards from '../assets/images/Page2_Susies_Cards@.png'
import PhilBombSilhouette from '../assets/images/Page2_Phils_Bomb_silhouette@.png'
import PhilBomb from '../assets/images/Page2_Phils_Bomb@.png'
import MickeySkullSilhouette from '../assets/images/Page2_Mickeys_Skull_silhouette@.png'
import MickeySkull from '../assets/images/Page2_Mickeys_Skull@.png'


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
        src={DiscordNormal}
        alt="Discord Normal"
        className="discord-normal"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      />
      <motion.img
        src={InstagramNormal}
        alt="Instagram Normal"
        className="instagram-normal"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      />
      <motion.img
        src={YoutubeNormal}
        alt="Youtube Normal"
        className="youtube-normal"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      />
      <motion.img
        src={XNormal}
        alt="X Normal"
        className="x-normal"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      />
      <motion.img
        src={FacebookNormal}
        alt="Facebook Normal"
        className="facebook-normal"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
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

      {/* Play Trailer Arrow */}
      <motion.img
        src={PlayTrailerArrow}
        alt="Play Trailer Arrow"
        className="play-trailer-arrow"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.375, ease: 'easeOut' }}
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

    <div>

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
    {/* Mickey */}
    <motion.img
      src={SeanGear}
      alt="Sean's gear"
      className="sean-gear"
      // initial={{ y: 50, opacity: 0 }}
      // animate={{ y: 0, opacity: 1 }}
      // transition={{ delay: 1.375, duration: 0.375, ease: 'easeOut' }}
    />
    {/* Mickey */}
    <motion.img
      src={MargaritaCardsSilhouette}
      alt="Margarita's cards silhouette"
      className="margarita-cards-silhouette"
      // initial={{ y: 50, opacity: 0 }}
      // animate={{ y: 0, opacity: 1 }}
      // transition={{ delay: 1.375, duration: 0.375, ease: 'easeOut' }}
    />
    {/* Mickey */}
    <motion.img
      src={MargaritaCards}
      alt="Margarita's Cards"
      className="margarita-cards"
      // initial={{ y: 50, opacity: 0 }}
      // animate={{ y: 0, opacity: 1 }}
      // transition={{ delay: 1.375, duration: 0.375, ease: 'easeOut' }}
    />
    {/* Mickey */}
    <motion.img
      src={PhilBombSilhouette}
      alt="Phil's bomb silhouette"
      className="phil-bomb-silhouette"
      // initial={{ y: 50, opacity: 0 }}
      // animate={{ y: 0, opacity: 1 }}
      // transition={{ delay: 1.375, duration: 0.375, ease: 'easeOut' }}
    />
    {/* Mickey */}
    <motion.img
      src={PhilBomb}
      alt="Phil's Bomb"
      className="phil-bomb"
      // initial={{ y: 50, opacity: 0 }}
      // animate={{ y: 0, opacity: 1 }}
      // transition={{ delay: 1.375, duration: 0.375, ease: 'easeOut' }}
    />
    {/* Mickey */}
    <motion.img
      src={MickeySkullSilhouette}
      alt="Mickey's skull silhouette"
      className="mickey-skull-silhouette"
      // initial={{ y: 50, opacity: 0 }}
      // animate={{ y: 0, opacity: 1 }}
      // transition={{ delay: 1.375, duration: 0.375, ease: 'easeOut' }}
    />
    {/* Mickey */}
    <motion.img
      src={MickeySkull}
      alt="Mickey's skull"
      className="mickey-skull"
      // initial={{ y: 50, opacity: 0 }}
      // animate={{ y: 0, opacity: 1 }}
      // transition={{ delay: 1.375, duration: 0.375, ease: 'easeOut' }}
    />

    </div>

    </div>
  );
};

export default Page1;
