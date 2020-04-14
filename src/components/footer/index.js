import React from 'react';
import { Link } from 'react-router-dom';
import facebookIcon from './svg/face.svg';
import instagramIcon from './svg/insta.svg';
import twittercon from './svg/twitter.svg';
import youtubeIcon from './svg/yt.svg';

export const Footer = () => {
  return (
    <>
     <footer className="b-footer">
    <nav className="b-footer__nav">

      <div className="b-footer__nav__links">
        <h3 className="b-footer__nav__links__heading">SpaceX Resources</h3>
        <a href="https://www.spacex.com/" className="b-footer__nav__links__link">SpaceX homepage</a>
        <a href="https://www.flickr.com/photos/spacex" className="b-footer__nav__links__link">SpaceX photos on Flicr</a>
        <a href="https://docs.spacexdata.com/?version=latest#9f1dfdc0-fbe8-4ae5-9209-7f3d649a627c" className="b-footer__nav__links__link">SpaceX API</a>
      </div>

      <div className="b-footer__nav__links">
        <h3 className="b-footer__nav__links__heading">Space Links</h3>
        <a href="https://www.nasa.gov/" className="b-footer__nav__links__link">NASAs home page</a>
        <a href="https://www.instagram.com/nasa/" className="b-footer__nav__links__link">NASAs Instagram site</a>
        <a href="https://spaceflightnow.com/launch-schedule/" className="b-footer__nav__links__link">Launch Schedule on Spaceflight Now</a>
      </div> 

      <div className="b-footer__nav__links">
        <h3 className="b-footer__nav__links__heading">Pages on this site</h3>
        <Link to="/" className="b-footer__nav__links__link">Main page</Link>
        <Link to="/timetable" className="b-footer__nav__links__link">Timeline Table</Link>
        <Link to="/single" className="b-footer__nav__links__link">Single Event (sample)</Link>
        <Link to="/join" className="b-footer__nav__links__link">Apply to join the Mars mission</Link>
      </div>
    </nav>
    <div className="b-footer__social-links">
      <a href="/" className="b-footer__social-links__link"><img src={facebookIcon} alt="Facebook icon" /></a>
      <a href="/" className="b-footer__social-links__link"><img src={twittercon} alt="Twitter icon" /></a>
      <a href="/" className="b-footer__social-links__link"><img src={instagramIcon} alt="Instagram icon" /></a>
      <a href="/" className="b-footer__social-links__link"><img src={youtubeIcon} alt="YouTube icon" /></a>
    </div>
    <div className="b-footer__information">
      <p>This site is made as an assignment in my frontend developer educations through <a href="https://www.noroff.no/">Noroff School of technology and digital media</a>. The information on this page is collected with the SpaceX API. The images and photos are from SpaceXs flicr account and <a href="https://pixabay.com/no/">pixabay.com</a></p>  
    </div>
  </footer>
 </>   
  )
}