import IEstado from './IEstado';

class EstadoVencido implements IEstado {
    getEstilo(){
        return "tarea tarea-vencida";
    }

    seVencio(){
        return this;
    }

    fueCheackeado(){
        return new EstadoHecho;
    }

    fueUncheackeado(){
        return new EstadoVigente;
    }

}

class EstadoVigente implements IEstado {
    getEstilo(){
        return "tarea tarea-vigente";
    }

    seVencio(){
        return new EstadoVencido;
    }

    fueCheackeado(){
        console.log('1');
        return new EstadoHecho;
    }

    fueUncheackeado(){
        return new EstadoVigente;
    }

}

class EstadoHecho implements IEstado {
    getEstilo(){
        return "tarea tarea-completada";
    }

    seVencio(){
        return this;
    }

    fueCheackeado(){
        return new EstadoHecho;
    }

    fueUncheackeado(){
        return new EstadoVigente;
    }

}

export {EstadoHecho, EstadoVencido, EstadoVigente}