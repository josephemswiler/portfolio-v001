import React, { Component } from 'react'
import Found from '../../assets/images/mobile-found.svg'
import Spacebnb from '../../assets/images/mobile-spacebnb.svg'
import Jello from '../../assets/images/mobile-jello.svg'
import Dutch from '../../assets/images/mobile-dutch.svg'

export default class MobileScreen extends Component {
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
      top: 6,
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
