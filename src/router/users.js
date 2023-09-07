const express = require('express');
const { getUsers, singUpUser, singInUser } = require('../controller/users');
const { verifyToken } = require('../jwt/jwt');

const router = express.Router();

router.get('/', verifyToken, getUsers);
router.post('/', singUpUser);
router.post('/login', singInUser);

module.exports = router;
