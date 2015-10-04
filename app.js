var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var engine = require('ejs-locals');

var index = require('./routes/index');
var employee = require('./routes/employee');
var employer = require('./routes/employer');
var search = require('./routes/search');
var auth = require('./routes/auth');
var api = require('./routes/api');
var api_employer = require('./routes/api_employer');
var api_employee = require('./routes/api_employee');
var app = express();

// view engine setup
// set the view engine to ejs
//app.engine('html', require('ejs').renderFile);


//app.set('view engine', 'html');
//app.engine('html', swig.renderFile);
app.engine('ejs', engine);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
//app.engine('html', require('ejs').renderFile);
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.json());  

app.use('/', index);
app.use('/employee', employee);
app.use('/employer', employer);
app.use('/auth', auth);
app.use('/search', search);
app.use('/api', api_employee);
app.use('/api', api_employer);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;