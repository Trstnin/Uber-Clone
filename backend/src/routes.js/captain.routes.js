const express = require('express');
const { registerCaptain } = require('../controllers/captain.controller.js');
const { validate,captainRegisterValidator } = require('../utils/validation.utils.js');

const captainRoutes = express.Router();

captainRoutes.post("/register", validate(captainRegisterValidator),registerCaptain)

module.exports = captainRoutes