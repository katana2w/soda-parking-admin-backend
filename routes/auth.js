/**
 * Auth router;
 */

const express = require('express');
const router = express.Router();

const AuthController = require('../controllers/Auth');

router.post('/', AuthController.login);

module.exports = router;
