import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import RightProjects from '../elements/RightProjects'

export default class ContainerRight extends Component {
  style = () => ({
    container: {
      height: '100%',
      width: '100%',
      zIndex: -100,
      top: -97
    },
    pattern: {
      position: 'absolute',
      zIndex: -1,
      top: -97,
      width: '100%'
    }
  })

  render () {
    return (
      <Container style={this.style().container}>
        <Row>
          <Col>
            <RightProjects
              project={this.props.project}
              navProjects={this.props.navProjects}
            />
          </Col>
        </Row>
      </Container>
    )
  }
}
