import React, { Component } from 'react'
import '../game/Battleship.css'

const Square = props => {
  const handleClickToApp = () => {
    props.handleClick(props.index)
  }
  return(
    <>
      <div
      id="square"
      onClick = { handleClickToApp} >
        <img src = { props.value } alt = "photos" className = "photos"/>
      </div>
    </>
  )
}
export default Square
