
# Repositorio para los talleres de Donweb

Un repositorio para seguir el taller de NodeJS y Express para Donweb

Aquí veremos cómo montar una API-REST con NodeJS y Express, utilizando una base de datos en MongoDB y autenticación con JWT.

El taller esta dividido en dos partes:

La primera parte es la creación de nuestro proyecto veremos la funciones básicas de express, aprenderemos a usar Eslint, atenderemos a las peticiones HTTP, y por ultimo crearemos las rutas de nuestra aplicación.

La segunda parte, nos conectaremos a nuestra base de datos de MongoDB,
crearemos los modelos y las consultas a la base de datos, y por último nos autenticaremos con JWT.

- [Repositorio para los talleres de Donweb](#repositorio-para-los-talleres-de-donweb)
  - [Primera Parte: Creación del proyecto](#primera-parte-creación-del-proyecto)
    - [Listado de dependencias](#listado-de-dependencias)
      - [Dependencias de producción](#dependencias-de-producción)
      - [Dependencias de desarrollo](#dependencias-de-desarrollo)
    - [Configuración de Eslint](#configuración-de-eslint)
  - [.env](#env)
  - [Estructura de carpetas](#estructura-de-carpetas)
  - [Archivo main.js](#archivo-mainjs)
  - [Autores](#autores)

## Primera Parte: Creación del proyecto

Vamos a crear nuestro primer proyecto con NodeJS, si nunca has trabajado con NodeJS te recomiendo mirar
el apartado [docs/Express](./docs/express.md) para que te familiarices un poco con la herramienta.

Es importante tener en cuenta que NodeJs, va a tomar el directorio actual, cómo el directorio raíz de nuestro proyecto, por lo que es importante que creemos una carpeta nueva para nuestro proyecto.

En nuestro caso partiremos de donweb-taller-express, por lo que crearemos una carpeta con ese nombre.

  Recuerda tener instalado NodeJs, antes de continuar.

una vez dentro del proyecto inicializamos un nuevo proyecto de NodeJS, para ello abrimos la consola dentro del directorio del proyecto ``donweb-taller-express`` y ejecutamos el siguiente comando:

```bash
  npm init
```

Se abrirá un asistente, con unos pasos a seguir, si quieres más detalles sobre este asistente puedes mirar el apartado [docs/nodeJs](./docs/nodeJs.md)

  No te preocupes, los pasos son muy sencillos y en el caso de tener duda, siempre puedes dejar el valor por defecto.

Una vez terminado, encontraremos un nuevo archivo en nuestro proyecto llamado ``package.json``
este archivo contiene la información de nuestro proyecto.

### Listado de dependencias

Las dependencias en NodeJs, son las librerías que vamos a utilizar, una librería no es más que un conjunto de funciones que nos ayudan a realizar una tarea en concreto. Por ejemplo, la librería express, nos ayuda a atender peticiones HTTP.

Existen dos tipos de dependencias, las dependencias de producción y las dependencias de desarrollo.

#### Dependencias de producción

Para este taller vamos a utilizar las siguientes dependencias de producción:

- [bcrypt](./docs/bcrypt.md)
- [cors](./docs/cors.md)
- [express](./docs/express.md)
- [dotEnv](./docs/dotEnv.md)
- [jsonwebtoken](./docs/jsonWebToken.md)
- [mongoose](https://npmjs.com/package/mongoose)
- [express-validator](https://www.npmjs.com/package/express-validator)

Para instalarlas ejecutamos el siguiente comando:

```bash
  npm i bcrypt cors express dotenv jsonwebtoken mongoose express-validator
```

#### Dependencias de desarrollo

Las dependencias de desarrollo, son las librerías que nos ayudan a desarrollar nuestro proyecto, por ejemplo, nodemon, nos ayuda a reiniciar el servidor cada vez que guardamos un cambio en nuestro código.

Para este taller vamos a utilizar las siguientes dependencias de desarrollo:

- [eslint](./docs/eslint.md)
- [nodemon](./docs/nodemon.md)
- [morgan](./docs/morgan.md)

  En algunos proyectos, morgan también se utiliza en producción, pero en nuestro caso sólo vamos a utilizarlo para controlar los logs en desarrollo.

Para instalarlas ejecutamos el siguiente comando:

```bash
  npm i -D eslint nodemon morgan
```

En el apartado `docs` te dejo una pequeña descripción de cada una de las dependencias. Pero también puedes consultar los enlaces de npm que te deje en cada una de ellas.

### Configuración de Eslint

El siguiente paso es configurar nuestro linter, en este caso vamos a utilizar Eslint, cómo te ido comentado a lo largo del taller, tienes más información en el apartado [docs/eslint](./docs/eslint.md)

Para configurar Eslint, vamos a usar el comando:

```bash
npm init @eslint/config
```

Al igual que con el comando `npm init`, se abrirá un asistente, con unos pasos a seguir, si quieres más detalles sobre este asistente, o tienes alguna duda puedes mirar el apartado [docs/eslint](./docs/eslint.md)

Los valores que vamos a utilizar son los siguientes:

- Need to install the following packages: @eslint/create-config@0.4.6 Ok to proceed? (y) **Yes**
- ? How would you like to use ESLint? ...  **To check syntax, find problems, and enforce code style**
- ? What type of modules does your project use? ... **CommonJS (require/exports)**
- ? Which framework does your project use? ... **None of these**
- ? Does your project use TypeScript? **No**
- ? Where does your code run?  **Node**
- ? How would you like to define a style for your project? ... **Use a popular style guide**
- ? Which style guide do you want to follow? ... **Airbnb: <https://github.com/airbnb/javascript>**
- ? What format do you want your config file to be in? ... **JSON**
- ? Would you like to install them now? ... **Yes**
- ? Which package manager do you want to use? ...  **npm**

  No te preocupes si te has equivocado en algún paso, siempre puedes volver a ejecutar el comando y volver a configurar Eslint. Si usas windows, puedes cancelar el asistente con `Ctrl + C`

Una vez terminado, dispondremos de un nuevo archivo `.eslintrc.json`, en el que se encuentra la configuración de Eslint.

## .env

El siguiente paso es crear nuestro archivo `.env`, en el que vamos a guardar las variables de entorno de nuestro proyecto. aquí vamos a guardar las credenciales de acceso a la base de datos, el puerto en el que va a correr nuestro servidor y el secreto que vamos a utilizar para firmar los tokens.

¿Porqué no vamos a guardar las credenciales de acceso a la base de datos en el código?
Porque si subimos nuestro código a un repositorio público, cualquiera podría ver nuestras credenciales y acceder a nuestra base de datos, de esta manera sólo nosotros vamos a tener acceso a ellas y además podemos tenerlas disponibles en cualquier parte de nuestro código.

ahora simplemente creamos un archivo llamado `.env` en la raíz de nuestro proyecto y añadimos las siguientes variables:

```env
APP_PORT=3001
```

Más adelante añadiremos más variables, pero por ahora con esta es suficiente.

## Estructura de carpetas

Ahora sólo nos queda crear la estructura de carpetas para nuestro proyecto, aquí solo te voy a mostrar la estructura de carpetas que vamos a utilizar, pero si quieres más información sobre la estructura de carpetas, puedes mirar el apartado [docs/express.md](./docs/express.md)

```bash
donweb-taller-express
├── .env
├── .eslintrc.json
├── package.json
├── package-lock.json
├── node_modules
├── README.md
├── src
│   ├── app.js
│   │   └── app.js
│   ├── controllers
│   │   └── users.js
│   ├── routes
│   │   └── users.js
│   └── main.js
└── .gitignore
```

## Archivo main.js

El archivo `main.js` es el punto de entrada de nuestro proyecto, aquí vamos a importar el archivo `app.js` y vamos a ejecutar el servidor.

Es recomendado separar la configuración del servidor del punto de entrada, ya que permite una mejor escalabilidad del proyecto, nos permite tener una mejor organización del código y nos permite realizar pruebas unitarias de una manera más sencilla.

- [ver archivo main.js](./src/main.js)
- [ver archivo app.js](./src/app.js)

## Autores

- [@altaskur](https://github.com/altaskur)
