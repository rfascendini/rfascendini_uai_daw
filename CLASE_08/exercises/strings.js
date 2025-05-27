/*
a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el
texto en mayúscula (utilizar toUpperCase).
b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
string con los primeros 5 caracteres guardando el resultado en una nueva
variable (utilizar substring).
c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
string con los últimos 3 caracteres guardando el resultado en una nueva variable
(utilizar substring).
d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
string con la primera letra en mayúscula y las demás en minúscula. Guardar el
resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y
el operador +).
e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en
blanco. Encontrar la posición del primer espacio en blanco y guardarla en una
variable (utilizar indexOf).
f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y
algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para
generar un nuevo string que tenga la primera letra de ambas palabras en
mayúscula y las demás letras en minúscula (utilizar indexOf, substring,
toUpperCase, toLowerCase y el operador +)
*/


// a. Convertir todo el texto en mayúscula
let textoA = "programacion";
let textoMayusculas = textoA.toUpperCase();

// b. Obtener los primeros 5 caracteres
let textoB = "desarrollador";
let primerosCinco = textoB.substring(0, 5);

// c. Obtener los últimos 3 caracteres
let textoC = "javascript";
let ultimosTres = textoC.substring(textoC.length - 3);

// d. Primera letra en mayúscula y las demás en minúscula
let textoD = "computadora";
let primeraMayuscula = textoD.substring(0, 1).toUpperCase() + textoD.substring(1).toLowerCase();

// e. Posición del primer espacio en blanco
let textoE = "Hola mundo!";
let posicionEspacio = textoE.indexOf(" ");

// f. Primera letra de ambas palabras en mayúscula, el resto en minúscula
let textoF = "desarrollador backend";
let posicionSeparador = textoF.indexOf(" ");

let palabraUno = textoF.substring(0, posicionSeparador);
let palabraDos = textoF.substring(posicionSeparador + 1);

let nuevaPalabraUno = palabraUno.substring(0, 1).toUpperCase() + palabraUno.substring(1).toLowerCase();
let nuevaPalabraDos = palabraDos.substring(0, 1).toUpperCase() + palabraDos.substring(1).toLowerCase();

let resultadoFinal = nuevaPalabraUno + " " + nuevaPalabraDos;
