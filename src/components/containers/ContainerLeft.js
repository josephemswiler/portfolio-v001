import React, { Component } from 'react';

export default class ContainerLeft extends Component {
  render() {
    return (
      <div className="containerleft">
        { this.props.children }
      </div>
    )
  }
}
