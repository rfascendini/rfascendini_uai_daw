# 🧾 Trabajo Práctico - Semana 08: Formulario de Suscripción con Validaciones y Diseño Responsive

## 📌 Resultados de Aprendizaje

**T1-09-37-1-3-3-RA1:**  
_Establece lenguajes interpretados y de marcado para aplicar a los proyectos de desarrollo, estableciendo mediante indicadores las condiciones de desempeño más adecuadas._

**T1-09-37-3-1-3-RA2:**  
_Compara proyectos de sistemas cliente-servidor para establecer diferencias de funcionamiento, considerando diferentes protocolos y entornos de desarrollo._

---

## 🧩 Descripción de la Problemática

La actividad consiste en agregar una **página de suscripción** al diario online desarrollado en semanas anteriores. Esta nueva página deberá mantener el estilo visual del proyecto (cabecera, pie de página y diseño) e incluir un **formulario responsive** con validaciones completas.

---

## 📝 Requisitos del Formulario

### ✏️ Campos requeridos

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

Además, se debe incluir un **botón “Enviar”** al final del formulario.

---

### 🎨 Diseño Responsive

- En **celulares**, los campos deben verse uno debajo del otro.
- En **pantallas grandes**, deben organizarse en **dos columnas**, con el botón centrado al final.
- El formulario debe respetar la **estética visual** del resto del sitio.

---

## ✅ Validaciones (JS)

Se aplican validaciones al evento `blur` de cada campo, y se limpian al hacer `focus`:

- **Nombre completo:** más de 6 letras y al menos un espacio.
- **Email:** formato válido.
- **Contraseña:** mínimo 8 caracteres con letras y números.
- **Edad:** número entero ≥ 18.
- **Teléfono:** mínimo 7 dígitos, sin espacios ni símbolos.
- **Dirección:** mínimo 5 caracteres, debe incluir letras, números y un espacio.
- **Ciudad y Código Postal:** al menos 3 caracteres.
- **DNI:** número de 7 u 8 dígitos.

---

## 🔔 Envío del Formulario

- Al presionar el botón **“Enviar”**, se debe mostrar un **cartel emergente (modal o alert)**.
- Si todas las validaciones pasan, mostrar los datos ingresados.
- Si alguna validación falla, mostrar el error correspondiente tanto en pantalla como en el mensaje emergente.

---

### ⭐ BONUS

- Agregar un título al formulario que diga **"HOLA"**.
- A medida que el usuario escribe en el campo "Nombre completo", el título debe actualizarse en **tiempo real** usando los eventos `keydown` y `focus`.

---

## 📤 Subida a GitHub y Visualización

- Todos los archivos fueron versionados correctamente con Git.
- La página fue publicada en GitHub Pages.

🔗 **Ver formulario funcionando:**  
[Visualización del Proyecto](https://rfascendini.github.io/rfascendini_uai_daw/CLASE_9/)

---

## 📅 Entrega

Subir todos los cambios al repositorio y responder la **Problemática Semanal 08** en Classroom incluyendo el **link directo al archivo HTML** publicado en GitHub Pages.



