import Tarea from './Tarea'
import UtilFechaHoy from '../Util/UtilFechaHoy';

class TareaConHora extends Tarea{

    actualizarEstado(): void {
        if (UtilFechaHoy.esFechaPasada(this.dia, this.hora))
            this.estado = this.estado.seVencio();
    }

    getInfoTiempo(): string{
        return 'A las ' + this.hora;
    }

} 

class TareaDiaria extends Tarea{

    actualizarEstado(): void {
        if (UtilFechaHoy.esDiaPasado(this.dia))
        this.estado = this.estado.seVencio();
    }

    getInfoTiempo(): string{
        return 'Todo el dia';
    }
    
} 

export {TareaConHora, TareaDiaria}