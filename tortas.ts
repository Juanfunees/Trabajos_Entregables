/*

### ¡Gran Concurso de Tortas de Tres Arroyos! 🎂

Te toca ser jurado de un concurso de tortas, y el número de participantes puede variar. Tu tarea es pedir al usuario cuántos concursantes habrá y luego solicitar las puntuaciones de `Sabor`, `Presentación` y `Dificultad` para cada torta. Al final, debes determinar qué torta tiene el mayor puntaje. Y si hay empate? 🤔 En ese caso, informaremos que se produjo un empate (no es necesario indicar si fueron dos o mas empates ni entre que tortas es el empate, solo basta con indicar que se produjo empate si al menos existe uno).

## Funciones a implementar:
calcularPuntaje(sabor, presentacion, dificultad):
Recibe tres números entre 1 y 5 que representan las puntuaciones de una torta y devuelve la suma de esos números (el puntaje total del pastel).

determinarGanador():
Utiliza la librería readline-sync para pedir al usuario el número de participantes, luego solicita las puntuaciones de cada uno de ellos y usa la función calcularPuntaje para determinar la torta con el mayor puntaje.

*Si lo consideran necesario, pueden implementar funciones extra.


----------------------------------------------------------------------------------------------------------------------------------------------
                                               [ RESUMEN DE TAREAS. ]

1. pedir al usuario cantidad de participantes que habra.
2. solicitar las puntuaciones:
    a: sabor
    b: presentacion
    c: dificultad
3. determinar que torta tiene mayor puntaje e informar si se produjo un empate

--------FUNCIONES--------
A. calcularPuntaje (suma de las puntuaciones, torta con mayor puntaje)
B. determinarGanador (pedir al usuario cant. de participantes y puntuaciones.)

----------------------------------------------------------------------------------------------------------------------------------------------

*/

import * as rs from "readline-sync";

console.log("👋 !! BIENVENIDOS NUEVAMENTE !! 👋 \n");
console.log("### Al Gran Concurso de Tortas de Tres Arroyos! 🎂 ### \n");
console.log("Hoy la maxima ley sos VOS!!!👮🚨 \n");

// declaro las variables a medida que las voy necesitando

let sabor: number = 0;
let presentacion: number = 0;
let dificultad: number = 0;
let puntajeTotal: number = 0;
let final: number = 0;

function calcularPuntaje(
  sabor: number,
  presentacion: number,
  dificultad: number
): number {
  return sabor + presentacion + dificultad;
}

function determinarGanador() {
  // pido al usuario la cantidad de personas que van a participar del concurso.

  let numParticipantes = rs.questionInt("Cuantos concursantes hay? ");

  // creo un for para que me pregunte por la puntuacion (sabor,presentacion y dificultad) de tantos participantes coloque en (numParticipantes) y luego hago la sumatoria total de los puntajes obtenidos.

  for (let i = 1; i <= numParticipantes; i++) {
    console.log(`Concursante ${i}:`);
    sabor = rs.questionInt("  Puntuacion de Sabor (1-5): ");
    presentacion = rs.questionInt("  Puntuacion de Presentacion (1-5): ");
    dificultad = rs.questionInt("  Puntuacion de Dificultad (1-5): ");
    puntajeTotal = calcularPuntaje(sabor, presentacion, dificultad);
    final = puntajeTotal;
    console.log(`El puntaje del concursante ${i} es: ${final}`);
  }
}
determinarGanador();
