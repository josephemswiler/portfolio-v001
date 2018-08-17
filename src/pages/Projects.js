import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import ContainerLeft from '../components/containers/ContainerLeft'

export default class Project extends Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  style = () => ({
    wrapper: {
      maxWidth: 1220,
      margin: 0,
      paddingTop: 97
    },
    title: {
      fontWeight: 900
    },
    button: {
      height: 50,
      width: 215,
      borderRadius: 60,
      paddingLeft: 50,
      paddingRight: 50,
      fontWeight: 900,
      marginLeft: 20,
      marginRight: 20,
    },
  })

  render () {
    return (
      <Container style={this.style().wrapper} fluid>
        <Row>
          <Col xs='12' sm='12' md='5' lg='4' style={this.style().container}>
            <h1 style={this.style().title}>
              Full stack web &<br /> mobile developer
            </h1>
            <Button style={this.style().button}>Projects</Button>
          </Col>
          <Col xs='12' sm='12' md='7' lg='8' style={this.style().container}>
          </Col>
        </Row>
      </Container>
    )
  }
}
