import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

export default class ContainerSide extends Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  styles = () => ({
    container: {
      backgroundColor: this.props.color,
      height: '100%',
      width: '100%'
    }
  })

  render () {
    return (
      <Container style={this.styles().container} fluid={true}>
        <Row>
          <Col />
        </Row>
      </Container>
    )
  }
}
