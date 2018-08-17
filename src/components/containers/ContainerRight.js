import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import RightProjects from '../elements/RightProjects'
import RightButtons from '../elements/RightButtons'
// import LeftTechnology from '../elements/LeftTechnology'

export default class ContainerRight extends Component {
  constructor (props) {
    super(props)

    this.state = {
      idx: 0,
      projects: [
        'Jello',
        'Spacebnb',
        'Found'
      ]
    }
  }

  navProjects = direction => {
    let currentIdx = this.state.idx

    switch (direction) {
      case 'next':
        if (currentIdx === this.state.projects.length - 1) {
          this.setState({ idx: 0 })
          this.props.updateBackground(this.state.projects[0])
        } else {
          this.setState({ idx: currentIdx + 1 })
          this.props.updateBackground(this.state.projects[currentIdx + 1])
        }
        this.resetInterval()
        break
      case 'back':
        if (currentIdx === 0) {
          this.setState({ idx: this.state.projects.length - 1 })
          this.props.updateBackground(
            this.state.projects[this.state.projects.length - 1]
          )
        } else {
          this.setState({ idx: currentIdx - 1 })
          this.props.updateBackground(this.state.projects[currentIdx - 1])
        }
        this.resetInterval()
        break
      default:
    }
  }

  resetInterval = () => {
    clearInterval(this.interval)
    this.imageInterval()
  }

  componentDidMount () {
    this.props.updateBackground(this.state.projects[this.state.idx])
    this.imageInterval()
  }

  imageInterval = () => {
    this.interval = setInterval(() => {
      if (this.state.idx >= this.state.projects.length - 1) {
        this.setState({ idx: 0 })
      } else {
        this.setState({ idx: this.state.idx + 1 })
      }
      this.props.updateBackground(this.state.projects[this.state.idx])
    }, 3500)
  }

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
              project={this.state.projects[this.state.idx]}
              navProjects={this.navProjects}
            />
            {/* <LeftTechnology technology={this.state.projects[this.state.idx].tech} /> */}
            {/* <RightButtons
              project={this.state.projects[this.state.idx]}
              navProjects={this.navProjects}
            /> */}
          </Col>
        </Row>
      </Container>
    )
  }
}
