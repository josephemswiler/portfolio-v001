import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

export default class RightButtons extends Component {
  constructor (props) {
    super(props)

    this.state = {
      currentLink: ''
    }
  }

  componentDidMount() {
    this.updateLink()
  }

  componentDidUpdate (prevProps) {
    if (prevProps.project !== this.props.project) {
      this.updateLink()
    }
  }

  viewProject = () => {
    console.log(this.props.project)
  }

  updateLink = () => {
    switch (this.props.project) {
      case 'Found':
        this.setState({
          currentLink: 'https://found-jfe.herokuapp.com/'
        })
      break
      case 'Jello':
      this.setState({
        currentLink: 'https://jello-jfe.herokuapp.com/'
      })
      break
      case 'Spacebnb':
      this.setState({
        currentLink: 'https://space-bnb.now.sh/'
      })
      break
      case 'Dutch':
      this.setState({
        currentLink: 'https://github.com/josephemswiler'
      })
      break
      default:
    }
  }

  style = () => ({
    container: {
      margin: 0,
      padding: 0,
      paddingTop: 20,
      maxWidth: '100%'
    },
    column: {
      textAlign: 'center',
      padding: 0,
      display: 'flex',
      justifyContent: 'center'
    },
    button: {
      height: 50,
      width: 215,
      borderRadius: 60,
      paddingLeft: 50,
      paddingRight: 50,
      fontWeight: 900,
      marginLeft: 20,
      marginRight: 20
    },
    centerText: {
      marginTop: 2
    },
    buttonRound: {
      width: 50,
      height: 50,
      fontWeight: 900
    },
    angleIconLeft: {
      fontSize: 32,
      marginTop: -4,
      marginLeft: -3.5
    },
    angleIconRight: {
      fontSize: 32,
      marginTop: -4,
      marginRight: -3.5
    },
    title: {
      fontWeight: 900,
      textAlign: 'justify'
    }
  })

  renderViewButton = () => {
    let buttonColor = this.props.project === 'Spacebnb'
      ? 'fade-dark-button'
      : 'fade-light-button'
    if (this.props.project === 'Dutch') {
      return (
        <Button
        className={buttonColor}
        style={this.style().button}
        disabled
      >
        <div style={this.style().centerText}>
          WIP
        </div>
      </Button>
      )
    } else {
      return (
        <a href={this.state.currentLink} target='_blank'>
        <Button
          className={buttonColor}
          style={this.style().button}
        >
          <div style={this.style().centerText}>
            View {this.props.project}
          </div>
        </Button>
        </a>
      )
    }
  }

  render () {
    let buttonColor = this.props.project === 'Spacebnb'
      ? 'fade-dark-button'
      : 'fade-light-button'
    return (
      <Container style={this.style().container}>
        <Row>
          <Col style={this.style().column}>
            <Button
              style={this.style().buttonRound}
              onClick={() => this.props.navProjects('back')}
              className={`${buttonColor} rounded-circle`}
            >
              <FontAwesomeIcon
                style={this.style().angleIconLeft}
                icon={faAngleLeft}
              />
            </Button>
            {this.renderViewButton()}
            <Button
              style={this.style().buttonRound}
              onClick={() => this.props.navProjects('next')}
              className={`${buttonColor} rounded-circle`}
            >
              <FontAwesomeIcon
                style={this.style().angleIconRight}
                icon={faAngleRight}
              />
            </Button>
          </Col>
        </Row>
      </Container>
    )
  }
}
