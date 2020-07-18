import React,{ MouseEvent}  from 'react';
import '../App.css';
import { Row, Col, Button } from 'reactstrap';

interface IProps{
    id: number;
    dia: string;    
};

interface Istate{
    nuevaTarea : string;
    listaTareas: string[];
    
};

class ComponenteDia extends React.Component<IProps, Istate> {
    
    constructor(props: IProps){
        super(props);
         
        this.state = {
            nuevaTarea: 'hola',
            listaTareas: []
        };
        this.handleClick = this.handleClick.bind(this);

        
    }

    handleClick(event: MouseEvent){
        
        this.state.listaTareas.push(this.state.nuevaTarea)
        this.setState({

        });
     
    }
 

    agregarNuevaTarea(NombereNuevaTarea:string){
        this.setState({
            nuevaTarea: NombereNuevaTarea,
        });
    }

    render(){      
        let {listaTareas, nuevaTarea} = this.state;
  

        return(
            <div className="div-DiaDeLaSemana">
                <Button onClick={this.handleClick}>Prueba Agregar</Button>
                <input type="text" onChange={e =>
                    this.agregarNuevaTarea(e.target.value)
                }></input>
                <Row className="tituloDiaDeLaSemana">
                    <h3>{this.props.dia}</h3>                               
                </Row>
                <Row className="tareasDelDia">
                    <ul>
                        {listaTareas.map(tarea =>
                            <li>{tarea}</li>)}
                    </ul>
                </Row>
                             
            </div>
        )
    }
  }
  
  export default ComponenteDia;
  
