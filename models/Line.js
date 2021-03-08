const { Schema, model } = require('mongoose');
const {RULES} = require('../constants');

const lineSchema = new Schema({
  lineCoordinates: {
    start: {
      lat: {
        type: Number,
        required: true
      },
      lng: {
        type: Number,
        required: true
      }
    },
    end: {
      lat: {
        type: Number,
        required: true
      },
      lng: {
        type: Number,
        required: true
      }
    }
  },
  lineName: {
    type: String,
    index: true,
    unique: true,
    required: true,
    lowercase: true,
  },
  ruleName: {
    type: String,
    default: RULES.RULE_A,
    enum: [RULES.RULE_A, RULES.RULE_B, RULES.RULE_C],
    required: true
  },
  lineId: Schema.Types.ObjectId,
  lineTolerance: {
    type: Number,
    required: true
  },
  linePoly: Schema.Types.Mixed,
  lineScanners: Schema.Types.Mixed,
  marker1: Schema.Types.Mixed,
  marker2: Schema.Types.Mixed,
}, {
  timestamps: true,
});

module.exports = model('Line', lineSchema);
