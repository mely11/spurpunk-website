import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Page3.css';
import topImage from '../assets/images/Page3_Top.png';
import middleImage from '../assets/images/Page3_Middle.png';
import bottomImage from '../assets/images/Page3_Bottom.png';
import { motion, useScroll, useTransform } from "framer-motion";

const Page3 = () => {
  // Refs for each section
  const topRef = useRef(null);
  const middleRef = useRef(null);
  const bottomRef = useRef(null);

  // Scroll progress for calculating opacity
  const { scrollYProgress } = useScroll();

  // Opacity for top section
  const topOpacity = useTransform(scrollYProgress, (value) => {
    const bounds = topRef.current?.getBoundingClientRect();
    if (!bounds) return 0;
    const visibleHeight = Math.min(window.innerHeight, bounds.bottom) - Math.max(0, bounds.top);
    return Math.max(0, Math.min(1, visibleHeight / bounds.height));
  });

  // Opacity for middle section
  const middleOpacity = useTransform(scrollYProgress, (value) => {
    const bounds = middleRef.current?.getBoundingClientRect();
    if (!bounds) return 0;
    const visibleHeight = Math.min(window.innerHeight, bounds.bottom) - Math.max(0, bounds.top);
    return Math.max(0, Math.min(1, visibleHeight / bounds.height));
  });

  // Opacity for bottom section
  const bottomOpacity = useTransform(scrollYProgress, (value) => {
    const bounds = bottomRef.current?.getBoundingClientRect();
    if (!bounds) return 0;
    const visibleHeight = Math.min(window.innerHeight, bounds.bottom) - Math.max(0, bounds.top);
    return Math.max(0, Math.min(1, visibleHeight / bounds.height));
  });

  return (
    <div className="page3-container">
      <div className="container">
        {/* Top Section */}
        <motion.div
          ref={topRef}
          style={{ opacity: topOpacity }}
          className="row top-section mb-5"
        >
          <img
            src={topImage}
            alt="Top Section"
            className="img-fluid games-image"
          />
        </motion.div>

        {/* Middle Section */}
        <motion.div
          ref={middleRef}
          style={{ opacity: middleOpacity }}
          className="row middle-section mb-5"
        >
          <img
            src={middleImage}
            alt="Middle Section"
            className="img-fluid game-image"
          />
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          ref={bottomRef}
          style={{ opacity: bottomOpacity }}
          className="row bottom-section"
        >
          <img
            src={bottomImage}
            alt="Bottom Section"
            className="img-fluid game-image"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Page3;
