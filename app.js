require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// passport require (has to be always configured before database)
const passport = require('passport');
// connecting to database:
require('./app_api/models/db')
// requiring strategy which has be after database
require('./app_api/config/passport');
// routers
var userRouter = require('./app_api/routes/user');
var adRouter = require('./app_api/routes/ad');

var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// view engine
app.set('view engine','ejs');
app.set('views',__dirname + '/views')
// static file
app.use(express.static(path.join(__dirname, 'static')));
app.use(express.static(path.join(__dirname, 'public/dist/public')));
// --------------passport needs to be initialized after static routes-----------------//
app.use(passport.initialize());
// access control headers
app.use('/api', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});
// routes
app.use('/user', userRouter);
app.use('/ad', adRouter);

module.exports = app;
