/**
 * Models
 */

const UserModel = require('../models/User');
const { comparePassword } = require("../utils/auth");

const login = async (email, password) => {

  const user = await UserModel.findOne({ email });
  if (!user) return null;

  const passwordCheck = await comparePassword(password, user.password);

  if (!passwordCheck) return null;
  return user;
};

module.exports = {
  login,
}
