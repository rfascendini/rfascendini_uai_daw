# 📤 Trabajo Práctico - Semana 10: Envío HTTP desde el Formulario y Manejo de Respuesta

## 📌 Resultados de Aprendizaje

**RA1:**  
_Establece lenguajes interpretados y de marcado para aplicar a los proyectos de desarrollo, estableciendo mediante indicadores las condiciones de desempeño más adecuadas._

**RA2:**  
_Compara proyectos de sistemas cliente-servidor para establecer diferencias de funcionamiento, considerando diferentes protocolos y entornos de desarrollo._

---

## 🧩 Descripción del Problema

La problemática de esta semana consiste en extender el formulario de suscripción del diario online (semana 08) para que al presionar el botón **“Enviar”**:

1. Se validen los campos del formulario.
2. Se realice una **llamada HTTP (GET)** desde JavaScript a una URL externa.
3. Se muestre un **modal** informando si el envío fue exitoso o no.
4. En caso de éxito:
   - Mostrar datos recibidos.
   - Guardar respuesta en **LocalStorage**.
   - Al refrescar la página, **precargar el formulario** con los datos almacenados.
5. En caso de error:
   - Mostrar mensaje de error en el modal.
   - No guardar nada.

---

## 🛠️ Pasos Realizados

### 1. Validación del Formulario
Se reutilizan las validaciones implementadas en la semana 08 para verificar que todos los campos estén correctos.

### 2. Envío de Datos (HTTP GET)
Al hacer clic en el botón, los datos se envían a:

Utilizando `fetch()` con el método `GET` y los datos codificados como **query params**.

### 3. Modal de Resultado
Se creó un **modal HTML + CSS** para mostrar el estado del envío:

- ✅ En caso de éxito: muestra mensaje y contenido del `response`.
- ❌ En caso de error: muestra mensaje de error y código de respuesta.

### 4. LocalStorage
- Si el envío es exitoso, los datos recibidos se almacenan localmente.
- En el evento `window.onload`, se recuperan y precargan en el formulario automáticamente.

### 5. Subida a GitHub
- Todos los archivos fueron versionados con Git.
- El proyecto se publicó correctamente en **GitHub Pages**.

---

## 🔗 Visualización del Proyecto

- 🌐 [Ver formulario funcionando en GitHub Pages](https://rfascendini.github.io/rfascendini_uai_daw/CLASE_10/)

