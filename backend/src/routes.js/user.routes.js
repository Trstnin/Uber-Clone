const express = require('express');
const { registerUser, loginUser, getUserProfile, logoutUser } = require('../controllers/user.controller');
const { registerValidator, validate, loginValidator } = require('../utils/validation.utils');
const authUser = require('../middlewares/auth.middleware');

const userRoutes = express.Router();

userRoutes.post('/register',validate(registerValidator),registerUser)
userRoutes.post('/login',validate(loginValidator),loginUser)
userRoutes.get('/profile', authUser ,getUserProfile)
userRoutes.get('/logout', authUser ,logoutUser)






module.exports = userRoutes