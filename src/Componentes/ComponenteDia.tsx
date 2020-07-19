import '../App.css';

import React,{ MouseEvent}  from 'react';
import { Row, Col, Button } from 'reactstrap';

import ITarea from '../Interfaces/Tarea';
import ModalAltaTarea from './ModalAltaTarea';
import ComponenteTarea from './ComponenteTarea';

interface IProps{
    id: number;
    dia: string;    
};

interface IState {
    listaTareas: Array<ITarea>;
};

interface IVisbilidad {
    visibilidad: boolean;
}


class ComponenteDia extends React.Component<IProps, IState> {
    
    constructor(props: IProps){
        super(props);
         
        this.state = {
            listaTareas: []
        };
        
        this.agregarNuevaTarea = this.agregarNuevaTarea.bind(this);
    }

    agregarNuevaTarea(unaTareaNueva: ITarea){

        this.state.listaTareas.push(unaTareaNueva);
        
        this.setState({});
    }

    render(){      
        let {listaTareas} = this.state;
  

        return(
            <div className="div-DiaDeLaSemana">

                <ModalAltaTarea onGuardarTarea={this.agregarNuevaTarea} labelBoton="Nueva Tarea"></ModalAltaTarea>
                
                <Row className="tituloDiaDeLaSemana">
                    <h3>{this.props.dia}</h3>                               
                </Row>

                <Row className="tareasDelDia">
                    <Col>
                        {listaTareas.map(tarea =>
                            <ComponenteTarea nombre={tarea.nombre} descripcion={tarea.descripcion} hora={tarea.hora}></ComponenteTarea>
                                
                        )}
                    
                    </Col>             
                </Row>
                             
            </div>
        )
    }
  }
  
  export default ComponenteDia;
  
