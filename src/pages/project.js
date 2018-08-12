import React, { Component } from 'react';

export default class project extends Component {
  render() {
    return (
      <div className="project">
        { this.props.children }
      </div>
    )
  }
}
