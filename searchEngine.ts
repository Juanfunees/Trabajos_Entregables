//              EJERCICIO PARA ENTREGAR

//completar la funcion para que devuelva la cantidad de veces que searchTerm aparece dentro de fullText

const texto: string =
  "Urania. Qué nombre. A la gente le gusta, le parece sonoro, original, raro. A ella también, aunque le evoca sólo cosas tristes. Todo le evoca cosas tristes, ahora que ha vuelto. Pero ¿cuándo no, desde que se fue de esta ciudad, a la que creía no volvería nunca? ¿Y cómo era posible que alguien se llamara así en una familia de dominicanos católicos, que adoraban a la Virgen del Rosario y a la Virgen de Altagracia? Su padre le contó que su madre era quien escogió su nombre. Urania: la Musa de la astronomía. Nadie se atrevió a contradecirla. A él le parecía bien, se lo dijo como si la elección del nombre hubiera sido cosa de poca importancia. En aquellos días no había problemas en la casa. Las cosas cambiaron después, claro. Cambiaron tanto.";

import * as rs from "readline-sync";

// Defino la funcion que cuenta cuantas veces aparece SEARCH-TEM en FULL-TEXT
function howManyTextInPara(fullText: string, searchTerm: string): void {
  // Convierto el texto completo y el buscador a minusculas
  const lowerFullText = fullText.toLowerCase();
  const lowerSearchTerm = searchTerm.toLowerCase();

  // Uso el metodo split para dividir el texto completo en un arreglo de palabras
  const words = lowerFullText.split(" ");

  // Inicializo un contador para contar las apariciones de SEARCH-TEM
  let count = 0; // Contador inicializado en 0

  // Itero sobre cada palabra en el arreglo
  // Si son iguales incrementa el contador
  for (const word of words) {
    // Comparo cada palabra con SEARCH-TEM
    if (word === lowerSearchTerm) {
      count++;
    }
  }
  // Muestro el resultado
  console.log(`La palabra "${searchTerm}" aparece ${count} veces en el texto.`); 
}

// Le pido al usuario que ingrese la palabra que quiere buscar dentro del buscador
const searchTerm = rs.question("Introduce la palabra a buscar: ");

// Llamo a la funcion para contar las veces que aparece la palabra buscada en el texto
howManyTextInPara(texto, searchTerm);
