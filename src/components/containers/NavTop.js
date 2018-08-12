import React, { Component } from 'react';

export default class NavTop extends Component {
  render() {
    return (
      <div className="navtop">
        { this.props.children }
      </div>
    )
  }
}
