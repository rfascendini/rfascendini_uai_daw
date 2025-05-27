
/*
a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por
consola los meses 5 y 11 (utilizar console.log).
b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
c. Agregar un elemento al principio y al final del array (utilizar unshift y push).
d. Quitar un elemento del principio y del final del array (utilizar shift y pop).
e. Invertir el orden del array (utilizar reverse).
f. Unir todos los elementos del array en un único string donde cada mes este
separado por un guión - (utilizar join).
g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre
(utilizar slice).
*/

// a. Mostrar los meses 5 y 11 por consola
let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log(meses[4]); 
console.log(meses[10]); 

// b. Ordenar el array alfabéticamente y mostrarlo
let mesesOrdenados = [...meses]; // copiamos para no modificar el original
mesesOrdenados.sort();
console.log(mesesOrdenados);

// c. Agregar un elemento al principio y al final del array
meses.unshift("Inicio");
meses.push("Fin");

// d. Quitar un elemento del principio y del final del array
meses.shift();
meses.pop();

// e. Invertir el orden del array
meses.reverse();

// f. Unir todos los elementos con un guión
let mesesUnidos = meses.join("-");
console.log(mesesUnidos);

// g. Crear una copia del array con los meses desde Mayo hasta Noviembre
let mesesOriginales = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
let copiaMeses = mesesOriginales.slice(4, 11); 