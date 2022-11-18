const express = require('express');
const genericRoutes = express.Router();

const user = require('./user');
const login = require('./login');
const product = require('./product');

genericRoutes.use('/user', user);
genericRoutes.use('/login', login);
genericRoutes.use('/product', product);

module.exports = genericRoutes;