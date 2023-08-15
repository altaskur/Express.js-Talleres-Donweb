# Cors

Cors de forma simplificada, es una política de seguridad, que permite o restringe el acceso a recursos de un servidor, desde un dominio especifico.

## ¿Cómo funciona?

Cuando un navegador hace una petición a un servidor, que está en a un dominio diferente al que se encuentra, el servidor responde con un header, el servidor responde con una solicitud, con un encabezado, que indica si el recurso puede ser accedido o no.

En este encabezado, indica los dominios que pueden acceder a los recursos, los métodos que pueden ser usados para acceder a los recursos, entre otros.

## ¿Cómo configurar CORS?

Podemos añadir encabezados a las respuestas de nuestro servidor, de una manera muy sencilla, con el paquete cors de npm.

### Instalación

```bash
npm install cors
```

### Uso

```js
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.listen(3000, () => {
  console.log('Server on port 3000');
});
```

## Configuración

Podemos configurar el paquete cors, para que solo permita el acceso a los recursos, desde un dominio especifico.

```js
const express = require('express');
const cors = require('cors');

const app = express();

const corsOptions = {
  origin: ["http://example.com", "https://example1.com"],
  method: ['GET', 'POST'],
  headers: ["Authorization", "Content-Type"]
};

app.use(cors(corsOptions));

app.listen(3000, () => {
  console.log('Server on port 3000');
});
```
