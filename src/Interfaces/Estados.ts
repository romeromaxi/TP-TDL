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

    estaVencido(): boolean {
        return true;
    }

    estaVigente(): boolean {
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

    estaVencido(): boolean {
        return false;
    }

    estaVigente(): boolean {
        return true;
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

    estaVencido(): boolean {
        return false;
    }

    estaVigente(): boolean {
        return false;
    }
    
}

export {EstadoHecho, EstadoVencido, EstadoVigente}