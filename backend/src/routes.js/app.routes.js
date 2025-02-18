const express = require('express');
const userRoutes = require('./user.routes');
const captainRoutes = require('./captain.routes');

const appRouter = express.Router();

appRouter.use("/users", userRoutes);
appRouter.use("/captain", captainRoutes)

module.exports = appRouter