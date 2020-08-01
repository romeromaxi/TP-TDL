import React, { ReactNode } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { FaDotCircle } from "react-icons/fa";

/* Enums */
import TareaVisibilidadFiltro from '../Enums/TareaVisibilidadFiltro'

interface IProps{
    onFiltraTareas: (tareaVisibilidad: TareaVisibilidadFiltro) => void;
 };
  
interface IState{
    dropdownOpen: boolean
};

class ButtonDropDownFiltroTareas extends React.Component<IProps, IState> {

    constructor(props: IProps){
        super(props);
         
        this.state = {
            dropdownOpen: false
        };

        this.cambiarVisibilidad = this.cambiarVisibilidad.bind(this);

        this.filtrarTareasPorVigentes = this.filtrarTareasPorVigentes.bind(this);
        this.filtrarTareasPorVencidas = this.filtrarTareasPorVencidas.bind(this);
        this.filtrarTareasPorSinFiltro = this.filtrarTareasPorSinFiltro.bind(this);
        this.filtrarTareasPorRealizadas = this.filtrarTareasPorRealizadas.bind(this);
    }

    cambiarVisibilidad(): void {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        })
    }

    filtrarTareasPorVigentes(): void {
        this.props.onFiltraTareas(TareaVisibilidadFiltro.Vigentes);
    }

    filtrarTareasPorVencidas(): void {
        this.props.onFiltraTareas(TareaVisibilidadFiltro.Vencidas);
    }

    filtrarTareasPorSinFiltro(): void {
        this.props.onFiltraTareas(TareaVisibilidadFiltro.SinFiltro);
    }

    filtrarTareasPorRealizadas(): void {
        this.props.onFiltraTareas(TareaVisibilidadFiltro.Realizadas);
    }

    render() : ReactNode {
        return(
            <div>
                <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.cambiarVisibilidad}>
                    <DropdownToggle color="primary" className="buttonFiltroTarea" caret>
                        Filtros
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem onClick={this.filtrarTareasPorSinFiltro}>Todas</DropdownItem>
                        <DropdownItem onClick={this.filtrarTareasPorVigentes}>
                            <FaDotCircle color="blue" fontSize="11" /> Vigentes</DropdownItem>
                        <DropdownItem onClick={this.filtrarTareasPorVencidas}>
                            <FaDotCircle color="red" fontSize="11" /> Vencidas</DropdownItem>
                        <DropdownItem onClick={this.filtrarTareasPorRealizadas}>
                            <FaDotCircle color="green" fontSize="11" /> Realizadas</DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown>
            </div>

        );
    }
}


export default ButtonDropDownFiltroTareas;