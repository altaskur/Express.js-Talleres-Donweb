# Node.js

- [Node.js](#nodejs)
  - [¿Qué es Node.js?](#qué-es-nodejs)
  - [¿Cómo funciona?](#cómo-funciona)
  - [Ventajas](#ventajas)
  - [Desventajas](#desventajas)
  - [Diferencias con entornos en navegador](#diferencias-con-entornos-en-navegador)
    - [Acceso al sistema](#acceso-al-sistema)
    - [Interpretación de los módulos](#interpretación-de-los-módulos)

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
