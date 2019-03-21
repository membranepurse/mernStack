const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const items = require('./routes/api/items');

//bodyParser middleware
app.use(bodyParser.json());

//database config, calls error for some reason so exlcuded key.js
//const db = require('./config/key').mongoURI;

mongoose.connect('mongodb+srv://sbrown:vikings1@mernshopping-tiocg.mongodb.net/test?retryWrites=true',
{useNewUrlParser: true})
  .then(() => console.log('mongodb connected...'))
  .catch(err => console.log(err));

//use routes
app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('server started on port ${port}'));
