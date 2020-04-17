import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  scrollPercent,
  displayPercentage,
} from '../../utils/scrollStoryEvents';

// Images
import mars from './assets/mars_half.webp';
import rocket from './assets/rocket.webp';

export const Timeline = (props) => {
  const progressIndicatorRef = useRef();
  const timeLineRocketRef = useRef();
  const timelineRef = useRef();
  const scrollEvent = (event) => {
    scrollPercent(progressIndicatorRef.current);
  };

  useEffect(() => {
    props.getRef(timelineRef);
    window.addEventListener('scroll', scrollEvent, false);
    displayPercentage({
      progress: progressIndicatorRef.current,
      timeLineRocket: timeLineRocketRef.current,
      timeline: timelineRef.current,
    });
    return function cleanup() {
      window.removeEventListener('scroll', scrollEvent, false);
    };
  }, [props]);
  return (
    <main id="maincontent" className="o-main-container">
      <div
        ref={progressIndicatorRef}
        className="progress progress--hidden"
      ></div>
      <section ref={timelineRef} className="b-timeline" id="timeline">
        {props.events}
        <div className="b-timeline__path"></div>
        <div
          ref={timeLineRocketRef}
          id="timeline-rocket"
          className="b-timeline__rocket b-timeline__rocket--hidden"
        >
          <img src={rocket} alt="A Falcon rocket in space" />
        </div>
        <div className="b-timeline__mars">
          <div className="b-timeline__mars__text">
            <h2>We are going to Mars in 2025</h2>
            <h3>Are you comming with us?</h3>
          </div>
          <div className="b-timeline__mars__btn">
            <Link tabIndex="99" to="/join" className="btn btn__cta">
              Apply to join
            </Link>
          </div>
          <Link
            tabIndex="100"
            to="/timetable"
            className="b-timeline__mars__timetable-link"
          >
            Or see some more events
          </Link>
          <img src={mars} alt="The red planet Mars" />
        </div>
      </section>
    </main>
  );
};
