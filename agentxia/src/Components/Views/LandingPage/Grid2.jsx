import React from 'react'
import { Row, Col, Button } from 'react-bootstrap';
import './Grid2.css';
import AOS from 'aos';


const Grid2 = () => {
    AOS.init()
    return (
        <>
            <div className='container-grid-2' data-aos="fade-right">
                <Row className='Row-grid-2'>
                    <Col className="R1-C1-2" md={3}></Col>
                    <Col className="R1-C2-2" md={3}></Col>
                    <Col className="R1-C3-2" md={3}></Col>
                    <Col className="R1-C4-2" md={3}></Col>
                </Row>
                <Row className='Row-grid-2'>
                    <Col className="R2-C1-2" md={3}></Col>
                    <Col className="R2-C2-2" md={3}></Col>
                    <Col className="R2-C3-2" md={3}></Col>
                    <Col className="R2-C4-2" md={3}></Col>
                </Row>
                <Row className='Row-grid-text-2'>
                    <Col className="R3-C1-2" md={9}>
                        <div>
                            <h1>Únase a la agencia anfitriona diseñada para profesionales de viajes independientes.</h1>
                            <Button className='btn-R3-2'>Saber mas</Button>
                        </div>
                    </Col>
                    <Col className="R3-C2-2" md={3}></Col>

                </Row>
                <Row className='Row-grid-2'>
                    <Col className="R4-C1-2" md={3}></Col>
                    <Col className="R4-C2-2" md={3}></Col>
                    <Col className="R4-C3-2" md={3}></Col>
                    <Col className="R4-C4-2" md={3}></Col>
                </Row>
            </div>
        </>
    )
}

export { Grid2 }