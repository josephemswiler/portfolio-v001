import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import ContainerLeft from '../components/containers/ContainerLeft'
import ContainerRight from '../components/containers/ContainerRight'
import AbsoluteSide from '../components/containers/AbsoluteSide'

export default class Home extends Component {
  constructor (props) {
    super(props)

    this.state = {
      color: {
        center: 'grey',
        right: 'green',
        currentBodyHeight: null,
        currentWindowHeight: null
      }
    }
  }

  componentDidMount () {
    window.addEventListener('resize', this.windowResize)
    this.setState({
      currentBodyHeight: window.innerHeight - 97,
      currentWindowHeight: window.innerHeight
    })
  }

  windowResize = () => {
    this.setState({
      currentBodyHeight: window.innerHeight - 97,
      currentWindowHeight: window.innerHeight
    })
  }

  style = () => ({
    left: {

    },
    wrapper: {
      height: this.state.currentBodyHeight,
      maxWidth: 1220,
      margin: 0
    },
    container: {
      height: this.state.currentBodyHeight,
      margin: 0,
      padding: 0
    }
  })

  render () {
    return (
      <div style={this.style().left}> 
      <Container style={this.style().wrapper}  fluid={true} >
        <Row>
          <Col xs='12' sm='8' md='5' lg='4' style={this.style().container}>
            <ContainerLeft />
          </Col>
          <Col xs='12' md='7' lg='8' style={this.style().container}>
            <ContainerRight color={this.state.color.right} />
          </Col>
        </Row>
        {/* <Row>
          <Col />
          </Row> */}
          <AbsoluteSide height={this.state.currentWindowHeight} />
      </Container>
      </div>
    )
  }
}
