import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { gethHistoricalEvents, getLauncEvents } from '../../actions/index';

import { HeroSection } from './heroSection';
import { EventItem } from './eventItem';
import { Timeline } from './timeline';

import { makeLaunchElement, makeHistoricalEvent } from '../../utils/events';

export const Home = () => {
  const state = useSelector((state) => state);
  const [timelineRef, setTimelineRef] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(gethHistoricalEvents());
    dispatch(getLauncEvents());
    // eslint-disable-next-line
  }, []);

  const events = () => {
    if (!state.events.historical || !state.events.launch) return;
    let side = 'left';
    const historicalEvents = state.events.historical.map((event) =>
      makeHistoricalEvent(event)
    );
    const launchEvents = state.events.launch.map((event) =>
      makeLaunchElement(event)
    );
    const eventArray = [...historicalEvents, ...launchEvents];
    const sorted = eventArray.sort((a, b) => (a.date > b.date ? 1 : -1));
    const newSorted = sorted.map((event, index) => {
      if (event.isHistoryEvent) {
        return (
          <EventItem
            key={'h' + event.id}
            item={event}
            side={side === 'left' ? (side = 'right') : (side = 'left')}
            index={index}
          />
        );
      }
      return (
        <EventItem
          key={event.flight_number}
          item={event}
          side={'right'}
          index={index}
        />
      );
    });

    return Array.from(newSorted);
  };

  const getRef = (ref) => {
    setTimelineRef(ref);
  };

  return (
    <>
      <p id="viewport">SPAN</p>
      <HeroSection timelineRef={timelineRef} />
      <Timeline getRef={getRef} events={state.events.launch ? events() : []} />
    </>
  );
};
