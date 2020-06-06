import React, { useState, useEffect, createRef } from 'react';
import { NavLink, Link } from 'react-router-dom'
import { CSSTransitionGroup } from 'react-transition-group'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import '../App.css';

const HeaderScrolled = (props) => {
  const [scrollHeader, setScrollHeader] = useState(false)
  const [headerStyle, setHeaderStyle] = useState("")

  const handleSlideIn = () => {
    setScrollHeader(true)
  }

  const handleSlideOut = () => {
    setScrollHeader(false)
  }

  const handleOnClickScrollContactToApp = () => { props.handleOnClickScrollContact() }
  const handleOnClickScrollAboutToApp = () => { props.handleOnClickScrollAbout() }
  const handleOnClickScrollProjectsToApp = () => { props.handleOnClickScrollProjects() }
  const handleOnClickScrollTopToApp = () => { props.handleOnClickScrollTop() }

  const transitionStyle = {
    transitionName: "example",
    transitionEnterTimeout: 100,
    transitionLeaveTimeout: 100
  }

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (currPos.y > prevPos.y && currPos.y < -100) {
        setScrollHeader(true)
        setHeaderStyle("scrolled")
      } else if (currPos.y < prevPos.y || currPos.y >= -100) {
        setScrollHeader(false)
        setHeaderStyle("")
      }
    }
  )

  return(
    <>
      <CSSTransitionGroup {...transitionStyle}>
        {scrollHeader &&
          <header className="header scrolled">
          <Link onClick={handleOnClickScrollTopToApp}><h1 className="app-title scrolled">Jeremy Gabriel</h1></Link>
            <nav className="navbar scrolled">

              <Link className="navLinksAbout scrolled" onClick={handleOnClickScrollAboutToApp}>About</Link>
              <Link className="navLinks scrolled" onClick={handleOnClickScrollProjectsToApp}>Projects</Link>
              <NavLink className="navLinks scrolled" to='/battleship'>Play</NavLink>
              <a className="navLogoLinks scrolled" href="https://linkedin.com/in/jeremyagabriel" target="_blank" rel="noopener noreferrer">
                <img
                  onMouseOver={props.handleMouseOverLinkedIn}
                  onMouseOut={props.handleMouseOutLinkedIn}
                  src={props.linkedInSrc}
                  alt="LinkedInLogo"
                  className="navLogos scrolled" /></a>
              <a className="navLogoLinks scrolled" href="https://github.com/jeremyagabriel" target="_blank" rel="noopener noreferrer">
                <img
                  onMouseOver={props.handleMouseOverGitHub}
                  onMouseOut={props.handleMouseOutGitHub}
                  src={props.gitHubSrc}
                  alt="GitHubLogo"
                  className="navLogos scrolled" /></a>
              <div className="contactButton scrolled" onClick={handleOnClickScrollContactToApp}>
                <Link className="contactLink scrolled">Contact</Link>
              </div>
            </nav>
          </header>
        }
      </CSSTransitionGroup>
    </>
  )
}

export default HeaderScrolled;
