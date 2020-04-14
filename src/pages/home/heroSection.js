import React from 'react';

import skyStarBg from './assets/sky_star-bg.webp';
import cloud from './assets/cloud2.webp';
import falconFire from './assets/falconfiresm.webp';
import falcon from './assets/falcon.webp';

export const HeroSection = () => {
  return (
    <section className="b-takeoff">
      <img
        className="b-takeoff__bg"
        src={skyStarBg}
        alt="Starlight with clouds in front and the ocean at the bottom."
      />
      <div className="b-takeoff__rocket-launched b-takeoff__rocket-launched--hidden">
        <img src={falconFire} alt="A large Falcon Heavy rocket in takeoff." />
      </div>
      <div className="b-takeoff__rocket">
        <img src={falcon} alt="A large Falcon Heavy rocket" />
      </div>
      <div className="b-takeoff__cluds">
        <img src={cloud} alt="A large cloud" />
      </div>
      <div className="b-takeoff__sub">
        <h3>Take a look at the timeline below, or launch off when ready</h3>
      </div>
      <div className="b-takeoff__controll b-takeoff__controll-preparing">
        <div className="b-takeoff__controll-title">
          <h3>Preparing for Launch</h3>
        </div>
        <div className="b-takeoff__controll-timer">
          <div className="b-takeoff__controll-timer__time">--:--</div>
        </div>
        <div className="b-takeoff__controll-btn">
          <button
            disabled
            tabIndex="6"
            id="launch_button"
            className="btn btn__cta b-takeoff__controll-btn__button b-takeoff__controll-btn__button-disabled"
          >
            Waiting
          </button>
        </div>
      </div>
    </section>
  );
};
