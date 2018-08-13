import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import LeftCarousel from '../elements/LeftCarousel'

export default class ContainerLeft extends Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  style = () => ({
    container: {
      height: '100%',
      width: '100%'
    },
    title: {
      color: '#707070',
      fontWeight: 900
    }
  })

  render () {
    return (
      <Container style={this.style().container}>
        <Row>
          <Col>
            <h1 style={this.style().title}>
              Full stack web &<br /> mobile developer
            </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <LeftCarousel />
          </Col>
        </Row>
      </Container>
    )
  }
}
