/*
                    EJERCICIO 6 
                    
• Almacene en un arreglo de dimensión N números (la cantidad es ingresada por el usuario)

• Muestre cuántos números son positivos, cuántos son negativos y cuántos ceros hay

*/

import * as rs from "readline-sync";

let positivos: number = 0;
let negativos: number = 0;
let ceros: number = 0;

// reutilizo codigo del trabajo inverso.ts

function almacen(): void {
  let longitud: number = rs.questionInt("Ingrese la longitud que desea: ");
  let numero: number[] = new Array(longitud);

  //utilizo el condicional IF para comprobar los tipos de numero que ingresa el usuario (positivos - negativos - ceros) y les agrego un contador donde van sumando el valor en las variables creadas fueras de la funcion.

  for (let i = 0; i < longitud; i++) {
    let numImput = rs.questionInt(
      "Ingrese un numero (puede ser positivo o negativo): "
    );
    numero[i] = numImput;
    if (numImput > 0) positivos++;
    if (numImput < 0) negativos++;
    if (numImput === 0) ceros++;
  }
}

almacen();

//imprimo por pantalla la cantidad de positivos,ceros y negativos que se almacenaron en las variables creadas.

console.log(`\nla cantidad de numero positivos es: ${positivos}`);
console.log(`la cantidad de numero ceros es: ${ceros}`);
console.log(`la cantidad de numero negativos es: ${negativos}`);
