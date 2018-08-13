import React, { Component } from 'react'
import {
  Navbar,
  NavbarBrand,
 Button
} from 'reactstrap'

export default class Example extends React.Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  style = () => ({
    navbar: {
      zIndex: 10
    },
    navbarBrand: {
      fontFamily: `'Nunito', sans-serif`,
      fontWeight: 900,
      fontSize: 18,
      color: '#707070'
    },
    button: {
      borderRadius: 60,
      paddingLeft: 20,
      paddingRight: 20,
    }
  })

  style
  render () {
    return (
      <div>
        <Navbar style={this.style().navbar} color='light' light>
          <NavbarBrand style={this.style().navbarBrand} href='/'>Joseph<br />Emswiler</NavbarBrand>
          <Button style={this.style().button} className='d-block d-md-none'>Projects</Button>
        </Navbar>
      </div>
    )
  }
}
