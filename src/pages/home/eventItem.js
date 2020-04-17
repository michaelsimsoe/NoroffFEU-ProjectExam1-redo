import React from 'react';
import { Link } from 'react-router-dom';

export const EventItem = ({ item, side, index }) => {
  const identifier = item.isHistoryEvent ? 'h' + item.id : item.flight_number;
  return (
    <article
      className={
        'b-timeline__item ' +
        (item.isHistoryEvent
          ? `b-timeline__item__event b-timeline__item__event-${side}`
          : 'b-timeline__item__launch')
      }
    >
      {item.isLaunch ? (
        <div className="b-timeline__item__launch-true">
          <h3>LAUNCH</h3>
        </div>
      ) : (
        ''
      )}
      <div className="b-timeline__item__content">
        <h2 className="b-timeline__item__date">
          <time dateTime={item.dateTime}>{item.dateString}</time>
        </h2>
        <h3 className="b-timeline__item__title">{item.title}</h3>
        {item.text ? (
          <p className="b-timeline__item__text">{limitTextTo140`${item.text}`}</p>
        ) : (
          ''
        )}
        <Link
          to={`single/${identifier}`}
          tabIndex={index === 4 ? '7' : ''}
          className="btn btn__cta b-timeline__item__btn"
        >
          Read More
        </Link>
      </div>
    </article>
  );
};

function limitTextTo140(string, text) {
  if (text.length < 70) {
    return text;
  } else {
    return text.substring(0, 67) + '...';
  }
}
