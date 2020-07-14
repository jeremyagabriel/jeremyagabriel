import React, { useEffect } from 'react'
import '../App.css'

const Resume = props => {
  const onHomePageHeaderToApp = () => {
    props.onHomePageHeader(false)
  }

  useEffect(() => {
    onHomePageHeaderToApp()
  })

  return(
    <>
      <div className="resume-iframe-wrapper">
        <iframe src="https://www.keepandshare.com/doc25/110076/2873414?da=y&ifr=y" scrolling="yes" frameborder="1"></iframe>
      </div>
    </>
  )
}

export default Resume
