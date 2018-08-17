import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, NavbarBrand, Button } from 'reactstrap'

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
      color: '#707070',
      zIndex: 10
    },
    button: {
      borderRadius: 60,
      paddingLeft: 20,
      paddingRight: 20,
      fontFamily: `'Nunito', sans-serif`,
      fontWeight: 900,
      color: '#707070',
      paddingLeft: 40,
      paddingRight: 40,
      zIndex: 10
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
          <Link
            style={this.style().navbarBrand}
            className='navbar-brand'
            to='/'
          >
            Joseph<br />Emswiler
          </Link>
        </Navbar>
      </div>
    )
  }
}
