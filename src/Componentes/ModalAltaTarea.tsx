import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import Tarea from '../Interfaces/Tarea';

const ModalExample = (props: any) => {
  const {
    buttonLabel,
    className
  } = props;

  const [estaVisible, setEstaVisible] = useState(false);

  const toggle = () => setEstaVisible(!estaVisible);

  return (
    <div>
      <Button color="danger" onClick={toggle}>{buttonLabel}</Button>

      <Modal isOpen={estaVisible} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>

        <ModalBody>
            Alta tarea.
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;