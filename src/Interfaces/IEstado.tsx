interface IEstado{
    getEstilo(): string;
    seVencio(): IEstado;
    fueCheackeado(): IEstado;
    fueUncheackeado(): IEstado;
}

export default IEstado;