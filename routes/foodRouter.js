const express = require('express');
const router = express.Router();
const foodController = require('../controllers/foodController');

// Define routes 
router.get('/foods', foodController.displayFoods);
router.post('/foods', foodController.createFood);
router.get('/foods/:id/edit', foodController.editFoodPage);
router.post('/foods/:id', foodController.updateFood);
router.get('/foods/:id/delete', foodController.deleteFood);
router.get('/add-to-cart/:id', foodController.addToCart);
router.get('/cart', foodController.displayCart);

module.exports = router;
