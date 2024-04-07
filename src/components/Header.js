import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../asset/logo.png";
import { Navbar, Container, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar style={{ backgroundColor: '#8A2BE2' }} variant="dark" expand="lg">
 
      <Container>
      
        <Navbar.Brand href="#home">
          <img
            alt="Logo"
            src={logo} // Replace with the path to your logo image
            width="200"
            
            className="d-inline-block align-center"

          />
          
        </Navbar.Brand>

        {/* Toggle button for responsive design */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

       
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="mr-auto">           
            <Nav.Link href="#services" style={{ color: 'white' }}>SERVICES</Nav.Link>
            <Nav.Link href="#about" style={{ color: 'white' }}>ABOUT US</Nav.Link>
            <Nav.Link href="#contact" style={{ color: 'white' }}>CONTACT US</Nav.Link>
            <Nav.Link href="#career" style={{ color: 'white' }}>CAREERS</Nav.Link>          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;