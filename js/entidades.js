class Anuncio{
    id;
    titulo;
    transaccion;
    descripcion;
    precio;

    constructor(id, titulo, transaccion, descripcion, precio){
        this.id = id;
        this.titulo = titulo;
        this.transaccion = transaccion;
        this.descripcion = descripcion;
        this.precio = precio;
    }
    
}

export class Anuncio_Auto extends Anuncio{
    puertas;
    kms;
    potencia;
    constructor(id, titulo, transaccion, descripcion, precio, puertas, kms, potencia){
        super(id,titulo,transaccion,descripcion,precio);
        this.puertas = puertas;
        this.kms = kms;
        this.potencia = potencia;
    }

    //agregar funcion que traiga de local storage la lista de anuncios de autos
    //reemplazar llamadas al servidor por funcion de anuncio_auto
}
