import IEstado from './IEstado';

class EstadoVencido implements IEstado{
    getEstilo(){
        return "tarea tarea-vencida";
    }

}

class EstadoVigente implements IEstado{
    getEstilo(){
        return "tarea tarea-vigente";
    }

}

class EstadoHecho implements IEstado{
    getEstilo(){
        return "tarea tarea-completada";
    }

}

export {EstadoHecho, EstadoVencido, EstadoVigente}