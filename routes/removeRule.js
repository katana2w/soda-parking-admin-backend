/**
 * Save line router;
 */

const express = require('express');
const router = express.Router();

const RemoveRuleController = require('../controllers/RemoveRule');
router.post('/', RemoveRuleController.removeRuleFromDB);

module.exports = router;
