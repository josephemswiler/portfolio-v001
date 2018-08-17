import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import AdobeIllustratorIcon
  from '../../assets/images/technology/adobe-illustrator.png'
import AdobePhotoshopIcon
  from '../../assets/images/technology/adobe-photoshop.png'
import AdobeXdIcon from '../../assets/images/technology/adobe-xd.png'
import AWSIcon from '../../assets/images/technology/aws.png'
import BootstrapIcon from '../../assets/images/technology/bootstrap.png'
import CSSIcon from '../../assets/images/technology/css-3.png'
import ExpoIcon from '../../assets/images/technology/expo.png'
import ExpressIcon from '../../assets/images/technology/express-js.png'
import FirebaseIcon from '../../assets/images/technology/firebase.png'
import HandlebarsIcon from '../../assets/images/technology/handlebars-js.png'
import HTMLIcon from '../../assets/images/technology/html-5.png'
import JavascriptIcon from '../../assets/images/technology/javascript.png'
import JSXIcon from '../../assets/images/technology/jsx.png'
import JQueryUiIcon from '../../assets/images/technology/jquery-ui.png'
import JQueryIcon from '../../assets/images/technology/jquery.png'
import MaterializeCSSIcon
  from '../../assets/images/technology/materialize-css.png'
import MongoDBIcon from '../../assets/images/technology/mongo-db.png'
import MongooseIcon from '../../assets/images/technology/mongoose-js.png'
import MVCIcon from '../../assets/images/technology/mvc-framework.png'
import MysqlIcon from '../../assets/images/technology/mysql.png'
import NextIcon from '../../assets/images/technology/next-js.png'
import NodeIcon from '../../assets/images/technology/node-js.png'
import ReactIcon from '../../assets/images/technology/react-js.png'
import ReactNativeIcon from '../../assets/images/technology/react-native.png'
import ReactstrapIcon from '../../assets/images/technology/reactstrap.png'
import Robo3TIcon from '../../assets/images/technology/robo-3t.png'
import SequelProIcon from '../../assets/images/technology/sequel-pro.png'
import SequelizeIcon from '../../assets/images/technology/sequelize.png'
import ThreeIcon from '../../assets/images/technology/three-js.png'

export default class ProjectTechnology extends Component {
  constructor (props) {
    super(props)

    this.state = {
      hydratedTechList: this.techList
    }
  }

  techList = [
    {
      name: 'Adobe Illustrator',
      image: AdobeIllustratorIcon,
      link: 'https://www.adobe.com/products/illustrator.html'
    },
    {
      name: 'Adobe Photoshop',
      image: AdobePhotoshopIcon,
      link: 'https://www.adobe.com/products/photoshop.html'
    },
    {
      name: 'Adobe XD',
      image: AdobeXdIcon,
      link: 'https://www.adobe.com/products/xd.html'
    },
    {
      name: 'AWS',
      image: AWSIcon,
      link: 'https://aws.amazon.com/'
    },
    {
      name: 'Bootstrap',
      image: BootstrapIcon,
      link: 'https://getbootstrap.com/'
    },
    {
      name: 'CSS 3',
      image: CSSIcon,
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3'
    },
    {
      name: 'Expo',
      image: ExpoIcon,
      link: 'https://expo.io/'
    },
    {
      name: 'Express.js',
      image: ExpressIcon,
      link: 'https://expressjs.com/'
    },
    {
      name: 'Google Firebase',
      image: FirebaseIcon,
      link: 'https://firebase.google.com/'
    },
    {
      name: 'Handlebars.js',
      image: HandlebarsIcon,
      link: 'https://handlebarsjs.com/'
    },
    {
      name: 'HTML 5',
      image: HTMLIcon,
      link: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5'
    },
    {
      name: 'JavaScript',
      image: JavascriptIcon,
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
    },
    {
      name: 'JSX',
      image: JSXIcon,
      link: 'https://reactjs.org/docs/introducing-jsx.html'
    },
    {
      name: 'jQuery UI',
      image: JQueryUiIcon,
      link: 'https://jqueryui.com/'
    },
    {
      name: 'jQuery',
      image: JQueryIcon,
      link: 'https://jquery.com/'
    },
    {
      name: 'Materialize CSS',
      image: MaterializeCSSIcon,
      link: 'https://materializecss.com/'
    },
    {
      name: 'Mongo DB',
      image: MongoDBIcon,
      link: 'https://www.mongodb.com/'
    },
    {
      name: 'Mongoose',
      image: MongooseIcon,
      link: 'https://mongoosejs.com/'
    },
    {
      name: 'MVC Framework',
      image: MVCIcon,
      link: 'https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller'
    },
    {
      name: 'MySQL',
      image: MysqlIcon,
      link: 'https://www.mysql.com/'
    },
    {
      name: 'Next.js',
      image: NextIcon,
      link: 'https://nextjs.org/'
    },
    {
      name: 'Node.js',
      image: NodeIcon,
      link: 'https://nodejs.org/en/'
    },
    {
      name: 'React.js',
      image: ReactIcon,
      link: 'https://reactjs.org/'
    },
    {
      name: 'React Native',
      image: ReactNativeIcon,
      link: 'https://facebook.github.io/react-native/'
    },
    {
      name: 'Reactstrap',
      image: ReactstrapIcon,
      link: 'https://reactstrap.github.io/'
    },
    {
      name: 'Robo 3T',
      image: Robo3TIcon,
      link: 'https://robomongo.org/'
    },
    {
      name: 'Sequel Pro',
      image: SequelProIcon,
      link: 'https://www.sequelpro.com/'
    },
    {
      name: 'Seuqelize',
      image: SequelizeIcon,
      link: 'https://github.com/sequelize/sequelize'
    },
    {
      name: 'Three.js',
      image: ThreeIcon,
      link: 'https://threejs.org/'
    }
  ]

