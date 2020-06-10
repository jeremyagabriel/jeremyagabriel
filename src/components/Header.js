import React, { useState, useEffect, createRef } from 'react';
import { NavLink, Link } from 'react-router-dom'
import { CSSTransitionGroup } from 'react-transition-group'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import '../styles/Header.css';

const Header = (props) => {
  const [scrollHeader, setScrollHeader] = useState(false)
  const [headerStyle, setHeaderStyle] = useState("")

  const handleOnClickScrollContactToApp = () => props.handleOnClickScrollContact()
  const handleOnClickScrollAboutToApp = () => props.handleOnClickScrollAbout()
  const handleOnClickScrollProjectsToApp = () => props.handleOnClickScrollProjects()
  const handleOnClickScrollTopToApp = () => props.handleOnClickScrollTop()

  const transitionStyle = {
    transitionName: "example",
    transitionEnterTimeout: 100,
    transitionLeaveTimeout: 100
  }

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (currPos.y > prevPos.y && currPos.y < -50) {
        setScrollHeader(true)
        setHeaderStyle("scrolled")
      } else if (currPos.y < prevPos.y || currPos.y >= -50) {
        setScrollHeader(false)
        setHeaderStyle("")
      }
    }
  )

  return(
    <>
      <div className="header-top-position">
      <header className={`header ${headerStyle}`}>
        <Link className="app-title-link" onClick={handleOnClickScrollTopToApp}><h1 className={`app-title ${headerStyle}`}>Jeremy Gabriel</h1></Link>
        <nav className={`navbar ${headerStyle}`}>
          {props.mainHeader &&
            <Link className={`navLinksAbout ${headerStyle}`} onClick={handleOnClickScrollAboutToApp}>About</Link>
          }
          {props.mainHeader &&
            <Link className={`navLinks ${headerStyle}`} onClick={handleOnClickScrollProjectsToApp}>Projects</Link>
          }
          {props.mainHeader &&
            <NavLink className={`navLinks ${headerStyle}`} to='/battleship'>Play</NavLink>
          }
          {!props.mainHeader &&
            <NavLink className={`navLinks ${headerStyle}`} to='/'>Home</NavLink>
          }
          <a className={`navLogoLinks ${headerStyle}`} href="https://linkedin.com/in/jeremyagabriel" target="_blank" rel="noopener noreferrer">
            <img
              onMouseOver={props.handleMouseOverLinkedIn}
              onMouseOut={props.handleMouseOutLinkedIn}
              src={props.linkedInSrc}
              alt="LinkedInLogo"
              className={`navLogos ${headerStyle}`} /></a>
          <a className={`navLogoLinks ${headerStyle}`} href="https://github.com/jeremyagabriel" target="_blank" rel="noopener noreferrer">
            <img
              onMouseOver={props.handleMouseOverGitHub}
              onMouseOut={props.handleMouseOutGitHub}
              src={props.gitHubSrc}
              alt="GitHubLogo"
              className={`navLogos ${headerStyle}`} /></a>
          <div className={`contactButton ${headerStyle}`} onClick={handleOnClickScrollContactToApp}>
            <Link className={`contactLink ${headerStyle}`}>Contact</Link>
          </div>
        </nav>
      </header>
      </div>
    </>
  )
}

export default Header;
