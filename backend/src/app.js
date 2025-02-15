require('dotenv').config()

const express = require("express")
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const userRoutes = require('./routes.js/user.routes');
const appRouter = require('./routes.js/app.routes');



app.use(cors());
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}));
 

app.use('/api', appRouter)


module.exports = app