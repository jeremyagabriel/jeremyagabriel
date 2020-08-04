import React, { useState } from 'react';
import Headshot from '../images/jeremy-headshot.png'
import H1 from '../images/h1.png'
import H1End from '../images/h1end.png'
import { NavLink } from 'react-router-dom'
import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'
import JeremyComputer from '../images/jeremy-at-computer.png'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import '../styles/About.css'

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
            <p id="aboutCopy">Project Manager turned Software Developer, and I'm here to stay, baby. As I live and dream programming, I'm powered by the love of efficient code through the lens of enjoyable, intuitive design. Let's build some awesome things together, and maybe eat, cry, and celebrate along the way.</p>
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
            <div className="modal-image"><img className="modal-image-tag" src={JeremyComputer} /></div>
            <div className="modal-copy">
              <h3 className="modal-title">A Little More About Me</h3>
              <p className="modal-text">Hi, I'm Jeremy Gabriel. Two first names, I know. I'm a recent graduate of LEARN Academy, a full-stack web development bootcamp in San Diego. Transitioning from several project manager roles before this, I’m finally able to take ownership of my own language skillsets that I once oversaw colleagues use in the past. I'm driven by the everyday challenges of building efficient, logical coding solutions, meanwhile creating enjoyable and intuitive user experiences through the lens of my design background.<br/><br/>
              <span className="modal-subtitle"><strong>Education.</strong></span><br/><br/>
              <strong>LEARN Academy</strong><br/>
              Full Stack Software Development Bootcamp | 2020<br/><br/>
              <strong>University of California, San Diego</strong><br/>
              Bachelor of Science, General Biology | 2011<br/><br/>
              <span className="modal-subtitle"><strong>Technical Skills.</strong></span><br/><br/>
              <span className="orange">■</span> HTML & CSS<br/>
              <span className="orange">■</span> Javascript and React, React Native<br/>
              <span className="orange">■</span> Ruby and Ruby on Rails<br/>
              <span className="orange">■</span> SQL and PostgreSQL<br/>
              <span className="orange">■</span> NoSQL and MongoDB<br/>
              <span className="orange">■</span> Testing/Debugging (e.g. Jest, RSpec)<br/>
              <span className="orange">■</span> Version Control (e.g. Git)<br/>
              <span className="orange">■</span> Bootstrap and Reactstrap<br/>
              <span className="orange">■</span> Usability/Accessibility<br/><br/>

              <span className="modal-subtitle"><strong>Non-Technical Skills.</strong></span><br/><br/>
              <span className="orange">■</span> Project Management<br/>
              <span className="orange">■</span> QA Testing<br/>
              <span className="orange">■</span> Adobe Creative Suite: Photoshop, Illustrator, InDesign, Premiere<br/>
              <span className="orange">■</span> Digital Illustration<br/><br/>

              <span className="modal-subtitle"><strong>Fundamental Skills.</strong></span><br/><br/>
              <span className="orange">■</span> Prioritization through always seeing bigger picture, and making decisions to get there more effectively<br/>
              <span className="orange">■</span> Adaptability within shifting project scopes, notably in startup environments<br/>
              <span className="orange">■</span> Listening to and seeing teammates, and supporting their value and input<br/>
              <span className="orange">■</span> Ability to pick up new tools and concepts easily<br/>
              <span className="orange">■</span> Self confident in own abilities and knows when to ask for help
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
