import IEstado from './IEstado';
import {EstadoHecho, EstadoVencido, EstadoVigente} from './Estados';
import UtilFecha from '../Util/UtilFechaHoy'

function getDiaIndex(diaString: String){
    switch (diaString) {
        case 'Lunes':
            return 1;
        case 'Martes':
            return 2;
        case 'Miércoles':
            return 3;
        case 'Jueves':
            return 4;
        case 'Viernes':
            return 5;
        case 'Sábado':
            return 6;
        case 'Domingo':
            return 7;
      }
}

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
        this.estado = new EstadoVigente;
    }

    getEstilo(){
        this.actualizarEstado();
        return this.estado.getEstilo;
    }

    completado(){
        this.estado = new EstadoHecho;
    }


    actualizarEstado(){
        if (getDiaIndex(this.dia) < UtilFecha.obtenerDiaDeSemana()){
            this.estado = new EstadoVencido;
            return
        }
        if (getDiaIndex(this.dia) == UtilFecha.obtenerDiaDeSemana()){
            this.hora > UtilFecha.obtenerHora()
            ? this.estado = new EstadoVigente : this.estado = new EstadoVencido;
        }
    }


}

export default Tarea