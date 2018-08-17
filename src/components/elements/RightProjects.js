import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Desktop from '../../assets/images/screen-imac.svg'
import Mobile from '../../assets/images/screen-iphone.svg'
import Pixel from '../../assets/images/screen-pixel.svg'
import Badge from '../../assets/images/first-place-badge.svg'
import DesktopScreen from './DesktopScreen'
import PixelScreen from './PixelScreen'
import MobileScreen from './MobileScreen'
import RightButtons from './RightButtons'
import ProjectTeachnology from './ProjectTechnology'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

export default class RightProjects extends Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  style = () => ({
    container: {
      height: '100%',
      width: '100%',
      margin: 0,
      padding: 0,
      paddingRight: 50
    },
    screen: {
      zIndex: 10
    },
    column: {
      display: this.props.project === 'Dutch' ? 'none' : 'block',
      zIndex: 10
    },
    badge: {
      position: 'absolute',
      top: -35,
      right: -45,
      height: 100,
      zIndex: 11
    },
    mobileCol: {
      display: this.props.project === 'Dutch' ? 'block' : 'none',
    },
    centerCol: {
      display: this.props.project === 'Dutch' ? 'flex' : 'none',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    android: {
      fontSize: 60,
      color: '#85C606'
    },
    and: {
      marginTop: 20,
      paddingLeft: 10,
      paddingRight: 10,
      fontWeight: 900,
      display: 'inline-block',
      color: '#222'
    },
    apple: {
      fontSize: 60,
      color: '#707070'
    }
  })
  render () {
    return (
      <Container style={this.style().container}>
        <Row>
          <Col md='8' lg='9' style={this.style().column}>
            <img
              style={this.style().screen}
              src={Desktop}
              alt='a preview of a web app on a desktop display'
            />
            <DesktopScreen project={this.props.project} />
          </Col>
          <Col md='4' lg='3' style={this.style().mobileCol}>
            <img
              style={this.style().screen}
              src={Pixel}
              alt='a mobile responsive web app'
            />
            <PixelScreen project={'Dutch'} />
          </Col>
          <Col md='4' lg='6' style={this.style().centerCol}>
          <FontAwesomeIcon
            style={this.style().android}
            icon={['fab', 'android']}
          />
          <h1 style={this.style().and}>&</h1>
          <FontAwesomeIcon
            style={this.style().apple}
            icon={['fab', 'apple']}
          />
          </Col>
          <Col md='4' lg='3'>
            <img
              style={this.style().screen}
              src={Mobile}
              alt='a mobile responsive web app'
            />
            <img
              style={this.style().badge}
              src={Badge}
              alt='first place badge'
            />
            <MobileScreen project={this.props.project} />
          </Col>
        </Row>
        <Container>
          <RightButtons
            project={this.props.project}
            navProjects={this.props.navProjects}
          />
          <ProjectTeachnology project={this.props.project} />
        </Container>
      </Container>
    )
  }
}
