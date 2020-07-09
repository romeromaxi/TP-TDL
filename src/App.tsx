import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContenedorCodigo from './Componentes/ContenedorCodigo';
import ContenedorDeStatement from './Componentes/ContenedorDeStatement';
import ContenedorMaquinaAbstracta from './Componentes/ContenedorMaquinaAbstracta';
import {Col, Row, Container} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Row className="tituloPrincipal">
        <h1 >KERNEL</h1>
      </Row>
      <Row>
        <Col>
          <ContenedorDeStatement />
        </Col>
       
        <Col>
          <ContenedorCodigo />
        </Col>
        <Col>
          <ContenedorMaquinaAbstracta />
        </Col>
      </Row>


    </div>
  );
}

export default App;
