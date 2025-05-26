const products = [
  { name: "queso", price: 12.05, stock: 50 },
  { name: "jamon", price: 20.56, stock: 15 },
  { name: "leche", price: 2.99, stock: 100 },
  { name: "pan", price: 1.5, stock: 200 },
  { name: "huevos", price: 3.25, stock: 80 },
];
const addNewAttr = (array) => {
  const newArray = array.map((item) => {
    const taxes = Number((item.price * 0.19).toFixed(2));
    return {
      ...item,
      taxes,
    };
  });
  return newArray;
};
const updateProducts = addNewAttr(products);
console.log("updateProducts", updateProducts);
/*
const orders = [
  { customerName: "leomath", total: 100, delivery: true },
  { customerName: "lina", total: 200, delivery: false },
  { customerName: "luis", total: 300, delivery: true },
  { customerName: "oscar", total: 400, delivery: false },
];
console.log("original", orders);
const rta = orders.map((item) => item.total);
console.log("rta", rta);
const customer = orders.map((item) => item.customerName);
console.log("customer", customer);
const dlry = orders.map(item => item.delivery);
console.log('delivery', dlry);


Tienes un array de objetos que representan datos de productos con los siguientes atributos:

name
price
stock
Tu reto es agregar y calcular una nueva propiedad llamada "taxes", los impuestos deben ser del 19% con base al precio base y debes tener en cuenta que como resultado se debe dejar un valor entero, sin decimales.

Por ejemplo si aplicamos el 19% de impuestos para un producto con precio de $1000 el resultado de los "taxes" será $190, o para un producto con precio de $656 el resultado de los "taxes" será $124.

Para solucionarlo vas a encontrar una función llamada addNewAttr que recibe un parámetro de entrada:

array: Un array de objetos.
Dentro del cuerpo de la función addNewAttr debes escribir tu solución.
*/
