const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');

// routes
router.post('/signup', userController.create);
router.post('/signin/', userController.login);
router.patch('/:id', userController.update);

module.exports = router;