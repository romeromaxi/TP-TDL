import React,{ MouseEvent}  from 'react';
import { Row, Col, Button } from 'reactstrap';
import ITarea from '../Interfaces/Tarea';



class ComponenteTarea extends React.Component<ITarea> {

    constructor(props: ITarea){
        super(props);
         
        this.state = {
            nuevaTarea: 'hola',
            listaTareas: []
        };
    };

    render(){
        return(
            <div></div>
        )
    }

}

  
export default ComponenteTarea;
  