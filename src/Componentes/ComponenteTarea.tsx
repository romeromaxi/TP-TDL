import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import ITarea from '../Interfaces/Tarea';
import '../App.css';

interface IProps{
    unaTarea: ITarea;
    onBorrarTarea: (idTarea: number) => void;   
};

interface IVisibilidad{
    visibilidad: boolean;
    checkeado: boolean;
}

class ComponenteTarea extends React.Component<IProps,IVisibilidad> {

    constructor(props: IProps){
        super(props);

         this.state ={
             visibilidad: true,
             checkeado: false
         };

        this.borrarTarea = this.borrarTarea.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    borrarTarea() {
        this.props.onBorrarTarea(this.props.unaTarea.id);
    };

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(!this.state.checkeado){
            this.props.unaTarea.checkeado();
            this.setState({checkeado: true});
        } else{
            this.props.unaTarea.uncheckeado();
            this.setState({checkeado: false});
        }
    };

    render(){
        return(
            <div className={this.props.unaTarea.getEstilo()}>
                <Row>
                    <Col className="tarea-titulo">
                        <input type="checkbox" checked={this.state.checkeado} onChange={this.handleChange}/>
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
  