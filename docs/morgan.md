# Morgan

- [Morgan](#morgan)
  - [¿Cómo usar Morgan en Express?](#cómo-usar-morgan-en-express)
  - [Configuraciones preestablecidas](#configuraciones-preestablecidas)
  - [Personalizar configuración](#personalizar-configuración)
    - [Tokens predefinidos](#tokens-predefinidos)
    - [Tokens personalizados](#tokens-personalizados)

Morgan es un middelware de express, que nos produce un Log, de las peticiones request
que recibimos, seria igual al hacer un console.log de cada una de las peticiones.

Tenemos varias plantillas prefiguradas para mostrar información, pero también
podemos personalizarlo completamente.

## ¿Cómo usar Morgan en Express?

Para utilizar Morgan en Express debemos usar la función ``app.use()``
express, indicándole que vamos a utilizar un Middelware, dentro de nuestra instancia de Express.

```js
const express = require('express');
const  app = express();

app.use(morgan('dev'));

app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});

```

## Configuraciones preestablecidas

- combined: Lo configura con el formato estándar combinado de Apache
- common: Utiliza el formato estándar de Apache
- dev: Utiliza un código base de colores.
- short: Limita algún dato.
- tiny: Un formato corto y simple con el tiempo de reacción.

```js
//TODO MOSTRAR salida de consola
app.use(morgan('combined')); 
// ::ffff:127.0.0.1 - - [11/Aug/2023:19:08:22 +0000] 
// "GET /users/?id=hola HTTP/1.1" 200 241 "-"
// "Thunder Client (https://www.thunderclient.com)"
app.use(morgan('common'));
// ::ffff:127.0.0.1 - - [11/Aug/2023:19:09:16 +0000] 
// "GET /users/?id=hola HTTP/1.1" 200 241
app.use(morgan('dev'));
// GET /users/?id=hola 200 15.932 ms - 241
app.use(morgan('short'));
// ::ffff:127.0.0.1 - GET /users/?id=hola HTTP/1.1 200 241 - 10.139 ms
app.use(morgan('tiny'));
// GET /users/?id=hola 200 241 - 13.740 ms
```

## Personalizar configuración

Ahora que hemos visto la configuración predeterminada ahora vamos
a ver cómo podemos personalizarla.

para ello vamos a nos vamos a introducir el concepto de token,
que en este caso usamos la palabra token, como una representación de una entidad más grande que es interpretada dentro de una cadena o String. de esta manera podemos indicarle a Morgan
cómo queremos visualizar el Log de eventos.

Muy similar a bash o otros lenguajes de terminal, debemos establecer un carácter para definir el comienzo del token, en el caso de Morgan, tenemos que usar el carácter `:` `:method`.

### Tokens predefinidos

Existen una serie de tokens predefinidos, te dejo una lista de los más usados.

- :date - Fecha actual.
- :method - Método HTTP de la solicitud (GET, POST, etc.).
- :url - URL solicitada.
- :status - Código de estado de la respuesta HTTP.
- :response-time - Tiempo de respuesta en milisegundos.
- :remote-addr - Dirección IP del cliente.
- :remote-user - Usuario remoto (generalmente para autenticación básica).
- :http-version - Versión del protocolo HTTP.
- :referrer - Referencia del encabezado "Referer" en la solicitud HTTP.
- :user-agent - User-Agent del cliente (información sobre el navegador o cliente HTTP).
- :req[header] - Valor de un encabezado específico en la solicitud. Reemplaza "header" por el nombre del encabezado (por ejemplo, :req[User-Agent]).
- :res[header] - Valor de un encabezado específico en la respuesta. Reemplaza "header" por el nombre del encabezado (por ejemplo, :res[Content-Type]).

Teniendo esto en cuenta vamos a crear nuestro log personalizado

```js
  morgan(':method :url :status :res[content-length] - :response-time ms')
```

Aquí te dejo un ejemplo de cual sería la configuración manual
de cada uno de las configuraciones preestablecidas de Morgan

```js
// Combined
':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"'

// Standard
':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length'

// dev
':method :url :status :response-time ms - :res[content-length]'

// Short
':remote-addr :remote-user :method :url HTTP/:http-version :status :res[content-length] - :response-time ms'

// Tiny
':method :url :status :res[content-length] - :response-time ms'
```

### Tokens personalizados

También nos brinda la opción de crear tokens personalizados, para ello tenemos que utilizar
la función token de morgan `morgan.token`.

Ten en cuenta que si escribimos  un token personalizado con el mismo nombre
que uno existente, este último se sobrescribirá.

```js
morgan.token('user', (req, res) => {
  return req.headers['x-username']; 
});

morgan.token('id', (req, res) => {
  return req.headers['x-id']; 
});
```

Ahora podemos usar estos tokens personalizados en nuestra configuración.

```js
morgan(':user :id')
```
