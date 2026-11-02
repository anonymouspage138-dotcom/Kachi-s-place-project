import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


function NavbarMenu({cartCount = 0 }) {
  return (
    <Navbar expand="lg" className="bg-black tex" sticky="top" style={{zIndex: '99999'}} >
      <Container fluid>
        <Navbar.Brand as={Link} to="/"><img src="images/kachi01.png" alt="logo img" width={120} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
            <NavDropdown title="About" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/local dish">About US</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/local dish">Local Dishes</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Foriegn Cusine
              </NavDropdown.Item>
              <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/desert">
                Desert
              </NavDropdown.Item>
            </NavDropdown>
             <Nav.Link as={Link} to="/contact">
              Contact 
            </Nav.Link>
            <Nav.Link href="/cart">
              &#x1F6D2;Cart <span className='badge bg-danger'>({cartCount})</span>
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMenu;
