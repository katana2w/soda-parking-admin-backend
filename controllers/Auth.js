const jwt = require('jsonwebtoken');

/**
 * Services
 */

const AuthService = require('../services/auth');

const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).send({ message: 'Email and password is required fields' });

  const user = await AuthService.login(username, password);
  if (!user) return res.status(400).send({ message: 'Password or email incorrect' });

  const { role, id } = user;
  const token = jwt.sign({ username, role }, 'SECRET', { expiresIn: '30 days' });
  return res.send({ message: 'Ok', token, role, id });
};

module.exports = {
  login,
};
