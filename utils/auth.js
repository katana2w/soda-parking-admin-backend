const bcrypt = require('bcrypt');

const encryptPassword = value => bcrypt.hashSync(value, bcrypt.genSaltSync(8), null);
const comparePassword = (password, hash) => bcrypt.compare(password, hash);

module.exports = {
  encryptPassword,
  comparePassword,
};
