const words = ["spray", "limit", "elite", "exuberant"];

const newArray = [];
for (let index = 0; index < words.length; index++) {
  //
  const item = words[index];
  if (item.length >= 6) {
    // crea un nuevo array con los elementos que cumplen la condición si la longitud es mayor o igual a 6.
    newArray.push(item);
  }
}
console.log("newArray", newArray);
console.log("original", words);

const rta = words.filter((item) => item.length >= 6); // crea un nuevo array con los elementos que cumplen la condición si la longitud es mayor o igual a 6.
// filter recibe una función que retorna true o false, si es true el elemento se incluye en el nuevo array.
console.log("rta", rta);
console.log("original", words);

// Ejemplo de uso de filter con un array de objetos un poco más complejo

const orders = [
  { customerName: "leomath", total: 100, delivery: true },
  { customerName: "lina", total: 200, delivery: false },
  { customerName: "luis", total: 300, delivery: true },
  { customerName: "oscar", total: 400, delivery: false },
];
const respuesta = orders.filter((item) => item.delivery && item.total >= 200); // filtra los pedido que tiene true en delivery y un total mayor o igual a 200.

console.log("respuesta", respuesta);

const search = (query) => {
  // funcion que busca el en array de objetos orders, los que contienen el query en el customerName.
  return orders.filter((item) => {
    //
    return item.customerName.includes(query); // includes verifica si el string contiene el query.
  });
};
console.log(search("lin")); // busca los pedidos que contienen "lin" en el customerName.
/*
en resumen, filter crea un nuevo array con lo elemento que cumplen una condicion, este recibe una funcion que retorna true o false, que si es true el elemento se inclute en el nuevo array.
filter no modifica el array original, sin que crea un nuevo array con los elementos que cumplen la condicion,
*/

/*
reto
Tienes un array de strings que contienen diferentes palabras, tu reto es retornar un array solo con las que cumplan con la condición de tener 4 o más letras.

Para solucionarlo vas a encontrar una función llamada filterByLength que recibe un parámetro de entrada:

array: Un array de strigs con palabras
Dentro del cuerpo de la función filterByLength debes escribir tu solución.

export function filterByLength(array) {
  // Tu código aquí 👈
}
 solucion:

export function filterByLength(array) {
  return array.filter(word => word.length >= 4);
}
explicacion:
la funcion filterByLength recibe un array de strings y utiliza el metodo filter para crear un nuevo array que contiene solo las palabras que tiene 4 o mas letras. la funcion callback dentro de filter verifica la longitud de cada palabra y retorna true si cumple la condicion, lo que hace que esa palabra se incluya en el nuevo array.
ejemplo de uso:
const words = ["car", "dod", "house", "cat", "elefant"];

*/
