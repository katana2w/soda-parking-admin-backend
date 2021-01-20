/**
 * Save line router;
 */

const express = require('express');
const router = express.Router();

const AllLinesController = require('../controllers/AllLines');
router.get('/', AllLinesController.getAllLinesFromDb);

module.exports = router;
