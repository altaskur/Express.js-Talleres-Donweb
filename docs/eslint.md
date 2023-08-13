# Linters

- [Linters](#linters)
  - [¿Qúe es un Linter?](#qúe-es-un-linter)
  - [¿Porqué es tan importante?](#porqué-es-tan-importante)
  - [EsLint](#eslint)
  - [Tipos de configuración](#tipos-de-configuración)
  - [Configuración con el asistente](#configuración-con-el-asistente)
    - [Pasos del asistente](#pasos-del-asistente)
  - [Configuración manual](#configuración-manual)

## ¿Qúe es un Linter?

Un linter es una herramienta, que se encarga de examinar el
código que generas, te ayuda a detectar errores de sintaxis,
malas prácticas y facilitan el uso del las guías de estilo.

## ¿Porqué es tan importante?

Con todo esto nos permite generar aplicaciones con un código de calidad, nos facilita el trabajo en equipo, ya que todos los implicados van a usar las mismas normas y nos evita de usar malos hábitos en el desarrollo.

## EsLint

En este proyecto vamos a utilizar EsLint, es el linter más utilizado de node.js, es muy configurable, tiene bastante soporte por la comunidad así cómo una excelente documentación.

## Tipos de configuración

Podemos configurar EsLint de dos formas, la primera forma es a traves del asistente cli, que nos ayudará con unos sencillos pasos a crear el archivo de configuración, la segunda forma es crear el archivo de configuración a mano. Este archivo se llama ``.eslintrc`` y podemos guardarlo en distintos formatos, cómo archivo ``.js``, ``.json`` o ``.yaml``. En este taller vamos a utilizar el formato ``.JSON``, ya que es el más sencillo de entender.

Estas dos formas se pueden y suelen combinarse, es decir, podemos crear el archivo de configuración con el asistente y luego modificarlo a mano. Estos cambios se pueden hacer en cualquier momento, ya que EsLint se ejecuta en tiempo de ejecución.

## Configuración con el asistente

Para este taller vamos a configurar EsLint con el asistente, ya que fácilmente nos crea el archivo de configuración y nos ayuda a instalar las dependencias necesarias. Una vez tenemos el archivo podemos modificarlo a mano.

Para configurar EsLint, vamos a usar el comando:

```bash
npm init @eslint/config
```

### Pasos del asistente

Ahora veremos los distintos pasos que da asistente, para configurar EsLint (a la hora de escribir este taller, la versión de EsLint es la ^8.47.0):

Si no tenemos EsLint instalado el asistente, nos preguntará si queremos instalarlo::

> Need to install the following packages: @eslint/create-config@0.4.6 Ok to proceed? (y) **Yes**

En este paso nos pregunta para que queremos usar EsLint, tenemos tres opciones:

- **To find problems only**: Esta opción nos permite encontrar problemas.
- **To check syntax only**: Esta opción nos permite comprobar la sintaxis.
- **To check syntax, find problems, and enforce code style**: Esta opción es la que vamos a usar en este taller, nos permite comprobar la sintaxis, encontrar problemas y aplicar un estilo de código.

> How would you like to use EsLint? **To check syntax, find problems, and enforce code style**

En este paso nos pregunta que tipo de módulos vamos a usar, si CommonJS o módulos ES6:

> ? What type of modules does your project use? ... **CommonJS (require/exports)**

Cómo EsLint podemos usarlo tanto en Frontend cómo en Backend, nos pregunta si vamos a usar algún framework de frontend, este taller es de backend, así que seleccionamos la opción **None of these**

> ? Which framework does your project use? ... **None of these**

También EsLint puede trabajar con TypeScript, en este taller no vamos a usar TypeScript, así que seleccionamos la opción **No**

- ? Does your project use TypeScript? **No**

En este paso, nos pregunta dónde se va ejecutar nuestro proyecto, si en el navegador o en Node, en este taller vamos a usar Node, ya que es un proyecto del lado de servidor así que seleccionamos la opción **Node**

> ? Where does your code run?  **Node**

EsLint nos permite usar gran cantidad de guías de estilo, si no sabemos cual, puede intentar adivinarla e incluso crear nuestra guía de estilo personalizada, en este taller vamos a usar una guía de estilo popular, en concreto la de Airbnb, ya que es la más cercana al estándar de JavaScript.

> ? How would you like to define a style for your project? ... **Use a popular style guide**

En este paso nos da la opción de elegir la guía de estilo, recuerda que en este taller vamos a usar la guía de estilo de Airbnb.

> ? Which style guide do you want to follow? ... **Airbnb: <https://github.com/airbnb/javascript>**

Ahora el asistente nos pregunta en que formato de archivo queremos guardar la configuración, cómo he indicado anteriormente, en este taller vamos a usar el formato ``.JSON``

> ? What format do you want your config file to be in? ... **JSON**

En este paso nos pregunta si queremos instalar ahora las dependencias necesarias, seleccionamos la opción **Yes**

> ? Would you like to install them now? ... **Yes**

Y por último nos pregunta que gestor de paquetes queremos usar, en nuestro caso vamos a usar **npm**

- ? Which package manager do you want to use? ...  **npm**

Si todo ha ido bien, tendremos un archivo ``.eslintrc.json`` en la raíz de nuestro proyecto, con la configuración que hemos seleccionado. [ver archivo .eslintrc.json](../.eslintrc.json)

## Configuración manual

Ahora veremos cómo es la estructura del archivo de configuración de EsLint:

```json
{
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": "airbnb-base",
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
    }
}
````

Cómo puedes ver, en el archivo, podemos encontrar tres partes principales:

- **env**: En esta parte podemos indicar en que entorno se va a ejecutar nuestro código, por ejemplo, si vamos a usar el navegador, Node, etc.
- **extends**: En esta parte podemos indicar que guía de estilo vamos a usar, en este taller vamos a usar la guía de estilo de Airbnb.
- **rules**: En esta parte podemos indicar las reglas que queremos aplicar, por ejemplo, si queremos usar punto y coma, comillas simples o dobles, etc.

Un ejemplo de modificación que suelo aplicar en los proyectos, es que EsLint no marque cómo alerta
el uso de ``console.log``, ya que durante el desarrollo es muy útil para depurar el código, pero en producción no debería estar, ya que puede ser un problema de seguridad.

Para ello, en la parte de ``rules`` añadimos la sentencia ``"no-console": "off"``

```json
"rules": {
    "no-console": "off"
}
```
