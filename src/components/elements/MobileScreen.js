import React, { Component } from 'react'
import Found from '../../assets/images/found-mobile-home.svg'
import Spacebnb from '../../assets/images/spacebnb-mobile-home.svg'
import Jello from '../../assets/images/jello-mobile-home.svg'

export default class MobileScreen extends Component {
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
      zIndex: -1,
      top: 6,
      left: 15,
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
