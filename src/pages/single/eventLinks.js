import React from 'react';

export const EventLinks = ({ event }) => {
  return (
    <>
      <a
        className="b-single__body__launch-information__wiki-link"
        href={
          event.launch.launch_links.article_link ||
          event.launch_links.article_link
        }
      >
        Read about it on Wikipedia
      </a>
      <a
        className="b-single__body__launch-information__video"
        href={
          event.launch.launch_links.video_link || event.launch_links.video_link
        }
      >
        See the launch video on Youtube
      </a>
    </>
  );
};
