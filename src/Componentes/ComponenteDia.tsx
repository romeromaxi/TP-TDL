import '../App.css';

import React,{ MouseEvent}  from 'react';
import { Row, Col, Button } from 'reactstrap';

import ITarea from '../Interfaces/Tarea';
import ModalAltaTarea from './ModalAltaTarea';
import ComponenteTarea from './ComponenteTarea';

interface IProps{
    id: number;
    dia: string;
    listaTareas: Array<ITarea>;
    onBorrarTarea: (idTarea: number) => void; 
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
        
        this.borrarTarea = this.borrarTarea.bind(this);        
    }
    
    borrarTarea(idTarea: number) {
        console.log(idTarea);
        this.props.onBorrarTarea(idTarea);
    }

    render(){      
        let { listaTareas } = this.props;
        listaTareas.sort((a, b) => (a.hora > b.hora) ? 1 : -1);

        return(
            <div className="div-DiaDeLaSemana">

                <Row className="tituloDiaDeLaSemana">
                    <h3>{this.props.dia}</h3>                               
                </Row>

                <Row className="tareasDelDia">
                    <Col>
                        {listaTareas.map(tarea =>
                            <ComponenteTarea key={tarea.id} unaTarea={tarea}
                                             onBorrarTarea={this.borrarTarea}></ComponenteTarea>       
                        )}
                    </Col>             
                </Row>
                             
            </div>
        )
    }
  }
  
  export default ComponenteDia;
  
