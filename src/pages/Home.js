import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import ContainerLeft from '../components/containers/ContainerLeft'
import ContainerRight from '../components/containers/ContainerRight'
import Pattern from '../assets/images/background-found.svg'
import Leaf from '../assets/images/tropical-leaf-detail.svg'
import webVR from '../three/index'
import '../index.css'

export default class Home extends Component {
  constructor (props) {
    super(props)

    this.state = {
      currentWindowHeight: window.innerHeight,
      project: null,
      idx: 0,
      projects: ['Spacebnb', 'Jello', 'Found', 'Dutch']
    }
  }

  navProjects = direction => {
    let currentIdx = this.state.idx

    switch (direction) {
      case 'next':
        if (currentIdx === this.state.projects.length - 1) {
          this.setState({ idx: 0 })
        } else {
          this.setState({ idx: currentIdx + 1 })
        }
        break
      case 'back':
        if (currentIdx === 0) {
          this.setState({ idx: this.state.projects.length - 1 })
        } else {
          this.setState({ idx: currentIdx - 1 })
        }
        break
      default:
    }
  }

  componentDidMount () {
    webVR(this.webVR)
    window.addEventListener('resize', this.windowResize)
  }

  windowResize = () => {
    this.setState({
      currentWindowHeight: window.innerHeight
    })
  }

  style = () => ({
    wrapper: {
      height: this.state.currentWindowHeight
        ? this.state.currentWindowHeight
        : '100%',
      maxWidth: 1220,
      margin: 0
    },
    canvas: {
      width: '100vw',
      height: '100vh',
      display: 'block',
      visibility: this.state.projects[this.state.idx] === 'Spacebnb'
        ? 'visible'
        : 'hidden',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: -9999
    },
    leaf: {
      display: this.state.projects[this.state.idx] === 'Jello'
        ? 'block'
        : 'none',
      position: 'absolute',
      height: 500,
      zIndex: 11,
      right: 240,
      top: -285,
      transform: 'rotate(-120deg)'
    },
    leafTwo: {
      display: this.state.projects[this.state.idx] === 'Jello'
        ? 'block'
        : 'none',
      position: 'absolute',
      height: 500,
      zIndex: -1,
      left: -100,
      top: 180,
      transform: 'rotate(120deg)'
    },
    leafThree: {
      display: this.state.projects[this.state.idx] === 'Jello'
        ? 'block'
        : 'none',
      position: 'absolute',
      height: 500,
      zIndex: -1,
      right: -10,
      bottom: -300,
      transform: 'rotate(-40deg)'
    },
    container: {
      height: this.state.currentWindowHeight
        ? this.state.currentWindowHeight - 97
        : '100%',
      margin: 0,
      padding: 0,
      paddingTop: 97,
      maxWidth: '100%'
    },
    containerWrapper: {
      backgroundImage: this.state.projects[this.state.idx] === 'Found'
        ? `url(${Pattern})`
        : 'none',
      height: this.state.currentWindowHeight
        ? this.state.currentWindowHeight
        : '100%',
      margin: 0,
      padding: 0
    }
  })

  render () {
    return (
      <Container style={this.style().wrapper} fluid>
        <div
          className='scale-up'
          style={this.style().canvas}
          ref={element => {
            this.webVR = element
          }}
        />
        <img style={this.style().leafTwo} src={Leaf} alt='a tropical leaf' />
        <Row>
          <Col
            xs='12'
            sm='12'
            md='5'
            lg='4'
            style={this.style().containerWrapper}
          >
            <Container style={this.style().container}>
              <ContainerLeft
                project={this.state.projects[this.state.idx]}
                navProjects={this.navProjects}
              />
              <img
                className='d-md-none'
                style={this.style().leaf}
                src={Leaf}
                alt='a tropical leaf'
              />
            </Container>
          </Col>
          <Col
            xs='12'
            sm='12'
            md='7'
            lg='8'
            className='d-none d-md-block'
            style={this.style().container}
          >
            <img style={this.style().leaf} src={Leaf} alt='a tropical leaf' />
            <ContainerRight
              project={this.state.projects[this.state.idx]}
              navProjects={this.navProjects}
            />

          </Col>
        </Row>
        <img style={this.style().leafThree} src={Leaf} alt='a tropical leaf' />
      </Container>
    )
  }
}
