import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Desktop from '../../assets/images/screen-imac.svg'
import Mobile from '../../assets/images/screen-iphone.svg'
import Badge from '../../assets/images/first-place-badge.svg'
import DesktopScreen from './DesktopScreen'
import MobileScreen from './MobileScreen'
import RightButtons from './RightButtons'

export default class RightProjects extends Component {
  constructor(props) {
    super(props)

    this.state={

    }
  }
  
  style = () => ({
    container: {
      height: '100%',
      width: '100%',
      margin: 0,
      padding: 0,
      paddingRight: 50,
    },
    screen: {
      zIndex: 10
    },
    column: {
      flexDirection: 'row',
      zIndex: 10
    },
    badge: {
      position: 'absolute',
      top: -35,
      right: -45,
      height: 100,
      zIndex: 11
    }
  })
  render () {
    return (
      <Container style={this.style().container} >
        <Row>
          <Col md='8' lg='9' style={this.style().column}>
            <img style={this.style().screen} src={Desktop} alt='desktop computer image' />
            <DesktopScreen project={this.props.project} />
            <Container className='d-none d-lg-block p-0'>
            <RightButtons project={this.props.project} navProjects={this.props.navProjects} />
            </Container>
          </Col>
          <Col md='4' lg='3'>
          <img style={this.style().screen} src={Mobile} alt='mobile phone image' />
          <img style={this.style().badge} src={Badge} alt='first place badge' />
          <MobileScreen project={this.props.project} />
          </Col>
        </Row>
        <Container className='d-block d-lg-none p-0'>
            <RightButtons project={this.props.project} navProjects={this.props.navProjects} />
            </Container>
      </Container>
    )
  }
}
