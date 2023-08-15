# JSON Web Token

- [JSON Web Token](#json-web-token)
  - [Usos](#usos)
  - [Estructura](#estructura)
    - [Header](#header)
    - [Payload](#payload)
    - [Signature](#signature)
  - [Uso en el taller](#uso-en-el-taller)
  - [¿Cómo funciona de jsonwebtoken?](#cómo-funciona-de-jsonwebtoken)
    - [Tiempo de expiración](#tiempo-de-expiración)
  - [Generar clave secreta](#generar-clave-secreta)
    - [Explicación del script](#explicación-del-script)
  - [Instalación](#instalación)
  - [.env](#env)
  - [Creación de un JWT](#creación-de-un-jwt)
  - [Verificación de un JWT](#verificación-de-un-jwt)

JSON Web Token o JWT es un estándar abierto [rfc7519](https://tools.ietf.org/html/rfc7519), que se define cómo una forma de pasar información entre dos partes. La información que se transmite es un objeto JSON que está firmado digitalmente y se verifica la integridad de la información que contiene.

## Usos

El uso más común de JWT es cómo autenticación e intercambio de información entre dos partes, por ejemplo, un cliente y un servidor. El cliente envía un JWT al servidor y el servidor verifica la integridad del token y la información que contiene.

Dentro de la información que se transmite en el JWT se puede incluir información de usuario, permisos, roles, etc. El servidor puede utilizar esta información para validar que el usuario tiene los permisos necesarios para acceder a los recursos que está solicitando.

## Estructura

Un JWT se compone de tres partes:

- Header
- Payload
- Signature

### Header

El header contiene dos partes, el tipo de token y el algoritmo de encriptación que se utilizó para firmar el token.

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

### Payload

El payload contiene la información que se quiere transmitir, puede ser cualquier información que se desee, pero se recomienda que sea información que pueda ser verificada por el servidor.

```json
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}
```

### Signature

La firma se crea a partir de la codificación en base64 del header y el payload, y se firma con el algoritmo especificado en el header.

```js
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret
)
```

## Uso en el taller

En este taller vamos a utilizar la librería [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) para crear y verificar los JWT. Vamos a guardar a nuestro usuario, y en servidor vamos a verificar que el usuario tenga los permisos necesarios para acceder a los recursos que está solicitando.

Vamos a necesitar guardar en nuestro .env la clave secreta que vamos a utilizar para firmar los JWT.

## ¿Cómo funciona de jsonwebtoken?

El uso de la librería jsonwebtoken es muy sencillo, solo necesitamos importarla y usar el método `sign` para crear un JWT y el método `verify` para verificar la integridad del token.

A la hora de "firmar" el token, necesitamos indicarle la información, en este caso el usuario, la clave secreta guardada en el .env y el tiempo de expiración del token.

cabe indicar que existe dentro de JWT el tipo bearer, que es el que se usa para autenticar usuarios dentro del token, para hacerlo tan solo tenemos que añadir bearer al principio del token separado por un espacio.

> Recuerda eliminar el bearer del token antes de verificarlo.

### Tiempo de expiración

El tiempo de expiración es un número en segundos indicando cuánto tiempo tiene de validez el token, en el momento que el token expire el servidor no lo va a aceptar.

Se recomienda que el tiempo de expiración sea lo más corto posible, pero que sea suficiente para que el usuario pueda realizar las acciones que necesita. De normal se utiliza un tiempo de expiración de 15 minutos a 1 hora.

## Generar clave secreta

es recomendable usar una clave secreta de al menos 36 caracteres, para generar una clave secreta con validez criptográfica, te dejo aquí un pequeño script que puedes ejecutar en tu terminal para generar una clave secreta.

```bash
node -e "console.log(require('crypto').randomBytes(36).toString('hex'));"
```

### Explicación del script

En el script anterior ejecutamos NodeJS con una expresión sencilla, para ello usamos el parámetro `e`
para indicarle a node que no ejecute un archivo, sino que ejecute una expresión.

En la expresión escrita con entre "", usamos el módulo `crypto` de NodeJS para generar una clave secreta de 36 bytes, y luego la convertimos a hexadecimal para que sea más fácil de leer.

Al usar `console.log` estamos imprimiendo la clave secreta en la terminal.

## Instalación

```bash
npm install jsonwebtoken
```

## .env

Ahora vamos añadir la clave secreta a nuestro .env

```env
JWT_SECRET=1484ff743a0dd6f4abfe9cb
```

No te preocupes, esta clave secreta no es válida, es solo un ejemplo.

## Creación de un JWT

Para crear un JWT se utiliza el método `sign` de la librería `jsonwebtoken`. Este método recibe dos parámetros, el payload y el secret. Cómo hemos visto en la estructura, en el payload colocamos la información de nuestro usuario. El secret es una clave secreta que solo debe conocer el servidor.

Por último vamos añadirle un tiempo de expiración al token. Para ello vamos a añadir un tercer parámetro al método `sign` con el tiempo de expiración en segundos.

```js
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

const payload = {
  sub: '1234567890',
  name: 'John Doe',
  admin: true
};

const expiresIn = 60;

const token = jwt.sign(payload, secret, { expiresIn });

const bearerToken = `bearer ${token}`;

```

## Verificación de un JWT

Para verificar un JWT se utiliza el método `verify` de la librería `jsonwebtoken`. Este método recibe dos parámetros, el token y el secret. Nos va a devolver el payload del token si la verificación es correcta, o un error si la verificación falla.

```js
const jwt = require('jsonwebtoken');

const verificarToken = (token) => {

  const parsedToken = token.split(' ')[1];
  const secret = process.env.JWT_SECRET;
  try {
    const payload = jwt.verify(token, secret);
    return payload;
  } catch (error) {
    console.log(error);
    return false;
  }
};

```

Aunque el estándar y la teoria es muy amplia, la librearía jsonwebtoken nos facilita mucho la creación y verificación de los JWT, en apenas unas lineas.
