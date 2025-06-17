document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-suscripcion");

  const inputNombre = document.getElementById("input-nombre");
  const errorNombre = document.getElementById("input-nombre-error");

  const inputEmail = document.getElementById("input-email");
  const errorEmail = document.getElementById("input-email-error");

  const inputPass = document.getElementById("input-pass");
  const errorPass = document.getElementById("input-pass-error");

  const inputEdad = document.getElementById("input-edad");
  const errorEdad = document.getElementById("input-edad-error");

  const inputTel = document.getElementById("input-tel");
  const errorTel = document.getElementById("input-tel-error");

  const inputDir = document.getElementById("input-dir");
  const errorDir = document.getElementById("input-dir-error");

  const inputCiudad = document.getElementById("input-ciudad");
  const errorCiudad = document.getElementById("input-ciudad-error");

  const inputCP = document.getElementById("input-cp");
  const errorCP = document.getElementById("input-cp-error");

  const inputDNI = document.getElementById("input-dni");
  const errorDNI = document.getElementById("input-error-dni");

  const saludo = document.getElementById("saludo-dinamico");

  function actualizarSaludo() {
    saludo.textContent = "HOLA " + inputNombre.value.toUpperCase();
  }

  inputNombre.addEventListener("keydown", actualizarSaludo);
  inputNombre.addEventListener("keyup", actualizarSaludo);
  inputNombre.addEventListener("paste", () => setTimeout(actualizarSaludo, 50));
  inputNombre.addEventListener("input", actualizarSaludo); // ← captura autocompletado

  const campos = [
    {
      label: "Nombre Completo",
      input: inputNombre,
      span: errorNombre,
      validar: (v) => v.length > 6 && v.includes(" "),
      msj: "Debe tener más de 6 letras y al menos un espacio.",
    },
    {
      label: "Email",
      input: inputEmail,
      span: errorEmail,
      validar: (v) => v.includes("@") && v.includes("."),
      msj: "Email inválido.",
    },
    {
      label: "Contraseña",
      input: inputPass,
      span: errorPass,
      validar: (v) => v.length >= 8 && /[a-z]/i.test(v) && /[0-9]/.test(v),
      msj: "Debe tener al menos 8 caracteres y contener letras y números.",
    },
    {
      label: "Edad",
      input: inputEdad,
      span: errorEdad,
      validar: (v) => !isNaN(parseInt(v)) && parseInt(v) >= 18,
      msj: "Debe ser mayor o igual a 18.",
    },
    {
      label: "Teléfono",
      input: inputTel,
      span: errorTel,
      validar: (v) => v.length >= 7 && !isNaN(v),
      msj: "Debe tener al menos 7 números.",
    },
    {
      label: "Dirección",
      input: inputDir,
      span: errorDir,
      validar: (v) => v.length >= 5 && v.includes(" "),
      msj: "Debe tener al menos 5 caracteres y un espacio.",
    },
    {
      label: "Ciudad",
      input: inputCiudad,
      span: errorCiudad,
      validar: (v) => v.length >= 3,
      msj: "Debe tener al menos 3 caracteres.",
    },
    {
      label: "Código Postal",
      input: inputCP,
      span: errorCP,
      validar: (v) => v.length >= 3,
      msj: "Debe tener al menos 3 caracteres.",
    },
    {
      label: "DNI",
      input: inputDNI,
      span: errorDNI,
      validar: (v) => (v.length === 7 || v.length === 8) && !isNaN(v),
      msj: "Debe tener 7 u 8 números.",
    },
  ];

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let mensaje = "";
    let errores = 0;

    campos.forEach((campo) => {
      if (!campo.validar(campo.input.value)) {
        campo.span.textContent = campo.msj;
        campo.input.classList.remove("input-valido");
        campo.input.classList.add("input-invalido");
        mensaje += `- ${campo.label}: ${campo.msj}\n`;
        errores++;
      } else {
        campo.span.textContent = "";
        campo.input.classList.remove("input-invalido");
        campo.input.classList.add("input-valido");
      }
    });

    if (errores > 0) {
      alert("Hay errores en el formulario:\n" + mensaje);
      return;
    }

    const datosDelForm = {};
    campos.forEach((c) => {
      datosDelForm[c.input.name || c.input.id] = c.input.value;
    });

    const queryParams = new URLSearchParams(datosDelForm).toString();

    fetch(`https://jsonplaceholder.typicode.com/posts?${queryParams}`, {
      method: "GET",
    })
      .then(() => {
        mostrarModal(true, datosDelForm);
        localStorage.setItem("formData", JSON.stringify(datosDelForm));
      })
      .catch((error) => {
        mostrarModal(false, error.message);
      });
  });

  function mostrarModal(exito, contenido) {
    const modal = document.getElementById("modal");
    const mensaje = document.getElementById("modal-mensaje");
    const titulo = document.getElementById("modal-title");

    if (exito) {
      titulo.textContent = "¡Suscripción exitosa!";
      mensaje.innerHTML = `<pre>${JSON.stringify(contenido, null, 2)}</pre>`;
    } else {
      titulo.textContent = "Error en la suscripción";
      mensaje.innerHTML = `<p>${contenido}</p>`;
    }

    modal.classList.remove("oculto");
  }

  document.getElementById("modal-close").addEventListener("click", function () {
    document.getElementById("modal").classList.add("oculto");
  });
});
