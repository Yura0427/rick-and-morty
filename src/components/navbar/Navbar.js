import React from 'react'
import { Navbar, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';

export default function NavbarComponent() {
    return (
        <Navbar bg="light" expand="sm">
        <Navbar.Brand  as={Link} to="/">Rick And Morty</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/characters">Characters</Nav.Link>
            <Nav.Link as={Link} to="/episodes">Episodes</Nav.Link>
            <Nav.Link as={Link} to="/locations">Locations</Nav.Link>
            <Nav.Link as={Link} to="/myWatchList">My watch list</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}
