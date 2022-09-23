import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './Contactanos.css';

const Contactanos = () => {
  return (
    <div className='container-form'>
      <h1 className='form-h1'>Contactanos</h1>
      <p className='form-p'>Habla con un asesor sobre cuáles son tus objetivos de viaje y ellos comenzarán a construir tus vacaciones perfectas de inmediato.</p>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicNombre">
          <Form.Label className='label-contac'>Nombre</Form.Label>
          <Form.Control className='form-control-contac' type="text" />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className='label-contac'>Correo</Form.Label>
          <Form.Control className='form-control-contac' type="email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className='label-contac'>Mensaje</Form.Label>
          <Form.Control className='form-control-contac-textA' as="textarea" rows={6} />
        </Form.Group>

        <Button className='btn-form-contac' type="submit">
          Enviar
        </Button>
      </Form>
    </div>
  )
}

export { Contactanos }