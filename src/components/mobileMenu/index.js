import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { scrollStoryMobileMenu } from '../../utils/scrollStoryEvents';

export const MobileMenu = () => {
  const mobileMenuRef = useRef();
  const mobileMenuInitLogoRef = useRef();
  const activeMobileLinkRef = useRef();
  const scrollEvent = (event) => {
    scrollStoryMobileMenu({
      mobileMenu: mobileMenuRef.current,
      mobileMenuInitLogo: mobileMenuInitLogoRef.current,
      activeMobileLink: activeMobileLinkRef.current,
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollEvent, false);

    return function cleanup() {
      window.removeEventListener('scroll', scrollEvent, false);
    };
  }, []);
  return (
    <nav ref={mobileMenuRef} className="b-mobile-menu b-mobile--init">
      <div className="b-mobile-menu__main-logo">
        <Link to="/" className="">
          <h1
            ref={mobileMenuInitLogoRef}
            className="b-mobile-menu__main-logo--init"
          >
            <span className="b-mobile-menu__main-logo__space">Space</span>
            <span className="b-mobile-menu__main-logo__x">X</span>
            <span className="b-mobile-menu__main-logo__time"> Timeline</span>
          </h1>
        </Link>
      </div>
      <Link
        ref={activeMobileLinkRef}
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
