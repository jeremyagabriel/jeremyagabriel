import React, { Component } from 'react';
import BattleshipPreview from '../images/battleship-preview.jpg'
import PortfolioPreview from '../images/portfolio-image.jpg'
import CatTinder from '../images/cat-tinder-preview.jpg'
import BattleshipGIF from '../images/battleshipgif.gif'
import CatTinderGIF from '../images/cat-tinder-gif.gif'
import AptFinder from '../images/micasa-preview-gif.gif'
import DogTransparent from '../images/dog-transparent.png'
import { NavLink, Link } from 'react-router-dom'
import '../styles/Projects.css';

const Projects = props => {
  return(
    <>
    <h6 id="projectsTitle">Projects.</h6>
      <div id="projectsContainer">
        <div className="project">
          <a className="projectLink" href="https://github.com/jeremyagabriel/jeremyagabriel/tree/master/src/game" target="_blank" rel="noopener noreferrer">
            <img className="projectImage" alt="battleship-repo" src={BattleshipGIF} />
          </a>
          <div className="projectCaptionContainer">
            <a className="projectTitleLink" href="https://github.com/jeremyagabriel/jeremyagabriel/tree/master/src/game" target="_blank" rel="noopener noreferrer"><h6 className="projectTitle">Battleship</h6></a>
            <p className="projectCaption">
              Built on React, this Battleship recreation required some big problem solving to figure out the logic of randomizing the ships, turning into one of my favorite recent projects. With the help of my illustrations and custom CSS styling, I was able to retheme it to be played directly on this site! <a className="repo-link" href="https://github.com/jeremyagabriel/jeremyagabriel/tree/master/src/game" target="_blank" rel="noopener noreferrer">View repo</a></p>
              <div className="tags-wrapper battleship">
                <div>
                  <span className="tag first">React</span>
                  <span className="tag">CSS</span>
                  <span className="tag">HTML</span>
                </div>
                <NavLink className="playLink" to='/battleship' target="_blank">
                  Click to Play Doggoship
                  <img className="dogTransparent" src={DogTransparent} />
                </NavLink>
              </div>
          </div>
        </div>
        <div className="project">
          <a href="https://github.com/learn-academy-2020-bravo/apartment-app-jeremyagabriel" className="projectLink" target="_blank" rel="noopener noreferrer">
            <img className="projectImage" alt="project2" src={AptFinder} />
          </a>
          <div className="projectCaptionContainer">
            <a className="projectTitleLink" href="https://github.com/learn-academy-2020-bravo/apartment-app-jeremyagabriel" target="_blank" rel="noopener noreferrer"><h6 className="projectTitle">Mi Casa <span style={{fontWeight: "300"}}>| Apartment Finder</span></h6></a>
            <p className="projectCaption">Full stack, React on Rails web application that allows users to create a profile, post, edit and delete a rental listing, and favorite other listings. I had a lot of fun building a favoriting system through the database and various API calls!  <a className="repo-link" href="https://github.com/learn-academy-2020-bravo/apartment-app-jeremyagabriel" target="_blank" rel="noopener noreferrer">View repo</a></p>
            <div className="tags-wrapper">
              <span className="tag first">React</span>
              <span className="tag">Ruby on Rails</span>
              <span className="tag">SQL</span>
              <span className="tag">CSS</span>
              <span className="tag">HTML</span>
            </div>
          </div>
        </div>
        <div className="project">
        <a href="https://github.com/learn-academy-2020-bravo/cat-tinder-fe-jeremy-ara/tree/master/cat-tinder-frontend" className="projectLink" target="_blank" rel="noopener noreferrer">
          <img className="projectImage" alt="cat-tinder-repo" src={CatTinderGIF} />
        </a>
          <div className="projectCaptionContainer">
            <a className="projectTitleLink" href="https://github.com/learn-academy-2020-bravo/cat-tinder-fe-jeremy-ara/tree/master/cat-tinder-frontend" target="_blank" rel="noopener noreferrer"><h6 className="projectTitle">Meowtch Maker <span style={{fontWeight: "300"}}>| Cat Tinder</span></h6></a>
              <p className="projectCaption">We were tasked to create Tinder, but for cats. Challege accepted! As my first full stack application, it was a momentous feat to build a user experience with full CRUD. I intend on keeping this a work in progress to continue adding more functionality, such as messaging other cats! <a className="repo-link" href="https://github.com/learn-academy-2020-bravo/cat-tinder-fe-jeremy-ara/tree/master/cat-tinder-frontend" target="_blank" rel="noopener noreferrer">View repo</a></p>
            <div className="tags-wrapper">
              <span className="tag first">React</span>
              <span className="tag">Ruby on Rails</span>
              <span className="tag">SQL</span>
              <span className="tag">CSS</span>
              <span className="tag">HTML</span>
            </div>
          </div>
        </div>
        <div className="project">
        <a href="https://github.com/jeremyagabriel/jeremyagabriel" className="projectLink" target="_blank" rel="noopener noreferrer">
          <img className="projectImage" alt="portfolio-project-repo" src={PortfolioPreview} />
        </a>
          <div className="projectCaptionContainer">
            <a className="projectTitleLink" href="https://github.com/jeremyagabriel/jeremyagabriel" target="_blank" rel="noopener noreferrer"><h6 className="projectTitle">this.Portfolio</h6></a>
            <p className="projectCaption">I challenged myself to make building my portfolio a React project in and of itself. By avoiding Bootstrap, I made it harder for myself but I ended up solidifying and expanding my understanding of vanilla CSS, flexbox, UI responsiveness across platforms, and various React logic and hooks. <a className="repo-link" href="https://github.com/jeremyagabriel/jeremyagabriel" target="_blank" rel="noopener noreferrer">View repo</a></p>
            <div className="tags-wrapper">
              <span className="tag first">React</span>
              <span className="tag">CSS</span>
              <span className="tag">HTML</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects;
