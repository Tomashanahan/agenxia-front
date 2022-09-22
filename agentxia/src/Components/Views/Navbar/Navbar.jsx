import React from 'react';
import { Navbar, Container, Button, Nav, Image } from 'react-bootstrap';
import './Navbar.css';
import logo_agentxia from '../../../assets/logo.png'

const _Navbar = () => {
  return (
    <div className='container-navbar' >
      <Navbar className='navbar_'>
        <Container className='container_'>
          <Navbar.Brand href="/"><Image className='img-logo' src={logo_agentxia} /></Navbar.Brand>
          <Nav className='nav_conten'>
            <Nav.Link className='text-white text-nav' to="/">INICIO</Nav.Link>
            <Nav.Link className='text-white text-nav' to="/">RESERVAR</Nav.Link>
            <Nav.Link className='text-white text-nav' to="/">QUIENES SOMOS</Nav.Link>
            <Nav.Link className='text-white text-nav' to="/">TIENDA</Nav.Link>
            <Nav.Link className='text-white text-nav' to="/">CONTÁCTANOS</Nav.Link>
          </Nav>
          <Button className='btn_navbar' variant='light'>SIGN IN</Button>
        </Container>
      </Navbar>
    </div>
  )
}

export { _Navbar }