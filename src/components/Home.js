import React, { Component, useState, useEffect, createRef } from 'react';
import About from '../components/About'
import Main from '../components/Main'
import Contact from '../components/Contact'
import Header from '../components/Header'
import HeaderScrolled from '../components/HeaderScrolled'
import Projects from '../components/Projects'
import Content from '../components/Content'
import GitHubLogo from '../images/GitHub-Logo.png'
import GitHubLogoBlack from '../images/GitHub-Logo-Black.png'
import LinkedInLogo from '../images/LinkedIn-Logo.png'
import LinkedInLogoBlack from '../images/LinkedIn-Logo-Black.png'
import '../App.css';

const Home = props => {
  const [linkedInSrc, setlinkedInSrc] = useState(LinkedInLogo)
  const [gitHubSrc, setgitHubSrc] = useState(GitHubLogo)
  const scrollToContact = createRef()
  const scrollToAbout = createRef()
  const scrollToProjects = createRef()
  const scrollToTop = createRef()

  const handleOnClickScrollAbout = (event) => {
    if(scrollToAbout.current) {
      scrollToAbout.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    }
  }

  const handleOnClickScrollProjects = (event) => {
    if(scrollToProjects.current) {
      scrollToProjects.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    }
  }

  const handleOnClickScrollContact = (event) => {
    if(scrollToContact.current) {
      scrollToContact.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    }
  }

  const handleOnClickScrollTop = (event) => {
    if(scrollToTop.current) {
      scrollToTop.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    }
  }
  const handleMouseOverLinkedIn = () => setlinkedInSrc(LinkedInLogoBlack)
  const handleMouseOutLinkedIn = () => setlinkedInSrc(LinkedInLogo)
  const handleMouseOverGitHub = () => setgitHubSrc(GitHubLogoBlack)
  const handleMouseOutGitHub = () => setgitHubSrc(GitHubLogo)

  return(
    <>
      <div ref={scrollToTop}>
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
        />
      </div>
      <div id="content">
        <Content />
        <div id="projects" ref={scrollToProjects}>
          <Projects id="projects"/>
        </div>
        <div id ="about" ref={scrollToAbout}>
          <About />
        </div>
      </div>
      <div id="contact" ref={scrollToContact}>
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

export default Home;
