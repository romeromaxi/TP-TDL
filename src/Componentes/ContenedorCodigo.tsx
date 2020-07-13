import React from 'react';
import ReactDOM from 'react-dom';
import './Style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Row, Container,Button} from 'reactstrap';


class ContenedorCodigo extends React.Component {
    render(){
        return (
                <div className="div-Contenedor">
                    <Row className="titulo">
                        <h1 >
                            Codigo
                        </h1>                    
                    </Row>
                    <hr className="linea"></hr>
            
                 
                </div>
                )
    }
}

export default ContenedorCodigo;