import React, { Component, useState, useEffect } from 'react';
import Home from './components/Home'
import Main from './components/Main'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import './App.css';

const App = (props) => {
  const [headerType, setHeaderType] = useState(true)

  return(
    <>
      <div className="app">
        <Main
        />
        <footer>
          <p>Developed in React <span style={{color:"rgb(252,87,67)"}}>|</span> Designed with custom CSS <span style={{color:"rgb(252,87,67)"}}>|</span> Illustrated with an Apple Pencil <span style={{color:"rgb(252,87,67)"}}>|</span> Made with love, Jeremy Gabriel &copy;2020</p>
        </footer>
      </div>
    </>
  )
}

export default App;
