import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Contacto() {
  return (
    <div className='contenedor'>
      <h1> Cuentanos, ¿en que te podemos ayudar? </h1>

      <div className='formulario'>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label> Correo: </Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label> Descripcion </Form.Label>
            <Form.Control as="textarea" rows={4} />
          </Form.Group>

          <div className='boton'>
            <Button variant="danger" type="submit">
              Enviar
            </Button>
          </div>
        </Form>
      </div>
    </div>
  )
}
