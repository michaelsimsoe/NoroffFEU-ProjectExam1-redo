import React, { useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
  getSingleLaunchEvent,
  getSingleHistoricalEvent,
} from '../../actions/index';
import rocket from './falcon-500.webp';
import { EventLinks } from './eventLinks';

export const SingleEvent = (params) => {
  const state = useSelector((state) => state);
  const location = useLocation();
  const dispatch = useDispatch();
  const { id } = useParams();
  const typeOfEvent = id.split('').includes('h') ? 'historical' : 'launch';
  const identifier = id.match(/(\d+)/)[0];
  const fromTimetable = location.search.includes('timetable');

  useEffect(() => {
    if (typeOfEvent === 'historical') {
      dispatch(getSingleHistoricalEvent(identifier));
    } else {
      dispatch(getSingleLaunchEvent(identifier));
    }
    // eslint-disable-next-line
  }, []);

  const event = state.events.singleEvent ? state.events.singleEvent : '';

  const eventLinks =
    event &&
    (event.launch?.launch_links.article_link ||
      event.launch_links ||
      event.links);

  const launcSuccesClass = `b-single__body__launch-information__status b-single__body__launch-information__status-' +
      ${
        event.isLaunch && (event.launch_success || event.launch.launch_success)
          ? 'successful'
          : 'not-successful'
      }`;
  return (
    <main className="o-single-container" id="maincontent">
      <article className="b-single">
        <figure className="b-single__rocket-img">
          <img src={rocket} alt="A large Falcon Heavy rocket" />
        </figure>
        <div className="b-single__event">
          <nav className="b-single__event__nav">
            <Link
              className="b-single__event__nav__item"
              to={fromTimetable ? '/timetable' : '/'}
            >
              Back to the timeline
            </Link>
          </nav>
          <header className="b-single__header">
            {event.isLaunch ? (
              <div className="b-single__launch-true">
                <h3>LAUNCH</h3>
              </div>
            ) : (
              ''
            )}
            <div>
              <h2 className="b-single__header__event-title">{event.title}</h2>
              <h3 className="b-single__header__event-date">{event.date}</h3>
            </div>
          </header>
          <section className="b-single__body">
            <p className="b-single__body__text">{event.details}</p>
            <table className="b-single__body__links-table">
              <thead>
                <tr>
                  <th colSpan="2">Links</th>
                </tr>
              </thead>
              <tbody>
                {state.events.singleEvent &&
                  Object.keys(event.links).map((link) => {
                    if (
                      event.links[link] !== null &&
                      event.links[link].length > 0 &&
                      formatLinkTitles(link)
                    ) {
                      return (
                        <tr key={link}>
                          <td>
                            <a href={event.links[link]}>
                              Article on {formatLinkTitles(link)}
                            </a>
                          </td>
                        </tr>
                      );
                    }
                    return null;
                  })}
              </tbody>
            </table>
            {event.isLaunch ? (
              <section className="b-single__body__launch-information">
                <h3 className="b-single__body__launch-information__heading">
                  Launch Information
                </h3>
                <h4 className={launcSuccesClass}>
                  This launch was{' '}
                  {event.launch_success || event.launch.launch_success
                    ? 'successful'
                    : 'not successful'}
                </h4>
                <p className="b-single__body__launch-information__name">
                  <span>Mission name:</span>{' '}
                  {event.mission_name || event.launch.mission_name}
                </p>
                <p className="b-single__body__launch-information__site">
                  <span>Launch site:</span>{' '}
                  {event.launch_site || event.launch.launch_site}
                </p>
                {eventLinks && <EventLinks event={event} />}
              </section>
            ) : (
              ''
            )}
          </section>
        </div>
      </article>
    </main>
  );
};

function formatLinkTitles(link) {
  var linkTitle;
  switch (link) {
    case 'mission_patch':
      linkTitle = 'Mission Patch';
      break;
    case 'mission_patch_small':
      linkTitle = 'The small Mission';
      break;
    case 'reddit_campaign':
      linkTitle = 'The Reddit Campaign';
      break;
    case 'reddit_launch':
      linkTitle = 'The Reddit Launch';
      break;
    case 'reddit_recovery':
      linkTitle = 'The Reddit Recovery';
      break;
    case 'reddit_media':
      linkTitle = 'The Reddit Media';
      break;
    case 'presskit':
      linkTitle = 'The Presskit';
      break;
    case 'article_link':
      linkTitle = 'The SpaceX article';
      break;
    case 'wikipedia':
      linkTitle = 'The Wikipedia article';
      break;
    case 'video_link':
      linkTitle = 'The Youtube Video';
      break;
    case 'flickr_images':
      linkTitle = false;
      break;
    default:
      break;
  }
  return linkTitle;
}
