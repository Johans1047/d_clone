# D-Clone

# Tabla de Contenidos

| Tabla de contenidos |
| --- |
| [Descripción](#descripción) |
| [Stack](#stack) |
| [Dependencias](#dependencias) |
| [Configuración del Proyecto](#configuración-del-proyecto) |
| [Correr Servidor Express](#correr-servidor-express) |
| [Correr Aplicación Vue](#correr-aplicación-vue) |
| [Contribución](#contribución) |
| [Licencia](#licencia) |
| [Referencias](#referencias) |

# Descripción

Aplicación web que permite a diferentes usuarios conectarse a través de canales de texto y voz para comunicarse, enviarse mensajes, imágenes, emoji, etc.

# Stack

**Front-end Framework:** [Vue](https://vuejs.org/)

**CSS Framework:** [Tailwind CSS](https://tailwindcss.com/)

**Base de Datos:** [PostgreSQL](https://www.postgresql.org/)

**Backend Framework:** [Express](https://expressjs.com/)

**JavaScript Runtime:** [Node.js](https://nodejs.org/en/)

# Dependencias

``` node-postgres ``` Módulo de Node.js que facilita la interacción con bases de datos PostgreSQL.

``` tailwindcss ``` Framework de CSS que provee clases de utilidad para el diseño responsive sin repetir código CSS de manera innecesaria.

``` postcss ``` Herramienta de procesamiento de CSS utilizada por Tailwind para optimizar sus hojas de estilo.

``` autoprefixer ``` Plugin de PostCSS que añade prefijos de navegador a propiedades CSS para mejorar su compatibilidad.

``` nodemon ``` Dependencia de desarrollo que permite observar cambios en los archivos del proyecto y reiniciar automáticamente la aplicación.

``` express ``` Web Framework de Node.js que facilita la creación de aplicaciones web y APIs.

``` vue ``` Framework de JavaScript para desarrollo frontend basada en componentes. 

``` vite ``` Servidor de desarrollo que se actualiza dinámicamente al realizar cambios en el proyecto Vue.

# Configuración del Proryecto

Para instalar las dependencias del proyecto, nos vamos al directorio raíz del proyecto y corremos

```shell
npm install
cd client
npm install
```
# Correr Servidor Express

Para correr el servidor Express para desarollo, tenemos el siguiente comando:

```shell
npm start
```

Dentro de ``` package.json ```, el código que se corre al utilizar la línea anterior es: 

```json
  "scripts": {
    "start": "npx nodemon server.js"
  }
```

# Correr Aplicación Vue

Para correr Vite y ver la aplicación Vue en ejecución, tenemos el siguiente comando:

```shell
cd client
npm run dev
```

# Contribución

¡Gracias por considerar contribuir a nuestro proyecto! Si estás interesado en contribuir, por favor sigue estos pasos:

1. Realiza un fork del repositorio.
2. Clona tu fork en tu máquina local: `git clone https://github.com/tu-usuario/d-clone.git`
3. Crea una nueva rama para tu contribución: `git checkout -b mi-contribucion`
4. Realiza tus cambios y asegúrate de seguir las pautas de estilo del proyecto.
5. Haz commit de tus cambios: `git commit -m "Añadida la nueva característica"`
6. Sube tus cambios a tu fork: `git push origin mi-contribucion`
7. Abre un Pull Request en el repositorio original.

¡Estamos emocionados por tu contribución! Gracias por ayudarnos a mejorar D-Clone.

# Licencia

MIT License

Copyright (c) 2023 Jonathan Salazar, Diego Chan.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

# Referencias

[Fullstack Discord Clone: Next.js 13, React, Socket.io, Prisma, Tailwind, MySQL | Full Course 2023](https://youtu.be/ZbX4Ok9YX94?si=wSMWqGDcJY-Qf98c)

[PERN Stack Course - Build a Yelp clone (Postgres, Express, React, Node.js)](https://www.youtube.com/watch?v=J01rYl9T3BU&t=100s)

