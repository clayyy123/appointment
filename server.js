const express = require('express');
const server = express();
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const PORT = 3001;
const MONGOD_URI = 'mongodb://localhost:27017/appointments';

//middleware
server.use(logger('dev'));
server.use(bodyParser.json());

mongoose.connect(
  `${MONGOD_URI}`,
  { useNewUrlParser: true },
  err => {
    console.log('mongoose running' || err);
  }
);
server.listen(`${PORT}`, err => {
  console.log(`server running on ${PORT}` || err);
});
