import React, { Component } from 'react'

export default class ContainerRight extends Component {
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
