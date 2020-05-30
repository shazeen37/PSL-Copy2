const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  //Get token fron header

  const token = req.header('x-auth-token');

  //check if no token
  if (!token) {
    return res.status(401).json({ msg: 'NO token, authorization denied' });
  }

  //verify token
  try {
    console.log('hello!');
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    req.user = decoded.user;
    console.log(req.user);
    console.log(req.body);
    console.log(req.file);
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
