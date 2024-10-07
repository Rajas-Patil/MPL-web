const express = require('express');
const { buyNow } = require('../controllers/orderController');
const router = express.Router();

router.post('/buy', buyNow);

module.exports = router;
