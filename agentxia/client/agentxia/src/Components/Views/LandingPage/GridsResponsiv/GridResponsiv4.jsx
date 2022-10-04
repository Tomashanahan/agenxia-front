import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './GridResponsiv4.css'

const GridResponsiv4 = () => {
    return (
        <div className='container-responsiv-4'>
            <Row className='Row-grid-text-Responsiv-4'>
                <Col className="R3-C2-Responsiv-4" md={12}>
                    <div>
                        <h1>Convierta su pasión por viajar en ganancias</h1>
                        <p>¿Está buscando una oportunidad para ser su propio jefe, administrar un negocio rentable y tener la flexibilidad para viajar?</p>
                        <p>No busque más y conviértete en un Agente de viajes AGENTXIA Independiente.</p>
                    </div>
                </Col>
            </Row>
            <div className='cont-grid-responsiv-4'>
                <div className='row-grid-responsiv-4'>
                    <div className="R1-C1-Responsiv-i-4" md={3}></div>
                    <div className="R1-C2-Responsiv-i-4" md={3}></div>
                    <div className="R1-C3-Responsiv-i-4" md={3}></div>
                </div>
                <div className='row-grid-responsiv-4'>
                    <div className="R2-C1-Responsiv-i-4" md={3}></div>
                    <div className="R2-C2-Responsiv-i-4" md={3}></div>
                    <div className="R2-C3-Responsiv-i-4" md={3}></div>
                </div>
                <div className='row-grid-responsiv-4'>
                    <div className="R3-C1-Responsiv-i-4" md={3}></div>
                    <div className="R3-C2-Responsiv-i-4" md={3}></div>
                    <div className="R3-C3-Responsiv-i-4" md={3}></div>
                </div>
                <div className='row-grid-responsiv-4'>
                    <div className="R4-C1-Responsiv-i-4" md={3}></div>
                    <div className="R4-C2-Responsiv-i-4" md={3}></div>
                    <div className="R4-C3-Responsiv-i-4" md={3}></div>
                </div>
            </div>
        </div>
    )
}

export { GridResponsiv4 }
