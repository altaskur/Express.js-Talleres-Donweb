
# Repositorio para los talleres de Donweb

Un repositorio para los talleres de Donweb, explicando cómo funciona Express.js

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY`

`ANOTHER_API_KEY`

## Instalación del proyecto

Para instalar el proyecto vamos a usar NPM como gestor de librerías en dos tandas,
primero las dependencias necesarias para el proyecto

```bash
  npm i bcrypt, cors, dotenv, jsonwebtoken, express-validator
```

Por último, vamos a instalar las dependencias que nos van ayudar con el desarrollo del mismo

```bash
  npm i -D nodemon, morgan, eslint
```

## Despliegue en local

Para lanzar el proyecto el local tenemos que seguir estos pasos:

Clonamos el repositorio

```bash
  git clone https://github.com/altaskur/https://github.com/altaskur/Express.js-Talleres-Donweb.git
```

Vamos al directorio del proyecto

```bash
  cd Express.js-Talleres-Donweb.git
```

Instalamos las dependencias

```bash
  npm install
```

Iniciamos el servidor

```bash
  npm run start
```

## Referencia de la api

### Get

```http
  GET /api/
```

| Parámetro | Tipo     | Descripción                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Tu API key |

### Get por id

```http
  GET /api/${id}
```

| Parámetro | Tipo     | Descripción                |
| :-------- | :------- | :-------------------------------- |
| `api_key` | `string` | **Required**. Tu API key |
| `id`      | `string` | **Required**. id del elemento a obtener |

### Post insertamos nuevo elemento

```http
  POST /api/
```

| Parámetro | Tipo     | Descripción                |
| :-------- | :------- | :-------------------------------- |
| `api_key` | `string` | **Required**. Tu API key |

### Post Eliminamos el elemento

```http
  DELETE /api/${id}
```

| Parámetro | Tipo     | Descripción                |
| :-------- | :------- | :-------------------------------- |
| `api_key` | `string` | **Required**. Tu API key |
| `id`      | `string` | **Required**. id del elemento a obtener |

## Autores

- [@altaskur](https://github.com/altaskur)
