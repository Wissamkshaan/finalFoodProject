
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

//authentication related libraries
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
mongoose.Promise = global.Promise

const { DATABASE_URL, PORT, JWT_KEY_SECRET } = require('../config') //JWT is a secret word that only exists on server, Nobody allowed to know otherwise they can replicate JWT
const User = require('../models/userModel');



//NEW
const sendNewUserForm = (req, res, next) => {

  let isLoggedIn = false

  if(req.cookies.access_token) {
      isLoggedIn = true
  } 
  res.render('newuser.ejs', {isLoggedIn})

}
// SEND LOGIN FORM
const sendLoginForm = (req, res, next) => {
    res.render('login.ejs', {});
  };

  //CREATE   
const createNewUser = async (req, res, next) => {
    try {
      const { firstName, lastName, email, password } = req.body;
  
      const userExists = await User.findOne({ email });
      if (userExists) {
        return res.status(400).send('Email already exists');
      }
  // hashing the password
      const encryptedPw = await bcrypt.hash(password, 12);
  // creating a user using the same info but with encrypted password that we created and posting it to the db
      const newUser = { firstName, lastName, email, password: encryptedPw };
      const usr = await User.create(newUser);
      
      // creating the token 
      const token = jwt.sign({ userId: usr.id, email: usr.email }, JWT_KEY_SECRET);
      
  // 
      return res.cookie('access_token', token).redirect('/users');
    } catch (error) {
      console.error('Error creating user:', error);
      return res.status(500).send('An error occurred while creating the user');
    }
  };
  
  // post login
  const login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
  
      console.log(`Email: ${email}, Password: ${password}`);
  
      const user = await User.findOne({ email });
  
      console.log(`User from database:`, user);
  
      if (!user) {
        return res.status(400).send('Email not found');
      }
  
      console.log('User Password:', user.password);
  
      const matched = await bcrypt.compare(password, user.password);
  
      console.log('Matched:', matched);
  
      if (!matched) {
        return res.status(400).send('Invalid password, please try again');
      }
  
      const token = jwt.sign({ userId: user.id, email: user.email }, JWT_KEY_SECRET);
  
      return res.cookie('access_token', token).redirect('/menu');
    } catch (error) {
      console.error('Login error:', error);
      return res.status(500).send('An error occurred during login');
    }
  };
  
  


module.exports = {
sendNewUserForm, 
createNewUser, 
sendLoginForm,
login, 

}