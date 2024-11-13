import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Page3.css';

const Page3 = () => {
  return (
    <div className="page3-container">
      <div className="container">
        {/* Top Section */}
        <div className="row top-section mb-5">
          <h2 className="section-title text-center mb-4">
            TOWER DEFENSE AND MAGIC CARDS
          </h2>
          <div className="col-lg-6 d-flex justify-content-center">
            <img
              src="path-to-top-image.jpg"
              alt="Tower Defense Game"
              className="img-fluid game-image"
            />
          </div>
          <div className="col-lg-6">
            <h3>The First Combination Tower Defense and Card Game</h3>
            <p>
              Set your towers up but also stay agile with what cards and spells
              you use to buff your towers or repel the creatures. Your cardplay
              can level your tower arsenal into a winning defense.
            </p>
          </div>
        </div>

        {/* Middle Section */}
        <div className="row middle-section mb-5">
          <div className="col-12">
            <h2 className="text-center">
              Over 60 Unique Levels - including Secret Ones
            </h2>
            <p className="text-center">
              From Boot Hill to Death Valley to ancient Mayan Ruins, these
              levels will keep you on your toes partner - and when you’re done
              there’s several hidden ones to discover.
            </p>
          </div>
          <div className="col-12 d-flex justify-content-center">
            <img
              src="path-to-middle-image.jpg"
              alt="Level Preview"
              className="img-fluid game-image"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="row bottom-section">
          <div className="col-12 text-center mb-4">
            <h3>Hidden Secret Towers to Find and Unleash on the Monsters</h3>
            <p>
              You’ll need all the help you can get to fight regenerating zombies,
              exploding landsharks and jumping ghouls. Unlock and deploy the
              several secret towers to turn the tides of battle.
            </p>
          </div>
          <div className="col-12">
            <div className="row justify-content-center">
              <div className="col-2 col-sm-1">
                <img src="icon1.png" alt="Icon 1" className="img-fluid icon" />
              </div>
              <div className="col-2 col-sm-1">
                <img src="icon2.png" alt="Icon 2" className="img-fluid icon" />
              </div>
              <div className="col-2 col-sm-1">
                <img src="icon3.png" alt="Icon 3" className="img-fluid icon" />
              </div>
              <div className="col-2 col-sm-1">
                <img src="icon4.png" alt="Icon 4" className="img-fluid icon" />
              </div>
              <div className="col-2 col-sm-1">
                <img src="icon5.png" alt="Icon 5" className="img-fluid icon" />
              </div>
              <div className="col-2 col-sm-1">
                <img src="icon6.png" alt="Icon 6" className="img-fluid icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;
