/**
 * Save line router;
 */

const express = require('express');
const router = express.Router();

const RemoveLineController = require('../controllers/RemoveLine');
router.post('/', RemoveLineController.removeLineFromDB);

module.exports = router;
