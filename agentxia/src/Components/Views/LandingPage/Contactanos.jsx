import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './Contactanos.css';
import AOS from 'aos'

const Contactanos = () => {
  AOS.init()
  return (
    <div className='container-form'>
      <h1 className='form-h1' data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0">Suscríbete</h1>
      <h2 className='form-h2' data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0">PARA RECIBIR OFERTAS Y NOTICIAS</h2>
      <p className='form-p' data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0">Habla con un asesor sobre cuáles son tus objetivos de viaje y ellos comenzarán a construir tus vacaciones perfectas de inmediato.</p>

      <Form>
        <div className="cont-input-and-button">
          <Form.Group className="mb-3 " controlId="formBasicPassword" data-aos='fade-left'>
            <Form.Control className='form-control-contac rounded-pill' type="email" placeholder='Ingresa tu correo' />
          </Form.Group>
          <Button className='btn-form-contac rounded-pill' type="submit" data-aos='fade-right'>
            Suscríbete
          </Button>
        </div>
      </Form>
    </div>
  )
}

export { Contactanos }