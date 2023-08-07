# Express

- [Express](#express)
  - [¿Qué es Express?](#qué-es-express)
  - [Middelwares](#middelwares)
  - [Routing](#routing)

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
