import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from 'react-bootstrap/Image';
import logo_agentxia from '../../../assets/logo.png'

const Pruebas = () => {
    let expand = 'md'
  return (
    <>
    
      <Navbar bg="dark" expand={expand} className="mb-3">
        <Container fluid className='container_'>
        <Navbar.Brand href="/"><Image className='img-logo' src={logo_agentxia} /></Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            <Nav className='nav_conten'>
                    <Nav.Link className='text-white text-nav' to="/">INICIO</Nav.Link>
                    <Nav.Link className='text-white text-nav' to="/">RESERVAR</Nav.Link>
                    <Nav.Link className='text-white text-nav' to="/">QUIENES SOMOS</Nav.Link>
                    <Nav.Link className='text-white text-nav' to="/">TIENDA</Nav.Link>
                    <Nav.Link className='text-white text-nav' to="/">CONTÁCTANOS</Nav.Link>
                  </Nav>
             
                <Button variant="outline-success">Search</Button>
              
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>


      <Navbar bg='dark' className='navbar_' collapseOnSelect expand={expand} >
        <Container fluid className='container_'>
          <Navbar.Brand href="/"><Image className='img-logo' src={logo_agentxia} /></Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
            </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className='nav_conten'>
                    <Nav.Link className='text-white text-nav' to="/">INICIO</Nav.Link>
                    <Nav.Link className='text-white text-nav' to="/">RESERVAR</Nav.Link>
                    <Nav.Link className='text-white text-nav' to="/">QUIENES SOMOS</Nav.Link>
                    <Nav.Link className='text-white text-nav' to="/">TIENDA</Nav.Link>
                    <Nav.Link className='text-white text-nav' to="/">CONTÁCTANOS</Nav.Link>
                  </Nav>
                  <Button className='btn_navbar' variant='light'>SIGN IN</Button>
                </Offcanvas.Body>
            
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    
  </>
  )
}

export default Pruebas

// {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => (