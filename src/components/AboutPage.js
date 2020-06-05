import React, { useState, useEffect, createRef } from 'react';
import JeremyComputer from '../images/jeremy-at-computer.png'
import BattleshipHeader from '../game/BattleShipHeader.js'
import Contact from '../components/Contact.js'
import '../game/Battleship.css';
import GitHubLogo from '../images/GitHub-Logo.png'
import GitHubLogoBlack from '../images/GitHub-Logo-Black.png'
import LinkedInLogo from '../images/LinkedIn-Logo.png'
import LinkedInLogoBlack from '../images/LinkedIn-Logo-Black.png'

const AboutPage = props => {
  const [linkedInSrc, setlinkedInSrc] = useState(LinkedInLogo)
  const [gitHubSrc, setgitHubSrc] = useState(GitHubLogo)
  const scrollToContact = createRef()

  useEffect(() => window.scrollTo(0, 0))

  const handleOnClickScrollContact = (event) => {
    if(scrollToContact.current) {
      scrollToContact.current.scrollIntoView({ behavior: "smooth", block: "start"})
    }
  }
  const handleMouseOverLinkedIn = () => setlinkedInSrc(LinkedInLogoBlack)
  const handleMouseOutLinkedIn = () => setlinkedInSrc(LinkedInLogo)
  const handleMouseOverGitHub = () => setgitHubSrc(GitHubLogoBlack)
  const handleMouseOutGitHub = () => setgitHubSrc(GitHubLogo)

  return(
    <>
      <BattleshipHeader
        handleOnClickScrollContact = {handleOnClickScrollContact}
        handleMouseOverLinkedIn = {handleMouseOverLinkedIn}
        handleMouseOutLinkedIn = {handleMouseOutLinkedIn}
        handleMouseOverGitHub = {handleMouseOverGitHub}
        handleMouseOutGitHub = {handleMouseOutGitHub}
        linkedInSrc = {linkedInSrc}
        gitHubSrc = {gitHubSrc}
      />
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
          <span style={{color:'rgb(252,87,67)'}}>■</span> MacOS / Windows Proficiency<br/>
          <span style={{color:'rgb(252,87,67)'}}>■</span> Adobe Creative Suite: Photoshop, Illustrator, InDesign, Premiere<br/>
          <span style={{color:'rgb(252,87,67)'}}>■</span> Digital Illustration
          </p>
        </div>
      </div>
      <div ref={scrollToContact}>
        <Contact
          handleMouseOverLinkedIn = {handleMouseOverLinkedIn}
          handleMouseOutLinkedIn = {handleMouseOutLinkedIn}
          handleMouseOverGitHub = {handleMouseOverGitHub}
          handleMouseOutGitHub = {handleMouseOutGitHub}
          linkedInSrc = {linkedInSrc}
          gitHubSrc = {gitHubSrc}
        />
      </div>
    </>
  )
}

export default AboutPage
