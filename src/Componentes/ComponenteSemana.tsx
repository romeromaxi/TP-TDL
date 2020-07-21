import React from 'react';
import {Col, Row, Button} from 'reactstrap'
import ComponenteDia from './ComponenteDia';

import ITarea from '../Interfaces/Tarea';
import ModalAltaTarea from './ModalAltaTarea';

interface IDia{
    id: number;
    nombre: string;
    agregarTarea: (unaTarea: ITarea) => void;
};

interface IProps{  
};


interface IState{  
    listaTareas: Array<ITarea>;
};

class ComponenteSemana extends React.Component<IProps, IState> {   
    
    
    nombreDias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    
    constructor(props: IProps){
        super(props);
         
        this.state = {
            listaTareas: []
        };

        this.borrarTarea = this.borrarTarea.bind(this);
        this.agregarNuevaTarea = this.agregarNuevaTarea.bind(this);
    }

    actualizarIds(){
        this.state.listaTareas.forEach((unaTarea, index) => {
            unaTarea.id = index;
        })
    }

    borrarTarea(idTarea: number){
        this.state.listaTareas.forEach((unaTarea, index) => {

            if(unaTarea.id == idTarea)
                this.state.listaTareas.splice(index, 1);
        })

        this.actualizarIds();
        this.setState({});
    }

    agregarNuevaTarea(unaTareaNueva: Array<ITarea>){
        unaTareaNueva.forEach((unaTarea, index) => {
            unaTarea.id = this.state.listaTareas.length + index;
        })

        let nuevoStateTareas = this.state.listaTareas.concat(unaTareaNueva);
        this.setState({
            listaTareas: nuevoStateTareas
        });
    }

    render(){
        
        return(
            <div className="div-ComponenteSemana">

                <Row className="div-ComponenteSemana-Header">
                    <Col className="titulo">
                        Calendario Cuarentenil
                    </Col>
                    <Col className="buttonAltaTarea">
                        <ModalAltaTarea onGuardarTarea={this.agregarNuevaTarea} labelBoton="Nueva Tarea"></ModalAltaTarea>
                    </Col>
                </Row>


                <Row >
                    {
                        this.nombreDias.map((unDia:string, i:number)=>{
                            
                            return (
                            <Col key={i}>
                                <ComponenteDia key={i} dia={unDia} id={i} listaTareas={this.state.listaTareas.filter(x => x.dia == unDia)} onBorrarTarea={this.borrarTarea}></ComponenteDia>
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