const express = require('express');
const { registerUser, loginUser } = require('../controllers/user.controller');
const { registerValidator, validate, loginValidator } = require('../utils/validation.utils');

const userRoutes = express.Router();

userRoutes.post('/register',validate(registerValidator),registerUser)
userRoutes.post('/login',validate(loginValidator),loginUser)



module.exports = userRoutes