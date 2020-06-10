import React, { useState, useRef } from 'react';
import JeremyCartoon from '../images/jeremy-cartoon.png'
import '../styles/Contact.css';

const Contact = props => {
  const [copySuccess, setCopySuccess] = useState('Click to copy email')
  const [textToCopy, setTextToCopy] = useState("jeremyagabriel.dev@gmail.com")

  const copyToClipboard = (e) => {
    navigator.clipboard.writeText(textToCopy)
    setCopySuccess('Email copied!')
  }

  return(
    <>
      <div id="contactContainer">
        <div id="contactAssets">
          <span id="jeremyCartoonContainer">
            <img id="jeremyCartoon" alt="jeremyCartoon" src={ JeremyCartoon } />
          </span>

          <div id="contactCopy">
            <h3 id="contactTitle">Let's Build Together.</h3>
            <div id="email-wrapper">
              <div id="contactEmail" onClick={copyToClipboard}>jeremyagabriel.dev@gmail.com</div>
              <p id="copySuccess"> { copySuccess } </p>
            </div>
            <div id="contactLogoContainer">
              <a href="https://linkedin.com/in/jeremyagabriel" target="_blank" rel="noopener noreferrer" className="contactLinks">
                <img
                  onMouseOver={props.handleMouseOverLinkedIn}
                  onMouseOut={props.handleMouseOutLinkedIn}
                  src={props.linkedInSrc}
                  alt="LinkedInLogo"
                  className="contactLogos" /></a>
              <a href="https://github.com/jeremyagabriel" target="_blank" rel="noopener noreferrer" className="contactLinks">
                <img
                  onMouseOver={props.handleMouseOverGitHub}
                  onMouseOut={props.handleMouseOutGitHub}
                  src={props.gitHubSrc}
                  alt="GitHubLogo"
                  className="contactLogos" /></a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;
