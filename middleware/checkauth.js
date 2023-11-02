const jwt = require('jsonwebtoken');
const { JWT_KEY_SECRET } = require('../config');

const checkauth = (req, res, next) => {
    try {
        const token = req.cookies.access_token;

        if (req.path === '/users/new') {
            return next(); 
        }

        if (!token) {
            console.log('no token found, authentication failed');
            return res.redirect('/users/login');
        }

        const decodedToken = jwt.verify(token, JWT_KEY_SECRET);
        req.userId = decodedToken.userId;
        next();
    } catch (error) {
        return res.status(401).send('Authentication failed');
    }
};

module.exports = checkauth;
