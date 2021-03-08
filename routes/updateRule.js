/**
 * Save line router;
 */

const express = require('express');
const router = express.Router();

const UpdateRuleController = require('../controllers/UpdateRule');
router.put('/', UpdateRuleController.updateRuleInDB);

module.exports = router;
