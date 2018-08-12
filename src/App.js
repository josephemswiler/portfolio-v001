import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootswatch/dist/materia/bootstrap.css'
import NavTop from './components/containers/NavTop'
import Home from './pages/Home'
import Project from './pages/Project'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  render () {
    return (
      <Router>
        <div>
          <NavTop />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/project' component={Project} />
            <Route exact path='/project/:id' component={Project} />
          </Switch>
        </div>
      </Router>
    )
  }
}
