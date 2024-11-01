const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'my_jwt_secret'

function auth(req, res, next) {
    const token = req.header('x-auth-token');

    //check for token
    if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

    try {
        //verify token
        const decoded = jwt.verify(token, JWT_SECRET);
        //add user from payload
        req.user = decoded;
        next();
    } catch (e) {
        res.status(400).json({ message: 'Token is not valid' });
    }
}

module.exports = auth;