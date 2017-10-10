const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');


const app = express();

const users = require('./routes/users')

const port = 3000;

// CORS middleware
// for allowing req from different servers
app.use(cors());


// body parser middleware.
app .use(bodyParser.json());


app.use('/users', users);

app.get('/',(req, res)=>{
	res.send('Invalid EndPoint');
})

app.listen(port, ()=>{
	console.log('Server have started on port '+port);
});