import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, FormGroup, Label, Input, Col } from 'reactstrap';
import Select, { OptionsType } from 'react-select';
import makeAnimated from 'react-select/animated';

import Tarea from '../Interfaces/Tarea';

const animatedComponents = makeAnimated();

interface IProps{
  labelBoton: string;
  onGuardarTarea: (unaTarea: Array<Tarea>) => void;
};

interface IState{
  estaVisible : boolean;
  unaTarea: Tarea;
  listaDeDias: string[];
};


const options : OptionType[] = [
  { value: 'Lunes', label: 'Lunes' },
  { value: 'Martes', label: 'Martes' },
  { value: 'Miércoles', label: 'Miércoles' },
  { value: 'Jueves', label: 'Jueves' },
  { value: 'Viernes', label: 'Viernes' },
  { value: 'Sábado', label: 'Sábado' },
  { value: 'Domingo', label: 'Domingo' }
]

type OptionType = {
  value: string;
  label: string;
};

type ValueType<OptionType> = Array<OptionType>;

class ModalAltaTarea extends React.Component<IProps, IState> {

  nombreDias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

  constructor(props: IProps){
    super(props);
     
    this.state = {
        estaVisible: false,
        unaTarea: new Tarea(),
        listaDeDias: []
    };

    this.guardarTarea = this.guardarTarea.bind(this);
    this.cambiarVisibilidad = this.cambiarVisibilidad.bind(this);
  }

  cambiarVisibilidad(){
    this.setState({
      estaVisible: !this.state.estaVisible,
      unaTarea: new Tarea(),
      listaDeDias: []
    })
  }

  cambiarNombreTarea(nombre: string) {
    this.state.unaTarea.nombre = nombre;
    this.setState({});
  }

  // cambiarDiaTarea(dia: string) {
  //   this.state.unaTarea.dia = this.nombreDias[parseInt(dia)];
  //   this.setState({});
  // }

  cambiarDescripcionTarea(descripcion: string){

    this.state.unaTarea.descripcion = descripcion;
    this.setState({});
  }

  cambiarDiasTarea(options? : ValueType<OptionType>) {

    let listaNuevoDias : string[] = [];

    options?.forEach(element => {
      listaNuevoDias.push(element.value);
    });   
    
    this.setState({
      listaDeDias: listaNuevoDias
    });
  }

  cambiarHoraTarea(hora: string){

    this.state.unaTarea.hora = hora;
    this.setState({});
  }

  guardarTarea() {
    
    //Esto lo soluciona.
    var listaNuevoDias: Array<Tarea> = [];

    this.state.listaDeDias.forEach(element => {
      var unaTarea = new Tarea();
      unaTarea.dia = element;
      unaTarea.nombre = this.state.unaTarea.nombre;
      unaTarea.descripcion = this.state.unaTarea.descripcion;
      unaTarea.hora = this.state.unaTarea.hora;  
      listaNuevoDias.push(unaTarea);
    });

    this.props.onGuardarTarea(listaNuevoDias);
    this.cambiarVisibilidad();
  }
  
  render(){

    return ( 
      <div>
          <Button color="primary" onClick={this.cambiarVisibilidad}>{this.props.labelBoton}</Button>

          <Modal isOpen={this.state.estaVisible} 
                 toggle={this.cambiarVisibilidad}>

            <ModalHeader toggle={this.cambiarVisibilidad}>Agregar Tarea</ModalHeader>

            <ModalBody>
              <FormGroup>
                <Label for="txtTituloTarea">Título</Label>
                <Input id="txtTituloTarea" type="text" onChange={e => this.cambiarNombreTarea(e.target.value)} />
              </FormGroup>
              <FormGroup>
                <Label for="selDiaTarea">Días de la Semana</Label>
                <Select id="selDiaTarea" options={options} components={animatedComponents} isMulti={true} onChange={selectOption => this.cambiarDiasTarea(selectOption as ValueType<OptionType>)}/>
              </FormGroup>              
              <FormGroup>
                <Label for="txtHoraTarea">Hora</Label>
                <Input id="txtHoraTarea" type="time" onChange={e => this.cambiarHoraTarea(e.target.value)}/>
              </FormGroup>
              <FormGroup>
                <Label for="txtDescripcionTarea">Descripción</Label>
                <Input id="txtDescripcionTarea" type="textarea" onChange={e => this.cambiarDescripcionTarea(e.target.value)} />
              </FormGroup>
              <FormGroup check row>
                <Col sm={{ size: 10, offset: 9 }}>
                  <Button color="primary" onClick={this.guardarTarea}>Guardar</Button>
                </Col>
              </FormGroup>
            </ModalBody>
          </Modal>
        </div>
    );
  }

}

export default ModalAltaTarea;