  projectObjects = [
    {
      name: 'Jello',
      tech: [
        'HTML 5',
        'CSS 3',
        'Materialize CSS',
        'JavaScript',
        'jQuery',
        'jQuery UI',
        'Node.js',
        'MySQL',
        'Sequel Pro',
        'Seuqelize',
        'Express.js',
        'Handlebars.js',
        'Adobe XD',
        'Adobe Photoshop'
      ]
    },
    {
      name: 'Spacebnb',
      tech: [
        'JSX',
        'CSS 3',
        'Reactstrap',
        'JavaScript',
        'React.js',
        'Next.js',
        'Three.js',
        'Node.js',
        'Mongo DB',
        'Robo 3T',
        'Mongoose',
        'Express.js',
        'Adobe XD',
        'Adobe Illustrator',
        'Adobe Photoshop',
        'MVC Framework'
      ]
    },
    {
      name: 'Found',
      tech: [
        'HTML 5',
        'CSS 3',
        'Bootstrap',
        'JavaScript',
        'jQuery',
        'Node.js',
        'Mongo DB',
        'Robo 3T',
        'Mongoose',
        'Express.js',
        'Handlebars.js',
        'MVC Framework',
        'Adobe XD',
        'Adobe Illustrator',
        'Adobe Photoshop'
      ]
    }
  ]

  // fisherYates = arr => {
  //   let idx = arr.length, temp, randIdx

  //   while (idx !== 0) {
  //     randIdx = Math.floor(Math.random() * idx)
  //     idx -= 1

  //     temp = arr[idx]
  //     arr[idx] = arr[randIdx]
  //     arr[randIdx] = temp
  //   }
  //   return arr
  // }

  componentDidMount () {
    if (this.props.project) {
      this.loadTech()
    }
  }

  componentDidUpdate (prevProps) {
    if (prevProps.project !== this.props.project) {
      this.loadTech()
    }
  }

  loadTech = () => {
    let currentProjectTech = this.projectObjects.filter(
      item => item.name === this.props.project
    )[0].tech

    // let randomList = this.fisherYates(
      
    // )

    this.setState({
      hydratedTechList: this.techList.filter(item => currentProjectTech.includes(item.name))
    })
  }

  style = () => ({
    container: {
      margin: 0,
      padding: 0,
      paddingTop: 20,
      maxWidth: '100%'
    },
    techListWrapper: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      padding: 0
    },
    iconWrapper: {
      display: 'flex',
      flexDirection: 'column',
      width: 80,
      height: 100,
      alignItems: 'center'
    },
    icon: {
      height: 50,
      width: 50,
      margin: 3,
      textAlign: 'center'
    },
    iconLabel: {
      textAlign: 'center'
    }
  })

  render () {
    let textColor = this.props.project === 'Spacebnb'
      ? 'fade-light'
      : 'fade-dark'
    return (
      <Container style={this.style().container}>
        <Row>
          <Col style={this.style().techListWrapper}>
            {this.state.hydratedTechList.map((item, idx) => {
              return (
                <div style={this.style().iconWrapper} key={idx}>
                  <a href={item.link} target='_blank'>
                    <img
                      style={this.style().icon}
                      src={item.image}
                      alt='a technology icon'
                    />
                  </a>
                  <span className={textColor} style={this.style().iconLabel}>
                    {item.name}
                  </span>
                </div>
              )
            })}
          </Col>
        </Row>
      </Container>
    )
  }
}
