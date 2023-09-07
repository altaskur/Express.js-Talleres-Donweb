const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const userRouter = require('../router/users');
const { dbConnection } = require('../db/connection');

const app = express();

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dbConnection();

app.use('/users', userRouter);

module.exports = app;
