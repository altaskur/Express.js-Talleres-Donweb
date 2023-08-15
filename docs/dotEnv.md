# DotEnv

- [DotEnv](#dotenv)
  - [¿Qué es DotEnv?](#qué-es-dotenv)
  - [Variables de entorno](#variables-de-entorno)
  - [¿Por qué usar variables de entorno?](#por-qué-usar-variables-de-entorno)
  - [Instalación](#instalación)
  - [Uso de DotEnv](#uso-de-dotenv)
  - [.env](#env)

## ¿Qué es DotEnv?

DotEnv es una librería que nos permite acceder a las variables de entorno de nuestro sistema operativo.

## Variables de entorno

¿Que son las variables de entorno?, son variables que define el Sistema Operativo, que son usadas para el correcto uso del sistema, donde se almacenan datos cómo la rutas de los archivos, datos de la sesión, etc. También pueden ser definidas en un programa o en un fichero de configuración. En este caso
las guardaremos en el fichero `.env` que se encuentra en la raíz del proyecto.

## ¿Por qué usar variables de entorno?

Cuándo necesitamos guardar datos sensibles de nuestra aplicación cómo claves de acceso, direcciones de servidores o configuraciones cómo los puertos, vamos a necesitar guardarlas fuera de nuestro código fuente. Un caso muy común es cuando tenemos que subir nuestro código a un repositorio público cómo GitHub, ya que si subimos nuestras claves de acceso, cualquiera podría acceder a ellas y hacer un mal uso de ellas.

También aislar estos datos del código fuente, nos permite tener una mayor escalabilidad o mantenimiento, sin tener que modificar el código fuente. Por último seguridad, ya que si alguien accede a nuestro código fuente, no podrá acceder a nuestros datos sensibles.

## Instalación

```bash
npm install dotenv
```

## Uso de DotEnv

Para poder usar DotEnv, aparte de importar la librería, tenemos que llamar a ``process.env`` para poder acceder a las variables de entorno. Allí tendremos todas las variables de entorno del sistema y las que hayamos definido en nuestro fichero `.env`.

```js
const dotenv = require('dotenv');
dotenv.config();

console.log(process.env.APP_PORT);
```

## .env

En el fichero `.env` guardaremos todas las variables de entorno que necesitemos. Para definir una variable de entorno, escribiremos el nombre de la variable, seguido de un igual y el valor de la variable. No es necesario poner comimos ni punto y coma ni nada por el estilo.

```env
APP_PORT=3000
DB_HOST=localhost
```

Para acceder a las variables de entorno, usaremos `process.env` seguido del nombre de la variable.

```js
const dotenv = require('dotenv');
dotenv.config();

console.log(process.env.APP_PORT);
```

También podemos usar destructuring para acceder a las variables de entorno.

```js
const dotenv = require('dotenv');
dotenv.config();

const { APP_PORT, DB_HOST } = process.env;

console.log(APP_PORT);
console.log(DB_HOST);
```
