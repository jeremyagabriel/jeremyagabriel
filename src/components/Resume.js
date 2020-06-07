import React, { useEffect } from 'react'
import '../App.css'

const Resume = props => {
  const onHomePageHeaderToApp = () => {
    props.onHomePageHeader(false)
  }

  useEffect(() => {
    onHomePageHeaderToApp()
  })

  console.log("mainHeader for Resume?:", props.mainHeader)

  return(
    <>
      <div className="resume-iframe-wrapper">
        <iframe src="https://www.keepandshare.com/doc25/109948/2873414?da=y&ifr=y" width="900" height="700" scrolling="yes" frameborder="1"></iframe>
      </div>
    </>
  )
}

export default Resume
