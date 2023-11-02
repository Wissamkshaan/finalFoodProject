const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  price: Number,
});

const orderSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true,
  },
  orderItems: [orderItemSchema],
  totalAmount: {
    type: Number,
    required: true,
  },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
