const { Schema, model } = require('mongoose');

const apiSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  enabled: {
    type: Boolean,
    default: true,
  }
}, {
  timestamps: true,
});

module.exports = model('Api', apiSchema);
