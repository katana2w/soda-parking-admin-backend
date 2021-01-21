const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const userAuthRouter = require('./routes/auth');
const indexRouter = require('./routes/index');
const saveLineRouter = require('./routes/saveLine');
const updateLineRouter = require('./routes/updateLine');
const removeLineRouter = require('./routes/removeLine');
const allLinesRouter = require('./routes/allLines');
const allLinesLatLngRouter = require('./routes/allLatLngLines');
const allScannersRouter = require('./routes/allScanners');
require('./database/connection');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'public/dashboard'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(__dirname + '/public/dashboard'));

app.use(cors());
app.use('/', indexRouter);
app.use('/api/users/authenticate', userAuthRouter);
app.use('/api/save-line', saveLineRouter);
app.use('/api/update-line', updateLineRouter);
app.use('/api/remove-line', removeLineRouter);
app.use('/api/all-lines', allLinesRouter);
app.use('/api/all-lines-lat-lng', allLinesLatLngRouter);
app.use('/api/all-scanners', allScannersRouter);

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
  console.log('error', res);
  // res.render('error');
  return res.send({ message: 'Ok', err });
});

module.exports = app;
