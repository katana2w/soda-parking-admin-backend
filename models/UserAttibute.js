const { Schema, model } = require('mongoose');

const userDeviceAttSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  apiId: {
    type: Schema.Types.ObjectId,
    ref: 'Api',
  },
  deviceId: {
    type: Schema.Types.ObjectId,
    ref: 'Device',
  },
  attList: {
    type: Schema.Types.Mixed,
  },
}, {
  timestamps: true,
});

module.exports = model('UserDeviceAtt', userDeviceAttSchema);
