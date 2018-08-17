import React, { Component } from 'react'
import {
  Card,
  CardBody,
  Button,
  CardImg
} from 'reactstrap'
import FoundImage from '../../assets/images/screenshot-found.png'
import SpacebnbImage from '../../assets/images/screenshot-spacebnb.png'
import JelloImage from '../../assets/images/screenshot-jello.png'
import RightButtons from './RightButtons'

export default class MobileCard extends Component {
  constructor(props) {
    super(props)

    this.state={
      projectImage: null
    }
  }

  currentProjects = {
    Jello: JelloImage,
    Found: FoundImage,
    Spacebnb: SpacebnbImage
  }

  componentDidUpdate (prevProps) {
    if (prevProps.project !== this.props.project) {

      this.setState({
        projectImage: this.currentProjects[this.props.project]
      })
    }
  }

  style = () => ({
    card: {
      backgroundColor: 'transparent',
      border: 'none',
      boxShadow: 'none',
      textAlign: 'center'
    },
    button: {
      height: 50,
      width: 215,
      borderRadius: 60,
      paddingLeft: 50,
      paddingRight: 50,
      fontWeight: 900,
      marginLeft: 20,
      marginRight: 20,
    },
  })

  render () {
    let buttonColor = this.props.project === 'Spacebnb' ? 'fade-dark-button' : 'fade-light-button'
    return (
      <Card style={this.style().card}>
        <CardImg
          top
          width='100%'
          src={this.state.projectImage}
          alt='a preview image of a web app'
        />
        <CardBody>
        {/* <Button className={buttonColor} style={this.style().button} onClick={this.viewProject}><div style={this.style().centerText}>View {this.props.project}</div></Button> */}
        <RightButtons navProjects={this.props.navProjects} project={this.props.project} />
        </CardBody>
      </Card>
    )
  }
}
