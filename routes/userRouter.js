const express = require('express')
const router = express.Router()

//const {User} = require('../models/userModel')//A.T. it is in authController

const {    
    sendNewUserForm,
    createNewUser,
    sendLoginForm,
    login,
   
  } = require("../controllers/authController");



//GET - all users
router.get("/", (req, res) => {
  res.send("Hello from Get ALL USERS!");
});

//NEW renders new user regist-n form by sendNewUserForm function from authController.
router.get("/new", sendNewUserForm); //this for sending the form (in ejs)

//CREATE user registration and account creation
router.post("/signup", createNewUser);//this is where the the data is going to be sent to create a user

//LOGIN - GET user login form 
router.get("/login", sendLoginForm);


//LOGIN - POST sends the login cred-s (email and password) securely to server for authentication.
router.post("/login", login);



module.exports = router;