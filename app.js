const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const schedule = require('node-schedule');

const userAuthRouter = require('./routes/auth');
const indexRouter = require('./routes/index');
const saveLineRouter = require('./routes/saveLine');
const saveRuleRouter = require('./routes/saveRule');
const updateLineRouter = require('./routes/updateLine');
const updateRuleRouter = require('./routes/updateRule');
const removeLineRouter = require('./routes/removeLine');
const removeRuleRouter = require('./routes/removeRule');
const allLinesRouter = require('./routes/allLines');
const allRulesRouter = require('./routes/allRules');
const allLinesLatLngRouter = require('./routes/allLatLngLines');
const allScannersRouter = require('./routes/allScanners');
const checkScannersChanges = require('./utils/checkScannersChanges');
require('./database/connection');

const app = express();

// const job = schedule.scheduleJob('25 * * * *', checkScannersChanges);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors());
app.use('/', indexRouter);
app.use('/api/users/authenticate', userAuthRouter);

app.use('/api/save-line', saveLineRouter);
app.use('/api/update-line', updateLineRouter);
app.use('/api/remove-line', removeLineRouter);
app.use('/api/all-lines', allLinesRouter);
app.use('/api/all-lines-lat-lng', allLinesLatLngRouter);
app.use('/api/all-scanners', allScannersRouter);
// rules api
app.use('/api/save-rule', saveRuleRouter);
app.use('/api/remove-rule', removeRuleRouter);
app.use('/api/update-rule', updateRuleRouter);
app.use('/api/all-rules', allRulesRouter);

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
