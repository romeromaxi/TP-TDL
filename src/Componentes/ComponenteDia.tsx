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
        
        this.borrarTarea = this.borrarTarea.bind(this);
        this.agregarNuevaTarea = this.agregarNuevaTarea.bind(this);
    }

    borrarTarea(idTarea: number){
        this.state.listaTareas.forEach((unaTarea, index) => {

            if(unaTarea.id == idTarea)
                this.state.listaTareas.splice(index, 1);
        })

        this.setState({});
    }

    agregarNuevaTarea(unaTareaNueva: ITarea){
        unaTareaNueva.id = this.state.listaTareas.length + 1;

        this.state.listaTareas.push(unaTareaNueva);
        
        this.setState({});
    }

    render(){      
        let { listaTareas } = this.state;
  

        return(
            <div className="div-DiaDeLaSemana">

                <ModalAltaTarea onGuardarTarea={this.agregarNuevaTarea} labelBoton="Nueva Tarea"></ModalAltaTarea>
                
                <Row className="tituloDiaDeLaSemana">
                    <h3>{this.props.dia}</h3>                               
                </Row>

                <Row className="tareasDelDia">
                    <Col>
                        {listaTareas.map(tarea =>
                            <ComponenteTarea unaTarea={tarea}
                                             onBorrarTarea={this.borrarTarea}></ComponenteTarea>       
                        )}
                    </Col>             
                </Row>
                             
            </div>
        )
    }
  }
  
  export default ComponenteDia;
  
