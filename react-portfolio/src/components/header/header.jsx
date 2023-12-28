import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Your Logo</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="/">About</Nav.Link>
        <Nav.Link href="/portfolio">Portfolio</Nav.Link>
        <Nav.Link href="/resume">Resume</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Header;
