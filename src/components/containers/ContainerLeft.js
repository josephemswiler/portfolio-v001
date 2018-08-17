import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
// import LeftCarousel from '../elements/LeftCarousel'
import ProjectTechnology from '../elements/ProjectTechnology'
import MobileCard from '../elements/MobileCard'
import '../../index.css'

export default class ContainerLeft extends Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  style = () => ({
    container: {
      // height: '100%',
      width: '100%',
      maxWidth: '100%'
    },
    title: {
      fontWeight: 900
    }
  })

  render () {
    let textColor = this.props.project === 'Spacebnb'
      ? 'fade-light'
      : 'fade-dark'
    return (
      <Container className='m-sm-0' style={this.style().container}>
        <Row>
          <Col>
            <h1 className={textColor} style={this.style().title}>
              Full stack web &<br /> mobile developer
            </h1>
          </Col>
        </Row>
        <Row className='d-block d-md-none'>
          <Col>
            <MobileCard project={this.props.project} navProjects={this.props.navProjects}/>
          </Col>
        </Row>
        <Row className='d-block d-md-none'>
          <Col>
            <ProjectTechnology project={this.props.project} />
          </Col>
        </Row>
      </Container>
    )
  }
}
