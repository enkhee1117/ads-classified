var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// connecting to database:
require('./app_api/models/db')
// delete them later
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// view engine
app.set('view engine','ejs');
app.set('views',__dirname + '/views')
// static file
app.use(express.static(path.join(__dirname, 'public')));
// routers
app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
