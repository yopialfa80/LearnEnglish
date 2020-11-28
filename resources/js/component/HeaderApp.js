import React from "react";
import {
    Navbar,
    Nav,
    Button,
} from 'react-bootstrap';

class HeaderApp extends React.Component {
  render() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
          <Navbar.Brand href="#home">Learn-TOEFL</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">Login</Nav.Link>
              <Button variant="danger">Daftar Gratis</Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default HeaderApp;
