/**
 * Save line router;
 */

const express = require('express');
const router = express.Router();

const AllLinesLatLngController = require('../controllers/AllLatLngLines');
router.get('/', AllLinesLatLngController.getAllLinesLatLngFromDb);

module.exports = router;
