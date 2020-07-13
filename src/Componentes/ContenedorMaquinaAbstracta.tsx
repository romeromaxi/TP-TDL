import React from 'react';
import ReactDOM from 'react-dom';
import './Style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Row, Container,Button} from 'reactstrap';


class ContenedorMaquinaAbstracta extends React.Component {
    render(){
        return (
                <div className="div-Contenedor">
                    <Row className="titulo">
                        <h1 >
                            Maquina Abstracta
                        </h1>                    
                    </Row>
                    <hr className="linea"></hr>
                    <Col sm={{ size: 10 , order: 2, offset: 1 }} className="maquinaAbstracta_contenido" >
                        <h4>ST</h4>
                        <hr className="lineal"></hr>
                    </Col>
                    <Col sm={{ size: 10 , order: 2, offset: 1 }} className="maquinaAbstracta_contenido" >
                        <h4>Sigma</h4>
                        <hr className="lineal"></hr>
                    </Col>
                    <Col sm={{ size: 10 , order: 2, offset: 1 }} className="maquinaAbstracta_contenido" >
                        <h4>Entorno</h4>
                        <hr className="lineal"></hr>
                    </Col>
                 
                </div>
                )
    }
}

export default ContenedorMaquinaAbstracta;