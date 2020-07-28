import IEstado from './IEstado';
import { EstadoVigente } from './Estados';
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

    getEstilo(): string {
        this.actualizarEstado();
        return this.estado.getEstilo();
    }

    checkear(): void {
        this.estado = this.estado.fueHecho();
    }

    desCheckear(): void {
        this.estado = this.estado.fueDeshecho();
    }

    actualizarEstado(): void {
        if (UtilFechaHoy.esFechaPasada(this.dia, this.hora))
            this.estado = this.estado.seVencio();
    }

    estaHecha(): boolean {
        return this.estado.estaHecho();
    }

    estaVencida(): boolean {
        return this.estado.estaVencido();
    }

    estaVigente(): boolean {
        return this.estado.estaVigente();
    }

}

export default Tarea