import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import BowlerDetail from './BowlerDetail';
import Bowlers from './Bowlers';
import Records from './Records';
import About from './About';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/bowlers' component={Bowlers}/>
      <Route path='/detail' component={BowlerDetail}/>
      <Route path='/records' component={Records}/>
      <Route path='/about' component={About}/>
    </Switch>
  </main>
)

export default Main