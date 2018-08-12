import React, { Component } from 'react';

export default class ContainerCenter extends Component {
  render() {
    return (
      <div className="containercenter">
        { this.props.children }
      </div>
    )
  }
}
