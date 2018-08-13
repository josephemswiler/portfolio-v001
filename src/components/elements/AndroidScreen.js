import React, { Component } from 'react';

export default class AndroidScreen extends Component {
  render() {
    return (
      <div className="androidscreen">
        { this.props.children }
      </div>
    )
  }
}
