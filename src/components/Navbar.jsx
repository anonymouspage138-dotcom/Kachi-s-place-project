import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavbarMenu() {
  return (
    <Navbar expand="lg" className="bg-black tex">
      <Container fluid>
        <Navbar.Brand href="#"><img src="public\images\kachi01.png" alt="logo img" width={120} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="/menu">Menu</Nav.Link>
            <NavDropdown title="About" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Local Dishes</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Foriegn Cusine
              </NavDropdown.Item>
              <NavDropdown.Divider />
                <NavDropdown.Item href="#action6">
                Desert
              </NavDropdown.Item>
            </NavDropdown>
             <Nav.Link href="/contact" true>
              Contact 
            </Nav.Link>
            <Nav.Link href="/cart" true>
              &#x1F6D2;Cart 
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
