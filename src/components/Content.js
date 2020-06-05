import React, { Component } from 'react';
import HTMLLogo from '../images/HTML-Logo.png'
import CSSLogo from '../images/CSS-Logo.png'
import JSLogo from '../images/JS-Logo.png'
import ReactLogo from '../images/React-Logo.png'
import RubyLogo from '../images/Ruby-Logo.png'
import RubyOnRailsLogo from '../images/RubyOnRails-Logo.png'
import SQLLogo from '../images/SQL-Logo.png'
import '../App.css';

const Content = props => {
  return(
    <>
    <h4 id="headline">Full-Stack Software Developer based in San Diego.</h4>
      <div id="contentContainer">
        <div id="contentBody">
          {/*<img id="jeremyComputer" alt="jeremyAtComputer" src={JeremyComputer} />*/}
          <div id="logoContainer">
            <h3 className="contentTitles">Languages.</h3>
            <div id="languages">
              <div className="logoWithLabel">
                <img className="logo" alt="HTMLLogo" src={HTMLLogo} />
                <label>HTML</label>
              </div>
              <div className="logoWithLabel">
                <img className="logo" alt="CSSLogo" src={CSSLogo} />
                <label>CSS</label>
              </div>
              <div className="logoWithLabel">
                <img className="logo" alt="JSLogo" src={JSLogo} />
                <label>Javascript</label>
              </div>
              <div className="logoWithLabel">
                <img className="logo" alt="RubyLogo" src={RubyLogo} />
                <label>Ruby</label>
              </div>
              <div className="logoWithLabel">
                <img className="logo" alt="SQLLogo" src={SQLLogo} />
                <label>SQL</label>
              </div>
            </div>
            <h3 className="contentTitles">Frameworks.</h3>
            <div id="frameworks">
              <div className="logoWithLabel">
                <img className="logo" alt="ReactLogo" src={ReactLogo} />
                <label>React</label>
              </div>
              <div className="logoWithLabel">
                <img className="logo" alt="RubyOnRailsLogo" src={RubyOnRailsLogo} />
                <label>Ruby On Rails</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Content;
