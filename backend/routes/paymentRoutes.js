const express = require('express');
const { processStripePayment, processPaypalPayment } = require('../controllers/paymentController');
const router = express.Router();

router.post('/payment/stripe', processStripePayment);
router.post('/payment/paypal', processPaypalPayment);

module.exports = router;
