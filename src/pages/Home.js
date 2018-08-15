import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import ContainerLeft from '../components/containers/ContainerLeft'
import ContainerRight from '../components/containers/ContainerRight'
import AbsoluteSide from '../components/containers/AbsoluteSide'
import Pattern from '../assets/images/found-pattern-home-2.svg'
import NavBottom from '../components/elements/NavBottom'

export default class Home extends Component {
  constructor (props) {
    super(props)

    this.state = {
      color: {
        currentWindowHeight: window.innerHeight,
        background: null,
      }
    }
  }

  componentDidMount () {
    window.addEventListener('resize', this.windowResize)
    this.setState({
      currentWindowHeight: window.innerHeight,
      background: 'Found'
    })
  }

  windowResize = () => {
    this.setState({
      currentWindowHeight: window.innerHeight
    })
  }

updateBackground = bool => {

}

  style = () => ({
    wrapper: {
      height: this.state.currentWindowHeight ? this.state.currentWindowHeight : '100%',
      maxWidth: 1220,
      margin: 0,
    },
    containerLeft: {
      height: this.state.currentWindowHeight ? this.state.currentWindowHeight - 97 : '100%',
      margin: 0,
      padding: 0,
      paddingTop: 97,
    },
    containerRightWrapper: {
      backgroundImage: this.state.background === 'Found' ? `url(${Pattern})` : 'none',
      height: this.state.currentWindowHeight ? this.state.currentWindowHeight : '100%',
      margin: 0,
      padding: 0
    },
    containerRight: {
      height: this.state.currentWindowHeight ? this.state.currentWindowHeight - 97 : '100%',
      margin: 0,
      padding: 0,
      paddingTop: 97,
    }
  })

  render () {
    return (
      <Container style={this.style().wrapper}  fluid={true} >
        <Row>
          <Col xs='12' sm='8' md='5' lg='4' style={this.style().containerLeft}>
            <ContainerLeft />
            <NavBottom />
          </Col>
          <Col xs='12' md='7' lg='8' className='d-none d-md-block' style={this.style().containerRightWrapper}>
            <Container style={this.style().containerRight}>
            <ContainerRight updateBackground={this.updateBackground} />
            </Container>
          </Col>
        </Row>
        {/* <Row>
          <Col />
          </Row> */}
          {/* <AbsoluteSide height={this.state.currentWindowHeight} /> */}
      </Container>
    )
  }
}
