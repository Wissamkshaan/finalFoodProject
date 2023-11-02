const express = require('express');
const router = express.Router();
const foodsController = require('../controllers/foodsController');


const Food = require('../models/Food'); 

// defining foods route
router.get('/foods', async (req, res) => {
  try {
    const foods = await Food.find();
    res.render('landingPage', { foods });
  } catch (error) {
    
  }
});

module.exports = router;