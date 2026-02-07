const jwt = require('jsonwebtoken')
const secretKey = 'rahasiaPassword';

const generateToken = (user) => {
    return jwt.sign(user, secretKey, { expiresIn: '1h' });
};

const verifyToken = (token) => {
    try {
        return jwt.verify(token, secretKey);
    } catch {
        return null;
    }
};

module.exports = { generateToken, verifyToken }; 