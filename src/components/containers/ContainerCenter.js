import React, { Component } from 'react'

export default class ContainerCenter extends Component {
  constructor (props) {
    super(props)
    
    this.state = {}
  }

  styles = () => ({
    container: {
      backgroundColor: this.props.color,
      height: '100%',
      width: '100%'
    }
  })

  render () {
    return (
      <div style={this.styles().container}>
        Center
      </div>
    )
  }
}
