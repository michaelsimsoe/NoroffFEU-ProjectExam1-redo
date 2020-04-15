import React, { useRef, useEffect } from 'react';

import { scrollStoryLaunchControll } from '../../utils/scrollStoryEvents';
import { scrollDown, countDown } from '../../utils/misc';

export const TakoffControll = () => {
  const launchControllRef = useRef();
  const scrollEvent = (event) => {
    scrollStoryLaunchControll({
      launchControll: launchControllRef.current,
    });
  };

  const handleClick = () => {
    var timer = document.querySelector('.b-takeoff__controll-timer__time');
    countDown(timer, 10);
    setTimeout(function () {
      scrollDown(200, 600);
    }, 1000);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollEvent, false);

    return function cleanup() {
      window.removeEventListener('scroll', scrollEvent, false);
    };
  }, []);
  return (
    <div
      ref={launchControllRef}
      className="b-takeoff__controll b-takeoff__controll-preparing"
    >
      <div className="b-takeoff__controll-title">
        <h3>Preparing for Launch</h3>
      </div>
      <div className="b-takeoff__controll-timer">
        <div className="b-takeoff__controll-timer__time">--:--</div>
      </div>
      <div className="b-takeoff__controll-btn">
        <button
          onClick={handleClick}
          tabIndex="6"
          id="launch_button"
          className="btn btn__cta b-takeoff__controll-btn__button b-takeoff__controll-btn__button-disabled"
        >
          Waiting
        </button>
      </div>
    </div>
  );
};
