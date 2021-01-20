const { Schema, model } = require('mongoose');
const { ROLE } = require('../constants');

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    index: true,
    unique: true,
    required: true,
    lowercase: true,
  },
  role: {
    type: String,
    default: ROLE.MANAGER,
    enum: [ROLE.ADMIN, ROLE.MANAGER],
  },
  password: {
    type: String,
  },
}, {
  timestamps: true,
});

module.exports = model('User', userSchema);
