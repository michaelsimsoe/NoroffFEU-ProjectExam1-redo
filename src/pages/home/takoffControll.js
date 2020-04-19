import React, { useRef, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { scrollStoryLaunchControll } from '../../utils/scrollStoryEvents';
import { scrollDown, countDown } from '../../utils/misc';

export const TakoffControll = (props) => {
  const state = useSelector((state) => state);
  const [timeline, setTimeline] = useState(null);
  const launchControllRef = useRef();
  const launchControllBtnRef = useRef();
  const timerRef = useRef();
  const controllTitleRef = useRef();
  const scrollEvent = (event) => {
    scrollStoryLaunchControll({
      launchControll: launchControllRef.current,
    });
  };

  const handleClick = () => {
    if (!state.events.eventsLoaded || timeline === null) return;
    var timer = document.querySelector('.b-takeoff__controll-timer__time');
    countDown(timer, 4);
    setTimeout(function () {
      scrollDown(600, 600, timeline);
    }, 5000);
  };

  const errorFromApi = () => {
    controllTitleRef.current.innerHTML = 'ERROR from SERVER';
    timerRef.current.innerHTML = 'xx:xx';
    launchControllBtnRef.current.disabled = false;
    launchControllBtnRef.current.classList.remove(
      'b-takeoff__controll-btn__button-disabled'
    );
    launchControllBtnRef.current.innerHTML = 'Shut down';
  };

  const launchReady = () => {
    controllTitleRef.current.innerHTML = 'Ready to Launch';
    timerRef.current.innerHTML = '05:00';
    launchControllRef.current.classList.remove('b-takeoff__controll-preparing');
    launchControllBtnRef.current.classList.remove(
      'b-takeoff__controll-btn__button-disabled'
    );
    launchControllBtnRef.current.innerHTML = 'Launch';
  };

  useEffect(() => {
    if (props.timelineRef !== null) setTimeline(props.timelineRef.current);

    window.addEventListener('scroll', scrollEvent, false);
    if (state.events.eventsError) {
      errorFromApi();
    }

    if (state.events.eventsLoaded) {
      launchReady();
    }

    return function cleanup() {
      window.removeEventListener('scroll', scrollEvent, false);
    };
  }, [state.events.eventsError, state.events.eventsLoaded, props.timelineRef]);
  return (
    <div
      ref={launchControllRef}
      className="b-takeoff__controll b-takeoff__controll-preparing"
    >
      <div className="b-takeoff__controll-title">
        <h3 ref={controllTitleRef}>Preparing for Launch</h3>
      </div>
      <div className="b-takeoff__controll-timer">
        <div ref={timerRef} className="b-takeoff__controll-timer__time">
          --:--
        </div>
      </div>
      <div className="b-takeoff__controll-btn">
        <button
          ref={launchControllBtnRef}
          disabled={!state.events.eventsLoaded}
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
