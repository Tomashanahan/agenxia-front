import React from 'react';
import {Col, Row} from 'react-bootstrap';
import './Grid4.css'

const Grid4 = () => {
  return (
    <>
    <div className='container-grid-4'>
        <Row className='Row-grid-4'>
            <Col className="R1-C1-4" md={3}></Col>
            <Col className="R1-C2-4" md={3}></Col>
            <Col className="R1-C3-4" md={3}></Col>
            <Col className="R1-C4-4" md={3}></Col>
        </Row>
        <Row className='Row-grid-4'>
            <Col className="R2-C1-4" md={3}></Col>
            <Col className="R2-C2-4" md={3}></Col>
            <Col className="R2-C3-4" md={3}></Col>
            <Col className="R2-C4-4" md={3}></Col>
        </Row>
        <Row className='Row-grid-text-4'>
            <Col className="R3-C1-4" md={9}>
                <div>
                    <h1>Todo lo que necesita para hacer crecer su negocio</h1>
                    <p>todo en un solo lugar, no en todos lados. Acceda a los mejores recursos tecnológicos y de marketing de su clase, soporte en vivo, credibilidad instantánea, niveles de comisión de primer nivel y sólidas relaciones con los proveedores de una red de viajes acreditada. Trae lo mejor a tu negocio hoy.</p>
                </div>
            </Col>
            <Col className="R3-C2-4" md={3}></Col>

        </Row>
        <Row className='Row-grid-4'>
            <Col className="R4-C1-4" md={3}></Col>
            <Col className="R4-C2-4" md={3}></Col>
            <Col className="R4-C3-4" md={3}></Col>
            <Col className="R4-C4-4" md={3}></Col>
        </Row>
    </div>
</>
  )
}

export {Grid4}