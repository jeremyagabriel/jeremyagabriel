import React, { useEffect } from 'react';
import About from '../components/About'
import Projects from '../components/Projects'
import Content from '../components/Content'
import '../App.css';

const Home = props => {
  const onHomePageHeaderToApp = () => {
    props.onHomePageHeader(true)
  }

  useEffect(() => {
    onHomePageHeaderToApp()
    console.log("mainHeader for Home?:", props.mainHeader)
  })

  return(
    <>
      <h4 id="headline">Full-Stack Software Developer based in San Diego.</h4>
      <div id ="about" ref={props.refAbout}>
        <About />
      </div>
      <div id="projects" ref={props.refProjects}>
        <Projects id="projects"/>
      </div>
      <div id="content">
        <Content />
      </div>
    </>
  )
}

export default Home;
