const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const ejs = require('ejs');
const PORT  = 3000;
require('./db/connection.js');

// import routers
const foodsRouter = require('./routes/foodRouter');
const ordersRouter = require('./routes/orderRouter');
const userRouter = require('./routes/userRouter');
const checkauth = require('./middleware/checkauth.js');


// setup Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(cookieParser()); 
app.use(checkauth);
app.use('/users', userRouter);
app.use('/foods', foodsRouter);
app.use('/orders', ordersRouter);

// HTTP request for testing the app
// app.get('/', (req, res) =>{
//   res.send('i am almost there in this app');
// });





app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
