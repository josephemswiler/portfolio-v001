import React, { Component } from 'react';

export default class server-monster extends Component {
  render() {
    return (
      <div className="server-monster">
        { this.props.children }
      </div>
    )
  }
}
