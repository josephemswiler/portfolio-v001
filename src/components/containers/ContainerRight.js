import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import RightProjects from '../elements/RightProjects'
import RightButtons from '../elements/RightButtons'
import RightTechnology from '../elements/RightTechnology'

export default class ContainerRight extends Component {
  constructor (props) {
    super(props)

    this.state = {
      idx: 0,
      projects: [
        {
          name: 'Jello',
          tech: [
            'html-5',
            'css-3',
            'materialize-css',
            'javascript',
            'jquery',
            'jquery-ui',
            'node-js',
            'mysql',
            'sequel-pro',
            'seuqelize',
            'express-js',
            'handlebars-js',
            'adobe-xd'
          ]
        },
        {
          name: 'Spacebnb',
          tech: [
            'html-5',
            'css-3',
            'reactstrap',
            'javascript',
            'next-js',
            'three-js',
            'node-js',
            'mongo-db',
            'robo-3t',
            'mongoose',
            'express-js',
            'adobe-xd'
          ]
        },
        {
          name: 'Found',
          tech: [
            'html-5',
            'css-3',
            'bootstrap',
            'javascript',
            'jquery',
            'node-js',
            'mongo-db',
            'robo-3t',
            'mongoose-js',
            'express-js',
            'handlebars-js',
            'mvc-framework',
            'adobe-xd'
          ]
        },
      ]
    }
  }

  navProjects = direction => {
    let currentIdx = this.state.idx

    switch (direction) {
      case 'next':
        if (currentIdx === this.state.projects.length - 1) {
          this.setState({ idx: 0 })
          this.props.updateBackground(this.state.projects[0].name)
        } else {
          this.setState({ idx: currentIdx + 1 })
          this.props.updateBackground(this.state.projects[currentIdx + 1].name)
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
          this.props.updateBackground(this.state.projects[currentIdx - 1].name)
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
    this.props.updateBackground(this.state.projects[this.state.idx].name)
    this.imageInterval()
  }

  imageInterval = () => {
    this.interval = setInterval(() => {
      if (this.state.idx >= this.state.projects.length - 1) {
        this.setState({ idx: 0 })
      } else {
        this.setState({ idx: this.state.idx + 1 })
      }
      this.props.updateBackground(this.state.projects[this.state.idx].name)
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
              project={this.state.projects[this.state.idx].name}
            />
            <RightButtons
              project={this.state.projects[this.state.idx].name}
              navProjects={this.navProjects}
            />
            <RightTechnology technology={this.state.projects[this.state.idx].tech} />
          </Col>
        </Row>
      </Container>
    )
  }
}
