import React, { Component } from 'react';

export default class index extends Component {
  render() {
    return (
      <div className="index">
        { this.props.children }
      </div>
    )
  }
}
