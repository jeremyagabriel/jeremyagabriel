import React, { Component } from 'react';
import BattleshipPreview from '../images/battleship-preview.jpg'
import BattleshipGIF from '../images/battleshipgif.gif'
import DogTransparent from '../images/dog-transparent.png'
import { NavLink, Link } from 'react-router-dom'
import '../App.css';

const Projects = props => {
  return(
    <>
    <h6 id="projectsTitle">Projects.</h6>
      <div id="projectsContainer">
        <div className="project">
          <a className="projectLink" href="https://github.com/learn-academy-2020-bravo/battleship-jeremy-ruben-april" target="_blank" rel="noopener noreferrer">
            <img className="projectImage" alt="project1" src={BattleshipGIF} />
          </a>
          <div className="projectCaptionContainer">
            <a className="projectTitleLink" href="https://github.com/learn-academy-2020-bravo/battleship-jeremy-ruben-april" target="_blank" rel="noopener noreferrer"><h6 className="projectTitle">Battleship</h6></a>
            <p className="projectCaption">
              Built on React and using custom CSS... sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <a className="repo-link" href="https://github.com/learn-academy-2020-bravo/battleship-jeremy-ruben-april" target="_blank" rel="noopener noreferrer">View repo</a></p>
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
          <a href="" className="projectLink" target="_blank" rel="noopener noreferrer">
            <img className="projectImage" alt="project2" src="https://via.placeholder.com/600x400" />
          </a>
          <div className="projectCaptionContainer">
            <a className="projectTitleLink" href="" target="_blank" rel="noopener noreferrer"><h6 className="projectTitle">Capstone Project</h6></a>
            <p className="projectCaption">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. <a className="repo-link" href="https://github.com/learn-academy-2020-bravo/battleship-jeremy-ruben-april" target="_blank" rel="noopener noreferrer">View repo</a></p>
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
        <a href="" className="projectLink" target="_blank" rel="noopener noreferrer">
          <img className="projectImage" alt="project3" src="https://via.placeholder.com/600x400" />
        </a>
          <div className="projectCaptionContainer">
            <a className="projectTitleLink" href="" target="_blank" rel="noopener noreferrer"><h6 className="projectTitle">Cat Tinder</h6></a>
            <p className="projectCaption">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. <a className="repo-link" href="https://github.com/learn-academy-2020-bravo/battleship-jeremy-ruben-april" target="_blank" rel="noopener noreferrer">View repo</a></p>
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
        <a href="" className="projectLink" target="_blank" rel="noopener noreferrer">
          <img className="projectImage" alt="project4" src="https://via.placeholder.com/600x400" />
        </a>
          <div className="projectCaptionContainer">
            <a className="projectTitleLink" href="" target="_blank" rel="noopener noreferrer"><h6 className="projectTitle">Tic Tac Toe</h6></a>
            <p className="projectCaption">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. <a className="repo-link" href="https://github.com/learn-academy-2020-bravo/battleship-jeremy-ruben-april" target="_blank" rel="noopener noreferrer">View repo</a></p>
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
