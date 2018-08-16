
import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

export default class ContainerRightButtons extends Component {
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
      color: this.props.project === 'Spacebnb' ? '#fff' : '#707070',
      marginTop: 8,
      marginLeft: 20,
      marginRight: 20,
      backgroundColor: this.props.project === 'Spacebnb' ? '#222' : '#fff',
    },
    buttonRound: {
      width: 50,
      height: 50,
      color: this.props.project === 'Spacebnb' ? '#fff' : '#707070',
      fontWeight: 900,
      backgroundColor: this.props.project === 'Spacebnb' ? '#222' : '#fff',
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
    return (
      <Container style={this.style().container}>
        <Row>
          <Col style={this.style().column}>
            <Button style={this.style().buttonRound} onClick={() => this.props.navProjects('back')} className='rounded-circle'>
              <FontAwesomeIcon
                style={this.style().angleIconLeft}
                icon={faAngleLeft}
              />
            </Button>
            <Button style={this.style().button} onClick={this.viewProject}>View</Button>
            <Button style={this.style().buttonRound} onClick={() => this.props.navProjects('next')} className='rounded-circle'>
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
