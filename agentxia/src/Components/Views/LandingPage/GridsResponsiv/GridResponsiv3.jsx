import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import './GridResponsiv3.css'

const GridResponsiv3 = () => {
    return (
        <div className='container-responsiv-3'>
            <Row className='Row-grid-text-Responsiv-3'>
                <Col className="R3-C2-Responsiv-3" md={12}>
                    <div>
                        <h1>Convierta su pasión por viajar en ganancias</h1>
                        <p>¿Está buscando una oportunidad para ser su propio jefe, administrar un negocio rentable y tener la flexibilidad para viajar?</p>
                        <p>No busque más y conviértete en un Agente de viajes AGENTXIA Independiente.</p>
                    </div>
                </Col>
            </Row>
            <div className='cont-grid-responsiv-3'>
                <div className='row-grid-responsiv-3'>
                    <div className="R1-C1-Responsiv-i-3" md={3}></div>
                    <div className="R1-C2-Responsiv-i-3" md={3}></div>
                    <div className="R1-C3-Responsiv-i-3" md={3}></div>
                </div>
                <div className='row-grid-responsiv-3'>
                    <div className="R2-C1-Responsiv-i-3" md={3}></div>
                    <div className="R2-C2-Responsiv-i-3" md={3}></div>
                    <div className="R2-C3-Responsiv-i-3" md={3}></div>
                </div>
                <div className='row-grid-responsiv-3'>
                    <div className="R3-C1-Responsiv-i-3" md={3}></div>
                    <div className="R3-C2-Responsiv-i-3" md={3}></div>
                    <div className="R3-C3-Responsiv-i-3" md={3}></div>
                </div>
                <div className='row-grid-responsiv-3'>
                    <div className="R4-C1-Responsiv-i-3" md={3}></div>
                    <div className="R4-C2-Responsiv-i-3" md={3}></div>
                    <div className="R4-C3-Responsiv-i-3" md={3}></div>
                </div>
            </div>
        </div>
    )
}

export { GridResponsiv3 }
