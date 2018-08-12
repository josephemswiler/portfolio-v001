import React, { Component } from 'react';

export default class found extends Component {
  render() {
    return (
      <div className="found">
        { this.props.children }
      </div>
    )
  }
}
