import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { gethHistoricalEvents, getLauncEvents } from '../../actions/index';
import { makeLaunchElement, makeHistoricalEvent } from '../../utils/events';
import { TimeTableRow } from './timeTableRow';

export const TimeTable = () => {
  const [showHistory, setShowHistory] = useState(true);
  const [showLaunch, setShowLaunch] = useState(true);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(gethHistoricalEvents());
    dispatch(getLauncEvents());
    // eslint-disable-next-line
  }, []);

  const events = () => {
    const historicalEvents = state.events.historical?.map((event, index) => {
      return (
        <TimeTableRow
          display={showHistory}
          key={event.event_date_unix}
          item={makeHistoricalEvent(event)}
        />
      );
    });
    const launchEvents = state.events.launch?.map((event, index) => {
      return (
        <TimeTableRow
          display={showLaunch}
          key={event.flight_number}
          item={makeLaunchElement(event)}
        />
      );
    });

    return [...historicalEvents, ...launchEvents];
  };

  const toggleHistoricalEvents = () => {
    setShowHistory(!showHistory);
  };

  const toggleLaunchEvents = () => {
    setShowLaunch(!showLaunch);
  };
  return (
    <main className="o-timetable-container" id="maincontent">
      <article className="b-timetable">
        <header className="b-timetable__header">
          <h2 className="b-timetable__heading">The SpaceX Timetable</h2>
        </header>
        <section className="b-timetable__intro">
          <h3 className="b-timetable__intro__heading">
            All the important historical events and rocket launches by SpaceX
          </h3>
          <p className="b-timetable__intro__text">
            There is a link to more information on each event. The future events
            at the bottom of the table naturally has little information.
          </p>
        </section>
        <div className="b-timetable__table-controll">
          <div className="b-timetable__table-controll__group">
            <input
              type="checkbox"
              name="show_history"
              id="show_history"
              onClick={toggleHistoricalEvents}
              defaultChecked={true}
            />
            <label htmlFor="show_history">Show historical events</label>
          </div>
          <div className="b-timetable__table-controll__group">
            <input
              type="checkbox"
              name="show_launches"
              id="show_launches"
              onClick={toggleLaunchEvents}
              defaultChecked={true}
            />
            <label htmlFor="show_launches">Show launches</label>
          </div>
        </div>
        <div className="b-timetable__table-container">
          <table className="b-timetable__timetable">
            <thead className="b-timetable__timetable__head">
              <tr>
                <th>Date</th>
                <th>Type of event</th>
                <th>Title</th>
                <th>Link to event</th>
              </tr>
            </thead>
            <tbody className="b-timetable__timetable__body">
              {state.events.launch ? events() : []}
            </tbody>
          </table>
        </div>
      </article>
    </main>
  );
};
