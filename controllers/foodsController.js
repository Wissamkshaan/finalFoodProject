const mongoose = require('mongoose');



const Food = require('../models/Food');

// Display a list of all foods
const allFood = async (req, res, next) =>{
  try {
    const foods = await Food.find();
    res.render('landingPage', { foods });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

// Display details for an individual food item
const allFoodDetails = async (req, res, next) => {
  const foodId = req.params.id;
  try {
    const food = await Food.findById(foodId);
    if (!food) {
      res.status(404).send('Food not found');
    } else {
      res.render('foodDetails', { food });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
}




module.exports = allFood;
module.exports = allFoodDetails;