const numbers = [1, 2, 3, 9]; // esto es un arrayu

let rta = false;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element % 2 === 0) {
    rta = true;
    break;
  }
}
console.log(rta);

const rta2 = numbers.some((item) => item % 2 === 0);
console.log("rta2", rta2);

const orders = [
  { customerName: "leomath", total: 100, delivery: true },
  { customerName: "lina", total: 200, delivery: false },
  { customerName: "luis", total: 300, delivery: true },
  { customerName: "oscar", total: 400, delivery: false },
];

const rta3 = orders.some((item) => item.delivery);
console.log("rta3", rta3);

const dates = [
  {
    startDate: new Date(2021, 1, 1, 10),
    endDate: new Date(2021, 1, 1, 11),
    title: "cita de trabajo",
  },
  {
    startDate: new Date(2021, 1, 1, 15),
    endDate: new Date(2021, 1, 1, 15, 30),
    title: "cita con el jefe",
  },
  {
    startDate: new Date(2021, 1, 1, 20),
    endDate: new Date(2021, 1, 1, 21),
    title: "cena",
  },
];

const newAppointment = {
  startDate: new Date(2021, 1, 1, 19),
  endDate: new Date(2021, 1, 1, 20, 30),
};

const { areIntervalsOverlapping } = require("date-fns");

const isOverlap = (newDate) => {
  return dates.some((date) => {
    return areIntervalsOverlapping(
      { start: date.startDate, end: date.endDate },
      { start: newDate.startDate, end: newDate.endDate }
    );
  });
};
console.log(isOverlap(newAppointment));

/*
reto

Tu reto es retornar true si dentro de array de números al menos uno es un número par, para solucionarlo vas a encontrar una función llamada checkArray que recibe un parámetro de entrada:

numbers: Un array de números
Dentro del cuerpo de la función checkArray debes escribir tu solución.

Ejemplo 1:

Input: [1, 3, 5, 7, 10, 11]
Output: true

Ejemplo 2:

Input: [1, 3, 5]
Output: false

Ejemplo 3:

Input: []
Output: false

export function checkArray(numbers) {
 escribe tu codigo aqui;
}



solucion:
export function checkArray(numbers) {
  return numbers.some((item) => item % 2 === 0);
}
*/