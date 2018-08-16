
import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

export default class RightButtons extends Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  viewProject = () => {
    console.log(this.props.project)
  }

  style = () => ({
    container: {
      margin: 0,
      padding: 0
    },
    column: {
      textAlign: 'center'
    },
    button: {
      height: 50,
      borderRadius: 60,
      paddingLeft: 50,
      paddingRight: 50,
      fontWeight: 900,
      marginLeft: 20,
      marginRight: 20,
    },
    centerText: {
      marginTop: 2
    },
    buttonRound: {
      width: 50,
      height: 50,
      fontWeight: 900,
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
    }
  })

  render () {
    let buttonColor = this.props.project === 'Spacebnb' ? 'fade-dark-button' : 'fade-light-button'
    return (
      <Container style={this.style().container}>
        <Row>
          <Col style={this.style().column}>
            <Button style={this.style().buttonRound} onClick={() => this.props.navProjects('back')} className={`${buttonColor} rounded-circle`}>
              <FontAwesomeIcon
                style={this.style().angleIconLeft}
                icon={faAngleLeft}
              />
            </Button>
            <Button className={buttonColor} style={this.style().button} onClick={this.viewProject}><div style={this.style().centerText}>View</div></Button>
            <Button style={this.style().buttonRound} onClick={() => this.props.navProjects('next')} className={`${buttonColor} rounded-circle`}>
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
