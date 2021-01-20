/**
 * Apis router;
 */

const express = require('express');
const router = express.Router();

const ApiController = require('../controllers/Api');

router.get('/', ApiController.getAll);
router.put('/:id', ApiController.updateById);

module.exports = router;
