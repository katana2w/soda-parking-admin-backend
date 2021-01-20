const { Schema, model } = require('mongoose');

const userApiSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  apiId: {
    type: Schema.Types.ObjectId,
    ref: 'Api',
  },
}, {
  timestamps: true,
});

module.exports = model('UserApi', userApiSchema);
