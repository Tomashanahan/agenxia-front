import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import foto from '../../../assets/fotoPerfil.png'
import './Cards.css';
import { AiFillStar } from 'react-icons/ai'
import { BsFillRecordFill } from 'react-icons/bs'
import AOS from 'aos'

const Cards = (props) => {
    AOS.init()
    return (
        <Col md={6} sm={12}>
            <Card className='reviews-cards' data-aos={props.data_aos}
                data-aos-easing="linear"
                data-aos-duration="1500">
                <Card.Body>
                    <Card.Title className='text-card-review'>Review</Card.Title>
                    <Card.Subtitle
                        className="mb-2 text-muted text-card-review">
                        <AiFillStar style={{ color: "#047AF1" }} />
                        <AiFillStar style={{ color: "#047AF1" }} />
                        <AiFillStar style={{ color: "#047AF1" }} />
                        <AiFillStar style={{ color: "#047AF1" }} />
                    </Card.Subtitle>
                    <Card.Text className='text-card-review'>
                        Gane la confianza del consumidor con el reconocimiento NACIONAL, además de obtener acceso sin restricciones a los productos, precios y soporte profesional exclusivos de AGENTXIA
                    </Card.Text>
                    <Card.Text className='text-card-review'>
                        <Image src={foto}
                            className='rounded-circle img-perfil-review' />
                        John Lucas {<BsFillRecordFill />} 5 minutes ago
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export { Cards }