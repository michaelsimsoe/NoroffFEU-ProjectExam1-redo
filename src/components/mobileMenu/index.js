import React from 'react';
import { Link } from 'react-router-dom';

export const MobileMenu = () => {
  return (
    <nav className="b-mobile-menu b-mobile--init">
      <div className="b-mobile-menu__main-logo">
        <Link to="/" className="">
          <h1 className="b-mobile-menu__main-logo--init">
            <span className="b-mobile-menu__main-logo__space">Space</span>
            <span className="b-mobile-menu__main-logo__x">X</span>
            <span className="b-mobile-menu__main-logo__time"> Timeline</span>
          </h1>
        </Link>
      </div>
      <Link
        to="/"
        className="b-mobile-menu__link b-mobile-menu__link--active b-mobile--init"
      >
        Timeline
      </Link>
      <Link to="/timetable" className="b-mobile-menu__link">
        Timetable
      </Link>
      <Link to="/join" className="b-mobile-menu__link">
        Join
      </Link>
    </nav>
  );
};
