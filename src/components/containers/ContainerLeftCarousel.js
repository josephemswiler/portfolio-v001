import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

export default class ContainerLeftCarousel extends Component {
  constructor (props) {
    super(props)

    this.state = {
      idx: 0
    }
  }

  style = () => ({
    container: {
      height: '100%',
      width: '100%',
      color: '#707070',
      fontWeight: 900,
      fontSize: 18,
    },
    column: {
      padding: 0
    },
    factsTitle: {

    },
    factsListItem: {
      padding: 0,
      margin: 0,
      listStyleType: 'none',
    }
  })

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
    }
  ]

  makeList = idx => {
    this.facts[idx]
    return (
      <div>
        <span style={this.style().factsTitle}>{this.facts[idx].title}</span>
        <ul style={this.style().factsListItem}>
          {this.facts[idx].listItems.map(item => <li>{item}</li>)}
        </ul>
      </div>
    )
}

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
