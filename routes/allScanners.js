/**
 * All scanners router;
 */

const express = require('express');
const router = express.Router();

const AllScannersController = require('../controllers/AllScanners');
router.get('/', AllScannersController.getAllScanners);

module.exports = router;
