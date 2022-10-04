import React from 'react';
import './Reviews.css';
import { Row, Col } from 'react-bootstrap';
import { Cards } from './Cards';

const Reviwes = () => {
    let cards = [0, 1];
    return (
        <div className='container-reviews'>
            <h1 className='reviews-h1'>Reviews</h1>
            <p className='reviews-p'>Lo que dicen nuestros clientes</p>
            <Row className='container-review-card'>
                {cards.map(e => {
                    if (e % 2 === 0) return <Cards data_aos="fade-down" />
                    else return <Cards data_aos="fade-up" />
                })}
            </Row>
        </div>
    )
}

export { Reviwes }