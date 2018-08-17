import React, { Component } from 'react'
import { Tooltip } from 'reactstrap'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, fab)

export default class NavBottom extends Component {
  constructor (props) {
    super(props)

    this.state = {
      tooltipOpen: false,
      gitHubColor: '#ccc',
      linkedInColor: '#ccc',
      emailColor: '#ccc',
      width: window.innerWidth
    }
  }

  componentDidMount () {
    window.addEventListener('resize', this.windowResize)
  }

  windowResize = () => {
    this.setState({
      width: window.innerWidth
    })
  }

  tooltipToggle = () => {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    })
  }

  hoverGitHub = event => {
    switch (event.type) {
      case 'mouseenter':
        this.setState({
          gitHubColor: '#707070'
        })
        break
      case 'mouseleave':
        this.setState({
          gitHubColor: '#ccc'
        })
        break
      default:
    }
  }

  hoverLinkedIn = event => {
    switch (event.type) {
      case 'mouseenter':
        this.setState({
          linkedInColor: '#707070'
        })
        break
      case 'mouseleave':
        this.setState({
          linkedInColor: '#ccc'
        })
        break
      default:
    }
  }

  hoverEmail = event => {
    switch (event.type) {
      case 'mouseenter':
        this.setState({
          emailColor: '#707070'
        })
        break
      case 'mouseleave':
        this.setState({
          emailColor: '#ccc'
        })
        break
      default:
    }
  }

  style = () => ({
    container: {
      position: 'absolute',
      right: this.state.width < 768 || this.state.width > 1400 ? 0 : null,
      padding: 20,
      bottom: this.state.width > 767 ? 11 : null,
      top: this.state.width > 767 ? null : 11,
      zIndex: 1031
    },
    link: {
      margin: 15,
    },
    gitHub: {
      fontSize: 32,
      color: this.state.gitHubColor
    },
    linkedIn: {
      fontSize: 32,
      color: this.state.linkedInColor
    },
    email: {
      fontSize: 32,
      color: this.state.emailColor
    }
  })

  render () {
    return (
      <div style={this.style().container}>
        <a
          style={this.style().link}
          href='https://github.com/josephemswiler'
          target='_blank'
          rel="noopener noreferrer"
          onMouseEnter={this.hoverGitHub}
          onMouseLeave={this.hoverGitHub}
        >
          <FontAwesomeIcon
            style={this.style().gitHub}
            icon={['fab', 'github']}
          />
        </a>

        <a
          style={this.style().link}
          href='https://www.linkedin.com/in/josephemswiler/'
          target='_blank'
          rel="noopener noreferrer"
          onMouseEnter={this.hoverLinkedIn}
          onMouseLeave={this.hoverLinkedIn}
        >
          <FontAwesomeIcon
            style={this.style().linkedIn}
            icon={['fab', 'linkedin']}
          />
        </a>
        <a
          style={this.style().link}
          href='mailto:josephemswiler@gmail.com'
          target='_blank'
          rel="noopener noreferrer"
          onMouseEnter={this.hoverEmail}
          onMouseLeave={this.hoverEmail}
        >
          <FontAwesomeIcon
            style={this.style().email}
            icon={['fas', 'envelope']}
            id='email'
          />
        </a>
        <Tooltip
          placement='top'
          isOpen={this.state.tooltipOpen}
          target='email'
          toggle={this.tooltipToggle}
        >
          JosephEmswiler@gmail.com
        </Tooltip>
      </div>
    )
  }
}
