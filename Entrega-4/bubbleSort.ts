// EJERCICIO ENTREGABLE – 28/10

// Implemente un algoritmo de ordenamiento con el método BubbleSort, para que ordene un arreglo de longitud N en orden descendente.

// -------------------------------------------------------------------------------------------------------------------------

// Definimos una función llamada numDescendente que recibe un arreglo de numeros
function numDescendente(arreglo: number[]): number[] {
    // Obtenemos la longitud del arreglo
    const n = arreglo.length;
  
    // Creamos un bucle para recorrer el arreglo
    for (let i = 0; i < n - 1; i++) {
      // Creamos un bucle interno que recorre el arreglo desde el inicio hasta el final menos i
      // Esto se hace porque despues de cada iteracion el ultimo elemento ya estara en su lugar
      for (let j = 0; j < n - 1 - i; j++) {
        // Comparamos el elemento actual con el siguiente
        if (arreglo[j] < arreglo[j + 1]) {
          // Si el elemento actual es menor que el siguiente, los intercambiamos
          const temp = arreglo[j]; // Guardamos el valor del elemento actual
          arreglo[j] = arreglo[j + 1]; // Colocamos el siguiente elemento en la posicion actual
          arreglo[j + 1] = temp; // Colocamos el valor guardado en la siguiente posicion
        }
      }
    }
    // Devolvemos el arreglo ordenado en orden numDescendente
    return arreglo;
  }
  
  // Ejemplo de uso de la funcion
  const numbers = [5, 3, 8, 4, 2]; // Creamos un arreglo de numeros
  const numRandom = numDescendente(numbers); // Llamamos a la funcion para ordenar el arreglo
  console.log(numRandom); // Imprimimos el arreglo ordenado