const { id } = require("date-fns/locale");

const nembers = [1, 30, 40, 50, 60, 70, 80, 90, 100];

let rta = undefined;
for (let index = 0; index < nembers.length; index++) {
  const element = nembers[index];
  if (element === 350) {
    rta = element;
    break;
  }
}
console.log(rta);

const products = [
  {
    name: "pizza",
    price: 100,
    id: "🍕",
  },
  {
    name: "hamburguesa",
    price: 200,
    id: "🍔",
  },
  {
    name: "hot dog",
    price: 150,
    id: "🌭",
  },
  {
    name: "pasta",
    price: 300,
    id: "🍝",
  },
  {
    name: "ensalada",
    price: 250,
    id: "🥗",
  },
];

const respuesta = products.find((item) => item.id === "🍔");
console.log("respuesta", respuesta);

const respuesta2 = products.findIndex((item) => item.id === "🍔");
console.log("respuesta2", respuesta2);
