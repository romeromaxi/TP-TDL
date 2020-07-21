import React,{ MouseEvent}  from 'react';
import { Row, Col, Button,Container } from 'reactstrap';
import ITarea from '../Interfaces/Tarea';
import '../App.css';

interface IProps{
    unaTarea: ITarea;
    onBorrarTarea: (idTarea: number) => void;   
};

interface IVisibilidad{
    visibilidad: boolean;
}

class ComponenteTarea extends React.Component<IProps,IVisibilidad> {

    constructor(props: IProps){
        super(props);

         this.state ={
             visibilidad: true
         };

        this.borrarTarea = this.borrarTarea.bind(this);
    };

    borrarTarea() {
        this.props.onBorrarTarea(this.props.unaTarea.id);
    };

    render(){
        return(
            <div>
                
                <Container  warn={this.state.visibilidad}
                            className={this.props.unaTarea.hora > (new Date()).toLocaleTimeString(['en-GB'], {hour: '2-digit', minute:'2-digit'}) ? "cont-tareavigente" :"cont-tareavencida"}
                            style={{justifyContent:"center"}}>
          
                    <Row >
                        <Col>
                            {<h5>{this.props.unaTarea.nombre}</h5>}                            
                        </Col>
                        <Button close onClick={this.borrarTarea}></Button>
                    </Row>
                    <Row style={{justifyContent:"center"}}>
                        <p>Hora: {this.props.unaTarea.hora}</p>
                    </Row>
                    <Row style={{justifyContent:"center"}}>
                        <p>Descripcion: {this.props.unaTarea.descripcion}</p>
                    </Row>                    
                </Container>
            </div>
        )
    }

}

  
export default ComponenteTarea;
  