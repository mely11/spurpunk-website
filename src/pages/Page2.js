import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';
import './Page2.css';

// Page2
import AllText from '../assets/images/All_text@.png';
import MYI from '../assets/images/MYI@.png'
import SeanText from '../assets/images/Sean_text@.png';
import MargaritaText from '../assets/images/Margarita_text@.png';
import PhilText from '../assets/images/Phil_text@.png';
import MickeyText from '../assets/images/Mickey_text@.png';
import Page2DottedLine from '../assets/images/Page-2-dotted_line@.png';
import HeroFrame from '../assets/images/Hero_frame@.png';
import TextBackground from '../assets/images/Page2_Rectangle_1@.png';
import AllTextBackground from '../assets/images/Page2-Rectangle@.png';
import Sean from '../assets/images/Hero_Sean@.png';
import Margarita from '../assets/images/Hero_Margarita@.png';
import Phil from '../assets/images/Hero_Phil@.png';
import Mickey from '../assets/images/Hero_Mickey@.png';
import SeanGearSilhouette from '../assets/images/Page2_Phil_Gear_silhouette@.png';
import MargaritaCardsSilhouette from '../assets/images/Page2_Susies_Cards_silhouette@.png';
import PhilBombSilhouette from '../assets/images/Page2_Phils_Bomb_silhouette@.png';
import MickeySkullSilhouette from '../assets/images/Page2_Mickeys_Skull_silhouette@.png';
import SeanGear from '../assets/images/Page2_Phil_Gear@.png'
import MargaritaCards from '../assets/images/Page2_Susies_Cards@.png'
import PhilBomb from '../assets/images/Page2_Phils_Bomb@.png'
import MickeySkull from '../assets/images/Page2_Mickeys_Skull@.png'

const Page2 = () => {
  return (
    <div className="page2-container  py-5">
      <div className="container g-0">
        <p className='myi'>Meet Your Instructors!</p>

        {/* Page 2 Dotted Line */}
        <img
          src={Page2DottedLine}
          alt="Page 2 Dotted Line"
          className="page2-dotted-line"
        />

        {/* Text Backgrounds */}
        <div className="row g-0 text-center justify-content-center">
        
        {/* <img
          src={AllTextBackground}
          alt="All Text Background"
          className="all-text-background"
        /> */}
        
         {/*Sean*/}   
        <div className="col-12 col-sm-6 col-md-3 ">
            <div className="text-wrapper">
                <p className='fonts'>Sean</p>
                <img
                    src={SeanGearSilhouette}
                    alt="Sean's gear silhouette"
                    className="img-fluid silhouette"
                />
                <img
                    src={SeanGear}
                    alt="Mickey's skull silhouette"
                    className="hero-element"
                />
                <img
                    src={HeroFrame}
                    alt="Hero frame 1"
                    className="hero-frame"
                />
                {/* <img
                    src={TextBackground}
                    alt="Text Background"
                    className="text-background"
                /> */}
                <img 
                    src={Sean} 
                    alt="Hero Sean" 
                    className="hero-content" 
                />
                <p className='sp-title'>Electric Spurpunk</p>
                <p className='sp-content'>Creates weapons from any<br/>and all scraps - metal, wood,<br/>even bone.</p>
                
            </div>
        </div>

        {/* Margarita */}
        <div className="col-12 col-sm-6 col-md-3 ">
            <div className="text-wrapper">
            <p className='fonts'>Margarita</p>
            <img
              src={MargaritaCardsSilhouette}
              alt="Margarita's cards silhouette"
              className="img-fluid silhouette"
            />
            <img
              src={MargaritaCards}
              alt="Mickey's skull silhouette"
              className="hero-element"
            />
            <img
                src={HeroFrame}
                alt="Hero frame 2"
                className="hero-frame"
            />
            {/* <img
                src={TextBackground}
                alt="Text Background"
                className="text-background"
            /> */}
            <img 
                src={Margarita} 
                alt="Hero Margarita" 
                className="hero-content" 
            />
            <p className='sp-title'>Elemental Spurpunk</p>
            <p className='sp-content'>A mage with a talent to<br/>create dangerous spells<br/>from playing cards.</p>
            
            </div> 
        </div>

        {/* Phil */}
        <div className="col-12 col-sm-6 col-md-3 ">
            <div className="text-wrapper">
            <p className='fonts'>Phil</p>
            <img
              src={PhilBombSilhouette}
              alt="Phil's bomb silhouette"
              className="img-fluid silhouette"
            />
            <img
              src={PhilBomb}
              alt="Mickey's skull silhouette"
              className="hero-element"
            />
            <img
                src={HeroFrame}
                alt="Hero frame 3"
                className="hero-frame"
            />
            {/* <img
                src={TextBackground}
                alt="Text Background"
                className="text-background"
            /> */}
            <img 
                src={Phil} 
                alt="Hero Phil" 
                className="hero-content" 
            />
            <p className='sp-title'>Ghost Spurpunk</p>
            <p className='sp-content'>An ectoplasmic shopkeeper<br/>who crafts unstable items<br/>and then puts them on sale.</p>
            
            </div>
        </div>

        {/* Mickey */}
        <div className="col-12 col-sm-6 col-md-3 ">
            <div className="text-wrapper">
            <p className='fonts'>Mickey</p>
            <img
              src={MickeySkullSilhouette}
              alt="Mickey's skull silhouette"
              className="silhouette"
            />
            <img
              src={MickeySkull}
              alt="Mickey's skull silhouette"
              className="hero-element"
            />
            <img
                src={HeroFrame}
                alt="Hero frame 2"
                className="hero-frame"
            />
            {/* <img
                src={TextBackground}
                alt="Text Background"
                className="text-background"
            /> */}
            <img 
                src={Mickey} 
                alt="Hero Mickey" 
                className="hero-content mickey" 
            />
            <p className='sp-title'>Dark Spurpunk</p>
            <p className='sp-content'>A powerful necromancer<br/>who commands an army of<br/>the undead.</p>
            </div>
        </div>
        </div>

        

        
      </div>
    </div>
  );
};

export default Page2;
