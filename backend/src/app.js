require('dotenv').config()

const express = require("express")
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser')




const appRouter = require('./routes.js/app.routes');



app.use(cors());
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
 

app.use('/api', appRouter)


module.exports = app