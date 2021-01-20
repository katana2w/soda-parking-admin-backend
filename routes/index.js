const express = require('express');
const router = express.Router();

/**
 * Domain routers
 */

const authRouter = require('./auth');
const apisRouter = require('./apis');

router.use(authRouter);
router.use('/api/api', apisRouter);

/**
 * Basic routes
 */

module.exports = router;
