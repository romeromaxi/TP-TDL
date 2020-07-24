import IEstado from './IEstado';

class EstadoVencido implements IEstado{
    getEstilo(){
        return "tarea tarea-vencida";
    }

    seVencio(){
        return this;
    }

}

class EstadoVigente implements IEstado{
    getEstilo(){
        return "tarea tarea-vigente";
    }

    seVencio(){
        return new EstadoVencido;
    }

}

class EstadoHecho implements IEstado{
    getEstilo(){
        return "tarea tarea-completada";
    }

    seVencio(){
        return this;
    }

}

export {EstadoHecho, EstadoVencido, EstadoVigente}