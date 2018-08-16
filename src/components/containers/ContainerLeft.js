import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import LeftCarousel from '../elements/LeftCarousel'
import LeftTechnology from '../elements/LeftTechnology'
import '../../index.css'

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
      fontWeight: 900
    }
  })

  render () {
    let textColor = this.props.project === 'Spacebnb' ? 'fade-light' : 'fade-dark'
    return (
      <Container style={this.style().container}>
        <Row>
          <Col>
            <h1 className={textColor} style={this.style().title}>
              Full stack web &<br /> mobile developer
            </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            {/* <LeftCarousel project={this.props.project} /> */}
            <LeftTechnology project={this.props.project} />
          </Col>
        </Row>
      </Container>
    )
  }
}
