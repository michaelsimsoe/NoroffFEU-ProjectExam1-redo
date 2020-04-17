import React, { useRef, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { scrollStoryHeader } from '../../utils/scrollStoryEvents';

export const Header = () => {
  const location = useLocation();
  const logoRef = useRef();
  const headerRef = useRef();
  const isHomePage = location.pathname === '/';
  const headeClasses = isHomePage ? 'b-header b-header--intro' : 'b-header';
  const headerLogoClasses = isHomePage
    ? 'b-header__main-logo b-header__main-logo--intro'
    : 'b-header__main-logo';

  const scrollEvent = (event) => {
    scrollStoryHeader({
      logo: logoRef.current,
      header: headerRef.current,
    });
  };

  useEffect(() => {
    if (isHomePage) {
      window.addEventListener('scroll', scrollEvent, false);
    }
    return function cleanup() {
      window.removeEventListener('scroll', scrollEvent, false);
    };
  }, [isHomePage]);

  return (
    <header ref={headerRef} className={headeClasses}>
      <div ref={logoRef} className={headerLogoClasses}>
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
        <NavLink
          exact={true}
          activeClassName="b-header__main-nav-item--active"
          tabIndex="3"
          to="/"
          className="b-header__main-nav-item"
        >
          Timeline
        </NavLink>
        <NavLink
          activeClassName="b-header__main-nav-item--active"
          tabIndex="4"
          to="/timetable"
          className="b-header__main-nav-item"
        >
          Timetable
        </NavLink>
        <NavLink
          activeClassName="b-header__main-nav-item--active"
          tabIndex="5"
          to="/join"
          className="b-header__main-nav-item"
        >
          Join us
        </NavLink>
      </nav>
    </header>
  );
};
