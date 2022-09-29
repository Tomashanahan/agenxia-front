import React from 'react';
import './Grid6.css';
import { Row, Col } from 'react-bootstrap';

const Grid6 = () => {
    return (
        <div className='container-grid6'>
            <Row className='Row-grid-6'>
                <Col className="R1-C1-6" md={3}></Col>
                <Col className="R1-C2-6" md={3}></Col>
                <Col className="R1-C3-6" md={3}></Col>
                <Col className="R1-C4-6" md={3}></Col>
            </Row>
            <Row className='Row-grid-6'>
                <Col className="R2-C1-6" md={3}></Col>
                <Col className="R2-C2-6" md={3}></Col>
                <Col className="R2-C3-6" md={3}></Col>
                <Col className="R2-C4-6" md={3}></Col>
            </Row>
            <Row className='Row-grid-6'>
                <Col className="R3-C1-6" md={3}></Col>
                <Col className="R3-C2-6" md={3}></Col>
                <Col className="R3-C3-6" md={3}></Col>
                <Col className="R3-C4-6" md={3}></Col>
            </Row>
            <Row className='Row-grid-6'>
                <Col className="R4-C1-6" md={3}></Col>
                <Col className="R4-C2-6" md={3}></Col>
                <Col className="R4-C3-6" md={3}></Col>
                <Col className="R4-C4-6" md={3}></Col>
            </Row>
            <Row className='Row-grid-6'>
                <Col className="R5-C1-6" md={3}></Col>
                <Col className="R5-C2-6" md={3}></Col>
                <Col className="R5-C3-6" md={3}></Col>
                <Col className="R5-C4-6" md={3}></Col>
            </Row>
            <Row className='Row-grid-6'>
                <Col className="R6-C1-6" md={3}></Col>
                <Col className="R6-C2-6" md={3}></Col>
                <Col className="R6-C3-6" md={3}></Col>
                <Col className="R6-C4-6" md={3}></Col>
            </Row>
            <Row className='Row-grid-6'>
                <Col className="R7-C1-6" md={3}></Col>
                <Col className="R7-C2-6" md={3}></Col>
                <Col className="R7-C3-6" md={3}></Col>
                <Col className="R7-C4-6" md={3}></Col>
            </Row>
        </div>
    )
}

export { Grid6 }