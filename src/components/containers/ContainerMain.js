import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import ContainerLeft from './ContainerLeft'
import ContainerRight from './ContainerRight'

export default class ContainerMain extends Component {
  constructor (props) {
    super(props)

    this.state = {
      color: {
        left: 'grey',
        right: 'grey',
        currentBodyHeight: null,
      }
    }
  }

  style = () => ({
    container: {
      backgroundColor: this.props.color,
      height: '100%',
      width: '100%'
    }
  })

  render () {
    return (
      <Container style={this.style().container} fluid={true}>
        <Row>
          <Col xs='12' md='4' style={this.style().container}>
            <ContainerLeft color={this.state.color.left} />
          </Col>
          <Col xs='12' md='8' style={this.style().container}>
            <ContainerRight color={this.state.color.right} />
          </Col>
        </Row>
      </Container>
    )
  }
}
