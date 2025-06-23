# 📤 Trabajo Práctico - Semana 11: TP API REST - RICK & MORTY

## Resultados de Aprendizaje

- **T1-09-37-1-3-3-RA1**  
  - Establece lenguajes interpretados y de marcado  
  - Para aplicar a los proyectos de desarrollo  
  - Estableciendo mediante indicadores las condiciones de desempeño más adecuadas

- **T1-09-37-3-1-3-RA2**  
  - Compara proyectos de Sistemas Cliente – Servidor  
  - Para establecer diferencias de funcionamiento  
  - Considerando diferentes protocolos y entornos de desarrollo

## Descripción del problema a resolver

La problemática de la semana 10 consiste en crear una página sencilla que realice llamadas a la API REST de [rickandmortyapi.com](https://rickandmortyapi.com/) y muestre en pantalla la información obtenida. Esta página deberá publicarse en GitHub Pages.

- Debe incluir un botón que obtenga todos los personajes y los muestre en el DOM.  
- La salida puede ser la información cruda o una tabla organizada.  
- Debe haber un campo (input o select) para cada uno de los filtros (ver sección **Filter Characters** de la documentación):
  - `name`: filtrar por nombre.  
  - `status`: filtrar por estado (`alive`, `dead`, `unknown`).  
  - `species`: filtrar por especie.  
  - `type`: filtrar por tipo.  
  - `gender`: filtrar por género (`female`, `male`, `genderless`, `unknown`).  
- Debe haber un botón para enviar la request con filtros y mostrar los resultados.  
- Si alguna request falla, debe mostrarse un mensaje de error en pantalla.  
- Subir todos los cambios a GitHub y compartir la URL de GitHub Pages con el formulario funcionando.

## Pasos a seguir

1. **Estructura de archivos**  
   - Crear `index.html` y `styles.css`.  
   - Crear `script.js` para la lógica de las requests.

2. **HTML (`index.html`)**  
   - Añadir un botón para obtener todos los personajes.  
   - Añadir un input o select por cada filtro, con un botón de submit.

3. **CSS (`styles.css`)**  
   - Aplicar estilos mínimos para una apariencia agradable.

4. **JavaScript (`script.js`)**  
   - Implementar la lógica para:
     - Hacer GET de todos los personajes.  
     - Hacer GET con filtros usando `URLSearchParams`.  
     - Manejar la paginación y actualizar la URL.  
     - Mostrar resultados en el DOM.  
     - Capturar y mostrar errores de las requests.

5. **Control de versiones**  
   - Hacer commits frecuentes con descripciones claras del progreso.

6. **Despliegue**  
   - Subir todo a la rama principal de GitHub.  
   - En GitHub, activar GitHub Pages desde la rama `main` (carpeta `/`).  
   - Verificar que la página funcione y compartir la URL final.  
