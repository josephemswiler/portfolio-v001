import React, { Component } from 'react'
import Found from '../../assets/images/desktop-found.svg'
import Spacebnb from '../../assets/images/desktop-spacebnb.svg'
import Jello from '../../assets/images/desktop-jello.svg'

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
    screenSVG: {
      position: 'absolute',
      zIndex: 0,
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
