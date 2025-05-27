/*
a. Crear una función suma que reciba dos valores numéricos y retorne el resultado.
Ejecutar la función y guardar el resultado en una variable, mostrando el valor de
dicha variable en la consola del navegador.
b. A la función suma anterior, agregarle una validación para controlar si alguno de
los parámetros no es un número, mostrar una alerta aclarando que uno de los
parámetros tiene error y retornar el valor NaN como resultado.
c. Crear una función validate integer que reciba un número como parámetro y
devuelva verdadero si es un número entero.
d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los
números sean enteros. En caso que haya decimales mostrar un alerta con el
error y retorna el número convertido a entero (redondeado).
e. Convertir la validación del ejercicio 6d) en una función separada y llamarla
dentro de la función suma probando que todo siga funcionando igual.
*/

// a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
function suma(a, b) {
    return a + b;
}

let resultadoA = suma(10, 5);
console.log(resultadoA);

// b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
function sumaValidada(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        alert("Uno de los parámetros tiene error: no es un número.");
        return NaN;
    }
    return a + b;
}

// c. Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.
function validateInteger(numero) {
    return Number.isInteger(numero);
}

// d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).
function sumaConEnteros(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        alert("Uno de los parámetros tiene error: no es un número.");
        return NaN;
    }

    if (!validateInteger(a)) {
        alert("El primer número no es entero. Se redondeará.");
        a = Math.round(a);
    }

    if (!validateInteger(b)) {
        alert("El segundo número no es entero. Se redondeará.");
        b = Math.round(b);
    }

    return a + b;
}

// e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.
function redondearSiNoEsEntero(valor) {
    if (!validateInteger(valor)) {
        alert("El valor no es entero. Se redondeará.");
        return Math.round(valor);
    }
    return valor;
}

function sumaFinal(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        alert("Uno de los parámetros tiene error: no es un número.");
        return NaN;
    }

    a = redondearSiNoEsEntero(a);
    b = redondearSiNoEsEntero(b);

    return a + b;
}

// Ejemplo de uso:
let resultadoFinal = sumaFinal(4.7, 8.3);
console.log(resultadoFinal);

