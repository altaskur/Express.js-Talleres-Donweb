# Linters

- [Linters](#linters)
  - [¿Qúe es un Linter?](#qúe-es-un-linter)
  - [¿Porqué es tan importante?](#porqué-es-tan-importante)
  - [Eslint](#eslint)
  - [Instalación y uso](#instalación-y-uso)
  - [Configuración de Eslint para proyectos Node](#configuración-de-eslint-para-proyectos-node)
    - [Primeras opciones](#primeras-opciones)
    - [Módulos](#módulos)

## ¿Qúe es un Linter?

Un linter es una herramienta, que se encarga de examinar el
código que generas, te ayuda a detectar errores de sintaxis,
malas prácticas y facilitan el uso del las guías de estilo.

## ¿Porqué es tan importante?

Con todo esto nos permite generar aplicaciones con un código de calidad, nos facilita el trabajo en equipo, ya que todos los implicados van a usar las mismas normas y nos evita de usar malos hábitos en el desarrollo.

## Eslint

En este proyecto vamos a utilizar Eslint, es el linter más utilizado de node.js, es muy configurable, tiene bastante soporte por la comunidad así cómo una excelente documentación.

## Instalación y uso

A la hora de crear nuestro proyecto de eslint, este tiene un asistente de consola que nos permite empezar a usarlo de una forma rápida.

```js
npm init @eslint/config
```

## Configuración de Eslint para proyectos Node

Cómo he indicado en el apartado de node.js, de manera predeterminada Node.js está pensado para utilizar common-js para la interpretación de los módulos.

### Primeras opciones

En este proyecto vamos a necesitar que Eslint, monitorice tanto la sintaxis, cómo los posibles problemas y nos obligue a usar una guía de estilo determinada.

```bash

    ? How would you like to use Eslint
      To check syntax only
      To check syntax and find problems.
    > To check syntax, find problems, and enforce code Style.
```

### Módulos

```bash
    What type of modules does you project use?
      JavaScript modules (import/export).
    > CommonJs (require/exports)
      None of these
```
