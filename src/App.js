import React, { Component } from 'react'
import NavTop from './components/containers/NavTop'
import ContainerLeft from './components/containers/ContainerLeft'
import ContainerCenter from './components/containers/ContainerCenter'
import ContainerRight from './components/containers/ContainerRight'



export default class App extends Component {
  constructor (props) {
    super (props)
    
    this.state = {

    }
  }

  render () {
    return (
      <div>
        <NavTop />
        <ContainerLeft />
        <ContainerCenter />
        <ContainerRight />
      </div>
    )
  }
}
