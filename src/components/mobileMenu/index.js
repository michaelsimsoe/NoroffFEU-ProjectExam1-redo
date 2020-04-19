import React, { useRef, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { scrollStoryMobileMenu } from '../../utils/scrollStoryEvents';

export const MobileMenu = () => {
  const mobileMenuRef = useRef();
  const mobileMenuInitLogoRef = useRef();
  const activeMobileLinkRef = useRef();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const scrollEvent = (event) => {
    scrollStoryMobileMenu({
      mobileMenu: mobileMenuRef.current,
      mobileMenuInitLogo: mobileMenuInitLogoRef.current,
      activeMobileLink: activeMobileLinkRef.current,
    });
  };

  const headerLogoContainerClasses = isHomePage
    ? 'b-mobile-menu b-mobile--init'
    : 'b-mobile-menu';
  const headerLogoClasses = isHomePage ? 'b-mobile-menu__main-logo--init' : '';
  useEffect(() => {
    if (isHomePage) {
      window.addEventListener('scroll', scrollEvent, false);
    }
    return function cleanup() {
      window.removeEventListener('scroll', scrollEvent, false);
    };
  }, [isHomePage]);
  return (
    <nav ref={mobileMenuRef} className={headerLogoContainerClasses}>
      <div className="b-mobile-menu__main-logo">
        <Link to="/" className="">
          <h1 ref={mobileMenuInitLogoRef} className={headerLogoClasses}>
            <span className="b-mobile-menu__main-logo__space">Space</span>
            <span className="b-mobile-menu__main-logo__x">X</span>
            <span className="b-mobile-menu__main-logo__time"> Timeline</span>
          </h1>
        </Link>
      </div>
      <NavLink
        exact={true}
        ref={activeMobileLinkRef}
        to="/"
        activeClassName="b-mobile-menu__link--active"
        className="b-mobile-menu__link b-mobile--init"
      >
        Timeline
      </NavLink>
      <NavLink
        to="/timetable"
        activeClassName="b-mobile-menu__link--active"
        className="b-mobile-menu__link"
      >
        Timetable
      </NavLink>
      <NavLink
        to="/join"
        activeClassName="b-mobile-menu__link--active"
        className="b-mobile-menu__link"
      >
        Join
      </NavLink>
    </nav>
  );
};
