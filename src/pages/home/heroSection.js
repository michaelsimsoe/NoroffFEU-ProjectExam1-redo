import React, { useRef, useEffect } from 'react';
import { TakoffControll } from './takoffControll';

import skyStarBg from './assets/sky_star-bg.webp';
import cloud from './assets/cloud2.webp';
import falconFire from './assets/falconfiresm.webp';
import falcon from './assets/falcon.webp';

import {
  scrollStoryClouds,
  scrollStoryTakeoffRocket,
} from '../../utils/scrollStoryEvents';

export const HeroSection = () => {
  const cloudsRef = useRef();
  const subheadingRef = useRef();
  const groundRocketRef = useRef();
  const launchedRocketRef = useRef();
  const scrollEvent = (event) => {
    scrollStoryClouds({
      clouds: cloudsRef.current,
      subheading: subheadingRef.current,
    });
    scrollStoryTakeoffRocket({
      groundRocket: groundRocketRef.current,
      launchedRocket: launchedRocketRef.current,
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollEvent, false);

    return function cleanup() {
      window.removeEventListener('scroll', scrollEvent, false);
    };
  }, []);
  return (
    <section className="b-takeoff">
      <img
        className="b-takeoff__bg"
        src={skyStarBg}
        alt="Starlight with clouds in front and the ocean at the bottom."
      />
      <div
        ref={launchedRocketRef}
        className="b-takeoff__rocket-launched b-takeoff__rocket-launched--hidden"
      >
        <img src={falconFire} alt="A large Falcon Heavy rocket in takeoff." />
      </div>
      <div ref={groundRocketRef} className="b-takeoff__rocket">
        <img src={falcon} alt="A large Falcon Heavy rocket" />
      </div>
      <div ref={cloudsRef} className="b-takeoff__cluds">
        <img src={cloud} alt="A large cloud" />
      </div>
      <div ref={subheadingRef} className="b-takeoff__sub">
        <h3>Take a look at the timeline below, or launch off when ready</h3>
      </div>
      <TakoffControll />
    </section>
  );
};
