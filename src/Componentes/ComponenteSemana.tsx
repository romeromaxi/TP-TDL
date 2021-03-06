import React, { ReactNode } from 'react';
import {Col, Row, ButtonToolbar} from 'reactstrap'
import { FaCalendarAlt } from "react-icons/fa";

import ComponenteDia from './ComponenteDia';

import Tarea from '../Interfaces/Tarea';
import ModalAltaTarea from './ModalAltaTarea';
import ButtonDropDownFiltroTareas from './ButtonDropDownFiltroTareas'
import _ from 'lodash'

/* Enums */
import TareaVisibilidadFiltro from '../Enums/TareaVisibilidadFiltro'

interface IProps{ };

interface IState{
    listaTareas: Tarea[];
    tareaVisibilidad: TareaVisibilidadFiltro;
    diaLocal: Date;
};

class ComponenteSemana extends React.Component<IProps, IState> {   
    
    nombreDias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    intervalo: number;
    
    constructor(props: IProps){
        super(props);
         
        this.state = {
            tareaVisibilidad: TareaVisibilidadFiltro.SinFiltro,
            listaTareas: [], diaLocal: new Date() 
        };

        this.borrarTarea = this.borrarTarea.bind(this);
        this.agregarNuevaTarea = this.agregarNuevaTarea.bind(this);
        this.filtrarVisibilidadTareas = this.filtrarVisibilidadTareas.bind(this);
    }

    componentDidMount() : void {
        this.intervalo = window.setInterval(() => this.setState({ diaLocal: new Date() }), 1000);
    }

    componentWillUnmount() : void {
        clearInterval(this.intervalo);
    }

    actualizarIds(lstTarea : Tarea[]): void {
        _.forEach(lstTarea, (unaTarea : Tarea, index : number) => unaTarea.id = index );
    }

    borrarTarea(idTarea: number): void {
        let listaTarea = _.cloneDeep(this.state.listaTareas);
        _.remove(listaTarea, unaTarea => unaTarea.id === idTarea);

        this.actualizarIds(listaTarea);
        this.setState({
            listaTareas: listaTarea
        });
    }

    agregarNuevaTarea(unaTareaNueva: Tarea[]): void {
        unaTareaNueva.forEach((unaTarea, index) => {
            unaTarea.id = this.state.listaTareas.length + index;
        })

        let nuevoStateTareas = this.state.listaTareas.concat(unaTareaNueva);
        this.setState({
            listaTareas: nuevoStateTareas
        });
    }

    obtenerTareasPorDia(unDia: string): Tarea[] {

        switch (this.state.tareaVisibilidad) {
            case TareaVisibilidadFiltro.Vigentes:
                return this.state.listaTareas.filter(
                        x => x.dia === unDia &&
                             x.estaVigente()
                    );

            case TareaVisibilidadFiltro.Vencidas:
                return this.state.listaTareas.filter(
                        x => x.dia === unDia &&
                             x.estaVencida()
                    );

            case TareaVisibilidadFiltro.Realizadas:
                return this.state.listaTareas.filter(
                        x => x.dia === unDia &&
                             x.estaHecha()
                    );
        
            default:
                return this.state.listaTareas.filter(x => x.dia === unDia);
        }
    }

    filtrarVisibilidadTareas(tareaVisibilidad: TareaVisibilidadFiltro): void {
        this.setState({
            tareaVisibilidad: tareaVisibilidad
        })
    }

    render() : ReactNode{
        
        return(
            <div className="div-ComponenteSemana">

                <Row className="div-ComponenteSemana-Header">
                    <Col className="titulo">
                        <FaCalendarAlt /> Calendario Cuarentenil     
                    </Col>
                    <div className='horaLocal'>
                        {this.state.diaLocal.toLocaleTimeString()}
                    </div>
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