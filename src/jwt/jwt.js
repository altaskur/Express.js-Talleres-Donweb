const jws = require('jsonwebtoken');
require('dotenv').config();

const generateToken = (email, name) => {
  const payload = { email, name };
  const options = { expiresIn: '15m' };

  const token = jws.sign(payload, process.env.JWT_SECRET, options);
  return token;
};

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ error: 'No token provided' });

  try {
    const decoded = jws.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    return next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ error: 'Invalid token' });
  }
};

module.exports = { generateToken, verifyToken };
