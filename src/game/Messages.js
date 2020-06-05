import React, { Component } from 'react'
import '../game/Battleship.css'
import { CSSTransitionGroup } from 'react-transition-group'

const Messages = props => {
  // Conditional rendering for different messages
  // const transitionStyle = {
  //   transitionName: "example",
  //   transitionEnterTimeout: 500,
  //   transitionLeaveTimeout: 500
  // }
  let message
  if (props.hitCounter === 0) {
    message = <span style={{fontWeight: 800}} key="winMessage">You found all the doggos!</span>
  } else if (props.torpCounter === 0 && props.hitCounter !== 0) {
    message = <span key="loseMessage">No more dog treats - try again!</span>
  } else if (props.sunk) {
    message = <span style={{fontWeight: 800}} key="foundFamilyMessage">You found a whole doggo family!</span>
  } else if (props.hit) {
    message = <span key="foundMessage">You found a doggo!</span>
  } else if (props.miss) {
    message = <span style={{fontWeight: 300}} key="missMessage">You wasted a treat!</span>
  }
  return(
    <>
      {/*<CSSTransitionGroup {...transitionStyle}>*/}
        { message }
      {/*</CSSTransitionGroup>*/}
    </>
  )
}
export default Messages
