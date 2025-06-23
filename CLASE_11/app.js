document.addEventListener("DOMContentLoaded", function () {
    // Elementos del DOM
    const btnTodos       = document.getElementById("btn-todos");
    const formulario     = document.getElementById("form-filtros");
    const filtroNombre   = document.getElementById("filtro-nombre");
    const filtroEstado   = document.getElementById("filtro-estado");
    const filtroEspecie  = document.getElementById("filtro-especie");
    const filtroTipo     = document.getElementById("filtro-tipo");
    const filtroGenero   = document.getElementById("filtro-genero");
    const resultados     = document.getElementById("resultados");
    const btnAnterior    = document.getElementById("ant-pagina");
    const btnSiguiente   = document.getElementById("sig-pagina");
    const infoPagina     = document.getElementById("info-pagina");

    // Variables de paginación
    let paginaActual = 1;
    let totalPaginas = 1;
    let ultimaUrl    = "";

    // Defino los filtros como un array de objetos
    const filtros = [
        { etiqueta: "Nombre",  input: filtroNombre,  param: "name"   },
        { etiqueta: "Estado",  input: filtroEstado,  param: "status" },
        { etiqueta: "Especie", input: filtroEspecie, param: "species"},
        { etiqueta: "Tipo",    input: filtroTipo,    param: "type"   },
        { etiqueta: "Género",  input: filtroGenero,  param: "gender" },
    ];

    // Carga inicial: si hay ?page= en la URL, vá a esa página
    const paramsInit = new URLSearchParams(window.location.search);
    const pageParam  = parseInt(paramsInit.get("page"));
    if (pageParam && pageParam > 1) {
        paginaActual = pageParam;
        cargarPersonajes(`https://rickandmortyapi.com/api/character?page=${paginaActual}`);
    } else {
        cargarPersonajes("https://rickandmortyapi.com/api/character");
    }

    // Listeners
    btnTodos.addEventListener("click", () => {
        paginaActual = 1;
        cargarPersonajes("https://rickandmortyapi.com/api/character");
    });

    formulario.addEventListener("submit", function (e) {
        e.preventDefault();
        paginaActual = 1;

        const params = new URLSearchParams();
        filtros.forEach(f => {
            const v = f.input.value.trim();
            if (v) params.append(f.param, v);
        });

        const url = params.toString()
            ? `https://rickandmortyapi.com/api/character?${params}`
            : "https://rickandmortyapi.com/api/character";

        cargarPersonajes(url);
    });

    btnAnterior.addEventListener("click", () => {
        if (paginaActual > 1) {
            const u = new URL(ultimaUrl);
            u.searchParams.set("page", paginaActual - 1);
            cargarPersonajes(u.href);
        }
    });

    btnSiguiente.addEventListener("click", () => {
        if (paginaActual < totalPaginas) {
            const u = new URL(ultimaUrl);
            u.searchParams.set("page", paginaActual + 1);
            cargarPersonajes(u.href);
        }
    });

    // Función para obtener datos y actualizar URL/history
    function cargarPersonajes(url) {
        resultados.innerHTML = "<p>Cargando personajes…</p>";

        fetch(url)
            .then(res => {
                if (!res.ok) throw new Error("HTTP " + res.status);
                return res.json();
            })
            .then(datos => {
                // Actualizamos paginaActual y totalPaginas
                const u = new URL(url);
                paginaActual  = parseInt(u.searchParams.get("page")) || 1;
                totalPaginas  = datos.info.pages;

                // Construimos ultimaUrl (base sin ?page)
                const baseObj = new URL(url);
                baseObj.searchParams.delete("page");
                ultimaUrl = baseObj.href;

                // PushState para reflejar ?page= en la barra
                const navegadorBase = window.location.origin + window.location.pathname;
                window.history.pushState({}, "", `${navegadorBase}?page=${paginaActual}`);

                actualizarPaginacion();
                mostrarPersonajes(datos.results);
            })
            .catch(err => {
                resultados.innerHTML = `<p class="error">Error: ${err.message}</p>`;
            });
    }

    function mostrarPersonajes(lista) {
        if (!lista || lista.length === 0) {
            resultados.innerHTML = "<p>No se encontraron personajes.</p>";
            return;
        }
        resultados.innerHTML = "";
        lista.forEach(personaje => {
            const tarjeta = document.createElement("div");
            tarjeta.className = "tarjeta-personaje";
            tarjeta.innerHTML = `
                <img src="${personaje.image}" alt="${personaje.name}">
                <div class="info-personaje">
                  <h4>${personaje.name}</h4>
                  <p>Estado: ${personaje.status}</p>
                  <p>Especie: ${personaje.species}</p>
                  <p>Tipo: ${personaje.type || "Desconocido"}</p>
                  <p>Género: ${personaje.gender}</p>
                </div>
            `;
            resultados.appendChild(tarjeta);
        });
    }
    

    function actualizarPaginacion() {
        infoPagina.textContent  = `Página ${paginaActual} de ${totalPaginas}`;
        btnAnterior.disabled    = paginaActual <= 1;
        btnSiguiente.disabled   = paginaActual >= totalPaginas;
    }
});
