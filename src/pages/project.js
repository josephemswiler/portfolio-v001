import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Dutch from './project-pages/Dutch'
import Found from './project-pages/Found'
import Jello from './project-pages/Jello'
import Spacebnb from './project-pages/Spacebnb'

export default class Project extends Component {
  constructor (props) {
    super(props)
    
    this.state = {}
  }

  styles = () => ({
    wrapper: {}
  })

  render () {
    return (
      <div style={this.styles().wrapper}>
        {this.props.children}
      </div>
    )
  }
}
