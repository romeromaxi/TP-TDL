import React from 'react';
import {Col, Row, ButtonToolbar} from 'reactstrap'
import ComponenteDia from './ComponenteDia';

import ITarea from '../Interfaces/Tarea';
import UtilFecha from '../Util/UtilFechaHoy'
import ModalAltaTarea from './ModalAltaTarea';
import ButtonDropDownFiltroTareas from './ButtonDropDownFiltroTareas'

/* Enums */
import TareaVisibilidadFiltro from '../Enums/TareaVisibilidadFiltro'


interface IDia{
    id: number;
    nombre: string;
    agregarTarea: (unaTarea: ITarea) => void;
};

interface IProps{  
};


interface IState{
    listaTareas: Array<ITarea>;
    tareaVisibilidad: TareaVisibilidadFiltro;
};

class ComponenteSemana extends React.Component<IProps, IState> {   
    
    
    nombreDias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    
    constructor(props: IProps){
        super(props);
         
        this.state = {
            tareaVisibilidad: TareaVisibilidadFiltro.SinFiltro,
            listaTareas: []
        };

        this.borrarTarea = this.borrarTarea.bind(this);
        this.agregarNuevaTarea = this.agregarNuevaTarea.bind(this);
        this.filtrarVisibilidadTareas = this.filtrarVisibilidadTareas.bind(this);
    }

    actualizarIds() {
        this.state.listaTareas.forEach((unaTarea, index) => {
            unaTarea.id = index;
        })
    }

    borrarTarea(idTarea: number) {
        this.state.listaTareas.forEach((unaTarea, index) => {

            if(unaTarea.id === idTarea)
                this.state.listaTareas.splice(index, 1);
        })

        this.actualizarIds();
        this.setState({});
    }

    agregarNuevaTarea(unaTareaNueva: Array<ITarea>) {
        unaTareaNueva.forEach((unaTarea, index) => {
            unaTarea.id = this.state.listaTareas.length + index;
        })

        let nuevoStateTareas = this.state.listaTareas.concat(unaTareaNueva);
        this.setState({
            listaTareas: nuevoStateTareas
        });
    }

    obtenerTareasPorDia(unDia: string) {

        switch (this.state.tareaVisibilidad) {
            case TareaVisibilidadFiltro.Vigentes:
                return this.state.listaTareas.filter(
                        x => x.dia === unDia &&
                        !UtilFecha.esFechaPasada(x.dia, x.hora)
                    );

            case TareaVisibilidadFiltro.Vencidas:
                return this.state.listaTareas.filter(
                        x => x.dia === unDia &&
                        UtilFecha.esFechaPasada(x.dia, x.hora)
                    );
        
            default:
                return this.state.listaTareas.filter(x => x.dia === unDia);
        }
    }

    filtrarVisibilidadTareas(tareaVisibilidad: TareaVisibilidadFiltro) {
        this.setState({
            tareaVisibilidad: tareaVisibilidad
        })
    }



    render(){
        
        return(
            <div className="div-ComponenteSemana">

                <Row className="div-ComponenteSemana-Header">
                    <Col className="titulo">
                        Calendario Cuarentenil
                    </Col>
                    <Col className="div-ComponenteSemana-HeaderButtons">
                        <ButtonToolbar>
                            <ButtonDropDownFiltroTareas onFiltraTareas={this.filtrarVisibilidadTareas}></ButtonDropDownFiltroTareas>
                            <ModalAltaTarea onGuardarTarea={this.agregarNuevaTarea} labelBoton="Nueva Tarea"></ModalAltaTarea>
                        </ButtonToolbar>
                    </Col>
                </Row>


                <Row >
                    {
                        this.nombreDias.map((unDia:string, i:number)=>{
                            
                            return (
                                <Col key={i}>
                                    <ComponenteDia id={i} key={i} dia={unDia} 
                                                listaTareas={this.obtenerTareasPorDia(unDia)} 
                                                onBorrarTarea={this.borrarTarea}></ComponenteDia>
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