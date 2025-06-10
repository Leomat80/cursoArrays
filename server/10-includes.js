const mascotas = ["perro", "gato", "pez", "caballo"];

let inclucion = false;
for (let index = 0; index < mascotas.length; index++) {
  const element = mascotas[index];
  if (element === "perro") {
    inclucion = true;
    break;
  }
}

console.log(inclucion);

const rta = mascotas.includes("caballo");
console.log("rta", rta);

/**
 * reto
 * 
 * Tu reto es retornar un array solo con las palabras que cumplan con la condición de tener un término de búsqueda dado.

Para solucionarlo vas a encontrar una función llamada filterByTerm que recibe los siguientes parámetros de entrada:

array: Un array de strigs con palabras
term: Un string con el término a buscar
Dentro del cuerpo de la función filterByTerm debes escribir tu solución.

Ejemplo 1:

Input:
array: ["ana", "santi", "nico", "anastasia"]
term: "ana"

Ouput:
["ana", "anastasia"]

Ejemplo 2:

Input:
array: ["ana", "santi", "nico", "anastasia"]
term: "xyz"

Output:
[] 
export function filterByTerm(array, term) {
  esctibe tu codigo aqui
}

--------------------------------------------------
solucion

export function filterByTerm(array, term) {
  if (!Array.isArray(array) || typeof term !== 'string') {
    return [];
  }

  return array.filter(word => word.includes(term));
}

explicacion de la solucion:
filterByTerm recibe un array de strings y un string con el termino a buscar.

!Array.isArray(array) se asegura de que el primer argumento es un array.
typeof term !== 'string' se asegura de que el termino de busqueda es una cadena de texto.

.filter(word => word.includes(term)) recorre el array y mantiene solo los elementos que incluyen el termino de busqueda.

 */
