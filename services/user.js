const { encryptPassword } = require("../utils/auth");

const UserModel = require('../models/User');

const create = async (user) => {
  return UserModel.create(
    {
      ...user,
      password: encryptPassword(user.password),
    },
  );
};

module.exports = {
  create,
}
