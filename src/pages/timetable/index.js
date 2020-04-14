import React from 'react';

export const TimeTable = () => {
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
              checked
            />
            <label for="show_history">Show historical events</label>
          </div>
          <div className="b-timetable__table-controll__group">
            <input
              type="checkbox"
              name="show_launches"
              id="show_launches"
              checked
            />
            <label for="show_launches">Show launches</label>
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
            <tbody className="b-timetable__timetable__body"></tbody>
          </table>
        </div>
      </article>
    </main>
  );
};
