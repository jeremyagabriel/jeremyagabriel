import React, { useState } from 'react';
import Headshot from '../images/jeremy-headshot.png'
import H1 from '../images/h1.png'
import H1End from '../images/h1end.png'
import { NavLink } from 'react-router-dom'
import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'
import JeremyComputer from '../images/jeremy-at-computer.png'
import '../App.css';

const About = props => {
  const [openModal, setOpenModal] = useState(false)

  const onOpenModal = () => setOpenModal(true)

  const onCloseModal = () => setOpenModal(false)

  // <NavLink id="aboutButton" to='/about'>More About Me</NavLink>

  return(
    <>
      <div id="aboutContainer">
        <div id="aboutTitleContainer">
          <span className="h1"><img src={H1} alt="h1" id="h1Image" /></span>
          <h6 id="aboutTitle">Hello World.</h6>
          <span className="h1end"><img src={H1End} alt="h1close" id="h1EndImage" /></span>
        </div>
        <div id="aboutCopyContainer">
          <span id="headshotSpan"><img id="headshot" alt="headshot" src = { Headshot } /></span>
          <div id="aboutCopyWidth">
            <p id="aboutCopy">Project Manager turned Software Developer, and I'm here to stay, baby. As I live and dream code, I'm grateful to utilize what I've learned and expand upon it every day with others in this community. Let's build some awesome things together, and maybe grab some food along the way.</p>
            <div id="about-button-wrapper">
              <div className="about-buttons" style={{cursor:"pointer"}} onClick={onOpenModal}>More About Me</div>
              <div className="about-buttons" style={{cursor:"pointer"}} onClick={onOpenModal}>View Résumé</div>
            </div>
          </div>
        </div>

        <Modal open={openModal} onClose={onCloseModal} center>
          <div id="aboutPageBody">
            <img id="jeremyComputer" src={JeremyComputer} />
            <div id="aboutPageCopy">
              <h3 id="aboutPageTitle">A Little More About Me</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br/><br/>
              <span className="aboutPageSubtitle"><strong>Education.</strong></span><br/><br/>
              <strong>LEARN Academy</strong><br/>
              Full Stack Software Development Bootcamp<br/>
              2020
              <br/><br/>
              <strong>University of California, San Diego</strong><br/>
              Bachelors in Science, General Biology<br/>
              2011<br/><br/>
              <span className="aboutPageSubtitle"><strong>Extra Skillsets.</strong></span><br/><br/>
              <span style={{color:'rgb(252,87,67)'}}>■</span> Project Management<br/>
              <span style={{color:'rgb(252,87,67)'}}>■</span> QA Testing<br/>
              <span style={{color:'rgb(252,87,67)'}}>■</span> MacOS / Windows Proficiency<br/>
              <span style={{color:'rgb(252,87,67)'}}>■</span> Adobe Creative Suite: Photoshop, Illustrator, InDesign, Premiere<br/>
              <span style={{color:'rgb(252,87,67)'}}>■</span> Digital Illustration
              </p>
            </div>
          </div>
        </Modal>
      </div>
    </>
  )
}

export default About;
