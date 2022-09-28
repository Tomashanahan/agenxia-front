import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './Contactanos.css';

const Contactanos = () => {
  return (
    <div className='container-form'>
      <h1 className='form-h1'>Suscríbete</h1>
      <h2 className='form-h2'>PARA RECIBIR OFERTAS Y NOTICIAS</h2>
      <p className='form-p'>Habla con un asesor sobre cuáles son tus objetivos de viaje y ellos comenzarán a construir tus vacaciones perfectas de inmediato.</p>

      <Form>
       <div className="cont-input-and-button">
       <Form.Group className="mb-3 " controlId="formBasicPassword">
          <Form.Control className='form-control-contac rounded-pill' type="email" placeholder='Ingresa tu correo' />
        </Form.Group>
        <Button className='btn-form-contac rounded-pill' type="submit">
          Suscríbete
        </Button>
       </div>
      </Form>
    </div>
  )
}

export { Contactanos }