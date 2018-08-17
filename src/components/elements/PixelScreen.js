import React, { Component } from 'react'
import Dutch from '../../assets/images/pixel-dutch.svg'

export default class PixelScreen extends Component {
  constructor (props) {
    super(props)

    this.state = {
      src: null
    }
  }

  componentDidUpdate (prevProps) {
    if (prevProps.project !== this.props.project) {
      this.selectProject()
    }
  }

  componentDidMount () {
    this.selectProject()
  }

  selectProject = () => {
    switch (this.props.project) {
      case 'Dutch':
        this.setState({
          src: Dutch
        })
        break
      default:
    }
  }

  style = () => ({
    screenSVG: {
      position: 'absolute',
      zIndex: 0,
      top: 20,
      left: 15
    }
  })

  render () {
    return (
      <img
        style={this.style().screenSVG}
        src={this.state.src}
        alt='a mobile screenshot'
      />
    )
  }
}
