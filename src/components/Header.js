import React, { useState, useEffect, createRef } from 'react';
import { NavLink, Link } from 'react-router-dom'
import useDocumentScrollThrottled from '../components/useDocumentScrollThrottled'
import '../App.css';

const Header = (props) => {
  // const [shouldHideHeader, setShouldHideHeader] = useState(false)
  // const [shouldShowShadow, setShouldShowShadow] = useState(false)
  //
  // const MINIMUM_SCROLL = 80
  // const TIMEOUT_DELAY = 400
  //
  // useDocumentScrollThrottled(callbackData => {
  //   const { previousScrollTop, currentScrollTop } = callbackData;
  //   const isScrolledDown = previousScrollTop < currentScrollTop;
  //   const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;
  //
  //   setShouldShowShadow(currentScrollTop > 2)
  //
  //   setTimeout(() => {
  //     setShouldHideHeader(isScrolledDown && isMinimumScrolled);
  //   }, TIMEOUT_DELAY);
  // });
  //
  // const shadowStyle = shouldShowShadow ? 'shadow' : ''
  // const hiddenStyle = shouldHideHeader ? 'hidden' : ''

  const handleOnClickScrollContactToApp = () => {
    props.handleOnClickScrollContact()
  }
  const handleOnClickScrollAboutToApp = () => {
    props.handleOnClickScrollAbout()
  }
  const handleOnClickScrollProjectsToApp = () => {
    props.handleOnClickScrollProjects()
  }

   // ${shadowStyle} ${hiddenStyle}

  return(
    <>
      <header className="header">
        <h1 className="app-title">Jeremy Gabriel</h1>
        <nav className="navbar">

          <Link className="navLinksAbout" onClick={handleOnClickScrollAboutToApp}>About</Link>
          <Link className="navLinks" onClick={handleOnClickScrollProjectsToApp}>Projects</Link>
          <NavLink className="navLinks" to='/battleship'>Play</NavLink>
          <a className="navLogoLinks" href="https://linkedin.com/in/jeremyagabriel" target="_blank" rel="noopener noreferrer">
            <img
              onMouseOver={props.handleMouseOverLinkedIn}
              onMouseOut={props.handleMouseOutLinkedIn}
              src={props.linkedInSrc}
              alt="LinkedInLogo"
              className="navLogos" /></a>
          <a className="navLogoLinks" href="https://github.com/jeremyagabriel" target="_blank" rel="noopener noreferrer">
            <img
              onMouseOver={props.handleMouseOverGitHub}
              onMouseOut={props.handleMouseOutGitHub}
              src={props.gitHubSrc}
              alt="GitHubLogo"
              className="navLogos" /></a>
          <div className="contactButton" onClick={handleOnClickScrollContactToApp}>
            <Link className="contactLink">Contact</Link>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header;
