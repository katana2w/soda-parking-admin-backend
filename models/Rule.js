const {Schema, model} = require('mongoose');
const {RULES} = require('../constants');

const ruleSchema = new Schema({
    ruleName: {
        type: String,
        default: RULES.RULE_A,
        enum: [RULES.RULE_A, RULES.RULE_B, RULES.RULE_C],
        required: true,
        unique: true
    },
    ruleRedTo: {
        type: Number,
        required: true
    },
    ruleYellowFrom: {
        type: Number,
        required: true
    },
    ruleYellowTo: {
        type: Number,
        required: true
    },
    ruleGreenFrom: {
        type: Number,
        required: true
    }
}, {
    timestamps: true,
});

module.exports = model('Rule', ruleSchema);
