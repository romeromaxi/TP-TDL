import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, FormGroup, Label, Input, Col } from 'reactstrap';

import ITarea from '../Interfaces/Tarea';

interface IProps{
  labelBoton: string;
  onGuardarTarea: (unaTarea: ITarea) => void;
};

interface IState{
  estaVisible : boolean;
  unaTarea: ITarea;
};

class ModalAltaTarea extends React.Component<IProps, IState> {

  constructor(props: IProps){
    super(props);
     
    this.state = {
        estaVisible: false,
        unaTarea: {
          id: 0,
          nombre: "",
          descripcion: "",
          hora: "",
        }
    };

    this.guardarTarea = this.guardarTarea.bind(this);
    this.cambiarVisibilidad = this.cambiarVisibilidad.bind(this);
  }

  cambiarVisibilidad(){
    this.setState({
      estaVisible: !this.state.estaVisible
    })
  }

  cambiarNombreTarea(nombre: string) {
    this.state.unaTarea.nombre = nombre;
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
    this.props.onGuardarTarea(this.state.unaTarea);

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