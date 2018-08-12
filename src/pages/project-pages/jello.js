import React, { Component } from 'react'

export default class jello extends Component {
  render () {
    return (
      <div className='jello'>
        {this.props.children}
      </div>
    )
  }
}
