const express = require('express');
const router = express.Router();
const partnerController = require('../controllers/partners');

router.patch('/:id', partnerController.update);

module.exports = router;