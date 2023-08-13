# bcrypt

- [bcrypt](#bcrypt)
  - [¿Qué es un hash?](#qué-es-un-hash)
  - [Blowfish](#blowfish)
  - [Funcionamiento de Bcrypt](#funcionamiento-de-bcrypt)
  - [Número de rondas](#número-de-rondas)
  - [Salt](#salt)
  - [Ejemplo de uso](#ejemplo-de-uso)
    - [Crear un hash](#crear-un-hash)
    - [Comprobar un hash](#comprobar-un-hash)

Bcrypt es una librería, que nos permite generar hashes de contraseñas, para almacenarlas en nuestra base de datos.

## ¿Qué es un hash?

Un hash es una función matemática que nos genera un string de longitud fija, a partir de un string de longitud variable. Por ejemplo, si partimos de la palabra `hola`, cómo resultado obtendremos `5d41402abc4b2a76b9719d911017c592`, aunque cambiemos a `hola mundo`, el resultado siempre será una cadena de carácteres con la misma longitud.

Esto nos permite almacenar contraseñas de forma segura, ya que, aunque alguien consiga acceder a nuestra base de datos, no podrá obtener la contraseña original, ya que, no existe una función matemática que nos permita obtener el string original a partir del hash, además de que es imposible saber la longitud del string original.

En cambio si podemos comprobar si el String proporcionado es igual al hash guardado, ya que, al aplicar la función matemática, obtendremos el mismo resultado.

## Blowfish

Bcrypt utiliza el algoritmo Blowfish, que es un algoritmo de cifrado simétrico y de generación lenta, es decir, utiliza la misma clave para cifrar y descifrar y además dificulta el uso de GPUs para romper la seguridad del mismo. Este algoritmo fue diseñado por Bruce Schneier en 1993, y fue publicado en 1994.
Este algoritmo es muy utilizado en la actualidad, ya que, es muy seguro, y es utilizado en protocolos cómo SSH, SSL, o TLS, pese a tener 30 años de antigüedad, resulta muy estable y seguro.

## Funcionamiento de Bcrypt

Para generar un hash con Bcrypt, utilizamos el método `hashSync`, que recibe dos parámetros, el primero es el string que queremos cifrar, y el segundo es el número de rondas que queremos aplicar al algoritmo.

## Número de rondas

El número de rondas, es el número de veces que se va a aplicar el algoritmo, es decir, aplicara el algoritmo usando cómo entrada el resultado de la anterior ejecución. añadiendo y modificando los datos variables o `salt` en cada ejecución.

## Salt

El salt, es un dato variable que se añade a la entrada del algoritmo, para que el resultado sea diferente en cada ejecución, de esta forma, aunque la entrada sea la misma, el resultado será diferente.

El salt, se genera de forma aleatoria, y se añade al hash, de esta forma, cuando queramos comprobar si un string es igual al hash, podemos obtener el salt del hash, y aplicarlo al string, para obtener el hash del string, y comprobar si es igual al hash guardado.

## Ejemplo de uso

Ahora que ya sabemos el funcionamiento de Bcrypt, vamos a ver cómo utilizarlo en nuestro proyecto.

### Crear un hash

```js
const bcrypt = require('bcrypt');

const password = '1234';
const saltRounds = 10;

const hash = bcrypt.hashSync(password, saltRounds);

console.log(hash); // $2b$10$Z8Z1Z1Z1Z1Z1Z1Z1Z1Z1Z
```

Importamos al proyecto la librería y creamos un texto de ejemplo, en este caso usaremos `1234`,

Después tenemos que indicar el número de rondas que aplicaremos, de normal se suele usar 10, pero podemos usar un número mayor, pero ten en cuenta, al mayor número de rondas, más tardará en generar el hash.

### Comprobar un hash

```js
const bcrypt = require('bcrypt');

const password = '1234';
const hash = '$2b$10$Z8Z1Z1Z1Z1Z1Z1Z1Z1Z1Z';

const isCorrect = bcrypt.compareSync(password, hash);

console.log(isCorrect); // true
```

En este caso sólo tenemos que indicar el string que queremos comprobar, y el hash que queremos comprobar, y nos devolverá un booleano indicando si el string es igual al hash.

Cómo puedes ver es una librería muy sencilla de utilizar, y nos permite almacenar las contraseñas de forma segura en nuestra base de datos, ya no tienes escusa para no utilizarla.
