const totals = [1, 3, 5, 6, 9];

let sum = 0; // es let por que es una variable que se va a modificar.
for (let index = 0; index < totals.length; index++) {
  const element = totals[index];
  sum = sum + element;
}
console.log(sum);

const rta = totals.reduce((sum, element) => sum + element, 0);
console.log("reduce", rta);
/**
 * el metodo reduce, recibe una funcion qu recibe dos parametros;
 * el primero es el acumulador, que es el resultado de la iteracion anterior, y el segundo es el elemento actual del array.
 * el segundo parametro reduce es el valor inicial del acumulador.
 * reduce devuelve el valor final del acumulador.
 */
