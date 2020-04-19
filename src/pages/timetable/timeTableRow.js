import React from 'react';
import { Link } from 'react-router-dom';

export const TimeTableRow = ({ item, display }) => {
  return (
    <tr
      style={{
        display: display ? 'block' : 'none',
      }}
      className={
        'b-timetable__timetable__row ' +
        (item.isHistoryEvent
          ? item.isLaunch
            ? 'historical-event'
            : 'historical-event'
          : 'launch-event')
      }
    >
      <td>
        <time dateTime={item.dateTime}>{item.dateString}</time>
      </td>
      <td>
        {item.isHistoryEvent
          ? item.isLaunch
            ? 'Historical Event & Launch'
            : 'Historical Event'
          : 'Launch'}
      </td>
      <td>${item.title}</td>
      <td>
        <Link to={'/single/' + item.id + '?timetable'}>Read about event</Link>
      </td>
    </tr>
  );
};
