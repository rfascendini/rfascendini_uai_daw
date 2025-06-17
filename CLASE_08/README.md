# 📝 Trabajo Práctico - Semana 6: Formulario de Suscripción con Validaciones y Diseño Responsive

## 📌 Resultados de Aprendizaje

**T1-09-37-1-3-3-RA1:**  
_Establece lenguajes interpretados y de marcado para aplicar a los proyectos de desarrollo, estableciendo mediante indicadores, las condiciones de desempeño más adecuadas._

**T1-09-37-3-1-3-RA2:**  
_Compara proyectos de sistemas cliente-servidor para establecer diferencias de funcionamiento, considerando diferentes protocolos y entornos de desarrollo._

---

## 🧩 Descripción del Problema

La consigna de esta semana es agregar una **página de suscripción** al diario digital desarrollado previamente, manteniendo el diseño general (cabecera, pie, estilos) y sumando un **formulario responsive** con validaciones completas en JavaScript.

---

## 🛠️ Requisitos Técnicos

### 📄 Estructura del Formulario

El formulario debe incluir los siguientes campos:

- Nombre completo
- Email
- Contraseña
- Repetir contraseña
- Edad
- Teléfono
- Dirección
- Ciudad
- Código Postal
- DNI
- Botón **Enviar**

> Además, debe contar con un título dinámico que diga:  
> **"HOLA [Nombre Completo]"**, el cual debe actualizarse en tiempo real mientras el usuario escribe.

---

### 🎨 Diseño Responsive (CSS)

- **Mobile**: todos los campos uno debajo del otro.
- **Escritorio**: campos en **dos columnas**, botón centrado al final.
- Mantener la estética general del diario.
- Uso de Flexbox + media queries.

---

### ✅ Validaciones (JavaScript)

- **Nombre completo**: mínimo 6 letras y al menos un espacio.
- **Email**: formato válido de email.
- **Contraseña**: mínimo 8 caracteres con letras y números.
- **Edad**: número entero mayor o igual a 18.
- **Teléfono**: al menos 7 dígitos, sin espacios ni símbolos.
- **Dirección**: mínimo 5 caracteres con letras, números y espacio.
- **Ciudad**: mínimo 3 caracteres.
- **Código Postal**: mínimo 3 caracteres.
- **DNI**: número de 7 u 8 dígitos.

📌 **Eventos usados**:

- `blur`: para validar el campo y mostrar mensaje de error.
- `focus`: para ocultar mensaje de error si existía.
- `keydown` / `focus` en "Nombre completo": actualizar el título.
- `click` en **Enviar**: mostrar resumen de datos o errores.

---

## 🚀 Pasos Realizados

1. Mantener cabecera y pie del diario.
2. Maquetar formulario responsive con Flexbox.
3. Añadir validaciones en JS para cada campo (`blur`, `focus`).
4. Mostrar cartel al hacer clic en “Enviar” con resumen o errores.
5. Agregar título dinámico: “HOLA [Nombre]” en tiempo real.
6. Subir los archivos al **repositorio original**.
7. Verificar funcionamiento en **GitHub Pages**.

---

## 🔗 Visualización del Formulario

- 📄 [Ver página en GitHub Pages](https://rfascendini.github.io/rfascendini_uai_daw/CLASE_08/)

---

## 📅 Entrega

Enviar la URL del archivo HTML cargado en GitHub Pages como respuesta a la **Problemática Semanal 06** en Classroom **antes de la fecha límite establecida**.

