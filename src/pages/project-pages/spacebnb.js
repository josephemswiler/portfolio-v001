import React, { Component } from 'react';

export default class spacebnb extends Component {
  render() {
    return (
      <div className="spacebnb">
        { this.props.children }
      </div>
    )
  }
}
