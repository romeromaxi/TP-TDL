import React from 'react';
import {Col, Row, Button} from 'reactstrap'
import ComponenteDia from './ComponenteDia';


interface iDia{
    nombre: string;
};



class ComponenteSemana extends React.Component {   
    
    
    nombreDias = ['Lunes', 'Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];
    
    render(){
        
        return(
            <div className="div-ComponenteSemana">
    
                <Row >
                    {
                        this.nombreDias.map((unDia:string, i:number)=>{
                            return (
                            <Col>
                                <ComponenteDia dia={unDia} id={i}></ComponenteDia>
                            </Col>
                            )
                        })
                    }
                </Row>
            </div>
        )    
    }
 
  }
  
  export default ComponenteSemana;