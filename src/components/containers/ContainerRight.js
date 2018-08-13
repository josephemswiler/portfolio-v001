import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import ContainerRightProjects from './ContainerRightProjects'
import ContainerRightButtons from './ContainerRightButtons'

export default class ContainerRight extends Component {
  constructor (props) {
    super(props)

    this.state = {
      idx: 0,
      projects: ['Jello', 'Spacebnb', 'Found']
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
        this.resetInterval()
        break
      case 'back':
        if (currentIdx === 0) {
          this.setState({ idx: this.state.projects.length - 1 })
        } else {
          this.setState({ idx: currentIdx - 1 })
        }
        this.resetInterval()
        break
      default:
    }
  }

  resetInterval = () => {
    clearInterval(this.interval)
    this.interval = setInterval(() => {
      if (this.state.idx >= this.state.projects.length - 1) {
        this.setState({ idx: 0 })
      } else {
        this.setState({ idx: this.state.idx + 1 })
      }
    }, 3500)
  }

  componentDidMount () {
    this.interval = setInterval(() => {
      if (this.state.idx >= this.state.projects.length - 1) {
        this.setState({ idx: 0 })
      } else {
        this.setState({ idx: this.state.idx + 1 })
      }
    }, 3500)
  }

  style = () => ({
    container: {
      backgroundColor: this.props.color,
      height: '100%',
      width: '100%'
    }
  })

  render () {
    return (
      <Container style={this.style().container}>
        <Row>
          <Col>
            <ContainerRightProjects
              project={this.state.projects[this.state.idx]}
            />
            <ContainerRightButtons
              project={this.state.projects[this.state.idx]}
              navProjects={this.navProjects}
            />
          </Col>
        </Row>
      </Container>
    )
  }
}
