import React, { useState, useEffect, createRef } from 'react';
import Home from './components/Home'
import Header from './components/Header'
import Contact from './components/Contact'
import Battleship from './game/Battleship'
import Resume from './components/Resume'
import { Switch, Route } from 'react-router-dom'
import GitHubLogo from './images/GitHub-Logo.png'
import GitHubLogoBlack from './images/GitHub-Logo-Black.png'
import LinkedInLogo from './images/LinkedIn-Logo.png'
import LinkedInLogoBlack from './images/LinkedIn-Logo-Black.png'
import './App.css';

const App = (props) => {
  const [linkedInSrc, setlinkedInSrc] = useState(LinkedInLogo)
  const [gitHubSrc, setgitHubSrc] = useState(GitHubLogo)
  const [linkedInSrc2, setlinkedInSrc2] = useState(LinkedInLogo)
  const [gitHubSrc2, setgitHubSrc2] = useState(GitHubLogo)
  const [mainHeader, setMainHeader] = useState(true)
  const refContact = createRef()
  const refAbout = createRef()
  const refProjects = createRef()
  const refTop = createRef()

  const handleOnClickScrollAbout = (event) => {
    if(refAbout.current) {
      refAbout.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    }
  }

  const handleOnClickScrollProjects = (event) => {
    if(refProjects.current) {
      refProjects.current.scrollIntoView({ behavior: "smooth", block: "start"
      })
    }
  }

  const handleOnClickScrollContact = (event) => {
    if(refContact.current) {
      refContact.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const handleOnClickScrollTop = (event) => {
    if(refTop.current) {
      refTop.current.scrollIntoView({ behavior: "smooth", block: "start"
      })
    }
  }
  const handleMouseOverLinkedIn = () => setlinkedInSrc(LinkedInLogoBlack)
  const handleMouseOutLinkedIn = () => setlinkedInSrc(LinkedInLogo)
  const handleMouseOverGitHub = () => setgitHubSrc(GitHubLogoBlack)
  const handleMouseOutGitHub = () => setgitHubSrc(GitHubLogo)
  const handleMouseOverLinkedIn2 = () => setlinkedInSrc2(LinkedInLogoBlack)
  const handleMouseOutLinkedIn2 = () => setlinkedInSrc2(LinkedInLogo)
  const handleMouseOverGitHub2 = () => setgitHubSrc2(GitHubLogoBlack)
  const handleMouseOutGitHub2 = () => setgitHubSrc2(GitHubLogo)

  const onHomePageHeader = (value) => {
    setMainHeader(value)
  }

  return(
    <>
      <div className="app">
        <div ref={refTop}>
          <Header
            handleOnClickScrollContact = {handleOnClickScrollContact}
            handleOnClickScrollAbout = {handleOnClickScrollAbout}
            handleOnClickScrollProjects = {handleOnClickScrollProjects}
            handleMouseOverLinkedIn = {handleMouseOverLinkedIn}
            handleMouseOutLinkedIn = {handleMouseOutLinkedIn}
            handleMouseOverGitHub = {handleMouseOverGitHub}
            handleMouseOutGitHub = {handleMouseOutGitHub}
            handleOnClickScrollTop = {handleOnClickScrollTop}
            linkedInSrc = {linkedInSrc}
            gitHubSrc = {gitHubSrc}
            mainHeader={mainHeader}
          />
        </div>

        <Switch>
          <Route exact path='/' render={(props) => <Home refAbout = {refAbout} refProjects = {refProjects} onHomePageHeader={onHomePageHeader} mainHeader={mainHeader} />} />
          <Route exact path='/battleship' render={(props) => <Battleship onHomePageHeader={onHomePageHeader} mainHeader={mainHeader} />} />
          <Route exact path='/resume' render={(props) => <Resume onHomePageHeader={onHomePageHeader} mainHeader={mainHeader} />} />
        </Switch>

        <div id="contact" ref={refContact}>
          <Contact
            handleOnClickScrollContact = {handleOnClickScrollContact}
            handleOnClickScrollAbout = {handleOnClickScrollAbout}
            handleOnClickScrollProjects = {handleOnClickScrollProjects}
            handleMouseOverLinkedIn = {handleMouseOverLinkedIn2}
            handleMouseOutLinkedIn = {handleMouseOutLinkedIn2}
            handleMouseOverGitHub = {handleMouseOverGitHub2}
            handleMouseOutGitHub = {handleMouseOutGitHub2}
            handleOnClickScrollTop = {handleOnClickScrollTop}
            linkedInSrc = {linkedInSrc2}
            gitHubSrc = {gitHubSrc2}
          />
        </div>
        <footer>
          <p>Developed in React <span style={{color:"rgb(252,87,67)"}}>|</span> Designed with custom CSS <span style={{color:"rgb(252,87,67)"}}>|</span> Illustrated with an Apple Pencil <span style={{color:"rgb(252,87,67)"}}>|</span> Made with love, Jeremy Gabriel &copy;2020</p>
        </footer>
      </div>
    </>
  )
}

export default App;
