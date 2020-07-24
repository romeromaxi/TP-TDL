class UtilFechaHoy {

    public esFechaPasada(dia : string, hora : string) : boolean {
        return this.esDiaPasado(dia) || (this.esDiaActual(dia) && this.esHoraPasada(hora));
    } 

    public obtenerFecha(): Date{
        return new Date();
    }

    public obtenerHora() : string {
        return this.obtenerFecha().toLocaleTimeString(['en-GB'], {hour: '2-digit', minute:'2-digit'})
    }

    public obtenerDiaDeSemana() : number {
        return this.obtenerFecha().getDay();
    }

    private esDiaPasado(dia : string) : boolean {
        return this.getDiaIndex(dia) < this.obtenerDiaDeSemana();
    }

    private esDiaActual(dia : string) : boolean {
        return this.getDiaIndex(dia) === this.obtenerDiaDeSemana();
    }

    private esHoraPasada(hora : string) : boolean {
        return hora < this.obtenerHora();
    }

    private getDiaIndex(diaString: String){
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
}

export default new UtilFechaHoy();