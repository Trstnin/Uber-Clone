const express = require('express');
const { registerUser } = require('../controllers/user.controller');
const { registerValidator, validate } = require('../utils/validation.utils');

const userRoutes = express.Router();

userRoutes.post('/register',validate(registerValidator),registerUser)


module.exports = userRoutes