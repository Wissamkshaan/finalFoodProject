
const DATABASE_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.6xvvg5e.mongodb.net/finalFoodProject?retryWrites=true&w=majority`;

const PORT = process.env.PORT || 8080;
const JWT_KEY_SECRET = process.env.JWT_KEY_SECRET; // Json Web Token secret we keep in config.

module.exports = { DATABASE_URL, PORT, JWT_KEY_SECRET }; 
