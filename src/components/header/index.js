import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const headeClasses = isHomePage ? 'b-header b-header--intro' : 'b-header';
  const headerLogoClasses = isHomePage
    ? 'b-header__main-logo b-header__main-logo--intro'
    : 'b-header__main-logo';
  return (
    <header className={headeClasses}>
      <div className={headerLogoClasses}>
        <Link tabIndex="2" to="/">
          <h1>
            <span className="b-header__main-logo__the">The</span>
            <span className="b-header__main-logo__space">
              Space<span className="b-header__main-logo__x">X</span>
            </span>
            <span className="b-header__main-logo__time">Timeline</span>
          </h1>
        </Link>
      </div>
      <nav className="b-header__main-nav">
        <Link
          tabIndex="3"
          to="/"
          className="b-header__main-nav-item b-header__main-nav-item--active"
        >
          Timeline
        </Link>
        <Link tabIndex="4" to="/timetable" className="b-header__main-nav-item">
          Timetable
        </Link>
        <Link tabIndex="5" to="/join" className="b-header__main-nav-item">
          Join us
        </Link>
      </nav>
    </header>
  );
};
