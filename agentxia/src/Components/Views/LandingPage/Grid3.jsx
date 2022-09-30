import React from 'react';
import './Grid3.css';
import { Row, Col, Button } from 'react-bootstrap';
import AOS from 'aos';

const Grid3 = () => {
    AOS.init({
        duration: 1000,
        delay: 400,
        easing: 'easeInOutQuad',
    })
    return (
        <>
            <div className='container-grid-3' data-aos="fade-right">
                <Row className='Row-grid-3'>
                    <Col className="R1-C1-3" data-aos="fade-down-left" md={3}></Col>
                    <Col className="R1-C2-3" data-aos="fade-up-right" md={3}></Col>
                    <Col className="R1-C3-3" data-aos="fade-down-left" md={3}></Col>
                    <Col className="R1-C4-3" data-aos="fade-up-right" md={3}></Col>
                </Row>
                <Row className='Row-grid-3'>
                    <Col className="R2-C1-3" data-aos="fade-up-right" md={3}></Col>
                    <Col className="R2-C2-3" data-aos="fade-down-left" md={3}></Col>
                    <Col className="R2-C3-3" data-aos="fade-up-right" md={3}></Col>
                    <Col className="R2-C4-3" data-aos="fade-down-left" md={3}></Col>
                </Row>
                <Row className='Row-grid-text-3'>
                    <Col className="R3-C1-3" data-aos="fade-up-left" md={3}></Col>
                    <Col className="R3-C2-3" data-aos="fade-down-right" md={9}>
                        <div>
                            <h1>Convierta su pasión por viajar en ganancias</h1>
                            <p>¿Está buscando una oportunidad para ser su propio jefe, administrar un negocio rentable y tener la flexibilidad para viajar?</p>
                            <p>No busque más y conviértete en un Agente de viajes AGENTXIA Independiente.</p>
                        </div>
                    </Col>
                </Row>
                <Row className='Row-grid-3'>
                    <Col className="R4-C1-3" data-aos="fade-down-left" md={3}></Col>
                    <Col className="R4-C2-3" data-aos="fade-up-right" md={3}></Col>
                    <Col className="R4-C3-3" data-aos="fade-down-left" md={3}></Col>
                    <Col className="R4-C4-3" data-aos="fade-up-right" md={3}></Col>
                </Row>
            </div>
        </>
    )
}

export { Grid3 }