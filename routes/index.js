const express = require('express');
const router = express.Router();

/**
 * Domain routers
 */

const authRouter = require('./auth');

router.use(authRouter);

/**
 * Basic routes
 */

module.exports = router;
