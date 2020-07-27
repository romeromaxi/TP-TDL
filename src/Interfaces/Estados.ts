import IEstado from './IEstado';

class EstadoVencido implements IEstado {
    getEstilo(): string{
        return "tarea tarea-vencida";
    }

    seVencio(): IEstado {
        return this;
    }

    fueHecho(): IEstado {
        return new EstadoHecho();
    }

    fueDeshecho(): IEstado {
        return new EstadoVigente();
    }

    estaHecho(): boolean {
        return false;
    }
}

class EstadoVigente implements IEstado {
    getEstilo(): string {
        return "tarea tarea-vigente";
    }

    seVencio(): IEstado {
        return new EstadoVencido();
    }

    fueHecho(): IEstado {
        return new EstadoHecho();
    }

    fueDeshecho(): IEstado {
        return new EstadoVigente();
    }

    estaHecho(): boolean {
        return false;
    }
}

class EstadoHecho implements IEstado {
    getEstilo(){
        return "tarea tarea-hecha";
    }

    seVencio(): IEstado {
        return this;
    }

    fueHecho(): IEstado {
        return new EstadoHecho();
    }

    fueDeshecho(): IEstado {
        return new EstadoVigente();
    }

    estaHecho(): boolean {
        return true;
    }
}

export {EstadoHecho, EstadoVencido, EstadoVigente}