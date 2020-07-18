import React from 'react';
import {Col, Row, Button} from 'reactstrap'
import ComponenteDia from './ComponenteDia';




class ComponenteSemana extends React.Component {   
    
    
    semana = ['Lunes', 'Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];
    tareasLunes = ["Tarea Lunes 1"];
    tareasMartes: string[] = [];
    tareasMiercoles = [];
    tareasJueves = [];
    tareasViernes = [];
    tareasSabado = [];
    tareasDomingo = [];


    render(){
        
        return(
            <div className="div-ComponenteSemana">
    
                <Row >
                    <Col>
                        <ComponenteDia dia={this.semana[0]} tareas={this.tareasLunes}></ComponenteDia>
                    </Col>
                    <Col>
                        <ComponenteDia dia={this.semana[1]} tareas={this.tareasMartes}></ComponenteDia>
                    </Col>
                    <Col>
                        <ComponenteDia dia={this.semana[2]} tareas={this.tareasMiercoles}></ComponenteDia>
                    </Col>
                    <Col>
                        <ComponenteDia dia={this.semana[3]} tareas={this.tareasJueves}></ComponenteDia>
                    </Col>
                    <Col>
                        <ComponenteDia dia={this.semana[4]} tareas={this.tareasViernes}></ComponenteDia>
                    </Col>
                    <Col>
                        <ComponenteDia dia={this.semana[5]} tareas={this.tareasSabado}></ComponenteDia>
                    </Col>
                    <Col>
                        <ComponenteDia dia={this.semana[6]} tareas={this.tareasDomingo}></ComponenteDia>
                    </Col>
                </Row>
            </div>
        )    
    }
 
  }
  
  export default ComponenteSemana;