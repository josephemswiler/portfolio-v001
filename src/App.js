import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootswatch/dist/materia/bootstrap.css'
import NavTop from './components/elements/NavTop'
import NavBottom from './components/elements/NavBottom'
import Home from './pages/Home'

export default class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <NavTop />
          <Switch>
            <Route path='/portfolio-v001/' component={Home} />
          </Switch>
          <NavBottom />
        </div>
      </Router>
    )
  }
}
