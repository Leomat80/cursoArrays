// se trata de manipular arrays de manera mas eficiente y legible. aplanar varios niveles de profundidad de arrays.

const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let newArray = [];
for (let i = 0; i < matriz.length; i++) {
  const array = matriz[i];
  for (let k = 0; k < array.length; k++) {
    const element = matriz[i][k];
    newArray.push(element);
  }
}
const rta = matriz.flat();
console.log("Matriz original:", newArray);
console.log("Matriz aplanada:", rta);

const users = [
  { userId: 1, username: "Tom", attributes: ["nice", "cute"] },
  { userId: 2, username: "Mike", attributes: ["nice"] },
  { userId: 3, username: "Nico", attributes: ["nice", "cool"] },
];

const rta2 = users.flatMap((user) => user.attributes);
console.log("rta2", rta2);
