import IEstado from './IEstado';
import { EstadoVigente } from './Estados';

abstract class Tarea  
{
    id: number
    dia: string
    nombre: string
    descripcion: string
    hora: string
    estado: IEstado;

    constructor(unaTarea? : Tarea){
        this.id = unaTarea?.id || 0;
        this.dia = unaTarea?.dia || "";
        this.nombre = unaTarea?.nombre || "";
        this.descripcion = unaTarea?.descripcion || "";
        this.hora = unaTarea?.hora || "";
        this.estado = unaTarea?.estado || new EstadoVigente();
    }

    abstract getInfoTiempo(): string;
    abstract actualizarEstado(): void;

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