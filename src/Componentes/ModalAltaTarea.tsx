import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, FormGroup, Label, Input, Col } from 'reactstrap';
import Select from 'react-select';

import ITarea from '../Interfaces/Tarea';

interface IProps{
  labelBoton: string;
  onGuardarTarea: (unaTarea: ITarea) => void;
};

interface IState{
  estaVisible : boolean;
  unaTarea: ITarea;
};

class Tarea implements ITarea
{
    id: number
    dia: string
    nombre: string
    descripcion: string
    hora: string

    constructor(){
        this.id = 0;
        this.dia = "";
        this.nombre = "";
        this.descripcion = "";
        this.hora = "";
    }
}

class ModalAltaTarea extends React.Component<IProps, IState> {

  nombreDias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

  constructor(props: IProps){
    super(props);
     
    this.state = {
        estaVisible: false,
        unaTarea: new Tarea()
    };

    this.guardarTarea = this.guardarTarea.bind(this);
    this.cambiarVisibilidad = this.cambiarVisibilidad.bind(this);
  }

  cambiarVisibilidad(){
    this.setState({
      estaVisible: !this.state.estaVisible,
      unaTarea: new Tarea()
    })
  }

  cambiarNombreTarea(nombre: string) {
    this.state.unaTarea.nombre = nombre;
    this.setState({});
  }

  cambiarDiaTarea(dia: string) {
    this.state.unaTarea.dia = this.nombreDias[parseInt(dia)];
    this.setState({});
  }

  cambiarDescripcionTarea(descripcion: string){

    this.state.unaTarea.descripcion = descripcion;
    this.setState({});
  }

  cambiarHoraTarea(hora: string){

    this.state.unaTarea.hora = hora;
    this.setState({});
  }

  guardarTarea() {
    
    //Esto lo soluciona.
    var unaTarea = new Tarea();

    unaTarea.dia = this.state.unaTarea.dia;
    unaTarea.nombre = this.state.unaTarea.nombre;
    unaTarea.descripcion = this.state.unaTarea.descripcion;
    unaTarea.hora = this.state.unaTarea.hora;

    this.props.onGuardarTarea(unaTarea);

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
                <Label for="selDiaTarea">Día de la Semana</Label>
                <Input id="selDiaTarea" type="select" onChange={e => this.cambiarDiaTarea(e.target.value)}>
                  <option value={-1}></option>
                  {
                        this.nombreDias.map((unDia:string, i:number)=>{
                          return <option value={i} key={i}>{unDia}</option>
                        })
                  }                  
                  
                </Input>
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