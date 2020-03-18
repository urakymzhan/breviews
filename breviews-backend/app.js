var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

// Database
var mongo = require('mongodb');
var monk = require('monk');
var dbUrl = "mongodb+srv://Ulan:123@users-rsup3.mongodb.net/breviews?retryWrites=true&w=majority";
var db = monk(dbUrl);

// TODO: Switch to mongoose 
// var mongoose = require('mongoose');
// mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Note that Express auto-creates a /users route 
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// enalbe all CORS resquests
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Make our db accessible to our router
app.use(function(req,res,next){
    req.db = db;
    next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
