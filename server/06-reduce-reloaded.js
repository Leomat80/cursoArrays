// const items = [1, 3, 2, 3];

// items.reduce((obj, item) => {
//   if
// })

const numbers = [
  1, 2, 3, 3, 4, 5, 2, 1, 1, 3, 4, 5, 6, 7, 5, 5, 4, 7, 8, 9, 8, 7, 5, 4, 5, 8,
  9,
];
const ranges = ["1-5", "6-7", "8-9"];

const result = numbers.reduce((acum, item) => {
  if (item < 5) {
    //
    !acum[ranges[0]] ? (acum[ranges[0]] = 1) : (acum[ranges[0]] += 1);
  } else if (item > 5 && item < 8) {
    !acum[ranges[1]] ? (acum[ranges[1]] = 1) : (acum[ranges[1]] += 1);
  } else {
    !acum[ranges[2]] ? (acum[ranges[2]] = 1) : (acum[ranges[2]] += 1);
  }
  return acum;
}, {});

console.log(result);

/**
 * reto 
 * Tienes un array de números y tu reto es retornar la suma de todos los valores en él.

Para solucionarlo vas a encontrar una función llamada calcSum que recibe un parámetro de entrada:

numbers: Un array de números
Dentro del cuerpo de la función calcSum debes escribir tu solución.

Ejemplo 1:

Input: [1, 1, 1]
Ouput: 3

Ejemplo 2:

Input: [2, 4, 8]
Output: [2, 4, 8]

Ejemplo 3:

Input: []
Output: 0

export function calcSum(numbers) {
  escribe tu codigo aqui
}

--------------------solucion al reto------------------------------------
export function calcSum(numbers) {
  return numbers.reduce((obj, item) => obj + item, 0);
}

 */
