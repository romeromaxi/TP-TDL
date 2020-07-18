import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import logo from './logo.svg';
import {Col, Row, Container} from 'reactstrap';

import ModalAltaTarea from './Componentes/ModalAltaTarea';
import ComponenteSemana from './Componentes/ComponenteSemana';

function App() {
  return (
    <div className="App">
      <Row>
        <ModalAltaTarea buttonLabel="Boton para agregar tarea"></ModalAltaTarea>
      </Row>
        <ComponenteSemana></ComponenteSemana>
      <Row>

      </Row>
    </div>
  );
}

export default App;
