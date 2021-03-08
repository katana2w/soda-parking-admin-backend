/**
 * Save line router;
 */

const express = require('express');
const router = express.Router();

const SaveRuleController = require('../controllers/SaveRule');
router.post('/', SaveRuleController.addRuleToDB);

module.exports = router;
