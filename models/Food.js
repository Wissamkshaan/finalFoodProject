const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: String,
  price: {
    type: Number,
    required: true,
  },
  description: String,
});

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;
