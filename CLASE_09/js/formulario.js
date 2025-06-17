
document.addEventListener("DOMContentLoaded", function () {
    // Guardamos referencias a los campos
    var form = document.getElementById("form-suscripcion");

    var inputNombre = document.getElementById("input-nombre");
    var errorNombre = document.getElementById("input-nombre-error");

    var inputEmail = document.getElementById("input-email");
    var errorEmail = document.getElementById("input-email-error");

    var inputPass = document.getElementById("input-pass");
    var errorPass = document.getElementById("input-pass-error");

    var inputEdad = document.getElementById("input-edad");
    var errorEdad = document.getElementById("input-edad-error");

    var inputTel = document.getElementById("input-tel");
    var errorTel = document.getElementById("input-tel-error");

    var inputDir = document.getElementById("input-dir");
    var errorDir = document.getElementById("input-dir-error");

    var inputCiudad = document.getElementById("input-ciudad");
    var errorCiudad = document.getElementById("input-ciudad-error");

    var inputCP = document.getElementById("input-cp");
    var errorCP = document.getElementById("input-cp-error");

    var inputDNI = document.getElementById("input-dni");
    var errorDNI = document.getElementById("input-error-dni");

    var saludo = document.getElementById("saludo-dinamico");

    // ==== VALIDACIÓN CAMPO POR CAMPO ====

    inputNombre.addEventListener("blur", function () {
        var valor = inputNombre.value;
        if (valor.length <= 6) {
            errorNombre.textContent = "Debe tener más de 6 letras.";
        } else if (valor.indexOf(" ") === -1) {
            errorNombre.textContent = "Debe tener al menos un espacio.";
        }
    });

    inputNombre.addEventListener("focus", function () {
        errorNombre.textContent = "";
    });

    inputNombre.addEventListener("keydown", function () {
        saludo.textContent = "HOLA " + inputNombre.value.toLocaleUpperCase();
    });

    inputEmail.addEventListener("blur", function () {
        var valor = inputEmail.value;
        if (valor.indexOf("@") === -1 || valor.indexOf(".") === -1) {
            errorEmail.textContent = "Email inválido.";
        }
    });

    inputEmail.addEventListener("focus", function () {
        errorEmail.textContent = "";
    });

    inputPass.addEventListener("blur", function () {
        var valor = inputPass.value;
        if (valor.length < 8) {
            errorPass.textContent = "Mínimo 8 caracteres.";
        } else if (!(valor.match(/[a-z]/i) && valor.match(/[0-9]/))) {
            errorPass.textContent = "Debe tener letras y números.";
        }
    });

    inputPass.addEventListener("focus", function () {
        errorPass.textContent = "";
    });

    inputEdad.addEventListener("blur", function () {
        var edad = parseInt(inputEdad.value);
        if (isNaN(edad) || edad < 18) {
            errorEdad.textContent = "Debe ser mayor o igual a 18.";
        }
    });

    inputEdad.addEventListener("focus", function () {
        errorEdad.textContent = "";
    });

    inputTel.addEventListener("blur", function () {
        var valor = inputTel.value;
        if (valor.length < 7 || isNaN(valor)) {
            errorTel.textContent = "Debe tener al menos 7 números.";
        }
    });

    inputTel.addEventListener("focus", function () {
        errorTel.textContent = "";
    });

    inputDir.addEventListener("blur", function () {
        var valor = inputDir.value;
        if (valor.length < 5 || valor.indexOf(" ") === -1) {
            errorDir.textContent = "Debe tener al menos 5 caracteres y un espacio.";
        }
    });

    inputDir.addEventListener("focus", function () {
        errorDir.textContent = "";
    });

    inputCiudad.addEventListener("blur", function () {
        if (inputCiudad.value.length < 3) {
            errorCiudad.textContent = "Debe tener al menos 3 caracteres.";
        }
    });

    inputCiudad.addEventListener("focus", function () {
        errorCiudad.textContent = "";
    });

    inputCP.addEventListener("blur", function () {
        if (inputCP.value.length < 3) {
            errorCP.textContent = "Debe tener al menos 3 caracteres.";
        }
    });

    inputCP.addEventListener("focus", function () {
        errorCP.textContent = "";
    });

    inputDNI.addEventListener("blur", function () {
        var valor = inputDNI.value;
        if (valor.length < 7 || valor.length > 8 || isNaN(valor)) {
            errorDNI.textContent = "Debe tener 7 u 8 números.";
        }
    });

    inputDNI.addEventListener("focus", function () {
        errorDNI.textContent = "";
    });

    // ==== BOTÓN ENVIAR ====
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        var mensaje = "";
        var errores = 0;

        // Validamos de nuevo todo por las dudas
        if (inputNombre.value.length <= 6 || inputNombre.value.indexOf(" ") === -1) {
            mensaje += "- Nombre inválido\n";
            errores++;
        }
        if (inputEmail.value.indexOf("@") === -1 || inputEmail.value.indexOf(".") === -1) {
            mensaje += "- Email inválido\n";
            errores++;
        }
        if (inputPass.value.length < 8 || !(inputPass.value.match(/[a-z]/i) && inputPass.value.match(/[0-9]/))) {
            mensaje += "- Contraseña inválida\n";
            errores++;
        }
        if (isNaN(parseInt(inputEdad.value)) || parseInt(inputEdad.value) < 18) {
            mensaje += "- Edad inválida\n";
            errores++;
        }
        if (inputTel.value.length < 7 || isNaN(inputTel.value)) {
            mensaje += "- Teléfono inválido\n";
            errores++;
        }
        if (inputDir.value.length < 5 || inputDir.value.indexOf(" ") === -1) {
            mensaje += "- Dirección inválida\n";
            errores++;
        }
        if (inputCiudad.value.length < 3) {
            mensaje += "- Ciudad inválida\n";
            errores++;
        }
        if (inputCP.value.length < 3) {
            mensaje += "- Código Postal inválido\n";
            errores++;
        }
        if (inputDNI.value.length < 7 || inputDNI.value.length > 8 || isNaN(inputDNI.value)) {
            mensaje += "- DNI inválido\n";
            errores++;
        }

        // Mostramos resultado
        if (errores > 0) {
            alert("Hay errores en el formulario:\n" + mensaje);
        } else {
            alert("Formulario válido. Datos ingresados:\n" +
                "Nombre: " + inputNombre.value + "\n" +
                "Email: " + inputEmail.value + "\n" +
                "Contraseña: " + inputPass.value + "\n" +
                "Edad: " + inputEdad.value + "\n" +
                "Teléfono: " + inputTel.value + "\n" +
                "Dirección: " + inputDir.value + "\n" +
                "Ciudad: " + inputCiudad.value + "\n" +
                "CP: " + inputCP.value + "\n" +
                "DNI: " + inputDNI.value
            );
        }
    });
});

