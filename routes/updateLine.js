/**
 * Save line router;
 */

const express = require('express');
const router = express.Router();

const UpdateLineController = require('../controllers/UpdateLine');
router.put('/', UpdateLineController.updateLineInDB);

module.exports = router;
