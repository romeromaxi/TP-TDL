import React,{ MouseEvent}  from 'react';
import { Row, Col, Button,Container } from 'reactstrap';
import ITarea from '../Interfaces/Tarea';
import UtilFecha from '../Util/UtilFechaHoy'
import '../App.css';

interface IProps{
    unaTarea: ITarea;
    onBorrarTarea: (idTarea: number) => void;   
};

interface IVisibilidad{
    visibilidad: boolean;
}

class ComponenteTarea extends React.Component<IProps,IVisibilidad> {

    constructor(props: IProps){
        super(props);

         this.state ={
             visibilidad: true
         };

        this.borrarTarea = this.borrarTarea.bind(this);
    };

    borrarTarea() {
        this.props.onBorrarTarea(this.props.unaTarea.id);
    };


    render(){
        return(

            /* <div className={this.props.unaTarea.hora > UtilFecha.obtenerHora()
                            ? "tarea tarea-vigente" : "tarea tarea-vencida"}> */
            <div className={this.props.unaTarea.getEstilo()()}>
                <Row>
                    <Col className="tarea-titulo">
                        {this.props.unaTarea.nombre}                          
                    </Col>
                    <Col>
                        <Button close onClick={this.borrarTarea}></Button>
                    </Col>
                </Row>
                <Row >
                    <Col></Col>
                    <Col className="tarea-hora">
                        A las {this.props.unaTarea.hora}
                    </Col>
                </Row>
                <Row>
                    <Col className="tarea-descripcion">
                        {this.props.unaTarea.descripcion}
                    </Col>
                </Row> 
            </div>
        )
    }

}

  
export default ComponenteTarea;
  