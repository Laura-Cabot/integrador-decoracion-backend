# Million Home Designs

Bienvenidos a **Million Home Designs**, un proyecto que nació del amor por la decoración y el diseño con alma.  
Esta página fue desarrollada con mucho esfuerzo, cariño y atención al detalle, como parte de mi formación como **Desarrolladora Web Full Stack**.

Sé que el backend tiene un rol clave y lo aprendí y trabajé en profundidad, pero la verdad me apasiona el diseño y por eso mismo me gusta creo mas  el frontend.  
Cada elección de color, tipografía, imagen y sección fue pensada para transmitir armonía y estilo.  
Y lo más importante: LAS FOTOS DE DECORACION SON REALES, son de mi cuenta de Instagram y de decoraciones que hice con mucho amor.

---

## 🌐 Proyecto Online
- **Frontend:** [https://laura-cabot.github.io/integrador-decoracion-backend/](https://laura-cabot.github.io/integrador-decoracion-backend/)
- **Backend (API):** [https://integrador-decoracion-backend.onrender.com/productos](https://integrador-decoracion-backend.onrender.com/productos)

---

##  ¿Qué ofrece esta web?

- **Catálogo dinámico de productos decorativos**, como velas, floreros, bandejas, cuadros y más.
- **Galería con fotos reales** de ambientaciones, tomadas de mi propia experiencia y hogar.
- **Asesoramiento personalizado** para quienes buscan transformar sus espacios.
- **Formulario de contacto** funcional y real.
- **Diseño responsive** con Bootstrap, adaptable a cualquier dispositivo.
- Estética **emocional, elegante y cuidada**, con transparencias y detalles dorados.

---

##  Tecnologías utilizadas

- HTML5
- CSS3 + Bootstrap 5.3
- JavaScript
- TypeScript (para backend)
- JSON como base de datos simulada
- Node.js + Express
- Git y GitHub

---

## Estructura del proyecto

- `docs/`: contiene el HTML, CSS, imágenes y scripts del frontend (publicados en GitHub Pages).
- `src/`: carpeta de desarrollo en TypeScript con controladores, rutas, servicios y configuración del servidor.
- `data/productos.json`: archivo simulado de base de datos con los productos decorativos.
- `dist/`: carpeta generada automáticamente al compilar el backend con TypeScript.
- `.gitignore`: ignora archivos que no deben subirse, como `node_modules` y archivos temporales.

---

## Cómo ejecutar el proyecto localmente

1. Cloná el repositorio.
2. Instalá dependencias en el backend:

```bash
npm install
```

3. Compilá el backend:

```bash
npm run build
```

4. Iniciá el servidor (API):

```bash
npm run dev
```

5. Abrí el archivo `index.html` desde la carpeta `docs` con **Live Server** o en un navegador.

> ⚠️ **IMPORTANTE:** El frontend se conecta al backend mediante `fetch` en `http://localhost:3000`.  
> Si el backend no está levantado, los productos **no se cargarán** y aparecerá un error `Failed to fetch`.

---

## 🔍 ¿Por qué no se usa una API externa?

Porque la consigna pedía **crear una API propia con TypeScript y POO**, con rutas, filtros por query, etc.  
Por eso no se usó una API pública como en el proyecto de Rick and Morty.  
Este backend es completamente funcional, simula una base de datos con un archivo `.json` y responde a endpoints reales.

---

##  Principios aplicados (POO y SOLID)

- Uso de **clases** y **controladores** para organizar responsabilidades.
- Principio de **Responsabilidad Única** (cada archivo cumple una sola función).
- Manejo de **filtros mediante parámetros query**.
- Buenas prácticas de modularización y separación de capas (`routes`, `controllers`, `services`).
- Lectura de datos simulados desde un JSON externo.

---

## 📝 Nota personal

Por motivos personales no pude asistir a todas las clases, pero me esforcé muchísimo para aprender por mi cuenta, investigar y cumplir con la consigna. Me aseguré de crear una API funcional, separada del frontend, como se hace profesionalmente.

---

Gracias por visitar este proyecto.  
Cada sección fue pensada, codificada y diseñada con dedicación.
