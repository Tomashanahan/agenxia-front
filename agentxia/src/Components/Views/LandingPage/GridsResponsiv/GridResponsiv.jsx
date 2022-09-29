import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import './GridResponsiv.css'

const GridResponsiv = () => {
    return (
        <div className='container-responsiv'>
            <Row className='Row-grid-text-Responsiv'>
                <Col className="R3-C2-Responsiv" md={12}>
                    <div>
                        <h1>Convierta su pasión por viajar en ganancias</h1>
                        <p>Somos una agencia comprometida en brindar todas las herramientas tecnológicas y asistencia personalizada con el objetivo de ofertar los mejores servicios de turismo y de entretenimiento</p>
                        <Button className='btn-R3-Responsiv'>Saber mas</Button>
                    </div>
                </Col>
            </Row>
            <div className='cont-grid-responsiv'>
                <div className='row-grid-responsiv'>
                    <div className="R1-C1-Responsiv-i" md={3}></div>
                    <div className="R1-C2-Responsiv-i" md={3}></div>
                    <div className="R1-C3-Responsiv-i" md={3}></div>
                </div>
                <div className='row-grid-responsiv'>
                    <div className="R2-C1-Responsiv-i" md={3}></div>
                    <div className="R2-C2-Responsiv-i" md={3}></div>
                    <div className="R2-C3-Responsiv-i" md={3}></div>
                </div>
                <div className='row-grid-responsiv'>
                    <div className="R3-C1-Responsiv-i" md={3}></div>
                    <div className="R3-C2-Responsiv-i" md={3}></div>
                    <div className="R3-C3-Responsiv-i" md={3}></div>
                </div>
                <div className='row-grid-responsiv'>
                    <div className="R4-C1-Responsiv-i" md={3}></div>
                    <div className="R4-C2-Responsiv-i" md={3}></div>
                    <div className="R4-C3-Responsiv-i" md={3}></div>
                </div>
            </div>
        </div>
    )
}

export { GridResponsiv }