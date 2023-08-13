# Ejemplo de aplicaciones con Express

## Ejemplo de una aplicación de Express

```js
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Hello World');
});

app.set('port', 3000);

app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
```

## Ejemplo de Curd con Express

```js
const express = require('express');
const app = express();
const bd = require('./db');

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Hello World');
});

app.get('/users',async (req, res) => {
  try{
    const users = await bd.getUsers();
    res.status(200).json(users);
  } catch(err){
    res.status(500).json({'error': 'Error al obtener los usuarios'});
  }
  const users = bd.getUsers();
  res.status(200).json(users);
});

app.get('/users/:id', async (req, res) => {
  try{
    const user = await bd.getUser(req.params.id);
    res.status(200).json(user);
  }catch(err){
    res.status(404).json({'error': 'User not found'});
  }
});

app.post('/users', async (req, res) => {
  try{
    const user = await bd.createUser(req.body);
    res.status(200).json(user);
  }catch(err){
    res.status(400).json({'error': 'Error al crear el usuario'});
  }

});

app.put('/users/:id', async (req, res) => {
  try{
    const user = await bd.updateUser(req.params.id, req.body);
    res.status(200).json(user);
  }catch(err){
    res.status(400).json({'error': 'Error al actualizar el usuario'});
  }
});

app.delete('/users/:id', async (req, res) => {
  try{
   await bd.deleteUser(req.params.id);
    res.status(200).send(`User ${req.params.id} Deleted`);
  }catch(err){
    res.status(400).json({'error': 'Error al eliminar el usuario'});
  }
});

app.set('port', 3000);

app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
```

## Ejemplo del uso de Router

```js
// router/users.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send('Hello World');
});
```

```js
// main.js
const express = require('express');
const app = express();
const usersRouter = require('./router/users');

app.use(express.json());

app.use('/users', usersRouter);

app.set('port', 3000);

app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
```

## Ejemplo de un Crud con Router y Controller

```js
// db.js
const pgp = require('pg-promise')();
require('dotenv').config();

const { env } = process;
let dbInstance = null;

const connectionString = `postgres://${env.DB_USER}:${env.DB_PASSWORD}@${env.DB_HOST}:${env.DB_PORT}/${env.DB_DATABASE}?ssl=true&sslrootcert=${env.DB_CERT}`;

const getDatabaseInstance = () => {
  if (!dbInstance) {
    dbInstance = pgp(connectionString);
  }
  return dbInstance;
};

module.exports = {
  db: getDatabaseInstance(),
};
```

```js
// .env
DB_USER=postgres
DB_PASSWORD=postgres
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=express
DB_CERT=certs/ca-certificate.crt
```

```js
//db/users.js
const { db } = require('./index');

const getUsers = () => db.any('SELECT * FROM users');

const getUser = (id) => db.one('SELECT * FROM users WHERE id = $1', id);

const createUser = (user) => db.one('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [user.name, user.email]);

const updateUser = (id, user) => db.one('UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *', [user.name, user.email, id]);

const deleteUser = (id) => db.none('DELETE FROM users WHERE id = $1', id);

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
};
```

```js
// controllers/users.js
const bd = require('../db');
const bdUsers = require('../db/users');

const getUsers = async (req, res) => {
  try{
    const users = await bdUsers.getUsers();
    res.status(200).json(users);
  } catch(err){
    res.status(500).json({'error': 'Error al obtener los usuarios'});
  }
};

const getUser = async (req, res) => {
  try{
    const user = await bdUsers.getUser(req.params.id);
    res.status(200).json(user);
  }catch(err){
    res.status(404).json({'error': 'User not found'});
  }
};

const createUser = async (req, res) => {
  try{
    const user = await bdUsers.createUser(req.body);
    res.status(200).json(user);
  }catch(err){
    res.status(400).json({'error': 'Error al crear el usuario'});
  }

};

const updateUser = async (req, res) => {
  try{
    const user = await bdUsers.updateUser(req.params.id, req.body);
    res.status(200).json(user);
  }catch(err){
    res.status(400).json({'error': 'Error al actualizar el usuario'});
  }
};

const deleteUser = async (req, res) => {
  try{
   await bdUsers.deleteUser(req.params.id);
    res.status(200).send(`User ${req.params.id} Deleted`);
  }catch(err){
    res.status(400).json({'error': 'Error al eliminar el usuario'});
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
};
```

```js
// main.js
const express = require('express');
const app = express();
const usersRouter = require('./router/users');

app.use(express.json());

app.use('/users', usersRouter);

app.set('port', 3000);

app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
```

```js
// router/users.js
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

router.get('/', usersController.getUsers);
router.get('/:id', usersController.getUser());
router.post('/', usersController.createUser);
router.put('/:id', usersController.updateUser);
router.delete('/:id', usersController.deleteUser);

module.exports = router;
```
