import React from 'react';
import ReactDOM from 'react-dom';
import './Style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Row, Container,Button} from 'reactstrap';


class ContenedorDeStatement extends React.Component {
    render(){
        return (
                <div className="div-Contenedor-Statement">
                    <Row className="titulo">
                        <h1 >
                            Statement
                        </h1>                    
                    </Row>
                    <hr className="linea"></hr>
                    <Col className="lista-statements">
                        <Row>
                            <Button className="botonesStatement" color="info"> &lt;S1&gt; &lt;S2&gt;  </Button>
                        </Row>
                        <Row>
                            <Button className="botonesStatement" color="info"> Local &lt;X&gt; in &lt;S&gt; end  </Button>
                        </Row>
                        <Row>
                            <Button className="botonesStatement" color="info"> &lt;X1&gt; = &lt;X2&gt;  </Button>
                        </Row>
                        <Row>
                            <Button className="botonesStatement" color="info"> &lt;X&gt; = &lt;V&gt;  </Button>
                        </Row>
                        <Row>
                            <Button className="botonesStatement" color="info"> If &lt;X&gt; then &lt;S1&gt; else &lt; S2 &gt; end  </Button>
                        </Row>
                    </Col>
                 
                </div>
                )
    }
}

export default ContenedorDeStatement;