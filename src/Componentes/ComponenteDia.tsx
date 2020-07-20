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
         
        this.state = {
            listaTareas: this.props.listaTareas
        };

        this.borrarTarea = this.borrarTarea.bind(this);
        this.agregarNuevaTarea = this.agregarNuevaTarea.bind(this);
        
    }

    // actualizarIds(){
    //     this.state = {
    //         listaTareas: this.props.listaTareas
    //     };

    //     // this.state.listaTareas.forEach((unaTarea, index) => {
    //     //     unaTarea.id = index;
    //     // })

    // }

    setLista(){
        this.state = {
            listaTareas: this.props.listaTareas
        };
    }

    borrarTarea(idTarea: number) {
        console.log(idTarea);
        this.props.onBorrarTarea(idTarea);

        this.setState({});
    }

    agregarNuevaTarea(unaTareaNueva: ITarea){
        unaTareaNueva.id = this.state.listaTareas.length;

        this.state.listaTareas.push(unaTareaNueva);
        
        this.setState({});
    }

    render(){      
        this.setLista();
        let { listaTareas } = this.state;

        return(
            <div className="div-DiaDeLaSemana">

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
  
