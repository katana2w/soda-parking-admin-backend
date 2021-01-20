/**
 * Save line router;
 */

const express = require('express');
const router = express.Router();

const SaveLineController = require('../controllers/SaveLine');
router.post('/', SaveLineController.addLineToDB);

module.exports = router;
