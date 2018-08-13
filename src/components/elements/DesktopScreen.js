import React, { Component } from 'react'
import Found from '../../assets/images/found-desktop-home.svg'
import Spacebnb from '../../assets/images/spacebnb-desktop-home.svg'
import Jello from '../../assets/images/jello-desktop-home.svg'

export default class DesktopScreen extends Component {
  constructor (props) {
    super(props)

    this.state = {
      src: null
    }
  }

  componentDidUpdate (prevProps) {
    if (prevProps.project !== this.props.project) {
      switch (this.props.project) {
        case 'Jello':
          this.setState({
            src: Jello
          })
          break
        case 'Spacebnb':
          this.setState({
            src: Spacebnb
          })
          break
        case 'Found':
          this.setState({
            src: Found
          })
          break
        default:
      }
    }
  }

  componentDidMount () {
    switch (this.props.project) {
      case 'Jello':
        this.setState({
          src: Jello
        })
        break
      case 'Spacebnb':
        this.setState({
          src: Spacebnb
        })
        break
      case 'Found':
        this.setState({
          src: Found
        })
        break
      default:
    }
  }

  style = () => ({
    screen: {
      position: 'absolute',
      zIndex: -1,
      top: this.state.top,
      left: this.state.left,
      height: this.state.height
    },
    screenSVG: {
      position: 'absolute',
      zIndex: -1,
      top: 9,
      left: 15
    }
  })
  render () {
    return (
      <img
        style={this.style().screenSVG}
        src={this.state.src}
        alt='a desktop screenshot'
      />
    )
  }
}
