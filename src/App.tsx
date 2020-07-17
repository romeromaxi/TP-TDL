import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import logo from './logo.svg';
import {Col, Row, Container} from 'reactstrap';

import ModalAltaTarea from './Componentes/ModalAltaTarea';

function App() {
  return (
    <div className="App">
      <ModalAltaTarea buttonLabel="Esa"></ModalAltaTarea>
    </div>
  );
}

export default App;
