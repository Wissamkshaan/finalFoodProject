const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ejs = require('ejs');
const path = require('path');
require('./db/connection.js');
const PORT  = 3000;


// import routers
const foodsRouter = require('./routes/foodRouter');
// const ordersRouter = require('./routes/orderRouter');




// setup Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// home
app.get('/',(req, res)=>{
  res.render('aboutUs');
});


app.use('/foods', foodsRouter);


const foodRouter = require('./routes/foodRouter');
app.use('/', foodRouter);









app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
