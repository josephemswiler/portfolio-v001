import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import Desktop from '../../assets/images/screen-imac.svg'
import Mobile from '../../assets/images/screen-iphone.svg'
import Badge from '../../assets/images/first-place-badge.svg'
import DesktopScreen from '../elements/DesktopScreen'
import MobileScreen from '../elements/MobileScreen'
import Leaf from '../../assets/images/tropical-leaf-detail.svg'
import Pattern from '../../assets/images/pattern-80s-outline.svg'

export default class ContainerRightProjects extends Component {
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
      paddingRight: 50
    },
    pattern: {
      display: this.props.project === 'Found' ? 'block' : 'none',
      position: 'absolute',
      zIndex: -1,
      top: -97
    },
    leaf: {
      display: this.props.project === 'Jello' ? 'block' : 'none',
      position: 'absolute',
      height: 500,
      zIndex: 2,
      right: 240,
      top: -340,
      transform: 'rotate(-120deg)'
    },
    column: {
      flexDirection: 'row',

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
      <img style={this.style().pattern} src={Pattern} alt='a crazy pattern' />
      <img style={this.style().leaf} src={Leaf} alt='a tropical leaf' />
        <Row>
          <Col md='8' lg='9' style={this.style().column}>
            <img src={Desktop} alt='desktop computer image' />
            <DesktopScreen project={this.props.project} />
          </Col>
          <Col md='4' lg='3'>
          <img src={Mobile} alt='mobile phone image' />
          <img style={this.style().badge} src={Badge} alt='first place badge' />
          <MobileScreen project={this.props.project} />
          </Col>
        </Row>
      </Container>
    )
  }
}
