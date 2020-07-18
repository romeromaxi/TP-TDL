import React  from 'react';
import '../App.css';
import { Row, Col } from 'reactstrap';

interface Props{
    dia: string;
    
};

class ComponenteDia extends React.Component<Props> {

    


    render(){
        
        return(
            <div className="div-DiaDeLaSemana">
      
                <Row className="tituloDiaDeLaSemana">
                    <h3>{this.props.dia}</h3>                    
                </Row>
                <Row className="tareasDelDia">
                    
                </Row>
                             
            </div>
        )
    }
  }
  
  export default ComponenteDia;
  
