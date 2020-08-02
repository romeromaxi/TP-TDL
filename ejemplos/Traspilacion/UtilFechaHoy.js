var UtilFechaHoy = /** @class */ (function () {
    function UtilFechaHoy() {
    }
    UtilFechaHoy.prototype.esFechaPasada = function (dia, hora) {
        return this.esDiaPasado(dia) || (this.esDiaActual(dia) && this.esHoraPasada(hora));
    };
    UtilFechaHoy.prototype.obtenerFecha = function () {
        return new Date();
    };
    UtilFechaHoy.prototype.obtenerHora = function () {
        return this.obtenerFecha().toLocaleTimeString(['en-GB'], { hour: '2-digit', minute: '2-digit' });
    };
    UtilFechaHoy.prototype.obtenerDiaDeSemana = function () {
        var numeroDiaDeHoy = this.obtenerFecha().getDay();
        return (numeroDiaDeHoy === 0) ? 7 : numeroDiaDeHoy;
    };
    UtilFechaHoy.prototype.esDiaPasado = function (dia) {
        return this.getDiaIndex(dia) < this.obtenerDiaDeSemana();
    };
    UtilFechaHoy.prototype.esDiaActual = function (dia) {
        return this.getDiaIndex(dia) === this.obtenerDiaDeSemana();
    };
    UtilFechaHoy.prototype.esHoraPasada = function (hora) {
        return hora < this.obtenerHora();
    };
    UtilFechaHoy.prototype.getDiaIndex = function (diaString) {
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
    };
    return UtilFechaHoy;
}());
export default new UtilFechaHoy();
