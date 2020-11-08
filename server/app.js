//import DB onnection
require('./db/config/index');
const express = require('express'),
app = express(); //initializes express


//import the user router
const userRouter = require('./routes/users')
const exercisesRouter = require('./routes/exercises')


//Middleware > this accepts all incoming JSON objects > anythong under the middleware will allow json objects to be received within the request
app.use(express.json());

//this is the route you will use to get the info in users
app.use('/api/users', userRouter);
app.use('/api/exercises', exercisesRouter);



module.exports=app; //exports the entire initialized express
