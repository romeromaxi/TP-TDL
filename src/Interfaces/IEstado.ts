interface IEstado{
    getEstilo(): string;
    seVencio(): IEstado;
    fueHecho(): IEstado;
    fueDeshecho(): IEstado;
    estaHecho(): boolean;
    estaVencido(): boolean;
    estaVigente(): boolean;
}

export default IEstado;