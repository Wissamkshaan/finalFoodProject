const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/ordersController');
const Order = require('../models/Order');

router.get('/orders', async (req, res) => {
    try {
      const orders = await Order.find();
      res.render('userPage', { orders });
    } catch (error) {
      
    }
  });
  
  module.exports = router;