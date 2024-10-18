// const express = require('express');
// const { register, login } = require('../controllers/userController');
// const router = express.Router();

// router.post('/register', register);
// router.post('/login', login);

// module.exports = router;



const express = require('express');
const router = express.Router();
const authController = require('../controllers/userController.js');

// POST route for handling login
router.post('/SignIn', authController.login);

module.exports = router;
