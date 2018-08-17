import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootswatch/dist/materia/bootstrap.css'
import NavTop from './components/elements/NavTop'
import NavBottom from './components/elements/NavBottom'
import Home from './pages/Home'
import Projects from './pages/Projects'

export default class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <NavTop />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/projects' component={Projects} />
            <Route path='/projects/:id' component={Projects} />
          </Switch>
          <NavBottom />
        </div>
      </Router>
    )
  }
}
