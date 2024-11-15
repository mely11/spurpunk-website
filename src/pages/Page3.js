import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Page3.css';
import topImage from '../assets/images/Page3_Top.png';
import middleImage from '../assets/images/Page3_Middle.png';
import bottomImage from '../assets/images/Page3_Bottom.png';


const Page3 = () => {
  return (
    <div className="page3-container">
      <div className="container">

        {/* Top Section */}
        <div className="row top-section mb-5">
          <img
            src={topImage} // Use the imported image variable
            alt="Top Section"
            className='img-fluid game-image'
          />
        </div>

        {/* Middle Section */}
        <div className="row middle-section mb-5">
          <img
            src= {middleImage} // Use the imported image variable
            alt="Middle Section"
            className="img-fluid game-image"
            
          />
        </div>

        {/* Bottom Section */}
        <div className="row bottom-section">
          <img
            src={bottomImage} // Use the imported image variable
            alt="Bottom Section"
            className='img-fluid game-image'
          />
        </div>

      </div>
    </div>
  );
};

export default Page3;
