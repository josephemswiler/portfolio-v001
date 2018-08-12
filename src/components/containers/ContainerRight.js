import React, { Component } from 'react';

export default class ContainerRight extends Component {
  render() {
    return (
      <div className="containerright">
        { this.props.children }
      </div>
    )
  }
}
