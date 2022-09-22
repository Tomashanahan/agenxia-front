import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'
import './Grid.css'

const Grid = () => {
  return (
    <>
      <div className='container-grid'>
        <Row className='Row-grid'>
          <Col className="R1-C1" md={3}></Col>
          <Col className="R1-C2" md={3}></Col>
          <Col className="R1-C3" md={3}></Col>
          <Col className="R1-C4" md={3}></Col>
        </Row>
        <Row className='Row-grid'>
          <Col className="R2-C1" md={3}></Col>
          <Col className="R2-C2" md={3}></Col>
          <Col className="R2-C3" md={3}></Col>
          <Col className="R2-C4" md={3}></Col>
        </Row>
        <Row className='Row-grid-text'>
          <Col className="R3-C1" md={3}></Col>
          <Col className="R3-C2" md={9}>
            <div>
              <h1>Convierta su pasión por viajar en ganancias</h1>
              <p>Somos una agencia comprometida en brindar todas las herramientas tecnológicas y asistencia personalizada con el objetivo de ofertar los mejores servicios de turismo y de entretenimiento</p>
              <Button className='btn-R3'>Saber mas</Button>
            </div>
          </Col>
        </Row>
        <Row className='Row-grid'>
          <Col className="R4-C1" md={3}></Col>
          <Col className="R4-C2" md={3}></Col>
          <Col className="R4-C3" md={3}></Col>
          <Col className="R4-C4" md={3}></Col>
        </Row>
      </div>
    </>
  )
}

export { Grid }