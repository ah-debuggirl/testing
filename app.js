/* Un  productor  de  leche  lleva  el  registro  de  lo  que  produce  en  litros,  pero  
cuando entrega le pagan en galones. Realice un algoritmo, y represéntelo 
mediante un diagrama de flujo y el pseudocódigo, que ayude al productor 
a saber cuánto recibirá por la entrega de su  producción de un día (1 galón 
= 3.785 litros) */


exports.gananciaNeta = function gananciaNeta(litros, precioGal) {
    let galones = litros / 3.785;
    let ganancia = galones * precioGal;

    if(isNaN(litros) || isNaN(precioGal)){
        return 'Ingresa sólo números';
    } else {

      return Math.ceil(ganancia);
    };
};
