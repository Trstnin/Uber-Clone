const express = require('express');
const userRoutes = require('./user.routes');

const appRouter = express.Router();

appRouter.use("/users", userRoutes);

module.exports = appRouter