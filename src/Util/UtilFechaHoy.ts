class UtilFechaHoy {

    constructor(){}

    obtenerFecha(): Date{
        return new Date();
    }

    obtenerHora() : string {
        return this.obtenerFecha().toLocaleTimeString(['en-GB'], {hour: '2-digit', minute:'2-digit'})
    }

    obtenerDiaDeSemana(){
        return this.obtenerFecha().getDay();
    }

}

export default new UtilFechaHoy();