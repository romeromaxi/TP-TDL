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

interface IState{
    nuevaTarea : string;
    listaTareas: Array<ITarea>;
};

class ComponenteDia extends React.Component<IProps, IState> {
    
    constructor(props: IProps){
        super(props);
         
        this.state = {
            nuevaTarea: 'hola',
            listaTareas: []
        };
        
        this.agregarNuevaTarea = this.agregarNuevaTarea.bind(this);
    }

    agregarNuevaTarea(unaTareaNueva: ITarea){

        this.state.listaTareas.push(unaTareaNueva);
        this.setState({

        });
    }

    render(){      
        let {listaTareas, nuevaTarea} = this.state;
  

        return(
            <div className="div-DiaDeLaSemana">

                <ModalAltaTarea onGuardarTarea={this.agregarNuevaTarea} labelBoton="Nueva Tarea"></ModalAltaTarea>
                
                <Row className="tituloDiaDeLaSemana">
                    <h3>{this.props.dia}</h3>                               
                </Row>
                <Row className="tareasDelDia">                    
                    <ul>
                        {listaTareas.map(tarea =>
                            <li>{tarea.nombre}</li>
                        )}
                    </ul>
                                        
                </Row>
                             
            </div>
        )
    }
  }
  
  export default ComponenteDia;
  
