/*
                    EJERCICIO 3 

Dado el siguiente arreglo :::: [4,7,9,3,1,45,67,23,29,78,11,16]

- Crear un programa que encuentre cuál es el número más grande del arreglo e imprimirlo por consola - Almacenar el número más grande en una variable global y pasarlo a una función para determinar si el número es par o impar

*/

// creo un arreglo que contenga los numeros del ejercicio -- [4,7,9,3,1,45,67,23,29,78,11,16] --

let arreglo: number[] = [4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16];

// creo la variable NUMERO-MAS-GRANDE donde va a almacenar un numero en este caso el MAYOR
// Math.max() es una función que devuelve el valor máximo de los números pasados como argumentos.
// El operador de propagación (...) se utiliza para "expandir" el arreglo llamado ARREGLO en una lista de argumentos. 

let numeroMasGrande: number = Math.max(...arreglo);
console.log("El numero mas grande es:", numeroMasGrande);

// se almacena el numero mas grande del arreglo y se muestra

function esPar(numero: number): boolean {
  return numero % 2 === 0;
}

//ES-PAR aca se define la funcion que toma un argumento NUMERO de tipo number y devuelve un valor de tipo boolean.

// return numero % 2 === 0;: Esta línea evalúa si numero es par.

// numero % 2 calcula el resto de numero dividido por 2. Si el resto es 0, entonces NUMERO es par, y la función devuelve true. Si no, devuelve false.

let esNumeroPar: boolean = esPar(numeroMasGrande);
console.log("El numero mas grande es par?", esNumeroPar);

// Aca estamos declarando una variable ES-NUMERO-PAR que almacenará el resultado de la función ES-PAR.

// Se llama a la función ES-PAR, pasando NUMERO-MAS-GRANDE como argumento. El resultado será true si NUMERO-MAS-GRANDE es par y false si es impar. Este valor se almacena en ES-NUMERO-PAR.