/*
sintaxis del bucle for:
for (inicializacion; condicion; incremento){
  // bloque de codigo
}

explicacion del ejemplo:
let index = 0; //inicia un contador desde cero 0.
index < letras.length; //el bucle se ejecuta mientras index sea menor que la longitud del array letras.
index++; //incrementa el contador en 1 cada vez que se repite el bucle.
0, 1, 2, 3, 4; // el bucle se ejecuta 5 veces, una por cada letra del array.

const elementos = letras[index]; //asigna a la variable 'elementos' el valor del array 'letras' en la pocision 'index'.
console.log(elementos); // imprime en consola el valor de 'elementos'.

*/

const letras = ["be", "ce", "de", "ef", "ge"];

for (let index = 0; index < letras.length; index++) {
  const elementos = letras[index];
  console.log(elementos);
}
