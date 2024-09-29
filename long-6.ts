/*
                    EJERCICIO 4 
  
• Sumar los elementos de cada una de las posiciones de dos arreglos y guardar el resultado en otro arreglo

• El arreglo tiene dimensión 6 y los números de los dos vectores los carga el usuario

*/

import * as rs from "readline-sync";

//
// se crear 3 arreglos con dimension 6

let arreglo1: number[] = new Array(6);
let arreglo2: number[] = new Array(6);
let sumaDeArreglo: number[] = new Array(6);

// Se crea la funcion SUMATORIA donde no contiene nada
// En el ciclo FOR este ciclo se ejecuta 6 veces, comenzando desde i = 0 hasta i = 5.
// Se le indica al usuario en ambas variables que indique 6 numeros
// Se asigna el valor de NUMERO1 a la posición i del arreglo ARREGLO1
// Se asigna el valor de NUMERO2 a la posición i del arreglo ARREGLO2

function sumatoria (){
for (let i = 0; i < 6; i++) {
  let numero1: number = rs.questionInt("Por favor ingrese 6 numeros: ");
  arreglo1[i] = numero1;
}

console.log("\n---------------------------------------------\n");


for (let i = 0; i < 6; i++) {
  let numero2: number = rs.questionInt("Por favor ingrese 6 numeros: ");
  arreglo2[i] = numero2;
}

// Se accede al elemento i de ARREGLO1 y ARREGLO2.
// Se suman esos dos elementos y el resultado se almacena en la posición i del arreglo SUMA-DE-ARREGLO.

for (let i = 0; i < 6; i++) {
  sumaDeArreglo[i] = arreglo1[i] + arreglo2[i];
  console.log(`El resultado es : ${sumaDeArreglo}`);
}
}

// Se llama a la funcion SUMATORIA

sumatoria();
