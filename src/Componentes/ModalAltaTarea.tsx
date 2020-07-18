import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, FormText, Col } from 'reactstrap';

import Tarea from '../Interfaces/Tarea';

const ModalAltaTarea = (props: any) => {
  const {
    buttonLabel,
    className
  } = props;

  const [estaVisible, setEstaVisible] = useState(false);

  const toggle = () => setEstaVisible(!estaVisible);

  const handleSubmit = () => {
    console.log('Se envio');
  }

  return (
    <div>
      <Button color="primary" onClick={toggle}>{buttonLabel}</Button>

      <Modal isOpen={estaVisible} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Agregar Tarea</ModalHeader>

        <ModalBody>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="tituloTarea">Título</Label>
              <Input type="text" name="titulo" id="tituloTarea" placeholder="" />
            </FormGroup>
            <FormGroup>
              <Label for="horaTarea">Hora</Label>
              <Input
                type="time"
                name="hora"
                id="horaTarea"
                placeholder="time placeholder"
              />
            </FormGroup>
            <FormGroup>
              <Label for="descripcionTarea">Descripción</Label>
              <Input type="textarea" name="descripcion" id="descripcionTarea" />
            </FormGroup>
            <FormGroup check row>
              <Col sm={{ size: 10, offset: 9 }}>
                <Button color="primary">Guardar</Button>
              </Col>
            </FormGroup>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ModalAltaTarea;