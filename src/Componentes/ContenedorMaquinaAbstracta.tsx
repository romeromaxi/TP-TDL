import React from 'react';
import ReactDOM from 'react-dom';
import './Style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Row, Container,Button} from 'reactstrap';


class ContenedorMaquinaAbstracta extends React.Component {
    render(){
        return (
                <div className="div-Contenedor-Statement">
                    <Row className="titulo">
                        <h1 >
                            Maquina Abstracta
                        </h1>                    
                    </Row>
                    <hr className="linea"></hr>
            
                 
                </div>
                )
    }
}

export default ContenedorMaquinaAbstracta;