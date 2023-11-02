const mongoose = require('mongoose');

const Order = require('../models/Order');

// Display a list of all orders
const allOrders = async (req, res, next) =>{
  try {
    const orders = await Order.find();
    res.render('userPage', { orders });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

// Display details for an individual order
const getOrderDetails = async (req, res, next) =>{
  const orderId = req.params.id;
  try {
    const order = await Order.findById(orderId);
    if (!order) {
      res.status(404).send('Order not found');
    } else {
      res.render('orderDetails', { order });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

module.exports = allOrders;
module.exports = getOrderDetails;