/*
                EJERCICIO 2

 Dado un array con nombres de tamaño 5, pedir al usuario que ingrese un nombre y verificar si está en el arreglo. Imprimir el arreglo y si está o no en él.

*/


import * as rs from "readline-sync";

// creo una constante donde el arreglo NOMBRE contiene los nombres
//creo 2 variables una llamada NOMBRE-DESEADOS donde le pide al usuario que indique el nombre que quiere buscar
// y RESULTADO muestra por pantalla si el nombre se encontro o no.

const nombre: string[] = ["Juan", "Dario", "Daniel", "Brenda", "Floki"];
let nombreDeseados: string = rs.question("Ingrese el nombre que desea buscar: ");
let resultado: string = "No se encontro ese nombre";

// en el FOR Se itera sobre cada carácter de la variable NOMBRE, usando i como índice. 
// nombre.length indica LA LONGITUD que tiene NOMBRE.
// Dentro del ciclo, se verifica si el carácter actual (nombre[i]) es igual a NOMBRE-DESEADOS.
// Si se encuentra una coincidencia, se asigna el mensaje "Se encontró el nombre que buscaba." a la variable RESULTADO.
// se imprime por pantalla RESULTADO

for (let i = 0; i < nombre.length; i++) {
  if (nombre[i] === nombreDeseados) {
    resultado = "Se encontro el nombre que buscaba.";
    console.log(resultado);
  }
}

