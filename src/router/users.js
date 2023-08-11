const express = require('express');
const { getUsers } = require('../controller/users');

const router = express.Router();

router.use('/', getUsers);

module.exports = router;
