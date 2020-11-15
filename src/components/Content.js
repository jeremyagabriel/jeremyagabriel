import React from 'react';
import HTMLLogo from '../images/HTML-Logo.png';
import CSSLogo from '../images/CSS-Logo.png';
import JSLogo from '../images/JS-Logo.png';
import ReactLogo from '../images/React-Logo.png';
import ReduxLogo from '../images/Redux-Logo.png';
import RubyLogo from '../images/Ruby-Logo.png';
import RubyOnRailsLogo from '../images/RubyOnRails-Logo.png';
import SQLLogo from '../images/SQL-Logo.png';
import PhotoshopLogo from '../images/Photoshop-Logo.png';
import IllustratorLogo from '../images/Illustrator-Logo.png';
import DigitalIllustrationsLogo from '../images/Digital-Illustrations-Logo.png';
import GraphQLLogo from '../images/Graphql-Logo.png';
import MongoDBLogo from '../images/MongoDB-Logo.png';
import NodejsLogo from '../images/Nodejs-Logo.png';
import PostgresqlLogo from '../images/Postgresql-Logo.png';
import '../styles/Content.css';

const Content = () => {
  return(
    <>
      <div id="contentContainer">
        <div id="contentBody">
          <div id="logoContainer">
            <div id="language-wrapper">
              <h3 className="contentTitles">Languages.</h3>
              <div id="languages">
                <div className="logoWithLabel">
                  <img className="logo" alt="HTML Logo" src={HTMLLogo} />
                  <label>HTML</label>
                </div>
                <div className="logoWithLabel">
                  <img className="logo" alt="CSS Logo" src={CSSLogo} />
                  <label>CSS</label>
                </div>
                <div className="logoWithLabel">
                  <img className="logo" alt="Javascript Logo" src={JSLogo} />
                  <label>JavaScript</label>
                </div>
                <div className="logoWithLabel">
                  <img className="logo" alt="Ruby Logo" src={RubyLogo} />
                  <label>Ruby</label>
                </div>
                <div className="logoWithLabel">
                  <img className="logo" alt="SQL Logo" src={SQLLogo} />
                  <label>SQL</label>
                </div>
              </div>

              <h3 className="contentTitles">Frontend.</h3>
              <div id="frontend">
                <div className="logoWithLabel">
                  <img className="logo" alt="React Logo" src={ReactLogo} />
                  <label>React & React Native</label>
                </div>
                <div className="logoWithLabel">
                  <img className="logo" alt="Redux Logo" src={ReduxLogo} />
                  <label>Redux</label>
                </div>
                <div className="logoWithLabel">
                  <img className="logo" alt="GraphQL Logo" src={GraphQLLogo} />
                  <label>GraphQL</label>
                </div>
              </div>
            </div>
            <div id="backend-design-wrapper">
              <h3 className="contentTitles">Backend.</h3>
              <div id="backend">
                <div className="logoWithLabel">
                  <img className="logo" alt="Ruby On Rails Logo" src={RubyOnRailsLogo} />
                  <label>Ruby On Rails</label>
                </div>
                <div className="logoWithLabel">
                  <img className="logo" alt="Node.js Logo" src={NodejsLogo} />
                  <label>Node.js</label>
                </div>
                <div className="logoWithLabel">
                  <img className="logo" alt="MongoDB Logo" src={MongoDBLogo} />
                  <label>MongoDB</label>
                </div>
                <div className="logoWithLabel">
                  <img className="logo" alt="PostgreSQL Logo" src={PostgresqlLogo} />
                  <label>PostgreSQL</label>
                </div>
              </div>

              <h3 className="contentTitles design">Design.</h3>
              <div id="design">
                <div className="logoWithLabel">
                  <img className="logo" alt="Photoshop Logo" src={PhotoshopLogo} />
                  <label>Photoshop</label>
                </div>
                <div className="logoWithLabel">
                  <img className="logo" alt="Illustrator Logo" src={IllustratorLogo} />
                  <label>Illustrator</label>
                </div>
                <div className="logoWithLabel">
                  <img className="logo" alt="Digital Illustrations Logo" src={DigitalIllustrationsLogo} />
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
