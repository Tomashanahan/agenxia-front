import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Grid5.css';
import AOS from 'aos';

const Grid5 = () => {
    AOS.init();
    return (
        <div className='container-grid-5' data-aos="fade-left">
            <Row className='Row-grid-5'>
                <Col className="R1-C1-5" md={6}>
                    <h1>MÁS BENEFICIOS</h1>
                    <p>Obtenga los niveles de comisión más altos de la industria con proveedores nacionales y internacionales preferidos de cruceros, hoteles, renta de autos, tours, eventos y seguros.</p>
                </Col>
                <Col className="R1-C2-5" md={6}>
                    <h1>MÁS EDUCACIÓN</h1>
                    <p>Mejore su personalidad profesional con oportunidades educativas y de desarrollo comercial integrales, eventos especializados, conferencias y aprendizaje entre socios.</p>
                </Col>
            </Row>
            <Row className='Row-grid-5'>
                <Col className="R2-C1-5" md={6}>
                    <h1>MÁS HERRAMIENTAS</h1>
                    <p>Construya y administre su negocio con soluciones de tecnología avanzada para ayudarlo a optimizar sus operaciones y simplificar el proceso de reserva. </p>
                </Col>
                <Col className="R2-C2-5" md={6}>
                    <h1>MÁS APOYO</h1>
                    <p>Prospere con el apoyo profesional de expertos. Apoyar es todo lo que hacemos, y nuestro único propósito es ayudarlo a tener más éxito. Tu éxito es nuestro éxito.</p>
                </Col>
            </Row>
        </div>
    )
}

export { Grid5 }