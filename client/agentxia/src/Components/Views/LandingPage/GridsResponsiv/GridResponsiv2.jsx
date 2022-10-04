import React from 'react';
import {Row, Col, Button} from 'react-bootstrap'
import './GridResponsiv2.css'

const GridResponsiv2 = (props) => {
    return (
        <div className='container-responsiv-2'>
            <Row className='Row-grid-text-Responsiv-2'>
                <Col className="R3-C1-Responsiv-2" md={12}>
                    <div>
                        <h1>Únase a la agencia anfitriona diseñada para profesionales de viajes independientes.</h1>
                        <Button className='btn-R3-Responsiv-2'>Saber mas</Button>
                    </div>
                </Col>
            </Row>
            <div className='cont-grid-responsiv'>
                <div className='row-grid-responsiv'>
                    <div className="R1-C1-Responsiv-2-i" md={3}></div>
                    <div className="R1-C2-Responsiv-2-i" md={3}></div>
                    <div className="R1-C3-Responsiv-2-i" md={3}></div>
                </div>
                <div className='row-grid-responsiv'>
                    <div className="R2-C1-Responsiv-2-i" md={3}></div>
                    <div className="R2-C2-Responsiv-2-i" md={3}></div>
                    <div className="R2-C3-Responsiv-2-i" md={3}></div>
                </div>
                <div className='row-grid-responsiv'>
                    <div className="R3-C1-Responsiv-2-i" md={3}></div>
                    <div className="R3-C2-Responsiv-2-i" md={3}></div>
                    <div className="R3-C3-Responsiv-2-i" md={3}></div>
                </div>
                <div className='row-grid-responsiv'>
                    <div className="R4-C1-Responsiv-2-i" md={3}></div>
                    <div className="R4-C2-Responsiv-2-i" md={3}></div>
                    <div className="R4-C3-Responsiv-2-i" md={3}></div>
                </div>
            </div>
        </div>
    )
}

export { GridResponsiv2 }