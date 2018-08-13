import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

export default class ContainerLeftCarousel extends Component {
  constructor (props) {
    super(props)

    this.state = {
      idx: 0
    }
  }

  componentDidMount () {
    this.interval = setInterval(() => {
      if (this.state.idx >= this.facts.length - 1) {
        this.setState({ idx: 0 })
      } else {
        this.setState({ idx: this.state.idx + 1 })
      }
    }, 3500)
  }

  facts = [
    {
      title: 'Skills include:',
      listItems: [
        'React.js',
        'jQuery',
        'HTML5 / CSS3 / Vanilla JS',
        'NoSQL / SQL',
        'Node.js',
        'Adobe Illustrator',
        'Adobe Photoshop'
      ]
    },
    {
      title: 'Hobbies include:',
      listItems: [
        'Running',
        'Cooking',
        'WebVR',
        'More developing',
        'More designing '
      ]
    },
    {
      title: 'Favorite Restaurants include:',
      listItems: [
        'Sway',
        'Terry Black’s BBQ',
        'Torchy’s Tacos',
        'Pacha Organic Café',
        'Pinthouse Pizza',
        'Ramen Tatsu-Ya'
      ]
    },
    {
      title: 'Top 5 breweries:',
      listItems: [
        'Pinthouse Pizza (South) 🙃',
        'Jester King',
        'St. Elmo',
        'Oddwood',
        'Zilker'
      ]
    }
  ]

  makeList = idx => {
    this.facts[idx]
    return (
      <div>
        <span style={this.style().factsTitle}>{this.facts[idx].title}</span>
        <ul style={this.style().factsListItem}>
          {this.facts[idx].listItems.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    )
  }

  style = () => ({
    container: {
      height: '100%',
      width: '100%',
      color: '#707070',
      fontWeight: 900,
      fontSize: 18
    },
    column: {
      padding: 0
    },
    factsTitle: {},
    factsListItem: {
      padding: 0,
      margin: 0,
      listStyleType: 'none'
    }
  })

  render () {
    return (
      <Container style={this.style().container}>
        <Row>
          <Col style={this.style().column}>
            {this.makeList(this.state.idx)}
          </Col>
        </Row>
      </Container>
    )
  }
}
