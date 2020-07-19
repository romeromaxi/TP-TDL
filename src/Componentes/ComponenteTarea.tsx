import React,{ MouseEvent}  from 'react';
import { Row, Col, Button,Container } from 'reactstrap';
import ITarea from '../Interfaces/Tarea';
import '../App.css';

interface IVisibilidad{
    visibilidad: boolean;
}

class ComponenteTarea extends React.Component<ITarea,IVisibilidad> {

    constructor(props: ITarea){
        super(props);

         this.state ={
             visibilidad: true
         };

        this.borrarTarea = this.borrarTarea.bind(this);
    };

    borrarTarea(){
        this.setState({
            visibilidad:false
        })
    };

    render(){
        return(
            <div>
                
                <Container warn={this.state.visibilidad} className="cont-tarea" style={{justifyContent:"center"}}>
          
                    <Row >
                        <Col>
                            {<h5>{this.props.nombre}</h5>}                            
                        </Col>
                        <Button close onClick={this.borrarTarea}></Button>
                    </Row>
                    <Row style={{justifyContent:"center"}}>
                        <p>Hora: {this.props.hora}</p>
                    </Row>
                    <Row style={{justifyContent:"center"}}>
                        <p>Descripcion: {this.props.descripcion}</p>
                    </Row>                    
                </Container>
            </div>
        )
    }

}

  
export default ComponenteTarea;
  