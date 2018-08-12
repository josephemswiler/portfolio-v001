import React, { Component } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'

export default class Example extends React.Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  style = () => ({
    navbar: {
   
    },
    navbarBrand: {
      fontFamily: `'Nunito', sans-serif`,
      fontWeight: 900,
      fontSize: 18,
      color: '#707070'
    }
  })

  style
  render () {
    return (
      <div>
        <Navbar style={this.style().navbar} color='light' light>
          <NavbarBrand style={this.style().navbarBrand} href='/'>Joseph<br />Emswiler</NavbarBrand>


        </Navbar>
      </div>
    )
  }
}
