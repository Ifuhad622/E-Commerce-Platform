const express = require('express');
const { getCustomers, createCustomer } = require('../controllers/customerController');
const router = express.Router();

router.get('/customers', getCustomers);
router.post('/customers', createCustomer);

module.exports = router;
