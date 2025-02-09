import { Link, Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import React from 'react'

const Layout = () => {
  return (
    <>
<Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="insert">About/in</Nav.Link>
            <Nav.Link as={Link} to="display">Services/dis</Nav.Link>
            <Nav.Link as={Link} to="search">Placement/se</Nav.Link>
            <Nav.Link as={Link} to="update">Gallery/edi</Nav.Link>
            <Nav.Link as={Link} to="contact">Contact Us</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>

      <div id="wrapper">

        <Outlet/>
      </div>
        <hr size="4" color="brown"/>

        www.employesmanagement.com

      </>
  )
}

export default Layout;

