var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//MongoDB ODM
var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:admin@ds151070.mlab.com:51070/micro_referendum');


var index = require('./routes/index');

var app = express();

app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', index);

module.exports = app;