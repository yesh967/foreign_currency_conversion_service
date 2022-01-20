import React from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter as Link } from 'react-router-dom';
import Default_for_todo from './default_for_todo';
import Currency from './currency';

function Navbarservice() {
  return (
    <div>
    <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">TODO</Navbar.Brand>
      <Nav className="me-auto">
        <Link to="/currency">Home</Link>
        <Link to="/default_for_todo">Add Data</Link>
      </Nav>
      </Container>
    </Navbar>
    </div>
  );
}

export default Navbarservice;