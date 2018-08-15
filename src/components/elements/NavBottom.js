import React, { Component } from 'react'
import { Button, Tooltip } from 'reactstrap'
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
      emailColor: '#ccc'
    }
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
      position: 'fixed',
      zIndex: 2,
      right: 0,
      marginRight: 20
    },
    link: {
      margin: 15,
      zIndex: 10
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
