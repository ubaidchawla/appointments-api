const express = require('express');
const router = express.Router();
const locationController = require('../controllers/partnerLocations');

// routes
router.post('/', locationController.create);
router.get('/', locationController.searchbyQuery);
router.patch('/:id', locationController.update);
router.delete('/:id', locationController.delete);

module.exports = router;