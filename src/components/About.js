import React, { useState } from 'react';
import Headshot from '../images/jeremy-headshot.png'
import H1 from '../images/h1.png'
import H1End from '../images/h1end.png'
import { NavLink } from 'react-router-dom'
import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'
import JeremyComputer from '../images/jeremy-at-computer.png'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import '../App.css'

const About = props => {
  const [openAboutModal, setOpenAboutModal] = useState(false)
  const [openAbout, setOpenAbout] = useState(false)

  const onOpenAbout = () => setOpenAbout(true)
  const onCloseAbout = () => setOpenAbout(false)

  const onOpenAboutModal = () => setOpenAboutModal(true)
  const onCloseAboutModal = () => setOpenAboutModal(false)

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
            <p id="aboutCopy">Project Manager turned Software Developer, and I'm here to stay, baby. As I live and dream code, I'm excited to utilize what I've learned and expand upon it every day with others in this community. Let's build some awesome things together, and maybe eat, cry, and celebrate along the way.</p>
            <div id="about-button-wrapper">
              <div className="about-buttons" style={{cursor:"pointer"}} onClick={onOpenAboutModal}>More About Me</div>
              <NavLink className="about-buttons" to='/resume' target="_blank">
                View Resumé
              </NavLink>
            </div>
          </div>
        </div>
        <Modal classNames={{overlay: 'customOverlay', modal: 'customModal'}} open={openAboutModal} onClose={onCloseAboutModal} center>
          <div className="modal-window-background">
          <div className="modal-window-background-half"></div>
          </div>
          <div className="modal-body">
            <img className="modal-image" src={JeremyComputer} />
            <div className="modal-copy">
              <h3 className="modal-title">A Little More About Me</h3>
              <p className="modal-text">Hi, I'm Jeremy Gabriel. Two first names, I know. I'm a recent graduate of LEARN Academy, a full-stack web development bootcamp in San Diego. Transitioning from several project manager roles before this, I’m finally able to take ownership of my own language skillsets that I once oversaw colleagues use in the past. Something something something...<br/><br/>
              <span className="modal-subtitle"><strong>Education.</strong></span><br/><br/>
              <strong>LEARN Academy</strong><br/>
              Full Stack Software Development Bootcamp<br/>
              2020
              <br/><br/>
              <strong>University of California, San Diego</strong><br/>
              Bachelors in Science, General Biology<br/>
              2011<br/><br/>
              <span className="modal-subtitle"><strong>Technical Skillsets.</strong></span><br/><br/>
              <span style={{color:'rgb(252,87,67)'}}>■</span> HTML & CSS<br/>
              <span style={{color:'rgb(252,87,67)'}}>■</span> Javascript and React<br/>
              <span style={{color:'rgb(252,87,67)'}}>■</span> Ruby and Ruby on Rails<br/>
              <span style={{color:'rgb(252,87,67)'}}>■</span> SQL<br/>
              <span style={{color:'rgb(252,87,67)'}}>■</span> Bootstrap<br/>
              <span style={{color:'rgb(252,87,67)'}}>■</span> Testing/Debugging (e.g. Jest, RSpec)<br/>
              <span style={{color:'rgb(252,87,67)'}}>■</span> Version Control (e.g. Git)<br/>
              <span style={{color:'rgb(252,87,67)'}}>■</span> Usability/Accessibility<br/><br/>
              <span className="modal-subtitle"><strong>Non-Technical Skillsets.</strong></span><br/><br/>
              <span style={{color:'rgb(252,87,67)'}}>■</span> Project Management<br/>
              <span style={{color:'rgb(252,87,67)'}}>■</span> QA Testing<br/>
              <span style={{color:'rgb(252,87,67)'}}>■</span> Adobe Creative Suite: Photoshop, Illustrator, InDesign, Premiere<br/>
              <span style={{color:'rgb(252,87,67)'}}>■</span> Digital Illustration
              </p>
              <NavLink className="about-buttons modal" to='/resume' target="_blank">
              View Resumé
              </NavLink>
            </div>
          </div>
        </Modal>
      </div>
    </>
  )
}

export default About;
