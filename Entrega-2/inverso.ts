/*
                    EJERCICIO 5 
                    
• Almacene en un arreglo de tamaño N los números ingresados por el usuario

• La dimensión N también es ingresada por el usuario

• Muestre los números del arreglo pero del último al primero

*/

import * as rs from "readline-sync";

// creo una funcion ALMACEN de tipo VOID (VACIA,NADA,LO QUE SEA). 

function almacen(): void {
  let longitude: number = rs.questionInt("Ingrese la longitud que desea: ");
  let arreglos: number[] = new Array(longitude);

// creo 2 variables LONGITUDE para pedirle al usuario la longitud de tu array y ARREGLOS que va a contener la cantidad de elementos que le indique longitude

  for (let i = 0; i < longitude; i++) {
    let numeroIngresadoPorUsuario = rs.questionInt("Ingrese cualquier numero: ");
    arreglos[i] = numeroIngresadoPorUsuario;
  }

// creo un FOR donde va a iterar desde 0 hasta lo que le pasemos en LONGITUDE. en cada iteracion le pide un numero al usuario y lo va a almacenar en arreglos[i]

  console.log("Números del arreglo del último al primero:");
  for (let i = longitude - 1; i >= 0; i--) {
    console.log(arreglos[i]);
    }
}

//Se utiliza otro ciclo FOR que comienza desde el último índice (LONGITUDE - 1) y decrece hasta 0 y va imprimiendo cada número del arreglo llamado ARREGLOS en orden inverso.

almacen();

// llamamos a la funcion y hace su magia 🧙‍♂️