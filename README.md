
# Repositorio para los talleres de Donweb

Un repositorio para los talleres de Donweb, explicando cómo funciona Express.js

- [Repositorio para los talleres de Donweb](#repositorio-para-los-talleres-de-donweb)
  - [Estructura del proyecto](#estructura-del-proyecto)
    - [Descripción](#descripción)
      - [src](#src)
      - [app](#app)
      - [db](#db)
      - [jwt](#jwt)
      - [models](#models)
      - [Routers](#routers)
      - [main](#main)
      - [.env](#env)
      - [.eslintrc](#eslintrc)
      - [.gitignore](#gitignore)
  - [Variables de entorno](#variables-de-entorno)
  - [Instalación del proyecto](#instalación-del-proyecto)
    - [Configuración de eslint](#configuración-de-eslint)
  - [Despliegue en local](#despliegue-en-local)
  - [Referencia de la api](#referencia-de-la-api)
    - [Get](#get)
    - [Get por id](#get-por-id)
    - [Post insertamos nuevo elemento](#post-insertamos-nuevo-elemento)
    - [Post Eliminamos el elemento](#post-eliminamos-el-elemento)
  - [Autores](#autores)

## Estructura del proyecto

- src
  - app
  - db
  - jwt
  - models
  - router
  - main.js
- .env
- .eslintrc.json
- .gitignore

### Descripción

#### src

Albergará toda la lógica del proyecto

#### app

Encontraremos toda la configuración de express, cómo las rutas y los middleware a utilizar

#### db

Encontraremos la configuración de conexión con la base de datos

#### jwt

Esta las funciones de los JSON Web Tokens

#### models

La estructura de la base de datos (Schemas)

#### Routers

la lógica de cada una de las rutas del proyecto

#### main

El punto de partida de nuestra app

#### .env

Las variables de entorno de nuestro proyecto

#### .eslintrc

La configuración de eslint

#### .gitignore

Los archivos que no queremos que se suban a nuestro repositorio

## Variables de entorno

Para poder ejecutar el proyecto necesitamos crear un archivo `.env` en la raíz del proyecto, con las siguientes variables de entorno

`API_KEY`

`ANOTHER_API_KEY`

`MONGO_URL`

## Instalación del proyecto

Para instalar el proyecto vamos a usar NPM cómo gestor de librerías en dos tandas,
primero las dependencias necesarias para el proyecto

```bash
  npm i bcrypt, cors, dotenv, jsonwebtoken, express-validator, mongoose, express
```

Por último, vamos a instalar las dependencias que nos van ayudar con el desarrollo del mismo

```bash
  npm i -D nodemon, morgan, eslint
```

### Configuración de eslint

Para configurar eslint vamos a ejecutar el siguiente comando

```bash
  npm init @eslint/config
```

Y vamos a seguir los pasos que nos indica el asistente

- To check syntax, find problems, and enforce code style
- CommonJS (require/exports)
- None of these
- No
- Node
- Use a popular style guide
- Airbnb: <https://github.com/airbnb/javascript>
- JSON
- Yes
- npm

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
