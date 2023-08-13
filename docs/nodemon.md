# Nodemon

Nodemon es una herramienta de desarrollo, encargada de reiniciar el servidor cada vez que guardamos un cambio en nuestro código. Con esto evitamos tener que reiniciar nuestro servidor usando ``ctrl + c`` y ``npm start`` cada vez que hacemos un cambio.

En las últimas versiones de NodeJs, existe una alternativa nativa a Nodemon, tan sólo debes añadir ``--watch`` al comando de ejecución del servidor, pero, a la hora de crear este taller, ``--watch`` aún estaba en fase experimental y es susceptible a errores, por eso, en este taller vamos a utilizar Nodemon.

Al igual que con ``--watch``, para ejecutar Nodemon, tan sólo debemos añadir ``nodemon`` al comando de ejecución del servidor, en lugar de usar ``node``, en el archivo ``package.json``:

```json
{
  "scripts": {
    "dev": "nodemon src/index.js"
  }
}
```

## Configuración de Nodemon

Nodemon, no sólo se limita a reiniciar el servidor, también tiene más funciones cómo mandar una señal a nuestro contenedor o cluster, cambiar el modo de ejecución, limitar que archivos debe controlar e incluso, añadir un delay a la hora de reiniciar el servidor. Esta configuraciones escapan del alcance de este taller, pero si quieres saber más sobre ellas, puedes consultar la [documentación oficial](https://www.npmjs.com/package/nodemon).
