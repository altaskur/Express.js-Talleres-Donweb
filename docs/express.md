# Express

- [Express](#express)
  - [¿Qué es Express?](#qué-es-express)
  - [Middelwares](#middelwares)
  - [Routing](#routing)
  - [Funciones de Express](#funciones-de-express)
    - [express()](#express-1)
    - [app.listen()](#applisten)
    - [app.use()](#appuse)
    - [app.get() / app.post() / app.put() / app.delete()](#appget--apppost--appput--appdelete)
    - [app.render()](#apprender)
    - [app.set()](#appset)
  - [Propiedades de una petición HTTP](#propiedades-de-una-petición-http)
  - [Propiedades de una respuesta HTTP](#propiedades-de-una-respuesta-http)

## ¿Qué es Express?

Express es el framework más famoso de node.js y la base de
la mayoría de los frameworks de manejo de peticiones http, está basado en la librería Sinatra de Ruby.

Nos permite atender y procesar las peticiones HTTP, utilizar distintos puertos para atenderlas y el uso de motores de renderización (plantillas) para responderlas.

En sí, el framework es bastante simple, pero existen una serie de librerías (Middelwares) que nos permiten abordar la mayorías de los casos.

En si nos permite tener un servidor de HTTP, bastante liviano dentro de lo que es un sistema basado en Node y fácilmente escalable.

## Middelwares

Un concepto que vas a escuchar a lo largo del desarrollo de cualquier aplicación basada en Express, se considera middleware a todas aquellas funciones que tienen acceso a los objetos de solicitud y respuesta (res/req) de una petición HTTP, de tal manera que podemos modificar estos mismos antes de que lleguen a su destino final.

## Routing

Al igual que sistemas de Frontend basados en JS, el sistema de rutas, nos permite ejecutar distintas funciones según la ruta de la aplicación Ej: `localhost/ruta`, Express las maneja de una forma especialmente sencilla, que veremos más adelante.

## Funciones de Express

### express()

Es la función que nos permite crear una aplicación de Express, la cual nos permite utilizar todas las funciones que nos provee el framework.

```js
const express = require('express');
const app = express();
```

### app.listen()

Es la función que nos permite crear un servidor de Express, el cual nos permite atender las peticiones HTTP.

```js
const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('Server in port 3000');
});
```

### app.use()

Es la función que nos permite utilizar un middleware, el cual nos permite modificar las peticiones HTTP antes de que lleguen a su destino final.

```js
const express = require('express');
const app = express();

app.use(express.json());
```

### app.get() / app.post() / app.put() / app.delete()

Es la función que nos permite crear una ruta de tipo GET, la cual nos permite ejecutar una función cuando se haga una petición de tipo GET a la ruta especificada.

```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});
```

### app.render()

Es la función que nos permite renderizar una plantilla, la cual nos permite enviar una respuesta HTML al cliente.

```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.render('index');
});
```

### app.set()

Es la función que nos permite configurar una variable de entorno, la cual nos permite configurar distintas variables de entorno de nuestra aplicación.

```js
const express = require('express');
const app = express();

app.set('port', 3000);
```

## Propiedades de una petición HTTP

- **req.params**: Nos permite acceder a los parámetros de la ruta.
- **req.query**: Nos permite acceder a los parámetros de la url.
- **req.body**: Nos permite acceder al cuerpo de la petición.
- **req.headers**: Nos permite acceder a los headers de la petición.

## Propiedades de una respuesta HTTP

- **res.send()**: Nos permite enviar una respuesta de tipo texto.
- **res.json()**: Nos permite enviar una respuesta de tipo JSON.
- **res.render()**: Nos permite enviar una respuesta de tipo HTML.
- **res.redirect()**: Nos permite redireccionar a otra ruta.
- **res.status()**: Nos permite enviar una respuesta con un código de estado.
