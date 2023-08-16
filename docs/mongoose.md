# Mongoose

- [Mongoose](#mongoose)
  - [Desventajas](#desventajas)
  - [Bases de datos relacionales vs no relacionales](#bases-de-datos-relacionales-vs-no-relacionales)
    - [Bases de datos](#bases-de-datos)
    - [Bases de datos relacionales](#bases-de-datos-relacionales)
      - [Ventajas de las bases de datos relacionales](#ventajas-de-las-bases-de-datos-relacionales)
      - [Desventajas de las bases de datos relacionales](#desventajas-de-las-bases-de-datos-relacionales)
    - [Bases de datos no relacionales](#bases-de-datos-no-relacionales)
    - [Ventajas de las bases de datos no relacionales](#ventajas-de-las-bases-de-datos-no-relacionales)
    - [Desventajas de las bases de datos no relacionales](#desventajas-de-las-bases-de-datos-no-relacionales)
  - [Instalación de Mongoose](#instalación-de-mongoose)
  - [Uso de Mongoose](#uso-de-mongoose)
    - [.env](#env)
    - [Conexión a la base de datos](#conexión-a-la-base-de-datos)
      - [Esquema de la URL de conexión](#esquema-de-la-url-de-conexión)
      - [Esquema del objeto de configuración](#esquema-del-objeto-de-configuración)
      - [Método connect](#método-connect)
    - [Model](#model)
    - [Añadir al documento](#añadir-al-documento)
    - [Consultar entradas del documento](#consultar-entradas-del-documento)
    - [Actualizar entrada de un documento](#actualizar-entrada-de-un-documento)
    - [Eliminar un documento](#eliminar-un-documento)

Mongoose es una librería para Node.js que nos permite trabajar con bases de datos MongoDB, nos añade una capa de funcionalidades que nos permite el trabajo y el entendimiento de la base de datos.

Recomiendo el uso de mongoose, porque añade validaciones, tipos de datos, gestion de conexión e incluso nos permite crear relaciones entre colecciones.

## Desventajas

Aunque Mongoose nos aporta muchas ventajas, también tiene sus desventajas, principalmente es más lento que trabajar directamente con la base de datos al crear un modelo intermedio, además las relaciones entre colecciones no son tan eficientes cómo en una base de datos relacional.

Aún así, el equilibrio entre ventajas y desventajas es muy favorable para el uso de Mongoose.

## Bases de datos relacionales vs no relacionales

### Bases de datos

Una base de datos es un sistema de almacenamiento de datos, muy optimizado que nos garantiza la persistencia, integridad y seguridad de los datos.

### Bases de datos relacionales

Una base de datos relacional se estructura en conjuntos  llamados tablas que en su interior tienen filas y columnas, las filas son los registros y las columnas son los campos, cada registro tiene un identificador único llamado clave primaria.

> Imagínate una tabla de una hoja de cálculo, cada fila es un registro y cada columna es un campo.

Ahora bien cada tabla puede tener una relación con otra tabla, por ejemplo imagina que una base de datos de un blog, tendríamos dos tablas
una para los usuarios y otra para las entradas, por lo tanto cada entrada del blog estaría relacionada con su autor, en este caso el usuario y cada usuario estaría relacionado con todas sus entradas.

#### Ventajas de las bases de datos relacionales

- Son muy eficientes para realizar consultas complejas.
- Son muy eficientes para realizar consultas que involucren varias tablas.

#### Desventajas de las bases de datos relacionales

- El esquema de datos es rígido, por lo tanto, las entradas no pueden tener distintos campos.
- Si la estructura de datos no está bien definida, la complejidad de las consultas aumenta.

### Bases de datos no relacionales

Las bases de datos no relacionales, estructuran los datos en colecciones, cada colección tiene documentos, que no son más que objetos JSON.

> Imagínate una colección cómo un libro, formado por documentos, que son las páginas del libro.

Ahora bien, cada documento puede tener una estructura distinta, por lo tanto, no hay un esquema de datos definido, esto nos permite tener una gran flexibilidad a la hora de almacenar datos.

### Ventajas de las bases de datos no relacionales

- Són muy rápidas para realizar consultas que involucren una sola colección.
- No tienen un esquema de datos definido, por lo tanto, son perfectas para almacenar datos con estructuras distintas.
- Son muy eficientes para almacenar grandes cantidades de datos.
- Permiten escalar horizontalmente, es decir, añadir más servidores para aumentar la capacidad de almacenamiento.

### Desventajas de las bases de datos no relacionales

- No son muy eficientes para realizar consultas que involucren varias colecciones.
- Al no tener un esquema de datos definido, las consultas complejas son más difíciles de realizar.

## Instalación de Mongoose

Para instalar mongoose, ejecutamos el siguiente comando:

```bash
npm install mongoose
```

## Uso de Mongoose

### .env

En nuestro .env del proyecto vamos añadir la url de la conexión a nuestro servidor de MongoDB alojado en [Donweb]( https://donweb.com/hosting-cloud-servers-vps?utm_source=altaskur-twitch&utm_campaign=embajadores-de-marca&utm_medium=text-link&utm_content=stream-twitch)

```env
MONGO_URL=mongodb://test:test@localhost:27017/blog
```

### Conexión a la base de datos

Para conectarnos a la base de datos, usaremos el método `connect` de mongoose, dónde le paremos la url del servidor de MongoDB, alojado en [Donweb]( https://donweb.com/hosting-cloud-servers-vps?utm_source=altaskur-twitch&utm_campaign=embajadores-de-marca&utm_medium=text-link&utm_content=stream-twitch)

El método connect devuelve una promesa, por lo tanto, podemos usar async/await para manejar la conexión. el método espera:

- La url del servidor de MongoDB.
- Un objeto de configuración, en este caso, le pasamos el parámetro `useNewUrlParser` con el valor `true`, para que use el nuevo analizador de cadenas de conexión.
- useUnifiedTopology: true, para que use el nuevo motor de topología unificada.
- dbName: El nombre de la base de datos.

#### Esquema de la URL de conexión

```url
mongodb://<username>:<password>@<host>:<port>
```

#### Esquema del objeto de configuración

```json
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'blog'
}
```

#### Método connect

```js
const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'blog'
    });
    console.log('Connected to database');
  } catch (error) {
    console.log(error);
  }
};
```

### Model

Un model o modelo, es una clase con la que podemos crear instancias de documentos. En mongoose, los modelos se crean a partir de un Schema, que es una clase que nos permite definir la estructura de los documentos.

Para crear el Schema, usamos el método `model` de mongoose, que recibe dos parámetros:

- Los datos que queremos almacenar en la colección.
- El nombre de la colección.
- La database a la que pertenece la colección.

```js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
},{
    collection: 'users',
    database: 'blog'
});
```

Una vez creado el Schema, podemos crear el modelo, para ello, usamos el método `model` de mongoose, que recibe dos parámetros:

- El nombre del modelo.
- El Schema.

```js
const User = mongoose.model('User', UserSchema);
```

### Añadir al documento

Para añadir un documento a la colección, creamos una instancia del modelo, con los nuevos datos y añadimos a nuestra BBDD usando el método `save` que nos devuelve una promesa, por lo tanto, usaremos async/await para manejar la promesa.

```js

const user = new User({
  name: 'John Doe',
  email: 'example@example',
  password: '123456',
});

try{
    await user.save();
} catch(error){
    console.log(error);
}
```

### Consultar entradas del documento

Para consultar los datos de la entrada, usamos el método `find` del modelo, este método busca en la colección que llamamos, y recibe un objeto, en este caso, le pasamos un objeto vacío, para que nos devuelva todos las entradas del documento.

```js

try{
    const users = await User.find();
    console.log(users);
} catch(error){
    console.log(error);
}
```

Buscar un documento por un campo específico, tan solo tenemos que pasarle un objeto con el campo y el valor que queremos buscar, o podemos hacer uso del destructuring para pasarle el campo y el valor.

```js

try{
    const users = await User.find({name: 'John Doe'});
    console.log(users);
} catch(error){
    console.log(error);
}

try{
    const name = 'John Doe';
    const users = await User.find({name});
    console.log(users);
} catch(error){
    console.log(error);
}

try{
    const usuario = 'John Doe';
    const users = await User.find({user: usuario});
    console.log(users);
} catch(error){
    console.log(error);
}

```

### Actualizar entrada de un documento

Para actualizar un documento, usamos el método `findByIdAndUpdate` del modelo, que recibe dos parámetros:

- El id del valor que queremos actualizar.
- Un objeto con los nuevos valores.
- un objeto con la configuración, en este caso, le pasamos el parámetro `new` con el valor `true`, para que nos devuelva el documento actualizado.

```js
try{
const newUserData = {
    id: '123456789',
    name: 'Jonathan Doe'
}

const updateUser = await User.findByIdAndUpdate(newUserData.id, newUserData, {new: true});

console.log(updateUser);

} catch(error){
    console.log(error);
}
```

### Eliminar un documento

Para eliminar una entrada del documento, usamos el método `findByIdAndDelete` del modelo, que recibe un parámetro:

- El id del valor que queremos eliminar.

```js

try{
const id = '123456789';

const deleteUser = await User.findByIdAndDelete(id);

console.log(deleteUser);

} catch(error){
    console.log(error);
}
```
