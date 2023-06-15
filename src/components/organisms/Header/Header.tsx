import React from 'react'
import { Nav, Navbar, Offcanvas } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'

const Header = () => (
  <Navbar collapseOnSelect expand="xs" >
    <Navbar.Toggle aria-controls="navbar"/>
    <Navbar.Offcanvas
      id="navbar"
      aria-labelledby="navbar-label"
      placement="start"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="navbar-label">Меню</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="#posts">Список постов</Nav.Link>
          <Nav.Link href="#about">Обо мне</Nav.Link>
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Navbar>
)

export default Header
