import React from 'react';
import {Navbar, Container, Button, Nav, Image, Offcanvas} from 'react-bootstrap';
import './Navbar.css';
import logo_agentxia from '../../../assets/logo.png';
import iconMenu from '../../../assets/icon-menu.png';
import {NavLink} from 'react-router-dom';

const _Navbar = () => {
  let expand = 'lg';
  return (
    <div className="container-navbar">
      <Navbar className="navbar_" collapseOnSelect expand={expand}>
        <Container fluid className="container_">
          <Navbar.Brand href="/">
            <Image className="img-logo" src={logo_agentxia} />
          </Navbar.Brand>
          <div className="div-navbar-menu">
            <img className="img-navbar-menu" alt="foto" src={iconMenu} />
            <Navbar.Toggle className="toggle" aria-controls={`offcanvasNavbar-expand-${expand}`} />
          </div>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
            className="bg-primary">
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="nav_conten">
                <Nav.Link className="text-white text-nav" to="/">
                  INICIO
                </Nav.Link>
                <Nav.Link className="text-white text-nav" to="/">
                  RESERVAR
                </Nav.Link>
                {/* <Nav.Link className="text-white text-nav" to="/QUIENES_SOMOS">
                  QUIENES SOMOS
                </Nav.Link> */}
                <Nav.Link className="text-white text-nav" to="/QUIENES_SOMOS">
                  <NavLink className="text-white text-nav" to="/QUIENES_SOMOS">
                    QUIENES SOMOS
                  </NavLink>
                </Nav.Link>
                {/* <NavLink className="text-white text-nav" to="/QUIENES_SOMOS">
                  QUIENES SOMOS
                </NavLink> */}
                <Nav.Link className="text-white text-nav" to="/">
                  TIENDA
                </Nav.Link>
                <Nav.Link className="text-white text-nav" to="/">
                  CONTÁCTANOS
                </Nav.Link>
              </Nav>
              <Button className="btn_navbar" variant="light">
                SIGN IN
              </Button>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export {_Navbar};
