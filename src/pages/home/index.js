import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { gethHistoricalEvents, getLauncEvents } from '../../actions/index';

import { HeroSection } from './heroSection';
import { EventItem } from './eventItem';
import { makeLaunchElement, makeHistoricalEvent } from '../../utils/events';
import { Timeline } from './timeline';

import scrollEvent from './scrollEvent';

export const Home = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(gethHistoricalEvents());
    dispatch(getLauncEvents());
    scrollEvent();
    // eslint-disable-next-line
  }, []);

  const events = () => {
    let side = 'left';
    const historicalEvents = state.events.historical?.map((event, index) => {
      return (
        <EventItem
          key={event.id}
          item={makeHistoricalEvent(event)}
          side={side === 'left' ? (side = 'right') : (side = 'left')}
          index={index}
        />
      );
    });
    const launchEvents = state.events.launch?.map((event, index) => {
      return (
        <EventItem
          key={event.id}
          item={makeLaunchElement(event)}
          side={'right'}
          index={index}
        />
      );
    });

    return [...historicalEvents, ...launchEvents];
  };

  return (
    <>
      <p id="viewport">SPAN</p>
      <HeroSection />
      <Timeline events={state.events.launch ? events() : []} />
    </>
  );
};
