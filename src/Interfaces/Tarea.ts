import IEstado from './IEstado';
import {EstadoHecho, EstadoVencido, EstadoVigente} from './Estados';
import UtilFechaHoy from '../Util/UtilFechaHoy';

class Tarea  
{
    id: number
    dia: string
    nombre: string
    descripcion: string
    hora: string
    estado: IEstado;

    constructor(){
        this.id = 0;
        this.dia = "";
        this.nombre = "";
        this.descripcion = "";
        this.hora = "";
        this.estado = new EstadoVigente();
    }

    getEstilo() {
        this.actualizarEstado();
        return this.estado.getEstilo();
    }

    checkeado() {
        this.estado = this.estado.fueHecho();
    }

    uncheckeado() {
        this.estado = this.estado.fueDeshecho();
    }

    actualizarEstado() {
        if (UtilFechaHoy.esFechaPasada(this.dia, this.hora))
            this.estado = this.estado.seVencio();
    }

    estaCheckeado(){
        return this.estado.estaHecho();
    }

}

export default Tarea