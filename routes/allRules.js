/**
 * Save line router;
 */

const express = require('express');
const router = express.Router();

const AllRulesController = require('../controllers/AllRules');
router.get('/', AllRulesController.getAllRulesFromDb);

module.exports = router;
