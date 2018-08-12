import React, { Component } from 'react'
import ContainerLeft from '../components/containers/ContainerLeft'
import ContainerCenter from '../components/containers/ContainerCenter'
import ContainerRight from '../components/containers/ContainerRight'

export default class home extends Component {
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
        <ContainerLeft />
        <ContainerCenter />
        <ContainerRight />
      </div>
    )
  }
}
