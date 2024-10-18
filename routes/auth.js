const express = require('express');
const router = express.Router();
const authController = require('../controllers/userController');

// Define your routes here
router.post('/SignIn', authController.login);

module.exports = router;  // Export the router, not 'app'
