import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Page3.css';
import topImage from '../assets/images/Page3_Top.png';
import middleImage from '../assets/images/Page3_Middle.png';
import bottomImage from '../assets/images/Page3_Bottom.png';
import { motion } from "framer-motion";

const Page3 = () => {


  return (
    <div className="page3-container">
      <div className="container">
        {/* Top Section */}
        <motion.div
          initial = {{
            opacity: 0,
          }}
          whileInView={{opacity: 1}}
          viewport={{amount: "all"}}
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
          initial = {{
            opacity: 0,
          }}
          whileInView={{opacity: 1}}
          viewport={{amount: "all"}}
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
          initial = {{
            opacity: 0,
          }}
          whileInView={{opacity: 1}}
          viewport={{amount: "all"}}
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
