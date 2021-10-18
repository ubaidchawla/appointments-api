const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/services');

// routes
router.post('/', serviceController.create);
router.get('/:id', serviceController.search);
router.get('/', serviceController.searchbyQuery);
router.patch('/:id', serviceController.update);
router.delete('/:id', serviceController.delete);

module.exports = router;