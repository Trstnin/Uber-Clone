const express = require('express');
const { registerCaptain, loginCaptain, logoutCaptain, getCaptainProfile } = require('../controllers/captain.controller.js');
const { validate,captainRegisterValidator, loginValidator } = require('../utils/validation.utils.js');
const { authCaptain } = require('../middlewares/auth.middleware.js');

const captainRoutes = express.Router();

captainRoutes.post("/register", validate(captainRegisterValidator),registerCaptain)
captainRoutes.post("/login", validate(loginValidator),loginCaptain)
captainRoutes.get('/profile',authCaptain,getCaptainProfile)
captainRoutes.get('/logout',authCaptain,logoutCaptain)


module.exports = captainRoutes