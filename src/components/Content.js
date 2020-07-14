import React, { Component } from 'react';
import HTMLLogo from '../images/HTML-Logo.png'
import CSSLogo from '../images/CSS-Logo.png'
import JSLogo from '../images/JS-Logo.png'
import ReactLogo from '../images/React-Logo.png'
import RubyLogo from '../images/Ruby-Logo.png'
import RubyOnRailsLogo from '../images/RubyOnRails-Logo.png'
import SQLLogo from '../images/SQL-Logo.png'
import PhotoshopLogo from '../images/Photoshop-Logo.png'
import IllustratorLogo from '../images/Illustrator-Logo.png'
import DigitalIllustrationsLogo from '../images/Digital-Illustrations-Logo.png'
import '../styles/Content.css';

const Content = props => {
  return(
    <>
      <div id="contentContainer">
        <div id="contentBody">
          {/*<img id="jeremyComputer" alt="jeremyAtComputer" src={JeremyComputer} />*/}
          <div id="logoContainer">
            <div id="language-wrapper">
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
                  <label>JavaScript</label>
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
            </div>
            <div id="frameworks-design-wrapper">
              <h3 className="contentTitles">Frameworks / Libraries.</h3>
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

              <h3 className="contentTitles design">Design.</h3>
              <div id="design">
                <div className="logoWithLabel">
                  <img className="logo" alt="PhotoshopLogo" src={PhotoshopLogo} />
                  <label>Photoshop</label>
                </div>
                <div className="logoWithLabel">
                  <img className="logo" alt="IllustratorLogo" src={IllustratorLogo} />
                  <label>Illustrator</label>
                </div>
                <div className="logoWithLabel">
                  <img className="logo" alt="DigIllustrationsLogo" src={DigitalIllustrationsLogo} />
                  <label>Digital Illustration</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Content;
