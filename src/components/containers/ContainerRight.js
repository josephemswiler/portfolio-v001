import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'reactstrap'

export default class ContainerRight extends Component {
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
      <Container style={this.styles().container}>
      Right
      </Container>
    )
  }
}
