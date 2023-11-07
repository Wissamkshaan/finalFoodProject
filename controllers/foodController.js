const express = require('express');
const mongoose = require('mongoose');
const Food = require('../models/Food');



const cart = []; // Initialize the cart array. items from food page will be fetched from db and stored in an array
// all food created will be showing as a list in food page 
const displayFoods = async (req, res) => {
  try {
    const foods = await Food.find();
    res.render('foodPage', { foods });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

//creat 
const createFood = async (req, res) => {
  try {
    const { name, category, price, description } = req.body;
    await Food.create({ name, category, price, description });
    res.redirect('/foods');
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

// edit
const editFoodPage = async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);
    res.render('editFood', { food });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};


const updateFood = async (req, res) => {
  try {
    const { name, category, price, description } = req.body;
    await Food.findByIdAndUpdate(req.params.id, { name, category, price, description });
    res.redirect('/foods');
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

//delete
const deleteFood = async (req, res) => {
  try {
    await Food.findByIdAndDelete(req.params.id);
    res.redirect('/foods');
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};


// here am adding food items to the cart and that will redirct me to another page
const addToCart = async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);

    const cartItem = cart.find((item) => item.foodId === food._id);

    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      cart.push({
        foodId: food._id,
        foodName: food.name,
        price: food.price,
        quantity: 1,
       
      });
    }
    res.redirect('/cart');
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

const displayCart = (req, res) => {
  res.render('cart', { cartItems: cart });
};

module.exports = {
displayFoods,
createFood,
editFoodPage,
updateFood,
deleteFood,
addToCart,
displayCart
}