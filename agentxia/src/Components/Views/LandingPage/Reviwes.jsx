import React from 'react';
import './Reviews.css';
import { Row, Col } from 'react-bootstrap';
import { Cards } from './Cards';

const Reviwes = () => {
    return (
        <div className='container-reviews'>
            <h1 className='reviews-h1'>Reviews</h1>
            <p className='reviews-p'>Lo que dicen nuestros clientes</p>
            <Row className='container-review-card'>
                <Cards />
                <Cards />
            </Row>
        </div>
    )
}

export { Reviwes }