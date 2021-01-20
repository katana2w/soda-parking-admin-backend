const { Schema, model } = require('mongoose');

const deviceSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  apiId: {
    type: Schema.Types.ObjectId,
    ref: 'Api',
  },
  attributes: {
    type: Schema.Types.Mixed,
  }
}, {
  timestamps: true,
});

module.exports = model('Device', deviceSchema);
