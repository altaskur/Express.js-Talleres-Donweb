# Node.js

- [Node.js](#nodejs)
  - [¿Qué es Node.js?](#qué-es-nodejs)
  - [¿Cómo funciona?](#cómo-funciona)
  - [Ventajas](#ventajas)
  - [Desventajas](#desventajas)
  - [Diferencias con entornos en navegador](#diferencias-con-entornos-en-navegador)
    - [Acceso al sistema](#acceso-al-sistema)
    - [Interpretación de los módulos](#interpretación-de-los-módulos)
  - [Estructura de un proyecto en Node.js](#estructura-de-un-proyecto-en-nodejs)
  - [package.json](#packagejson)
    - [Script de inicio](#script-de-inicio)
  - [package-lock.json](#package-lockjson)
  - [node\_modules](#node_modules)
  - [main.js](#mainjs)

## ¿Qué es Node.js?

Nodejs se considera un entorno de ejecución, es decir nos permite, ejecutar JavaScript sin necesidad de estar en un
navegador web.

## ¿Cómo funciona?

Para lograr esto, se utilizo el motor V8 desarrollado por google y se embebió dentro de un programa en C++.

## Ventajas

Node en un principio está pensado para no tener que usar hilos del procesador, gracias a su naturaleza asíncrona, usamos callbacks y llamadas para gestionar los procesos. Esto nos permite que un sólo hilo pueda atender a todas las peticiones del sistema, sin tener que esperar a una petición para atender a la siguiente.

## Desventajas

Esto mismo es su principal problema, aunque node esta indicado para atender múltiples peticiones de forma simultánea, No esta indicado para procesos que demanden gran cantidad de CPU, cómo el renderizado de imágenes vídeos o audio en streaming.

## Diferencias con entornos en navegador

A diferencia del uso de JavaScript en un navegador, aquí no tenemos acceso a recursos cómo window, o Document.

### Acceso al sistema

Para acceder al sistema, desde node, tenemos módulos que podemos ir añadiendo a nuestro proyecto, de esta manera dotamos a Node.js de más utilizados, cómo la lectura de ficheros cómo los famosos JSON utilizando `fs` o acceso a la configuración del sistema usando `sys`.

### Interpretación de los módulos

Al contrario que se indica en las últimas versiones de EMCScript, el uso de módulos en nuestras apps de Node.js, están de forma predeterminada en `Common-js` y aunque esto ultimo puede configurarse, puede llegar a dar problemas según el tipo de librería o framework que utilicemos, por lo tanto no recomiendo el uso de estos, si no has utilizado antes con node.js.

## Estructura de un proyecto en Node.js

Un proyecto de Node.js tiene de base tres ficheros y una carpeta.

Carpeta del proyecto
├── package.json
├── package-lock.json
├── main.js
└── node_modules

## package.json

Este fichero JSON de configuración es el que contiene la información del proyecto, cómo el nombre, la versión o los autores, también se definen los scripts de inicio y que dependencias serán de desarrollo y cuales no.

Un ejemplo de este fichero sería el siguiente:

```json
{
  "name": "nodejs",
  "version": "1.0.0",
  "description": "Proyecto de ejemplo de Node.js",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
  "keywords": ["node", "nodejs", "javascript"],
  "author": "Altaskur",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.7"
  }
}
```

### Script de inicio

Para ejecutar una aplicación de express, indicaremos dentro del apartado "scripts", la abreviatura que queramos usar para iniciar la aplicación, lo más común es usar ``start``, ``dev``, ``build`` o ``test``.

- Start: Inicia la aplicación en modo producción.
- Dev: Inicia la aplicación en modo desarrollo, en nuestro caso usando Nodemon.
- Build: Utilizado para compilar el proyecto, en caso de que sea necesario, muy común en proyectos de Frontend.
- Test: Utilizado para ejecutar los test de la aplicación.

ejemplo del apartado de scripts:

```json
"scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
```

Ahora para ejecutar nuestra aplicación, solo tendremos que ejecutar `npm run` seguido del nombre definido en el apartado de scripts.

```bash
npm run dev
```

> Ten en cuenta que con ``start`` no es necesario usar ``run`` simplemente con ``npm start`` será suficiente.

## package-lock.json

Este fichero es generado automáticamente por npm, y contiene la información de las dependencias que se han instalado en el proyecto, así cómo las versiones de las mismas. Es recomendable no modificar este fichero, ya que puede dar problemas en la instalación de las dependencias.

> Este fichero no debes subirlo a tu repositorio, ya que se genera automáticamente, añade el fichero a tu ``.gitignore`` para evitar subirlo a tu repositorio.

## node_modules

Esta carpeta contiene todas las dependencias que se han descargado del proyecto, una vez ejecutamos ``npm install``, o su versión abreviada ``npm i``.

> No debes subir esta carpeta a tu repositorio, ya que ocupa mucho espacio y con tan solo ejecutar ``npm i`` o ``npm install`` se descargaran todas las dependencias de nuevo.

## main.js

Este es el fichero de inicio, del cual partirá nuestra aplicación, de normal se encuentra en la carpeta src y puedes encontrarlo también cómo index.js
