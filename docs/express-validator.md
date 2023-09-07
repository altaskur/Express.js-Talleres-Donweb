# Express-validator

- [Express-validator](#express-validator)
  - [¿Qué es sanitizar?](#qué-es-sanitizar)
  - [Desventajas de usar Express-validator](#desventajas-de-usar-express-validator)
  - [Ventajas de usar Express-validator](#ventajas-de-usar-express-validator)
  - [Ejemplos de uso](#ejemplos-de-uso)

Express-validator es una librería que nos ayuda a validar los datos que recibimos en las peticiones HTTP, sanitizarlos y escaparlos, haciendo que nuestra aplicación sea más segura.

## ¿Qué es sanitizar?

Sanitizar es un proceso que nos ayuda a limpiar los datos que recibimos en las peticiones HTTP, por ejemplo, si recibimos un texto, podemos eliminar los espacios en blanco, o si recibimos un número, podemos eliminar los caracteres que no sean números. Evitando inyecciones de código.

## Desventajas de usar Express-validator

- No es muy eficiente, a la hora de validar gran cantidad de datos.
- No es muy flexible, a la hora de validar datos complejos.

## Ventajas de usar Express-validator

- Tiene una gran integración con express.
- Es muy fácil de usar.

## Ejemplos de uso

```js
const { body, validationResult } = require('express-validator');

const getUsers = async (req, res) => {
  body('name').isLength({ min: 3 }).trim().escape().withMessage('El nombre debe tener al menos 3 caracteres');
  body('email').isEmail().trim().normalizeEmail().withMessage('El email no es válido');
  body('age').isNumeric().trim().escape().toInt().withMessage('La edad debe ser un número');
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }

  const users = await User.find();
  res.json(users);
};
```
