const elementos = ["aire", "agua", "tierra"];

let respuestaFinal = " ";
const separador = " -- ";
for (let index = 0; index < elementos.length; index++) {
  const element = elementos[index];
  respuestaFinal = respuestaFinal + element + separador;
}
console.log("for", respuestaFinal);

const respuesta = elementos.join(separador);
console.log("join", respuesta);

const titulo = "curso de manipulacion de arrays";
console.log(titulo.split(" "));

const urlFinal = titulo.split(" ").join("-").toUpperCase();
console.log(urlFinal);

/*
reto:

En este desafío vas a recibir el título de un artículo y tú debes transformarlo en un formato de URL en donde normalmente se transforma todo en minúscula y se cambian los espacios por un guion (-).

Para solucionarlo vas a encontrar una función llamada parseToURL que recibe un parámetro de entrada:

title: Un String con el título.
Dentro del cuerpo de la función parseToURL debes escribir tu solución.

Ejemplo 1:

Input: "La forma de correr Python"
Output: "la-forma-de-correr-python"

solucion:

export function parseToURL(title) {
  return title.split(" ").join('-').toLowerCase();
}

*/
