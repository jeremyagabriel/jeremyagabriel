import React from 'react';
import { Switch, Route } from 'react-router-dom'
// import Battleship from './components/Battleship'
import Battleship from '../game/Battleship'
import Home from '../components/Home'

const Main = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/battleship' component={Battleship}></Route>
    </Switch>
  )
}

export default Main;
