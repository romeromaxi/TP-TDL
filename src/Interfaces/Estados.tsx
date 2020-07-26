import IEstado from './IEstado';

class EstadoVencido implements IEstado {
    getEstilo(){
        return "tarea tarea-vencida";
    }

    seVencio(){
        return this;
    }

    fueHecho(){
        return new EstadoHecho;
    }

    fueDeshecho(){
        return new EstadoVigente;
    }

    estaHecho(){
        return false;
    }
}

class EstadoVigente implements IEstado {
    getEstilo(){
        return "tarea tarea-vigente";
    }

    seVencio(){
        return new EstadoVencido;
    }

    fueHecho(){
        return new EstadoHecho;
    }

    fueDeshecho(){
        return new EstadoVigente;
    }

    estaHecho(){
        return false;
    }
}

class EstadoHecho implements IEstado {
    getEstilo(){
        return "tarea tarea-completada";
    }

    seVencio(){
        return this;
    }

    fueHecho(){
        return new EstadoHecho;
    }

    fueDeshecho(){
        return new EstadoVigente;
    }

    estaHecho(){
        return true;
    }
}

export {EstadoHecho, EstadoVencido, EstadoVigente}