function miFuncion(inicializarVar: boolean){
    
    if(inicializarVar) {
        let unaColeccionDeNumeros: Array<number> = [10];
    }

    console.log(unaColeccionDeNumeros.push(15));
}

miFuncion(true);
miFuncion(false);