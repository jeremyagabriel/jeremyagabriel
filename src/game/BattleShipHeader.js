import React, { Component, useState } from 'react';
import { NavLink, Link } from 'react-router-dom'
import '../game/Battleship.css';

const Header = props => {
  const handleOnClickScrollContactToApp = () => {
    props.handleOnClickScrollContact()
  }

  return(
    <>
      <header className="header" className={'header ${scrollStyle} ${shadowStyle}'}>
        <h2 id="headerTitle">Jeremy Gabriel</h2>
        <nav id="navbar">
          <NavLink className="navLinks" to='/'>Home</NavLink>
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
          <div id="contactButton" onClick={handleOnClickScrollContactToApp}>
            <Link className="contactLink">Contact</Link>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header;
