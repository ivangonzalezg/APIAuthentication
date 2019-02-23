const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true)
mongoose.connect('mongodb://localhost/APIAuthentication', { useNewUrlParser: true });

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(require('./routes/users'));

const port = process.env.PORT || 5000;
app.listen(port);
console.log('Server listening: ' + port);