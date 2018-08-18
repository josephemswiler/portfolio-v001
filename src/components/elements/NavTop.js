import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from 'reactstrap'

export default class NavTop extends Component {
  constructor (props) {
    super(props)

    this.state = {
    }
  }

  style = () => ({
    navbar: {
      height: 97,
    },
    navbarBrand: {
      fontSize: 18,
      fontFamily: `'Nunito', sans-serif`,
      fontWeight: 900,
      color: '#707070'
    }
  })

  render () {
    return (
      <div>
        <Navbar
          style={this.style().navbar}
          className='transparent fixed-top'
          light
        >
 
            Joseph<br />Emswiler

        </Navbar>
      </div>
    )
  }
}
