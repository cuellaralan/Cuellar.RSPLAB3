var Etransaccion;
(function (Etransaccion) {
    Etransaccion[Etransaccion["Alquiler"] = 0] = "Alquiler";
    Etransaccion[Etransaccion["Venta"] = 1] = "Venta";
    Etransaccion[Etransaccion["Permuta"] = 2] = "Permuta";
})(Etransaccion || (Etransaccion = {}));
// console.log("Hola TypeScript", Etransaccion[0]);
class Transaccion {
    constructor() {
    }
    getTransacciones() {
        let trans = new Array(3);
        // console.log(Etransaccion[1].toString()); 
        for (let i = 0; i < 3; i++) {
            // console.log("una entrada");
            // console.log(Etransaccion[i].toString()); 
            trans[i] = Etransaccion[i].toString();
        }
        // console.log(trans);
        return trans;
    }
}
window.addEventListener('load', cargaFiltro);
function cargaFiltro() {
    // console.log('hola carga filtro');
    let trx = new Transaccion();
    let trxs = trx.getTransacciones();
    let seltrx = document.getElementById('selTrx');
    console.log(seltrx);
    for (let i = 0; i < 3; i++) {
        console.log('hola agregando elementos');
        let unOpt = document.createElement('option');
        unOpt.setAttribute('value', trxs[i]);
        console.log(unOpt);
        let optTxt = document.createTextNode(trxs[i]);
        unOpt.appendChild(optTxt);
        seltrx.appendChild(unOpt);
    }
}
